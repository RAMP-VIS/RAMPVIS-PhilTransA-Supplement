import define1 from "./62d26743f59aac51@3814.js";
import define2 from "./79750b3b8e929d9d@223.js";
import define3 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["earthMoversDistance.jpg",new URL("./files/0774ad33e6feb31286c658f22b6f32bcde42eab530d1da5b415adf5d4630679196c1d89f6b72c0426b09be6fc54dc12e2e2fce8fc25944a2f6bb28d0c826ccc2",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Directional flow curves`
)});
  main.variable(observer()).define(["ui","htl"], function(ui,htl)
{
  // If this page is outside of Observable, set the default styles to approximate
  // the appearance of the Observable Look and Feel.
  if (ui === "custom") {
    return htl.html`<style>@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap');

  body {
     font-family: 'Source Serif Pro', serif;
     font-weight: 400;
     line-height: 1.6;
     color: #333;
     padding-left: 2em;
     padding-right: 2em;
  }

  p,div,ul,ol,li {
    max-width: 640px;
  }

  form,table,tr,td,th {
    font-family: sans-serif !important;
    font-size: 9pt !important;
    color: #333;
  }

  table {
    margin-top:0.5em !important;
    margin-bottom:0.5em !important;
  }

  .observablehq .observablehq--inspect {
    display: none;
  }
  </style>

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@jwolondon/rampvis_idiom_directional_flow_curves">https://observablehq.com/@jwolondon/rampvis_idiom_directional_flow_curves</a></pre>`;
  } else {
    return htl.html`<pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is a live version of the Observable Notebook supplement for the RAMPVIS PhilTransA submission titled </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</pre>`;
  }
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`## 1. User Story`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` * As **an epidemiological model builder**
 * I would like to
    * **understand where the main flows of people are across the country.**
    * **understand these over a range of spatial scales** (e.g. local intra-city commuting to national cross-country movements).
    * **identify asymmetric flows ** (where movements of people into an area show different patterns to flows out of an area).
    *  **break down flows by employment category and examine their differences and similarities** (e.g. do office workers show different movement patterns to students and will they have different impacts on disease transmission?).
    *  **represent flows visually in a way that allows me to do the above.** Currently my flow maps are too cluttered and do not show direction or local flows clearly enough.
 * so that I can **assess the effect of movement of people and employment structure on my epidemiological modelling.** It would allow me to evaluate the degree to which my modelling is dependent on employment structure, and whether geographic variations in that structure are important in understanding disease transmission.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. Data

Source data relate to Scotland Local Authority regions (LAs) and Greater Glasgow/Clyde Medium Super-output Areas (ggMSOAs). Each of these two geographies are represented by topoJSON boundary files, centroid locations, grid positions and commuting flows broken down by employment type.`
)});
  main.variable(observer("data")).define("data", function(){return(
{
  laBoundaries:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/scotLAs2017.json",
  laFeatures: "scotLAs2017",
  laCentroids:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/scotLACentroids.csv",
  laGrid:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/grid/scotLAsGrid.csv",
  laFlows:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/flows/scotLAsFlows.csv",
  ggBoundaries:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/greaterGlasgow.json",
  ggFeatures: "greaterGlasgow",
  ggCentroids:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/greaterGlasgowCentroids.csv",
  ggGrid:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/grid/greaterGlasgowGrid.csv",
  ggFlows:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/flows/greaterGlasgowMSOAFlows.csv"
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`From these core data sources, we can derive others by performing relation joints between their tabular representation. Specifically, to georeference origin-destination locations we can join the flow tables with the centroid and grid tables using the common GSS as key. Table joining is implemented with the [Arquero](https://observablehq.com/@uwdata/introducing-arquero) pacakge.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*Georeferenced LA flows:*`
)});
  main.variable(observer("viewof laGeoTable")).define("viewof laGeoTable", ["d3","data","aq"], async function(d3,data,aq)
{
  // Store input files as tables with standardised column names.
  const centroidTable = await d3
    .csv(data.laCentroids, d3.autoType)
    .then((csv) =>
      aq
        .from(csv)
        .rename({ lad17cd: "gss", lad17nm: "name" })
        .select("gss", "name", "cx", "cy")
    );
  const gridTable = await d3
    .csv(data.laGrid, d3.autoType)
    .then((csv) =>
      aq
        .from(csv)
        .rename({ regionCode: "gss", regionName: "name", regionTXT: "sName" })
    );

  // Join grid and centroid tables
  return centroidTable
    .join(gridTable, ["gss"], [aq.all(), ["g79X", "g79Y", "sName"]])
    .rename({ g79X: "gx", g79Y: "gy" })
    .view({ height: 140 });
}
);
  main.variable(observer("laGeoTable")).define("laGeoTable", ["Generators", "viewof laGeoTable"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<i>&nbsp;</i>`
)});
  main.variable(observer("viewof laGeoFlows")).define("viewof laGeoFlows", ["d3","data","aq","laGeoTable"], async function(d3,data,aq,laGeoTable)
{
  const flowTable = await d3.csv(data.laFlows, d3.autoType).then(
    (csv) =>
      aq
        .from(csv)
        .rename({ source: "o", dest: "d" })
        .filter((datum) => datum.o != datum.d) // Remove intra-area flows.
  );

  // Add centroid and grid locations for each od pair.
  return flowTable
    .join(
      laGeoTable,
      ["o", "gss"],
      [aq.not("o"), aq.not("gss", "name", "sName")]
    )
    .rename({ cx: "ox", cy: "oy", gx: "ogx", gy: "ogy" })
    .join(
      laGeoTable,
      ["d", "gss"],
      [aq.not("d"), aq.not("gss", "name", "sName")]
    )
    .rename({ cx: "dx", cy: "dy", gx: "dgx", gy: "dgy" })
    .view({ height: 140 });
}
);
  main.variable(observer("laGeoFlows")).define("laGeoFlows", ["Generators", "viewof laGeoFlows"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`*Georeferenced Greater Glasgow flows:*`
)});
  main.variable(observer("viewof ggGeoTable")).define("viewof ggGeoTable", ["d3","data","aq"], async function(d3,data,aq)
{
  const centroidTable = await d3
    .csv(data.ggCentroids, d3.autoType)
    .then((csv) =>
      aq
        .from(csv)
        .rename({ IZ_CODE: "gss", IZ_NAME: "name" })
        .select("gss", "name", "cx", "cy")
    );
  const gridTable = await d3
    .csv(data.ggGrid, d3.autoType)
    .then((csv) =>
      aq
        .from(csv)
        .rename({ regionCode: "gss", regionName: "name", council: "sName" })
    );

  // Join grid and centroid tables
  return centroidTable
    .join(gridTable, ["gss"], [aq.all(), ["gridX", "gridY", "sName"]])
    .rename({ gridX: "gx", gridY: "gy" })
    .view({ height: 140 });
}
);
  main.variable(observer("ggGeoTable")).define("ggGeoTable", ["Generators", "viewof ggGeoTable"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<i>&nbsp;</i>`
)});
  main.variable(observer("viewof ggGeoFlows")).define("viewof ggGeoFlows", ["d3","data","aq","ggGeoTable"], async function(d3,data,aq,ggGeoTable)
{
  const flowTable = await d3.csv(data.ggFlows, d3.autoType).then(
    (csv) =>
      aq
        .from(csv)
        .rename({ origin: "o", dest: "d" })
        .filter((datum) => datum.o != datum.d) // Remove intra-area flows.
  );

  // Add centroid and grid locations for each od pair.
  return flowTable
    .join(
      ggGeoTable,
      ["o", "gss"],
      [aq.not("o"), aq.not("gss", "name", "sName")]
    )
    .rename({ cx: "ox", cy: "oy", gx: "ogx", gy: "ogy" })
    .join(
      ggGeoTable,
      ["d", "gss"],
      [aq.not("d"), aq.not("gss", "name", "sName")]
    )
    .rename({ cx: "dx", cy: "dy", gx: "dgx", gy: "dgy" })
    .view({ height: 140 });
}
);
  main.variable(observer("ggGeoFlows")).define("ggGeoFlows", ["Generators", "viewof ggGeoFlows"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Directional Flow Curves`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A *directional flow curve* is a visual representation of a flow between an origin and destination, where the shape of the curve joining the two locations can indicate the direction of flow. Uses an asymmetric Bézier curve with flow direction implied from the straighter to the bendier end. The thickness of the line can indicate flow magnitude and its colour, category of flow or double encoding of magnitude with a sequential colour scheme.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The form of the curve is controlled by two parameters, *angle* and *magnitude*. Together these determine the asymmetry and 'curviness' of each line. In the example below, we show flows from A->B and A->C in red and B->A and C->A in blue.`
)});
  main.variable(observer("dFlowCurveParam")).define("dFlowCurveParam", function(){return(
([ox, oy], [dx, dy], cur, asym) => {
  const curveAngle = (cur * Math.PI) / 180;
  const cosA = Math.cos(curveAngle);
  const sinA = Math.sin(curveAngle);
  const x = (ox - dx) * asym;
  const y = (oy - dy) * asym;
  const cx = dx + x * cosA - y * sinA;
  const cy = dy + y * cosA + x * sinA;
  return [
    [ox, oy],
    [cx, cy],
    [dx, dy],
    [dx, dy]
  ];
}
)});
  main.variable(observer("viewof angle")).define("viewof angle", ["Inputs"], function(Inputs){return(
Inputs.range([-132, 132], {
  value: 90,
  step: 1,
  label: "Angle (degrees)"
})
)});
  main.variable(observer("angle")).define("angle", ["Generators", "viewof angle"], (G, _) => G.input(_));
  main.variable(observer("viewof mag")).define("viewof mag", ["Inputs"], function(Inputs){return(
Inputs.range([0, 1], {
  value: 0.25,
  step: 0.01,
  label: "Magnitude"
})
)});
  main.variable(observer("mag")).define("mag", ["Generators", "viewof mag"], (G, _) => G.input(_));
  main.variable(observer()).define(["dFlowCurveParam","angle","mag","Renderer"], function(dFlowCurveParam,angle,mag,Renderer)
{
  const w = 450;
  const h = 315;
  const a = [50, h / 2];
  const b = [w / 2, h / 2];
  const c = [w - 50, h / 2];
  const aToB = dFlowCurveParam(a, b, angle, mag);
  const aToC = dFlowCurveParam(a, c, angle, mag);
  const bToA = dFlowCurveParam(b, a, angle, mag);
  const cToA = dFlowCurveParam(c, a, angle, mag);
  return new Renderer(w, h)
    .stroke("#ccc")
    .pointSize(4)
    .textBaseline("middle")
    .textSize(20)
    .line([a, c])
    .stroke()
    .points([a, b, c])
    .textAlign("right")
    .text("A", ...a)
    .textAlign("left")
    .text("B", ...b)
    .text("C", ...c)
    .strokeWidth(3)
    .stroke("#c33")
    .fill()
    .bezier(aToB)
    .bezier(aToC)
    .stroke("#33c")
    .fill()
    .bezier(cToA)
    .bezier(bToA)
    .render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`The technique carries several advantages over straight line representations:
* Co-linearities are avoided (set magnitude to 0 above to see example of the problem this solves)
* Direction is encoded.
* Visual complexity is reduced compared to using arrow symbolisation.

*Computational note:* Setting the angle to 90 degrees with a fixed magnitude allows a faster computation of the Bézier control points as we can dispense with the trigonometrical calculations.`
)});
  main.variable(observer("dFlowCurve")).define("dFlowCurve", function(){return(
([ox, oy], [dx, dy], reverse = false) => [
  [ox, oy],
  [
    dx - (reverse ? -0.25 : 0.25) * (oy - dy),
    dy + (reverse ? -0.25 : 0.25) * (ox - dx)
  ],
  [dx, dy],
  [dx, dy]
]
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Indicating flows with lines is relatively intuitive, requiring little in the way of explanation or learning to interpret. Deducing the direction of flow from curvature requires a little practice, but the allocation of a curve's straight end to origin and curved end to destination follows a simple [physical metaphor](https://par.nsf.gov/servlets/purl/10087033) (Parsons, 2018) of setting out on a bicycle in a straight line and curving to a 'skid stop' at its destination.

Geographically embedded flows that might concentrate in clusters (such as urban centres) show characteristic radial patterns if they are dominated by inflows or outflows. Relatively little learning is required to recognise these two patterns and therefore differentiate centres dominated by inflows from those with outflows. Try changing the proportion of inflows (red) and outflows (blue) to see these two radial patterns.`
)});
  main.variable(observer("viewof inOut")).define("viewof inOut", ["Inputs"], function(Inputs){return(
Inputs.range([0, 1], {
  value: 1,
  step: 0.01,
  label: "Outflow - Inflow"
})
)});
  main.variable(observer("inOut")).define("inOut", ["Generators", "viewof inOut"], (G, _) => G.input(_));
  main.variable(observer()).define(["Renderer","inOut","dFlowCurve"], function(Renderer,inOut,dFlowCurve)
{
  const w = 300;
  const h = 300;
  const [cx, cy] = [w / 2, h / 2];
  const outers = [];
  for (let a = 0; a < 2 * Math.PI; a += Math.PI / 5) {
    for (let i = 0; i < 4; i++) {
      const r = (Math.random() * h) / 2;
      outers.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  }
  const r = new Renderer(w, h).fill();

  outers.forEach((p) => {
    if (Math.random() < inOut) {
      r.stroke("#c33").bezier(dFlowCurve(p, [cx, cy]));
    } else {
      r.stroke("#33c").bezier(dFlowCurve([cx, cy], p));
    }
  });

  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. Origin and Context`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The use of asymmetric Bézier curves to show directional connection can be attributed to [Fekete et al (2003)](http://www.cs.umd.edu/hcil/trs/2003-32/2003-32.pdf) who used such curves to indicate edges in a (mathematical) graph. They emphasised the ability to show many links with relatively little visual clutter. The first use of directional curves in a geographic context was given by [Wood et al (2011)](https://openaccess.city.ac.uk/id/eprint/538/) when visualizing large numbers of flows of people riding bicycles in an urban setting. Note that Wood et al reversed the origin-destination to straight-curved mapping compared to Fekete et al, in order to emphasise the physical analogue of a bicycle coming to a rapid halt.

[Wood et al (2011)](https://doi.org/10.3138/carto.46.4.239) and later works ([Beecham and Wood, 2014](https://doi.org/10.1080/03081060.2013.844903); [Beecham et al, 2014](https://doi.org/10.1016/j.compenvurbsys.2013.10.007); [Wood et al, 2014](https://doi.org/10.1109/TVCG.2014.2346323)) demonstrated their scalability in a visualization context showing many thousands of flows and with typical geographic structures related to patterns of population movement.

There remain some limitations with this approach. Geographically embedded flow lines suffer from *distance saliency bias* where flows over longer distances result in longer and more visually dominant lines, even if they are not the most important ([Wood et al, 2010](https://doi.org/10.1179/000870410X12658023467367)). They do not show intra-area flows (flow from a location back to itself) and so require an addtional form of symbolisation if these are to be represented. Similarly, short flows between very near locations can be hard to detect visually (although this can be overcome to some extent though grid mapping and other quasi-spatial projections ([Meulemans et al, 2016](https://doi.org/10.1109/TVCG.2016.2598542)). [Jenny et al (2018)](https://doi.org/10.1080/15230406.2016.1262280) observed that flow direction arrows were preferred over asymmetric curves although their studies were limited to relatively simple patterns of flows. They also recommended that data-dependent positioning of curves be used to minimise occlusion and crossing lines.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 5. Examples`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### We are the City

Animation that uses directional flow curves to show movement across London via public bicycle sharing scheme:`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<iframe src="https://player.vimeo.com/video/66477874?h=95e9e86a71" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/66477874">We are the city</a> from <a href="https://vimeo.com/jowood">Jo Wood</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`### Modelling Checkpoint-based movement

Showing modelled flows using 'earth mover's distance' for sensor data:

![earthMoversDistance.jpg](${await FileAttachment("earthMoversDistance.jpg").url()})

*Flow estimations of people in central London based on least cost movement between mobile telephone density surfaces over the 5 min period.*

**Duckham, M.**, **van Kreveld, M.**, **Purves, R.**, **Speckmann, B.**, **Tao, Y.**, **Verbeek, K.** and **Wood, J.** (2016). [Modeling checkpoint-based movement with the earth mover’s distance](https://openaccess.city.ac.uk/id/eprint/17712/1/emd-grid.pdf). In *The Annual International Conference on Geographic Information Science*, pp.225-239. Springer.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. Description and use`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Epidemiological modellers wanted to see the **main flows of people across the country**. Using directional flow curves with width proportional to the square root of estimated daily commuting numbers between Scottish LAs, we see the main inter-region flow patterns. This reveals the [central belt](https://en.wikipedia.org/wiki/Central_Belt) and begins to show some of the asymmetries of flow such as those into and out of Aberdeen City and its surroundings.`
)});
  main.variable(observer("laColours")).define("laColours", function(){return(
(opacity = "ff") => {
  const clrMap = new Map();

  clrMap.set("Clackmannanshire", "#9a4e87" + opacity);
  clrMap.set("East Ayrshire", "#5bc34e" + opacity);
  clrMap.set("East Lothian", "#9b58cb" + opacity);
  clrMap.set("East Renfrewshire", "#9fba36" + opacity);
  clrMap.set("Na h-Eileanan Siar", "#586fd8" + opacity);
  clrMap.set("Falkirk", "#d0af3f" + opacity);
  clrMap.set("Dumfries and Galloway", "#2d7a59" + opacity);
  clrMap.set("Fife", "#559532" + opacity);
  clrMap.set("Highland", "#de386a" + opacity);
  clrMap.set("Inverclyde", "#63c47c" + opacity);
  clrMap.set("Midlothian", "#d04988" + opacity);
  clrMap.set("Moray", "#468c4e" + opacity);
  clrMap.set("North Ayrshire", "#d24132" + opacity);
  clrMap.set("Orkney Islands", "#3abbcc" + opacity);
  clrMap.set("Perth and Kinross", "#e1852f" + opacity);
  clrMap.set("West Lothian", "#6196d4" + opacity);
  clrMap.set("Scottish Borders", "#ab7d2c" + opacity);
  clrMap.set("Shetland Islands", "#6b61a5" + opacity);
  clrMap.set("South Ayrshire", "#888c2f" + opacity);
  clrMap.set("Renfrewshire", "#c490da" + opacity);
  clrMap.set("West Dunbartonshire", "#586a18" + opacity);
  clrMap.set("South Lanarkshire", "#e388a6" + opacity);
  clrMap.set("Stirling", "#5cbf9d" + opacity);
  clrMap.set("Aberdeen City", "#387392" + opacity);
  clrMap.set("Aberdeenshire", "#d256b7" + opacity);
  clrMap.set("Argyll and Bute", "#b75059" + opacity);
  clrMap.set("City of Edinburgh", "#afb16c" + opacity);
  clrMap.set("Angus", "#97455b" + opacity);
  clrMap.set("Dundee City", "#627037" + opacity);
  clrMap.set("North Lanarkshire", "#a35229" + opacity);
  clrMap.set("East Dunbartonshire", "#dc966e" + opacity);
  clrMap.set("Glasgow City", "#85682d" + opacity);
  return clrMap;
}
)});
  main.variable(observer()).define(["laGeoFlows","d3","data","topojson","Renderer","laColours","dFlowCurve"], async function(laGeoFlows,d3,data,topojson,Renderer,laColours,dFlowCurve)
{
  const resolve = (obj, expr) => expr.split(".").reduce((o, i) => o[i], obj);
  const zip = (a, b, c, d, e) => a.map((k, i) => [k, b[i], c[i], d[i], e[i]]);
  const ods = zip(
    laGeoFlows.array("ox"),
    laGeoFlows.array("oy"),
    laGeoFlows.array("dx"),
    laGeoFlows.array("dy"),
    laGeoFlows.array("total")
  );
  const maxFlow = Math.max(...laGeoFlows.array("total"));

  const regions = await d3
    .json(data.laBoundaries)
    .then((feats) =>
      topojson.feature(feats, resolve(feats.objects, data.laFeatures))
    );

  const r = new Renderer(400, 650)
    .stroke("white")
    .strokeWidth(2)
    .setProjection(d3.geoIdentity().reflectY(true))
    .geoShape(regions, "properties.lad17nm", (la) => laColours("2a").get(la));

  r.stroke("brown").fill();
  ods.forEach(([ox, oy, dx, dy, flow]) =>
    r
      .strokeWidth(Math.sqrt((8 * flow) / maxFlow))
      .bezier(dFlowCurve([ox, oy], [dx, dy], true))
  );

  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`The geography of Scotland makes it particularly vulnerable to distance saliency bias, especially the small flows to and from the highlands, Western Isles and Northern Isles. In response to this problem we remapped the geography onto a grid ([Meulemans et al, 2016](https://doi.org/10.1109/TVCG.2016.2598542)) and used the same directional flow curve idiom:`
)});
  main.variable(observer()).define(["laGeoFlows","laGeoTable","laColours","Renderer","dFlowCurve"], function(laGeoFlows,laGeoTable,laColours,Renderer,dFlowCurve)
{
  const zip = (a, b, c, d, e) => a.map((k, i) => [k, b[i], c[i], d[i], e[i]]);
  const ods = zip(
    laGeoFlows.array("ogx"),
    laGeoFlows.array("ogy"),
    laGeoFlows.array("dgx"),
    laGeoFlows.array("dgy"),
    laGeoFlows.array("total")
  );
  const maxFlow = Math.max(...laGeoFlows.array("total"));
  const maxCol = Math.max(...laGeoTable.array("gx"));
  const maxRow = Math.max(...laGeoTable.array("gy"));
  const clrMap = laColours("2a");

  const r = new Renderer(525, 675)
    .fit([
      [-0.5, -0.5],
      [maxCol + 0.5, maxRow + 0.5]
    ])
    .stroke("white")
    .strokeWidth(2)
    .textAlign("middle")
    .textBaseline("top")
    .textSize(4);

  laGeoTable.objects().forEach((row) =>
    r
      .fill(clrMap.get(row.name))
      .polygon([
        [row.gx - 0.5, row.gy - 0.5],
        [row.gx + 0.5, row.gy - 0.5],
        [row.gx + 0.5, row.gy + 0.5],
        [row.gx - 0.5, row.gy + 0.5]
      ])
      .push()
      .fill("black")
      .stroke()
      .text(row.name, row.gx, row.gy)
      .pop()
  );

  r.stroke("rgba(152,52,48,0.4)").fill();
  ods.forEach(([ogx, ogy, dgx, dgy, flow]) =>
    r
      .strokeWidth(Math.pow((30 * flow) / maxFlow, 0.7))
      .bezier(dFlowCurve([ogx, ogy], [dgx, dgy]))
  );

  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`## Flows by employment sector

The Simple Network Flow model differentiates between employment sector so it is important that modellers can see the extent to which the geographic pattern of flows vary by sector under various conditions of lockdown. The following categories were used:

|Category | Explanation |
| ------- | ----------- |
|LikelyOperating | Industries in which workers are in key roles and so probably travelling under lockdown|
|OtherMiddle | Those employed in industries less likely to be working under lockdown, but who may begin working as lockdown loosens. Based on Scottish ordering of when people in particular roles are able to work.|
|OfficeClosed | Those working in offices who are unlikely to be travelling during lockdown|
|OtherClosed | others in employment categories who are unlikely to be travelling during lockdown, including the retail, real estate, cultural and hospitality sectors. |`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Given the need for modellers to examine differences between categories we computed these differences directly by comparing flows for each compared with a baseline of 'likelyOperating'. Using the same flow curve geometries we coloured lines according to magnitude of difference (as a *signed chi* statistic) and their width according to overall magnitude of commuting flow. Orange and red shades indicate that more workers from a given employment category travel than those who are ‘likelyOperating’. The blue shades mean that fewer from this category are traveling than those in ‘likelyOperating’ roles. Darker colours are bigger differences, pale yellows mean that numbers in the two categories of job are about the same.`
)});
  main.variable(observer()).define(["d3","laGeoFlows","laGeoTable","laColours","Renderer","dFlowCurve"], function(d3,laGeoFlows,laGeoTable,laColours,Renderer,dFlowCurve)
{
  const zip = (a, b, c, d, e, f) =>
    a.map((k, i) => [k, b[i], c[i], d[i], e[i], f[i]]);

  const cScale = d3.scaleSequential(d3.interpolateRdYlBu);

  const ods = zip(
    laGeoFlows.array("ogx"),
    laGeoFlows.array("ogy"),
    laGeoFlows.array("dgx"),
    laGeoFlows.array("dgy"),
    laGeoFlows.array("diffOtMi_LiOp"),
    laGeoFlows.array("total")
  );
  const maxFlow = Math.max(...laGeoFlows.array("total"));
  const maxCol = Math.max(...laGeoTable.array("gx"));
  const maxRow = Math.max(...laGeoTable.array("gy"));
  const minDiff = Math.min(...laGeoFlows.array("diffOtMi_LiOp"));
  const maxDiff = Math.max(...laGeoFlows.array("diffOtMi_LiOp"));
  const maxAbsDiff = Math.max(Math.abs(minDiff), Math.abs(maxDiff));
  const clrMap = laColours("2a");

  const r = new Renderer(525, 675)
    .fit(
      [
        [-0.5, -0.5],
        [maxCol + 0.5, maxRow + 0.5]
      ],
      10
    )
    .clear("black")
    .stroke("black")
    .strokeWidth(2)
    .textAlign("middle")
    .textBaseline("top")
    .textSize(4);

  // Title and legend
  r.push().setTransform(null);

  r.stroke()
    .fill("white")
    .textSize(18)
    .textAlign("left")
    .textBaseline("top")
    .text("Other Middle", 10, 10)
    .textSize(7.5)
    .text("Difference from 'likely operating'", 10, 43)
    .text("-5000", 15, 72)
    .textAlign("middle")
    .text("0", 85, 72)
    .textAlign("right")
    .text("5000", 155, 72);

  r.fill().strokeWidth(2);
  for (let i = 0; i <= 1; i += 0.01) {
    r.stroke(cScale(1 - i)).line([
      [10 + i * 150, 60],
      [10 + i * 150, 70]
    ]);
  }

  r.pop();

  laGeoTable.objects().forEach((row) =>
    r
      .fill("rgba(255,255,255,0.1)")
      .polygon([
        [row.gx - 0.5, row.gy - 0.5],
        [row.gx + 0.5, row.gy - 0.5],
        [row.gx + 0.5, row.gy + 0.5],
        [row.gx - 0.5, row.gy + 0.5]
      ])
      .push()
      .fill("rgba(255,255,255,0.9)")
      .stroke()
      .text(row.name, row.gx, row.gy)
      .pop()
  );

  // Sort flows so largest shown 'on top'
  ods.sort((a, b) => (a[5] > b[5] ? 1 : b[5] > a[5] ? -1 : 0));
  r.fill();
  ods.forEach(([ogx, ogy, dgx, dgy, diff, flow]) => {
    r.stroke(cScale(1 - (0.5 + (0.5 * diff) / maxAbsDiff)))
      .strokeWidth(Math.pow((30 * flow) / maxFlow, 0.7))
      .bezier(dFlowCurve([ogx, ogy], [dgx, dgy]));
  });

  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`## Flows over a range of spatial scales

Initial cross-country views suggested a national view may be hiding more local flows, and by implication, over-emphasising inter-city and rural-city flows at the expense of intra-city flows. We also do not see how these inter-area flows compare with intra-area flows.

Consequently, the epidemelogical modellers wished to examine more local scale flows, such as the Greater Glasgow / Clyde region with flows aggregated at the MSOA level. Showing flow curves on the conventional map view showed an occlusion problem becuase of the high number of flow lines centred on Glasgow. But it did demonstate significant numbers of flows within Local Authority regions (indicated by coloured background region). This proved useful in proividing evidence of a scale dependency of the modelling (significant movements of people not recorded if aggregating at the LA level).`
)});
  main.variable(observer()).define(["d3","data","topojson","Renderer","laColours","ggGeoFlows","dFlowCurve"], async function(d3,data,topojson,Renderer,laColours,ggGeoFlows,dFlowCurve)
{
  const resolve = (obj, expr) => expr.split(".").reduce((o, i) => o[i], obj);
  const zip = (a, b, c, d, e) => a.map((k, i) => [k, b[i], c[i], d[i], e[i]]);

  // Draw basemap.
  const regions = await d3
    .json(data.ggBoundaries)
    .then((feats) =>
      topojson.feature(feats, resolve(feats.objects, data.ggFeatures))
    );
  const r = new Renderer(640, 500)
    .stroke("white")
    .setProjection(d3.geoIdentity().reflectY(true))
    .geoShape(regions, "properties.NRSCouncil", (msoa) =>
      laColours("2a").get(msoa)
    );

  // Draw flows.
  const ods = zip(
    ggGeoFlows.array("ox"),
    ggGeoFlows.array("oy"),
    ggGeoFlows.array("dx"),
    ggGeoFlows.array("dy"),
    ggGeoFlows.array("total")
  );
  const maxFlow = Math.max(...ggGeoFlows.array("total"));
  r.stroke("brown").fill();
  ods.forEach(([ox, oy, dx, dy, flow]) =>
    r.strokeWidth(flow / maxFlow).bezier(dFlowCurve([ox, oy], [dx, dy], true))
  );
  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`Displaying MSOAs as a grid allows a little more of the flow structure to be seen.`
)});
  main.variable(observer()).define(["ggGeoFlows","ggGeoTable","laColours","Renderer","dFlowCurve"], function(ggGeoFlows,ggGeoTable,laColours,Renderer,dFlowCurve)
{
  const zip = (a, b, c, d, e) => a.map((k, i) => [k, b[i], c[i], d[i], e[i]]);
  const ods = zip(
    ggGeoFlows.array("ogx"),
    ggGeoFlows.array("ogy"),
    ggGeoFlows.array("dgx"),
    ggGeoFlows.array("dgy"),
    ggGeoFlows.array("total")
  );
  const maxFlow = Math.max(...ggGeoFlows.array("total"));
  const maxCol = Math.max(...ggGeoTable.array("gx"));
  const maxRow = Math.max(...ggGeoTable.array("gy"));
  const clrMap = laColours("2a");

  const r = new Renderer(600, 600)
    .fit([
      [-0.5, -0.5],
      [maxCol + 0.5, maxRow + 0.5]
    ])
    .stroke("white");

  // Draw grid.
  ggGeoTable.objects().forEach((row) =>
    r.fill(clrMap.get(row.sName)).polygon([
      [row.gx - 0.5, row.gy - 0.5],
      [row.gx + 0.5, row.gy - 0.5],
      [row.gx + 0.5, row.gy + 0.5],
      [row.gx - 0.5, row.gy + 0.5]
    ])
  );
  // Drow flow curves
  r.stroke("brown").fill();
  ods.forEach(([ogx, ogy, dgx, dgy, flow]) =>
    r.strokeWidth(flow / maxFlow).bezier(dFlowCurve([ogx, ogy], [dgx, dgy]))
  );

  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. Reflection`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Modellers were able to see the extent and structure of commuting movements that were part of their model but had to this point remained hidden. Interpretation was straightforward with little learning required to make sense of the mapping.

There were able to confirm anticipated dominant inflows to urban centres for work but identify exceptions to this where unexpected movements occurred (add example towns?).

Revealed unexpected dependency on the scale of spatial aggregation on the model behaviour. At the broader regional scale (LAs), the coarse aggregation hid the majority of population movement and so invited consideration of the network model using finer scale (MSOA) aggregation. The visualization this revealed the scale-dependency of the network model.

Visualization by employment category was able to give modellers greater insight into the geographic dependencies of their employment categorisation. For example in the importance of the 'other middle' category in parts of the Glasgow commuter belt (significantly reduced travel) and the 'office closed' flows between Edinburgh and Fife/Falkirk/West Lothian. Significant differences were observed between Edinburgh and Glasgow in the 'other closed', again giving modellers assurance that subdividing by employment category was worthwhile.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Initially tried a range of flow symbolisations including straight-line flow symbols, graduated lines (thick at one end, thin at the other creating an 'arrow'), offset lines (allowing locations as origins and locations as destinations to be visually offset). These alternatives were less preferred by the modellers as they either hid important information or they took more effort and learning to interpret.

Directional curves were less successful as the number of distinct origin-destination flows increased (e.g. MSOA flows in and out of Glasgow City). Occlusion could prevent in-out asymmetries from being detected in such cases.

Comparison of the two scales of aggregation revealed the importance of comparing inter-area flows with intra-area flows, but the idiom does not directly represent the latter. Suggests we need to have some form of a->a flow symbolisation to complement the a->b flows. It remains a challenge to do this without cluttering the visual representation (but see the OD-map idiom).

Patterns hidden by spatial aggregation remain a problem from an epidemiological perspective. For example, the flows between Aberdeen City and surrounding Aberdeenshire were visually dominant in the map and grid representations, but it is not clear whether these are dominated by very local flows adjacent to the city boundaries, or longer rural-urban flows over larger distances. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We have clear evidence that the directional flow curve idiom is capable of showing movement structure including asymmetries. The patterns it reveals is dependent on the scale at which movement data are aggregated, which is both useful in allowing scale-dependency to be assessed, but also dangerous in creating a possibly misleading impression if only a single scale of aggregation is used.

The distance-saliency bias of this (and any spatially embedded edge symbolisation) remains a limitation in that more proximal flows can be harder to detect, but may be important for interpretation and modelling. Using the same idiom but applied to reprojected geographies (grid maps in this case) can partially overcome this by separating close but more densely populated regions. But it does not eliminate the problem.

There is an opportunity to integrate flow curves with a symbolic representation of intra-area flows ("a to a"), such as graduated circles, which is useful for cases where inter- and intra- flow comparison is important. The challenge remains in doing so without introducing too much visual clutter, especially as such flows can occur at points of already high inter-area flow density.

We found that directional flow curves on a gridded geography provided a useful intermediate step towards more the more abstract OD-map representation for modellers to interpret. By revealing some patterns, but showing the limitations introduced by distance saliency and occlusion, this can lead modellers more naturally to more abstract representations, providing an important 'learning' stage in visual interpretation.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Wood and Dykes (academic visualization designers); Jess Enright (Simple Network Model designer).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. References`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Beecham, R.** and **Wood, J.** (2014) Exploring gendered cycling behaviours within a large-scale behavioural data-set. *Transportation Planning and Technology, 37(1)*, pp.83-97. https://doi.org/10.1080/03081060.2013.844903

**Beecham, R.**, **Wood, J.** and **Bowerman, A.** (2014) Studying commuting behaviours using collaborative visual analytics. *Computers, Environment and Urban Systems, 47*, pp.5-15. https://doi.org/10.1016/j.compenvurbsys.2013.10.007

**Fekete, J.**, **Wang, D.**, **Dang, N.**, **Aris, A.** and **Plaisant, C.** (2003) Overlaying graph links on treemaps. *Proceedings of the IEEE Symposium on Information Visualization Conference Compendium (InfoVis 03)* pp.82-83. [PDF.](http://www.cs.umd.edu/hcil/trs/2003-32/2003-32.pdf)

**Jenny, B.**, **Stephen, D.**, **Muehlenhaus, I.**, **Marston, B.**, **Sharma, R.**, **Zhang, E.** and **Jenny, H.** (2018) Design principles for origin-destination flow maps. *Cartography and Geographic Information Science, 45(1)*, pp.62-75. https://doi.org/10.1080/15230406.2016.1262280

**Meulemans, W.**, **Dykes, J.**, **Slingsby, A.**, **Turkay, C**. and **Wood, J.** (2016) Small multiples with gaps. *IEEE transactions on visualization and computer graphics, 23(1)*, pp.381-390.
https://doi.org/10.1109/TVCG.2016.2598542

**Parsons, P.** (2018) Conceptual metaphor theory as a foundation for communicative visualization design. *IEEE VIS Workshop on Visualization for Communication, Berlin (VisComm 2018)*. [PDF](https://par.nsf.gov/servlets/purl/10087033)

**Wood, J.**, **Dykes, J.** and **Slingsby, A.** (2010) Visualisation of origins, destinations and flows with OD maps. *The Cartographic Journal, 47(2)*, pp.117-129. https://www.tandfonline.com/doi/abs/10.1179/000870410X12658023467367

**Wood, J.**, **Slingsby, A.** and **Dykes, J.** (2011) Visualizing the dynamics of London's bicycle-hire scheme. *Cartographica 46(4)*, pp.239-251. https://doi.org/10.3138/carto.46.4.239

**Wood, J.**, **Beecham, R.** and **Dykes, J.** (2014) Moving beyond sequential design: Reflections on a rich multi-channel approach to data visualization. *IEEE transactions on visualization and computer graphics, 20(12)*, pp.2171-2180. https://doi.org/10.1109/TVCG.2014.2346323`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*For basic rendering of graphical primitives:*`
)});
  const child1 = runtime.module(define1);
  main.import("Renderer", child1);
  main.variable(observer()).define(["md"], function(md){return(
md`*For conversion of topoJSON to geoJSON (for background mapping):*`
)});
  main.variable(observer("topojson")).define("topojson", ["require"], function(require){return(
require("topojson-client@3")
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*For table manipulation (specifically relational joins):*`
)});
  const child2 = runtime.module(define2);
  main.import("aq", child2);
  main.import("op", child2);
  main.variable(observer()).define(["md"], function(md){return(
md`*For page styling:*`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<style type="text/css">
    blockquote {
      border-left:2px solid #a0d0a0; color:#606660; background-color:#fBfCfB; padding:0.1em; margin-left:8em; margin-right:2em; padding-left:2em; padding-right:2em; font-size:80%; width:60em;
  }
  blockquote code, blockquote pre {
    font-size:80%; color:#2b2
  }
  .hi {background-color:#aaffcc; padding-left:0.5em;padding-right:0.5em;margin-left:0.5em;margin-right:0.5em;}
  </style>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*For archive view style:*`
)});
  const child3 = runtime.module(define3);
  main.import("ui", child3);
  return main;
}
