import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["dbiFig1.png",new URL("./files/ae52f98c2a59ee5a555e50505caf22da79c0142d5451bea59a12aac479cdbf0f8a50cb287e27e9d6be49916e59ec6f7e6ce6b9563c5da69c6c939995bc00e794",import.meta.url)],["dbiRAMPVIS.png",new URL("./files/5d963d5c32303a191c4ea5092da546db0c3c660c843dda5ba44749b00b44cdb6dc9cbaf44328122827faf5d22883d3e8b3aa3b28f0dc21256a7892a8938f28fc",import.meta.url)],["dbiSCRCzulip2020.png",new URL("./files/5ac0d6c58f19c98af03ddeb3cd3a3735ebf79a5e33139918b62eab409d4a4f2c495cef4836691d4df5a5b1d121ade79477650020b2ff5c84e03b95694a8d73a1",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Design by Immersion`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@jsndyks/rampvis-idiom-design-by-immersion">https://observablehq.com/@jsndyks/rampvis-idiom-design-by-immersion</a></pre>`;
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
md`In the role of ...
 * **visualization researcher** 

I would like to ...
 * ** engage with epidemiological modellers in ways that are unobtrusive and yet informative **

So that I can ...
 * **support the pandemic effort by rapidly ...**
   * *understanding their data challenges*
   * *identifying those that may be best addressed through visualization*
   * *designing informative visualization to do so (through an interactive process that involves feedback and iteration)*
   * *acquiring knowledge about the use of visualization in this domain*`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The _data_ upon which this reflection is based is highly qualitative.
It consists of a diverse set of notes, prototypes, data sketches, communications and memories of the experiences lived during our engagement in 2020.

Links to some of this information are provided below, but this is an incomplete selection of a wider set of interactions involving explanations, suggestions, discussion and design interventions:

 * [Simple Network Sim - Visualization](https://gicentre.github.io/scrc/docs/simpleNetworkSim-VIS/questions.html)
 * [Simple-Network-Sim - Flows](https://gicentre.github.io/scrc/)
 * [SCRC: visualization / Data Visualization Design Discourse](https://zulip.scrc.uk/#narrow/stream/17-visualisation/topic/Data.20Visualization.20Design.20Discourse/near/6453)
 * [SCRC: simple_network_sim / Visualization](https://zulip.scrc.uk/#narrow/stream/15-simple_network_sim/topic/Visualization/near/12478)
   
Much of the engagement was based around the [Simple Network Simulation](https://github.com/ScottishCovidResponse/simple_network_sim) model and discussions with the team involved.
The digital data used in developing and assessing this particular model is listed in notebooks associated with that activity:

* [RAMPVIS : Directional flow curves](https://observablehq.com/@jwolondon/rampvis_idiom_directional_flow_curves)
* [RAMPVIS : The OD Map](https://observablehq.com/@jwolondon/rampvis_idiom_odmap)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Design by Immersion

###  Opportunities for transdisciplinary visualization design and activities to support it `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Design by Immersion** describes _activities_ and _approaches_ through which problem driven visualization work can be used to do three interrelated things:

1. **enrich domain understanding** - _learn_ more about the applications domain
2. **build transdisciplinary relationships** - help researchers from different disciplines come together to _collaborate_
3. **develop visualization research contributions** - enable us to _learn_ more about visualization and develop new visualization techniques and problems to be solved.

All of this is achieved through close collaboration through which colleagues establish and explore possibilities for visualization design in applied contexts.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Design by Immersion** activity is characterized as :

* **Communal** - collaborators enter into each others’ domains;
* **Personal** - they invest in, are affected by and gain capability in other domains;
* **Active** - they get stuck in and close to the action, the opposite of passive engagement;
* **Emergent** - it results in solutions and approaches that emerge from interactions between domains; 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Twenty-three activities are suggested and variously involve **data**, **study methods**, **prototyping**, **learning** (about the applications domain), and **communication** between transdisciplinary collaborators.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Trajectories for engagement, that suggest pathways between these activities to support effective collaboration are presented as examples of "_How to Immerse Yourself_".`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A three stage process for immersion is suggested :
1. **Stage #1** - Establishing basic domain knowledge
2. **Stage #2** - Gaining domain research exposure
3. **Stage #3** - Establishing a broader domain reputation`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`However, the framework is explicitly flexible, suggesting that the activities may be adopted, adapted or used for inspiration.
This seems important in the _Rapid Assistance_ / _Emergency Response_ context, which does not feature in the 6 case studies used to develop the various constructs, or explicitly in the paper at all.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Design by Immersion** was introduced by [Hall et al (2019)](https://doi.org/10.1109/TVCG.2019.2934790) as a way of framing applied visualization research efforts and capturing some of the activities that were seen to be fruitful in terms of establishing and developing relationships across and between disciplines.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The paper draws upon activities described in existing literature and those established through reflection upon the author team's significant experience of working in a whole range of application domains.
Six case studies, that span research groups, disciplines and an impressive time-frame, are presented by the diverse set of authors in order to develop the concepts presented.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`One of our RAMPVIS colleagues, Jo Wood, is on the authorship team. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The paper pulls together many of the concepts that underpin high quality visualization design research (see below) and offers actionable guidance for activities that are likely to lead in successful collaboration and valuable research.

In doing so it emphasizes the need for close, regular and intensive collaboration in which boundaries are minimized and levels of trust are high.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Design By Immersion** was very new at the start of the SCRC collaboration, having been presented at [IEEE VIS in Vancouver in November 2019](http://ieeevis.org/year/2019/info/papers-sessions). The [Presentation given at InfoVis 2019 by Kyle Hall](https://vimeo.com/369711296) is available and introduces the ideas nicely in 12 snappy minutes of audio and slides. 
As a consequence examples, other than those given in the paper and upon which the constructs are based, are limited.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`However, key literature and concepts used in developing the **Design By Immersion** activities include a series of papers that describe this space:
 * The **Nested Model** for Visualization Design and Validation - [Munzner (2009)](https://doi.org/10.1109/TVCG.2009.111), describes 4-levels of cascading threats to visualization research validity:
  _problem characterisation_, _task and data abstraction_, _encoding and interaction design_, and _algorithm design_;
 * **Design Study Methodology** - [Sedlmair et al. (2012)](https://doi.org/10.1109/TVCG.2012.213) - a process model containing 9 stages to structure engagement and 23 pitfalls to be avoided while doing so. DSM is intended to guide visualization researchers and show the "_iterative dynamics_" of applied visualization design work
 * **Action Design Research** - [McCurdy et al. (2016)](https://doi.org/10.1145/2993901.2993916) - provides a focus on knowledge construction through the co-design of artefacts. These, and associated knowledge, are developed through Building/Intervention/Evaluation loops in which design is used to disrupt (and improve) process. Key concepts include _Reciprocal Shaping_ -- the development of designs and design ideas from complimentary sources; _Mutually Influential Roles_ -- close collaboration that causes shifts in knowledge, practice and approaches to design and problem solving as perspectives are shared and learning occurs.
 * **Risk the Drift!** - [Hinrichs et al. (2017)](http://hdl.handle.net/10023/11778) - which explores theses shifting knowledge spaces and research roles involved in design collaborations between humanities researchers and visualization designers.

These approaches were used to frame much of the SCRC engagement and have been applied and developed in numerous visualization design studies.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The digital workplace of lockdown with regular video calls, seminars and other online knowledge exchange was effective in enabling
 _Design by Immersion_. Indeed we were required to engage immersively as we sat at home, legally obliged to remain indoors, and connected, worked, analysed and designed through our screens. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In _Design by Immersion_ terminology the digital workplace and associated protocols supported our efforts to use visualization effectively, so that we could readily: 

 * #### _**D-3**_ _Analyze data collaboratively with domain experts_<br/>
  all data analysis was digital and cold be screen-shared;
 * #### _**S-1**_ _Observe domain experts practices unobtrusively in situ_<br/>
  data, discussions, demos and explanations were digital and shared;
 * #### _**S-4**_ _Attend meetings and discussions in the domain_ unobtrusively<br/>
   again, this was entirely digital and attendance was unlimited and entirely unobtrusive;
 * #### _**C-4**_ _Translate concepts and material for design team members coming from predominantly visualization or target domain backgrounds_<br/>
   we used the digital workspace to document voraciously, with _GitHub_ and _Zulip_ providing particular focii for resources, discussions and updates;
 * #### _**L-2**_ _Gain broader exposure to domain concepts beyond domain problem_<br/>
   the mass of documentation on all SCRC efforts enabled us to browse and connect to achieve this aim;
 * #### _**L-5**_ _Participate in simulations of domain work_<br/>
   the modelling was all about simulation, and the digital workspace made participation straightforward;
 * #### _**P-3**_ _Start ideating early in the design process using pre-existing domain knowledge_<br/>
   we shared knowledge and perspectives through Zoom calls and live document sharing, commenting, editing ;
 * #### _**P-4**_ _Iterate rapidly and collaboratively on designs by leveraging informal domain feedback_<br/>
   online provided huge capacity for this kind of iterative feedback and critique;
 * #### _**P-5**_ _Self-critique designs from the visualization and domain perspectives_
   as above, we requested and received feedback both in real time and asynchronously in ways that were made possible by the digital workspace and the deep commitment and focus that the pandemic generated.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We engaged in activities of each type : _**D**ata_, _**S**tudy methods_, _**P**rototyping_, _**L**earning about the domain_, and _**C**ommunicating with collaborators_.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`This was achieved through regular _Zoom_ calls, _GitHub_ commits, active discussion documents and asynchronous threaded discussion and email.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Here we see numbers of _Zulip_ posts made per day across the SCRC consortium. `
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("dbiSCRCzulip2020.png").image({ width: 600 })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Threaded discussion on _Zulip_ was the main means of communication across the project - there were no in person meetings during lockdown.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Here we have an example of the kind of interactive graphics used in our explanations and experiments with design solutions. This example is from our discussion around [Glasgow / Strathclyde travel-to-work patterns](https://gicentre.github.io/scrc/docs/flow/glasgow.html) and is typical of the kinds of asynchronous design / analysis discussion documents that formed our digital workspace.

The instructions on the right invite experimentation.
Feedback on this and other documents was provided through _Zulip_ discussion.`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<iframe width="600" height="360" src="https://www.youtube.com/embed/3jDeD36wgbw" title="Design by Immersion: Interactive Flow Map" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`All of this used _Design by Immersion_ concepts, but these were to an extent mapped _retrospectively_.
We had plenty of experience of engaging in these kinds of activities from prior collaborations and from concepts described in the papers and methodologies listed above. 
But, _Design by Immersion_ provides useful language, activities and check-points for establishing and maintaining effective collaboration and reflecting upon what has been achieved.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Our volunteering during the early stages of the COVID-19 pandemic was deeply _Communal_ and _Personal_.
Our investment of time and effort during an emergency that affected all of our lives and threatened our futures made this a deeply _Active_ experience to which all were committed. It mattered.
In a way, it was more _Personal_, intense and visceral than those proposing _Design by Immersion_ paradigm could have imagined or expected. And yet, the concepts worked pretty well in most cases.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The digitally immersive engagement helped visualization researchers to quickly develop an understanding of a series of models (data) being developed in parallel by modelling teams (users), identify questions (tasks) to which known visualization approaches might be usefully applied. We felt very connected to _data_ and _user_ and this enabled us to elicit, influence and contribute towards _tasks_. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.0 Reflective Discussion  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Collaborative analysis, discussion, design, and problem solving are key to _Design by Immersion_, which presents "_drift_" between domains as a positive outcome of an engagement.

We achieved this to an impressive degree.
  The epidemiological modellers learned concurrently about visualization possibilities and practice as visualization was applied to their data and tasks. Visualization researchers learned about the models, their characteristics and the phenomena that they represented.

Epidemiological modellers and visualization experts increased their knowledge about the problem and solution spaces to reduce knowledge gaps and develop inter-disciplinary knowledge.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Below we annotate the general Fig. 1 from the **Design by Immersion** paper to show schematically how this beneficial and effective drift occurred in our immersive engagement.`
)});
  main.variable(observer("viewof figure")).define("viewof figure", ["Inputs"], function(Inputs){return(
Inputs.radio(
  ["Original (redrawn from Hall et al., 2019)", "RAMPVIS interpretation"],
  {
    label: "Select Fig 1.",
    value: "Original (redrawn from Hall et al., 2019)"
  }
)
)});
  main.variable(observer("figure")).define("figure", ["Generators", "viewof figure"], (G, _) => G.input(_));
  main.variable(observer()).define(["figure","FileAttachment"], function(figure,FileAttachment)
{
  if (figure === "Original (redrawn from Hall et al., 2019)") {
    return FileAttachment("dbiFig1.png").image({ width: 600 });
  } else {
    return FileAttachment("dbiRAMPVIS.png").image({ width: 600 });
  }
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`The unobtrusive immersion of the digital workspace allowed us to leverage visualization research to develop solutions to meet the identified needs and opportunities by usefully applying what is known about visualization while minimising the risk of disrupting modellers in their work.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`This achieved the kind of constructive and validating
reciprocal immersion, shaping and influence ([Hall et al., 2019](https://doi.org/10.1109/TVCG.2019.2934790); [McCurdy et al., 2016](https://doi.org/10.1145/2993901.2993916)) between epidemiologists, modellers and visualization experts that is so core to effective visualization support and successful applied visualization research ([Meyer & Dykes, 2019](https://doi.org/10.1109/TVCG.2019.2934539)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Assessing these efforts, either through feedback from modellers on designs, their utility and their ongoing needs, or through fellow visualization volunteers undertaking heuristic assessments, made this an iterative process of learning and design that has parallels with _action research_ ([Sedlmair et al., 2012](https://doi.org/10.1109/TVCG.2012.213); [McCurdy et al., 2016](https://doi.org/10.1145/2993901.2993916); [Meyer & Dykes, 2019](https://doi.org/10.1109/TVCG.2019.2934539)).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Our experience felt like an intense digital immersion that required, adopted and enhanced  _Design by Immersion_ concepts.<br/>
For example ...

* We were certainly able to _enrich domain understanding_, _explore (and explain) new space_ and _build relationships_ using the digital workspace and the _Design by Immersion_ concepts were helpful in ensuring that this happened.<br/>
This enabled us to share and address data challenges. 

* We prioritised effectively, designing informative visualization that contributed to problem solving, and iterated relatively well in the digital workspace

* We were able to share images and reactions - acquiring and contributing knowledge about the use of visualization in this domain<br/>
  * **P-2** - encodings were inspired by existing visualization created by the modellers;
  * **P-5** - _self-critique_ became constructive _**co**-critique_;

* Communication opportunities were wide, continuous and sometimes verging on the overwhelming - having _everything_ on _GitHub_ was a blessing and a challenge:<br/>
 * **S-1** - _observe domain experts practices unobtrusively in situ_ - became our way of working;
 * **C-3** - _informal peer-to-peer communication_ was continuous and valuable;
 * **L-2** - _gain broader exposure to domain concepts beyond domain problem_ - everything was online, across all sub-projects;
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`_Design by Immersion_ offers a "_a high-level road map of how visualization researchers can immerse themselves in target domains_" through a series of suggested stages in an _immersion trajectory_.

In the emergency context the relatively structured, gently building immersion just didn't happen. This was a "_dive straight into rough water_" immersion, rather a gentle walk into a calm lake!  

This had an effect on our abilities to focus and document.

* Immersion trajectories are likely even more diverse than suggested in the _Design by Immersion_ paper`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Explicit requests for feedback were successful in many cases despite the chaos, but not all feedback mechanisms were equally effective.
We used _Google Forms_ to try to elicit feedback at one stage. This wasn't effective as it involved another site or application and created a barrier to participation. Our _Zulip_ discussion threads were the best place for feedback.

* Feedback needs to happen in the moment and close to the analysis that is being undertaken. It needs to be delivered in ways tha suit those providing it. Be accommodating and flexible.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Lots was happening in parallel - models were being developed as VIS capacity was being provided. This was wasteful at times, but is more than acceptable given the context. _Design by Immersion_ does not account for this particularly well. Dealing with the highly dynamic, hot and cold nature of some engagements is a challenge and design processes might address this more explicitly.

 * Things will change, but _Design by Immersion_ won't help you deal with a change in direction or emphasis during collaborative work. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Perhaps _Design in Emergency_ requires a few add-ons to _Design by Immersion_.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Design by Immersion** is an interesting framing that really draws upon and emphasizes existing approaches to applied visualization design research. It gives us some guidance and useful activities. Using these in close collaboration with others in a trans-disciplinary project seems a good way to develop knowledge, and achieve effective solutions, particularly in a digital workspace. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md` * _Design by Immersion_ and be creative in adapting technology and pathways to suit your context - even more widely than those suggested by the experiences documented in the Hall et al. (2019) paper;
 * _Notebooks_ work exceedingly well as a means of capturing design, analysis and discourse around the two - document systematically and fully, reflect on the artefacts ;
 * Be systematic in _encouraging_ and _capturing_ discourse, and in explicitly linking _discourse_ to decisions;
 * _Action Design Research_ complements _Design by Immersion_ well - use interventions to evaluate effect and re-shape problems and solutions in intense, immersive, co-design cycles;
 * In an _emergency_ you have to be cooperative, creative and flexible. Use ideas from _Design by Immersion_ to help your decision-making, but don't be constrained. Adapt your approach to the context in which you are immersed as it emerges.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The views expressed here are those of the notebook author - **Jason Dykes**.

But they have developed throughout the engagement, and the process of writing the draft paper for PTRSA, which has in itself involved collating and reading these supplementary materials.

So, all co-authors, all participants in the SCRC RAMP volunteering, and even the paper reviewers deserve some credit for shaping this notebook.  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Hall, K. W., Bradley, A. J., Hinrichs, U., Huron, S., Wood, J., Collins, C., & Carpendale, S. (2019).**<br/>
_Design by immersion: A transdisciplinary approach to problem-driven visualizations._<br/>
IEEE Transactions on Visualization and Computer Graphics, 26(1), 109-118.<br/>
https://doi.org/10.1109/TVCG.2019.2934790`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Hinrichs, U., El-Assady, M., Bradely, A. J., Forlini, S., & Collins, C. (2017).**<br/>
_Risk the drift! Stretching disciplinary boundaries through critical collaborations between the humanities and visualization._<br/>
Proceedings of the Workshop on Visualization for the Digital Humanities<br/>
https://research-repository.st-andrews.ac.uk/handle/10023/11778`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**McCurdy, N., Dykes, J., & Meyer, M. (2016).**<br/>
_Action design research and visualization design._<br/>
Proceedings of the Sixth Workshop on Beyond Time and Errors on Novel Evaluation Methods for Visualization (pp. 10-18).<br/>
https://doi.org/10.1145/2993901.2993916`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Meyer, M., & Dykes, J. (2019).**<br/>
_Criteria for rigor in visualization design study._<br/>
IEEE Transactions on Visualization and Computer Graphics, 26(1), 87-97.<br/>
https://doi.org/10.1109/TVCG.2019.2934539
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Munzner, T. (2009).**<br/>
_A nested model for visualization design and validation._<br/>
IEEE Transactions on Visualization and Computer Graphics, 15(6), 921-928.<br/>
https://doi.org/10.1109/TVCG.2009.111`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Sedlmair, M., Meyer, M., & Munzner, T. (2012).**<br/>
_Design study methodology: Reflections from the trenches and the stacks._<br/>
IEEE Transactions on Visualization and Computer Graphics, 18(12), 2431-2440.<br/>
https://doi.org/10.1109/TVCG.2012.213`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
