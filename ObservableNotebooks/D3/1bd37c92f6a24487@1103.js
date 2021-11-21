import define1 from "./62d26743f59aac51@3814.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# OD Map Example`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Trying out Jo's _new renderer_ - called here ...`
)});
  const child1 = runtime.module(define1);
  main.import("Renderer", child1);
  main.variable(observer()).define(["Renderer","width","rType"], function(Renderer,width,rType){return(
new Renderer(width, width / 5, rType).strokeWidth(2).fill("rgba(180,90,45,0.5)")
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Choose Renderer ...`
)});
  main.variable(observer("viewof rType")).define("viewof rType", ["Inputs"], function(Inputs){return(
Inputs.radio(["SVG", "Canvas", "RoughSVG", "RoughCanvas"], {
  label: "Renderer",
  value: "SVG"
})
)});
  main.variable(observer("rType")).define("rType", ["Generators", "viewof rType"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`Make grid coordinates ...`
)});
  main.variable(observer("gridCoords")).define("gridCoords", function(){return(
[
  [4, 4],
  [4, 8],
  [2, 7],
  [6, 7],
  [3, 7],
  [0, 1],
  [4, 5],
  [5, 4],
  [2, 2],
  [1, 5],
  [5, 7],
  [3, 2],
  [1, 6],
  [2, 0],
  [3, 3],
  [5, 8],
  [6, 0],
  [1, 7],
  [4, 7],
  [3, 4],
  [5, 2],
  [4, 2],
  [2, 3],
  [6, 6],
  [2, 6],
  [2, 5],
  [5, 6],
  [4, 3],
  [5, 3],
  [4, 6],
  [3, 5],
  [3, 6]
]
)});
  main.variable(observer("zoneName")).define("zoneName", function(){return(
[
"CLK",
"D&G",
"AYE",
"LOE",
"RFE",
"WST",
"FAL",
"FFE",
"HGH",
"INV",
"LOM",
"MOR",
"AYN",
"ORK",
"P&K",
"BRD",
"SHE",
"AYS",
"LNS",
"STR",
"ABC",
"ABS",
"A&B",
"EDI",
"RNF",
"DBW",
"LOW",
"ANG",
"DUN",
"LNN",
"DBE",
"GLA"
]
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Render something!`
)});
  main.variable(observer()).define(["Renderer","width","rType","cellSize","gridCoords","zoneName"], function(Renderer,width,rType,cellSize,gridCoords,zoneName)
{
  const r = new Renderer(width, width / 3, rType)
    .fit([[0, 0], [6, 8]], 25)
    .strokeWidth(2)
    .stroke("black");

  var sz = 0.45;
  sz = cellSize;
  gridCoords.forEach(([x, y], i) => {
    r.font("monospace")
      .textSize(8)
      .textAlign("middle")
      .textBaseline("middle");

    r.fill("rgba(255,128,32,0.75)")
      .stroke("rgba(32,32,32,0.25)")
      .strokeWidth(0.75)
      .polygon([
        [x - sz, y - sz],
        [x + sz, y - sz],
        [x + sz, y + sz],
        [x - sz, y + sz]
      ]);
    r.fill("black")
      .stroke()
      .text(zoneName[i], x, y);
  });

  r.font("monospace")
    .textAlign("middle")
    .textBaseline("middle")
    .strokeWidth(0.3)
    .fill("black")
    .textSize(12)
    .stroke()
    .text("Hello", 1000, 1000);

  return r.render();
}
);
  main.variable(observer("viewof cellSize")).define("viewof cellSize", ["Inputs"], function(Inputs){return(
Inputs.range([0.05, 0.5], {
  value: 0.475,
  step: 0.05,
  label: "size"
})
)});
  main.variable(observer("cellSize")).define("cellSize", ["Generators", "viewof cellSize"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`---

## Try Reading from File ...`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Read file of strings from https://raw.githubusercontent.com/gicentre/scrc/main/data/grid/scotLAsGrid.csv`
)});
  main.variable(observer("geoString")).define("geoString", ["d3"], async function(d3){return(
await d3
  .csv(
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/grid/scotLAsGrid.csv"
  )
  .then(objs => objs.map(o => Object.values(o).map(String)))
)});
  main.variable(observer()).define(["Renderer","width","rType","geoString","cX","cY","zoneName"], function(Renderer,width,rType,geoString,cX,cY,zoneName)
{
  const r = new Renderer(width, width / 3, rType)
    .fit([[0, 0], [6, 8]], 25)
    .strokeWidth(2)
    .stroke("black");

  const sz = 0.45;
  geoString.forEach((text, i) => {
    r.font("monospace")
      .textSize(8)
      .textAlign("middle")
      .textBaseline("middle");

    const gridX = parseInt(text[cX]);
    const gridY = parseInt(text[cY]);
    r.fill("rgba(255,128,32,0.75)")
      .stroke("rgba(32,32,32,0.25)")
      .strokeWidth(0.75)
      .polygon([
        [gridX - sz, gridY - sz],
        [gridX + sz, gridY - sz],
        [gridX + sz, gridY + sz],
        [gridX - sz, gridY + sz]
      ]);
    r.fill("black")
      .stroke()
      .text(zoneName[i], gridX, gridY);
  });

  r.font("monospace")
    .textAlign("middle")
    .textBaseline("middle")
    .strokeWidth(0.3)
    .fill("black")
    .textSize(12)
    .stroke()
    .text("Hello", 1000, 1000);

  return r.render();
}
);
  main.variable(observer("viewof layout")).define("viewof layout", ["Inputs"], function(Inputs){return(
Inputs.range([1, 3], {
  value: 1,
  step: 1,
  label: "Alternative Layouts"
})
)});
  main.variable(observer("layout")).define("layout", ["Generators", "viewof layout"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Try Colouring by Value`
)});
  main.variable(observer()).define(["Renderer","width","rType","geoString","cX","cY","mymap","zoneName"], function(Renderer,width,rType,geoString,cX,cY,mymap,zoneName)
{
  const r = new Renderer(width, width / 3, rType)
    .fit([[0, 0], [6, 8]], 25)
    .strokeWidth(2)
    .stroke("black");

  const sz = 0.45;
  geoString.forEach((text, i) => {
    r.font("monospace")
      .textSize(8)
      .textAlign("middle")
      .textBaseline("middle");

    const gridX = parseInt(text[cX]);
    const gridY = parseInt(text[cY]);
    const pop = parseInt(text[9]);
    const k = mymap(pop, 0, 650000, 255, 0);
    r.fill("rgba(255," + k + "," + k + ",0.75)")
      // r.fill("rgba(255,128,64,0.75)")
      .stroke("rgba(32,32,32,.25)")
      .strokeWidth(0.75)
      .polygon([
        [gridX - sz, gridY - sz],
        [gridX + sz, gridY - sz],
        [gridX + sz, gridY + sz],
        [gridX - sz, gridY + sz]
      ]);
    r.fill("black")
      .stroke()
      .text(zoneName[i], gridX, gridY);
  });

  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Try Making an OD Map with Two Functions`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**ODMap()** draws multiple **flowMap()** instances.<br/>
Basic OD Map created - need to refactor a little!`
)});
  main.variable(observer("nRows")).define("nRows", function(){return(
8
)});
  main.variable(observer("nCols")).define("nCols", function(){return(
6
)});
  main.variable(observer("nSq")).define("nSq", ["nCols","nRows"], function(nCols,nRows){return(
Math.max(nCols, nRows)
)});
  main.variable(observer()).define(["Renderer","width","rType","nCols","nRows","odMap"], function(Renderer,width,rType,nCols,nRows,odMap)
{
  const r = new Renderer(width / 2, width / 2, rType).fit(
    [
      [-0.1, -0.1],
      [nCols + 0.1, nRows + 0.1]
    ],
    25
  );

  const o = odMap(r, 0, 0, nCols, nRows);
  // const g = gridMap(r, 0, 0, nCols, nRows);
  // const g = gridMap(r, 0, 0, 1, 1); // -- works
  return r.render();
}
);
  main.variable(observer("viewof fCol")).define("viewof fCol", ["Inputs"], function(Inputs){return(
Inputs.range([2, 7], {
  value: 2,
  step: 1,
  label: "Flow Column"
})
)});
  main.variable(observer("fCol")).define("fCol", ["Generators", "viewof fCol"], (G, _) => G.input(_));
  main.variable(observer("gridMap")).define("gridMap", ["nCols","nRows","geoString","cX","cY","mymap"], function(nCols,nRows,geoString,cX,cY,mymap){return(
function gridMap(r, x, y, wi, hi) {
  const sz = 0.45;

  // -- make it square!
  const nSq = Math.max(nCols, nRows);

  // r.push()
  //   .translate(x, y)
  //   .scale(1.0);

  // -- surrounding polygon:
  r.fill("rgba(255,255,64,.05)")
    .stroke("rgba(128,32,32,.25)")
    .strokeWidth(0.5)
    .polygon([[x, y], [x, y + hi], [x + wi, y + hi], [x + wi, y]]);

  geoString.forEach((text, i) => {
    const gridX = parseInt(text[cX]);
    const gridY = parseInt(text[cY]);
    const xL = mymap(gridX - sz, -0.5, nSq + 0.5, x, x + wi);
    const xR = mymap(gridX + sz, -0.5, nSq + 0.5, x, x + wi);
    const yT = mymap(gridY - sz, -0.5, nSq + 0.5, y, y + hi);
    const yB = mymap(gridY + sz, -0.5, nSq + 0.5, y, y + hi);

    // -- debug -- too long! Need a better way to debug!
    // r.font("monospace")
    //   .textSize(8)
    //   .textAlign("middle")
    //   .textBaseline("middle")
    //   .fill("rgba(64,64,64,0.8)")
    //   .stroke()
    //   .text(
    //     gridX +
    //       " " +
    //       gridY +
    //       " | " +
    //       xL +
    //       "," +
    //       xR +
    //       " | " +
    //       yT +
    //       "," +
    //       yB +
    //       " | " +
    //       sz,
    //     3,
    //     0.25 * i
    //   );

    // -- read and scale population :
    const z = parseInt(text[9]);
    const k = mymap(z, 0, 650000, 255, 0);

    // -- colour by population :
    r.fill("rgba(255," + k + "," + k + ",0.25)")
      // r.fill("rgba(255,128,64,0.75)")
      .stroke("rgba(128,32,32,.1)")
      .strokeWidth(0.75);

    // -- colour by OD :
    r.fill("rgba(255," + k + "," + k + ",0.25)")
      // r.fill("rgba(255,128,64,0.75)")
      .stroke("rgba(128,32,32,.1)")
      .strokeWidth(0.75);

    r.polygon([[xL, yT], [xR, yT], [xR, yB], [xL, yB]]);
    // r.polygon([[0, 0], [0, sz], [sz, sz], [sz, 0]]);

    // r.font("monospace")
    //   .textSize(8)
    //   .textAlign("middle")
    //   .textBaseline("middle")
    //   .fill("rgba(64,64,64,0.2)")
    //   .stroke()
    //   .text(zoneName[i], (xL - xR) / 2.0, (yT - yB) / 2.0);
  });

  // r.pop();
  return r.render();
}
)});
  main.variable(observer("flowMap")).define("flowMap", ["nCols","nRows","getMax","geoString","cX","cY","mymap","getFlow"], function(nCols,nRows,getMax,geoString,cX,cY,mymap,getFlow){return(
function flowMap(r, x, y, wi, hi, idO, fCol) {
  const sz = 0.45;

  // -- make it square!
  const nSq = Math.max(nCols, nRows);

  // -- surrounding polygon:
  r.fill("rgba(255,255,200,.05)")
    .stroke("rgba(32,32,32,.15)")
    .strokeWidth(0.5)
    .polygon([[x, y], [x, y + hi], [x + wi, y + hi], [x + wi, y]]);

  const fMax = getMax(fCol);

  geoString.forEach((text, i) => {
    const gridX = parseInt(text[cX]);
    const gridY = parseInt(text[cY]);
    const xL = mymap(gridX - sz, -0.5, nSq + 0.5, x, x + wi);
    const xR = mymap(gridX + sz, -0.5, nSq + 0.5, x, x + wi);
    const yT = mymap(gridY - sz, -0.5, nSq + 0.5, y, y + hi);
    const yB = mymap(gridY + sz, -0.5, nSq + 0.5, y, y + hi);

    // -- colour by OD :
    const idD = String(text[0]);
    var fZ = getFlow(idO, idD, fCol);
    var fK = mymap(fZ, 0, fMax, 255, 0);

    // -- debug
    // if (i == 0) {
    //   console.log(i, idO, idD, fCol, fZ, fK);
    // }
    r.fill("rgba(255," + fK + "," + fK + ",0.85)")
      // r.fill("rgba(255,128,64,0.75)")
      .stroke("rgba(128,32,32,.1)")
      .strokeWidth(0.75);

    r.polygon([[xL, yT], [xR, yT], [xR, yB], [xL, yB]]);
  });

  // r.pop();
  return r.render();
}
)});
  main.variable(observer("odMap")).define("odMap", ["getMax","geoString","cX","cY","mymap","flowMap","fCol"], function(getMax,geoString,cX,cY,mymap,flowMap,fCol){return(
function odMap(r) {
  const sz = 0.5;
  const vCol = 2;
  const max = getMax(vCol);

  geoString.forEach((text, i) => {
    const gridX = parseInt(text[cX]);
    const gridY = parseInt(text[cY]);
    const idO = String(text[0]);

    // -- read and scale population :
    const pZ = parseInt(text[9]);
    var pA = mymap(pZ, 0, 650000, 0, sz * sz);
    var pR = Math.sqrt(pA);

    // -- size by population :
    r.fill("rgba(32,32,32,.05)")
      .stroke("rgba(64,64,64,.1)")
      .strokeWidth(0.75)
      .ellipse(gridX, gridY, pR);

    // gridMap(r, gridX - sz, gridY - sz, 1, 1); // -- works
    flowMap(r, gridX - sz, gridY - sz, 1, 1, idO, fCol); // -- works
  });

  return r.render();
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Make an OD Matrix ...`
)});
  main.variable(observer("exampleODmatrix")).define("exampleODmatrix", ["getIDs","Renderer","width","rType","odMatrix"], function(getIDs,Renderer,width,rType,odMatrix){return(
function exampleODmatrix() {
  const allIDs = getIDs();
  const r = new Renderer(width * 0.8, width / 2, rType).fit(
    [[-0.1, -0.1], [allIDs.length + 0.1, allIDs.length + .1 - 1]],
    25
  );

  const o = odMatrix(r, allIDs);
  return r.render();
}
)});
  main.variable(observer()).define(["exampleODmatrix"], function(exampleODmatrix){return(
exampleODmatrix()
)});
  main.variable(observer("viewof reset")).define("viewof reset", ["Inputs"], function(Inputs){return(
Inputs.button("Reset")
)});
  main.variable(observer("reset")).define("reset", ["Generators", "viewof reset"], (G, _) => G.input(_));
  main.variable(observer()).define(["animProp"], function(animProp){return(
animProp
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### System State Experiments`
)});
  main.variable(observer("isMatrix")).define("isMatrix", function(){return(
false
)});
  main.variable(observer()).define(["isMatrix"], function(isMatrix)
{
  const isColoured = true;
  const isOutlined = false;
  console.log(isMatrix);
  return "systemState set";
}
);
  main.define("initial systemState", function(){return(
{ isColoured: true, isMatrix: false }
)});
  main.variable(observer("mutable systemState")).define("mutable systemState", ["Mutable", "initial systemState"], (M, _) => new M(_));
  main.variable(observer("systemState")).define("systemState", ["mutable systemState"], _ => _.generator);
  main.variable(observer()).define(["mutable systemState"], function($0)
{
  $0.value.isMatrix = true;
}
);
  main.variable(observer()).define(["systemState"], function(systemState){return(
systemState
)});
  main.variable(observer("odMatrix")).define("odMatrix", ["fCol","getMax","getMin","mymap","gridPos","nSq","animProp","getFlow","rect","geoString"], function(fCol,getMax,getMin,mymap,gridPos,nSq,animProp,getFlow,rect,geoString){return(
function odMatrix(r, ids) {
  const sz = 0.35;
  const vCol = fCol;
  const max = getMax(vCol);
  const min = getMin(vCol);
  var x, y;

  ids.forEach((idO, nO) => {
    ids.forEach((idD, nD) => {
      // console.log(nO, idO, nD, idD);

      const mX = mymap(nO, 0, ids.length, 0, ids.length);
      const mY = mymap(nD, 0, ids.length, 0, ids.length);
      const kX = mymap(nO, 0, ids.length, 0, 255);
      const kY = mymap(nD, 0, ids.length, 0, 255);

      // -- getXY from gridPos: likely expensive!
      // let gPO = gridPos.find((gPO) => gPO.id === idO);
      // let gPD = gridPos.find((gPD) => gPD.id === idD);
      // -- getXY from gridPos without find : likely cheaper
      const gPO = gridPos[nO];
      const gPD = gridPos[nD];

      const gX =
        mymap(gPO.x, 0, nSq, 0, ids.length - 3) + mymap(gPD.x, 0, nSq, 0, 3);
      const gY =
        mymap(gPO.y, 0, nSq, 0, ids.length - 3) + mymap(gPD.y, 0, nSq, 0, 3);

      // -- Animation :
      x = mX * (1 - animProp) + gX * animProp;
      y = mY * (1 - animProp) + gY * animProp;
      const szA = mymap(animProp, 0, 1, 1, sz);

      // const gridX = parseInt(text[cX]);
      // const gridY = parseInt(text[cY]);
      // const idO = String(text[0]);

      // -- size by population :
      // r.fill("rgba(32,32,32,.05)")
      //   .stroke("rgba(64,64,64,.1)")
      //   .strokeWidth(0.75)
      //   .ellipse(gridX, gridY, pR);

      // -- show Flow - from odFile : getFlow("S12000005", "S12000029", 2)
      const f = getFlow(idO, idD, vCol);
      const kF = mymap(f, 0, max, 255, 0);
      // console.log(nO, idO, nD, idD, f, kF);

      // -- niceColour :
      // r.fill("rgba(32," + kX + "," + kY + ",.25)")
      r.fill("rgba(255," + kF + "," + kF + ",.5)")
        .stroke("rgba(64,64,64,.1)")
        .strokeWidth(0.75);
      // .ellipse(x, y, sz);
      rect(r, x, y, szA, szA);

      // -- Pop Circles
      if (nO == nD) {
        const kA = mymap(animProp, 0, 1, 0.25, 0.75);
        const pZ = parseInt(geoString[nO][9]);
        var pA = mymap(pZ, 0, 650000, 0, 1);
        var pR = Math.sqrt(pA);
        r.stroke("rgba(32,32,32," + kA + ")")
          .fill()
          .strokeWidth(0.25)
          .ellipse(x + szA / 2, y + szA / 2, pR);

        // // -- Text
        const yT = mymap(nO, 0, ids.length, 0, ids.length);
        r.stroke()
          .fill("rgba(32, 32, 32," + (1 - kA) + ")")
          .textSize(5)
          .text(geoString[nO][1], ids.length + 0.25, yT + sz + sz)
          .text(geoString[nO][1].substring(0, 2), yT + sz / 2, 0 - sz);
      }
    });
    // -- Text
    // const yT = mymap(nO, 0, ids.length, 0, ids.length);
    // r.stroke()
    //   // .fill("rgba(32, 32, 32," + 1 - animProp + ")")
    //   .fill("rgba(32, 32, 32," + kA + ")")
    //   .textSize(5)
    //   .text(geoString[nO][1], ids.length + 0.25, yT + sz + sz)
    //   .text(geoString[nO][1].substring(0, 2), yT + sz / 2, 0 - sz);
  });

  return r.render();
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
  ## Data and Stuff...

  Bits and pieces used in the above!`
)});
  main.variable(observer("layoutCols")).define("layoutCols", function(){return(
[0, 3, 5, 7]
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Columns to use from layout file (_set from slider_)`
)});
  main.variable(observer("cX")).define("cX", ["layoutCols","layout"], function(layoutCols,layout){return(
layoutCols[layout]
)});
  main.variable(observer("cY")).define("cY", ["layoutCols","layout"], function(layoutCols,layout){return(
layoutCols[layout] + 1
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Rectangle

Create a <code>rect()</code> function.`
)});
  main.variable(observer("rect")).define("rect", function(){return(
function rect(r, x, y, wi, hi) {
  r.polygon([
    [x, y],
    [x, y + hi],
    [x + wi, y + hi],
    [x + wi, y]
  ]);
  return r.render();
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Create local Mapping Function
`
)});
  main.variable(observer("mymap")).define("mymap", function(){return(
function mymap(z, inLo, inHi, outLo, outHi) {
  var inRng = inHi - inLo;
  var outRng = outHi - outLo;
  var val = outLo + outRng * ((z - inLo) / parseFloat(inRng));
  return parseFloat(val);
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`_Read OD data from file at <code>https://raw.githubusercontent.com/gicentre/scrc/main/data/grid/scotLAsGrid.csv</code> ..._`
)});
  main.variable(observer("odFile")).define("odFile", ["d3"], async function(d3){return(
await d3
  .csv(
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/flows/scotLAsFlows.csv"
  )
  .then((objs) => objs.map((o) => Object.values(o).map(String)))
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Make OD Array

Create 2D array of OD values `
)});
  main.variable(observer("makeMatrix")).define("makeMatrix", ["odFile"], function(odFile){return(
function makeMatrix(allIDs) {
  var odMatrix = [];

  odFile.forEach((text, i) => {
    const idO = String(text[0]);
    const idD = String(text[1]);
    const idZ = parseFloat(text[2]);

    // -- store the OD information:
    let odNew = {
      orig: idO,
      dest: idD,
      flow: idZ
    };
    odMatrix.push(odNew);
  });

  return odMatrix;
}
)});
  main.variable(observer()).define(["getIDs","makeMatrix"], function(getIDs,makeMatrix)
{
  const allIDs = getIDs();
  const odMatrix = makeMatrix(allIDs);
  return odMatrix;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`### Get IDs

Create list of all cell IDs.`
)});
  main.variable(observer("getIDs")).define("getIDs", ["odFile"], function(odFile){return(
function getIDs() {
  var myList = [];

  odFile.forEach((text, i) => {
    const idO = String(text[0]);
    const idD = String(text[1]);

    if (!myList.includes(idO)) {
      myList.push(idO);
      // console.log(i, idO);
    }
  });
  return myList;
}
)});
  main.variable(observer()).define(["getIDs"], function(getIDs)
{
  var allIDs = getIDs();
  return "Successfully read " + allIDs.length + " unique ids from file";
}
);
  main.variable(observer()).define(["getIDs"], function(getIDs){return(
console.log(getIDs())
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Get ODMap Position

Get OD Map position from ... er ... what?`
)});
  main.variable(observer("makeGridPos")).define("makeGridPos", ["geoString","cX","cY"], function(geoString,cX,cY){return(
function makeGridPos(allIDs) {
  var gridPos = [];

  geoString.forEach((text, i) => {
    const idO = String(text[0]);
    const gridX = parseInt(text[cX]);
    const gridY = parseInt(text[cY]);

    // -- store the Grid information:
    let gridNew = {
      id: idO,
      x: gridX,
      y: gridY
    };
    gridPos.push(gridNew);
  });

  return gridPos;
}
)});
  main.variable(observer("gridPos")).define("gridPos", ["makeGridPos"], function(makeGridPos){return(
makeGridPos()
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## Animation

Stuff to get the animation working ...`
)});
  main.variable(observer("timeToComplete")).define("timeToComplete", function()
{
  return 25000;
}
);
  main.variable(observer("animProp")).define("animProp", ["reset","animTimer","timeToComplete"], function(reset,animTimer,timeToComplete)
{
  reset;
  return animTimer(timeToComplete);
}
);
  main.variable(observer("animTimer")).define("animTimer", ["Promises"], function(Promises){return(
function* animTimer(timeToComplete = 1000, timeDelay = 5) {
  const timeBeg = Date.now(); // Poll the current time in milliseconds.
  const timeEnd = timeBeg + timeToComplete;
  let t = 0;
  let p = 0;
  yield t; // Yield an immediate result at start
  while (t <= 1) {
    t = (Date.now() - timeBeg) / (timeEnd - timeBeg);
    // -- Work out bound proportion!
    // p = Math.round((1000 * (Math.sin(Math.PI * 2 * t) + 1)) / 2) / 1000;
    p = Math.round(1000 * Math.sin(Math.PI * 2 * t)) / 1000;
    // Yield subsequent results after the given delay.
    yield Promises.delay(timeDelay, Math.max(Math.min(1, p), 0));
  }
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Testing JavaScript!`
)});
  main.variable(observer("getFlow")).define("getFlow", ["odFile"], function(odFile){return(
function getFlow(idO, idD, col) {
  var flow = -1;
  odFile.forEach((text, i) => {
    // const fO = text[0].stringify;
    // const fD = text[1].stringify;
    const fO = String(text[0]);
    const fD = String(text[1]);
    // console.log(i, idO, fO, fD, flow);
    if (fO === idO && fD === idD) {
      flow = parseInt(text[col]);
      // console.log(i, idO, fO, fD, flow);
    }
  });
  return flow;
}
)});
  main.variable(observer()).define(["getFlow"], function(getFlow){return(
getFlow("S12000005", "S12000029", 2)
)});
  main.variable(observer("getMax")).define("getMax", ["odFile"], function(odFile){return(
function getMax(col) {
  var colMax = -1;
  odFile.forEach((text, i) => {
    colMax = Math.max(colMax, parseInt(text[col]));
  });
  return colMax;
}
)});
  main.variable(observer()).define(["getMax"], function(getMax){return(
getMax(2)
)});
  main.variable(observer("getMin")).define("getMin", ["odFile"], function(odFile){return(
function getMin(col) {
  var colMin = 999999;
  odFile.forEach((text, i) => {
    colMin = Math.min(colMin, parseInt(text[col]));
  });
  return colMin;
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Objects`
)});
  main.variable(observer()).define(function()
{
  var odMap = {
    od: "S12000044.S12000010",
    z: 14
  };
  console.log(odMap.od, "=", odMap.z);
}
);
  return main;
}
