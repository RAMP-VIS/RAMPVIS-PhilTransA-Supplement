import define1 from "./01ae621c06e24486@1742.js";
import define2 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["Screenshot 2021-08-18 at 14.07.29.png",new URL("./files/96702d9fa7265ff88a7e5233a0096da1bb7238c2b5357355a4579f3d5b354c839861ad350239b9392c1d05cd7556908474f5b3bd1a87e1df47c91a7e9938770c",import.meta.url)],["Screenshot 2021-08-18 at 14.10.58.png",new URL("./files/1f5200e205b8fc192a8eb79a714aa75eb79b40231e9d6219633c3b670edb6bd6c7b026de4b96fadc9581b3de2d6cd30849f27244ddbbe311afef4dd63837627f",import.meta.url)],["Screenshot 2021-08-17 at 10.30.47.png",new URL("./files/fd95deebcfcd615923f73d95f672f5e30401662737ace49987179f009cbf858374df342ae6f5edff139f3527f7ac4dc59474d4161307add5c8e6779b687efc8f",import.meta.url)],["Screenshot 2021-08-12 at 21.46.23.png",new URL("./files/b257a10d04c491edd9d3dcae2c0a1bbcfa375d870ce557b99326d0c5d91fcb8557eb4e17529aae983f69f59b39339fa464c1fdb6a98e81fd95d00b024a1bcfa7",import.meta.url)],["Screenshot 2021-08-12 at 21.27.11.png",new URL("./files/7573fbdc5e162d96b89a11277ca17e0f2923c96fe3672007dd64595ef64ac395c9605fc264f284ab14d9d1fc92158c3f8b09e7bd9feb53b67ac5c274bbb8ef3c",import.meta.url)],["Screenshot 2021-08-12 at 21.26.56.png",new URL("./files/e2796787628d4f74dbae2077e14955b5ef68b91e57eaa961887abd0ed2ad35512f0d7aad45f7bfa6a5acafc365991bff9cf1da53f6ba6387437aa21ee4e8e313",import.meta.url)],["Screenshot 2021-08-12 at 21.37.38.png",new URL("./files/7e0be5084b5eb408f690071e406a51c715729e7b8bdc6954d76ebdcd7c4a09c0ee5b11255f0730ef88537f61d9f025be1db72e43ecac9eb77e8b614392cff088",import.meta.url)],["Screenshot 2021-08-12 at 21.27.23.png",new URL("./files/faa5f86805646f475d5829f7683bb185d5fac20837f2e90a36eec1e7e2a0e5a94fee0e4e7812023e68c9f74985c686dfff68e3d32d59a838e9d95a85dcc34925",import.meta.url)],["Screenshot 2021-08-12 at 21.47.33.png",new URL("./files/ca37f4fd33adf8c1cd3dc9391320875434676758a64c66478a9233303b78a8ef8866b4a14fd5df0ffb72109af45fe4b1a9f239b4366bebeca17433321cc26775",import.meta.url)],["Screenshot 2021-08-12 at 21.46.44.png",new URL("./files/20dbda204c52560ffeeaf306e6885e216720a0cb75ca02763f31f720f8a9ca2d27363a9a77832f458e33841d651581739e9e0efe65c21c5be5d2c1fa9a7be6e1",import.meta.url)],["Screenshot 2021-08-12 at 21.37.14.png",new URL("./files/4f4eccdc4d254117951dc2702f9afc0383d235d9b1ef3293328f4f70f5e00562dbe1006fb31eb3bba34b65ad0b6fecf026b5924d6dd2923f7d2d539fe690f385",import.meta.url)],["Screenshot 2021-08-12 at 21.37.18.png",new URL("./files/73c70f66ba32083c20eaa849f7e81e6b251b32a3075fb8b6c38826f583ca2e6c60c83e2f66c93b8bfbd3e9494a5e581e51cfc25498d43f8f4ccb249cf552c280",import.meta.url)],["Aug-05-2021 17-06-00.gif",new URL("./files/e42fb7061ca9a1d3bd2486ba4358021f5803ecbc78a5b2167fed9f18487f104017e91cd4f07ccd379fa91a7db304dbc82778bcb93a9c64fb1cb4337ed9bea92d",import.meta.url)],["pic5.png",new URL("./files/cc093d4de77aa512ee1d1ee8a99d347d8de50a21fd0abb463e5c560b51c743f519b503ae0dc30c99fad99a57d2b1182b3a49b5b30f27e00b0fce96b51a90d394",import.meta.url)],["pic6.png",new URL("./files/4a99eea1dfedf3ad1a40461a5a1772235852587ec0ca4a273024f720ba1e210fe3de0b8bcf7113333c00e1e0d10cd73c10c0a7a36b380391dc634488514cbe14",import.meta.url)],["pic4.png",new URL("./files/1d5966a23c4ab841dffd50b8e2e1acaee39521b087cd5322257bd09ef2fc18020cc9e3a27325dd166914e441d4211a5801cf3093372584579ce23b6b4aa28224",import.meta.url)],["Aug-05-2021 15-41-16.gif",new URL("./files/1a5f0ab66895365a3b1e162d074441468d741be1c7ff0c5ff555057de9df32f5c5c04cd5a85edb94a5a7712d7838445417d7ae8d24f645e0b958d93730df0cd7",import.meta.url)],["Aug-05-2021 15-16-21.gif",new URL("./files/9245fd1704a409b835331c239f8e2f551aa365f8f9360479c70dbe539d33e170c2cfe8c5bef54903643cae25e9899c9e276c487b1d27d4fd2fd8a9113a01ff72",import.meta.url)],["outputs.tsv",new URL("./files/061e0762ffd70824a9ec3dc2701c5cd2d5e1f137750e16121005e04f365bacd324c64cb22c5d573ab2d1f0b7246d19e96033af22a3e4cac0b2c4161c4508f8af",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Gridded Glyphmaps`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@aidans/rampvis-idiom-gridded-glyphmaps">https://observablehq.com/@aidans/rampvis-idiom-gridded-glyphmaps</a></pre>`;

  } else {
    return htl.html`<pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is a live version of the Observable Notebook supplement for the RAMPVIS PhilTransA submission titled </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</pre>`;
  }
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 1. TASK & USERS - User Story`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- As an **epidemiological model builder** developing a high spatial resolution (1km) model
- I would like to
 - Easily and quickly see maps of model **inputs** and **outputs** at any spatial scale and for any region
 - See how the **multivariate** model outputs change **spatially over time**
 - See **comparisons** of model outputs with different input parameters
- so that I can
 - check that the model rules and parameters are producing expected results
 - evaluate the importance of the different modelling processes on infection outcomes
 - compare the infection outcomes of different interventions
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Input data are simply a **set of locations**, **each of which has multiple values**. The techniques relies on high resolution spatial data.

The **demographic data** example below is one of the **inputs** to the model. Here's the complete dataset - a set of locations based on a 1km grid. Each location has its population in distinguished in 10 age-bands, which you will see by expanding the dataset below.`
)});
  const child1 = runtime.module(define1);
  main.import("demographics", child1);
  main.variable(observer()).define(["demographics"], function(demographics){return(
demographics
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The model **outputs** the same set of locations, but for each age-band the population is distinguished. In the example below with just a few locations location (just to cut down on data for this example), you'll see that the data are organised by effect of population (e.g. "susceptible"), age group and then 30 numbers representing a time series.`
)});
  main.variable(observer("outputs")).define("outputs", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.tsvParse(await FileAttachment("outputs.tsv").text(), d => {
  //create structured object for each row based on the categories and ages. increment idx by the number of timesteps
  const obj = {};
  const cats = [
    "susceptible",
    "exposed",
    "asymptomatic",
    "presymptomatic",
    "symptomatic",
    "hospitalised",
    "recovered",
    "dead"
  ];
  const ages = [
    "age0_9",
    "age10_19",
    "age20_29",
    "age30_39",
    "40_49",
    "age50_59",
    "age60_69",
    "age70_79",
    "age80_99"
  ];
  let idx = 93;
  const timesteps = 30;
  cats.forEach(cat => {
    obj[cat] = {};
    ages.forEach(age => {
      obj[cat][age] = Object.values(d).slice(idx, idx + timesteps);
      idx += 93;
    });
  });
  return obj;
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Gridded Glphymaps** aggregate dense spatial data into grid cells, creating a tessellating set of square "tiles". Within each tile, a subplot/glyph (miniature information graphic) summarises the multivariate data for the ground-area represented by the tile. A wide variety of subplot/glyph designs can be designed for depicting a multiclass and multivariate data, including indicate multiclass counts, multiclass averages, variation, time-series data and comparison.

The gridding is done in screen space. This means that in interactive versions, the act of "zooming" changes the level of aggregation and the subplots/glyphs are rerendered accordingly.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Placing glyphs/subplots on maps has a long history. Subplots (miniature charts) such as barcharts, piecharts, timeseries graphs are often placed on choropleth maps to depict multivariate data about them, including [Jacque Bertin in his influencial book](https://www.semanticscholar.org/paper/Semiology-of-Graphics-Diagrams%2C-Networks%2C-Maps-Bertin/22be1cebc94d9eedc2cc6c000bee5222a37a9fd0) Icons or glyphs for representing multiclass and multivariate fields (data that continuouly vary data over space) have been shown have been demonstated by [Pickett and Grinstein](http://www.ifs.tuwien.ac.at/~silvia/wien/vu-infovis/references/pickett-ieee88.pdf) and more recently by [Wickham *et al* (2012)](https://vita.had.co.nz/papers/glyph-maps.html). Wickham demonstrates "gyphmaps" - how arranging subplots/glyphs in regular arrays is an effective method for depicting environmental data in the context of climate science. He compared them to heatmaps in which a multivariate glyphs replace colour lightness indicating a univariate value. There was a focus on gridded data but it wasn't limited to that.

[Slingsby *et al*, 2016](https://openaccess.city.ac.uk/id/eprint/20884/) developed some of the ideas further including the use of interactivity for exploring data at multiple spatial spaces. He used the term "Tilemaps", but did not limit these to gridded aggregations, but also aggregations that are based on irregular regions (e.g. administrative units) that are laid out into regular array using algorithms (e.g. [Meulemans *et al*, 2016](http://openaccess.city.ac.uk/15167/)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md","FileAttachment"], async function(md,FileAttachment){return(
md`
Bertin (1987) has some examples of multivariate map data for France (e.g. [example here](http://philogb.github.io/blog/2013/06/09/france-mobility-flow/). There are also plenty of examples in [Wickham *et al* (2012)](https://vita.had.co.nz/papers/glyph-maps.html) (below). Many of them depict timeseries data of climate-related variables, with the one on the left depicting smoothed trends of temperature prediction using locally-scaled glyphs and globally-scaled cell-shading. Examples are in the paper (I haven't obtained permission to use them here).

Multiscale species accumulation curves at [Morgades et et, 2021](https://openaccess.city.ac.uk/id/eprint/26289/) use a similar same technique to show median species richness (y-axis) at different spatial scales (x-axis), with the red band indicating the interquartile range which converges to zero in the right as the scale reaches the scale represented by the grid cell.
 
<img src="${await FileAttachment("pic4.png").url()}" height=250/>

Some population-based glyphs at [Slingsby *et al*, 2016](https://openaccess.city.ac.uk/id/eprint/20884/) that represent a population profiles (as a radial "spider plot") from the 2010 UK census with variable types distinguished using hue. The variable values are actually comparisons to the mean, with circlar glyphs near the centre of Leistershire (where most of the population lives) indicating a profile that is close to the average for the area and oulaying areas (where fewer people live) deviating from this average "circle". They enable us to pick out spatial foci of particular socio-economic groups and see broad trends, such as the differences between the city and its suburbs and the eastern and western nighbourhoods.

<img src="${await FileAttachment(
  "Screenshot 2021-08-18 at 14.07.29.png"
).url()}" height=250/>


Some temporal glyphs at [Slingsby and van Loon (2017)](https://openaccess.city.ac.uk/id/eprint/18270/) in which columns (x-axis) are time day and rows (y-axis are month of year) and colour lightness indicates time-spent by gulls (individuals that were GPD-tracked in a study). This indicates at which times in the year and day gulls spend their time.

<img src="${await FileAttachment(
  "Screenshot 2021-08-18 at 14.10.58.png"
).url()}" height=300/>


`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`_The original Java implementation is available at https://www.staff.city.ac.uk/~sbbb717/glyphmaps/covid/_`
)});
  main.variable(observer()).define(["md","FileAttachment"], async function(md,FileAttachment){return(
md`### "Easily and quickly see maps of model inputs and outputs at any spatial scale and for any region"

It is useful to be able to verify **model inputs** as this drives model outputs. These screenshot show  (inverted) population pyramids indicate population counts in ages: **absolute numbers** (left), relative numbers (to show age structure; middle) and **relative numbers with opacity based on absolute numbers** (right). The latter de-emphases places where population is small.

<img src="${await FileAttachment(
  "Screenshot 2021-08-12 at 21.26.56.png"
).url()}" width=200/><img src="${await FileAttachment(
  "Screenshot 2021-08-12 at 21.27.11.png"
).url()}" width=200/><img src="${await FileAttachment(
  "Screenshot 2021-08-12 at 21.27.23.png"
).url()}" width=200/>

Below is a good example of the value of the relative population gylphs. It shows that Central Edinburgh and Glasgow has unusually many younger people than elsewhere, characteristic of many inner-cities.

<img src="${await FileAttachment(
  "Screenshot 2021-08-17 at 10.30.47.png"
).url()}" width=500/>

These are interactive and can be explored at any spatial scale (see examples below)

There are also **intermediate internal parameters**. Inspection of these can help ensure that the model is performing as expected. The video below is for the the intermediate and internal "force of infection" parameter. These are timeseries plots (left-right). Note the double-peak in some areas.

<img src="${await FileAttachment("Aug-05-2021 17-06-00.gif").url()}"/>
`
)});
  main.variable(observer()).define(["md","FileAttachment"], async function(md,FileAttachment){return(
md`
### See how the multivariate model outputs change spatially over time

This requirement is rather exploratory and is designed to help assess whether the model is doing what is expected. As the model is spatially-explicit over time, this animated mode of visualistion supports this task well. The screenshot below show numbers with different modelled infection statuses over time (left-right; blue is "susceptible", i.e. have not been infected). As above: **absolute numbers** (left), relative numbers (middle) and **relative numbers with opacity based on absolute numbers** (right; which de-emphases places where population is small).

<img src="${await FileAttachment(
  "Screenshot 2021-08-12 at 21.37.14.png"
).url()}" width=200/><img src="${await FileAttachment(
  "Screenshot 2021-08-12 at 21.37.18.png"
).url()}" width=200/><img src="${await FileAttachment(
  "Screenshot 2021-08-12 at 21.37.38.png"
).url()}" width=200/>


This helps us **assess the effect of the infectiousness parameters on the modelled spread**. Below is an example of a model run in which infection does not spread beyond densely populated areas. Relative coloured areas indicate the proportion of population in different infection modes; the one on the right has the "susceptible" (i.e. not infected) population removed. It is clear that in this case **the parameter for infectiousness is too low to model outside populated areas**.

<img src="${await FileAttachment(
  "pic5.png"
).url()}" width=200/><img src="${await FileAttachment(
  "pic6.png"
).url()}" width=200/>


The descriptions and videos below show how the ideom can help determine this.

Below is a video that demonstates zooming for **changing the spatial resolution**. It shows absolute numbers of people affected by COVID. The unsurprising **key observation** is that this is all in the heavily populated "Central Belt". The animation shows how COVID infection spreads over time (see top for day number).

<img src="${await FileAttachment("Aug-05-2021 15-41-16.gif").url()}"/>


Below is a video which shows **relative proportion of population** and clearly shows the progression of COVID infection over space (blue is "susceptible" which represented the share of population that has not been infected). The **key observation** is the spatial coherence in spread that lags spatially. It demonstrates the spatial pattern of temporal lags that result from the variety infection "seed" locations and the interactions between these. (User-interface) interations include:
 - Manually scrolling through time (move the mouse left/right at the bottom of the screen)
 - Change the spatial resolution (by using the scroll wheel) - not demonstrated
 - Move to a different area (left-drag mouse; pan)

<img src="${await FileAttachment("Aug-05-2021 15-16-21.gif").url()}"/>


`
)});
  main.variable(observer()).define(["md","FileAttachment"], async function(md,FileAttachment){return(
md`
### See comparisons of model outputs with different input parameters

Where we have two different model runs, we look at them one after the other or next to each other to help us compare. However, it is more effective to **compute the differences** and show these differences graphically. In this section, we compare each infection category between two model outputs, computing the differences. Bars above the horizonal centreline indicate **more**; bars above the horizonal centreline indicate **less**; 

The graphic below shows **absolute difference** (in numbers of people). Below the centreline is where the difference is negative (less than); above the centreline is where the different is positive (more than). Time is shown from left to right. No difference is observed for the first part of the period, and then the graphic clearly shows that more people are affected in abundances_poll1.h5 than abundances_poll2.h5 in the latter half of the time perios. The tooltip indicates a situation where ther are *fewer* susceptible (because they are infected) and also provides percentages.


<img src="${await FileAttachment(
  "Screenshot 2021-08-12 at 21.46.23.png"
).url()}" width=600/>


Below is the same graphic, but shows differences as a **proportion of whole population**. Note that some of the highest proportions are where there is low population. The challenge is to show both relative and absolute. Tooltip indicated 11% more exposed on day 20 than in abundances_poll2.h5.


<img src="${await FileAttachment(
  "Screenshot 2021-08-12 at 21.46.44.png"
).url()}" width=600/>

A solution to showing both absolute and relative difference is shown below. Here, places with low population are deemphasised (faded). The tooltip shows 9% more people susceptible (because they are not infected), but the lightness indicates comparative low population. Note the flipping of "exposed" (yellow) from positive to negative to to the right of the tooltop - interesting!


<img src="${await FileAttachment(
  "Screenshot 2021-08-12 at 21.47.33.png"
).url()}" width=600/>


`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Finally, here's a JavaScript implementation of the population pyramids version from [this notebook](https://observablehq.com/@aidans/zoomable-gridded-glyphmap-of-scottish-population)`
)});
  main.variable(observer("viewof gridWH")).define("viewof gridWH", ["Inputs"], function(Inputs){return(
Inputs.range([5, 100], {
  step: 5,
  value: 25,
  label: "Grid resolution"
})
)});
  main.variable(observer("gridWH")).define("gridWH", ["Generators", "viewof gridWH"], (G, _) => G.input(_));
  main.variable(observer("glyphmap")).define("glyphmap", ["demographics","drawGridMap","regionsBoundaries","gridWH","zoomPan"], function(demographics,drawGridMap,regionsBoundaries,gridWH,zoomPan)
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
    false
  );
}
);
  const child2 = runtime.module(define1);
  main.import("drawGridMap", child2);
  main.import("regionsBoundaries", child2);
  main.variable(observer("zoomPan")).define("zoomPan", ["d3"], function(d3)
{
  const z = d3.zoom();
  z.transform = d3.zoomIdentity;
  return z;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

#### The gridding

_"It has been very interesting to see visualisations using both gridding [this idiom] and region-based tessellations, and there are obvious advantages in visualising data in both formats. For the transmission of an infectious disease, gridding has proved particularly useful because of the importance of physical geography - spatial barriers such as mountain ranges impact disease spread by interfering with human movement, for instance. This is particularly apparently in the Highlands and Islands region of Scotland, where the islands are very geographically isolated, and indeed have been treated differently by the government precisely because of that physical isolation and the resulting low levels of disease." (Richard Reeve)_

#### Interactivity (in resulting tools)

_"Interactivity was one of the most important aspects to me in terms of model development. To be able to have a tool that I could interactively explore model outputs (and inputs) was very useful when adding new mechanisms or datasets. Before this, I would plot static overviews of the simulation runs, which gave an impression of the overall working, but missed crucial elements that we could pick up in the Glyphmaps. **One particular example** of this is when we explored comparisons between two deterministic model runs. Through examining the outputs in the Gridded Glyphmaps, we identified that there was still an element of stochasticity in the simulation that needed to be isolated and fixed. This was not picked up using standard plots and has now been added to model testing to prevent the problem from reoccurring."" (Claire Harris)._

_"The ability to investigate the differences between different model outputs is critical, and has allowed us to identify problems with the model code itself, and to verify the impact of changes to our understanding of the disease on model outputs." (Richard Reeve)._


#### Comparison (afforded by the visualisation and interaction)

_"Model output comparison is a relatively new area for us in our own development, as these runs are now at the stage where we need to understand in great detail what and where any differences are. We have gone through several iterations of comparisons, settling on the pyramid change for relative and absolute numbers, as well as a fading component to focus the eye on areas where population numbers are higher for relative changes. This helps to fade out areas where differences may look comparatively large, but are an artifact of small population sizes. I find this particularly helpful as a compromise between the relative and absolute change plots." (Claire Harris)_

_"The ability to investigate the differences between different model outputs is critical, and has allowed us to identify problems with the model code itself, and to verify the impact of changes to our understanding of the disease on model outputs." (Richard Reeve)_

#### Population-proportional fading for relative versions of glyph

Fading the glyphs based on on population seemed an effective way to _"focus the eye on areas where population numbers are higher for relative changes." (Claire Harris, from the quote above)_

#### The resulting tool itself

_"The whole system is very flexible and allows us to do lots of different comparisons and visualisations, which has been really important with such a complex dataset in understanding what is going on." (Richard Reeve)_

#### Collaboration on weekly cycles

We checked-in every week and wrote up our progress and discussions in a blog-style page we could all edit.

_"Interacting with each other on a regular basis has ensured that model and visualisation development have kept pace with one another, with the Gridded Glyphmap being adapted to current problems we may be facing." (Claire Harris)_



`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

#### Data organisation

It was difficult to keep track of different versions of the input and output files _"with no logged way of accounting for what parameters were used etc" (Claire Harris)_ .We used date-named folder in the GIT repo, but _"we have already identified the [data] pipeline will help with this" (Claire Harris)_

#### Interpreting the graphics

Despite the close collaboration, some of the proposal solutions didn't work well and it wasn't clear exactly what they are showing (e.g. normalising by what?). _"It's sometimes hard to understand exactly what we're seeing - is it a meta-visualisation(?) problem with such complex data to understand what is being displayed now. Conversely, in "uncompensated" models, it's hard to see what's going on because the numbers are so low in some areas that it's very hard to see what's happening with the disease." (Richard Reeve)._

#### Places with low population density (new solutions have been proposed since this issue)

This comment from Richard prompted the population-proportional fading, which seems a promising approach (see the "what worked" section).

_"It's still difficult to appreciate how changes play out over space when the population densities are so different, but these differences in population density impact disease progression, so it's hard to know what the "best" way is to compensate for differences in pop density without "compensating" for disease outcomes differences. I think this is still an unresolved issue." (Richard Reeve)_ 



`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Evidence`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
We checked-in every week and wrote up our process and discussions in a blog-style page that we could all edit. This contains a detailed log of what we did and what we discussed. It is a good source of evidence.

In addition, the quotes above can be seen as evidence.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Phase of experimentation followed by phase of refinement**
Although not planned, there ended up being two phases to the project. The *first* was the 'emergency' volunteering phase that we used to experiment and make progress quickly. The *second* was the subsequently-funded RAMP-VIS project in which design decisions were refined along with some software engineering to create a bespoke tool that made it clear what was being displayed and could be used by the modellers to support their work without further help. Our work and priorities were different in each phase and this structure happened to be extremely useful. We'd recommend a similar structure for future cases where rapid visualisation design, prototype and tools for supporting analysts are developed.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

#### Important to be clear what we see (and tension with the rapid and experimental approach)

It may sound surprising, but it's really important that it clear how to interpret the graphic(!) Exactly how the data are normalised and how the interactions affect the display is **essential** - the whole point after-all is to support analysis. In the second phase (see above) there was a process of removing some of the more experimental views and recasting the ones we wanted to keep in a more systematic way with a clear user interface (and see open problem below).


#### On the idiom for this case study

We have found this idiom to been effective for this case study. The idiom's visual encodings helped reveal geographical patterns in COVID model input and output data. The interactive methods have enabled rapid exploration of different aspects of the data at multiple spatial scales. This represents a new way of exploring and validating model inputs and outputs that wasn't available before. Insights have resulted a better understanding of how the model works and what appropriate parameter values need to be.


#### On the idiom in general

We think this idiom would work well for a variety of other datasets of high spatial resolution.


#### Open problems

**Methods that facilitate comparision:** _"More thought needs to go into the best ways of visualising differences" (Richard Reeve)_

**De-emphasising data for low populations:** _"what is the right way to control for population size without removing important signal from the data. I think this is a general open problem." (Richard Reeve)_



**Intuitive graphics:** _"We need to think about how to represent better what the current view is to make it easier to manipulate the views and make them easier to interpret and aid with ease of use. It's still hard to understand exactly what we're seeing sometimes." (Richard Reeve)_



#### Opportunities

**Biodiversity**: _There are opportunities for this to extend beyond COVID19 and indeed beyond disease modelling to some of the biodiversity simulations run on the same system. (Claire Harris)._



`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.5 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Aidan Slingsby, Claire Harris, and Richard Reeve`
)});
  const child3 = runtime.module(define2);
  main.import("ui", child3);
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
**Bertin, J. 1987**. [Semiology of Graphics: Diagrams, Networks, Maps](https://www.bibsonomy.org/bibtex/25d54507464b7605031ea9fc7dfca3067/dzeneralen). Republished by Esri Press, 2010.

**Meulemans, W., Dykes, J., Slingsby, A., Turkay C. and Wood,J. 2017.** [Small Multiples with Gaps](https://openaccess.city.ac.uk/15167/) *in IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 381-390, Jan. 2017, doi: 10.1109/TVCG.2016.2598542.*

**Morgades, P., Slingsby, A, and Moat, J. (2021)**. [Assessing the Geographical Structure of Species Richness Data with Interactive Graphics](https://openaccess.city.ac.uk/id/eprint/26289/). *In: Workshop on Visualisation in Environmental Sciences (EnvirVis) The Eurographics Association. ISBN 978-3-03868-148-9*  

**Pickett, R.M., and Grinstein G.G.**, [Iconographic Displays For Visualizing Multidimensional Data](https://ieeexplore.ieee.org/document/754351) *Proceedings of the 1988 IEEE International Conference on Systems, Man, and Cybernetics, 1988, pp. 514-519, doi: 10.1109/ICSMC.1988.754351.*

**Slingsby, A. and van Loon, E. (2017)**. [Visual Characterisation of Temporal Occupancy for Movement Ecology.](https://openaccess.city.ac.uk/id/eprint/18270/) *Paper presented at the Workshop on Visualisation in Environmental Sciences (EnvirVis), 12-13 Jun 2017, Barcelona, Spain.*

**Slingsby, A. 2018**. [Tilemaps for Summarising Multivariate Geographical Variation](https://openaccess.city.ac.uk/id/eprint/20884/). *VIS 2018: Workshop on Summarisation.*

**Wickham, H., Hofmann, H., Wickham, C. and Cook, D., 2012**. [Glyph‐maps for visually exploring temporal patterns in climate data and models.](https://vita.had.co.nz/papers/glyph-maps.pdf) *Environmetrics, 23(5), pp.382-393.*
`
)});
  return main;
}
