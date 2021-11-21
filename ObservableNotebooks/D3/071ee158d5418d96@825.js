import define1 from "./1bd37c92f6a24487@1103.js";
import define2 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["dashboards.png",new URL("./files/0b82f015b50771c83d57f1fc60565e2af06710c660a089ebf4ed38a7d79c9e6fe34336c65fc449a14c011cd41dcfc7ef761e23048eba7c706258b937b47c3164",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : D3.js for Rapid Visualization Design`
)});
  main.variable(observer()).define(["ui","htl"], function(ui,htl)
{ // If this page is outside of Observable, set the default styles to approximate
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/071ee158d5418d96">https://observablehq.com/d/071ee158d5418d96</a></pre>`;

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
md`As a visualization designer / developer 
* I would like to
  * provide a **broad range of visualizations** for the RAMPVIS VIS infrastructure.
  * provide **many visualizations**
  * create **new and bespoke visualizations** to solve visualization problems that current visualizations cannot solve
  * provide **interactivity** to my visualizations
  * **adapt visualizations** quickly based on user feedback
* So that
  * RAMPVIS volunteers can see their various data sets in meaningful and informative ways,
  * We can visualize a potentially **wide range of different data types** (time series, geographic data, relational data, etc), and 
  * We can visualizations into **(interactive) dashboards**.

A visualization:
* can be anything ranging **from a simple bar chart to an interactive visualization** of some geo-temporal content to an interactive dashboard. 
* needs to **run in a browser** without installing any additional software on the user's machine or browser (e.g., as in the case of Adobe Flash). 
* needs to potentially be **interactive to support exploration** and reveal details on demand. 
 
The visualization designers / developers involved in the project all have extensive training in data visualization (including perception, interaction, visualization techniques, etc.) as well as programming and web-development. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 2. DATA

**NOTE**: This section is identical between all idioms in the generic team.

The idiom does not impose any restrictions on the data types. There are a variety of data types used in the generic visualization system including multivariate time series, cumulative time series, and matrix. The data comes from different sources such as the SCRC data platform, Public Health Scotland, Our World in Data, and the Office for National Statistics. Some examples include:
- [Weekly COVID-19 related deaths in different settings](https://statistics.gov.scot/resource?uri=http%3A%2F%2Fstatistics.gov.scot%2Fdata%2Fdeaths-involving-coronavirus-covid-19)
- [Cumulative Number of Cases Tested Positive for COVID-19 in NHS Ayrshire & Arran](https://statistics.gov.scot/slice?dataset=http%3A%2F%2Fstatistics.gov.scot%2Fdata%2Fcoronavirus-covid-19-management-information&http%3A%2F%2Fstatistics.gov.scot%2Fdef%2Fdimension%2Fvariable=http%3A%2F%2Fstatistics.gov.scot%2Fdef%2Fconcept%2Fvariable%2Ftesting-cumulative-people-tested-for-covid-19-positive)
- Correlation of ICU patients between different NHS health boards in Scotland (derived from raw data)

It is currently being expanded to support visualizations of geographical and network data as well.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`D3.js is a visualization programming library for JavaScript to create visualizations for the web. The name stands for *Data Driven Documents* as D3 creates and manipulates SVG images. D3 is used with JavaScript and provides high-level functions for data import, graph layouts, color schemes and scales, axis labelling, mapping between two ranges of quantitative values, as well as attaching interactions to visual elements and consequently updating a visualization based on user interactions.

Core to D3 is the *data binding*, which binds data objects (JavaScript Objects) to visual elements on the screen (SVG elements). For example, an array of data objects (e.g., councils with their current Covid19 case numbers) are *bound* to a set of rectangles. D3 will consequently create *one rectangle per data element* (council). Eventually, the developer can specify a *visual attribute* of that shape (or rectangle) to be changed according to a data elements attribute. For example, the D3 developer decides to map the *height* of the bars to the current Covid19 case number in the corresponding council. 

These and other routines make D3.js the most widespread programming approach to building visualizations on the web. However, D3 is not only for prototyping. We and many others use D3.js to develop real visualizations, e.g., the NYTimes. Hence, it is more about the rapid development and engineering of VIS systems.


 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`D3.js was introduced by [Michael Bostok, Vadim Ogievertsky and Jeffry Heer in 2011](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6064996) as a novel and simple way to prototype visualizations in JavaScript. D3 follows a history of previous visualization toolkits such as [IVTK](https://hal.inria.fr/inria-00071768/document), [Prefuse](http://vis.stanford.edu/papers/prefuse). These toolkits, while providing similar abstractions than D3, e.g., functions to create visual mappings, bindings, interaction, and an array of pre-coded out-of-the box visualization techniques, were limited to the use of a single machine as they were programmed in JavaScript or C. A piece of visualization software had to be downloaded and installed on each machine it wanted to be used. When a new version of the software became available, any local version needed to be updated. While this model worked well, and in fact is still used today in computation intensive applications such as biology and immersive environments, the internet changed everything. 

Publishing and deploying visualizations on the web has become commonplace, pioneered by news outlets such as [NYTimes](https://www.nytimes.com/) and the [The Guardian](https://guardian.co.uk). Within the context of data journalism, these media required the quick and wide deployment of visualizations, ideally providing interactivity and animations to engage their audience with the news content. D3 was filling this gap by providing all the functionality in a single library. D3 since has probably been the most successful visualization paper and is widely used by numerous sources world wide. It has [an active user community](https://www.d3-graph-gallery.com), numerous tutorials, as well as follow-up project such as [Vega](), [Vega-lite]() or  [Observable](https://observablehq.com), the platform this notebook is written in. In the meantime, plenty of visualizations have been developed in D3, [many of which are reusable and modifiable](https://www.d3-graph-gallery.com). 

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`D3 is widely used in numerous domains---academic and non-academic---to build visualizations for the web. 

As already mentioned, because of its web technology, it is heavily used in data journalism projects (see links above). NYTimes and The Guardian are using D3 visualizations to allow for visualizations that people can interactively explore; or that use animation. A common method to storytelling with visualizations on the web is through [scrollytelling](https://bl.ocks.org/baronwatts/2a50ae537d7c46670aa5eb30254ef751) where a viewer advances a story or animation through scrolling down the page. While a reader scrolls, they trigger animations, texts appearing and disappearing, visualizations being explained. Other common ways to include D3 visualization into narrative visualizations is through [data videos](https://pubmed.ncbi.nlm.nih.gov/27875166) or [data comics](https://datacomics.github.io). 

In the Life Sciences, D3 has been used to build numerous visualization tools. Examples include an [atlas of human or RNA structures](https://www.nature.com/articles/nature21374), [tissue networks](https://www.nature.com/articles/ng.3259), for [gene enrichment analysis tools](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-14-128), and to drive the user interface for a [cell atlas search](https://data.humancellatlas.org/analyze/visualization/ideogram).

In the social sciences, we find D3 visualizing data about peace agreements, e.g., their [locations](https://vishub.net/papers/havens2019paxvis.pdf) or the evolution of peace processes over time [Bell et al. 2022]. These visualizations feature interactive maps and timelines, allow for pan and zoom and to highlight data elements of interest. 

In fact, many visualizations by famous contemporanean visualizations designers are created with D3, whether then these visualizations are published on the web and provide for interactivity, or whether they are printed on paper. Examples include [Nadieh Brehmer](https://www.visualcinnamon.com/) or [Jan Tulp](http://tulpinteractive.com).

In the scientific visualization community, D3 is valued for its flexibility that allows to implement new visualization techniques, algorithms, and interaction techniques. For example, *City Intelligence* uses D3 to create origin-destination (OD) Maps to show how [commuter flows vary in the burroughs of London](https://maps.london.gov.uk/commuter-flows).

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`Within the RAMPVis project, D3 is a crucial part across all working groups. It either is used directly to create visualizations, or indirectly in that the project is reusing visualizations originally build with D3. The generic team has three visualization developers / designers using D3.

In particular, D3 was used to create dashboards. Dashboard is a concept widely used across the literature with little specific definitions and no generally accepted definition. In this project, we focus on dashboards as a high-level summary overview of a set of information on a single screen and without the need to interact. This setting posed challenges to visualization design and which in turn motivated the use of D3, compared to existing out-of-the-box charting libraries such as E-Charts. 

* The size of a visualization must be potentially very small, requiring bespoke designs and different levels of abstractions
* The layout and grouping of visualizations must be carefully thought through and easily adaptable. Some visualizations might require more space and a specific aspect-ratio.
* Visual consistency must be guaranteed across visualizations, including colors and visual conventions. 
* Last but not least, we needed full control over the type of visualizations. Besides fully interactive charts, sometimes, a "visualization" might be a trend-arrow showing the direction of a temporal trend in a time series. In other cases, a "visualization" is just a number of a specific, e.g., current, value.

The figure below shows two of the dashboards created with D3. It includes a bespoke set of visualizations with a carefully balanced visual design. 

![dashboards.png](${await FileAttachment("dashboards.png").url()})

Besides the use of D3 to build visualization, the developer team heavily relied on JavaScript. For example, below is a small code example of how a dashboard *widget* (..) is specified using the JavaScript Object Notation (JSON), a human-readable data format traditionally used to exchange data between server and client applications. In our use case, we used this simple format to specify *what* we wanted to be visualized in each specific visualization widget on the dashboard and *how* the components are to be arranged visually in a layout. 

\`\`\`javascript
{  
            layout: [
                [
                    'testing', 
                    'vaccination'
                ], 
                [
                    'deaths',
                    'hospital'
                ],
                'vaccination-agegroups'
            ],
            groups: [
                {
                    id: 'hospital',
                    title: 'Covid19 in Hospital',
                    layout: ['icu', 'hospital2', 'hospital-normalized']
                }, 
                {
                    id: 'testing',
                    title: 'Testing',
                    layout: ['dailyTests']
                }, 
                {
                    id: 'deaths',
                    title: 'Deaths',
                    layout: [['deaths-weekly', 'deaths-all']]
                },
                {
                    id: 'vaccination',
                    title: 'Vaccinations Total',
                    layout: [
                        [
                            'vaccination-total-1st', 
                            'vaccination-agegroups-dose1',
                        ],[ 
                            'vaccination-total-2nd',
                            'vaccination-agegroups-dose2'
                        ]
                    ]
                },
                {
                }
            ], 
            widgets: [
                {
                    id: 'icu', 
                    title: 'In ICU',
                    dataField: nhsBoardField,
                    color: d3.rgb(COLOR_HOSPITAL).brighter(1),
                    data: Data.from(options.data, Data.Fields.HEALTH_BOARD_ICU),
                    visualization: 'linechart',
                    mode: dashboard.MODE_CURRENT,
                    detail: 'medium',
                    normalized: true
                },{
                    id: 'hospital2',
                    title: "In Hospital",
                    dataField: nhsBoardField,
                    color: d3.rgb(COLOR_HOSPITAL).brighter(2),
                    data: Data.from(options.data, Data.Fields.HEALTH_BOARD_HOSPITAL),
                    visualization: 'linechart',
                    detail: 'medium',
                    mode: dashboard.MODE_CURRENT
                }
      ....
              
\`\`\`

Using this approach helps us quickly script and iterate over a dashboard design as well as to quickly create new dashboards. 
  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`D3 was chosen for this project among a wide variety of possible alternatives. These alternatives include other programming libraries for JavaScript (e.g., [Processing](https://processing.org)) or Python (e.g,. [Plotly](https://plotly.com)), as well as dedicated dashboard libraries (e.g,. [dashboard.js](https://github.com/datopian/dashboard-js), [cube.js](https://cube.dev/blog/cubejs-open-source-dashboard-framework-ultimate-guide/), or [dashing](http://dashing.io)). Yet another alternative would have been to work with out-of-the shelf dashboard design tools such as [Tableau](https://www.tableau.com/en-gb), [PowerBI](https://www.google.com/aclk?sa=l&ai=DChcSEwje--b6v6H0AhXYmtUKHSMLDqMYABABGgJ3cw&ae=2&sig=AOD64_3B3pOI4zVjkj1ejA0dICMgyVG3Pw&q&adurl&ved=2ahUKEwjphNz6v6H0AhVUSfEDHXv0CFUQ0Qx6BAgaEAE), or a range of other commercial tools. We found that other programming libraries did not provide the necessary support and flexibility for our project. Below, we reflect on the decisions made when choosing a visualization library or tool. While D3 is a programming library, the following list is more universal to visualization tools.

- **familiarity** to the developers to avoid learning and surprises in the limitation of the chosen tool.
- **visual design options**: may out of the shelf tools or libraries come with a fixed set of visual design choices. These choices concern such things as font-types, color palettes, labels on charts, and detail of visualizations. 
- **range of visualizations**: some tools have a limited set of visualizations and chart types to choose from. This in turn limits the expressiveness one can achieve in one's task and visualization.
- ability to **create interactions**: while interaction can increase the programming or implementation effort, it often can be avoided all together. For example, the Python Seaborn library is very easy to use and produces a simple set of OK charts without interaction. On the other side, for example, D3, allows for very bespoke interactions. 
- how easy is it to **deploy a new version** of the visualization? E.g., JavaScript makes it easy to deploy a new version since a user can always find an up-to-date version online.
- **performance**: 

We used D3 in a coordinated individual fashion. Each developer implemented their own visualizations and visualization designs according to their need. We agreed on the visualizations that we needed. Where possible, we reused charts from [Vega-lite](https://vega.github.io/vega-lite) to avoid duplication of work. The code is stored and shared in a [GitHub](https://github.com/ScottishCovidResponse/rampvis-ui/branches) repository that takes care of version control and backups. 

Since we could not meet in person to discuss visualization designs, we used [Figma](https://www.figma.com), an open collaborative platform, to share and discuss visualization designs. We also discussed visualizations in our Slack channel and weekly meetings.

In the following, we reflect on our experience with D3 and give more rationale for our choice.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`D3.js is essential for the kind of project we are working on for the following reasons. 

* It allows a great deal of **flexibility with respect to visualization design**. In other words, since it is very low-level, we can implement our own visualization designs. These visualization designs often result from sketching exercises and exploration with pen and paper. Then, we can implement the specific graphic shapes we need, calculate a layout, change their coloring and size depending on attributes in the data, as well as add animation for improved understanding of transitions and storytelling. 
* It allows to** adapt to design challenges as the project goes**. This criterion has been deemed essential at the beginning of the project as we did (do!) not have a clear specification of the requirements for both visualization and interaction. In a project that unites a set of volunteers that can both visualization design and programming, the priority is to "get stuff done". In that sense, we are exploring a very large space of possibilities for visualization design. That said, we need to guarantee that our solutions are fit for purpose. That means
  * they solve real users' problems. If they are not able to, e.g., visualize a specific kind of patterns in a dataset, we need to improve them, or, in the worst case quickly create new visualizations. 
  * they are understandable to users. If our users have trouble understanding the visualizations and using them on a daily basis, we need to either simplify them, change their visual characteristics (e.g., colors), or provide better explanations.
  * they are usable by users. If users do not know how to interact or require too much interaction for our visualizations to be usable, again, we need to change these visualizations and improve our designs.
* Changing and iterating over visualizations can be a long process that requires **flexibility in the tools and methods** one is using. Sticking to a chart library that offers a comprehensive set of fully implemented visualizations (E.g., [E-charts](https://echarts.apache.org/zh/index.html)) will run us into trouble sooner or later when we need to make adaptations that that library cannot handle. True, there are limitations to D3 as well, as we discuss in the Section below.   
* There is **a lot of community support and resources** to help with specific problems. D3 has a huge user community with many solutions, especially on platforms such as [Stack Overflow](https://stackoverflow.com).
* D3 is JavaScript (JS) and hence can work hand-in-hand with many other JS libraries to clean and treat data or to create interactivity.  
* **Efficient integration**: it is easy to integrate visualizations developed in D3 from one to other frameworks. We started with vanilla visualizations that run in a standard web server (like a simple HTTP server in Python). The project went through several architectural changes but the base visualization codes only need to modify a little bit. We first used Jinja2 as a web framework without any modification. To support automation of creating pages from a single visualization with different data sources, we changed the code that is responsible for handling data input. We recently migrated our project to React with little modification that wraps each visualization as a module. Those three major changes in the frontend architecture will not be manageable if other higher level libraries are used (such as Tableau).
* Easy **deployment**: D3 visualizations can be run on any website frontend and do not need any backend to run. That means, they can be embedded into simple HTML pages or in Observable notebooks such as this one.

  
D3 was well known among the developers of this project, so allowed a quick start in getting things done. Thanks to the community resources as well as our own previous project, we could start with existing code and gradually expand and adapt as the project required it. In fact, this process is still ongoing and the team is able to design its own reusable components (e.g., visualizations, declarative specifications) to speed up the prototyping process. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`D3 is not an easy beast to manage. 

* **Huge upfront time investment necessary:** Sometimes it is hard to make a decision to use D3 in contexts that require solutions *quickly* such as this RAMP project. For example, there is a growing set of visualization tools and libraries (e.g., [VisTools](http://vistools.net)) that provide many out-of-the-shelf charts in any programming language and platform. Other tools, such a Tableau, support the manual creation of charts and dashboards while guided by systems decisions. These tools and approaches might save a lot of time at the beginning of the project but as challenges arise that show up their limitations, time is wasted if switching the approach, e.g., and eventually deciding to go with a more low-level approach such as D3. In our team, we decided on D3 from the beginning, knowing that we would lose some time in the beginning, but conscient that we don't waste time on our way.

* **D3 Versioning can be hard to keep pace with:** D3 underwent and is still undergoing changes at a high pace. This is good as it means that the library is evolving and adapting to new features and challenges. This is great because it shows the community behind D3 and that D3 will stay around and be compatible for a while. On the down side, this also means significant changes to both
  * the features and constructs the library is using, and 
  * consequently the way we use and program D3.

  In the past, it was frustrating to understand and keep up with the differences from one version to the other. Often, existing projects that were just 1 year old did not work with the latest version of D3 and required both time to understand the changes and time to update the code. It also meant that teaching D3 to students needs to be updated to students. Both teaching and learning D3 has been made difficult not just by the different versions but also by the---usually a good sign---plenty of support on the web. In other words, very good descriptions of how to solve a problem in D3 or how to use D3 suddenly were outdated and incompatible with the current version. Worse, advice often did not mention any version numbers, making it extra difficult to understand which version it was referring to. Luckily, all D3 versions are still available so that code written with old versions of D3 remains executable.
For our specific RAMP project, we did not run into versioning issues yet, but time flies and we need to make sure our code remains extensible.

* **Temptation to over-polish & procrastinate:** Because of its low-level features, D3 is a great tool to be creative and explore new designs as well as tweak them. This can lead to graphically very refined and polished visualizations that carefully balance color schemes, shape sizes, labels, font sizes, nice effects through opacity, and appealing animations. On the downside, the process of polishing can be time intensive, and the fact that D3 provides these "features" makes some people (including at least one of the authors) prone to spend a significant amount of time polishing. In the worst case, this can polishing process can lead to procrastination through, e.g., trying many different color schemes, playing with opacity and different font sizes, or with the layout of a set of visualizations on a dashboard. There certainly is value in all these interactions and exploration---at last, we are designers and engineers and we are striving for both
  * the best possible solution, and
  * to learn and extend our knowledge about our *matter*.
  From a reflecting point of view, it is hard to assess the *explicit* value of all these micro-iterations, compared to its *tacit* value.



`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Tool interoperability:** There is probably a great opportunity to make tools interoperable and design tool-chains that support different levels of reuse and application. For example, D3 is used to build charts in Vega and Vega-lite, a higher-level grammar to visualizations. If I am using Vega charts but need to make adjustments to the charts, I (as a developer), would like to get to the underlying code and make those adjustments in D3. 

**Reusability:** Another opportunity could be to streamline the many versions of charts and foster the reusability of existing open source solutions. It surprises me that there is no structured repository for visualizations such as, e.g., the [Thingyverse](https://www.thingiverse.com/) for the maker community. People upload their code, fork, and modify, comment, and merge. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Bach, Benjamin (working with the developer team Abdul-Rahman, Alfie and Nguyen, Phong and Khan, Saiful). Opinions in this notebook are my own.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Bostok, M., Ogievetsjy, V., & Heer, J. (2011).**</br>
_D3 Data Driven Documents._<br/>
IEEE Transactions on Visualizations and Computer Graphics.<br/>
https://doi.org/10.1109/TVCG.2011.185

**Satyanarayan A, Moritz D, Wongsuphasawat K, Heer J. (2016).**</br>
_Vega-lite: A grammar of interactive graphics._</br> 
IEEE transactions on visualization and computer graphics. </br>
https://doi.org/10.1109/TVCG.2011.185

**Christine Bell, Benjamin Bach, Tobias Kauer (2022)**, </br>
_Ways of Seeing: Peace Process Data-Viz as Research Practice_ 
Convergence.

**Fekete, J.D. (2004)**, </br>
_The infovis toolkit._  </br>
In IEEE Symposium on Information Visualization (pp. 167-174). IEEE.

**Heer, J., Card, S.K. and Landay, J.A., 2005** </br>
_Prefuse: a toolkit for interactive information visualization._  </br>
In Proceedings of the SIGCHI conference on Human factors in computing systems (pp. 421-430).

**Greene, C.S., Krishnan, A., Wong, A.K., Ricciotti, E., Zelaya, R.A., Himmelstein, D.S., Zhang, R., Hartmann, B.M., Zaslavsky, E., Sealfon, S.C. and Chasman, D.I.**, 2015.  </br>
_Understanding multicellular function and disease with human tissue-specific networks._  </br>
Nature genetics, 47(6), pp.569-576.

**Hon, C.C., Ramilowski, J.A., Harshbarger, J., Bertin, N., Rackham, O.J., Gough, J., Denisenko, E., Schmeier, S., Poulsen, T.M., Severin, J. and Lizio, M.**, 2017.  </br>
_An atlas of human long non-coding RNAs with accurate 5′ ends._  </br>
Nature, 543(7644), pp.199-204.

**Chen, E.Y., Tan, C.M., Kou, Y., Duan, Q., Wang, Z., Meirelles, G.V., Clark, N.R. and Ma’ayan, A.,** 2013. </br> 
_Enrichr: interactive and collaborative HTML5 gene list enrichment analysis tool._ </br>
BMC bioinformatics, 14(1), pp.1-14.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`> Add any imports that are required here - describe them briefly if you can.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`> ### For example ...
> <pre>import { exampleODmatrix, animTimer } from "@jsndyks/rampvis_exampleodmatrix"</pre>`
)});
  const child1 = runtime.module(define1);
  main.import("exampleODmatrix", child1);
  main.import("animTimer", child1);
  const child2 = runtime.module(define2);
  main.import("ui", child2);
  main.variable(observer()).define(["md"], function(md){return(
md`---

### Styling`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`> Show or hide instructions with the CSS Styling of <code>blockquote</code> as described here :
> 
> <code>display:block; </code> - will **show** <code>blockquote</code> comments and instructions <br/>
> <code>display:none; </code> - will **hide** <code>blockquote</code> comments and instructions 
>
> Or just toggle the **Instructions Toggler** below!
> **block** is on, **none** is off.`
)});
  main.variable(observer("viewof instructionsOnOff")).define("viewof instructionsOnOff", ["Inputs"], function(Inputs){return(
Inputs.radio(["block", "none"], {
  label: "Instructions Toggler (on/off)",
  value: "block"
})
)});
  main.variable(observer("instructionsOnOff")).define("instructionsOnOff", ["Generators", "viewof instructionsOnOff"], (G, _) => G.input(_));
  main.variable(observer()).define(["instructionsOnOff","htl"], function(instructionsOnOff,htl){return(
htl.html`<style type="text/css">
  blockquote { 
    display:${instructionsOnOff};
  }
</style>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`> Ignore everything from here down to keep styling consistent:`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<style type="text/css">
    blockquote {
      border-left:2px solid #a0d0a0; color:#606660; background-color:#fBfCfB; padding:0.1em; margin-left:8em; margin-right:2em; padding-left:2em; padding-right:2em; font-size:80%; width:60em;
  }
  blockquote code, blockquote pre {
    font-size:80%; color:#2b2
  }
  .hi {background-color:#aaffcc; padding-left:0.5em;padding-right:0.5em;margin-left:0.5em;margin-right:0.5em;}
  </style>`
)});
  return main;
}
