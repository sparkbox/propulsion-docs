---
title: Schematics
order: 4
---

Propulsion only requires a single layout, but it has very specific requirements. The output of this template will generate all the HTML and in the case of a component page it will load a development layout of 3 panels, includes the component’s code, an `iframe` demo rendering the code, and any documentation for the component. The following image depicts how this layout appears:

![A layout consisting of a list of components on the left, a panel with a demo of a button component in the upper right, with a the code and documentation in two additional components below the demo panel.](/images/propulsion-ui.png)


### Propulsion Loader

There are three essential pieces to generating the Propulsion UI from an Eleventy layout. Ultimately the HTML is generated using the `propulsionLoader` shortcode, but defining the Catalyst and the `<iframe>` template are required to get the expected layout described in the previous section.

The purpose for defining the `catalyst` and the `iframeSource` is so that a string of HTML, rendered by the templating engine, is passed into the `propulsionLoader`.

#### Set Catalyst

The `catalyst` definition as two functions:

1. Pass the component’s code into `propulsionLoader` so that it can display the rendered and uncompiled source code in the code panel.
2. Allow the `iframeSource` to load and render the component for the demo panel.

The following demo is provided using the `liquid` templating language. Here the `assign` defines `catalyst`, then if the `component` front matter exists, it will proceed to load the component with the `include` function.

```liquid
{{'{%' | escape}}- assign catalyst -{{'%}' | escape}}
	{{'{%' | escape}}- if component -{{'%}' | escape}}
		{{'{%' | escape}}- include component -{{'%}' | escape}}
	{{'{%' | escape}}- endif -{{'%}' | escape}}
{{'{%' | escape}}- endset -{{'%}' | escape}}
```

#### Set Iframe Source

The `iframeSource` is the full HTML needed to display your content in the `<iframe>` in the demo panel. Any CSS and JavaScript necessary for your component must be loaded here as well. In order to make this process easier, it is recommended to utilize your templating languages partial management to make this section a simplified as possible. The key is that this content is rendered by the templating engine before being passed into the `propulsionLoader`.

```liquid
{{'{%' | escape}} assign iframeSource {{'%}' | escape}}
	{{'{%' | escape}} if component {{'%}' | escape}}
		<!doctype html>
		<html lang="en">
			<head>
				<title>{{ title }} Preview</title>
				{{'{%' | escape}} include "meta/head" {{'%}' | escape}}
			</head>
			<body>
				{{'{{' | escape}} catalyst {{'}}' | escape}}
				{{'{%' | escape}} include "meta/foot" {{'%}' | escape}}
			</body>
		</html>
	{{'{%' | escape}} endif {{'%}' | escape}}
{{'{%' | escape}} endset {{'%}' | escape}}
```

#### Shortcode

The final line of code of the Propulsion layout schematic is the `propulsionLoader` short code, which requires 6 parameters to be passed into it. The first four: `page`, `process`, `eleventy`, and `content` are all Eleventy-level data that the short code does not have direct access to unless explicitly passed into it. The last two are `iframeSource` and `catalyst` as previously defined. These 6 parameters must be passed in this order and all 6 are required.

```liquid
{{'{%' | escape}} propulsionLoader page, process, eleventy, content, iframeSource, catalyst {{'%}' | escape}}
```

