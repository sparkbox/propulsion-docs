---
title: Directory Structure
order: 3
---

Propulsion provides a starting place for the directory structure. Many of these directories correspond to a data setting in the `propulsion.settings.json` file, which is documented on the [configuration page](/docs/configuration). The following is a breakdown of the directories involved in the build, which are all located in the `src` directory.

<dl>
	<dt>catalysts</dt>
	<dd>Catalysts are what power your design system. This folder is where you store your components and other partials. <a href="/docs/catalysts">Learn more about Catalysts</a></dd>
	<dt>data</dt>
	<dd>The data directory is where JSON data files can be stored for use throughout your design system.</dd>
	<dt>docs</dt>
	<dd>This is where your documentation files are stored. The files in this directory should follow a specific structure and extension type (<code>.md</code>). <a href="/docs/documentation">Learn more about Documentation</a></dd>
	<dt>schematics</dt>
	<dd>These are where the layouts for Propulsion are stored. Only one layout is necessary to get all the power of Propulsion, however you are free to create a many layouts as you’d like. <a href="/docs/schematics">Learn more about Schematics</a></dd>
	<dt>scripts</dt>
	<dd>Any JavaScript (or TypeScript) for your project can be found here. A few starting TypeScript files can be found in this directory.</dd>
	<dt>static</dt>
	<dd>The static folder is a place to store any static assets, such as images or other files, that are copied verbatim into `dist`, the final build directory.</dd>
	<dt>styles</dt>
	<dd>Here is where you place your styles. Propulsion provides a starter BEM + <a href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/">Inverted Triangle Sass</a> architecture, but feel free to modify the build to use PostCSS, LESS, or vanilla!</dd>
</dl>
