---
title: Advanced Configuration
order: 7
repo_url: https://github.com/sparkbox/propulsion/tree/main
eleventy_label: '<span aria-label="the Eleventy website">11ty.dev</span>'
---

If you want want to fine tune Propulsion further, this is the place to start.

Modifying Propulsion should be done with extreme caution and intentionality. An understanding of both [Eleventy](https://11ty.dev) and [Node.js](https://nodejs.dev) build tools is strongly recommended before undertaking changes, as this can affect the build reliability of your Propulsion instance.

All advanced configuration is done in the [config directory]({{ repo_url }}/config).

### Eleventy Specific Files

The Eleventy config for Propulsion is [`propulsion.config.js`]({{ repo_url }}/config/propulsion.config.js). This file brings together the Propulsion settings file and Propulsion’s custom code for Eleventy.

The remainder of the Eleventy-specific files can be found in the [tasks directory]({{ repo_url }}/config/tasks).

<dl>
	<dt><a href="{{repo_url}}/config/tasks/propulsion.after.js"><code>propulsion.after.js</code></a></dt>
	<dd>
		Contains any script that should run after the Eleventy build.
		<br>
		<a href="https://www.11ty.dev/docs/events/#eleventy.after">Read about After Events on {{ eleventy_label }}</a>
	</dd>
	<dt><a href="{{repo_url}}/config/tasks/propulsion.before.js"><code>propulsion.before.js</code></a></dt>
	<dd>
		Contains any script that should run before the Eleventy build.
		<br>
		<a href="https://www.11ty.dev/docs/events/#eleventy.before">Read about Before Events on {{ eleventy_label }}</a>
	</dd>
	<dt><a href="{{repo_url}}/config/tasks/propulsion.copy.js"><code>propulsion.copy.js</code></a></dt>
	<dd>
		Copies and runs any directory and files defined in the Propulsion settings to the output directory during the Eleventy build
		<br>
		<a href="https://www.11ty.dev/docs/copy/">Read about Passthrough Copy on {{ eleventy_label }}</a>
	</dd>
	<dt><a href="{{repo_url}}/config/tasks/propulsion.data.js"><code>propulsion.data.js</code></a></dt>
	<dd>
		Provides custom global data for the Eleventy build.
		<br>
		<a href="https://www.11ty.dev/docs/data-global-custom/">Read about Custom Global Data on {{ eleventy_label }}</a>
	</dd>
	<dt><a href="{{repo_url}}/config/tasks/propulsion.shortcodes.js"><code>propulsion.shortcodes.js</code></a></dt>
	<dd>
		Defines custom Shortcodes used in Propulsion, such as <code>propulsionLoader</code>.
		<br>
		<a href="https://www.11ty.dev/docs/shortcodes/">Read about Shortcodes on {{ eleventy_label }}</a>
	</dd>
	<dt><a href="{{repo_url}}/config/tasks/propulsion.watch.js"><code>propulsion.watch.js</code></a></dt>
	<dd>
		Defines any directory and files to watch from the Propulsion settings during the Eleventy build.
		<br>
		<a href="https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets">Read about Watch Targets on {{ eleventy_label }}</a>
	</dd>
</dl>

#### Tools

The [tools directory]({{ repo_url }}/config/tasks/tools) contains all of the JavaScript related to generating the Propulsion markup. Unlike a standard Eleventy layout template, the Propulsion template is build via a shortcode, allowing it to be built independent of any specific templating language. The following files handle different aspects of the layout build:

<dl>
	<dt><a href="{{ repo_url }}/config/tasks/tools/page.js"><code>page.js</code></a></dt>
	<dd>
		Combines all the partials to generate the full Propulsion template.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.button.js"><code>ui.button.js</code></a></dt>
	<dd>
		Component for buttons within the Propulsion UI.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.content.js"><code>ui.content.js</code></a></dt>
	<dd>
		Generates the component and documentation panels, including the codeblock and iframe views.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.head.js"><code>ui.head.js</code></a></dt>
	<dd>
		Renders the <code>&lt;head&gt;</code> tag used on Propulsion-generated pages.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.header.js"><code>ui.header.js</code></a></dt>
	<dd>
		Component for the top toolbar in the Propulsion UI component view.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.nav.js"><code>ui.nav.js</code></a></dt>
	<dd>
		Generates the sidebar navigation, which reads the outputs of files listed in the <code>docs</code> directory.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.styles.js"><code>ui.styles.js</code></a></dt>
	<dd>
		Renders the custom styles defined in the <code>propulsion.settings.json</code> file from the <a href="/docs/configuration/#user-interface-styles">User Interface</a> and <a href="/docs/configuration/#code-syntax-highlighting-styles">Code Syntax Highlighting</a> Styles.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.svg.js"><code>ui.svg.js</code></a></dt>
	<dd>
		Component that loads in the defined icon from the <code>sprite-sheet.svg</code> file.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/logo.svg"><code>logo.svg</code></a></dt>
	<dd>
		The Propulsion logo as displayed in the side toolbar.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/sprite-sheet.svg"><code>sprite-sheet.svg</code></a></dt>
	<dd>
		Contains all the user interface icons for Propulsion. The full SVG code is embedded on each page in Propulsion, and then called using the <code>&lt;use /&gt;</code> SVG element.
	</dd>
</dl>

### Scripts

Propulsion’s JavaScript is written in TypeScript, found in the [scripts directory]({{ repo_url }}/config/scripts), and compiled during build. The `@types` directory stores any custom-defined TypeScript types.

### Styles

Propulsion’s CSS is written in Sass, found in the [styles directory]({{ repo_url }}/config/styles), and compiled during build. The Propulsion Sass files follow the BEM naming convention, with an Inverted Triangle architecture. Class names contain a prefix name spacing beginning with `pr` (for Propulsion), followed by the appropriate inverted triangle section:

  - `probj-` for Object
  - `prcmp-` for Component
  - `prutil-` for Utility
