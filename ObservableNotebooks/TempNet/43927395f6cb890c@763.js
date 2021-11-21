import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["InfectionMapVisualisations.png",new URL("./files/a670a957be765aaf2930e9216fdcf90831585d59b4ca5e518abefbcdd08d76fde6bfb5e7101cd3262ab3632430b8f4ae36d50a1cc67dadb03e0233c63961870c",import.meta.url)],["croppersistent.mp4",new URL("./files/e99f9a177f69d3ee820c6ea4350c5b33d49ecfc236ca22e823deea47b56ca2852d1dfde99fe334752a2ea57c9b24bd9a6d67ba864c91c4394610aea5ce2c2e2e",import.meta.url)],["croppersistent30.mp4",new URL("./files/4ba8bcf25cb707e0daaff41f752696973b05671d408448d93beee6e401b60cbe6372fabfce6af7527587990a5cd557f1f4f2c8d33c48227909715aa58c3e80e7",import.meta.url)],["image@1.png",new URL("./files/eb1ec904b76d5b8e5e9d0f1d670a1c42bdca0c3783ce218f9d3c8a3ed35192c9f06103999d53f9f2b52540ee635f75334517aeee45ec5627182fdae35eaa5a63",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Complementary Visualizations of Dynamic Networks (Static to Dynamic)`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/43927395f6cb890c">https://observablehq.com/d/43927395f6cb890c</a></pre>`;

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
md`Our users had a contact tracing simulator but no way to visualise its output directly.  The reason why they would like to visualise these networks is to better understand the effect of parameter tuning on their model and to see if it is doing what they expect.  In particular for different settings, the users would like to understand the final reach of the simulation and the dynamics of it over time.

As an **epidemiological modeller**, 

I want to: 
- better understand the impact of the parameters on the simulation outcomes
- understand whether the model is behaving as expected
- understand the reach of the spread of the disease from the initial cases
- understand how the spread of the disease relates to the meta-data
- understand how quickly/slowly the disease simulation spreads
- presenting the results of the simulations to others

So that **I can re-tune the model parameters and explain modelling results to others**

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`
Temporal networks are networks where each edge has its own individual time coordinate e = (u, v, t) where a node u (a person) that infects node v (another person) at a particular time t (when the edge appears).  Edges indicate infections.  A tree encodes the reach of infections from an index case and reinfections are not allowed (a node cannot have two parents).  In our case, we have a temporal forest or a collection of trees with such edges.  The infection starts at the root of the tree and spreads to the leaves.  We have used these to visualise the progression of disease simulations without timeslices. We explored the design space with static and animated visualisations. The following is an illustration how we move from the raw text-based data to a network structure:

<img src="${await FileAttachment(
  "image@1.png"
).url()}" height=450/>

For each infection event, we also have meta-data that we associate with the edges:
- *location*: location labels where the infection took place, e.g., restaurant, workplace, school, etc.
- *disease state*: the state of the infecting node at the time of the infection

And for each node, we have the following meta-data:
- *age*: the age of the individual as provided in the simulation.

Simulations results here: https://github.com/ScottishCovidResponse/scrc-vis-modelling/tree/master/ContactTracing/data`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

## DynNoSlice or Event-Based Dynamic Graph Visualisation
Until recently, dynamic graphs have required that the temporal dimension of the data be divided into a series of timeslices (projecting all nodes and edges down into a static graph representing a time interval).  However, many data sets have time coordinates associated with each edge (a Twitter post occurs at a particular time).  DynNoSlice is able to draw temporal networks directly in the space-time cube without timeslicing, exploiting the full temporal resolution of the data.

## GMaps
Often node-link diagrams are hard to read for those who are less familiar with visualisations, yet maps are commonplace and easily readable with little instruction.  GMap is a method for transforming graphs into maps to make their attributes easier to understand.

## Time-to-Colour
Frequently a static perspective can help understand dynamic data.  We constructed this visualisation as follows.  After flattening time (creating a single static graph), the temporal network was drawn in Gephi.  This was visualised in Jupyter notebooks with nodes coloured with increasing saturation with increasing time.  Properties of edges, such as infection location, were also visualised using colour.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In our solution, we applied time-to-time techniques (animation) for the visualisation of dynamic graphs with DynNoSlice [2,3,4].  Our data set is a temporal graph where each edge has its own timestamp: e = (u, v, t) where u and v are nodes and t is the time coordinate of the edge.  The only graph drawing algorithm that is currently able to draw temporal networks (data of this type) without timeslicing is DynNoSlice. Animations seem to provide a good overview of time and rate of information flow as well. These animations provided an overview of disease progression and the speed at which the disease spreads over time.

GMap Visualisations[1] provided an overview of location.  As GMaps map attributes to spatial position and colour in an intuitive way, this provided a method for visualising location of infection.  However, the overview in terms of time would not be available.  Other parts of the story with GMap are available here: https://observablehq.com/@kaimdx/rampvis-idiom-gmap `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

## 5. EXAMPLES


DynNoSlice has been used to visualise a number of temporal networks including literary networks and social media networks from Twitter:

Software and project page: https://cs.swan.ac.uk/~dynnoslice/

Source code and videos are available on this page.

Video showing results against timesliced competitors on social media and literary networks:  https://cs.swan.ac.uk/~dynnoslice/files/video.mp4

Visual Benchmarks could potentially work well here to achieve some visual persistence [6].

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`As we have a temporal graph, each individual edge of the simulation has its own timestamp.  In order to visualise the progression of this dynamic graph, we would normally need to impose a set of timeslices (snapshots of the graph at specific time intervals) on the temporal graph in order to draw it.  However, with DynNoSlice [2,3,4], the network can be drawn directly, without timeslicing, inside the space-time cube (a three dimensional space composed of 2D +  time as the third dimension).  A plane can then be swept from top to bottom of the space-time cube to see an animation of the temporal network.  In the first video below, we can see the progression of a large, fragmented outbreak (where random infections was too high).  In the second video, we can see a close up of the thirty largest components of an infection map.  Nodes are colour-coded by infection state (white asymptomatic, red symptomatic, green recovered, and black dead).  This animation shows that the largest chains of the simulation are usually started by a larger number of asymptomatic cases.`
)});
  main.variable(observer()).define(["FileAttachment","htl"], async function(FileAttachment,htl){return(
htl.html`<iframe width="560" height="315" src="${await FileAttachment("croppersistent.mp4").url()}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
)});
  main.variable(observer()).define(["FileAttachment","htl"], async function(FileAttachment,htl){return(
htl.html`<iframe width="560" height="315" src="${await FileAttachment("croppersistent30.mp4").url()}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`
In order to encode location of infection and to allow for a flattened view of all time for the infection map we used a combination of Jupyter notebooks and GMap.  Example figures are below.  The red edges on the left correspond to asymptomatic transmissions.  in the GMap image on the right, large polygons of different colours demonstrate components of the graph.  Individual nodes have colour based on the location of the infection.  These static representations allow for detailed views of some of the graph attributes. 

${await FileAttachment("InfectionMapVisualisations.png").image()}
Image taken from [5].`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`- The visualisations were complimentary and could provide indications of what the simulator was doing.  
- In certain cases, the end users found that parameters were behaving well and where they needed adjustment.
- Animated representations were good for explanation. We observed that such representations led to some key observations during the meetings with the epidemiologists, for instance, they spotted that the number of random infections were too high which led to several small infection chains: [croppersistent.mp4](${await FileAttachment("croppersistent.mp4").url()}).  Also, asymptomatics were the source of the largest infection chains for a simulation: [croppersistent30.mp4](${await FileAttachment("croppersistent30.mp4").url()})
- Non-timeslice based representations fit the data nicely as each edge has its own time coordinate.  The only other way to draw this data would be to project the information down onto a series of timeslices which leads to a loss of information
- GMAP technique was able to show the location of the infections better by colouring the relevant subgraphs
- The more static visualisations of the infection map provided:
  - good overviews on the final result of the simulation
  - comparisons between simulation runs which capture different policies
  - additional channels of information to be visualised as colour on the nodes, such as the generation time or the outgoing degree
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- For the animated infection maps, many components made it difficult to visualise the full network at once since there are a very large number of changes for a viewer to follow at once. We are working on solutions to this.
- Static visualisations of the whole network did not scale well and needed very large screen estate, and did not prioritise important/valuable information
- We needed to filter the network down to the largest components which meant potentially useful information is lost and a bias towards larger components introduced
- The more conventional techniques, such as forced-directed network visualisations, that we tried were not highly effective to communicate the location based information (see data section above). Force-directed approaches use location to convey the topology of the graph so that location could not be presented easily with location. As a consequence, we tried visualising the location with colour but such a representation quickly becomes unreadable with many locations and many nodes
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The event-based dynamic graph visualisation methods (DynNoSlice) [2,3,4] were effective for drawing this data without timeslicing.  However, the result was always an animation.  Animation can provide a good overview of disease progression but is more limited for detailed analysis.  Better integration with the other static methods for visualising this data would allow for more effective analytics. In addition to the network visualisation techniques, methods that make use of metrics derived from the networks, such as distributions of degrees, distributions of component sizes, etc.,  could provide leverage in cases where the networks are large. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Daniel, Kai, Cagatay`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[1]  E.  R.  Gansner,  Y.  Hu,  and  S.  G.  Kobourov.   Gmap:  Drawing  graphs  asmaps.  In D. Eppstein and E. R. Gansner,  editors,Graph Drawing,  pages405–407, Berlin, Heidelberg, 2010. Springer Berlin Heidelberg.

[2]  P. Simonetto, D. Archambault, and S. Kobourov.  Drawing dynamic graphswithout timeslices. InInternational Symposium on Graph Drawing and Net-work Visualization, pages 394–409. Springer, 2017.

[3]  P.  Simonetto,  D.  Archambault,  and  S.  Kobourov.   Event-based  dynamicgraph  visualisation.IEEE Transactions on Visualization and ComputerGraphics, 26(7):2373–2386, 2020

[4] A. Arleo, S. Miksch, and D. Archambault.  A multilevel approach for event-based dynamic graph drawing.  InEuroVis Short Papers, 2021.

[5] M. Chen, A. Abdul-Rahman, D. Archambault, J. Dykes, A. Slingsby, P.D. Ritsos, T. Torsney-Weir, C. Turkay, B. Bach, R. Borgo, A. Brett, H. Fang, R. Jianu, S. Khan, S. Laramee, P. H. Nguyen, R. Reeve, J. C. Roberts, F. Vidal, Q. Wang, J. Wood, K. Xu.  RAMPVIS: Answering the Challenges of Building Visualisation Capabilities for Large-scale Emergency Responses, https://arxiv.org/abs/2012.04757, 2021.

[6] Harrower, M. A. (2002) Visual Benchmarks: Representing geographic change with map animation. Ph.D. thesis, The Pennsylvania State University. PhD Thesis

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
