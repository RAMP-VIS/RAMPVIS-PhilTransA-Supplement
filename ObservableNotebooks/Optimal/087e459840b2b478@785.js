import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Theory-guided optimisation of VA workflows (inc. modelling workflows)`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/087e459840b2b478">https://observablehq.com/d/087e459840b2b478</a></pre>`;

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
The Scottish COVID-19 Response Consortium (SCRC), which consists of six epidemiological modelling teams and over 100 volunteers when VIS volunteers first joined the SCRC activities.
What does the user want to do?
As reported in the arXiv report (2012.04757), the users initially wanted visualization only for information dissemination. Following a high-level requirement analysis, we identified that the modelling workflows can benefit from a variety of visualization and visual analytics techniques. See also idiom 4. 

**Why does the user want to do this?**
See the question above.

[JD]
- US1: As a visual analytics tool designer
I want to understand and optimize the workflows of modelling scientists 
To make their their SCRC COVID-19 response activities more efficient and effective 

[JD] Having read on (Description and Use), I think this may be more accurate ... 
- US2: As a visual analytics volunteering coordinator
I want to understand and optimize the workflows of modelling scientists 
To develop a strategy to use visualization in making SCRC COVID-19 response activities more efficient and effective
@MC - I think you used the model, and your experience, to communicate with Richard and come up with a solution in discussion with him. What do you think?

[MC] Thank you @JD. Yes, we can write a user story. Richard is great. He agreed with my assessment about their workflows in our first meeting. Or at least, if he had doubts, he was willing to give a go. Richard is a great open-minded scientist.

[JD] @MC - your comments suggest that I am wrong about this, here’s another effort - but perhaps if you could nail this it would be more accurate and efficient! 
- US3: As a visual analytics volunteering coordinator
I want to understand the broad applicability of visualization in modelling workflows and communicate this persuasively to modelling scientists 
To develop a strategy to use visualization in making SCRC COVID-19 response activities more efficient and effective

[MC] @JD - The overall methodology is detailed in [Chen and Ebert]. The detailed process is similar to observing symptoms and reasoning causes and remedies in medicine. When a modelling workflow uses VIS only for external dissemination, the "diet" is not balanced. This is rather common as (i) most modelling and simulation teams are not supported by VIS researchers and developers, and (ii) many (including some VIS colleagues) have not valued the use of VIS beyond dissemination. So "poor diet" is a common phenomenon and easy to diagnose. As soon as I noticed that the modelling workflows do not have enough observational visualization, alarm bell rings. It is relatively low cost and low risk to prescribe observational visualization. There are no doubt needs for analytical visualization and model-developmental visualization (see [https://observablehq.com/d/a9aaed2f31718620]), but they are more costly and model-specific remedies and need to be deployed carefully. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The SCRC data infrastructure was designed to host a huge amount of data. While many modelling datasets were not available on the SCRC infrastructure, each modelling support team would try to develop a prototype for visualizing such data. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Theory-guided optimisation of VA workflows (including modelling workflows).

In addition to discussions with domain experts, we outlined the high-level requirements for supporting epidemiological modelling based on the theoretical discourse on workflows and the example modelling workflows in [Chen and Golan 2016] as well as numerous past papers on VIS4CFD and VIS4ML. We used the methodology for optimising VA workflows [Chen and Ebert 2019] to identify different VA supports that could be used to improve the existing workflows of the modelling scientists.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`M. Chen and D. S. Ebert (2019).<br/>
An ontological framework for supporting the design and evaluation of visual analytics systems.<br/>
Computer Graphics Forum, 38(3):131-144.<br/>
http://dx.doi.org/10.1111/cgf.13677

This can be applied to any visual analytics workflows, including moddeling workflows. In the Chen and Ebert paper, there were three examples, two VA workflows and one visual design problem (i.e., for a VA workflow focusing largely on visualization). `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Among a wide range of VIS applications, CFD and ML are two areas where VIS has been used extensively to aid the modelling process. The workflow of CFD and ML modelling feature multiple iterations for model improvement. VIS has been used to observe and analyse input data and output data as well as interim results, internal parameters, internal data flow, etc. There are several surveys about different VIS techniques for CFD, and Sacha et al. (2019, TVCG) constructed an ontology showing many stages of an ML workflow can benefit from VIS.

The workflow of modelling the spread of COVID-19 also has to handle input data, output data, interim results, internal parameters, and internal data flow. However, CFD and ML modelling usually have a much lower urgency and slower pace for improvement than COVID-19 modelling. In both cases, a model improvement cycle typically takes weeks or months, while the input data or the phenomenon data to be modelled does not change much for a very long period. However, in the COVID-19 situation, the input data changes daily. Hence modelling improvement has a moving target that may change on a daily or weekly basis. So the users’ knowledge about the input data becomes dated quickly, with a knock-on effect on other types of data.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Chen and Ebert (2019) proposed a methodology for optimising a VA workflow by estimating three information-theoretical measures, AC, PD, and Cost of each process in the workflow. These processes can be machine-centric (statistics, algorithms) and human-centric (visualization and interaction). All shortcomings can be mapped to 24 abstract entities and one can search and reason about possible improvement among the 24 abstract entities. For the three case studies in [Chen and Ebert 2019], the average reasoning time after understanding the existing workflow is about 45 minutes (including writing a short report or a long email).

In the first meeting with Richard, we identified that the modellers should ideally see input, output, interim, and internal data frequently. However, without VIS, the cost is too high. So modellers do not see such data frequently (perhaps except the output data of some models). For models with complex data, modellers could see only some summary statistical measures. Hence the PD became very high. As model improvement is such a complex process (see idiom 4), high PD would imply going down a wrong path towards a better model.

The above reasoning led to the decision for establishing the generic support team that has been responsible for the development of a VIS infrastructure that can support large scale observational visualization.  

In addition, the huge amount of data would result in a high cost in visualization and interaction processes. Hence analytical algorithms will be essential for increasing AC and reducing Cost [Chen and Ebert, 2019, CGF]. Because we have a relatively small number of VIS volunteers with a strong data mining background, we decided to establish an Analytical Support team, which can collective provide “algorithms” to different modelling support teams.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[MC, reflection in Nov. 2020 on general perception of VIS as a dissemination tool] This is usually a big stumbling block during the requirement analysis in many previous projects. Domain experts often see visualization as “for informing others” rather than “for helping myself”. Richard’s response during the first meeting helped overcome this stumbling block quickly. Although the VIS volunteers have continued to encounter such perception during the period, sometimes among VIS colleagues themselves, the overall delay in requirements analysis was shortened significantly by Richard’s ability to embrace other scientific views.

[MC] Through RAMPVIS, a good number of VIS volunteers have gained the first-time experience in supporting a modelling workflow.

[MC] The cost-benefit analysis by [Chen and Golan 2016] and the qualitative methodology for VA workflow optimisation by [Chen and Ebert 2019] are both abstract descriptions, though the former is more abstract than the latter while the latter was meant to bridge the gap between theory and practice. The application of both methods will rely on the ability to relate a real world scenario (concrete entity) to a basic scenario (abstract entity) in the abstract description, and the ability to "imagine" different real world scenarios when one is given a basic scenario. Based on the theoretical analysis by [Chen and Golan 2016], one of the key element in this process is some knowledge and experience. At the moment, only a few people can comfortably use the cost-benefit analysis and the qualitative methodology for workflow optimisation because they have such knowledge and experience. It will take some time for such knowledge and experience to grow among VA researchers. Some may make effort to acquire such knowledge and experience, some may continue to look for alternative theories and methodologies that might be simpler to understand, learn, and apply, while many may likely focus on what they are used to. Only time will tell.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`M. Chen and D. S. Ebert (2019).<br/>
An ontological framework for supporting the design and evaluation of visualanalytics systems.<br/>
Computer Graphics Forum, 38(3):131-144.<br/>
http://dx.doi.org/10.1111/cgf.13677`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
