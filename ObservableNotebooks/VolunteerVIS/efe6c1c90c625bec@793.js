import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["Q2.png",new URL("./files/8f5fad3e98fd989305b6f6f6b4940f108241fd46440f64f5f87df1b7bd46adbb7ad7a9150b66a809f986006d1495609e377337449caf6a44dd27841f75f64d28",import.meta.url)],["Q3.png",new URL("./files/439caee95e88e842923934f497e501b7173dfc889a824decbfd162890f6bec70d499002c5cabb5b00ef9b248078c7cfb9153d7fcc48dcc106a2b698b3ac3a408",import.meta.url)],["Q4.png",new URL("./files/3424c979aded79749e8fb922ebd80ec18e0c6f9ccd1f935e7ccf2e75ddf5e35553d92e90a010c60db0ba03946be6ee3f1bfd6294627385f56d11197a28ba87c4",import.meta.url)],["surveyP1.png",new URL("./files/bbcdb97cb7d1b4413d13d5b9b000328fcc0c217d8949af53a411a488aade4aa61c31b035b83443253c37c2eeabd4f97a91d4b268fc72c7b7f2802443e3433586",import.meta.url)],["surveyP2.png",new URL("./files/f9962849d1517a4021146a78e0cf9275fc48845895beb34550f6ed95d04e300bec25ea87f6addf866af09beeca78c25a3b8455b1f2b0e3dae837d2c59719a4a7",import.meta.url)],["surveyP3.png",new URL("./files/ca361b740de23ede2d1d81bc7dcfef505644a133736503cfb18142e5d2c066409179e1fcee22a23a2e050582714cbb7be65ab864783c11781231949a78434c4d",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Volunteer visualization`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/efe6c1c90c625bec">https://observablehq.com/d/efe6c1c90c625bec</a></pre>`;

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
The users initially wanted visualization only for information dissemination. Following a high-level requirement analysis, we identified that the modelling workflows can benefit from a variety of visualization and visual analytics techniques. We need many VIS scientists, researchers and developers. Hence, we concluded that we needed to call all UK VIS researchers to volunteer their time, effort, knowledge, and skills to support the SCRC. 

See also the idioms on [RAMPVIS Idiom : Four levels of visualization](https://observablehq.com/d/a9aaed2f31718620) and [RAMPVIS Idiom : Theory-guided optimisation of VA workflows (inc. modelling workflows)](https://observablehq.com/d/087e459840b2b478).

**Why does the user want to do this?**
Users need to create epidemiological models that can help understand the spreading patterns of COVID-19 and ideally help predict the future trend of spreading.

See also the idioms on [RAMPVIS Idiom : Four levels of visualization](https://observablehq.com/d/a9aaed2f31718620) and [RAMPVIS Idiom : Theory-guided optimisation of VA workflows (inc. modelling workflows)](https://observablehq.com/d/087e459840b2b478).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`In May 2020, we were informed that the SCRC was building a data infrastructure, hoping to capture a huge volume of collected and simulation data. For example, there were hundreds of data streams (updated daily) collected for the 14 regions of Scotland, and some models could generate hundreds of data streams. The SCRC also anticipated the possibility of hosting England data and Wales data, which would easily lead to thousands or tens of thousands of data streams. When including derived data (e.g., similarity measures, normalised data), there would be much more data. For most data streams, it is very difficult to state that no one would need to visualise them.

We also conducted a survey among volunteers about some non-technical aspects of their volunteering effort. For the results, see Section 7 REFLECTION.

![surveyP1.png](${await FileAttachment("surveyP1.png").url()})
![surveyP2.png](${await FileAttachment("surveyP2.png").url()})
![surveyP3.png](${await FileAttachment("surveyP3.png").url()})
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Volunteer visualization

Volunteer computing has been focused on "free" computational resources while citizen science has been focused on "free" human knowledge and effort for data annotation. RAMPVIS is perhaps the first sizeable volunteering project offering "free" development of VIS software. How does such a project compare with typical research projects (PhD, PDRA, grant, etc.)? If there were another emergency response that requires VIS support, would volunteering be a solution? Although most VIS volunteers were not looking for personal gain when they volunteered, has the RAMPVIS activity resulted in any benefit to personal research?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`T. M. Mengistu and D. Che. (2019).<br/>
Survey and Taxonomy of Volunteer Computing.<br/>
ACM Survey, 52(3):1-35.<br/>
https://doi.org/10.1145/3320073

S. Hecker, M. Haklay, A. Bowser, Z. Makuch, J. Vogel, and A. Bonn (2018).<br/>
Citizen Science: Innovation in Open Science, Society and Policy.<br/>
UCL Press.

D. Riehle, P. Riemer, C. Kolassa, and M. Schmidt (2014).<br/>
Paid vs. Volunteer Work in Open Source.<br/>
Proc. 47th Hawaii International Conference on System Sciences, 3286-3295.<br/>
https://doi.org/10.1109/HICSS.2014.407
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In the field of computer science, volunteering may be referred to people who contribute computational resources or human effort (e.g., the first two references given above). Volunteer software developers are also very common in software engineering (e.g., the third reference). 

In VIS, it is common to conduct empirical studies involving participants using the crowd-sourcing method. Although nowadays, in most crowd-sourcing experiments, participants are paid in some ways, the relatively low payment in many cases may indicate an element of volunteering effort.

The RAMPVIS operation is an example for the approach "volunteer software developers". However, the difference is that the operation involves many VIS scientists and researchers who do not necessarily fall into the category of "developers".
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[[RAMPVIS web](https://sites.google.com/view/rampvis/)]: On 14 May 2020, a lead scientist of the Scottish COVID-19 Response Consortium (SCRC, one of the RAMP teams) first e-met one UK VIS/VA scientist (who answered the RAMP's for volunteers in April) to discuss the visualization support for the modelling effort. On 15 May, a call for VIS/VA volunteers was sent to all VIS/VA academics in the UK and a number of VIS/VA researchers and developers in the industry. By the end of May, 22 VIS/VA volunteers joined the SCRC. Within two weeks, they were grouped into seven teams. There are currently 29 VIS/VA volunteers in the group. In November 2020, the RAMPVIS operation received a grant from UKRI and EPSRC to continue its R&D activities.

[MC] For the use: the idioms 3 and 4.
For further details, see arXiv 2012.0475 and https://sites.google.com/view/rampvis/
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`[Min, reflection in Nov. 2020 on the the available VIS resources in the UK for such an emergency response and on the volunteering mechanism (e.g., it is suitable for future emergence responses).]
Of course, using volunteering effort is not an ideal solution for emergency responses. Ideally the UK could utilise an existing technical and knowledge infrastructure for such an emergency response. Such an infrastructure could be there for other operations, and could already have had an advanced VIS server and a team of VIS developers who are knowledgeable about different levels of visualization tasks. To our best knowledge, the UK does not have such a technical and knowledge infrastructure. Our volunteering effort was a make-shift solution. The balance between the number of academics and that of developers among the volunteers is far from ideal, reflecting the poor investment in the area of VIS in the UK for some years.

The organisation of VIS volunteers partly reflect the needs of four levels of visualization and reflect the less ideal balance between academics and developers.

Nevertheless, the outcomes delivered by this highly unbalanced group of VIS volunteers within the past six months without any funding are unprecedented. The unselfish effort and initiatives by many volunteers are no doubt the key to the achievements.

One of the challenges in organising a volunteering effort is that we could not “demand” a minimal amount of effort from any volunteer. Because of the uncertainty about the availability of each volunteer, it would not be appropriate to organise volunteers based on academic seniority. We were aware that the lack of a seniority-based structure might make some senior colleagues uncomfortable. On balance, we had to give the priority to relying on the initiatives of those volunteers who could contribute more time and more development expertise. Some colleagues did suggest making some universities as operational units. This idea was not adopted partly because we could not ethically accept volunteers nominated by their colleagues or supervisors without a personal confirmation, partly because we needed to gather expertise according to the four levels of visualization, and partly because our initial interviews with volunteers showed that many volunteers were keen to engage with other colleagues in the UK.

Of course, as the RAMP VIS will be partly funded in 2021 and will have clearly-defined deliverables and funded developmental, academic, and administrative resources. The volunteering organisation is being transferred to a more formal and more structured organisation.


[Alfie, Ben, Saiful, Phong, Cagatay, and Min: reflection in Nov. 2020]:
Building RAMP VIS was challenging but worthwhile. It was hard in the beginning as we were unsure about the requirements and specifications, but the whole team was quick to learn and adapt in such a short time.
The dynamic of the team is good as we listen and respect each other (and we are not afraid to ask a question if we do not understand something). There was a huge learning curve of the technologies available …
The team has grown so much in terms of skills and knowledge since we first started volunteering.

[Aidan: reflection in Nov. 2020]
Reflecting on the factors that led to success in our collaboration, we think important factors were starting at such a critical time for the modellers, the short-term collaborative window that prompted devoting of concerted time over a short period at this critical time and the fact that we were focussing on model outputs rather than significant further analysis. This meant that visualisation development was somewhat in-sync with those of the model, making it possible to apply these techniques to support model development.

[Dan, Cagatay, and Kai: reflection in Nov. 2020]
What worked really well in our case was that we were lucky to work with collaborators who are keen to explore visualisation ideas and open to be challenged and surprised by the different perspectives we were able to provide. Establishing regular meetings with an open agenda where the visualisations we produced were prompts for discussion was particularly useful.
On the less positive side, the time and resource pressures from outside meant that some of the impact of the effort is limited

[Rita, Tom, Hui, Laramee, (plus Qiru, Cagatay): reflection in Nov. 2020]
One of the lessons our team learned is that with this type of emergency response persistence is key. Participants are volunteers and have a lot on their plate. Just because users, tasks, and data are unclear at the initial meetings does not mean that these will not become important later.
Being genuinely interested and asking collaborators for papers and resources is key. This not only builds mutual conversations but also supports a better understanding of the problem and domain. It is also often the case that the experts might be pointing at some of their existing “visualisations” -- this helps to build an understanding on what our collaborators understand from the word “visualisation” but also a good starting point for discussions on what is currently lacking in their visualisation capability.
Flexibility within the team was also key, we chose to reflect on members strengths to adapt our working strategy with respect to consolidated versus emerging ideas. We took the risk of allowing parallel promising directions to develop independently with or without the assurance that they may eventually converge. This was carefully considered to avoid thinning the already limited resources but at the same time to give space to individuals skills, creativity and initiative. 

### Survey
We conducted a [survey](https://forms.gle/Q33A3QzWBKTy1Hfm6) among the VIS volunteers and those who have worked closely with the VIS volunteers. For the survey result, please visit the [survey results page](https://docs.google.com/forms/d/e/1FAIpQLSfml5wgOo21oGPSu74ui9AKxPn_okY0iHK7TZz-JWtsvlfb-w/viewanalytics). Some answers are summarised below.

![Q2.png](${await FileAttachment("Q2.png").url()})

![Q3.png](${await FileAttachment("Q3.png").url()})

![Q4.png](${await FileAttachment("Q4.png").url()})
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`T. M. Mengistu and D. Che. (2019).<br/>
Survey and Taxonomy of Volunteer Computing.<br/>
ACM Survey, 52(3):1-35.<br/>
https://doi.org/10.1145/3320073

S. Hecker, M. Haklay, A. Bowser, Z. Makuch, J. Vogel, and A. Bonn (2018).<br/>
Citizen Science: Innovation in Open Science, Society and Policy.<br/>
UCL Press.

D. Riehle, P. Riemer, C. Kolassa, and M. Schmidt (2014).<br/>
Paid vs. Volunteer Work in Open Source.<br/>
Proc. 47th Hawaii International Conference on System Sciences, 3286-3295.<br/>
https://doi.org/10.1109/HICSS.2014.407`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
