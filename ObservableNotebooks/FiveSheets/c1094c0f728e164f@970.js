import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["RAMP-FdS-Sheet4.png",new URL("./files/a1533f2b2575186ac4561cdad1408e3c9672e546f77918c8cdf986030f033cf150c5d94e4d705b40b38068638688a9794726b50afbbdd109900d8f1e3d58e640",import.meta.url)],["RAMP-FdS-Sheet3.png",new URL("./files/e7e5dda542cb0aa40a98f7d3964b11843dbf56dfb8177c46686bb49e247905d04bfa8334f153fba5b7082efc32737b926004f66cf6c15d4c4a3b4d9ab41b876f",import.meta.url)],["RAMP-FdS-Sheet5.png",new URL("./files/2c87a85a56bc99582638d0a19238fd3bec1bbe40774391366f13dd35c01a3c217d44711d68ce65db3c33e53a4f151c05eb20094d079ceeb1898fb4534bfce965",import.meta.url)],["RAMP-FdS-Sheet2.png",new URL("./files/027984aa9cbf6b2097cfd7ec05989877e9b033f61f32290f9e94e629f9a44d3db394a552f948a16942a3d668e4f191a21cd3205717fce81f064d4f8fb8386709",import.meta.url)],["RAMP-FdS-Sheet1.png",new URL("./files/e64440ace161b3d3f0563621909f6f130ff77af73e632d8a1517969b4b1449ed65bbb103614b706d2539553fc4bd5261a8dea2ec436bc80775c2ef403c5a015a",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Five Design Sheets (FdS) - using a structured sketching process to design-think how to explain tacit information`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@jcrbrts/rampvis-idioms-fds">https://observablehq.com/@jcrbrts/rampvis-idioms-fds</a></pre>`;

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
md`The Five Design-Sheets (FdS) method is a sketched visualisation-design strategy. The task for the designer is to design-think through alternative methods to explain tacit information to the public. How can we (as a scientist) explore many different ways, and contemplate good ways to explain tacit knowledge to the public? For example, as a scientist who builds models and investigates patterns within COVID data we would like to inform members of the public how we go about doing our work. We would like to explore different strategies and methods to explain what these models are and how they are used.  Specifically, to explain some of the processes that a scientist would use. But what are the best ways, and how do we explore different alternative ideas? 

Indeed, at the start of any visualisation design project, the developer needs to consider alternative solutions. By considering many different ideas, they can critically think through the advantages and disadvantages of each; and end the process with a 'good' solution. Potentially, someone could code each of these different solutions (using JavaScript, Java and so on) and see which one is best. But writing code takes time. On the other hand, sketching is quick. People can create use their imagination to sketch new and creative design solutions. Different solutions can be easily sketched and then discussed with other members of the team. When each of the ideas have been carefully considered, then they can be written into the coding language of choice. Through sketching, developers can ask and quickly explore solutions to their questions. For example, they may ask: What will my visualisation look like? How could it work? How is the tool laid out? How is it designed? What user-interaction functionality will someone need to perform? Through sketching, the visualisation designer and developer therefore can consider many possible design ideas, and hone these (many) ideas into a few ideas, then one idea, which can be coded. 

While sketching is useful, the challenge is to discover ways to explain and contemplate alternative ideas in a structured way. The Five Design-Sheet method leads the user to first contemplate many ideas, draw together three principle ideas, and finally output a realisation concept. Users consider alternative solutions and critically contemplate each idea and its suitability. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The data is tacit. It is knowledge that is contained within the scientist, models or processes that are used by the scientist and written down in scientific language, or used in papers and are not widely known. The process of sketching is to make this tacit information more explicit. 

The first challenge with tacit data is that there is no one database of information. The second challenge is that there is no one clear way to explain this information. What is required is a way to extract alternative ideas, and record them in a way that is explicitly recorded. While coincidentally ascertaining how to display and visualize them.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. The Five Design-Sheet method`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`With the Five Design-Sheet sketching design methodology, developers consider five challenges on five sheets of paper. They work from rough ideas, through three refined ideas, to a final realisation idea. This process occurs on five sheets of paper, with five prompt words for each sheet to help the develop consider different stages. The layout for each sheet is also defined, such to allow people to instantly recognise where to place the information, and how to proceed with completing the process. 

The Five Design-Sheet method helps someone to draw out alternative ideas, explore and critically contemplate different solutions, and refine one idea with further detail. The process records ideas in a structured way; it makes implicit ideas that are in the developers' head explicit on paper. The method includes space to discuss pros and cons on different solutions. The sketching process forces the developer to critical think about the data, the tacit knowledge available, draw together potential solutions, and critically analyse whether each is fit for purpose. 

The first sheet contains broad information, and the final sheet includes more detailed information, as follows:

**SHEET 1.** The first sheet of the FdS process allows someone to explore alternative ideas. Through sketching a developer follows the five prompt words (ideas, filter, categorise, combine/refine, question) to ideate and critically think about their ideas. For sheet 1, the developer proceeds as follows:
1. First the developer needs to contemplate and sketch different **ideas**.
2. Next the developer needs to consider if the ideas are useful, suitable and fit for purpose. They **filter** to select ideas that are useful, and identifying ideas that are less suitable. When removing ideas, these failed ideas should be imagined into working ones. Adding annotations to current ideas of their suitability, and trying to think if any idea is missed.
3. The developer needs to consider how to classify or **categorise** the ideas. The purpose here is to bring together the ideas and ascertain if any of the ideas are similar, duplicated, missing, and so on. By classifying the ideas, similar ones are brought together, and can then be considered in similar ways. But also categorisation may allow the developer to discover missing ideas.
4. The **combine** and **refine** prompt, encourages the developer to merge together or separate ideas, and refine them further.
5. Finally, the developer needs to **question** the ideas, decide if there are enough ideas, which ideas to refine further, which are suitable, and so on.
   
**SHEETS 2,3,4.** The middle three sheets allow users to focus on three alternative ideas and contemplate those solutions in more detail. Each of these sheets are structured in the same way (in a 2 by 3 design layout). The process is as follows (i) **meta-information**, (ii) **big picture**, (iii) **components** or operations, (iv) **parti** describing the main organising thought, (v) **pros/cons**.
1.  By thinking through the meta-information the developer can consider the main idea behind the design. Name it, and write a short description.
2. The big-picture panel allows the developer to sketch what it could look like. 
3. In the components/operations panel the developer considers what main parts of the system are.
4. Within the parti panel, the developer considers the unique selling point, or main concept that underpins the design.
5. Finally consider the pros and cons of the idea.

**SHEET 5. ** The final sheet is similar in structure to the middle sheets, but contains more detail, and focuses on one of the three design ideas. The main difference is in the final panel, where the users (instead of considering pro/cons) thinks about what details are required to take this idea to completion. What the next steps are. The fifth sheet takes one idea to a fuller version; to a level that could be implemented.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The Five Design-Sheet (FdS) was introduced by [Roberts (2011)](https://doi.org/10.2312/EG2011/education/029-036), expanded by [Roberts et al (2015)](https://doi.org/10.1109/TVCG.2015.2467271) and written as a book [Roberts et al. (2017)](https://doi.org/10.1007/978-3-319-55627-7). The book goes through each panel and sheet in the Five Design-Sheet methodology, and provides many examples of its use. The [fds.design])http://fds.design) website also includes resources and details of the publications.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`There are many examples, where researchers have utilised the method for their research projects. For instance, it was used in the [Explanatory Journeys](https://ieeexplore.ieee.org/document/9552910) research paper; the authors explored different ways to visualise routes of redress in administrative justice.

Applied by companies (e.g., Cubus), taught in Summer Schools (e.g., Visual Analytics Summer school (London) 3 years, Monash University) and integrated in Higher Education Bachelor courses (including INRIA, UMASS, UTAH, LIRIS (École Centrale de Lyon), OldDominion, Washington University St.Louis, Bergen University, among others). 

The methodology has been used and integrated into a wider set of stages, for teaching visualisation. For example, the Explanatory Visualisation Framework (EVF) embeds the Five Design-Sheet method into the taught unit of work. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`As scientists we wanted to explore different solutions over how to explain covid models. These mathematical models helped to analyse and predict the spread of covid. But the public may not understand the different models, how they are used, what they do and so on. The Five Design-Sheet method helped us to critically think through different design ideas. On the first sheet we explored different ways to explain the covid model, such as timeline, or different visualisations, or using the model states themselves. `
)});
  main.variable(observer()).define(["FileAttachment","htl"], async function(FileAttachment,htl){return(
htl.html`<style> 
.flex-container {
  display: flex; /* or inline-flex */
  justify-content: flex-start;
  padding: 2px;
  margin: 0px;
 
}
.flex-item {
  background: lightgrey;
  padding: 2px;
  margin: 3px;
  color: white;
  font-size: 1em;
  text-align: center;
}
</style>
<ul class=flex-container>
  <li class=flex-item><p>Sheet 1</p><img src="${await FileAttachment("RAMP-FdS-Sheet1.png").url()}" style="width: 450px"/> </li> 
</ul>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We categorised the ideas into different models and to explain types of model, or to use a metaphor to help explain, to using a simple model to exemplify the processes, or perhaps focus on the use of the model, or to focus the whole presentation around interviews with experts.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`There are three middle sheets, therefore we need three different ideas. After discussion we narrowed down the ideas to (1) using interviews with experts, (2) using cartoon characters to explain the process, and (3) to develop a concept around a metaphor. These were chosen because they cover a broad spectrum of possible ideas; from things that are real (interviews with experts), to imaginary (cartoons), to the idea of using metaphors. `
)});
  main.variable(observer()).define(["FileAttachment","htl"], async function(FileAttachment,htl){return(
htl.html`<style> 
.flex-container {
  display: flex; /* or inline-flex */
  justify-content: flex-start;
  padding: 2px;
  margin: 0px;
 
}
.flex-item {
  background: lightgrey;
  padding: 2px;
  margin: 3px;
  color: white;
  font-size: 1em;
  text-align: center;
}
</style>
<ul class=flex-container>
  <li class=flex-item><p>Sheet 2</p><img src="${await FileAttachment("RAMP-FdS-Sheet2.png").url()}" style="width: 350px"/> </li>
</ul>
   <ul class=flex-container>
  <li class=flex-item><p>Sheet 3</p><img src="${await FileAttachment("RAMP-FdS-Sheet3.png").url()}" style="width: 350px"/> </li>
  </ul>
   <ul class=flex-container>
  <li class=flex-item><p>Sheet 4</p><img src="${await FileAttachment("RAMP-FdS-Sheet4.png").url()}" style="width: 350px"/> </li>
</ul>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Finally we decided to focus on one idea. Through discussion we decided that we would focus on creating content from interviews, intermixed with visualisations to explain specific parts of the model. This idea was chosen because it would include video footage of scientists. Many people enjoy the watching the news, and therefore the style of the output would be familiar to the public. Visualisations and other infographics can be incorporated between the video segments, and the whole video, along with the graphics and visualisations can be used to explain ideas behind the models.`
)});
  main.variable(observer()).define(["FileAttachment","htl"], async function(FileAttachment,htl){return(
htl.html`<style> 
.flex-container {
  display: flex; /* or inline-flex */
  justify-content: flex-start;
  padding: 2px;
  margin: 0px;
 
}
.flex-item {
  background: lightgrey;
  padding: 2px;
  margin: 3px;
  color: white;
  font-size: 1em;
  text-align: center;
}
</style>
<ul class=flex-container>
  <li class=flex-item><p>Sheet 5</p><img src="${await FileAttachment("RAMP-FdS-Sheet5.png").url()}" style="width: 450px"/> </li> 
</ul>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
1. Thinking through many ideas was useful to encode all possible ideas. By considering many different ideas we could critically discuss them as a group of researchers, and contemplate which was the 'best' idea to implement. It was useful to think deeply through many alternative ideas. The very act of doing the Five Design-Sheet process helped us to think about the problem in a deep way. We also could consider who would be the viewer of the work and how it could be created.
2. Developing different ideas can help with future-proofing. By considering many ideas, many ideas could be created in the future. For instance, the three different designs (of the middle sheets) for our case study were all different ideas (video, cartoon and metaphor), which may attract different audiences. Therefore, while one idea was chosen, it would be possible in the future to choose other ideas. 
3. Careful consideration/critical thinking takes time, but the time spent thinking deeply is well worth it. It took some time to create the designs. This is not a bad situation, as careful consideration is useful. It is not easy to complete all the parts of the Five Design-Sheet process, but the process helped/forced us to think deeply. Deep consideration is useful. Design is difficult and it can be too easy to rush the process, however we felt that the extra time needed was useful. Perhaps even within a pandemic situation (where time is often pressing), it is not necessarily useful to keep rushing forward, we need to stop and critically think, and do it deeply, such to get a good result.
4. Working remotely, during the pandemic, has been challenging. Often collaboratively working through design ideas works best in-person. And therefore it can be difficult to share ideas remotely and discuss them. However using the Five Design-Sheet method, and sketching designs, enabled us to create the designs and share them with the team. We scanned the sheets and shared the images electronically. We could share our screen in video-conferenced meetings, and discuss the different ideas. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- Spending time on thinking about the ideas worked well,
- sketching the designs in small images helped to develop the concepts,
- the meta-information (and trying to summarise the concepts) helped to focus our mind,
- developing 3 ideas further (in the middle sheets) helped to focus on three solutions within the pandemic.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- the storyboards from the designs needed to be developed further. The process helped to get the overall goals, but some details were missing, and the designs still needed to be refined (although this would be similar to any other design process!)
- Some ideas were difficult to encode in sketches/words. Some concepts are still difficult to explain in sketch and brief phrases. Other styles of design capture, could be better, such as audio.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The Five Design-Sheet is a process that helped us contemplate alternative ideas. It also made these 'ideas' concrete, which can then be exchanged to other people in the team. Indeed, any design-ideation process is a process, and even at the end of that process, ideas will change, people will change, and so the designs may need to change. Consequently, there are many adaptations that could be made, for instance:

- Further storyboards could be useful to refine the main step. For instance, a fourth (middle sheet) could be added to explore a fourth design. 
- The design work can itself iniatate questions that have not been considered at the start. Therefore some of the designs may need to be changed at a later stage, due to information that has been discovered during the process.

In our case, the final realisation sheet provided detail of the main concept (the video) and how it would appear. But at this stage, they are just designs. While our realisation sheet did have a lot of information, we need to finalise the list of questions for the expert-interviews, create the video footage of the experts, and craft the required visualisations and put it all together. I.e., information still needs to be 'interpreted' from the design to make the solution a reality. The Five Design-Sheet method is a 'plan', and therefore helps the developer to contemplate different ideas and get the developer to the next stage. Then the implementation/creation would take place.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- [Jonathan C. Roberts](https://www.bangor.ac.uk/computer-science-and-electronic-engineering/staff/jonathan-roberts/en), [Bangor University](https://www.bangor.ac.uk)
- [Panagiotis (Panos) Ritsos](https://www.bangor.ac.uk/computer-science-and-electronic-engineering/staff/panagiotis-ritsos/en), [Bangor University](https://www.bangor.ac.uk)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Roberts, J. C. (2011).** The Five Design-Sheet (FdS) approach for Sketching Information Visualization Designs. In S. Maddock, & J. Jorge (Eds.), Eurographics 2011 Education papers (pp. 029). The Eurographics Association. https://doi.org/10.2312/EG2011/education/029-036

**Roberts, J. C., Headleand, C., & Ritsos, P. D. (2015).** Sketching Designs Using the Five Design-Sheet Methodology. IEEE Transactions on visualization and computer graphics, 22(1), 419-428. https://doi.org/10.1109/TVCG.2015.2467271

**Roberts, J. C., Headleand, C., & Ritsos, P. D. (2017).** Five Design-Sheets: Creative Design and Sketching for Computing and Visualisation. (1 ed.) Springer International Publishing. https://doi.org/10.1007/978-3-319-55627-7

**J. C. Roberts, P. Butcher, A. Sherlock and S. Nason**, (2021) "Explanatory Journeys: Visualising to Understand and Explain Administrative Justice Paths of Redress," in IEEE Transactions on Visualization and Computer Graphics, https://doi.org/10.1109/TVCG.2021.3114818.
`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
