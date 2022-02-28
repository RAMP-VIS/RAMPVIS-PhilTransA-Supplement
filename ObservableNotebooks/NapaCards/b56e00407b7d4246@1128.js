import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["Slide10.png",new URL("./files/fcbdb2aa0d070114065785f6bc0a9536bb5d95cba4ade8c3c9c22b62bac16788d93bc27b6de4a4605742acf46b54c1ba0667fbb7cf83b168316653f28f7496fb",import.meta.url)],["Slide12.png",new URL("./files/d2c44e7ff648a743d4c6f0ab790e096445cfb93f8612c7d9f45f475e335c8682b03b7d2ba1decc3826d4d059c027810fdfef57e23ba3c11baf84621e14a1eba9",import.meta.url)],["Slide11@1.png",new URL("./files/1e22b9aacf36850ef8c05c587a09f981acfbd9921ecac89728d04ad8948e4c0610c19d49629a23380078a8fc4caad6a718037c12dc49d1d671959eaaebd90ccf",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Narrative Design Patterns`
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

**Note 1:** This is shared with some of the other RAMPVIS notebooks from the disseminative visualisation team

**Note 2:** 
The initial brief concerning the disseminative visualisation was:
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
md`Preliminary outputs did not use data, but were based on the basic SEIRD Infection model, and the use of metaphors to explain what is *modelling*.

Early infographics used data from the Modelling Team Supporting 1-km2 Spatial Simulation (see [RAMPVIS : Gridded Glyphmaps](https://observablehq.com/@aidans/rampvis-idiom-gridded-glyphmaps)).

Future data-driven stories, developed following the same approach will use post-code look-up data such as [Code-Point® Open](https://osdatahub.os.uk/downloads/open/CodePointOpen), along with data outputs from the other RAMPVIS teams. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Narrative Design Patterns`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*Narrative Design Patterns* for data-driven storytelling, such as those identified by NAPA cards ([Bach et al. 2018](https://doi.org/10.1201/9781315281575)), are popular techniques for presenting data-driven information in a compelling and engaging way. The disseminative team used these techniques to create appropriate storytelling visualisations, for presenting information about the pandemic to the public. 

In particular, in the outputs created by the disseminative visualisation team, the narrative patterns employed, were the 'familiar setting' and 'gradual visual reveal' as denoted in [NAPA Cards](http://napa-cards.net/). 

Especially the concept of familiar setting was employed through the use of metaphors relating to daily life, such as football and weather predictions, to explain modelling. Our approach was based on the assumption that explaining predictive modelling through a narrative familiar to most, such as being informed of tomorrow's weather from the weather forecast, or predicting the score of your football team's Sunday game, would be a good approach. For the weather forecast, modelling of the environment is used to make predictions which, for many individuals, are used to make basic decision making (do I take an umbrella, what do I wear tomorrow etc.). For football fans, predicting their team's next result is often a combination of their team's and opponent's line-up, previous performances etc. (i.e., variables used to predict an outcome, albeit without -- usually -- any mathematical modelling to support this). However, there were a number of issues with this strategy (see Section 7). 

On a secondary level, the 'gradual reveal' was used to pace the story and control the sequence of perception of the story elements, and allow emphasis on important parts of the narrative (e.g., where animations explain long term or short term predictions - see Section 6).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Narrative patterns are techniques, or "tricks" that can be applied to, for example, engage the audience, evoke empathy, or create flow and rhythm in a data-driven story, in order to engage with the readers/viewers [Bach et al. (2018)](https://doi.org/10.1201/9781315281575). These patterns can create an element of empathy, enhance the messages and provide a level of contextualisation. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Documented examples of NAPA cards can be found at [http://napa-cards.net/](http://napa-cards.net/).

In our work we used mainly the 'gradual visual reveal' and 'familiar setting' which have been applied in a similar manner in informational content for the pandemic. An example of 'gradual visual reveal' can be found in videos from the World Health Organisation (WHO), such as their [COVID-19 movie](https://www.youtube.com/watch?v=i0ZabxXmH4Y). In this example, information about the Coronavirus, its implications and how it leads to COVID-19 are unfolding gradually, to make the material easier to comprehend. The voice-over narration assists this process. Interestingly, the use of Pictograms, described in the [RAMPVIS : Pictograms
](https://observablehq.com/@ritsosp/rampvis-idioms-pictograms) notebook, is also evident.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Likewise, the use of the 'familiar setting' narrative pattern can be observed in other informational content from WHO such as this video providing [guidance on behaviour when going out](https://www.youtube.com/watch?v=quNi23GQ89c) during the pandemic.
In this example, sequences depicting humans interacting in supermarkets, classrooms and workspaces provide a narrative that related to everyday locations and activities. Similar approach is taken in map-based visualisations which depict familiar locations (country, health-boards etc) to make the information personally relatable.`
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
md`Although these are established techniques in storytelling, there are specific challenges related to the nature of the information presented in RAMPVIS. The team's initial efforts to develop different narratives were based on the use of the Five-design sheets methodology ([Roberts et al., 2015](http://dx.doi.org/10.1109/TVCG.2015.2467271)), described in the [RAMPVIS : Five Design Sheets (FdS)
](https://observablehq.com/@jcrbrts/rampvis-idioms-fds) notebook. The developed stories, using techniques influenced by the aforementioned narrative patterns, were discussed and, more importantly, ideas which could be developed further, but were dependent on data from other teams, were retained and put aside for future use.

In addition, it became evident quickly, that it is important to consider from many perspectives the messages presented, as these can be miss-interpreted due to the polarising nature of the subject. For that purpose, the team was expanded with the inclusion of a Communications, Events and Marketing Manager. The Communications manager has already contributed with guidance on how the messaging should be presented (see next section).

Out of the two narrative techniques employed, gradual reveal, although not formally evaluated, is common in presenting explanatory content and for scaffolding explanations. However, it also dependent on a well-defined narrative timeframe and pace of the developing story, which can be important for the successful comprehension of the message. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`During the voluntary phase of the RAMPVIS project, the team was particularly small (three visualisation researchers, and one epidemiologist). As the other teams were developing their outputs, it was not viable to rely on their progress (and their data) to develop disseminative stories. The team therefore focused on more general messages on the pandemic, such as *what is modelling and its purpose*, explanation of the *infection model* etc.

The team attempted to use metaphors, such as football result and weather prediction, to create a 'familiar setting', with a combination of 'gradual reveal' [NAPA Cards](http://napa-cards.net/).

We rejected this proposal after discussions with J. Meikle, who as Comms manager became part of the disseminative vis team.
There was a concern that it trivialised the problem (by using football as a metaphor), or can be considered unreliable, as weather predictions in the UK often are. `
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
The use of narrative design patterns helped us develop stories in a more structured way, taking into account any data and outputs from the other teams, as these became available to us. 

More importantly though, the narrative design patterns allowed us to expand on the original story ideas, and complete our team's ultimate goal, which was to create some form of automated story generation, initially chosen and seeded from an individual member-of-the-public point-of-view. We called this an egocentric approach for our data-driven storytelling interfaces, which itself could be considered a pattern similar to *incorporating the audience* and placing *humans behind the dots*, as identified by [Bach et al. (2018)](https://doi.org/10.1201/9781315281575) in their [NAPA Cards](http://napa-cards.net/).

Our user-driven, automatically generated data stories are based on the following combination of narrative design patterns:
- A user makes a selection of a location they have some interest in (*incorporating the audience* which sets a *familiar setting* and provides a *humans behind the dots* context)
- The story unfolds over time via animation (*gradual reveal*), based on the initial location, and story-type, selection.
In that regard, the narrative design patterns allowed us to develop a more formulaic approach for the generation of the content, and focus on creating appropriate algorithms for making said generation automatic. For example, the gradual revel of the story implies some form of time-controlled delivery, which progresses through sequential events (or milestones) that are detected as features from the underlying dataset.   

Reflecting on the use of these patterns, there are some observations:

- The narrative design patterns effectively guide the storyteller to think in a more formulaic way, and in situations where there is some form of structured, automated story generation they direct the overarching narrative. In that regard, they help the storyteller to think at the initial stages of story-planning and answer the question "how can I tell this story".
- They are particularly effective for storytelling on the subject of COVID, as they can promote engagement and call to action, as well as evoking emotions ([Bach et al., 2018](https://doi.org/10.1201/9781315281575)). Nevertheless, this makes them effective in any storytelling opportunity that has similar goals.
- In this regard, they are also particularly effective for data-driven storytelling as they assist the audience in understanding the underlying data, or explain patterns without resorting in complex graphs or mathematical notation. They support argumentation, direct flow and promote engagement which assist users understand, not necessarily what the data exactly show (in numerical or statistical terms), but rather what is the meaning behind the data.
- They are flexible because they can be combined, and are familiar to most of us, as they are common in the cinema, theatre etc. Indeed, combining them feels more like putting together pieces of Lego - some pieces deal with aspects of timing (*gradual reveal*), whereas other revolve around establishing a familiar context (*familiar setting* and provides a *humans behind the dots*). Their combinations make the story more compelling, much like a 'whodunnit' crime thriller combines a *gradual reveal*, with characters one associates with (e.g., the detective, trying to figure it out?), *convention breaking*, *comparison* and *make-a-guess patterns* ([Bach et al., 2018](https://doi.org/10.1201/9781315281575)).  



`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Early infographics and videos were built by **P.D. Ritsos** with input from **J.C. Roberts** and **M. Chen**.
For the data-driven stories which also use the Narrative Design Patterns, **J. Wood** and **B. Bach** have developed the narratives, which were eventually implemented by **Scott Jones**.
The team was expanded through the inclusion of **Julie Meikle** who has been instrumental in the design of the post-funding activities and associated narrative development.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Bach, B., Stefaner, M., Boy, J., Drucker, S., Bartram, L., Wood, J., Ciuccarelli, P.,  Engelhardt, Y., Koppen, U., Tversky, B. (2018)**  <br/>
_Chapter 5, in Data Driven Storytelling_<br/>
Published by Taylor Francis    
ISBN: 9781315281575,<br/>
https://doi.org/10.1201/9781315281575


**Roberts, J.C., Headleand, C., Ritsos, P.D. (2016)**.<br/>
_Sketching Designs Using the Five Design-Sheet Methodology._<br/>
IEEE Transactions on Visualization and Computer Graphics, 22(1), 419–428.<br/>
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
