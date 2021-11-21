import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Idioms relate to VIS guidelines`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/bb1d4a08de896005">https://observablehq.com/d/bb1d4a08de896005</a></pre>`;

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
The VIS community; The readers of the Phil Trans A

**What does the user want to do?**
Each idiom is a concise summary (maybe too concise sometimes) of some RAMPVIS members’ experience in relation to previous publications in the literature. Our experience
- may be a “copy” of an existing technique,
- may improve slightly an existing technique,
- may discover some shortcomings of an existing technique,
- may implement a simplified version of an existing technique,
- may make a significant modification to an existing technique,
- may result in a new novel technique because there is no suitable existing technique. 

Note that the term "technique" in the above list can be replaced by "design", "algorithm", "tool", "method", "theory", etc.

The collection of these idioms will benefit future VIS applications, especially in emergency responses as well as technical and theoretical advancements.

Readers of the Phil Trans A are interested in the background research that has influenced the RAMPVIS activities.

**Why does the user want to do this?**
See the question above and the “Description and Use” below.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The collection spreadsheet and the collected forms for detailed descriptions.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`** Idioms relate to VIS guidelines.**

Idioms collected in this paper are related to existing or potential VIS guidelines. VIS guidelines are collectively a major aspect of the VIS theoretical foundations. Using existing VIS guidelines in practice provide evidence to support or question such guidelines, while proposing new guidelines or idioms is a major step in theoretical development by suggesting new theoretical hypotheses or partial hypotheses.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A. Diehl, A. Abdul-Rahman, M. El-Assady, B. Bach, D. A. Keim, M. Chen (2018).<br/>
VisGuides: A forum for discussing visualization guidelines.<br/>
Proc. EuroVis Short Papers, 61-65.<br/>
https://doi.org/10.2312/eurovisshort.20181079

A. Diehl, E. E. Firat, T. Torsney-Weir, A. Abdul-Rahman, B. Bach, R. S. Laramee, R. Pajarola, and M. Chen (2021).<br/>
VisGuided: A Community-driven Approach for Education in Visualization.<br/>
Proc. Eurographics 2021 Education Track.<br/>
https://doi.org/10.2312/eged.20211003`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`There are over 30 idioms in this collection and each is an example. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[Chen et al, 2017, CGA] defines:
“A principle is a law or rule that must be followed and is usually expressed in a qualitative description. A guideline describes a process or a set of actions that may lead to a desired outcome or, alternatively, actions to be avoided to prevent an undesired outcome. The former usually implies a confidence in the high degree of generality and certainty of the causality concerned, whereas the latter suggests that a causal relation may be subject to specific conditions.”

In general a guideline can be defined as “A [may|should] cause B under condition C.” In this work, The condition C is “supporting epidemiological modelling during COVID-19 pandemic.” This is not explicitly stated in the idioms, but implicitly implied. In conjunction with the previous literature, one may speculate that “A [may|will] cause B” may also be true in other conditions.

Most idioms collected state only A. However, one can usually infer from the detailed descriptions that A is useful, or A causes some good outcomes.” A few idioms are more specific about B. Hence these idioms can be seen as a tentative form of guidelines. When there is a sufficient amount of experience collected in the future, one may have more confidence to state an idiom as in the form of a proper guideline. In general, a statement “A is useful” is not quite ready for a guideline, as this does not say “whether or not an alternative to A is also useful”, “whether or not A may have a negative side-effect”, or other supplementary but helpful statements.

[Chen et al, 2017, CGA] also describes the relationships between guidelines and other aspects of theoretical foundations.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[MC] It took a while for me to understand the meaning of word “idiom” used in the context of this paper. When Jason asked us to write idiom, I first thought that an idiom is a piece of cleverly worded wisdom, encoding a causal relation explicitly or implicitly. Once I saw some examples by the City colleagues, I realised that these are topics in VIS. So the collection of these topics is a concise summary of the RAMPVIS experience. Some of them may indeed lead to guidelines.

[MC] The idea of writing notebooks is at least equally important than the "idioms" themselves (if not more). In many ways, it is similar to students' lab-books or log-books. I have been coordinating a third year teamwork modules for a few years. All students are required to write lab-books or log-books. They are assessed four times throughout the module, including the final assessment worth 10% towards each student's total mark for the module. In comparison with students's lab- or log-books, the notebooks of "idioms" are not intended to be assessed.

Notebooks are also related to the Grounded Theory approach, which recommends researchers to write diaries. Unlike research diaries or students' lab-books or log-books, the notebooks are "idiom"-centred rather than person-centred. In this way, it provides an easy way to extract "idioms" or "categories" in terms of Grounded Theory approach. The collective way of writing notebooks allows many people to contribute their views and experience on a focused topic. In this way, one can collected more opinions related to a topic, as required by the grounded theory approach.

In some ways, it may seem to be against the narrow definition of grounded theory, which argues against pre-defined categories, and wants everyone to work out their categories based on raw discourse (e.g., diaries). On the other hand, it still fits well with the broad grounded theory, which argues for an iterative process for transforming raw discourses to a categorisation scheme, and eventually to a theory. If we assume that the category name, i.e., an idiom or a topic, was derived from previous iterations, collecting more data about one or many categories is exactly what both narrow and broad definitions of grounded theory argue for. The broad definition of grounded theory is currently the dominant definition in social sciences, while the narrow definition of ground theory is what typically featured in some VIS papers. We in the VIS community may need to update itself.  

In summary, the grounded theory approach is intended to transform raw discourses to theories (typically qualitative theories in the form of A causes B under the condition C). VIS guidelines are such qualitative theories. An idiom typically defines A, and a notebook for this idiom collects raw discourses. So idioms and notebooks are very much the starting point of a grounded theory workflow.

The approach of writing notebooks is scientifically sound and useful. We should encourage this. Of course, we should be careful not to impose a rigid requirement upon the VIS scientists, researchers, and developers. In the context of RAMPVIS, many are volunteers or contracted with a small number of hours. Their main tasks for software design and development are fairly demanding. In the case of the funded part of RAMPVIS, these main tasks are what they contracted to do (with public finance). 

[MC] One very nice thing about writing notebooks about idioms in the RAMPVIS project is that we did not restrict "idioms" only to "visual designs". The scope was widened to include "VA algorithms", "VIS theories", "VIS software engineering", etc. The broadening effort encourages the scientific diversity as well as the diversity of demographic factors. Among RAMPVIS volunteers, some demographic factors somehow reflect the focuses of visual designs, VA algorithms, VIS theories, and VIS software engineering and customary practices of writing discourse. Focusing only on visual designs would or could make many RAMPVIS volunteers feel unable to contribute. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A. Diehl, A. Abdul-Rahman, M. El-Assady, B. Bach, D. A. Keim, M. Chen (2018).<br/>
VisGuides: A forum for discussing visualization guidelines.<br/>
Proc. EuroVis Short Papers, 61-65.<br/>
https://doi.org/10.2312/eurovisshort.20181079

A. Diehl, E. E. Firat, T. Torsney-Weir, A. Abdul-Rahman, B. Bach, R. S. Laramee, R. Pajarola, and M. Chen (2021).<br/>
VisGuided: A Community-driven Approach for Education in Visualization.<br/>
Proc. Eurographics 2021 Education Track.<br/>
https://doi.org/10.2312/eged.20211003`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
