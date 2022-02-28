import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["Four-Levels.png",new URL("./files/8e2b3555deb23a800a8042e775c761f1d6f053b42b972ce1b3fc51695a3008b02a4ad49145d63f05ecb115095adb618a78a87f794b38cf66f2edd859f1cf6f2d",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Four levels of visualization`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/a9aaed2f31718620">https://observablehq.com/d/a9aaed2f31718620</a></pre>`;

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

**What does the user want to do?**
As reported in the arXiv report (2012.04757), the users initially wanted visualization only for information dissemination. Following a high-level requirement analysis, we identified that the modelling workflows can benefit from a variety of visualization and visual analytics techniques. See also the idiom [Theory-guided optimisation of VA workflows (including modelling workflows)](https://observablehq.com/d/087e459840b2b478).

**Why does the user want to do this?**
See also the question above.

As a visual analytics volunteering coordinator, I want
- to characterize and categorize modelling activity that can benefit from visualization support, and
- to deploy visualization resources effectively in ways intended to make SCRC COVID-19 response activities more efficient and effective.
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
md`**Four levels of visualization.**
We used the complexity-based scheme (a single-level taxonomy) in [Chen and Golan 2016] to categorise different support needed for epidemiological modelling workflows, and organised the VIS volunteers based on four-levels of visualization tasks.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`M. Chen and A. Golan (2016).<br/>
What May Visualization Processes Optimize?<br/>
IEEE Transactions on Visualization and Computer Graphics, 22(12):2619-2632.<br/>
http://dx.doi.org/10.1109/TVCG.2015.2513410

The four-level categorisation scheme was proposed in this paper for characterising different workflows in visualization and visual analytics.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The RAMPVIS operation evidences the need and feasibility.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`In epidemiological modelling, modelling scientists need to view various data frequently, for example, to observe captured data to appreciate the similarity and difference under different geographical, temporal, and societal conditions, to understand a model’s behaviour under different parameter settings, and to compare the performance of several models against real world data. In addition, they also need to convey the predictions of their models to policy makers or the public. As soon as we issued a call for VIS volunteers, we needed a method to divide VIS volunteers into teams to support visualization tasks in several modelling workflows in the SCRC. In the field of visualization, a number of categorisation schemes were proposed, most of which focused on relatively lower-level of tasks, such as retrieve, identify, determine, locate, filter, cluster, categorize, compare, rank, sort, correlate, and associate  [Wehrend and Lewis (1990), Zhou and Feiner (1998), Amar et al. (2005), Valiati et al. (2006)]. Because these fine-grained schemes were not suitable for team organisation, we adopted the recently-proposed categorization scheme based on four-levels of task complexity, namely disseminative, observational, analytical, and model-developmental visualization [Chen and Golan (2016)]. This allowed us to differentiate the different amounts of effort needed for requirements analysis, visual and interaction design, algorithm selection and testing, software prototyping, and engineering of deployable VIS systems, while grouping the available VIS volunteers based on their expertise appropriate for each level of tasks. These teams are:

- We were made aware of the ongoing development of the SCRC data infrastructure that were expected to store a huge volume of captured and modelling data. One urgent goal was to allow modelling scientists to view such data quickly and easily as soon as any data steams were captured, generated, or updated. **The generic support team**, which included all VIS volunteers with industrial experience, thus focused on provide a deployable VIS infrastructure quickly for the essential observational visualization [REF idiom on deployable systems]. The team completed a deployable version of the RAMPVIS server within three months and it was coupled with the SCRC data infrastructure as soon as it was alive. It was designed to provide rapid support other similar data infrastructures.
- Mathematically that the search space for optimal models in epidemiology would be highly complex and intractable. The development of VIS techniques for supporting model-development required VIS volunteers to work closely with modelling scientists to have some understanding about individual models concerned, their input, output, and parameter spaces, performance criteria, and optimisation strategies. **The four modelling support teams** were formed to engage close collaboration with modelling scientists working on model-specific visualization support.
- For analytical tasks (e.g., time series comparison and clustering) and model-developmental tasks (e.g., parameter space analysis), it is usually more effective to adopt the visual analytics approach [REF Thomas and Cook], i.e., by providing users with both data mining and data visualization tools. **One analytical support team**, where volunteers with different data mining expertise were assembled, provided other teams with data mining algorithms and visual designs to accompany such algorithms [REFs idioms by the analytical support teams].
- To avoid duplicating the mechanisms for many governmental bodies and public web sites to provide visualization-supported information dissemination, **one disseminative VIS team** focused on the techniques for storytelling visualization [REF idioms by the disseminative VIS team].

  ![Four-Levels.png](${await FileAttachment("Four-Levels.png").url()})

As illustrated in the above figure, most workflows for epidemiological modelling are expected to feature some (if not all) activities along the central axis. By organising the VIS volunteers based on the categorization of four-levels of visualization allowed us to deploy the different VIS expertise efficiently and effectives to meet the needs for different levels of visualization tasks.

For example, we were made aware of the ongoing development of the SCRC data infrastructure that were expected to store a huge volume of captured and modelling data. One urgent goal was to allow modelling scientists to view such data quickly and easily as soon as any data steams were captured, generated, or updated. We needed to provide deployable VIS systems quickly for the essential observational visualization [REF idiom on deployable systems]. At the same time, an online survey indicated a shortage of the expertise for engineering deployable VIS systems. We thus brought all those VIS volunteers with industrial experience into the generic support team, which initially focused on developing a VIS infrastructure [REF idiom VIS infrastructure] to be coupled with the SCRC data infrastructure for supporting common observational visualization tasks.

Meanwhile, as computer scientists we also understood mathematically that the search space for optimal models in epidemiology would be highly complex and intractable. The development of VIS techniques for supporting model-development required VIS volunteers to work closely with modelling scientists to have some understanding about individual models concerned, their input, output, and parameter spaces, performance criteria, and optimisation strategies. We therefore created four modelling support teams to facilitate closely model-specific collaboration between VIS volunteers and modelling scientists.

For analytical tasks (e.g., time series comparison and clustering) and model-developmental tasks (e.g., parameter space analysis), it is usually more effective to adopt the visual analytics approach [REF Thomas and Cook], i.e., by providing users with both data mining and data visualization tools. While most VIS volunteers appreciate the power of visual analytics, only a few VIS volunteers had the experience of developing data mining tools. Considering the number of subareas in data mining, we placed most VIS volunteers with data mining experience into the analytical support team, which was to provide other teams with data mining algorithms and visual designs to accompany such algorithms [REFs idioms by the analytical support teams]
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[Min, reflection in Nov. 2020 on the team organization according to four levels of visualization]
The categorization of visualization tasks based on the complexity of the search space of the possible solutions is relatively new [Chen and Golan 2016]. The method based on symptom-cause-remedy-side-effect analysis for optimising visual analytics workflows is very new [Chen and Ebert 2019]. Because I am familiar with both, naturally I used them in my thought processes. Basically, model optimisation is an NP problem in general, and it requires all three levels of visualization, observational, analytical, and model-developmental visualization, which correspond to the complexity of O(n), O(n^k), and EXPSPACE. 

It is usually much hard to identify the requirements for visualizing a high complex search space, as it requires one to understand the search space (i.e., the model space or parameter space) as well as the knowledge of domain experts and their focused strategies for optimization (i.e., tasks). Hence, having a VIS team working with each modelling team was necessary for establishing such understanding. Many teams quickly identified the observational requirements related to individual models, and are still working on the requirements for model optimisation. The pace for gathering the requirements for model optimisation is commonly slow, as evidenced in many applications, such as CFD and ML. This is partly related to the perception that VIS is only for information dissemination. So the slow progress in gathering such requirements in RAMP VIS effort is not a negative reflection about our effort.

Meanwhile, the generic support team can progress to the development stage quickly, not only because of the necessity, but also of the less complex search space. Meanwhile, we observed that the daily data in the form of spreadsheets is costly to observe. We anticipated for any model to be evaluated against captured data, observational visualization should be available with minimal processing and interaction costs. Later in a meeting between SCRC and SPI-M, it was confirmed that modelling scientists, whose models were used for advising the governmental decisions, did need to observe captured data regularly. Not observing such data regularly was a symptom for less-optimised models, and the excessive cost of observing such data in workflow was a major cause. Hence the generic support team focused on a remedy to address the cost of observational visualization.

[Alfie, Ben, Saiful, Phong, Cagatay, and Min: reflection in Nov. 2020]: Building RAMP VIS was challenging but worthwhile. It was hard in the beginning as we were unsure about the requirements and specifications, but the whole team was quick to learn and adapt in such a short time. Min was good at providing us with explanations and was able to clarify a lot of points for the team. The whole team is supportive of each other and we are quick to help each other if someone is stuck with a problem. The dynamic of the team is good as we listen and respect each other (and we are not afraid to ask a question if we do not understand something). There was a huge learning curve of the technologies available starting from our first version of the prototype of just using HTML/CSS. Then we created a mini prototype using Angular, but used plain HTML/CSS making best use of our existing knowledge, and finally improved the plain HTML/CSS using Jinja. The team has grown so much in terms of skills and knowledge since we first started volunteering.

[Cagatay, Franck, Radu, [plus Hui, Phong, Alfie]: Reflection in Nov. 2020] The analytical support team was "free" to experiment with different ideas/techniques that has been shown to work in similar problem contexts. That enabled us to work rather creatively and openly without needing too much user research and input. This was overall a good decision and important to have this kind of flexibility in the consortium. However, we hit a barrier and faced a loss of motivation as a group since we were not quite sure whether what we do has any value/relevance for the consortium. We tried to get feedback but this was not possible without a routine, established communication relationship with the modellers. Presentations of the outcomes to the whole consortium did not work as it requires time for modellers (or anyone seeing the outcomes for the first time) to understand and appreciate the potential benefits.

One challenge was that the emphasis has been so far primarily on “modelling” within the consortium. Modellers are, understandably, mostly interested in building and improving the model rather than an interest in an exploratory analysis of the data where the goal is (as we often praise in visual analytics research) to identify patterns, spot unexpected relationships, etc. There was in that respect a potential mismatch. However, during the model building process as some of us experienced within the different modelling groups, we observed that some of the generic analytical operations were routinely conducted, e.g. comparing multiple time-series which are coming from the models as forecasts, looking for areas/periods where similar patterns are observed, etc.. This gives some confidence that once the models are mature and closer to being used, modellers might indeed be interested in using the generic analytical tools that were developed in this group. It is possible that as the emphasis is moving towards “using” the models and assessing their performances in the wild, combined with an interest in making decisions based on the status-quo of the raw data, the tools from the analytical team might be more useful. So it is possible that we came here a bit too early before the tools are really needed, but it is also possible that this is only wishful thinking.

[Aidan: reflection in Nov. 2020] Reflecting on the factors that led to success in our collaboration, we think important factors were starting at such a critical time for the modellers, the short-term collaborative window that prompted devoting of concerted time over a short period at this critical time and the fact that we were focussing on model outputs rather than significant further analysis. This meant that visualisation development was somewhat in-sync with those of the model, making it possible to apply these techniques to support model development.

[Dan, Cagatay, and Kai: reflection in Nov. 2020] What worked really well in our case was that we were lucky to work with collaborators who are keen to explore visualisation ideas and open to be challenged and surprised by the different perspectives we were able to provide. Establishing regular meetings with an open agenda where the visualisations we produced were prompts for discussion was particularly useful. We found ourselves discussing deeply on the model where the model developers opening the code on a shared screen where we looked for a reason for an observed pattern in the visualisations. This diminishing of boundaries between the disciplines of the researchers where we came together on a shared objective, i.e., understanding and modelling the pandemic as best as possible, was probably the best aspect of the collaboration.

On the less positive side, the time and resource pressures from outside meant that some of the impact of the effort is limited. Our strategy was to use whatever tools that are out there and available to us since we had limited resources to develop new tools. However, we hit some cases where substantial development would be needed -- in our case, this was mostly around dissemination of different contact tracing policies to wider public through interactive/animated representations. Delivering these, in particular with the academic teaching term kicking in was a challenge. What this meant was that we were not able to deliver some of the potentially high-impact outcomes when they would make the biggest difference, i.e., when policy decisions are made. 

Some recommendations that we make in the paper:
Quickly establish routine meetings with collaborators who are keen to explore the application of visualisation
Identify suitable existing tools and software implementing "proven-to-work" techniques to rapidly visualise the data
Make use of these rapid visualisations not only to gain familiarity with the problem but also to build rapport and mutual trust with the collaborators
Look "inside" the models for intermediate/auxiliary data for deriving explanatory observations
Aim first to embed VIS expertise in the workflow not the tools -- consider not only the visualisations or software as visualisation contribution, but visualisation researchers' expertise in thinking visually about complex problem spaces, and look for ways to embed this knowledge in the process
Document and report discussions, decisions, visualisations, outcomes, learnings in an accessible, transparent language. 

[Rita, Tom, Hui, Laramee, [plus Qiru, Cagatay]: reflection in Nov. 2020]
Persistence is key
Lurking during meetings, especially initial meetings, may be beneficial. Listening is a key activity in the initial phases. Cagatay learned alot from the UQ meetings that we can now incorporate into our visualizations

One of the lessons our team learned is that with this type of emergency response persistence is key. Participants are volunteers and have a lot on their plate. Just because users, tasks, and data are unclear at the initial meetings does not mean that these will not become important later. For example, our team started meeting early in the process and the need for visualization was not clear. Modellers had other, more important, priorities, data was not yet available, and even the target users for the visualizations were not clear. Our group ended up adopting an approach summarized as hurry up and wait. When data or new target users became available our team tried to produce a new task analysis or design quickly to get feedback.

There is an order as to how to suggest ideas. Furthermore, there might be expectations about where these suggestions can come from. For example, our team offered sensitivity analysis, fitting the model to observations, and feature extraction from the output time series as possible tasks from the outset. It was only later by lurking in meetings between modellers and statistical analysis groups that now SA, feature extraction, and model fitting are desired analyses of the model. Lurking in these meetings may provide a low-stress way to get ideas for visualization tasks or users, especially when the case for visualization is not clear to those involved.

[Panos and Jonathan: reflection in Nov. 2020]
One of the observations re. Dissemination is the need for the team to be embedded in the other modeler-visualization teams. At the moment, there is a gap in understanding of what each team did, which is not easy to overcome. Our mistake was that we worked independently (granted, the mandate became clear late in the volunteering period). As the dissemination team needs to come up with something akin to the fast forwards we do on conferences (arguably, even simpler, as these are often addressed to like-minded audiences), it would be better if we are present with the other teams and document what is done from the point of view of disseimative visualization only. Sort of like a meta-visualization of a) the collaboration process, b) its motives from the modellers POV, and c) the usage of visualization to fulfill (or reveal opportunities) for b).

Team D mentions lurking during meetings, Jason highlights the need for new ways that ensure engagement. This is the essence of what we describe, only with a mindset of journaling the process, and explaining to the public (the paper already has some recommendations on what this entails - these may need to be evaluated in the future).

A general comment: The disseminative vis team would also benefit from someone that can help with the ‘political’ aspects of what to say and how to say it. At this point, any scientific information presented to the public has a consequence which often is unforeseen. For example, the efficiency of the Oxford/AstraZeneca vaccine reported at 70%/90% (regardless of scientific validity) became the talking point of the day with a number of interesting consequences (Stock price drop, silly comments about typo errors and other similar issues)
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`M. Chen and A. Golan (2016).<br/>
What May Visualization Processes Optimize?<br/>
IEEE Transactions on Visualization and Computer Graphics, 22(12):2619-2632.<br/>
http://dx.doi.org/10.1109/TVCG.2015.2513410

M. Chen and D. S. Ebert (2019).<br/>
An ontological framework for supporting the design and evaluation of visual analytics systems.<br/>
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
