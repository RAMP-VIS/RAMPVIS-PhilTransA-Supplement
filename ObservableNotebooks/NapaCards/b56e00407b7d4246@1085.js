import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["Slide10.png",new URL("./files/fcbdb2aa0d070114065785f6bc0a9536bb5d95cba4ade8c3c9c22b62bac16788d93bc27b6de4a4605742acf46b54c1ba0667fbb7cf83b168316653f28f7496fb",import.meta.url)],["Slide12.png",new URL("./files/d2c44e7ff648a743d4c6f0ab790e096445cfb93f8612c7d9f45f475e335c8682b03b7d2ba1decc3826d4d059c027810fdfef57e23ba3c11baf84621e14a1eba9",import.meta.url)],["Slide11@1.png",new URL("./files/1e22b9aacf36850ef8c05c587a09f981acfbd9921ecac89728d04ad8948e4c0610c19d49629a23380078a8fc4caad6a718037c12dc49d1d671959eaaebd90ccf",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Narrative Design Patterns`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@ritsosp/rampvis-idioms-narrative-design-patterns">https://observablehq.com/@ritsosp/rampvis-idioms-narrative-design-patterns</a></pre>`;

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
md`* As a **member of the public**
* I would like to:
  - **read stories that describe how the pandemic unfolds in my area / when compared to the nation / when compared to another location**
* so that I can make **informed decisions about my travels, and day to day choices with regards to infection levels etc.** 
  

----

**Note 1:** This is shared with some of the other idioms from the disseminative visualisation team

**Note 2:** 
The initial brief of who disseminative visualisation is for was:
* To communicate information about the pandemic and the RAMPVIS modelling activities to the public 
  * to complement existing dashboards and governmental information 
  * to present specific activities and data, from the RAMPVIS activities
  * to achieve higher levels of engagement with the public, compared to conventional visualisation interfaces (e.g., governmental information)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Preliminary outputs did not use data, but were based on the basic SEIRD Infection model, and the use of metaphors to explain what is *modelling*. Early infographics used data from the Modelling Team Supporting 1-km2 Spatial Simulation (see [their Observable](https://observablehq.com/d/faee29b462a0353b)). Future data-driven stories, developed following the same approach will use post-code look-up data such as [these](https://osdatahub.os.uk/downloads/open/CodePointOpen), along with data outputs from the other RAMPVIS teams. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*Narrative Design Patterns* for data-driven storytelling, such as those identified by NAPA cards ([Bach et al. 2018](https://doi.org/10.1201/9781315281575)), are popular techniques for presenting data-driven information in a compelling and engaging way. The disseminative team used these techniques to create appropriate storytelling visualisations, for presenting information about the pandemic to the public. 

In particular, in the outputs created by the disseminative visualisation team, the narrative patterns employed, were the 'familiar setting' and 'gradual visual reveal' as denoted in [NAPA Cards](http://napa-cards.net/). 

Especially the concept of familiar setting was employed through the use of familiar metaphors, such as football and weather predictions to explain modelling. Our approach was based on the assumption that explaining predictive modelling through a narrative familiar to most, such as being informed of tomorrow's weather from the weather forecast, or predicting the score of your football team's Sunday game, would be a good approach. For the weather forecast, modelling of the environment is used to make predictions which, for many individuals, are used to make basic decision making (do I take an umbrella, what do I wear tomorrow etc.). For football fans, predicting their team's next result is often a combination of their team's and opponent's line-up, previous performances etc. (i.e., variables used to predict an outcome, albeit without -- usually -- any mathematical modelling to support this). However, there were a number of issues with this strategy (see Section 7). 

On a secondary level, the 'gradual reveal' was used to pace the story and control the sequence of perception of the story elements, and allow emphasis on important parts of the narrative (e.g., where animations explain long term or short term predictions - see Section 6).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Narrative patterns are techniques, or "tricks" that can be applied to, for example, engage the audience, evoke empathy, or create flow and rhythm in a data-driven story, in order to engage with the readers/viewers [Bach et al. 2018](https://doi.org/10.1201/9781315281575). These patterns can create an element of empathy, enhance the messages and provide a level of contextualisation. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Examples of NAPA cards can be found at [http://napa-cards.net/](http://napa-cards.net/). In our work we used mainly the 'gradual visual reveal' and 'familiar setting' which have been applied in a similar manner in informational content for the pandemic. An example of 'gradual visual reveal' can be found in videos from the World Health Organisation (WHO), such as [this](https://www.youtube.com/watch?v=i0ZabxXmH4Y). In this example, information about the Coronavirus, its implications and how it leads to COVID-19 are unfolding gradually, to make the material easier to comprehend. The voice-over narration assists this process. Interestingly, the use of Pictograms, described [here](https://observablehq.com/@ritsosp/rampvis-idioms-pictograms), is also evident.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Likewise, the use of the 'familiar setting' narrative pattern can be observed in other [informational content from WHO](https://www.youtube.com/watch?v=quNi23GQ89c). In the linked example, sequences depicting humans interacting in supermarkets, classrooms and workspaces provide a narrative that related to everyday locations and activities. Similar approach is taken in map-based visualisations which depict familiar locations (country, health-boards etc) to make the information personally relatable.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Combinations of, these techniques, were used in a variety of outputs, such as videos and infographics created by the disseminative vis team (displayed below). These screenshots show frames from one of the videos created using the football results prediction metaphor to provide a 'familiar setting', in order to explain modelling predictions.`
)});
  main.variable(observer()).define(["FileAttachment","htl"], async function(FileAttachment,htl){return(
htl.html`<img src="${await FileAttachment("Slide10.png").url()}" style="height: 300px"/>`
)});
  main.variable(observer()).define(["FileAttachment","htl"], async function(FileAttachment,htl){return(
htl.html`<img src="${await FileAttachment("Slide11@1.png").url()}" style="height: 300px"/>`
)});
  main.variable(observer()).define(["FileAttachment","htl"], async function(FileAttachment,htl){return(
htl.html`<img src="${await FileAttachment("Slide12.png").url()}" style="height: 300px"/>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Although these are established techniques in storytelling, there are specific challenges related to the nature of the information presented in RAMPVIS. The team's initial efforts to develop different narratives were based on the use of the Five-design sheets methodology ([Roberts et al.](http://dx.doi.org/10.1109/TVCG.2015.2467271)). The developed stories, using techniques influenced by the aforementioned narrative patterns, were discussed and, more importantly, ideas which could be developed further, but were dependent on data from other teams, were retained and put aside for future use.

In addition, it became evident quickly, that it is important to consider from many perspectives the messages presented, as these can be miss-interpreted due to the polarising nature of the subject. For that purpose, the team was expanded with the inclusion of a Communications, Events and Marketing Manager. The Communications manager has already contributed with guidance on how the messaging should be presented (see next section).

Out of the two narrative techniques employed, gradual reveal, although not formally evaluated, is common in presenting explanatory content and for scaffolding explanations. However, it also dependent on a well-defined narrative timeframe and pace of the developing story, which can be important for the successful comprehension of the message. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`During the voluntary phase of the RAMVIS project, the team was particularly small (three visualisation researchers, and one epidemiologist). As the other teams were developing their outputs, it was not viable to rely on their progress (and their data) to develop disseminative stories. The team therefore focused on more general messages on the pandemic, such as *what is modelling and its purpose*, explanation of the *infection model* etc.

The team attempted to use metaphors, such as football result and weather prediction, to create a 'familiar setting', with a combination of 'gradual reveal' (NAPA Cards). Regarding the former, after discussions with J. Meikle, who as Comms manager became part of the disseminative vis team, there was a fear that it trivialised the problem (by using football as a metaphor), or can be considered unreliable, as weather predictions in the UK often are. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Recommendations
* Messaging from any narrative needs to have input from public policy experts - more like an 'advertisement' less a 'vis'? It is important to consult policy communication experts. 

#### Opportunities
* Development of narrative patterns unique to the nature of the Pandemic (relationships, causality, etc.), possibly develop a stronger narrative on how visualisation can be used to communicate 'controversial' subjects such as the need/efficiency/importance-for-social-good of vaccinations etc.

#### Broader Reflection (things that sort of worked...)
The developed stories allowed us explore alternative ideas on using these narrative patterns, with an outlook to when data and outputs from the other teams became available to us. The initial (and still followed) plan was to offer some form of automated story generation, from an individual member-of-the-public point-of-view. For that, an internal mini-project was devised to facilitate this process. There were two important elements in this approach:

- Expanding the use of narrative techniques to include *familiar setting* and *gradual reveal*, along with *incorporating the audience* and placing *humans behind the dots*, as identified by Bach et al. (NAPA Cards), we have developed a egocentric approach for our data-driven storytelling interfaces. Users can select their local area and explore related data, or compare it to national, or nearby location (neighbourhoods, cities etc) profiles. This is an opportunity for building egocentric stories that offer a more personalised view to the pandemic.
- These stories are being built on Observable and use data from the other RAMPVIS teams. Observable allows us to interweave textual information, visualisations (e.g., built using D3.js, Leaflet.js or Mapbox. for maps etc.) and other media, whereas its hyperlinking mechanisms allow linking to outputs from the other teams. 

In addition, colleagues from other RAMVIS teams, Benjamin Bach and Jo Wood were assigned as collaborators of the original Disseminative Team, based on their expertise in storytelling and co-authorship of the data-driven narratives work ([Bach et al. 2018](https://doi.org/10.1201/9781315281575)). An initial storyboard from B. Bach was particularly useful for the team and the new RSE (Scott Jones) to discuss design and technical aspects of the data-driven approach.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Early infographics and videos were built by P.D. Ritsos with input from J.C. Roberts and M. Chen. For the data-driven stories which also use the Narrative Design Patterns, J. Wood and B. Bach have developed the narratives, currently built by an RSE (Scott Jones). The team was expanded by the inclusion of Julie Meikle who has been instrumental in the design of the post-funding activities and associated narrative development.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Bach, B., Stefaner, M., Boy, J., Drucker, S., Bartram, L., Wood, J., Ciuccarelli, P.,  Engelhardt, Y., Koppen, U., Tversky, B. (2018)**  
Chapter 5, in Data Driven Storytelling
Published by Taylor Francis    
ISBN: 9781315281575, https://doi.org/10.1201/9781315281575


**Roberts, J.C., Headleand, C., Ritsos, P.D. (2016)**, “Sketching Designs Using the Five Design-Sheet Methodology,” 
IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 419–428.
http://dx.doi.org/10.1109/TVCG.2015.2467271

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
