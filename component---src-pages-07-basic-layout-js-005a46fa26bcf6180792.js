webpackJsonp([48774483122690],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-stage-0/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/07-basic-layout.js':function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),r=l(a),o=n("./src/components/layout/Main.js"),s=l(o),d=n("./src/components/CodeBlock.js"),i=l(d),u=n("./src/components/layout/DevHomework.js"),c=l(u),m=function(){return r.default.createElement("div",null,r.default.createElement("h2",null,"Creating a Basic Layout"),r.default.createElement("p",null,"Now that we have learned how to create a grid and position items on that grid, let's create a basic layout. We won't be introducing any new concepts here. We'll simply be using the",r.default.createElement("code",null,"grid-row")," and ",r.default.createElement("code",null,"grid-column")," shorthand properties to manually place items such as a header, footer, and so on."),r.default.createElement("p",null,"Here is the HTML:"),r.default.createElement(i.default,null,'\n<div class="container">\n  <div class="header">header</div>\n  <div class="sidebar">sidebar</div>\n  <div class="content-1">Content-1</div>\n  <div class="content-2">Content-2</div>\n  <div class="content-3">Content-3</div>\n  <div class="footer">footer</div>\n</div>\n      '),r.default.createElement("p",null,"Here is the CSS:"),r.default.createElement(i.default,null,"\n.main {\n  display: grid;\n  width: 750px;\n  height: 600px;\n  grid-template-columns: 200px 1fr 1fr;\n  grid-template-rows: 80px 1fr 1fr 100px;\n  grid-gap: 1rem;\n}\n\n.header {\n  grid-row: 1 / 2;\n  grid-column: 1 / 4;\n}\n\n.sidebar {\n  grid-row: 2 / 4;\n  grid-column: 1 / 2;\n}\n\n.content-1 {\n  grid-row: 2 / 3;\n  grid-column: 2 / 4;\n}\n\n.content-2 {\n  grid-row: 3 / 4;\n  grid-column: 2 / 3;\n}\n\n.content-3 {\n  grid-row: 3 / 4;\n  grid-column: 3 / 4;\n}\n\n.footer {\n  grid-row: 4 / 5;\n  grid-column: 1 / 4;\n}\n      "),r.default.createElement("p",null,"Here is the result:"),r.default.createElement("div",{className:"container-7"},r.default.createElement("div",{className:"item header-7"},"header"),r.default.createElement("div",{className:"item sidebar-7"},"sidebar"),r.default.createElement("div",{className:"item content-1-7"},"Content-1"),r.default.createElement("div",{className:"item content-2-7"},"Content-2"),r.default.createElement("div",{className:"item content-3-7"},"Content-3"),r.default.createElement("div",{className:"item footer-7"},"footer")))},p=function(){return r.default.createElement(c.default,null,r.default.createElement("p",null,"This is the perfect time to test out the 'display line numbers' setting on the Firefox CSS Grid Layout Panel. Inspect the result above and select the layout panel. Here you can activate the overlay grid and check the box to 'display line numbers'. Handy right? This tool makes it very easy to visualize your grid when positioning items."))};t.default=function(){return r.default.createElement(s.default,{currentPageNum:7,tutorial:r.default.createElement(m,null),homework:r.default.createElement(p,null)})},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-07-basic-layout-js-005a46fa26bcf6180792.js.map