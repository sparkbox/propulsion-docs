---
title: Configuration
order: 3
---

Configuration for Propulsion is done in the `propulsion.settings.json` file in the project’s root directory. Here you can setup a variety options to customize your build of Propulsion.

### Project Branding

The primary

{% table "custom-name-logo" page %}

```json
{
	"projectName": "The Awesomeness System",
	"projectLogo": "./src/assets/awesomeness-logo.svg",
	"styleCompilePath": "./dist/css",
	"styleCompileFile": "main.css",
	"language": "en",
}
```

### Eleventy Settings

These settings are passed on verbatium to Eleventy, and values should follow Eleventy’s [supported languages](https://www.11ty.dev/docs/languages/) shorthand. If you do need to modify the Eleventy settings beyond what is possible here, review the [Advanced Configuration](advanced) instructions.

#### Defaults

{% table "eleventy-settings-1" page %}

```json
{
	"defaultTemplateEngine": "njk",
	"defaultMarkdownEngine": "njk",
	"templateFormats": ["njk", "md"],
}
```

#### Main Eleventy Directories

The `directories` section has three parts, the first is `main`. These parameters are all directories that are passed directly to Eleventy to compile the HTML. To learn more about how this functions, see [Eleventy Configuration Options](https://www.11ty.dev/docs/config/#configuration-options)

{% table "eleventy-settings-2" page %}

```json
{
	...
	"directories": {
		"main": {
			"input": "src/docs",
			"output": "dist",
			"includes": "../catalysts",
			"layouts": "../schematics",
			"data": "../data"
		}
	},
	...
}
```

#### Watch and Copy Directories

The second and third parts of the `directories` section is for setting up directories to watch during development builds and to copy files during the build.

{% table "eleventy-settings-3" page %}

```json
{
	...
	"directories": {
		...
		"watch": [
			"src/static",
			"config/assets",
			"config/tasks",
			"config/styles",
			"config/scripts"
		],
		"copy": [
			{"src/static": "/"},
			{"config/assets": "/propulsion"}
		]
	},
	...
}
```


### Custom Styling

Custom styling is a feature unique to Propulsion that allows you to customize the user interface and code block styles.

#### User Interface Styles

The user interface styles for Propulsion, including vertical and horizontal toolbars and documentation styles.

{% table "interface-styles" page %}

```json
{
	"styles": {
		"fontFamily": "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'",
		"uiBackgroundColor": "hsl(213deg 6% 93%)",
		"uiBorderWidth": "1px",
		"uiBorderColor": "hsl(213deg 6% 80%)",
		"uiLinkDefaultColor": "hsl(213deg 100% 48%)",
		"uiLinkHoverColor": "hsl(213deg 100% 48%)",
		"uiLinkVisitedColor": "hsl(303deg 100% 28%)",
		"uiSidebarWidth": "14rem",
		"uiNavTextColor": "hsl(213deg 6% 32%)",
		"uiNavTextHoverColor": "hsl(213deg 6% 32%)",
		"uiNavBackgroundHoverColor": "hsl(213deg 6% 89%)",
		"uiNavTextActiveColor": "hsl(213deg 6% 100%)",
		"uiNavBackgroundActiveColor": "hsl(213deg 100% 48%)"
	}
}
```

#### Code Syntax Highlighting Styles

The syntax highlighting of code blocks is used in the component code view as well as in code blocks within any documentation. These parameters define the font, background color, and various text colors of the code block. Syntax highlighting is performed by [the official Eleventy plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/) which is based on the [Prism.js project](https://prismjs.com).

{% table "code-styles" page %}

Example of the `codeStyles` parameters:

```json
{
	...
	"codeStyles": {
		"codeFont": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
		"codeDefaultBackground": "hsl(217deg 13% 99%)",
		"codeDefaultColor": "hsl(217deg 22% 32%)",
		"codeCommentColor": "hsl(217deg 13% 50%)",
		"codePunctuationColor": "hsl(217deg 10% 40%)",
		"codeTagColor": "hsl(39deg 67% 69%)",
		"codeNameColor": "hsl(187deg 47% 55%)",
		"codeNumberColor": "hsl(207deg 82% 66%)",
		"codePropertyColor": "hsl(286deg 60% 67%)",
		"codeRuleColor": "hsl(95deg 38% 62%)",
		"codeValueColor": "hsl(355deg 65% 65%)",
		"codeOperatorColor": "hsl(5deg 48% 51%)",
		"codeInsertedColor": "hsl(29deg 54% 61%)"
	}
}
```
