import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom: Developing Deployable Visualization Systems`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/e7dc9a1ffd763d73">https://observablehq.com/d/e7dc9a1ffd763d73</a></pre>`;

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
As a visualization developer,<br/>
- I want to design and deploy a visualization rapidly,<br/>

so that I am can support domain experts in accessing and assessing a range of dynamically changing data sets.

### Who are the domain experts?
The domain experts are the SCRC modeling scientists
 
### What do the domain experts want to do?
These domain experts want a VIS infrastructure that can provide visual analytics support, e.g., visualizing all data that are available on the SCRC data infrastructure in an appropriate way.

### Why do the domain experts want to do this?
There is a vast and increasing amount of data in the SCRC data infrastructure - thousands of unique data sets that are regularly updated. Manually visualizing these data sets would require a significant investment in time and effort - especially since these domain experts do not necessarily have the required programming skills to do this manually.
 `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The idiom does not impose any restrictions on the data types. There are a variety of data types used in the generic visualization system including multivariate time series, cumulative time series, and matrix. The data comes from different sources such as the SCRC data platform, Public Health Scotland, Our World in Data, and the Office for National Statistics. Some examples include:
- Weekly COVID-19 related deaths in different settings
- Cumulative Number of Cases Tested Positive for COVID-19 in NHS Ayrshire & Arran
- Correlation of ICU patients between different NHS health boards in Scotland

It is currently being expanded to support visualizations of geographical and network data as well.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### Developing Deployable Visualization Systems
Developing deployable visualization systems through a rapid and agile development approach. Typical visualization systems are developed through intense collaboration with end-users and domain experts -- gathering specifications and requirements of the proposed systems. This process takes a huge amount of time in the development life-cycle and it is time-consuming. However, in emergency response, such resources are scarce and hard to come by. In building the VIS infrastructure for visualizing the COVID-19 data, we have applied a rapid and agile approach that enabled us to develop and deploy a visualization system in a short time frame.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We applied Agile software development in our process of building RAMPVIS - Khan et al. (2022). There are many other VIS infrastructures such as:
- MatchPad by Legg et al. (2010) which was handed over to the Welsh Rugby Union (WRU);
- PoemViewer by Abdul-Rahman et al. (2013) - https://nms.kcl.ac.uk:8443/poemvis/index.html;
- ViTA by Abdul-Rahman et al. (2017) - https://nms.kcl.ac.uk/vita-vis/ ;
- VBAS in Fang et al. (2017) was handed over to the International Seismological Centre (ISC).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
- RAMPVIS http://vis.scrc.uk/ - Khan et al. (2022)
- MatchPad by Legg et al. (2010) which was handed over to the Welsh Rugby Union (WRU);
- PoemViewer by Abdul-Rahman et al. (2013) - https://nms.kcl.ac.uk:8443/poemvis/index.html;
- ViTA by Abdul-Rahman et al. (2017) - https://nms.kcl.ac.uk/vita-vis/ ;
- VBAS (Color Hospital) in Fang et al. (2017) was handed over to the International Seismological Centre (ISC).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Developing a deployable visualization system for (i) a broad range of users with different needs (e.g., SCRC modeling scientists focusing on different topics) and (ii) a varied range of data types is difficult - especially when the needs of those users and the data they are interested in changes in response to the unfolding pandemic. This meant a traditional ‘waterfall’ software development approach would not work - we could not wait for a specification or elicit detailed requirements from the users, because these would be significantly varied and it is challenging to predict future data visualization needs.

Instead, we took an agile approach to software development, aiming to produce an infrastructure for visualization rather than a bespoke system that meets a given visual analytics need. From our experience, an agile approach would be necessary to respond to future emerging visual analytics needs.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`It was amazing that the basic version of the RAMPVIS server was made to work by the end of July. The SCRC data infrastructure, which started its development 1.5 months earlier, was completed at the same time. It took Phong and Saiful two weeks to get the data connected. All worked well. In comparison with all my previous industrial and academic projects (some 10 software systems), there was the fastest development that I have ever seen. My guess is that the experience of the three VIS researchers (Saiful, Phong, and Alfie) with real-world industrial experience helped a lot. In VIS publications, including my papers, most software mentioned there were not really at a deployable stage. Developing a non-trivial deployable software system quickly is a great achievement by the VIS volunteers in the generic support team. 

Previous deployable software systems:
- MatchPad by Legg et al. (2010) which was handed over to the Welsh Rugby Union (WRU);
- PoemViewer by Abdul-Rahman et al. (2013) - https://nms.kcl.ac.uk:8443/poemvis/index.html;
- ViTA by Abdul-Rahman et al. (2017) - https://nms.kcl.ac.uk/vita-vis/ ;
- VBAS (Color Hospital) in Fang et al. (2017) was handed over to the International Seismological Centre (ISC).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The Agile approach and the quick response and communications between each team member`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`What works are the Agile approach of the project -- if we had followed the Waterfall approach, we would not have been able to produce the prototype in a short time frame.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Evidence`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We have developed the RAMPVIS website: http://vis.scrc.uk/`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The agile approach taken in the project has streamlined the development timeline, allowing functionality to be made available early in the development process. Within a few months, the generic support team had deployed the base functionality for visualizing single data streams and propagating those designs to other similar data sets. Over the following months, these capabilities were significantly advanced to create numerous plots and dashboards. This meant users could benefit from the system sooner. In contrast, traditional visualization development and deployment would expect to take longer. For example, for Poem Viewer - it was a roughly 12 months project with a full-time developer at the beginning of the project carrying out a detailed project specification and requirements and similarly for ViTA - taking between 6-9 months. We could not afford to take a similar approach in emergency response, as modeling scientists need quick access to visual analytics support and within those time scales (e.g., half a year), their needs could have changed, e.g., as new data becomes available or as the focus shifts from, e.g., case transmission to vaccination.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.5 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The Generic Support Team - Alfie Abdul-Rahman, Benjamin Bach, Min Chen, Euan Freeman, Saiful Khan, Phong H. Nguyen, Cagatay Turkey`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Legg, P. A., Chung, D. H. S., Parry, M. L., Jones, M. W., Long, R., Griffiths, I. W., and Chen, M. (2012).<br/>
MatchPad: Interactive Glyph-Based Visualization for Real-Time Sports Performance Analysis.<br/>
Computer Graphics Forum, 31, 3pt4, 1255–1264.<br/>
https://doi.org/10.1111/j.1467-8659.2012.03118.x

Abdul-Rahman, A., Lein, J., Coles, K., Maguire, E., Meyer, M., Wynne, M., Johnson, C. R., Trefethen, A., Chen, M. (2013).<br/>
Rule-based Visual Mappings - with a Case Study on Poetry Visualization.<br/>
Computer Graphics Forum, 32(3): 381-390.<br/>
https://doi.org/10.1111/cgf.12125

Abdul-Rahman, A., Roe, G., Olsen, M., Gladstone, C., Whaling, R., Cronk, N., Morrisey, R., Chen, M. (2017).<br/>
Constructive Visual Analytics for Text Similarity Detection.<br/>
Computer Graphics Forum, 36(1): 237-248.<br/>
https://doi.org/10.1111/cgf.12798 

Fang, H., Walton, S., Delahaye, E., Harris, J., Storchak, D. A., Chen, M. (2017).<br/>
Categorical Colormap Optimization with Visualization Case Studies.<br/>
IEEE Transactions on Visualization and Computer Graphics, 23(1):871-880.<br/>
http://dx.doi.org/10.1109/TVCG.2016.2599214 

Khan, S., Nguyen, P. H., Abdul-Rahman, A., Bach, B., Chen, M., Freeman, E., and Turkay, C. (2022).<br/>
Propagating Visual Designs to Numerous Plots and Dashboards.<br/>
To appear in IEEE Transactions of Visualization and Computer Graphics.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
