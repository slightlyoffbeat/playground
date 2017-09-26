webpackJsonp([26549370073863],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-stage-0/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/09-named-lines.js':function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n("./node_modules/react/react.js"),o=a(r),l=n("./src/components/layout/Main.js"),s=a(l),d=n("./src/components/CodeBlock.js"),i=a(d),c=n("./src/components/layout/DevHomework.js"),u=a(c),m=n("./src/components/CodepenLink.js"),f=a(m),p=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"Named Lines"),o.default.createElement("p",null,"In a previous example, we learned how to place an item on the grid by providing the "," ",o.default.createElement("code",null,"grid-column")," and ",o.default.createElement("code",null,"grid-row properties")," with specific grid lines. We can also name some or all of those grid lines when defining a grid. This allows us to use those names instead of grid lines. To name a grid line, simply add the name in square brackets:"),o.default.createElement("p",null,"To name a grid line, we simply provide the name in square brackets:"),o.default.createElement(i.default,null,"\n.container {\n  display: grid;\n  width: 100%;\n  height: 600px;\n  grid-gap: 1rem;\n  grid-template-columns:\n    [main-start sidebar-start] 200px\n    [sidebar-end content-start] 1fr\n    [column3-start] 1fr\n    [content-end main-end];\n  grid-template-rows:\n    [row1-start] 80px\n    [row2-start] 1fr\n    [row3-start] 1fr\n    [row4-start] 100px\n    [row4-end];\n}\n      "),o.default.createElement("p",null,"Now that we have line names, we can use those names when placing items. Let's recreate our basic layout using named lines, instead of line numbers:"),o.default.createElement(i.default,null,"\n.header {\n  grid-column: main-start / main-end;\n  grid-row: row1-start / row2-start;\n}\n\n.sidebar {\n  grid-column: sidebar-start / sidebar-end;\n  grid-row: row2-start / row4-start;\n}\n\n.content-1 {\n  grid-column: content-start / content-end;\n  grid-row: row2-start / row3-start;\n}\n\n.content-2 {\n  grid-column: content-start / column3-start;\n  grid-row: row3-start / row4-start;\n}\n\n.content-3 {\n  grid-column: column3-start / content-end;\n  grid-row: row3-start / row4-start;\n}\n\n.footer {\n  grid-column: main-start / main-end;\n  grid-row: row4-start / row4-end;\n}\n      "),o.default.createElement("p",null,"Here is our HTML:"),o.default.createElement(i.default,null,'\n<div className="container">\n  <div className="item header">header</div>\n  <div className="item sidebar">sidebar</div>\n  <div className="item content-1">Content-1</div>\n  <div className="item content-2">Content-2</div>\n  <div className="item content-3">Content-3</div>\n  <div className="item footer">footer</div>\n</div>\n      '),o.default.createElement("p",null,"Here is the result:"),o.default.createElement("div",{className:"container-9"},o.default.createElement("div",{className:"item header-9"},"header"),o.default.createElement("div",{className:"item sidebar-9"},"sidebar"),o.default.createElement("div",{className:"item content-1-9"},"Content-1"),o.default.createElement("div",{className:"item content-2-9"},"Content-2"),o.default.createElement("div",{className:"item content-3-9"},"Content-3"),o.default.createElement("div",{className:"item footer-9"},"footer")),o.default.createElement(f.default,{link:"https://codepen.io/mozilladevelopers/pen/dVpQVV"}))},g=function(){return o.default.createElement(u.default,null,o.default.createElement("p",null,"Did you know you can customize the color of the grid overlay in Firefox DevTools? The above example is on a white background, and the default purple may not be the best color to use. When selecting an overlay grid to display, you will see a circle next to the grid name that indicates the color of the overlay. Click on that circle, and you can customize the color to whatever you'd like. Try a different color, such as red. Don't have Firefox?"," ",o.default.createElement("a",{href:"https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly"},"Download Firefox Nightly"),"."))};t.default=function(){return o.default.createElement(s.default,{currentPageNum:9,tutorial:o.default.createElement(p,null),homework:o.default.createElement(g,null)})},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-09-named-lines-js-86d3cc69f40d0d9cb099.js.map