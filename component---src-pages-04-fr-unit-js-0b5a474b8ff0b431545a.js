webpackJsonp([94085081834145],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-stage-0/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/04-fr-unit.js':function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),r=l(a),o=n("./src/components/layout/Main.js"),s=l(o),u=n("./src/components/CodeBlock.js"),i=l(u),d=n("./src/components/layout/DevHomework.js"),c=l(d),m=function(){return r.default.createElement("div",null,r.default.createElement("h2",null,"The fr Unit"),r.default.createElement("p",null,"In our first grid, we created columns with a fixed px width. That's great, but it isn't very flexible. Thankfully, CSS Grid Layout introduces a new unit of length called fr, which is short for “fraction”. MDN defines the fr unit as a unit which represents a fraction of the available space in the grid container. If we want to rewrite our previous grid to have three equal-width columns, we could change our CSS to use the fr unit:"),r.default.createElement(i.default,null,"\n.container {\n  display: grid;\n  width: 800px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 150px 150px;\n  grid-gap: 1rem;\n}\n      "),r.default.createElement("h4",null,"The repeat() notation"),r.default.createElement("p",null,"Handy tip: If you find yourself repeating length units, use the repeat() notation. Rewrite the above code like so:"),r.default.createElement(i.default,null,"      \n.container {\n  display: grid;\n  width: 800px;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 150px);\n  grid-gap: 1rem;\n}\n      "),r.default.createElement("p",null,"Here is the result:"),r.default.createElement("div",{className:"container-4"},r.default.createElement("div",{className:"item"}),r.default.createElement("div",{className:"item"}),r.default.createElement("div",{className:"item"}),r.default.createElement("div",{className:"item"}),r.default.createElement("div",{className:"item"}),r.default.createElement("div",{className:"item"})))},p=function(){return r.default.createElement(c.default,null,r.default.createElement("p",null,"Inspect the above grid and change the ",r.default.createElement("code",null,"grid-template-columns")," property on the grid container to the following:"),r.default.createElement(i.default,null,"\ngrid-template-columns: 10px, repeat(2, 1fr);\n      "),r.default.createElement("p",null,"What happened? As you can see, you can not only use the repeat() notation for just part of the track listing, but you can also mix units (in this case, px and fr)."),r.default.createElement("p",null,"We will learn more about mixing units in the next section."))};t.default=function(){return r.default.createElement(s.default,{currentPageNum:4,tutorial:r.default.createElement(m,null),homework:r.default.createElement(p,null)})},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-04-fr-unit-js-0b5a474b8ff0b431545a.js.map