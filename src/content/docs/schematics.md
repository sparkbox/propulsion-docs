---
title: Schematics
order: 5
---

Propulsion only requires a single layout, but it has very specific requirements. The output of this template will generate all the HTML. In the case of a component page, it will also load a development layout of 3 panels, including the component’s code, an `iframe` demo rendering the code, and any documentation for the component. The following image depicts how this layout appears:

![A layout consisting of a list of components on the left, a panel with a demo of a button component in the upper right, with the code and documentation in two additional panels below the demo panel.](/images/propulsion-ui.png)

### Propulsion Loader

There are three essential pieces to generating the Propulsion UI from an Eleventy layout. Ultimately, the HTML is generated using the `propulsionLoader` shortcode, but defining the `catalyst` and the `<iframe>` template are required to get the expected layout described in the previous section. The purpose for defining this is so that a string of HTML, rendered by the templating engine, is passed into `propulsionLoader`.

#### Set Catalyst

The `catalyst` definition has two functions:

1. Passes the component’s code into `propulsionLoader` so that it can display the rendered and uncompiled source code in the code panel.
2. Allows the `iframeSource` to load and render the component for the demo panel.

The following demo is provided using the `liquid` templating language. Here, the `assign` defines `catalyst`, then if the `component` front matter exists, it will proceed to load the component with the `include` function.

<!-- because we are assigning the catalyst based on the results of the if check, is that why we have to use endset? -->
```liquid
{{'{%' | escape}}- assign catalyst -{{'%}' | escape}}
	{{'{%' | escape}}- if component -{{'%}' | escape}}
		{{'{%' | escape}}- include component -{{'%}' | escape}}
	{{'{%' | escape}}- endif -{{'%}' | escape}}
{{'{%' | escape}}- endset -{{'%}' | escape}}
```

#### Set Iframe Source

The `iframeSource` is the full HTML needed to display your component in the `<iframe>` in the demo panel. Any CSS and JavaScript necessary for your component must be loaded here as well. In order to make this process easier, it is recommended to utilize your templating language's partial management. The key is that this content is rendered by the templating engine (in this case, `liquid`) before being passed into the `propulsionLoader`.

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

The final line of code in the Propulsion layout schematic is the `propulsionLoader` short code, which requires 6 parameters to be passed into it. The first four- `page`, `process`, `eleventy`, and `content`- are all Eleventy-level data that the shortcode does not have direct access to, unless explicitly passed into it. The last two are `iframeSource` and `catalyst`, as previously discussed. These 6 required parameters must be passed in this order.

```liquid
{{'{%' | escape}} propulsionLoader page, process, eleventy, content, iframeSource, catalyst {{'%}' | escape}}
```
