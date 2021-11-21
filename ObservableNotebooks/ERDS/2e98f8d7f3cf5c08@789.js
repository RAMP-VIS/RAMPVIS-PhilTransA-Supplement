import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["image.png",new URL("./files/eb1ec904b76d5b8e5e9d0f1d670a1c42bdca0c3783ce218f9d3c8a3ed35192c9f06103999d53f9f2b52540ee635f75334517aeee45ec5627182fdae35eaa5a63",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Applying Design Study Methodology in an Emergency Response`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/2e98f8d7f3cf5c08">https://observablehq.com/d/2e98f8d7f3cf5c08</a></pre>`;

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
md`Our users had a contact tracing simulator but no way to visualise its output directly. The reason why they would like to visualise these networks is to better understand the effect of parameter tuning on their model and to see if it is doing what they expect.  However, current visualisation development methodologies are not as well tuned to emergency responses as they could be.  In particular, the turnaround of prototypes should needs to start before a full requirements analysis.

As visualisation designers and epidemiological modellers, we need/want/expect to: 

- design a visualization/visual analytics technique in a domain that is new to me during an emergency
- respect the time constraints of the emergency response as the pandemic evolves

 So that epidemiological modellers can use visualization effectively and efficiently to understand and develop their models
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`Temporal networks are networks where each edge has its own individual time coordinate e = (u, v, t) where a node u (a person) that infects node v (another person) at a particular time t (when the edge appears).  Edges indicate infections.  A tree encodes the reach of infections from an index case and reinfections are not allowed (a node cannot have two parents).  In our case, we have a temporal forest or a collection of trees with such edges.  The infection starts at the root of the tree and spreads to the leaves.  We have used these to visualise the progression of disease simulations without timeslices. We explored the design space with static and animated visualisations. The following is an illustration how we move from the raw text-based data to a network structure:


<img src="${await FileAttachment(
  "image.png"
).url()}" height=450/>

For each infection event, we also have meta-data that we associate with the edges:
- *location*: location labels where the infection took place, e.g., restaurant, workplace, school, etc.
- *disease state*: the state of the infecting node at the time of the infection

And for each node, we have the following meta-data:
- *age*: the age of the individual as provided in the simulation.

Simulations results here: https://github.com/ScottishCovidResponse/scrc-vis-modelling/tree/master/ContactTracing/data

Visualisations using existing tools available here: https://observablehq.com/d/43927395f6cb890c

The gap in knowledge here is an adaption of the design study methodology to emergency situations.  These situations have time constraints and do not allow for problem/collaborator selection.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Modifying DSM and DSML for an Emergency Response`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`For our emergency response, we found that the design study methodology (DSM) [6] could be used to develop our visualizations, but it required some modifications due to the nature of the emergency response (similar to the lite methodology (DSLM) [7]).  In an emergency response, the requirements of the visualisation are constantly changing and often it is difficult to do a full design study pass due to time constraints. Frequently, we found ourselves asking ”what visualisations can you do now” rather than going through all stages of the DSM methodology.

Although a full design study pass would be optimal, we found ourselves selecting existing visualisation techniques, formatting the data from the simulator, and trying those first by showing the results to our users. Then, these visualisations were refined in a way that was more akin to the design study methodology.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The original idiom would be DSM [6], a methodology to develop visualisations with end users.  In this methodology, there are precondition, core, and analysis phases.  We found that we could not undertake the precondition phases as the collaborators and problem were set beforehand.  We needed to modify the core phase, specifically discover, initially to present results with existing tools in an agile way.  Similar, but different simplifications, were made in DSLM [7].  Results of the modifications to the discover phase are presented here:  https://observablehq.com/d/43927395f6cb890c`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Design study methodology has been used extensively within the visualisation literature to design and develop effective visualisation approaches and systems, in areas ranging from investigative journalism [8], evolutionary biology [9], to cyber security [10] to name a few.

Design Study Lite Methodology is the most similar example to the methodology employed.  It has been applied widely in educational settings with many examples in [7]. Please see the full supplementary material of the paper here: https://osf.io/ynxw6/ `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The main changes to DSM [6] were an elimination of the precondition phase and a heavy modification of discover in the core phase.  For this modification of discover, we formatted the data from these simulators in such a way that it could be used by existing visualisation tools. In biweekly meetings, the results were shown for iterative feedback and then we made the necessary adjustments. As the development process progressed the division between analyst and designer blurred.

Once the problem and requirements were more established, a more traditional core phase of DSM [6] could be completed over several bi-weekly iterations. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.0 Reflective Discussion  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`For our modified discover phase, we were able to turn around animated visualisations [1, 5, 4] of their infection maps within a week there was significant buy in. We think that our end users found value in our visualisations quickly and were able to get insights into their data

What worked really well in our case was that we were lucky to work with collaborators who are keen to explore visualisation ideas and open to be challenged and surprised by the different perspectives we were able to provide (probably why we could eliminate precondition without running into the pitfalls). Establishing regular meetings with an open agenda where the visualisations we produced were prompts for discussion was particularly useful. We found ourselves discussing deeply on the model where the model developers opening the code on a shared screen where we looked for a reason for an observed pattern in the visualisations. Cast of DSM was done implicitly and blurred in terms of strict roles.  This **diminishing of boundaries between the disciplines of the researchers** where we came together on a shared objective, i.e., understanding and modelling the pandemic as best as possible, was probably the best aspect of the collaboration. 

Many of the core phases were conducted as described, but with quick, agile cycles that lasted one or two weeks.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`There was quick progress, but as the needs of the project changed many of the visualisations were discarded and things needed to start all over again.  However, part of this is to be expected when designing for end users.

On the less positive side, the time and resource pressures from outside meant that some of the impact of the effort is limited. Our strategy was to use whatever tools that are out there and available to us since we had limited resources to develop new tools. However, we hit some cases where substantial development would be needed -- in our case, this was mostly around dissemination of different contact tracing policies to wider public through interactive/animated representations. Delivering these, in particular with the academic teaching term kicking in was a challenge. What this meant was that we were not able to deliver some of the potentially high-impact outcomes when they would make the biggest difference, i.e., when policy decisions are made. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- Quickly establish routine meetings with collaborators who are keen to explore the application of visualisation
- Identify suitable existing tools and software implementing "proven-to-work" techniques to rapidly visualise the data
- Make use of these rapid visualisations not only to gain familiarity with the problem but also to build rapport and mutual trust with the collaborators
- Look "inside" the models for intermediate/auxiliary data for deriving explanatory observations
- Aim first to embed VIS expertise in the workflow not the tools -- consider not only the visualisations or software as visualisation contribution, but visualisation researchers' expertise in thinking visually about complex problem spaces, and look for ways to embed this knowledge in the process
- Document and report discussions, decisions, visualisations, outcomes, learnings in an accessible, transparent language. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Daniel, Cagatay, Kai, Louise, Sibylle`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[1] A. Arleo, S. Miksch, and D. Archambault. A multilevel approach for event- based dynamic graph drawing. In EuroVis Short Papers, 2021.

[2] T. Baumgartl, M. Petzold, M. Wunderlich, M. Hohn, D. Archambault, M. Lieser, A. Dalpke, S. Scheithauer, M. Marschollek, V. M. Eichel, N. T. Mutters, H. Consortium, and T. V. Landesberger. In search of patient zero: Visual analytics of pathogen transmission pathways in hospitals. IEEE Transactions on Visualization and Computer Graphics, 27(2):711–721, 2021.

[3] E. R. Gansner, Y. Hu, and S. G. Kobourov. Gmap: Drawing graphs as maps. In D. Eppstein and E. R. Gansner, editors, Graph Drawing, pages 405–407, Berlin, Heidelberg, 2010. Springer Berlin Heidelberg.

[4] P. Simonetto, D. Archambault, and S. Kobourov. Drawing dynamic graphs without timeslices. In International Symposium on Graph Drawing and Net- work Visualization, pages 394–409. Springer, 2017.
3

[5] P. Simonetto, D. Archambault, and S. Kobourov. Event-based dynamic graph visualisation. IEEE Transactions on Visualization and Computer Graphics, 26(7):2373–2386, 2020.

[6] M. Sedlmair, M. Meyer and T. Munzner, "Design Study Methodology: Reflections from the Trenches and the Stacks," in IEEE Transactions on Visualization and Computer Graphics, vol. 18, no. 12, pp. 2431-2440, Dec. 2012, doi: 10.1109/TVCG.2012.213.

[7] Uzma Haque Syeda, Prasanth Murali, Lisa Roe, Becca Berkey, and Michelle A. Borkin. 2020. Design Study "Lite" Methodology: Expediting Design Studies and Enabling the Synergy of Visualization Pedagogy and Social Good. Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, 1–13. DOI:https://doi.org/10.1145/3313831.3376829

[8] Brehmer, M., Ingram, S., Stray, J. and Munzner, T., 2014. Overview: The design, adoption, and analysis of a visual document mining tool for investigative journalists. IEEE transactions on visualization and computer graphics, 20(12), pp.2271-2280.

[9] Rogers, J., Patton, A.H., Harmon, L., Lex, A. and Meyer, M., 2020. Insights From Experiments With Rigor in an EvoBio Design Study. IEEE Transactions on Visualization and Computer Graphics, 27(2), pp.1106-1116.

[10] Nguyen, P.H., Turkay, C., Andrienko, G., Andrienko, N., Thonnard, O. and Zouaoui, J., 2018. Understanding user behaviour through action sequences: from the usual to the unusual. IEEE transactions on visualization and computer graphics, 25(9), pp.2838-2852.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
