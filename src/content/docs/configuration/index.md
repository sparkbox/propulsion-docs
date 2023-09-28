---
title: Configuration
order: 3
---

Configuration for Propulsion is done in the `propulsion.settings.json` file in the project’s root directory. Here you can setup a variety options to customize your build of Propulsion.

### Project Settings

When it comes to customizing your design system, nothing really stands out like a name and a logo. By default the Propulsion logo is displayed. If you

{% table "custom-name-logo" page %}

{% highlight json %}
{
	"projectName": "The Awesomeness System",
	"projectLogo": "./src/assets/awesomeness-logo.svg"
}
{% endhighlight %}

### Project Settings

{% table "css-settings" page %}


{% highlight json %}
{
	"styleCompilePath": "./dist/css",
	"styleCompileFile": "main.css",
	"previewTemplate": "preview.njk",
	"language": "en",
}
{% endhighlight %}

### Eleventy Settings

Propulsion abstracts the Eleventy settings in order to have a single configuration file. If you do need to modify the Eleventy settings beyond what is possible here, review the [Advanced Configuration](advanced) instruction.

#### Defaults

{% table "eleventy-settings-1" page %}

{% highlight json %}
{
	"defaultTemplateEngine": "njk",
	"defaultMarkdownEngine": "njk",
	"templateFormats": ["njk", "md"],
}
{% endhighlight %}

#### Directories

{% table "eleventy-settings-2" page %}

{% highlight json %}
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
{% endhighlight %}

#### Watch and Copy

{% table "eleventy-settings-3" page %}

{% highlight json %}
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
{% endhighlight %}


### Custom Styling

#### User Interface Styles

{% highlight json %}
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
{% endhighlight %}

#### Code Syntax Highlighting Styles

{% highlight json %}
{
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
{% endhighlight %}
