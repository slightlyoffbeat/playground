webpackJsonp([47944494456262],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-stage-0/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/05-mixing-units.js':function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a("./node_modules/react/react.js"),s=l(n),o=a("./src/components/layout/Main.js"),r=l(o),i=a("./src/components/CodeBlock.js"),u=l(i),d=a("./src/components/layout/DevHomework.js"),c=l(d),m=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"Mixing Units"),s.default.createElement("p",null,"When declaring track sizes, you can use fixed sizes with units such as px and em. You can also use flexible sizes such as percentages or the fr unit. The real magic of CSS Grid Layout, however, is having the ability to mix these units. The best way to understand is with an example:"),s.default.createElement(u.default,null,"\n.container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 100px 30% 1fr;\n  grid-template-rows: 200px 100px;\n  grid-gap: 1rem;\n}\n    \n      "),s.default.createElement("p",null,"Here, we have declared a grid with three columns. The first column is a fixed width of 100px. The second column will occupy 30% of the available space, and the third column is 1fr which means it will take up a fraction of the available space. In this case, it will take up all of the remaining space (1/1)."),s.default.createElement("p",null,"Here is our HTML:"),s.default.createElement(u.default,null,'\n<div className="container">\n  <div className="item" />\n  <div className="item" />\n  <div className="item" />\n  <div className="item" />\n  <div className="item" />\n  <div className="item" />\n</div>\n      '),s.default.createElement("p",null,"And here is the result:"),s.default.createElement("div",{className:"container-5"},s.default.createElement("div",{className:"item"}),s.default.createElement("div",{className:"item"}),s.default.createElement("div",{className:"item"}),s.default.createElement("div",{className:"item"}),s.default.createElement("div",{className:"item"}),s.default.createElement("div",{className:"item"})))},f=function(){return s.default.createElement(c.default,null,s.default.createElement("p",null,"Inspect the grid above, and change the ",s.default.createElement("code",null,"grid-template-columns")," property to the following:"),s.default.createElement(u.default,null,"\ngrid-template-columns: 100px 30% 2fr 1fr;\n      "),s.default.createElement("p",null,"Do you see what happened? Instead of 3 columns, you now have a 3rd column that is"," ",s.default.createElement("code",null,"2fr")," and occupies 2/3 of the remaining space, and a 4th column that is"," ",s.default.createElement("code",null,"1fr")," and occupies the final 1/3 of the remaining space. Continue to play around in DevTools and try different units and combinations."),s.default.createElement("p",null,"When you are ready, continue on to learn about how to position items on the grid."))};t.default=function(){return s.default.createElement(r.default,{currentPageNum:5,tutorial:s.default.createElement(m,null),homework:s.default.createElement(f,null)})},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-05-mixing-units-js-fd1c63cd36ec9dfa97b0.js.map