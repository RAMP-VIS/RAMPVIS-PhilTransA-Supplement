import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["propagation.png",new URL("./files/aab1582be0374c069aa679ab79ab83a5c6840a40d1d9c56e439a611acf1c28b2579efdc4cd5787fa3423cf7e8ace9973bc9adb953ff29586020b4211f28e6de0",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Propagating Visual Designs`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/87a416cd4468fff0">https://observablehq.com/d/87a416cd4468fff0</a></pre>`;

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
md`
### Background

The user here is the RAMPVIS visualization infrastructure developer and manager. That manager is managing the infrastructure development, its data streams and visualizations. Whenever a new data set becomes a available, the manager needs to chose a visualization for that data set and publish the visualization on a website.

To create a mapping between data set and visualization, the manager can use an ontology (see this notebook for more information of how that ontology works: https://observablehq.com/d/596df309c41cca50).

While the process of mapping a single data set to a single visualizations is straightforward, often new data sets contain a lot of new data, e.g., for entire regions, councils making a manual mapping of, say 100 data sets to 100 visualizations challenging.

To address this problem, the team build a user interface to support semi-automatic propagation of a *mapping template* (mapping a single or multiple data sets to one visualization) to other similar data sets and visualizations. The UI also supports quality assurance over the propagation process, to ensure the propagated visual designs are appropriate and correct. This needs to be done quickly and efficiently, to make the best use of volunteer resources.

### User Story

As a **system infrastructure developer and manager**, I would like to:

  - manage the infrastructure development, its data streams and visualisations
  - streamline the process of mapping several data sets with several visualisation designs
  - ensure the quality and appropriateness of the resulting visualisations

so that I can **maintain the quality and integrity of a large portfolio of visualisations associated with a dynamically growing collection of data sets and ensure that the data resources are utilised effectively**
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
The approach is agnostic of the type and size of the data set. There are a variety of data types used in the generic visualization system including multivariate time series, cumulative time series, and matrix. The data comes from different sources such as the SCRC data platform, Public Health Scotland, Our World in Data, and the Office for National Statistics. Some examples include:
- [Weekly COVID-19 related deaths in different settings](https://statistics.gov.scot/resource?uri=http%3A%2F%2Fstatistics.gov.scot%2Fdata%2Fdeaths-involving-coronavirus-covid-19)
- [Cumulative Number of Cases Tested Positive for COVID-19 in NHS Ayrshire & Arran](https://statistics.gov.scot/slice?dataset=http%3A%2F%2Fstatistics.gov.scot%2Fdata%2Fcoronavirus-covid-19-management-information&http%3A%2F%2Fstatistics.gov.scot%2Fdef%2Fdimension%2Fvariable=http%3A%2F%2Fstatistics.gov.scot%2Fdef%2Fconcept%2Fvariable%2Ftesting-cumulative-people-tested-for-covid-19-positive)
- Correlation of ICU patients between different NHS health boards in Scotland (derived from raw data)

It is currently being expanded to support visualizations of geographical and network data as well.

*Note: This section is identical between constructs proposed by the Generic VIS team.*
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Propagating Visual Designs`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Mackinlay outlined the need for and challenge of automatic generation of visualization (Mackinlay, 1986).

We have developed a new approach to achieving this using automated propagation of existing visual designs to similar data (Khan et al., 2022).

Our novel approach uses an ontology to facilitate propagation, which provides flexibility and generalization - i.e., this approach is not inherently linked to the semantics of our data.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Mackinlay (1986) presented an early example of a tool that generates visualizations automatically. Mackinlay et al. (2007) later described _Show Me_, a tool integrated into Tableau that provides automatic views of data during the visual design workflow. Many other automatic (or semi-automatic) visualization tools have been explored in the literature, e.g., as discussed in a survey by Zhu et al. (2020).

Propagating a visual design to related sets of data can be viewed as a special class of (semi)automatic visualization. Whereas automatic visualization aims to choose the visual design ‘best suited’ to given data, the propagation approach takes an existing visual design and applies that across related data sets.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A list of web pages with visualizations, generated through our User interface, is shown here: http://vis.scrc.uk/review`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("propagation.png").image({width:800})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Our propagation workflow makes it easy to propagate visual designs to numerous datasets. Reference visualizations are created for data streams, which are associated with several keywords in our ontology. A search and activate process is used to propagate the reference visualisation to other appropriate data streams. 

1. Ontology keywords are used to construct a query in our search UI for suitable data stream combinations. 

2. Search results consist of ranked data stream combinations that match query parameters, although some results may not be suitable for propagation. 

3. A quality assurance step carried out by an expert ensures the visual design is only propagated to suitable data, resulting in **new instances of existing visualizations** applied to the selected data streams, that are immediately deployed as new web pages (Khan et al., 2022).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
This was a technical innovation that allowed us to deliver a significant number of visualizations with limited volunteer resources. There were no satisfactory technical solutions to this problem - e.g., visualization platforms like Tableau and Power BI streamline visualization development but it is costly and impractical to integrate with a large data infrastructure and to apply designs across similar (but often inconsistently structured) data sets. Our novel contribution allows this to happen in an environment where developer resources are scarce and where volunteers can only contribute limited time.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Our greatest success in applying this approach was the production of thousands of online interactive visualizations and hundreds of dashboards. Our bespoke implementation and propagation approach worked, leading to a significant set of interactive visual designs from limited volunteer developer resources. Moving forward, this will streamline the deployment of a significant number of dashboards and plot designs. We were able to use our knowledge of good visualization to reuse plots across similar data sets - e.g., after a volunteer visualization designer has implemented a 'good' stacked bar plot, it can be used numerous times for consistent and high quality visual representation.

It was interesting to see how dynamic such large-scale data projects are in a context evolving as rapidly as this pandemic. This requires a flexible and agile way to development and design, trying to make existing components reusable while tackling challenges at a high pace. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Quality assurance is a crucial part of the propagation process: hundreds of data streams have a significant number of permutations, of which only a small subset will be appropriate for a given visual design. Consider our infrastructure manager propagating a stacked bar chart with six data streams from a region of England, to all other regions of England. Providing quality assurance in this instance means reviewing and approving 335 correct data stream permutations from a much larger result set. This has the potential to be a sticking point. Our initial user interface provided this functionality, but was inefficient - our infrastructure manager had to read ontology keywords, data types, etc, and make a decision. We overcame this by optimizing our quality assurance user interface for visual scanning - keyword grouping and color-coding in the results meant the infrastructure manager could scan results and quickly decide if propagation was appropriate.

There is still a lot of manual labor involed in checking the new propagation mappings. This is both good and bad. It's good in that there is a human in the loop verifying machine decisions. It's bad because of the effort and sometimes boring work of checking these mappings. It's a good example for how machine decisions need supervision. This process worked well because our ontology was populated with high quality and consistent information (e.g., data stream keywords). If we lacked consistency and quality in our meta data, this process would not have been as successful.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Evidence

Our novel propagation approach has successfully delivered thousands of visualization web pages, by propagating a small number of visualization implementations across hundreds of data streams. For example, the figure in Section 6 (above) shows an example of a stacked bar chart visualization that was propagated across 300+ regions of England.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
We believe this to be an effective approach for generating a large number of visual designs for related sets of data, as evidenced by the significant number of plots and dashboards now available in the RAMPVIS infrastructure. Each visual design only needs to be implemented once, for the given reference data streams. By giving the designer the reference data streams, the designer does not even need to know about the complexities of the underlying data infrastructure. This is a highly effective way of managing resources and expertise in a multi-disciplinary visualization team. As such, we recommend our approach in future large-scale visualization efforts - especially when similar visualizations are needed for large collections of related data.
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
md`
**Mackinlay, J. (1986).**<br/>
_Automating the Design of Graphical Presentations of Relational Information._<br/>
ACM Transactions on Graphics,  vol. 5, no. 2, 110–141.<br/>
https://doi.org/10.1145/22949.22950 

**Mackinlay, J., Hanrahan, P., and Stolte, C. (2007).**<br/>
_Show Me: Automatic Presentation for Visual Analysis._<br/>
IEEE Transactions of Visualization and Computer Graphics, vol. 13, no. 6, 1137-1144.<br/>
https://doi.org/10.1109/TVCG.2007.70594 

**Zhu, S., Sun, G., Jiang, Q., Zha, M., Liang, R. (2020).**<br/>
_A Survey on Automatic Infographics and Visualization Recommendations._<br/>
Visual Informatics, vol. 4, issue 3, Sept, 24-40.<br/>
https://doi.org/10.1016/j.visinf.2020.07.002 

**Khan, S., Nguyen, P. H., Abdul-Rahman, A., Bach, B., Chen, M., Freeman, E., and Turkay, C. (2022).**<br/>
_Propagating Visual Designs to Numerous Plots and Dashboards._<br/>
IEEE Transactions on Visualization and Computer Graphics, 28(1), 86-95.<br/>
https://doi.org/10.1109/TVCG.2021.3114828`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
