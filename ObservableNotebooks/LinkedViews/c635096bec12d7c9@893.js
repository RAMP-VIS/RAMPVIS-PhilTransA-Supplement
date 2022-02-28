import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["commongis.png",new URL("./files/c766f70935ae37d3818231370a1043402bda2e479e6c98f50968615def16d8dc3c078209cbb21ae255536333c7b1119666897a94a8b243b3f43ffd5e8cb9bacb",import.meta.url)],["situ.png",new URL("./files/e5ed14355b84221cdb480bb6f5c811edc843e753d5a895459f5b0660fa4b24301b69e79b8bebb1f78eb37d79800ed735437c7ed51bb56abdab00b1ccc2fe3080",import.meta.url)],["ensemblevis_mlv.png",new URL("./files/53c625ae59034f5040ed247f226d734277429dba4918b41ec30c1cfe89c1c0f2f2a1bae36b97ae91710686acbb2445c7f9be5f81304594c16370994de3e471d1",import.meta.url)],["ensemble_line_chart.png",new URL("./files/a6c203c891687e9778d3426a2c6f8495c03ebce4c65cbd91fcc16d561ae19b75d55e7c6f9f73050a16e8d232f316f19b7f970b9fa1f3c3f4eb9dff850fac03eb",import.meta.url)],["MLV-3.png",new URL("./files/6940dc20af1c3cc002ab54fd18b297718042ec4b4e2bfccb286241c57d79cb986faf9036c12dfa9684bfc5382628676f7d55a6d0b45bf2f65004cbfd073aa298",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Multiple Linked Views for Visual Exploration`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@henryqw/multiple-linked-views">https://observablehq.com/@henryqw/multiple-linked-views</a></pre>`;

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
md`As **a visualization researcher**

I would like to 
  * develop interfaces that enable epidemiological model builders(EMB) to compare models with different input, output, and configurations.

So that EMBs can
  * can understand and adjust their models.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Input data:

* 160 different parameter configurations, each includes 16 parameters:
  * https://github.com/ScottishCovidResponse/EnsembleVis-UI/blob/master/public/assets/posterior_parameters.csv

Output data:

* Average value from 1,000 runs for each configuration:
  * https://github.com/ScottishCovidResponse/EnsembleVis-UI/tree/master/public/assets/data/output`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Multiple Linked Views for Visual Exploration`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`###  or how to Project for 2D - part 1`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Multiple Linked Views (MLV)** or **multiple coordinated views** refers to *any instance where data is represented in multiple windows*.

Different representations of data are placed in multiple windows and interactions with any of these views result in coordinated responses in others ([Roberts, 2007](https://ieeexplore.ieee.org/document/4269947)).

By adopting MLV, our implementation enables users to **rapidly explore the complex simulation data** ([North and Shneiderman, 2000](https://dl.acm.org/doi/10.1145/345513.345282)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[Roberts (2007)](https://ieeexplore.ieee.org/document/4269947) provides an overview of the state of the art of MLV. MLV as a specific exploratory visualization technique is constantly evolving for visualization and visual analytics, and its application in other domains is gaining popularity over the years. The user may want to explore complex data to generate new insights, but their familiarity with classic visual designs (bar chart, line chart etc.) makes that goal difficult. **Introducing MLVs therefore may help them perceive new and insightful information from their data.**`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Improvise** [(Weaver, 2004)](https://ieeexplore.ieee.org/document/1382904) uses MLV to control various aspects of the visualization in a coordinated manner.`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("commongis.png").image({width:600})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[Hadlak et al. (2011)](https://ieeexplore.ieee.org/document/6065000) used MLVs to enable exploration of a selected data dimension.`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("situ.png").image({width:600})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`Based on the requirements gathered from the initial meeting with a group of EMBs, we prototyped our system with MLVs and coordinated interactions, to support interactive comparison of different models by **input, output and configurations**.

${await FileAttachment("ensemblevis_mlv.png").image({width:800})}

**Coordinations**:

**A.** We use a PCP(top left) to represent the input data of simulation parameters, brushing on the PCP triggers an update in (1)the parameter space visualization in the middle, and (2)the dimensionality reduction plot (bottom right).

**B.** Selecting one parameter configuration in the parameter space visualization (1)updates the line chart(top right) to show the overview of the selected simulation output(mean values of the 1,000 simulation runs), and (2)updates the bottom left PCP to represent the 1,000 individual simulation runs in details.

**C.** Brushing the dimensionality reduction plot (bottom right) triggers an update in the input PCP(top left), and coordinately updates others in **Coordination A**.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`EMB feedback has been positive. To the best of our knowledge, the interactions and manipulations supported by our implementation under an epidemiological setting are novel. During our discussions, we demonstrated the capability and EMBs immediately started spotting and discussing unusual patterns in the visualizations, see figure below.

The demonstration started with applying brushing on the input PCP, this enables the user to filter input parameters. The results (input simulation configurations) were shown in the matrix view below, the user then selected one specific configuration and explore the output in the line chart. 

The output of this configuration shows flat curves (see the figure below), which implies the input configuration is not trustworthy.`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("MLV-3.png").image({width:800})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`And with this particular simulation configuration, there is an unusual pattern around day 21 in the output (see the figure below). <br/>**Similar patterns were observed with several other configurations, which prompted an investigation by the EMBs.**`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("ensemble_line_chart.png").image({width:600})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`EMBs are generally familiar with visual designs such as PCP and heatmap, they were surprised by the amount of information made available by combining them.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Other than a screen sharing session from the developer during the meetings, the system is hosted live (in the form of a web application), this enables the EMBs to explore the system in real-time.<br/>
**We believe this fostered an excellent cross-disciplinary collaboration where we focus on a common objective.**`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The data size is huge (256,000,000 data points), the data processing is heavy. And given the time we had, the performance is not optimized and the projection of data may be improved with dimensionality reduction (which we briefly experimented with).<br/>
**We are currently working together with the generic team on the optimization for data processing and storage.**`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Our MLVs at the moment use a balanced representation strategy [(Hadlak et al., 2015)](https://diglib.eg.org/handle/10.2312/eurovisstar.20151109.001-020), where each view is assigned the same amount of space, regardless of the amount of data the visualization is representing. The approach worked fine at the beginning, but we quickly realized the weakness as more and more new views were being introduced.<br/>
**The strategy isn't the best choice as certain views should take priority over others, and we are currently working on allocating the limited screen space to the MLVs.**`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`* Adopt a different MLV representation strategy (other than the balanced strategy used at the moment) that shows the hierarchical (an overview+detail representation)
* The ability to compare the model output with the real-world benchmark data
* Sensitivity analysis as a next step
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Rita Borgo, Hui Fang, Elif Firat, Robert Laramee, Cagatay Turkay, Tom Torsney-Weir, Qiru Wang `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Hadlak, S., Schulz, H.-J., & Schumann, H. (2011).**<br/>
_In Situ Exploration of Large Dynamic Networks._<br/>
IEEE Transactions on Visualization and Computer Graphics, 17(12), 2334–2343.<br/>
https://doi.org/10.1109/TVCG.2011.213

**Hadlak, S., Schumann, H., & Schulz, H.-J. (2015).**<br/>
_A Survey of Multi-faceted Graph Visualization._<br/>
Eurographics Conference on Visualization (EuroVis) - STARs, 20 pages.<br/>
https://doi.org/10.2312/EUROVISSTAR.20151109

**Roberts, J. C. (2007).**<br/>
_State of the Art: Coordinated & Multiple Views in Exploratory Visualization._<br/>
Fifth International Conference on Coordinated and Multiple Views in Exploratory Visualization (CMV 2007), 61–71. <br/>
https://doi.org/10.1109/CMV.2007.20

**Weaver, C. (2004).**<br/>
_Building Highly-Coordinated Visualizations in Improvise._<br/>
IEEE Symposium on Information Visualization, 159–166.<br/>
https://doi.org/10.1109/INFVIS.2004.12
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
