---
title: Advanced Configuration
repo_url: https://github.com/sparkbox/propulsion/tree/main
eleventy_label: '<span aria-label="the Eleventy website">11ty.dev</span>'
---

If you want want to fine tune Propulsion further, this is the place to start.

Modifying Propulsion should be done with extreme caution and intentionality. An understanding of both [Eleventy](https://11ty.dev) and [Node.js](https://nodejs.dev) build tools is strongly recommended before undertaking changes, as this can affect the build reliability of your Propulsion instance.

All advanced configuration is done in the [config directory]({{ repo_url }}/config).

### Eleventy Specific Files

The Eleventy config for Propulsion is [propulsion.config.js]({{ repo_url }}/config/propulsion.config.js). This file bring together the Propulsion settings file and Propulsion’s custom code for Eleventy.

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
		Runs any directory and file copies defined in the Propulsion settings during the Eleventy build.
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

<dl>
	<dt><a href="{{ repo_url }}/config/tasks/tools/logo.svg"><code>logo.svg</code></a></dt>
	<dd>
		The propulsion logo
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/page.js"><code>page.js</code></a></dt>
	<dd></dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/sprite-sheet.svg"><code>sprite-sheet.svg</code></a></dt>
	<dd>
		This sprite sheet contains all the user interface icons for Propulsion. The full SVG code is embedded on each page in Propulsion, and then called using the <code style="white-space:nowrap">&lt;use /&gt;</code> SVG element.
	</dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.button.js"><code>ui.button.js</code></a></dt>
	<dd></dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.content.js"><code>ui.content.js</code></a></dt>
	<dd></dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.head.js"><code>ui.head.js</code></a></dt>
	<dd></dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.header.js"><code>ui.header.js</code></a></dt>
	<dd></dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.nav.js"><code>ui.nav.js</code></a></dt>
	<dd></dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.styles.js"><code>ui.styles.js</code></a></dt>
	<dd></dd>
	<dt><a href="{{ repo_url }}/config/tasks/tools/ui.svg.js"><code>ui.svg.js</code></a></dt>
	<dd></dd>
</dl>


### Scripts

Propulsion’s JavaScript is written in TypeScript and compiled during build.

### Styles

Propulsion’s CSS is written in Sass and compiled during build.

