---
title: Documentation
order: 4
---

Documentation is one of the most important parts of any design system. It provides essential information about the use and development of the system and its components. All documentation in Propulsion should be placed in the `src/docs` directory as a text file with the Markdown extension `.md`. The text files in the `src/docs` directory are used to generate the side toolbar navigation, so there is essential metadata that must be present in each file.

### Front Matter

In Markdown files, there is a common metadata format known as front matter. The front matter consists of key-value pairs in YAML format, all between starting and ending lines of three consecutive hyphens (`---`). It should be noted that YAML is a white-space sensitive syntax that requires 2 spaces for indentation.

In the following code block, a sample Markdown front matter block is provided. Please note that the Markdown file must start with this front matter for it to be rendered as metadata, and not content. The first line is the initiating set of 3 consecutive hyphens for the front matter. The second line is a key called `title`, followed by a colon (`:`), then the value for this `title` is defined as `My Doc Title`. The third line follows a similar format for a date associated with this file. Lastly, the closing set of 3 consecutive hyphens ends the front matter segment. Any text after this closing set of hyphens will be rendered as HTML content by the build process.

```markdown
---
title: My Doc Title
date: 2023-10-23
---

Content of the documentation here.
```

### File and Folder Naming

There are two rules to follow when it comes creating files and folders within the `src/docs` directory:

1. Any folder must have a file named `index.md`. This will be the rendered HTML file for that directory’s top-level file. For example: `src/docs/button/index.md` will have a URL path of `/docs/button` in the build.
1. Do not have either folders or files with the same name in the same directory level as these will conflict. For example, if there is a `button.md` file and a sibling folder called `button`, both would try to write to the same output file, and you'll receive a `DuplicatePermalinkOutputError`.

### Documentation Types

Documentation paired with components is the driving force of Propulsion. The combination of these two ingredients create Propulsion’s unique development and documentation environment. In order to leverage the power of this tool, it's important to know that there are two types of documentation in Propulsion: standard docs and component docs.

#### Standard Docs

Standard docs are documentation that does not have a connected, or related component attached to it. This type of documentation is rendered as a single page without the additional interface that component docs provides. These kinds of docs could include page- or directory-level information.

##### Standard Docs Front Matter

<dl>
	<dt>title</dt>
	<dd>The value of the title will be displayed at the top of the page and in the side toolbar navigation.</dd>
	<dt>order (optional)</dt>
	<dd>This value is a positive whole number which dictates the order it is ranked in the side toolbar navigation.</dd>
</dl>

The following is a sample of what the front matter block of standard docs may contain:

```markdown
---
title: Colors
order: 2
---
```

#### Component Docs

Component docs are docs about a specific design system component. This type of documentation renders additional UI elements to allow users a variety of ways to learn and interact with the components. Component docs include the component file from `src/catalyst`. That data is then used to generate a rendered example component, along with its template and rendered HTML code. There can be also be any additional information regarding assets used in the components.

##### Component Docs Front Matter

<dl>
	<dt>title</dt>
	<dd>The value of the title will be displayed at the top of the page and in the side toolbar navigation.</dd>
	<dt>order (optional)</dt>
	<dd>This value is a positive whole number which dictates the order it is ranked in the side toolbar navigation.</dd>
	<dt>component</dt>
	<dd>The full component path from within the <code>catalyst</code> directory.</dd>
	<dt>props (optional)</dt>
	<dd>If the component accepts any properties, a demo set of values should be provided as children of the <code>props</code> front matter key.</dd>
</dl>

The following is a sample of what the front matter block of component docs may contain:

```markdown
---
title: My Component
order: 3
component: 'components/button/base.liquid'
props:
  link: 'htts://example.org'
  text: Visit My Website
---
```
