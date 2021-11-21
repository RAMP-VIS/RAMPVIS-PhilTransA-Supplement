import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : VIS needs more theoretical advances`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/ac04bb76a1ec0dd4">https://observablehq.com/d/ac04bb76a1ec0dd4</a></pre>`;

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
md`**Who is the user?**
- The Scottish COVID-19 Response Consortium (SCRC), which consists of six epidemiological modelling teams and over 100 volunteers when VIS volunteers first joined the SCRC activities. 
- The VIS volunteers.

**What does the user want to do?**
- SCRC would like VIS volunteers to provide as much VIS technology as possible and as quickly as possible in this emergency response. As most epidemiologists and modelling scientists were hugely busy and most were volunteers too, many could only provide VIS volunteers with a limited amount of time for engagement. Sometimes they had to say no to the potential collaboration.
- VIS volunteers: Use the existing theoretical advances in the literature to guide their activities in this emergency response; and to transform their experience in this emergency response to new theoretical advances through theoretical discourse and abstraction.

**Why does the user want to do this?**
- SCRC: see idioms [Volunteer visualization](https://observablehq.com/d/efe6c1c90c625bec), [Theory-guided optimisation of VA workflows (including modelling workflows)](https://observablehq.com/d/087e459840b2b478), and [Four levels of visualization](https://observablehq.com/d/a9aaed2f31718620).
- VIS volunteers: The emergency required us to make rapid decisions based on the knowledge of the community and individual VIS volunteers, limited or brief meeting time with domain experts for requirements analysis. If the knowledge of the community is well abstracted and documented as theoretical research in the field, VIS volunteers will be able to use such theoretical research in emergency responses. See also idiom [Idioms relate to VIS guidelines](https://observablehq.com/d/a9aaed2f31718620).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- SCRC: see the Data section in idioms [Volunteer visualization](https://observablehq.com/d/efe6c1c90c625bec), [Theory-guided optimisation of VA workflows (including modelling workflows)](https://observablehq.com/d/087e459840b2b478), and [Four levels of visualization](https://observablehq.com/d/a9aaed2f31718620).
- VIS volunteers: see the Data section in idiom [Idioms relate to VIS guidelines](https://observablehq.com/d/a9aaed2f31718620).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`VIS needs more theoretical advances

We used some existing theoretical research in the RAMPVIS project, including a complexity based classification scheme [Chen and Golan, TVCG 2016], and a workflow optimisation methodology [Chen and Ebert, CGF 2019]. The collecting idioms is closely related to or part of guideline development, which is one aspect of the VIS theoretical foundation [Chen, et al., CGA, 2017].
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`M. Chen, G. Grinstein, C. R. Johnson, J. Kennedy, and M. Tory (2017).<br/>
Pathways for Theoretical Advances in Visualization.<br/>
IEEE Computer Graphics and Applications, 37(4):103-112.<br/>
http://dx.doi.org/10.1109/MCG.2017.3271463`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The RAMPVIS operation evidences the need and feasibility.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In [Chen et al. 2017, CGA], they examined the roles of five aspects of the VIS theoretical foundation, namely (a) taxonomies and ontologies, (b) principles and guidelines, (c) conceptual models, (d) theoretic frameworks, and (e) quantitative laws and theoretical systems. All these aspects encompass abstract representations of a wealth of knowledge drawn from numerous applications of visualization and visual analytics. Chen et al. argued that “making significant theoretical advances will lead to significant advances in practical visualization applications.”

In the RAMPVIS activities, we have made use of several aspects of previously theoretical research, including a workflow optimisation methodology for rapid requirements analysis (see idiom [Theory-guided optimisation of VA workflows (including modelling workflows)](https://observablehq.com/d/087e459840b2b478)) and a categorisation scheme for team organisation (see idiom [Four levels of visualization](https://observablehq.com/d/a9aaed2f31718620)). Meanwhile, we also conducted organised theoretical discourse on idioms in order to transform our experience to new theoretical advances (see idiom [Idioms relate to VIS guidelines](https://observablehq.com/d/a9aaed2f31718620)).

This idiom is about an observation during the RAMPVIS operation, i.e., the lack of powerful VIS theories or the lack of use of powerful VIS theories to speed up the VIS design process. In my view, the notebook should not be only about the use of existing theories, methods, techniques, designs, software, etc., but also about the shortcomings of status quo. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[MC] There has not been any previous VIS R&D in the literature featuring an emergency similar to COVID-19 pandemic. Many VIS activities in RAMPVIS could not quite follow the existing R&D templates in non-emergency scenarios or in other applications. In such cases, ideally the RAMPVIS activities could benefit from existing theoretical advances that enable VIS volunteers to predict the users’ requirements based on a quick observation of their data, tasks, and knowledge. In many ways, reasoning and modelling the uses of VIS in a workflow (including the effectiveness of a visual design) is a similar problem as reasoning epidemiological data and modelling the spread of COVID-19. I admire the determination of the epidemiologists to tackle such a challenge relentlessly and collectively (there are some 100 modelling teams in the UK). I hope that in VIS, we have the same courage and enthusiasm for theoretical advances.  

See also idioms
[Theory-guided optimisation of VA workflows (including modelling workflows)](https://observablehq.com/d/087e459840b2b478)), [Four levels of visualization](https://observablehq.com/d/a9aaed2f31718620)), and [Idioms relate to VIS guidelines](https://observablehq.com/d/a9aaed2f31718620))  for details.

[MC] If a group of engineers needed to build a bridge in an emergency, they might consult the bridge users initially, and might have brief discussions with the users during the process. However, they would not be spending a lot of time of doing requirements analysis as VIS researchers normally do or are expected to do. The reason is that bridge building is underpinned by solid theories and engineering methodologies. The practical experience in bridge building has been systematically translated to theories and methodologies. So designers and engineers do not need to call users to have meetings constantly throughout the process, or stand beside the river asking the passers-by if they are happy so far. In VIS, many seem to be used to the status quo for requirements analysis, and many argue for more user-engagements. These may be necessary when there is no solid theory or widely accepted theory to guide the design processes. However, it should not be a status quo that we are happy about. VIS needs more theoretical advances, so we can speed up the design processes and do not need to stand by the river to seek the feedback of the passers-by as required by the current design methodologies.

[MC] During the RAMPVIS operation, there were some meaningful and helpful discussions about theoretical matters. These include:
- Why did we organise teams based on the four-levels of VIS tasks? One colleague asked whether any other country had already used such a scheme to organise their teams. Another considered the four-levels of VIS tasks as a hypothesis and asked for a proof. (Note. It is a categorisation scheme, not a hypothesis. Given a list of multivariate objects, there are usually many different categorisation schemes. It is rarely a case that one scheme would be correct and the rest would be wrong.)
- Why did we need to develop dashboards which show big numbers? This doubt was because of rigid application of wisdom "overview first and details on demand". This wisdom was mathematically proven in (Chen and Jaenicke, 2010). The phenomenon of seemingly details first in some applications was explained in (Chen et al., 2016).
- Do visual designs need to follow the hypothesised theory based on an algebraic framework? There were debates on zulip, and the RAMPVIS group also invited the author of a EuroVis 2021 paper on this topic to give a seminar. Hopefully the discussions during the seminar had convinced most RAMPVIS colleagues that this hypothesised theory was problematic as it would suggest numbers are better than visual encoding.
  
All these suggest that more theoretical advances are needed in the field of VIS.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`M. Chen, G. Grinstein, C. R. Johnson, J. Kennedy, and M. Tory (2017).<br/>
Pathways for Theoretical Advances in Visualization.<br/>
IEEE Computer Graphics and Applications, 37(4):103-112.<br/>
http://dx.doi.org/10.1109/MCG.2017.3271463

M. Chen and A. Golan (2016).<br/>
What May Visualization Processes Optimize?<br/>
IEEE Transactions on Visualization and Computer Graphics, 22(12):2619-2632.<br/>
http://dx.doi.org/10.1109/TVCG.2015.2513410

M. Chen and D. S. Ebert (2019).<br/>
An ontological framework for supporting the design and evaluation of visual analytics systems.<br/>
Computer Graphics Forum, 38(3):131-144.<br/>
http://dx.doi.org/10.1111/cgf.13677

M. Chen and H. Jaenicke (2010).<br/>
An Information-theoretic Framework for Visualization.<br/>
IEEE Transactions on Visualization and Computer Graphics, 16(6):1206-1215.<br/>
http://dx.doi.org/10.1109/TVCG.2010.132

M. Chen, M. Feixas, I. Viola, A. Bardera, H.-W. Shen, and M. Sbert (2016).<br/>
Information Theory Tools for Visualization.<br/>
A K Peters/CRC Press.<br/>
ISBN: 9781498740937 - CAT# K26715.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
