export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["demographics@1.tsv",new URL("./files/6c8cb44dc111ecf73e40fbb0dacf706746d2b6b54aa457cd0bef7771c13ed19ab7cfec31a4b2b6eeaaf5d1506522648fda6188da16a80ac51539350b20c69af1",import.meta.url)],["uk_nuts3_osgb_simpl@1.geojson",new URL("./files/74b87900b97b242a46b52705ff5b332ee0a6a7202b5ea9b31890263b88414d3288af50f2ef086e8f8b7c3b754b65ef6529d95ad9d1de3669d70068d94eb469e5",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Zoomable gridded Glyphmap of Scottish population

This is an example of a gridded Glyphmap. Gridding is done in screen-space. A key concept here, is that the **level of aggregation is determined by the zoom level**, enabling data to be explored at different spatial scales.

Drag and zoom the map to explore the population at different scales. You can also change the grid-size and smooth the data.`
)});
  main.variable(observer("viewof gridWH")).define("viewof gridWH", ["Inputs"], function(Inputs){return(
Inputs.range([5, 100], {
  step: 5,
  value: 25,
  label: "Grid resolution"
})
)});
  main.variable(observer("gridWH")).define("gridWH", ["Generators", "viewof gridWH"], (G, _) => G.input(_));
  main.variable(observer("viewof useSmooth")).define("viewof useSmooth", ["Inputs"], function(Inputs){return(
Inputs.checkbox(["Smooth"], { label: "Use smoothing" })
)});
  main.variable(observer("useSmooth")).define("useSmooth", ["Generators", "viewof useSmooth"], (G, _) => G.input(_));
  main.variable(observer("glyphmap")).define("glyphmap", ["demographics","drawGridMap","regionsBoundaries","gridWH","zoomPan","useSmooth"], function(demographics,drawGridMap,regionsBoundaries,gridWH,zoomPan,useSmooth)
{
  let xs = demographics.map((d) => d.x);
  let ys = demographics.map((d) => d.y);
  let attribCounts = demographics.map((d) => Object.values(d.pop));
  return drawGridMap(
    xs,
    ys,
    attribCounts,
    regionsBoundaries,
    gridWH,
    zoomPan,
    useSmooth["Smooth"]
  );
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`These notebook is based on joint work with Richard Reeve and Claire Harris at the University of Glasgow, as part of the RAMP-VIS project.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Data

The 1m population data for is aggregated into 10-year age bands when imported. We also load Scottish Council Areas.`
)});
  main.variable(observer("demographics")).define("demographics", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.tsvParse(
  await FileAttachment("demographics@1.tsv").text(),
  (d) => {
    return {
      //...d,
      x: parseInt(d.x),
      y: parseInt(d.y),
      pop: {
        age0_9: Object.values(d) //convert to array
          .slice(2, 12) //get subset
          .map((x) => parseInt(x)) //convert each to int
          .reduce((accumulator, currentValue) => accumulator + currentValue), //sum them using reduce
        age10_19: Object.values(d) //convert to array
          .slice(12, 22) //get subset
          .map((x) => parseInt(x)) //convert each to int
          .reduce((accumulator, currentValue) => accumulator + currentValue), //sum them using reduce
        age20_29: Object.values(d) //convert to array
          .slice(22, 32) //get subset
          .map((x) => parseInt(x)) //convert each to int
          .reduce((accumulator, currentValue) => accumulator + currentValue), //sum them using reduce
        age30_39: Object.values(d) //convert to array
          .slice(32, 42) //get subset
          .map((x) => parseInt(x)) //convert each to int
          .reduce((accumulator, currentValue) => accumulator + currentValue), //sum them using reduce
        age40_49: Object.values(d) //convert to array
          .slice(42, 52) //get subset
          .map((x) => parseInt(x)) //convert each to int
          .reduce((accumulator, currentValue) => accumulator + currentValue), //sum them using reduce
        age50_59: Object.values(d) //convert to array
          .slice(52, 62) //get subset
          .map((x) => parseInt(x)) //convert each to int
          .reduce((accumulator, currentValue) => accumulator + currentValue), //sum them using reduce
        age60_69: Object.values(d) //convert to array
          .slice(62, 72) //get subset
          .map((x) => parseInt(x)) //convert each to int
          .reduce((accumulator, currentValue) => accumulator + currentValue), //sum them using reduce
        age70_79: Object.values(d) //convert to array
          .slice(72, 82) //get subset
          .map((x) => parseInt(x)) //convert each to int
          .reduce((accumulator, currentValue) => accumulator + currentValue), //sum them using reduce
        age80_89: Object.values(d) //convert to array
          .slice(82, 92) //get subset
          .map((x) => parseInt(x)) //convert each to int
          .reduce((accumulator, currentValue) => accumulator + currentValue), //sum them using reduce
        test: d["output_Susceptible_age0-9_t1"]
      }
    };
  }
)
)});
  main.variable(observer("regionsBoundaries")).define("regionsBoundaries", ["FileAttachment"], async function(FileAttachment){return(
JSON.parse(
  await FileAttachment("uk_nuts3_osgb_simpl@1.geojson").text()
)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Technique

Placing glyphs/subplots on maps has a long history. Subplots (miniature charts) such as barcharts, piecharts, timeseries graphs are often placed on choropleth maps to depict multivariate data about them, including [Jacque Bertin in his influencial book](https://www.semanticscholar.org/paper/Semiology-of-Graphics-Diagrams%2C-Networks%2C-Maps-Bertin/22be1cebc94d9eedc2cc6c000bee5222a37a9fd0) Icons or glyphs for representing multiclass and multivariate fields (data that continuouly vary data over space) have been shown have been demonstated by [Pickett and Grinstein](http://www.ifs.tuwien.ac.at/~silvia/wien/vu-infovis/references/pickett-ieee88.pdf) and more recently by [Wickham *et al* (2012)](https://vita.had.co.nz/papers/glyph-maps.html). Wickham demonstrates "gyphmaps" - how arranging subplots/glyphs in regular arrays is an effective method for depicting environmental data in the context of climate science. He compared them to heatmaps in which a multivariate glyphs replace colour lightness indicating a univariate value. There was a focus on gridded data but it wasn't limited to that. [Slingsby *et al*, 2016](https://openaccess.city.ac.uk/id/eprint/20884/) developed some of the ideas further including the use of interactivity for exploring data at multiple spatial spaces. He used the term "Tilemaps", but did not limit these to gridded aggregations, but also aggregations that are based on irregular regions (e.g. administrative units) that are laid out into regular array using algorithms (e.g. [Meulemans *et al*, 2016](http://openaccess.city.ac.uk/15167/)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix`
)});
  main.variable(observer("geoBounds")).define("geoBounds", ["d3","demographics"], function(d3,demographics)
{
  const bb = {};
  bb.minX = d3.min(demographics, d => d.x);
  bb.maxX = d3.max(demographics, d => d.x);
  bb.minY = d3.min(demographics, d => d.y);
  bb.maxY = d3.max(demographics, d => d.y);

  return bb;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`zoomPan is created in a separate cell so that the zoom/pan state persists even when the map is redrawn.`
)});
  main.variable(observer("zoomPan")).define("zoomPan", ["d3"], function(d3)
{
  const z = d3.zoom();
  z.transform = d3.zoomIdentity;
  return z;
}
);
  main.variable(observer("scaleBBToViewport")).define("scaleBBToViewport", function(){return(
function scaleBBToViewport(bb, screenW, screenH) {
  const screenRatio = screenW / screenH;
  const coordRatio = (bb.maxX - bb.minX) / (bb.maxY - bb.minY);
  if (screenRatio > coordRatio) {
    var oldW = bb.maxX - bb.minX;
    var newW = (bb.maxY - bb.minY) * screenRatio;
    bb.minX -= (newW - oldW) / 2;
    bb.maxX += (newW - oldW) / 2;
    //console.log("option1");
  } else {
    var oldH = bb.maxY - bb.minY;
    var newH = (bb.maxX - bb.minX) / screenRatio;
    bb.minY -= (newH - oldH) / 2;
    bb.maxY += (newH - oldH) / 2;
    //console.log("option2");
  }
  return bb;
}
)});
  main.variable(observer("drawGridMap")).define("drawGridMap", ["DOM","d3","geoBounds","scaleBBToViewport","kernelSmooth"], function(DOM,d3,geoBounds,scaleBBToViewport,kernelSmooth){return(
function (
  xs,
  ys,
  attribCounts,
  boundaries,
  gridWH,
  zoomPan,
  useSmooth
) {
  //console.log("creatednew");
  const screenW = 600;
  const screenH = 500;
  const context = DOM.context2d(screenW, screenH);

  d3.select(context.canvas).call(
    zoomPan.scaleExtent([1, 8]).on("zoom", ({ transform }) => zoomed(transform))
  );

  function zoomed(transform) {
    zoomPan.transform = transform;

    //zoomed(zoomPanState);
    context.clearRect(0, 0, screenW, screenH);

    var bb = geoBounds;
    bb = scaleBBToViewport(bb, screenW, screenH);

    const scaleX = d3
      .scaleLinear()
      .domain([bb.minX, bb.maxX])
      .range([0, screenW]);
    const scaleY = d3
      .scaleLinear()
      .domain([bb.minY, bb.maxY])
      .range([screenH, 0]);

    const numCols = Math.round(screenW / gridWH);
    const numRows = Math.round(screenH / gridWH);

    let grid = Array(numCols)
      .fill()
      .map(() =>
        Array(numRows)
          .fill()
          .map(() => Array(attribCounts[0].length).fill(0))
      );

    //console.log(zoomPan.transform);
    // Count number of points in each cell (in screen space) by finding each point's rounded position.
    for (let i = 0; i < xs.length; i++) {
      const pixX = Math.round(
        (scaleX(xs[i]) * zoomPan.transform.k + zoomPan.transform.x) / gridWH
      );
      const pixY = Math.round(
        (scaleY(ys[i]) * zoomPan.transform.k + zoomPan.transform.y) / gridWH
      );
      if (pixX >= 0 && pixX < numCols && pixY >= 0 && pixY < numRows)
        for (let j = 0; j < attribCounts[i].length; j++) {
          grid[pixX][pixY][j] += attribCounts[i][j];
        }
    }
    if (useSmooth) {
      grid = kernelSmooth(grid, 1);
      console.log("Using smooth");
    }

    //  if (maxValue < 0) {
    //get max
    let maxV = 0;
    for (let col = 0; col < grid.length; col++)
      for (let row = 0; row < grid[col].length; row++)
        for (let j = 0; j < attribCounts[0].length; j++)
          if (grid[col][row][j] > maxV) maxV = grid[col][row][j];
    //    mutable maxValue = maxV;
    //  }

    const barW = d3.scaleLinear().domain([0, maxV]).range([0, gridWH]);

    const barH = gridWH / attribCounts[0].length;
    for (let col = 0; col < grid.length; col++) {
      for (let row = 0; row < grid[col].length; row++) {
        for (let j = 0; j < attribCounts[0].length; j++) {
          context.beginPath();
          context.fillStyle = "#00000033";
          context.rect(
            col * gridWH + gridWH / 2 - barW(grid[col][row][j]) / 2,
            row * gridWH + barH * j,
            barW(grid[col][row][j]),
            barH
          );
          context.fill();
        }
      }
    }

    //draw boundaries
    for (const geoBoundary of boundaries.features) {
      const coordinates =
        geoBoundary.geometry.type === "Polygon"
          ? [geoBoundary.geometry.coordinates]
          : geoBoundary.geometry.coordinates;

      for (const part of coordinates) {
        context.beginPath();
        context.strokeStyle = "#ccc";
        for (const ring of part) {
          for (const coord of ring) {
            context.lineTo(
              scaleX(coord[0]) * zoomPan.transform.k + zoomPan.transform.x,
              scaleY(coord[1]) * zoomPan.transform.k + zoomPan.transform.y
            );
          }
          context.stroke();
        }
      }

      context.restore();
    }
  }
  zoomed(zoomPan.transform);

  return context.canvas;
}
)});
  main.variable(observer("kernelSmooth")).define("kernelSmooth", function(){return(
function kernelSmooth(grid, densityKernelRadius) {
  const grid2 = Array(grid.length)
    .fill()
    .map(() =>
      Array(grid[0].length)
        .fill()
        .map(() => Array(grid[0][0].length).fill(0))
    );
  //  console.log("grid2=", grid2);

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      for (let cat = 0; cat < grid[x][y].length; cat++) {
        //        console.log(cat);
        var newV = 0;
        var cumW = 0;
        for (var kx = -densityKernelRadius; kx <= densityKernelRadius; kx++) {
          for (var ky = -densityKernelRadius; ky <= densityKernelRadius; ky++) {
            if (
              x + kx >= 0 &&
              x + kx < grid.length &&
              y + ky >= 0 &&
              y + ky < grid[x].length
            ) {
              let v = grid[x + kx][y + ky][cat];
              if (v > 0) {
                //                console.log(v);
              }
              let dist = Math.sqrt(Math.pow(kx, 2) + Math.pow(ky, 2));
              if (dist < densityKernelRadius) {
                //console.log(v);
                //if (v.isNan()) v = 0;
                var w =
                  (densityKernelRadius - dist) / (densityKernelRadius + dist);
                newV += v * w;
                cumW += w;
              }
            }
          }
        }
        grid2[x][y][cat] = newV / cumW;
      }
    }
  }
  //  console.log("grid2=", grid2);

  return grid2;
}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3")
)});
  return main;
}
