const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const dirTree = require('directory-tree');
const fs = require('fs');
const matter = require('gray-matter');
const yaml = require("js-yaml");


module.exports = function(eleventyConfig) {
	const inputDir = 'src/content';

	eleventyConfig.addPassthroughCopy({'src/assets' : '/'});

	eleventyConfig.addLayoutAlias('default', 'default.liquid');
	eleventyConfig.addLayoutAlias('home', 'home.liquid');
	eleventyConfig.addLayoutAlias('raw', 'raw.liquid');

	// Adds custom attributes to generated code tags
	// (you can also add to the generated pre tags)
	eleventyConfig.addPlugin(syntaxHighlight, {
		codeAttributes: {
			class: 'js-code-content',
		}
	});

	eleventyConfig.addShortcode("table", function(file, page) {
		const md = new markdownIt();
		const dataDir = [...page.inputPath.split('/')];
		dataDir.pop();
		const jsonFile = fs.readFileSync(`${dataDir.join('/')}/${file}.json`, 'utf8');
		const data = JSON.parse(jsonFile);

		const caption = `\t<caption>${data.tableName}</caption>`;

		const tableHead = () => {
			let thead = `\t<thead>\n\t\t<tr>\n`;
			data.headings.forEach(item => {
				thead += `\t\t\t<th width="${item.width}">${item.name}</th>\n`;
			});
			thead += '\t\t</tr>\n\t</thead>';
			return thead;
		}

		const tableBody = () => {
			let tbody = '\t<tbody>\n';

			for (let i = 0; i < data.rows.length; i++) {
				let keys = Object.keys(data.rows[i])

				tbody += `\t\t<tr>\n`;

				keys.forEach(key => {
					tbody += `\t\t\t<td>${md.renderInline(data.rows[i][key])}</td>\n`;
				});

				tbody += '\t\t</tr>\n';
			}

			tbody += '\t</tbody>';
			return tbody;
		}

		const render = `<table>\n${caption}\n${tableHead()}\n${tableBody()}\n</table>`;

		return render;
	});

	eleventyConfig.addGlobalData('navigation', function() {
		const collectionDirectory = `${inputDir}/docs`
		const dirCollection = dirTree(collectionDirectory, {attributes: ['size','type','extension'], extensions: /\.(md|html)$/  });

		const addOrderToData = (data) => {
			if (data.type === 'file') {
				const str = fs.readFileSync(data.path, 'utf8');
				const frontmatter = matter(str).data;
				data.permalink = data.path.replace(inputDir, '');
				data.index = (data.name.replace(data.extension, '') === 'index') ? true : false;
				data.title = (frontmatter.title) ? frontmatter.title : data.name;
				data.order = (frontmatter.order) ? frontmatter.order : 100000;
			}
			if (data.type === 'directory') {
				data.order = 0;
				data.children.forEach(child => {
					if (child.name.replace(child.extension, '') === 'index') {
						const childString = fs.readFileSync(child.path, 'utf8');
						const childMatter = matter(childString).data;
						data.permalink = data.path.replace(inputDir, '');
						data.index = (data.name.replace(data.extension, '') === 'index') ? true : false;
						data.title = (childMatter.title) ? childMatter.title : child.name;
						data.order = (childMatter.order) ? childMatter.order : 100000;
					}
				});
			}
			if (data.children) {
				data.children.forEach(child => {
					addOrderToData(child)
				});
			}
			return data;
		}

		// New Data Object with the `order` and `name`
		const newData = addOrderToData(dirCollection);

		// Sorts the data object by `order`
		const sortData = (a,b) => {
			if (a.order < b.order) {
				return -1;
			}
			if (a.order > b.order) {
				return 1;
			}
			return 0;
		}

		return (newData.children).sort(sortData);
	});

	// Markdown overrides:
	// all heading levels 2-6 will automatically be given
	// an id that can be used for jumplink href's
	let markdownLibrary = markdownIt({
		html: true,
		breaks: false,
		linkify: true
	}).use(markdownItAnchor, {
		tabIndex: false,
		uniqueSlugStartIndex: 1,
		level: [2, 3, 4, 5, 6],
		permalink: markdownItAnchor.permalink.headerLink({
			class:"cmp-page-link",
			safariReaderFix: true
		})
	});

	eleventyConfig.setLibrary("md", markdownLibrary);
	eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

	return {
		dir: {
			htmlTemplateEngine: "liquid",
			input: inputDir,
			output: "dist",
			includes: "../partials",
			layouts: "../layouts"
		}
	}
};
