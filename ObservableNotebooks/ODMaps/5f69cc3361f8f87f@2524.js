import define1 from "./469de8607710f286@53.js";
import define2 from "./62d26743f59aac51@3814.js";
import define3 from "./79750b3b8e929d9d@223.js";
import define4 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : The OD Map`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@jwolondon/rampvis_idiom_odmap">https://observablehq.com/@jwolondon/rampvis_idiom_odmap</a></pre>`;
  } else {
    return htl.html`<pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is a live version of the Observable Notebook supplement for the RAMPVIS PhilTransA submission titled </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</pre>`;
  }
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`## 1. User Story

* As **an epidemiological model builder**
 * I would like to
    * **see the spatial patterns of commuting among different employment sectors**
    * **understand how these differences vary spatially and the scales at which they operate**
 * so that I can 
    * **select appropriate spatial interaction matrices for my simulation models that relate to different lockdown scenarios**`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 2. Data

Input data for each area of interest comprise three parts:

* _Area boundaries_ for conventional mapping (in topoJSON format).
* _Centroids_ and [grid map positions](https://observablehq.com/@jwolondon/gridmap-allocation) for the spatial units.
* _Flow data_ derived from origin-destination commuting data per employment sector for use as input to the network simulation model.

From these, further data can be derived such as flow differences and chi-statistics showing deviation from expected flow values.`
)});
  main.variable(observer("data")).define("data", function(){return(
{
  hbBoundaries:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/scotHBs2019.json",
  hbFeatures: "healthBoards",
  hbCentroids:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/scotHBsCentroids.csv",
  laBoundaries:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/scotLAs2017.json",
  laFeatures: "scotLAs2017",
  laCentroids:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/scotLACentroidsAndGrid.csv",
  laFlows:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/flows/scotLAsFlows.csv",
  laFlowsCHI:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/flows/scotLAsFlows.CHI.csv",
  ggBoundaries:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/greaterGlasgow.json",
  ggFeatures: "greaterGlasgow",
  ggCentroids:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/geo/greaterGlasgowCentroidsAndGrid.csv",
  ggFlows:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/flows/greaterGlasgowMSOAFlows.csv",
  ggFlowsCHI:
    "https://raw.githubusercontent.com/gicentre/scrc/main/data/flows/greaterGlasgowMSOAFlows.CHI.csv"
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 2.1 Scottish Health Boards

Area boundaries (topoJSON in OSGB coordinates):`
)});
  main.variable(observer("hbRegions")).define("hbRegions", ["d3","data","topojson","resolve"], async function(d3,data,topojson,resolve){return(
await d3
  .json(data.hbBoundaries)
  .then((feats) =>
    topojson.feature(feats, resolve(feats.objects, data.hbFeatures))
  )
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Centroids and grid map positions:`
)});
  main.variable(observer("viewof hbTable")).define("viewof hbTable", ["d3","data","aq"], async function(d3,data,aq){return(
await d3
  .csv(data.hbCentroids, d3.autoType)
  .then((csv) => aq.from(csv).rename({ HBName: "id" }).view({ height: 100 }))
)});
  main.variable(observer("hbTable")).define("hbTable", ["Generators", "viewof hbTable"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### 2.2 Scottish Local Authorities

Area boundaries (topoJSON in OSGB coordinates):`
)});
  main.variable(observer("laRegions")).define("laRegions", ["d3","data","topojson","resolve"], async function(d3,data,topojson,resolve){return(
await d3
  .json(data.laBoundaries)
  .then((feats) =>
    topojson.feature(feats, resolve(feats.objects, data.laFeatures))
  )
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Centroids and grid map positions:`
)});
  main.variable(observer("viewof laTable")).define("viewof laTable", ["d3","data","aq"], async function(d3,data,aq){return(
await d3
  .csv(data.laCentroids, d3.autoType)
  .then((csv) =>
    aq.from(csv).rename({ name: "long", LACode: "id" }).view({ height: 100 })
  )
)});
  main.variable(observer("laTable")).define("laTable", ["Generators", "viewof laTable"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`Flows. Here we have columns for _all commuters_, then three different groups of commuters representing alternative lockdown scenarios as described below. 

The final three columns compute some differences between scenarios.`
)});
  main.variable(observer("viewof laFlowTable")).define("viewof laFlowTable", ["d3","data","aq"], async function(d3,data,aq){return(
await d3
  .csv(data.laFlowsCHI, d3.autoType)
  .then((csv) =>
    aq.from(csv).rename({ source: "O", dest: "D" }).view({ height: 100 })
  )
)});
  main.variable(observer("laFlowTable")).define("laFlowTable", ["Generators", "viewof laFlowTable"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### 2.3 Greater Glasgow MSOAs
Area boundaries (topoJSON in OSGB coordinates):`
)});
  main.variable(observer("ggRegions")).define("ggRegions", ["d3","data","topojson","resolve"], async function(d3,data,topojson,resolve){return(
await d3
  .json(data.ggBoundaries)
  .then((feats) =>
    topojson.feature(feats, resolve(feats.objects, data.ggFeatures))
  )
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Centroids and grid map positions:`
)});
  main.variable(observer("viewof ggTable")).define("viewof ggTable", ["d3","data","aq"], async function(d3,data,aq){return(
await d3
  .csv(data.ggCentroids, d3.autoType)
  .then((csv) => aq.from(csv).rename({ IZ_CODE: "id" }).view({ height: 100 }))
)});
  main.variable(observer("ggTable")).define("ggTable", ["Generators", "viewof ggTable"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`<!-- Commuter flows, categorised as for LAs: -->
Commuter flows for employment sectors and differences between flows, categorised as for LAs above:`
)});
  main.variable(observer("viewof ggFlowTable")).define("viewof ggFlowTable", ["d3","data","aq"], async function(d3,data,aq){return(
await d3
  .csv(data.ggFlowsCHI, d3.autoType)
  .then((csv) =>
    aq
      .from(csv)
      .rename({ source: "O", dest: "D", ALL: "total" })
      .view({ height: 100 })
  )
)});
  main.variable(observer("ggFlowTable")).define("ggFlowTable", ["Generators", "viewof ggFlowTable"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### 2.4 Derived Values

Flows are taken from the 2011 Census and acquired through UKDS - see [WICID](https://wicid.ukdataservice.ac.uk/).

|    Table number | **WU06BUK_la**                                              |
| --------------: | :---------------------------------------------------------- |
| **Table title** | _Location of usual residence and place of work by industry_ |

The 21 _WICID_ employment sectors are combined into 4 categories as determined by the epidemiological modellers in spring of 2020:

|                Name | Explanation                                                                                                                                                                                             |
| ------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **LikelyOperating** | _Industries in which workers are in key roles and so probably travelling under lockdown_                                                                                                                |
|     **OtherMiddle** | _Those employed in industries less likely to be working under lockdown, but who may begin working as lockdown loosens. Based on Scottish ordering of when people in particular roles are able to work._ |
|    **OfficeClosed** | _Those working in offices who are unlikely to be travelling during lockdown_                                                                                                                            |
|     **OtherClosed** | _others in employment categories who are unlikely to be travelling during lockdown, including the retail, real estate, cultural and hospitality sectors._                                               |
|     **ALL** | All workers in all employment categories - the \`normal' commuting flows according to the census.                                                 |

In addition we calculate a _signed chi statistic_ to compare numbers of workers in each of these categories in relation to the overall figures. Negative numbers relate to lower than expected commuters in the category given the overall proportion. This accounts for magnitudes by under-emphasising small signals.    

|                Name | Explanation                                                                                                                                                                                             |
| ------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **CHI-LO** | _The weighted difference between the observed number of commuters in **Likely Operating** and those expected were workers who are **Likely Operating** distributed equally among **ALL** workers_ <br/>This lets us see the spatial effects of modelling lockdown commuting (model connectivity) versus regular commuting.|
| **CHI-LOOM** | _The weighted difference between the observed number of commuters in **Likely Operating** and **Other Middle** sectors and those expected were workers in these sectors distributed equally among **ALL** workers_<br/>This lets us see the spatial effects of modelling a less tight version of lockdown commuting (model connectivity) versus regular commuting, to see where differences persist as society opens up. |
| **CHI-offC** | _The weighted difference between the observed number of commuters in **Office Closed** sectors and those expected were workers who are **Office Closed** sectors distributed equally among **ALL** workers_<br/>This lets us see the spatial effects of modelling lockdown commuting (model connectivity) versus regular commuting by identifying places in which office closure has the greatest effect. |
| **CHI-allC** | _The weighted difference between the observed number of commuters in **Office Closed** and **Other Closed** sectors and those expected were workers in the these sectors distributed equally among **ALL** workers_ <br/>This lets us see the spatial effects of modelling lockdown commuting (model connectivity) versus regular commuting by modelling by identifying places in which all forms of  closure have strongest effect.|

Outputs are appropriately protected so as not to identify individuals, households or organisations in line with UKDS conditions. *Any cell count of lower than three has been replaced with zero.*
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 3. What is an OD Map?

An OD map is a way of showing relationships between pairs of spatial entities. Commonly these might be flows from one area to another ('origin' **O** and 'destination' **D**). To see how they are constructed, consider a simple set of flows between some regions of Scotland:`
)});
  main.variable(observer("viewof simpleFlowTable")).define("viewof simpleFlowTable", ["aq"], function(aq){return(
aq
  .table({
    O: [
      "Lothian",
      "Lothian",
      "Fife",
      "Shetland",
      "Greater Glasgow and Clyde",
      "Ayrshire and Arran",
      "Lothian",
      "Greater Glasgow and Clyde"
    ],
    D: [
      "Lothian",
      "Fife",
      "Lothian",
      "Lothian",
      "Greater Glasgow and Clyde",
      "Greater Glasgow and Clyde",
      "Greater Glasgow and Clyde",
      "Lothian"
    ],
    flow: [25, 5, 10, 1, 20, 4, 8, 12]
  })
  .view()
)});
  main.variable(observer("simpleFlowTable")).define("simpleFlowTable", ["Generators", "viewof simpleFlowTable"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`<!--Showing those flows as lines between regions on standard geographic map has a few problems.-->
Showing those flows as lines between regions on standard geographic map is problematic for some important reasons:

 * Longer lines dominate visually, even if they are not the most important ones with the biggest flows;
 * The majority of flows might be more local but are not always easy to detect;
 * Flows within areas are not shown at all;
 * There is an inappropriate precision in the locations of the ends of each line – they are attached to a particular point in space (region centroid), but may represent flows from a much larger region.`
)});
  main.variable(observer()).define(["hbTable","Renderer","drawMap","hbRegions","drawFlows","simpleFlowTable"], function(hbTable,Renderer,drawMap,hbRegions,drawFlows,simpleFlowTable)
{
  const hbColours = new Map();
  hbTable.objects().forEach((o) => hbColours.set(o.id, o.colour + "99"));
  const clrFn = (p) => hbColours.get(p);

  const r = new Renderer(300, 325);
  drawMap(r, hbRegions, "properties.HBName", clrFn);
  drawFlows(r, simpleFlowTable, hbTable);

  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`An *OD matrix* addresses these problems by instead encoding OD flows with position in a grid and colouring grid cells by flow magnitude. The same flows as above could be represented as the following where rows represent origins, columns destinations.
The darkness of the colour is related to the flow volume, with darker colours representing larger flows.`
)});
  main.variable(observer()).define(["drawODMatrix","Renderer","simpleFlowTable","hbTable","d3"], function(drawODMatrix,Renderer,simpleFlowTable,hbTable,d3){return(
drawODMatrix(
  new Renderer(600, 400),
  simpleFlowTable,
  hbTable,
  250,
  true,
  d3.scaleSequential(d3.interpolateYlOrRd)
).render()
)});
  main.variable(observer()).define(["md"], function(md){return(
md`While the OD matrix removes the distance saliency bias of lines (the small flow from Shetland to Lothian no longer dominates), it loses any aspect of geography because cells are ordered alphabetically. Geography is important in analysing geographic flows, and epidemiology, as the processes that we are trying to understand are unlikely to operate at the scale at which we are collecting data. So we need to see the data in their spatial context to see geographic trends, differences and outliers that help us explain and understand the processes, relationships and phenomena that we are interested in. We can however order these matrices in ways that account for their geography and enable us to see geographic patterns. To see this, consider how we might transform the regions of Scotland into a [grid map](https://observablehq.com/@jwolondon/gridmap-allocation), approximately preserving geography:`
)});
  main.variable(observer()).define(["hbTable","Renderer","drawMap","hbRegions","drawGrid"], function(hbTable,Renderer,drawMap,hbRegions,drawGrid)
{
  const hbColours = new Map();
  hbTable.objects().forEach((o) => hbColours.set(o.id, o.colour + "99"));
  const clrFn = (p) => hbColours.get(p);

  const r = new Renderer(600, 325).translate(-200, 0);
  drawMap(r, hbRegions, "properties.HBName", clrFn);
  drawGrid(r.translate(450, 120).scale(0.6), hbTable, clrFn, 0.02);
  return r.render();
}
);
  main.variable(observer()).define(["odOrder","md"], function(odOrder,md){return(
md`Because our grid map sits in a (5x5) square and is itself made up of squares, we could embed small copies of itself in each of the squares. Each larger grid cell representing \`${odOrder?"an origin":"a destination"}\` region of Scotland, and within it a grid map of all the \`${odOrder?"destination":"origin"}\` regions associated with it. To help navigate this nested spatial projection, we can highlight the 'home cells' i.e. those that represent the same origin as destination (intra-area flows). These are the cells that are on the leading diagonal in the OD matrix.`
)});
  main.variable(observer("viewof odOrder")).define("viewof odOrder", ["Inputs"], function(Inputs){return(
Inputs.radio(
  new Map([
    // ["Origins large, destinations small", true],
    // ["Destinations large, origins small", false]
    [
      "Origins large, destinations small - Where do residents of each region commute TO?",
      true
    ],
    [
      "Destinations large, origins small - Where do workers in each region commute FROM?",
      false
    ]
  ]),
  {
    value: true,
    label: "O-D order",
    format: ([name, value]) => `${name}`
  }
)
)});
  main.variable(observer("odOrder")).define("odOrder", ["Generators", "viewof odOrder"], (G, _) => G.input(_));
  main.variable(observer()).define(["drawODMap","Renderer","simpleFlowTable","hbTable","odOrder","d3"], function(drawODMap,Renderer,simpleFlowTable,hbTable,odOrder,d3){return(
drawODMap(
  new Renderer(200, 200),
  simpleFlowTable,
  hbTable,
  "flow",
  odOrder,
  d3.scaleSequential(d3.interpolateYlOrRd)
).render()
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The OD map becomes more useful when we see a fuller set of flows in that they can reveal spatial flow structure. Here, for example, is simulated flow potential between regions where flows are inversely proportional to the square of the distance between locations (a simple gravity model). We create deliberate flow asymmetry by excluding flows with a net easterly movement.

Colour uses a square root sequential scale so that the very large intra-region flows do not completely dominate.

For comparison, a conventional flow map is shown to the right.`
)});
  main.variable(observer("viewof simulatedFlowTable")).define("viewof simulatedFlowTable", ["hbTable","aq"], function(hbTable,aq)
{
  const regions = hbTable.select(["id", "cx", "cy"]).objects();

  return aq
    .from(
      regions
        .map((o) =>
          regions.map((d) => {
            const dist =
              (o.cx - d.cx) * (o.cx - d.cx) + (o.cy - d.cy) * (o.cy - d.cy);
            const flow = dist == 0 ? 100 : 100000000000 / dist;
            return {
              O: o.id,
              D: d.id,
              flow: o.cx >= d.cx ? Math.round(flow) : 0
            };
          })
        )
        .flat()
    )
    .orderby("O", "D")
    .view(196);
}
);
  main.variable(observer("simulatedFlowTable")).define("simulatedFlowTable", ["Generators", "viewof simulatedFlowTable"], (G, _) => G.input(_));
  main.variable(observer()).define(["Inputs","viewof odOrder"], function(Inputs,$0){return(
Inputs.bind(
  Inputs.radio(
    new Map([
      // ["Origins large, destinations small", true],
      // ["Destinations large, origins small", false]
      [
        "Origins large, destinations small - Where do residents of each region commute TO?",
        true
      ],
      [
        "Destinations large, origins small - Where do workers in each region commute FROM?",
        false
      ]
    ]),
    {
      value: true,
      label: "O-D order",
      format: ([name, value]) => `${name}`
    }
  ),
  $0
)
)});
  main.variable(observer()).define(["Renderer","drawODMap","simulatedFlowTable","hbTable","odOrder","drawMap","hbRegions","drawFlows"], function(Renderer,drawODMap,simulatedFlowTable,hbTable,odOrder,drawMap,hbRegions,drawFlows)
{
  const r = new Renderer(900, 300);
  drawODMap(r, simulatedFlowTable, hbTable, "flow", odOrder);
  drawMap(r, hbRegions, "name", (_) => "#ddd");
  drawFlows(r, simulatedFlowTable, hbTable);
  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`Notice how the more remote regions show mostly intra-region flows - with dark colours in the 'home' cells, while the other flows are very minor and light in comparison. However, in more densely packed regions we see reds and oranges in neighbouring cells showing greater inter-region flows to their nearer neighbours. This is much harder to detect with a conventional flow map (right).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`It is worth noting that the OD map is simply a reordering of the OD matrix. We use the same cells, but just reorder them to reveal the geography.
Moving the slider below shows how the two orderings relate for these asymmetric flows between Scottish LAs.
We make the individual cells a little smaller in the OD Map to give us the space to convey some of the shape of Scotland. These gaps make the cells a little less salient, but allow us to retain more of the geography than would be achievable with a matrix with no gaps. `
)});
  main.variable(observer("viewof transition")).define("viewof transition", ["Inputs"], function(Inputs){return(
Inputs.range([0, 1], {
  value: 1,
  step: 0.01,
  label: "Matrix-map transition"
})
)});
  main.variable(observer("transition")).define("transition", ["Generators", "viewof transition"], (G, _) => G.input(_));
  main.variable(observer()).define(["odTransition","Renderer","simulatedFlowTable","hbTable","transition","d3"], function(odTransition,Renderer,simulatedFlowTable,hbTable,transition,d3){return(
odTransition(
  new Renderer(300, 300),
  simulatedFlowTable,
  hbTable,
  "flow",
  transition,
  d3.scaleSequential(d3.interpolateYlOrRd)
)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 4. Origin and Context

OD Maps were introduced by [Wood et al (2010)](https://doi.org/10.1179/000870410X12658023467367) as a likely intuitive and effective spatial means of representing the geography of geographic variation.

Subsequently, [Yang et al (2016)](https://doi.org/10.1109/TVCG.2016.2598885) found them to be as effective, or more effective than alternatives for complex map tasks in their study, in which they were deemed '_most readable_' by participants in their experiments.

The original OD Maps paper has now been cited more than 200 times, and OD Maps have been used to show structure in many places and types of flow. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 5. Examples

**City Intelligence** use an OD Map to show how commuter flows vary in the boroughs of London :
  * [_London Commuter Flows_](https://maps.london.gov.uk/commuter-flows/)

**Robert Radburn** uses OD Maps to show inter-state migration in Africa using [Tableau](https://www.tableau.com):
 * [_Where migrants came from and where migrants went in Africa_](https://public.tableau.com/app/profile/robradburn/viz/AfricanODMigration/Wherewecamefromandwherewewent)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 6. Description and Use`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`SCRC modellers and visualization volunteers worked together to select and derive movements of people that allowed us to explore the nature of connectivity between locations at a number of scales. We examined the effects of selecting particular employment sectors from census travel-to-work data to simulate these interactions under different lockdown scenarios in line with the needs identified in our _User Story_.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`OD Maps were used as part of a design/redesign sequence that aimed to show geographic variation in flows in data that were highly skewed - as shown by the original OD matrices. This involved us using [grid maps](https://observablehq.com/@jwolondon/gridmap-allocation) to distort the geography depicted in our maps in a manner deemed acceptable to the task in hand. 
Here, geography is relative so distances and other spatial relationships are not preserved perfectly.
However, the underlying geography and geographic relationships between spatial entities are sufficiently maintained for us to be able to see that the flow patterns vary spatially with some consistency.
We provided interactive OD maps - with labels and quantities available as tooltips on mouseover - with log scaling. Log scaling is controversial as it is challenging to estimate quantities, which are very important in this context, but general structure is revealed. The question on which we focussed required us to consider both general structure and absolute numbers.`
)});
  main.variable(observer()).define(["laTable","Renderer","drawMap","laRegions","drawFlows","laFlowTable","drawGrid"], function(laTable,Renderer,drawMap,laRegions,drawFlows,laFlowTable,drawGrid)
{
  const laColours = new Map();
  laTable.objects().forEach((o) => laColours.set(o.id, o.colour + "99"));
  const clrFn = (p) => laColours.get(p);
  const r = new Renderer(600, 325);
  drawMap(r.translate(-200, 0), laRegions, "properties.lad17cd", clrFn);
  drawFlows(r, laFlowTable, laTable, "id", "total");
  drawGrid(r.translate(400, 120).scale(0.6), laTable, clrFn, 0.02);
  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`*Scottish Local Authorities (LAs) shown as a traditional flow map with commuter flows (left) and LA grid map (right)*`
)});
  main.variable(observer()).define(["Inputs","viewof odOrder"], function(Inputs,$0){return(
Inputs.bind(
  Inputs.radio(
    new Map([
      [
        "Origins large, destinations small - Where do residents of each region commute TO?",
        true
      ],
      [
        "Destinations large, origins small - Where do workers in each region commute FROM?",
        false
      ]
    ]),
    {
      value: true,
      label: "O-D order",
      format: ([name, value]) => `${name}`
    }
  ),
  $0
)
)});
  main.variable(observer()).define(["Renderer","drawODMap","laFlowTable","laTable","odOrder"], function(Renderer,drawODMap,laFlowTable,laTable,odOrder)
{
  const r = new Renderer(600, 600);
  drawODMap(r, laFlowTable, laTable, "likelyOperating", odOrder);
  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`*Total commuter flows between Scottish LAs. Select Origins large/small above to see outgoing vs incoming flows and the way that these vary across Scotland. Changes observed between the two indicates the amount of 'asymmetry' in commuting patterns considered at this scale.*`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Our original maps of the [NHS Board data](https://observablehq.com/d/de6520b73da312e1#cell-1436) show commuting patterns to be highly local at that scale with most trips to work involving intra-board journeys. People tend to travel to work within NHS area.
Mixing between spatial units is very limited, though a distance decay effect was evident from the OD maps that we could not detect in the matrices. Flows tend to decrease with distance. That inter-board journeys tended to be local was not a great surprise - likely short trips  across (arbitrary) boundaries in many cases - but this was much more visible in the [OD maps](https://observablehq.com/d/de6520b73da312e1#cell-1436) than in the OD matrix.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`This resulted in a change of scale of focus, to [flows between Local Authorities](https://observablehq.com/d/de6520b73da312e1#cell-2072).
The intention here was to produce higher resolution OD maps, from a larger OD matrix, and assess distributions in which flows between spatial units were more common.  This allowed us to see some detail.
The distance decay effect was evident, but not in the islands - where commuting to other LAs is sporadic and involves small flows and few people.
Further North in Scotland, incoming flows tend to be skewed to the south, with more daily interaction between southern local LAs than those to the north. 
We saw big differences between flows of workers in the ‘_likelyOperating_’ and ‘_otherMiddle_’ employment sectors in the major cities - Dundee, Edinburgh, Glasgow and wider Lanarkshire.
Much of this is _within Local Authority_ and so the value of the maps over the matrix is limited.
But the spatial arrangement allowed us to see spatial clustering of large numbers showing national patterns of flows and that flows are relatively ‘local’ at this scale even when they occur across boundaries.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We can see nuanced patterns too - for example when we map the differences between numbers in the '_Likely Operating_' sectors and what we would expect if these flows were in proportion to '_All_' commutes.
Patterns tend to be local, are strongest in the urban areas, but vary at national scale.
We can see that the _East of Scotland_ tends to have fewer commuters '_Likely Operating_' than we would expect given the overall numbers, with effects strongest in and around _Aberdeen_ and _Edinburgh_.  `
)});
  main.variable(observer()).define(["Inputs","viewof odOrder"], function(Inputs,$0){return(
Inputs.bind(
  Inputs.radio(
    new Map([
      [
        "Origins large, destinations small - Where do residents of each region commute TO?",
        true
      ],
      [
        "Destinations large, origins small - Where do workers in each region commute FROM?",
        false
      ]
    ]),
    {
      value: true,
      label: "O-D order",
      format: ([name, value]) => `${name}`
    }
  ),
  $0
)
)});
  main.variable(observer()).define(["Renderer","drawODMap","laFlowTable","laTable","odOrder","d3"], function(Renderer,drawODMap,laFlowTable,laTable,odOrder,d3)
{
  const r = new Renderer(600, 600);
  drawODMap(
    r,
    laFlowTable,
    laTable,
    "loCHI",
    odOrder,
    d3.scaleSequential().interpolator(d3.interpolateRdBu).domain([1, -1])
  );
  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`*A signed CHI statistic shows differences between the commuter flows in 'Likely Operating' and those expected if the proportion by which flows drop under 'Likely Operating' was consistent for all pairs of flows, for all pairs of Scottish LAs. Note the differences at national scale, that might be broadly characterised as 'East/West'.*  

*Colours show differences from the assumption that 'Likely Operating' flows have the same geographic distribution as 'All' flows - and there is a spatial effect.
**Blue** shades represent flows in which we have relatively fewer commutes in the 'Likely Operating' scenario than we would expect in normal circumstances under the 'All' pattern.
**Red** shades represent flows in which we have relatively more commutes in the 'Likely Operating' scenario than we would expect in normal circumstances under the 'All' pattern.
Darker colours reflect greater divergence from the expectation.*  

*Select Origins large/small above to see outgoing vs incoming flows and the way that these vary across Scotland. Changes observed between the two indicates the amount of 'asymmetry' in commuting patterns.*`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`This allows us to see that there are systematic spatial differences between regular commuting ('_All_') and the '_Likely Operating_' scenario, and that these vary across Scotland.

For example, looking at the OD Map shows that urban LA destinations have relatively fewer flows in under '_Likely Operating_' but a smaller effect on internal flows in the islands. Edinburgh, Glasgow, Dundee and Aberdeen and their environs have relatively fewer local commuters.

Switching the OD Map ordering to show where workers in each region commute _from_ emphasizes that lockdown has less effect in the West, where red cells are clustered - see East Ayrshire and Argyll & Bute.
It has a strong negative effect in the urban LAs, but the red rings around them - particularly in Glasgow - show that even though the proportion of commuters travelling to the cities falls, the relative proportion of journeys of mid-range distances, from adjoining LAs, often increases. So longer commuting journeys begin to dominate as shown by the red rings around the blue city centres of Glasgow, Dundee and Edinburgh (to the south).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In summary, this shows us that the spatial inputs to the _Simple Network Simulation model_, that reflect the geographic network are likely to be sensitive to the non-random geographic effects of considering different types of commuters under alternative lockdown scenarios.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Given this, we needed more details, and higher resolution data. But OD maps are unlikely to be interpretable with high numbers of spatial units (as is the case with flow maps). So we selected specific areas of interest according to the numbers and patterns seen in our high level OD Maps and increased resolution. This was effectively a filter and split operation to focus in on the detailed flows at more local level in particular places of interest.

We focussed on **Glasgow and Strathclyde**, using MSOAs as a detailed but manageable level of resolution and generated a [grid map](https://observablehq.com/@jwolondon/gridmap-allocation) to enable us to see the spatial structure.`
)});
  main.variable(observer()).define(["Renderer","drawMap","ggRegions","drawGrid","ggTable"], function(Renderer,drawMap,ggRegions,drawGrid,ggTable)
{
  const ggColours = new Map();
  const clrFn = (_) => "#ccc";
  const r = new Renderer(900, 325);
  drawMap(r.translate(-250, 0), ggRegions, "properties.IZ_CODE", clrFn);
  // drawFlows(r, ggFlowTable, ggTable, "id", "total");
  drawGrid(r.translate(680, 80).scale(0.6), ggTable, clrFn, 0.02);
  return r.render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`Images that summarise the distributions in OD and DO Maps are provided below. Colour scales are individual, so we can see the patterns for each flow in each map effectively. But this means that absolute numbers of commuters are not comparable in the mapping.

Interactive maps that show the flow data are provided in a separate [OD Maps for Glasgow and Strathclyde MSOAs notebook](https://observablehq.com/@jsndyks/ptrsa_odmaps_glasgow).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### All Commuters

Here we see all commuting journeys made by all workers - the pattern that we would expect pre-lockdown, as recorded in the most recent Census.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|OD MAP - small maps of **destinations** for each origin MSOA|DO MAP - small maps of **origins** for each destination MSOA|
|-:-|--|
|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.ALL.OD.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.ALL.OD.png)|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.ALL.DO.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.ALL.DO.png)|
|_Short commutes within MSOAs (dark dots at the 'home cell') and to local employment foci (dark colours close to the 'home cell') are evident in this map of origins for each destination. But equally, some destinations receive large numbers of commuters from most origins - the city centre shows up as a destination in the mini maps for most origins._|_The latter pattern is clearer when we map origins for each destination, with the City Centre attracting workers from most origins, but four or five other destinations also attracting large numbers more locally._|`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In terms of the spatial structure of workers in _All_ sectors, the OD Map of outgoing flows (destination maps for each origin, _left_) show that in almost all cases (all MSOAs) people travel widely across the region with a particular emphasis on _local commutes_ and those _to the City centre_. In terms of incoming flows, a DO Map (origin maps for each destination, _right_) produced mini maps of real focus, with varying degrees of local spatial structure. These reveal important centres of employment that vary in the degree to which they attract local workers from local or more distant areas: they include _Battlefield_, _Paisley_, _Greenock_, _Springburn_, and _Kelvinside_, each of which attracts many workers from a wide catchment.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Likely Operating Commuters

The patterns of those working in industries that are probably operating under lockdown do not look vastly different to '_All_' commuters when plotted in OD Maps. This might suggest that deciding whether to use '_All_' or an employment-sector based subset in the network simulation models would make little difference.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|OD MAP - small maps of **destinations** for each origin MSOA|DO MAP - small maps of **origins** for each destination MSOA|
|-:-|--|
|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.LO.OD.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.LO.OD.png)|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.LO.DO.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.LO.DO.png)|
|_Short commutes to local employment foci are once again evident in this map of origins for each destination, and yet some destinations still receive relatively large numbers of commuters from most origins._|_The latter pattern is clearer when we map origins for each destination, with the City Centre attracting workers from most origins, but the destinations that we have identified above, still attracting large numbers both locally and more widely across the region in the case of the city centre._|`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Office Closed

However, those in the '_Office Closed_' employment category are evidently travelling from a wide range of origins, but predominantly to city centre MSOAs. So perhaps we can detect some differences between the interaction networks of those in different sectors.  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|OD MAP - small maps of **destinations** for each origin MSOA|DO MAP - small maps of **origins** for each destination MSOA|
|-:-|--|
|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.OffC.OD.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.OffC.OD.png)|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.OffC.DO.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.OffC.DO.png)|
|_Commuters in this category travel from a wide range of origins, but most mini maps contain a single (and common) 'hot' destination dot. 'Office Closed' has an emphasis on the city centre when compared (visually) to 'All'._|_We can see that this employment type involves trips that are predominantly to the city centre, but that involve travel from far and wide, when we view an origins map for each destination._|`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Other Closed

In comparison with '_Office Closed_', those in the '_Other Closed_' employment category are equally broad in terms of their origins origins, but slightly less focussed in their destinations that vary more widely around the key centres of employment. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|OD MAP - small maps of **destinations** for each origin MSOA|DO MAP - small maps of **origins** for each destination MSOA|
|-:-|--|
|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.OthC.OD.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.OthC.OD.png)|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.OthC.DO.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.OthC.DO.png)|
|_The general trend towards the centre of the map is apparent in this map of commuting destinations of 'Other Closed' workers for each origin._|_But the mini origin maps show that while start-points are distributed, the destinations are also more diverse in this category than in 'Office Closed'._|`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Difference : Likely Operating versus All Commuters

So we have some sense that there may be some subtle differences. It makes sense to look at those differences directly (and spatially)!
Here are maps that show the absolute numbers when we look at differences between '_All_' commuters and those in roles '_Likely Operating_' during lockdown.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|OD MAP - small maps of **destinations** for each origin MSOA|DO MAP - small maps of **origins** for each destination MSOA|
|-:-|--|
|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.ALL-LO.OD.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.ALL-LO.OD.png)|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.ALL-LO.DO.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.ALL-LO.DO.png)|
|_We can see the familiar pattern of a focus on trips to the City centre in this OD map, in which the small maps show destinations of those originating in the MSOA positions shown in the larger map. This may lead us to imagine that there are few spatial differences between 'All' and 'Likely Operating'._|_However, maps of the origins for each destination show that differences are stronger in the City centre than in the maps of 'All' commuters. We would expect this given the patterns seen above for 'Office Closed' and 'Other Closed'._|`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`But this only tells a partial picture. Here we use a simple model and look for differences from 'normal' commuting for one of our sub-categories of commuter.
This helps us address the key question in hand:  

  * "_do the spatial interaction matrices relating to different lockdown scenarios vary in ways that may affect model outputs_"?

We assume that all flows in the reduced '_Likely Operating_' matrix will be in direct proportion to those in the '_All_' matrix that describes the flows of commuters in all employment categories. Then we calculate a _signed CHI statistic_ that tells us the extent to which we have _more_ (**<span style="color:#b22">red</span>**) or _fewer_ (**<span style="color:#22b">blue</span>**) commuters in this lockdown scenario than we would expect against this model that defines the baseline assumption that '_it makes no difference_'. Darker colours represent greater magnitudes (bigger flows). `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|OD MAP - small maps of **destinations** for each origin MSOA|DO MAP - small maps of **origins** for each destination MSOA|
|-:-|--|
|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.CHI-LOALL.OD.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.CHI-LOALL.OD.png)|[<img src="https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.CHI-LOALL.DO.png" width=400/>](https://raw.githubusercontent.com/gicentre/scrc/main/docs/PTRSA/img/ggMSOA.CHI-LOALL.DO.png)|
|_The scattered picture contains maps with distributed red and blue destinations, meaning that there are diverse spatial differences between 'All' and 'Likely Operating'._|_Maps of origins for each destination show the consistent and strong spatial patterns. We have distinct destinations in Central Glasgow and on Clydeside that receive fewer commuters (<span style="color:#22b">blue</span>) than one would expect given the patterns of flow in 'All'. Conversely, other destinations in Central Glasgow and the other employment centres (such as Paisley, and Greenock) receive more commuters (<span style="color:#b22">red</span>) than one would expect under this model of lockdown given the proportions of 'All' commuters known to travel under normal circumstances._|`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The colours show the spatial patterns in relative terms, but the numbers are important too and we don't provide a legend here to enable them to be seen. 

For reference, the maps show 300,000 commuters and the '_Likely Operating_' scenario contains just over 100,000 of these who are assumed to be still working during lockdown. Of these 100,000, about 60,000 are not commuting in ways that they would be if they were typical of the 'normal' category of commuting described by the '_All_' flows.
So the differences effect a high proportion of the '_Likely Operating_' commuters at this scale, around 60% of those assumed '_Likely Operating_' under lockdown. Importantly, the _OD Maps_ allow us to show that these differences are not spatially agnostic - _they have specific geographic patterns that will effect model outputs_.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<!--Many of the big flows between MSOAs are quite local, but most MSOAs send people to a relatively wide range of destinations.-->
The _OD Maps_ of the MSOA commuting by employment sector data have revealed that the daily inter-unit flows are highly significant at this scale, with important implications for the modelling.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Different types of job have very different spatial structures at this scale, with local centres much more likely to employ those in ‘_Likely Operating_’ roles and the city centre being a focus for ‘_Office Closed_’ jobs. Note the very different kinds of work and effect in adjacent and highly proximate City centre MSOAs shown above. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Using _OD_ and _DO Maps_ to show travel to work patterns by employment sector strongly suggest that at  MSOA level differences in daily travel between employment sectors are pronounced and inter-zone mixing is extensive. This means that the input network will be sensitive to these decisions at this scale.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` * **Varying interaction modelling and assumptions about lockdown scenarios will have effects on network simulation models working at this scale**.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Remember, more detail is provided in the interactive [OD Maps for Glasgow and Strathclyde MSOAs notebook](https://observablehq.com/@jsndyks/ptrsa_odmaps_glasgow).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 7.0 Reflective Discussion

_OD Maps_ are reported to have some advantages over the flow maps, as flow maps suffer from acknowledged problems:

 * long distance flows (e.g. to/from Shetlands) having a disproportionate saliency (symbol saliency is not proportional to signal strength);
 * over-plotting makes (short, important) local flows hard to discriminate (and internal flows are not shown at all);
 * smaller regions of high population lead to a crowded view of flows and the occlusion makes it hard to see structure or detail;
 * the precise positions of start and end points are often not indicative of the spatially distributed nature of flows;

These were known reasons for implementing the _OD Maps_, and they were shown to apply in our context, with the _OD Maps_ overcoming these problems effectively at the cost of losing geographic accuracy. The costs of this loss of geographic information are hard to establish with any precision, but the trade-off here seemed to result in some discussion and understanding that supported the user story and informed model inputs.
The epidemiologists in the team strongly suggested that this position in the design space was a valuable way to add some spatial thinking to the consideration of the interaction  matrix - a key input to the SNS model.
Reactions from the modellers were positive ...

> "_Cool little-square OD maps!  Much easier to see what’s going on than in matrices_"

... with some reassuring expected patterns identified and some question about appropriate levels of aggregation for modelling as we explored the spatial and scale-based structure of the connections. The maps worked well as a means of prompting discussion - the roles and spatial influence of Glasgow Airport (Paisley) became a point of discussion.

The modellers reported that varying the interaction network might be less important at the coarser level when most movements are within region, but more important when looking at a finer level. The implications here were clearly described in our discussions:
 
> "_level at which we run implies **which aggregation** but ALSO **which slice** of commutes we need to use._ **<--- Important!**"

There was some evidence of deep thinking about the spatial nature of phenomena that might have been prompted by the spatial representation: 

> “_what I'd really like to see is what happens after I account for spatial autocorrelation. It's not really news to know that nearby areas look similar_”

<!--
RR 31/07/2020
https://zulip.scrc.uk/#narrow/stream/17-visualisation/topic/Data.20Visualization.20Design.20Discourse/near/28109
-->

So, in terms of the **user story** the _OD Maps_ enabled us to see that the selection of commute ‘slices’ was more important as resolution increased. This is not surprising, but it was also evident that the effects were different in different areas, and we were able to detect (and speculate about why) where these effects varied.

_It’s a complex picture, but we did seem to find pictures that showed the complexity in ways that were interpretable._

This allowed us to identify scales at which to consider importance of the problem in hand.

However, despite the rich interpretable imagery provide by the _OD Maps_, this complexity made it very challenging to relate the data and the graphics to the final part of user story - decision-making. Moving from a detailed picture to action is difficult, and we moved from data to “_we know a thing_” much more smoothly than we were able to move from data to “_we know what to do_”.
Turning complex visual answers into action is difficult. The visualization does improve understanding, but provide a general sense of “_how things look_” that is challenging to develop into an action. The evidence developed through the visualization results in a “_feeling_”.

Is this adequate?<br/>
That's an open question, but it may well be effective decision-making, particularly where speed is of the essence!

Many in the _Simple Network Sim_ group of volunteers had different roles, but these roles blurred in **ADR** (_McCurdy et al., 2016_)/ **Design by Immersion** (_Hall et al., 2019_) style. Despite the _Research Software Engineers_ (RSEs) not fitting the role described in the _User Story_ very fully, we asked for feedback on the designs and their responses varied.

<!--
FG - not sure if immediately useful
FG - OD Map - hard to see clusters when looking at the whole graph
FG - Lots of design ideas - DExD and no distinction between designer and analyst :: bur (Hall et al., 2019 - Jo’s VIS paper)
FG - “My favourite is flows over grid maps. I have 0 delay in interpretation time, there is 0 ambiguity.”
-->

One was highly skeptical and ...

> “_not sure if [OD maps] are immediately useful_”

... but was also uncertain as to whether the question in hand was important (with more of a focus on outputs). They described it as being ...

> “_hard to see clusters when looking at the whole graph_”

... and came up with many design ideas that pushed the focus elsewhere.

In a way this emphasises the **need to design for particular tasks and users** and also that open design discussion documents such as those used here are an excellent means of engaging problem owners in discussions about the focus and nature of design. Our digital workspace, and the high priority work proved excellent at blurring distinctions between roles and problems aligning with notions presented in, for example _Hall et al. (2019)_ and _[Beecham et al. (2019)](https://www.gicentre.net/featuredpapers/#/dexds/)_.  

Another was more positive, and responded to thinking about the graphics and engaging with the data with:

> “_I enjoyed doing this! Really interesting_”.

They offered simple accurate summaries:

> “_Closing offices has a big effect on cities, but mostly on short-distance commutes_”.

But emphasised the need for an overview:

> “_maybe I'm missing something important by filtering?_”.

They also provided an important reminder of the roles of labelling and legends in collaborative work upon which we were able to act rapidly:

> “_the legends are a bit small!_”

There was some focus on the visualization design rather than the data in our feedback, but this can be expected when learning about design and data are concurrent, and this felt healthy in terms of developing knowledge about visualization as well as engagement in the process and knowledge about the data. It also emphasized the blurry, personal and dynamic nature of a well-specified focus (or User Story) and supported the need for interaction to personalise, adjust focus and back-track through a careful transformation between views to ensure that changes of focus, data or visualization were not abrupt and thinking was not disrupted. One simple example in this case is that some data sets and questions required _OD Maps_ and in other contexts _DO Maps_ were more revealing. In many cases, more complex visual transformations were necessary. Fluidity seemed important in our context - and this may have been exacerbated or enabled by either or both of the _digital workplace_ or the _emergency context_. 

The flow data were very peaky and so we used log scaling for some colouring. This is controversial and while log scaling helps us see structure, it is very challenging to interpret magnitudes, and both structure and quantity mattered in this user story. Interactive legends, switching between encodings and making switches (design changes, re-encoding) clear are very important as we deal with peaky and skewed data.
We found the _OD Maps_ to be very effective for showing regional clusters. While very radial, single centred distributions work very nicely with flow maps, where you have multi-scale phenomena with secondary clusters (e.g. the Scottish MSOA travel to work data shown above and in our interactive [OD Maps for Glasgow and Strathclyde MSOAs notebook](https://observablehq.com/@jsndyks/ptrsa_odmaps_glasgow)) and many local flows, _OD/DO Mapping_ is extremely informative and provides clarity ands detail that are not achievable with flow maps and essential meaningful spatial context that cannot be determine in _OD Matrices_.
The ability to differentiate between incoming and outgoing flows (OD/DO) is also useful, this worked well in our efforts to address the question in hand.


### Digital Workplace
We worked in GitHub, through email, with Zoom screen-share, videos dumped on Vimeo or elsewhere, and via Google forms / docs. All of this was supported by searchable threaded Zulip messaging. None of the specifics are hugely important and other technologies might have worked equally well. But the fact that the workspace was entirely digital and that we were all locked to our screens did see to help with learning, focus and progress. Zulip, a searchable, threaded messaging system, meant that we could explain and link and comment freely and easily. The ability to share data and development on GitHub, and style pages to explain and generate discussion and feedback with dynamic documents (see _[Beecham et al., 2019](https://www.gicentre.net/featuredpapers/#/dexds/)_) proved highly effective, enabling rich, rapid, considered responses to be generated asynchronously. This was very effective.    

### Emergency Visualization
The designs were developed as contributions to a disparate group of volunteers who were previously unknown to one another.
Roles were relatively ill-defined and volunteers had varied considerably in terms of their skills, focus, levels of experience with data, objectives, motivations, interest, time.
All were working in parallel, with volunteers arriving and departing mid-project and all participants dealing with the uncertainty, pressure, worries (finance, food, lives), sickness and caring responsibilities associated with an unprecedented pandemic and multiple people.
This meant that we needed alternative views and perspectives. It would be nice to think that visualization helped with this, providing a gateway into the problems and perhaps even common boundary objects that showed progress, shone light onto the problem and brought people together.
It would be nice to think that the graphics introduced people to the problem, status and priorities as they joined the team. We are not certain that this was the case, we don’t have the evidence to make this claim. But, one recommendation would be that an annotated visualization noticeboard of “_what we know_” and “_what’s new_” might have been a really good way to get people up to speed and structure progress. We didn’t work as formally as that.

It was also very clear that any graphics needed user control, to refine them to particular needs, but also rapid introduction and learning to that team members could use these interactive graphics very quickly. A suite of possible ‘views’ and interactions seems important, but this must come with strong support. Giving people everything meets all needs, but also makes systems less usable. _OD Maps_ and perhaps other novel views need guided introduction - again , a DExD style setting (_[Beecham et al., 2019](https://www.gicentre.net/featuredpapers/#/dexds/)_) may be useful. That was very achievable here given workspace (virtual) and tech (Web/JavaScript). Having ‘_Wizard of Oz_’ style interfaces in which visualisation designers provided the knowledge also worked well in the digital workspace. 

<!---
  // https://gicentre.github.io/scrc/docs/flow/allScotland.html
--->`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 7.1 What worked
 - _OD Maps_ worked well in addressing the question in hand and provided rich outputs that showed the data fully and allowed us to see the effects of employment sector selection on the interaction model, and how this varied with scale and geography.  
 - _Grid maps_ are useful frames for _OD Maps_
 - The digital workspace meant that visualisation designs could be changed, run and interacted with on the fly. This proved very effective.
 - The insightful graphics worked in terms of developing mutual trust and confidence in capability. Showing something new is motivating, particularly if it is meaningful.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 7.2 What didn't work

- _OD Maps_ were not embraced by all members to the team, but then did result in useful discussion around needs, priorities and visualization possibilities in all cases.
- Developing specific actions from rich visual descriptions of data is difficult and far from not straightforward. The move from seeing and understanding, to doing in light of complexity, is challenging.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 7.3 Recommendations and opportunities

- Use _OD Maps_ to show the spatial structure of irregular flows - with multiple sources and destinations, and varying flow quantities and lengths
- _OD Maps_ work well for tens or hundreds of spatial units but are unlikely to scale to thousands of units
- _Grid maps_ that retain characteristics of geography work well as _OD Map_ layouts
- The _signed CHI_ statistic is an effective means of showing differences in light of varying counts
- Make _Flow Maps_ a viable and accessible alternative in flexible and fluid multi-view interfaces 
- Ensure that appropriate options for scaling, filtering, design and interaction are available & accessible (e.g. log / regular scaling)
- Use ‘_Wizard of Oz_’ methods to give rapid access to alternative representations in a fluid manner - this is good use of visualization expertise
- Use interactive notebooks with structured explanations and direct requests for responses to develop shared understanding of design, data and solution development
- Use a searchable threaded means of asynchronous discussion to log reactions, offer explanations and develop data and design discourse.
- Develop a “_what we know_” annotated visualization noticeboard with buy-in from project lead to log progress and get volunteers up to speed.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 7.4 Who was involved

By family name, by alphabet ...

 - **Jason Dykes** - visualization support and design
 - **Jess Enright** - epidemiologist, coordinator of Simple Network Sim model
 - **Fedor Gorokhovik** - software engineer, Simple Network Sim
 - **Robert (Bob) Turner** - lead software engineer, Simple Network Sim
 - **Jo Wood** - visualization support and design`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 8. References`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Wood, J.**, **Dykes, J.**, and **Slingsby, A.** (2010). Visualisation of origins, destinations and flows with OD maps. *The Cartographic Journal, 47(2)*, pp.117-129. https://doi.org/10.1179/000870410X12658023467367

**Yang, Y.**, **Dwyer, T.**, **Goodwin, S.**, and **Marriott, K.** (2016). Many-to-many geographically-embedded flow visualisation: An evaluation. *IEEE Transactions on Visualization and Computer Graphics, 23(1)*, pp.411-420. https://doi.org/10.1109/TVCG.2016.2598885`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("fetchImage", child1);
  main.variable(observer()).define(["md"], function(md){return(
md`*For basic rendering of graphical primitives:*`
)});
  const child2 = runtime.module(define2);
  main.import("Renderer", child2);
  main.variable(observer()).define(["md"], function(md){return(
md`*For conversion of topoJSON to geoJSON (for background mapping):*`
)});
  main.variable(observer("topojson")).define("topojson", ["require"], function(require){return(
require("topojson-client@3")
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*For data table storage:*`
)});
  const child3 = runtime.module(define3);
  main.import("aq", child3);
  main.import("op", child3);
  main.variable(observer()).define(["md"], function(md){return(
md`### Drawing Functions`
)});
  main.variable(observer("drawMap")).define("drawMap", ["d3"], function(d3){return(
function drawMap(r, regions, clrProp, clrFn) {
  return r
    .stroke("white")
    .setProjection(d3.geoIdentity().reflectY(true))
    .geoShape(regions, clrProp, clrFn);
}
)});
  main.variable(observer("drawFlows")).define("drawFlows", ["aq"], function(aq){return(
function drawFlows(r, fTable, gridTable, gridKey = "id", flowName = "flow") {
  const maxFlow = Math.max(...fTable.array(flowName));
  const zip = (a, b, c, d, e) => a.map((k, i) => [k, b[i], c[i], d[i], e[i]]);
  const dFlowCurve = ([ox, oy], [dx, dy]) => [
    [ox, oy],
    [dx + 0.25 * (oy - dy), dy - 0.25 * (ox - dx)],
    [dx, dy],
    [dx, dy]
  ];

  const t = fTable
    .join(gridTable, ["O", gridKey], [aq.all(), ["cx", "cy"]])
    .rename({ cx: "ox", cy: "oy" })
    .join(gridTable, ["D", gridKey], [aq.all(), ["cx", "cy"]])
    .rename({ cx: "dx", cy: "dy" });

  const ods = zip(
    t.array("ox"),
    t.array("oy"),
    t.array("dx"),
    t.array("dy"),
    t.array(flowName)
  );

  r.push().stroke("brown").fill();
  ods.forEach(([ox, oy, dx, dy, flow]) =>
    r
      .strokeWidth(Math.sqrt((8 * flow) / maxFlow))
      .bezier(dFlowCurve([ox, oy], [dx, dy]))
  );
  return r.pop();
}
)});
  main.variable(observer("drawODMatrix")).define("drawODMatrix", ["d3","odMatrixPos"], function(d3,odMatrixPos){return(
function drawODMatrix(
  r,
  flowTable,
  gridTable,
  mWidth = 250,
  showLabels = true,
  cScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd)
) {
  const places = gridTable.array("id").sort();
  const gSize = mWidth / places.length;
  r.push().setTransform();

  if (showLabels) {
    r.stroke()
      .textSize(gSize / 2)
      .textBaseline("middle");

    // Row and column labels
    let maxLen = 0;
    places.forEach((p) => (maxLen = Math.max(maxLen, r.textMetrics(p).width)));
    r.textAlign("right").translate(maxLen, maxLen);
    places.forEach((p, i) => r.text(p, 0, (i + 0.5) * gSize));
    r.push().textAlign("left").rotate(-90);
    places.forEach((p, i) => r.text(p, gSize / 2, (i + 1) * gSize));
    r.pop();
  }

  // Matrix cells
  const scaling = mWidth / places.length;
  r.fill()
    .stroke("#eee")
    .scale(scaling)
    .translate(0.5, 0)
    .strokeWidth(1 / scaling);
  // Background cells
  for (let row = 0; row < places.length; row++) {
    for (let col = 0; col < places.length; col++) {
      if (row == col) {
        r.fill("#eee");
      } else r.fill();
      r.polygon(odMatrixPos(places[row], places[col], places));
    }
  }
  // Flow cells
  const maxFlow = Math.max(...flowTable.array("flow"));
  [...flowTable].forEach((obj) => {
    obj.flow ? r.fill(cScale(obj.flow / maxFlow)) : r.fill();
    r.fill(cScale(obj.flow / maxFlow)).polygon(
      odMatrixPos(obj.O, obj.D, places)
    );
  });

  return r.pop();
}
)});
  main.variable(observer("drawGrid")).define("drawGrid", function(){return(
function (r, gridTable, clrFn, pBorder = 0) {
  const nSide = Math.max(...gridTable.array("col"), ...gridTable.array("row"));
  r.push().fit([
    [-0.5, -0.5],
    [nSide + 0.5, nSide + 0.5]
  ]);

  const side = 1 - 2 * pBorder;
  gridTable.objects().forEach((tr) => {
    const left = tr.col - 0.5 + pBorder;
    const top = tr.row - 0.5 + pBorder;
    r.fill(clrFn(tr.id)).polygon([
      [left, top],
      [left + side, top],
      [left + side, top + side],
      [left, top + side]
    ]);
  });
  return r.pop();
}
)});
  main.variable(observer("drawODMap")).define("drawODMap", ["d3","drawGrid","odMapPos"], function(d3,drawGrid,odMapPos){return(
function drawODMap(
  r,
  flowTable,
  gridTable,
  flowName,
  originsLarge = true,
  cScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd)
) {
  console.log("drawODMap ***");
  const pBorder = 0.05; // Proportion of grid cell given to border.
  const nSide =
    Math.max(...gridTable.array("col"), ...gridTable.array("row")) + 1; // Number of cells on side
  const maxFlow = Math.max(...flowTable.array(flowName));

  r.fit([
    [-0.5, -0.5],
    [nSide - 0.5, nSide - 0.5]
  ]).stroke();

  // Draw background in grey
  drawGrid(r, gridTable, (clr) => "#fafafa", pBorder);
  console.log("drawGrid: OK");

  // // Draw small destination maps for each origin location.
  const [aLabel, bLabel] = originsLarge ? ["O", "D"] : ["D", "O"];
  const fTF = flowTable.array(flowName);
  const fTB = flowTable.array(bLabel);

  flowTable.array(aLabel).forEach((a, i) => {
    fTF[i] ? r.fill(cScale(fTF[i] / maxFlow)) : r.fill();
    // console.log("i : " + i);
    r.polygon(odMapPos(a, fTB[i], gridTable, pBorder));
  });

  // Highlight 'home' cells.
  r.fill().strokeWidth(0.5).stroke("#669");
  gridTable
    .array("id")
    .forEach((id) => r.polygon(odMapPos(id, id, gridTable, pBorder)));
  console.log("End : " + flowTable + " : " + flowName);
  return r;
}
)});
  main.variable(observer("odTransition")).define("odTransition", ["d3","odMatrixPos","drawODMap","odMapPos"], function(d3,odMatrixPos,drawODMap,odMapPos){return(
function odTransition(
  r,
  flowTable,
  gridTable,
  flowName = "flow",
  t = 0,
  cScale
) {
  const maxFlow = Math.max(...flowTable.array(flowName));
  const nSide =
    Math.max(...gridTable.array("col"), ...gridTable.array("row")) + 1; // Number of cells on side

  const places = gridTable.array("id").sort();

  const matrixTrans = ([x, y]) => [
    (nSide * x) / places.length - 0.5,
    (nSide * y) / places.length - 0.5
  ];

  r.fit([
    [-0.5, -0.5],
    [nSide - 0.5, nSide - 0.5]
  ]).stroke();

  const lerpPos = (ps1, ps2) => d3.interpolateArray(ps1.map(matrixTrans), ps2);

  if (t == 0) {
    r.fill().stroke("#eee");
    // Background cells
    for (let row = 0; row < places.length; row++) {
      for (let col = 0; col < places.length; col++) {
        if (row == col) {
          r.fill("#eee");
        } else r.fill();
        r.polygon(
          odMatrixPos(places[row], places[col], places).map(matrixTrans)
        );
      }
    }
    [...flowTable].forEach((obj) => {
      obj.flow ? r.fill(cScale(obj.flow / maxFlow)) : r.fill();

      const matrixCoords = odMatrixPos(obj.O, obj.D, places).map(matrixTrans);
      r.polygon(matrixCoords);
    });
  } else if (t == 1) {
    drawODMap(r, flowTable, gridTable, flowName, true, cScale);
  } else {
    [...flowTable.orderby(flowName)].forEach((obj) => {
      obj.flow ? r.fill(cScale(obj.flow / maxFlow)) : r.fill();
      const mapCoords = odMapPos(obj.O, obj.D, gridTable, 0.05);
      const matrixCoords = odMatrixPos(obj.O, obj.D, places);
      r.polygon(lerpPos(matrixCoords, mapCoords)(t));
    });
  }
  return r.render();
}
)});
  main.variable(observer("odMapPos")).define("odMapPos", function(){return(
function odMapPos(oId, dId, gridTable, pBorder = 0.05) {
  const nSide =
    Math.max(...gridTable.array("col"), ...gridTable.array("row")) + 1; // Number of cells on side

  // Query table to find the row and column of a given named place.
  const getPos = (id) => {
    return Object.values(
      gridTable
        .params({ id: id })
        .filter((d, $) => d.id === $.id)
        .select("row", "col")
        .objects()[0]
    );
  };

  const [aRow, aCol] = getPos(oId);
  const [bRow, bCol] = getPos(dId);
  const side = (1 - 2 * pBorder) / nSide;
  const smallSide = side * (1 - 2 * pBorder);
  const left = aCol - 0.5 + pBorder + bCol * side;
  const top = aRow - 0.5 + pBorder + bRow * side;

  return [
    [left, top],
    [left + smallSide, top],
    [left + smallSide, top + smallSide],
    [left, top + smallSide]
  ];
}
)});
  main.variable(observer("odMatrixPos")).define("odMatrixPos", function(){return(
function odMatrixPos(oId, dId, ids) {
  const nSide = ids.length;

  const row = ids.indexOf(oId);
  const col = ids.indexOf(dId);

  return [
    [col, row],
    [col + 1, row],
    [col + 1, row + 1],
    [col, row + 1]
  ];
}
)});
  main.variable(observer("resolve")).define("resolve", function(){return(
function resolve(obj, expr) {
  return expr.split(".").reduce((o, i) => o[i], obj);
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Styling`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<style type="text/css">
  blockquote {border-left:2px none #f0f0f0; color:#606060; background-color:#fff; padding:0.15em; margin:0.15em; margin-left:0em; margin-right:2em; padding-left:2em; padding-right:2em; font-size:100%; width:40em; }
  </style>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*For archive view style:*`
)});
  const child4 = runtime.module(define4);
  main.import("ui", child4);
  return main;
}
