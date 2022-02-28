import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : VIS Infrastructure`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/54c8641168c013ea">https://observablehq.com/d/54c8641168c013ea</a></pre>`;

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
The VIS Infrastructure is a fundamental requirement for the successful deployment of a complex system that uses visualization techniques to extract meaningful information from large data. 

### Who is the user?
[EF] Visualization designers.
[MC] The infrastructure is for supporting the SCRC modellers.

### What does the user want to do?
[EF] Visualize significant amounts of related data - e.g., Covid-19 case rates in every NHS health board, vaccination rates by each age group in every UK council region. This can require a significant amount of work, so the user wants to simplify the visualization process by leveraging a visualization infrastructure.
[MC] The SCRC want all data related to the modelling to placed on the SCRC data infrastructure, and they would like all data be accompanied by visualization.

### Why does the user want to do this?
[EF] When producing new visualizations from scratch, designers must go through repetitive tasks (e.g., importing, updating, processing data). A key benefit of a visualization infrastructure is it can streamline these tasks. Visualization designers can focus on the appearance of their plots and dashboards, instead of the underlying data. Infrastructure does the heavy lifting so visualization designers don’t have to.
[MC] Accessing data through VIS is much quicker and easier than reading the data as numbers.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
The approach does not impose any restrictions on the data types. There are a variety of data types used in the generic visualization system including multivariate time series, cumulative time series, and matrix. The data comes from different sources such as the SCRC data platform, Public Health Scotland, Our World in Data, and the Office for National Statistics. Some examples include:
- Weekly COVID-19 related deaths in different settings
- Cumulative Number of Cases Tested Positive for COVID-19 in NHS Ayrshire & Arran
- Correlation of ICU patients between different NHS health boards in Scotland

It is currently being expanded to support visualizations of geographical and network data as well.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. VIS Infrastructure`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### VIS Infrastructure

The VIS Infrastructure provides the foundation on which the application can be built.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In the days of e-Science, we identified the need for visualization infrastructures in supporting many applications featuring large volumes of data and computer modeling and simulation (Brodlie et al., 2005).

The vision proposed at this time was a five-level deployment model for visual supercomputing: 
  
1. Basic;
2. Managed; 
3. Predictive;
4. Adaptive;
5. Autonomic.
  
However, this vision was never given any priority and full implementation of these ideas for visualization systems had not been produced by the start of the pandemic.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The RAMPVIS infrastructure is a major example of a VIS infrastructure that features a fair amount of automation as the 2004 survey suggested.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
[EF] We implemented an ontology-based visualization infrastructure. Visualization designers are given a template for implementing a new plot or dashboard design; when implementation is complete, this is pushed to a code repository. Our infrastructure can then propagate this plot/dashboard design to numerous other data streams semi-automatically, without any additional effort from the visualization designer.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.0 Reflective Discussion  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
[NJ] In addressing the needs for supporting COVID emergency responses, the RAMPVIS team has now developed a visualization infrastructure that has many features of a Level (iv) adaptive system (e.g. plots & dashboards update, bookmark service,  semi-automatic propagation (ref)). This is demonstrated by the [RAMPVIS : Developing Deployable Visualization Systems](https://observablehq.com/d/e7dc9a1ffd763d73) notebook. This involved a significant amount of work that could have been reduced if an appropriate VIS Infrastructure was available.

[MC] When we started the RAMPVIS project in June, we anticipated that we needed to support all six modeling teams in SCRC, and some models would generate a huge amount of data. After a survey and a series of meetings with individual volunteers, we gathered all five VIS researchers with D3.js experience into a team to develop a generic software system for supporting all six teams. One researcher did not manage to continue volunteering. The four remaining researchers started to examine a number of options. After considering some options that would require a fair amount of learning, the team decided to have an architecture that the VIS developers require a minimal amount of learning as long as they knew D3.js. This suited the unstable setting of volunteer visualization.

To bring all data and visualization software (referred to as VIS functions) together, we built an ontology as the heart of the architecture (see the [RAMPVIS : Ontology-Assisted Visualization](https://observablehq.com/d/596df309c41cca50) notebook) and defined a template-based programming approach to enable more flexible connection from data to plots. This later became the propagation method described in the [RAMPVIS : Propagating Visual Designs](https://observablehq.com/d/87a416cd4468fff0) notebook.
While Alfie and Ben were focusing on writing various plots and dashboards, Saiful was focusing on architecture design and implementation. Phong helped with the development of some plots and dashboards as well as agents for supporting dynamic visualization (see [RAMPVIS : Dynamic Data Scheduling Agents for Visualization](https://observablehq.com/d/e635bbb87b89b463)).

After a few months, this architecture started to take the shape of a VIS infrastructure. I was amazed by the collaborative work of Saiful, Phong, Alfie, and Ben. As during the e-Science programme in the 2000’s, Swansea, Leeds, Manchester, and Bangor had a joint research grant (three years). Part of the project was to develop a kind of client and server system for remote rendering. The data was going through a large data infrastructure and to be rendered by distributed workload among a VIS server and a VIS client. With the technology at that time, it was really hard to deliver a piece of deployable client-server software. The four-university team eventually produced a survey on different visual supercomputing applications, and outlined the need for an infrastructural approach with the gradual development of automation [Brodlie et al. 2005, CGF].

Brodlie et al. proposed to develop such an infrastructure evolutionary through five levels: (1) Basic, (2) Managed, (3) Predictive, (4) Adaptive, and (5) Autonomic. Nigel and I had a look at the functions of the RAMPVIS architecture based on the arXiv report, we found that:

- [auto] authentication, authorisation, ... (system, level 1)
- [auto] data downloader agent (service, level 2)
- [auto] ontology-based organisation (service and information, level 2)
- [auto] search service (service and information, level 3)
- [auto] index and thumbnail agents (service and information, level 3)
- [auto] analytical agents (information, level 3)
- [auto] plots & dashboards update (adaptive, level 4)
- [semi] bookmark service (adaptive, level 4)
- [semi] semi-automatic propagation (adaptive, level 4)

To my best knowledge, there has not been any research investment into VIS infrastructure since the publication of [Brodlie et al. 2005, CGF]. RAMPVIS or the generic support team has indeed enabled a rather quick evolution from nothing to approximately level 3.5. This is partly because the software engineering technology for developing such an infrastructure is much better than 2000’s, but more importantly, this is because of the wonderful knowledge, skill, teamwork, and willingness to help combating COVID-19 of the four developers with the help of other members of the generic support team and the RAMPVIS.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
[NJ] We should not let this effort, the resultant software, and perhaps most importantly the accumulated R&D knowledge go to waste. Otherwise, we would be starting from square one again in the next emergency. The underlying infrastructure that was generated by the RAMPVIS team should be consolidated and made available for future use. There is an opportunity to extend this into the first example of a Level (v) autonomic system.

[MC] I agree with Nigel fully.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`MC, NJ, Others`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
**Brodlie, K., Brooke, J., Chen, M., Chisnall, D.,  Fewings, A., Hughes, C., John, N. W., Jones, M. W., Riding, M., and Roard, N. (2005).**<br/>
_Visual supercomputing - Technologies, Applications and Challenges._<br/>
Computer Graphics Forum, 24(2), 217-245.<br/>
https://dx.doi.org/10.1111/j.1467-8659.2005.00845.x 

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
