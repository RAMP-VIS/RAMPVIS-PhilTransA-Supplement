import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["ontology.png",new URL("./files/704ebe55625982765c2efa0e86a41ce62df2937afd92928d198301ef564dfcb7a71b397b314eec9e7786df3e1de1cf0dcdf83209e758fb781fdd0e4153d9c0bc",import.meta.url)],["ontology-deatiled-example.png",new URL("./files/087ba387912eca99b6f456e72ff7efa1f7de6020a3463e37bd48600598a963f060c28055f2d407984c082ff4d1d5c35b14527b5e97f8d58fe4c0c7dfc5b33f3a",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Ontology-Assisted Visualization`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/596df309c41cca50">https://observablehq.com/d/596df309c41cca50</a></pre>`;

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
md`### Background

In our specific context, the user is the RAMPVIS system *infrastructure developer and manager* (simply *manager* in the following) who is a volunteer developer. They manage the visualization infrastructure, its data streams, user interface, and interactive data visualizations. At any point in time, the system involves hundreds of data sets and dozens of visualizations. A visualization can be anything, e.g., from a static barchart to an interactive visualization of geotemporal or relational data (see [Section 2](https://observablehq.com/d/596df309c41cca50#cell-128)).

The manager is responsible for managing the *mapping* of data to a given visualization, and to make sure an appropriate visualization is mapped to the given data set. For example, if the data has a temporal component (e.g., a time series), they need to chose a visualization that can show this temporal component.

To support their job and make sure a visualization is appropriate for a given data set, the manager needs a **formal representation** (a formalization) of _simply spoken_ which visualization is good for which data. Without such a formal representation, the manager needs to manually chose a visualization for each data set, which quickly becomes unmanageable in highly dynamic setting, like an unfolding pandemic where new datasets are constantly made available (luckily!) which in turn drives the need for more visualizations.

### User Story

As a **system infrastructure developer and manager**, I would like to:

  - manage the mapping of data to appropriate data visualisations in an effective, scalable way
  - ensure the quality of the mappings between the data and the visualisations

so that I can **maintain the quality and integrity of a large portfolio of visualisations associated with a dynamically growing collection of data sets **`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

The approach is agnostic of the type of data and visualization. There are a variety of data types used in the generic visualization system including multivariate time series, cumulative time series, relational data, geographic data, etc. The data comes from different sources such as the SCRC data platform, Public Health Scotland, Our World in Data, and the Office for National Statistics.

Some examples include:

- [Weekly COVID-19 related deaths in different settings](https://statistics.gov.scot/resource?uri=http%3A%2F%2Fstatistics.gov.scot%2Fdata%2Fdeaths-involving-coronavirus-covid-19)
- [Cumulative Number of Cases Tested Positive for COVID-19 in NHS Ayrshire & Arran](https://statistics.gov.scot/slice?dataset=http%3A%2F%2Fstatistics.gov.scot%2Fdata%2Fcoronavirus-covid-19-management-information&http%3A%2F%2Fstatistics.gov.scot%2Fdef%2Fdimension%2Fvariable=http%3A%2F%2Fstatistics.gov.scot%2Fdef%2Fconcept%2Fvariable%2Ftesting-cumulative-people-tested-for-covid-19-positive)
- Correlation of ICU patients between different NHS health boards in Scotland (derived from raw data)
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Ontology-Assisted Visualization`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Gilson et al. (2008) suggested using ontologies for the automatic generation of visualization plots in a doctoral project.

An ontology is a formal representation of knowledge that is widely used, e.g., in Biology but also in Engineering and library science to formally describe resources, their attributes, and relationships. It can best be thought of as a huge knowledge graph.

Khan et al. (2016) extended the use of ontology for provenance visualization in an industrial doctoral project.

In RAMPVIS, we transformed the ideas in these two doctoral projects into a deployable VIS infrastructure.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Carpendale et al. (2014) reflected on the use of ontology-based visualization in biology, as a starting point for thinking about how ontologies could be used more broadly in visualization. Among their suggestions was the use of ontologies for visualization generation, with the structured relationships in the ontology helping to simplify the visual design.

Gilson et al. (2008) described a visualization approach that combined ontology mapping with probabilistic reasoning to produce new visualizations - this was exemplified by an implementation that automatically visualized music chart data.

Yu and Silva (2016) used data flow diagrams to support visualization. Whilst not an ontology, this also provides evidence that structured data representations can help generate new visualizations.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("ontology-deatiled-example.png").image({width:600})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
This is an example ontology implemented as a directed graph structure with three diffeent types of nodes: **OntoData**,  **OntoVis**, and **OntoPage**.
* An OntoPage is a **website** with attributes such as its creation data and links to data sets (OntoData) and visualizations (OntoVis)
* A **visualization** is pointing to a visualization implementation (visFunction), has a description of how to read the visualization, and a set of data types this visualization can handle. 
* Similarly, a **data set** is having a public description, as well as a set of keywords and data types to describe that data set in a machine readable format.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("ontology.png").image({width:800})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The RAMPVIS visualization propagation system uses an ontology with three key elements: (1) data streams, (2) visualization functions, and (3) web pages. Web pages are bindings (mappings) between data streams and visualization functions. This binding results in interactive web page that visualize that data using that visual design. This is implemented as a graph representation. This ontology supports the rapid creation of new visualizations because visualization functions can be paired with new data streams, resulting in new web pages without any visualization development.

The above illustration of how this system works and supports collaboration: 
1. When new data sets become available (i.e., new *data products*), a separate data manager downloads the data and identifies descriptive metadata, to be added to the ontology.
   
3. When a new visualization is needed for a data stream, the infrastructure manager either choses an existing visualization from our pool of visualizations or asks a separate visualization developer to create a new visualization, e.g., using _D3.js_. The infrastructure manager then describes the binding of the data set to a visualization: *P(V,D)*. This binding establishes a relationship between the relevant data streams and the visualization function, so that streams are passed as function arguments in the correct order. This results in an appropriate and valid visualization for the data, accessible through a web page.
   
5. Finally, the infrastructure manger can use this ontology to *propagate* this binding (i.e., the mapping between data set and visualization) to other similar data sets. To that end, the manager uses a search UI to find suitable data streams then performs quality assurance on search results. When a decision is made to propagate a visualization function to data stream(s), a propagation service operates using the ontology. Propagated visualizations are immediately published as interactive web pages. The supplementary video walks through this workflow (Khan, 2022). More information on how this propagation works can be found in the [RAMPVIS : Propagating Visual Designs](https://observablehq.com/d/87a416cd4468fff0) notebook.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`If we search the internet with the keyword ontology, we can find many papers using ontology as a conceptual framework for organizing human knowledge. However, the most exciting use of ontology is to use such knowledge to support automation in a software system. This is not easy. Gilson (2008) was a feasibility study with relatively basic software prototyping. Khan (2016) presented a prototype developed over a three-year period, which uses ontology to support file search and provenance visualization. Although the company that sponsors this development was positive about the prototype, it did not continue the development to deliver a deployable software system. The ontology used in the RAMPVIS server is the heart of the VIS infrastructure, and it was amazing that Saiful made it work so smoothly. In the generic support team meetings, we rarely discussed any issues about the ontology. It almost appears to be a simple piece of technical implementation and does not demand much effort. This impression is far from the true complexity of the ontology, not to mention all these services and agents that rely on it to work. When we wrote the propagation method as a VIS paper (Khan et al., 2022), we were talking about a nice apple without much credit to the apple tree.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
We used the ontology to semi-automatically propagate reference visual designs to hundreds of related data streams. The key success here was the time efficiency with which hundreds of visualizations and dashboards were deployed. A visualization design volunteer only needed to provide a single reference visual design to meet an end-user need; an infrastructure volunteer would then propagate this via an ontology-supported search process. This allowed volunteers to focus on their area of expertise; neither needed to know the nuances of the other side.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Implementation of ontology is a challenge. We developed our first version of the ontology using plain JSON declarative syntax. We had 5-6 VIS functions, less than 100 data sets, and we created ~100 pages. But when the dataset, VIS function, and requirement for more pages grew, we improved the implementation. We implemented a scalable version of the ontology in a database. Thereby we were able to perform complex ontology operations, search and propagation.

We implemented a simple and quick version of the ontology; it worked well for generating ~100 pages. Later on, we improved the implementation to scale and generated 10000+ plots and dashboards. This solution is now scalable enough to generate thousands of plots and dashboards semi-automatically.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Evidence`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` 
We have been able to deploy 10000+ plots and dashboards from 25 reference visualization function implementations. The ontology supported the rapid deployment of these plots and dashboards through a search-and-propagate process, with no additional development effort from the visualization designer.


The pages available at http://vis.scrc.uk
 `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
We know that our ontology-based implementation was crucial for the success of our visualization propagation approach. We started development early in the pandemic, with no idea what data would become available in the future, where it would come from, what format it would be in, etc. The pandemic was unpredictable, the needs of modeling scientists and other end users were unpredictable, the types of data we would need to visualize were unpredictable. We thus needed to be flexible, so our implementation could adapt to the pandemic response. We captured domain knowledge and semantics through keywords stored in the ontology; this means we have a clear separation between semantics and representation, which gives us this necessary flexibility.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.5 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Khan, Saiful and Nguyen, Phong H and Abdul-Rahman, Alfie and Bach, Benjamin and Chen, Min and Freeman, Euan and Cagatay, Turkay`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Gilson, O. and Silva, N. and Grant, P. W. and Chen, M. (2008).**<br/>
_From Web data to visualization via ontology mapping._<br/>
Computer Graphics Forum, 27(3), 959-966.<br/>
https://doi.org/10.1111/j.1467-8659.2008.01230.x 

**Khan, S., Kanturska, U., Waters, T., Eaton, J., Banares-Alcantara, R., and Chen, M. (2016).**<br/>
_Ontology-assisted Provenance Visualization for Supporting Enterprise Search of Engineering and Business Files._<br/>
Advanced Engineering Informatics, vol. 30, no. 2, 244-257.<br/>
https://doi.org/10.1016/j.aei.2016.04.003

**Carpendale, S., Chen, M., Evanko, D., and Gehlenborg, N., Görg, C., Hunter, L.,  Rowland, F., Storey, M.-A., and Strobelt, H. (2014).**<br/>
_Ontologies in Biological Data Visualization._<br/>
IEEE Computer Graphics and Applications, vol. 34, no. 2, 8-15.<br/>
https://doi.org/10.1109/MCG.2014.33

**Yu, B., and Silva, C. T. (2016).**<br/>
_VisFlow - Web-based Visualization Framework for Tabular Data with a Subset Flow Model._<br/>
IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, 251-260.<br/>
https://doi.org/10.1109/TVCG.2016.2598497 

**Khan, S., Nguyen, P. H., Abdul-Rahman, A., Bach, B., Chen, M., Freeman, E., and Turkay, C. (2022).**<br/>
_Propagating Visual Designs to Numerous Plots and Dashboards._<br/>
IEEE Transactions on Visualization and Computer Graphics, 28(1), 86-95.<br/>
https://doi.org/10.1109/TVCG.2021.3114828`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
