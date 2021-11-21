import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom: Dynamic Data Scheduling Agents for Visualization`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/e635bbb87b89b463">https://observablehq.com/d/e635bbb87b89b463</a></pre>`;

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
There are different users interested in the dynamic characteristics of the data visualized in the generic visualization system. For example:

As a regional healthcare manager,<br/>
- I would like to see my regional data (new cases, number of ICU patients, etc) every day,<br/>

so that I can quickly keep myself up-to-date with the current situation, spot anomalies, and trends and do planning appropriately.

As a modeling scientist,<br/>
- I would like to monitor my model predictions (e.g, number of COVID-related deaths) against real data daily,<br/>

so that I can understand how accurate and reliable my model is, how it behaves over time.

In both examples, there is a need to prepare up-to-date data for the systems over time. There is also a need to run computations over the dynamic data such as calculating performance metrics for the models.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
**NOTE**: This section is identical between all idioms in the generic team.

The idiom does not impose any restrictions on the data types. There are a variety of data types used in the generic visualization system including multivariate time series, cumulative time series, and matrix. The data comes from different sources such as the SCRC data platform, Public Health Scotland, Our World in Data, and the Office for National Statistics. Some examples include:
- [Weekly COVID-19 related deaths in different settings](https://statistics.gov.scot/resource?uri=http%3A%2F%2Fstatistics.gov.scot%2Fdata%2Fdeaths-involving-coronavirus-covid-19)
- [Cumulative Number of Cases Tested Positive for COVID-19 in NHS Ayrshire & Arran](https://statistics.gov.scot/slice?dataset=http%3A%2F%2Fstatistics.gov.scot%2Fdata%2Fcoronavirus-covid-19-management-information&http%3A%2F%2Fstatistics.gov.scot%2Fdef%2Fdimension%2Fvariable=http%3A%2F%2Fstatistics.gov.scot%2Fdef%2Fconcept%2Fvariable%2Ftesting-cumulative-people-tested-for-covid-19-positive)
- Correlation of ICU patients between different NHS health boards in Scotland (derived from raw data)

It is currently being expanded to support visualizations of geographical and network data as well.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### Updating dynamic data for visualization

Rheingans (2003, CGA) outlined the challenges of visualizing dynamic data. Forbes et al. (2010, TVCG) described a software framework for enabling the implementation of dynamic data visualization. However, the framework is not publicly available. We used software agents to enable the automatic updating of dynamic data streams as well as the application of analytical algorithms to these data streams. A software agent is a program that runs independently from the main system, receives its own inputs and acts upon them: Jennings (2000, Artificial Intelligent). Technically, we implemented several scheduled jobs that run periodically (e.g., daily) to fetch data and compute required analytical measurements. All our agent software is available open-source.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Research in dynamic data visualization has different angles. Rheingans (2003, CGA)  focused on making interaction dynamic or updating the visualization as soon as the user interacts with the visual representation (e.g., during mouse movement rather than mouse leave). Others focused on depicting relationships between entities that can change over time such as Cakmak (2021, TVCG). Fekete (2016) proposed a computation paradigm for analysis of big data and computationally expensive analysis. Turkay (2016) discussed design of a progressive high-dimensional data analysis system. We focused on the dynamic characteristic of the data itself, i.e., ensuring the underlying data input is up to date over time. We use software agents to update data automatically as reviewed in Jennings (2000, Artificial Intelligent).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Many COVID-related daily charts maitain their data up to date:
- https://www.worldometers.info/coronavirus/country/uk/
- https://ourworldindata.org/covid-vaccinations?country=GBR
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Data used in the generic visualization system comes from different sources including SCRC data platform, Public Health Scotland, Our World in Data, and the Office for National Statistics. Each source is assumed to update its data periodically. In order to keep our visualizations to display up-to-date data, we implement a scheduler that are set to run every midnight to fetch data from those sources.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Often in VIS, a paper may deal with a single complex dataset. Although the methodology may apply to similar datasets, the software implementation may not. With COVID-19 data visualization, the software must respond to daily data updates automatically. We have not only achieved this automation, but also the automation in applying analytical algorithms to generate derived data for analytical visualization.    
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked
The upstream data is updated frequently, mainly on a daily basis. During the COVID pandemic, it is essential for the policy makers and the public to have an up-to-date view of the progress of the pandemic. As the number of data streams that needs to be visualised is large and the data also comes from different sources, manually updating them to thousands of visualisation are not feasible with limited resources. Our scheduling agents automate this data download process.

Many visualisations make use of derived data which might be computationally expensive. To reduce the latency of the visualisations, we also implement a scheduling agent to do these computations once new data comes.

In the early stage of the voluntary project when the data infrastructure wasn’t available to provide data, we also implemented an agent to simulate streaming data to test our visualizations. This allows the visualizations to be implemented in an agile way without completely depending on the data team.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work
It is inevitable that the agents are broken at some time due to programming bugs or server issues. It is important to have a mechanism to manage the agents, providing the ability to check their statuses or start/stop the services. We do not have an intuitive interface to manage these.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Evidence
The visualisations do display the latest data that the data servers provide.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Recommendations & Opportunities
Automation streamlines the notorious and manual processes. Using scheduling agents for repetitive tasks such as downloading data is recommended. Also, we need to have a good overview of the status of all the agents and a clear error logging to make the agents robust and able to respond to the issues quickly`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.5 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Nguyen, Phong and Khan, Saiful and Turkay, Cagatay and Chen, Min and Reeve, Richard and the SCRC data team`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Rheingans, P. (2002).<br/>
Are we there yet? Exploring with dynamic visualization.<br/>
IEEE Computer Graphics and Applications, vol. 22, no. 1, 6-10.<br/>
https://doi.org/10.1109/38.974511 

Forbes, A., Höllerer, T., and George, L. (2010).<br/>
Behaviorism: A framework for Dynamic Data Visualization.<br/>
IEEE Transactions on Visualization and Computer Graphics, vol. 16, no. 6, 1164-1171.<br/>
https://doi.org/10.1109/tvcg.2010.126 

Cakmak, E., Schlegel, U., Jackle, D., Keim, D., Schreck, T. (2021).<br/>
Multiscale Snapshots: Visual Analysis of Temporal Summaries in Dynamic Graphs.<br/>
IEEE Transactions on Visualization and Computer Graphics, vol. 27, no. 2, 517-527.<br/>
https://doi.org/10.1109/tvcg.2020.3030398 

Jennings, N. R. (2000).<br/>On agent-based software engineering.<br/> Artificial Intelligence, vol. 117, no. 2, pp. 277–296, 2000
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
