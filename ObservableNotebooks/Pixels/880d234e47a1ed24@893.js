import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["Matrix-v1@1.2-rsz.png",new URL("./files/b0b0bb9ca37f4e5c4db052229dad5a52842a7c1cab5665f90f2b472b2f1d65be9d50f11bf46e2a3c3f70960db71a45811e655b52b01f6df86a115fd5c800b9f7",import.meta.url)],["Oelke-Boosting-Fig3-rsz-nolb.PNG",new URL("./files/354fb34efce046f7ec9e3c1ec12338fcb2ffe808e66419a0b36aff1c94f32e983d33e32ec48a9534353903c635ef5ad25574f64e91c727d817f62da713b280e3",import.meta.url)],["Ankerst-Fig8-rsz-nolb.PNG",new URL("./files/a163acdea8bb9931eba0409461985ba1e43ad769409f3c51b4abc313f647fc01fdde800c305fa52557bd4d82b6fa805c95cb379f3268740f4710ebac814bf069",import.meta.url)],["Ankerst-Fig10-rsz-nolb.PNG",new URL("./files/ef4486ccd0753a070f2653720b9f3606d77b3fbfd17a4190c268fdeb966185496c9f2c6ae7bf6498a6efb3aab2f6e6fbb55a72feb470a67869ddb8565c2a5028",import.meta.url)],["Raidou-Fig9-rsz-nolb.PNG",new URL("./files/6188f29b127fde0873363f8b1d26febec14a53c326131924b534036f7d6e9dea00fc222ee7202411ea95487f6f1f2259774c985f9fedd96dd6467c0af4b87d32",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Scalable Pixel Based Visualization`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/880d234e47a1ed24">https://observablehq.com/d/880d234e47a1ed24</a></pre>`;

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
md`* As **a visualization researcher**
* I would like to
    * **support epidemiological model builders to analyze the features of input and output parameter space of their models**
* * so that they can **asses and estimate uncertainty in their model and select the most appropriate parameter configurations for their simulation models**
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The data is generated using the EEERA model 
* https://github.com/ScottishCovidResponse/Covid19_EERAModel

The model runs with 16 parameters, 160 different parameter configurations. For each configuration there are 1000 run of the model.

Each run of the model is execute for 8 age groups and covers a total of 200 days.
 
Therefore: 
 
16 (parameters) x 160 (parameter configurations) x 1000 (runs) x 8 (age groups) = 20,480,000 time series of 200 days each
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Scalable Pixel based visualization** supports design of multi-resolution pixel based layouts. Display can be sub-divided into regions representing data at different level of details. This way of organizing data is typical of multi-resolution techniques which deal with
massive datasets and where it becomes necessary to show selections of data items based on criteria such as: relevance, performance trade-offs and even available screen space.

Given the hierarchical nature of the visualization tree structures are commonly used to manage the different level of detail.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Pixel-based visualization** techniques rely on mapping data points to pixels leveraging pixels visual features such as size, color, transparency, brightness etc.

Pixel-based visualization effectively supports visualization and exploration of large data sets, while providing an intuitive mapping from raw data to visual form.

Despite their expressive power Pixel based visualization suffer from scalability issues.

In [Keim et al (2006)](https://doi.org/10.1007/978-3-540-71027-1_2) identify 3 types of scalability issues: display resolution, data size, data dimensionality. All three challenges are also present in our ensemble datasets which are both multi-dimensional and multivariate.
To optimize our rendering we adopted a similar methodology to the one proposed by [Keim et al (2006)](https://doi.org/10.1007/978-3-540-71027-1_2) that is leveraging multiresolution in the visual mapping of the data.

Currently multi-resolution is implemented through simple zooming and aggregation of underlying values. Our work in progress is to achieve semantic zooming based on hierarchical aggregation and clustering of the underlying values.

To highlight features in our data we adopt Pixel Boosting [Oelke et al.]( https://doi.org/10.1111/j.1467-8659.2011.01936.x). We use a categorical color scale to map our values. We also use a grey background to give increase perceptual contrast and make the boosted pixels pre-attentively visible. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`Several state of the art solution have been proposed to address limitations of pixel based visualization approaches. These include:
* Pixel Boosting. [Oelke et al.]( ht![Oelke-Boosting-Fig3-rsz-nolb.PNG](${await FileAttachment("Oelke-Boosting-Fig3-rsz-nolb.PNG").url()})tps://doi.org/10.1111/j.1467-8659.2011.01936.x) investigate boosting techniques such as halos, background coloring, distortion, and hatching and their effectiveness in supporting trend and pattern detection as well as visual saliency of sparse pixels.
${await FileAttachment("Oelke-Boosting-Fig3-rsz-nolb.PNG").image()}
> **Figure** shows an example of Pixel Boosting through Halo.<br/>
> Image courtesy of [Oelke et al.]( https://doi.org/10.1111/j.1467-8659.2011.01936.x). 
* [Ankerst](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.134.2511&rep=rep1&type=pdf) show several applications of scalable pixel oriented visualization techniques to support mining and exploration of high dimensional data. 
  ${await FileAttachment("Ankerst-Fig8-rsz-nolb.PNG").image()}
> **Figure** shows the OPTICS [Ankerst et al.](https://doi.org/10.1145/304181.304187) approach with the circle segments technique visualizing 30,000 17-dimensional objects.<br/>
> Image courtesy of [Ankerst](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.134.2511&rep=rep1&type=pdf).![Ankerst-Fig10-rsz-nolb.PNG]  ${await FileAttachment("Ankerst-Fig10-rsz-nolb.PNG").image()}
> **Figure** shows visualization of attributes in an image classification training set. Each attribute of the training data is visualized in a separate area of the screen. The different class labels of the training objects are represented by different colors. Attributes are re-arranged based on similarity. Image courtesy of [Ankerst](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.134.2511&rep=rep1&type=pdf).

* [Raidou et al.](https://doi.org/10.1109/TVCG.2019.2903956) propose Pixel-Relaxed Scatter Plots (PRSP) to improve the display of dense scatter plots, using pixel-based, space-filling mappings.
  ${await FileAttachment("Raidou-Fig9-rsz-nolb.PNG").image()}
> **Figure** shows results from the application of the PRSPs to nine synthetic stimuli, representing levels of correlation (r) ranging from -1 to 1.
> Image courtesy of [Raidou et al.](https://doi.org/10.1109/TVCG.2019.2903956).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`The goal of scalable pixel based visualization is to provide an initial overview of the dataset (in our case aggregate data, e.g. descriptive statistics) as a whole leveraging the available screen estate. <br/>
We have an example in development as part of the EnsembleVis web application
 
![Matrix-v1.2-rsz.png](${await FileAttachment("Matrix-v1@1.2-rsz.png").url()})
 
In our visualization each row represents a configuration and it parameters. 
Each individual *miniature* plot (e.g. glyph) summarises information related to each parameter within a configuration.
Parameter information can include: average, min, max, distance from overall average, etc.
Plots are created dynamically.

Interaction allows for selection of multiple configurations and zooming. Selection results in more space given to selected configurations, zoom currently defines the granularity at which information are displayed.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.0 Reflective Discussion  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Scalable Pixel based visualization idiom tightly integrates mining algorithms with the visual encoding. <br/>
The modelers use the *pixel based matrix* as a companion to mine configurations which lead to similar outputs.<br/>  
Interaction gives modelers the freedom to inspect both at the level of the individual parameter configuration as well as across clusters of configurations.<br/>
Integration within a linked view system allows modelers to control and steer the mining and comparison process based either on the visual feedback given by from a low resolution visualization of large sets of configurations data, or on the individual parameters features provided by high resolution view of small sets of configurations. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`* pixel-based visualizations are effective when data are not sparse (which is our case)
* using the idiom as part of a linked view system provided the modelers with the opportunity to see the same data from different viewpoint and all at once selection made the pixel matrix to be used for exploration and refinement of both input parameters and output in a sort of *loop*.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`* trends and patterns of potential interest may be camouflaged at low resolution
* choice of how to color pixels when resolution changes needs to be carefully and better engineered
* different arrangements of rows may favour/disfavour data exploration

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Essential to its success is interaction. In this context the most recurring terms used by our modelers were: selection and comparison. <br/>
Through interactive manipulation we hope to enable the modelers to select configurations of interest and present them at the required and most effective level of detail. We also look forward in investigate how to improve comparison currently restricted to a restructuring of the row ordering which clusters together selected configurations. <br/>
We hope to develop a relevance driven objective function to guide clustering of selected configurations.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Rita Borgo, Qiru Wang, Ben Swallow, Cagatay Turkay, Thomas Torsney-Weir, Hui Fang, Elif Firat
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Goodwin, S., Dykes, J., Slingsby, A. & Turkay, C. (2015).**<br/> 
Visualizing Multiple Variables Across Scale and Geography. <br/>
In IEEE Transactions on Visualization and Computer Graphics, 22(1), pp. 599-608.
https://doi.org/10.1109/TVCG.2015.2467199


`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Oelke, D., Janetzko, H., Simon, S., Neuhaus, K., & Keim, D. (2011).**<br/> 
Visual boosting in pixel-based visualizations. <br/>
In Proceedings of the 13th Eurographics / IEEE - VGTC conference on Visualization (EuroVis'11). 
https://doi.org/10.1111/j.1467-8659.2011.01936.x`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Keim D.A., Schneidewind J. & Sips M. (2007).** <br/> 
Scalable Pixel Based Visual Data Exploration. <br/>
In: Lévy P.P. et al. (eds) Pixelization Paradigm. VIEW 2006. Lecture Notes in Computer Science, vol 4370. Springer, Berlin, Heidelberg <br/>
https://doi.org/10.1007/978-3-540-71027-1_2`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Raidou, R.G., Gröller, M. E., and Eisemann, M. (2019).** <br/>
Relaxing Dense Scatter Plots with Pixel-Based Mappings. <br/>
In IEEE Transactions on Visualization and Computer Graphics, 25(6), 2205-2216. 
https://doi.org/10.1109/TVCG.2019.2903956.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Ankerst, M. (2001).** <br/> 
Visual Data Mining with Pixel-oriented Visualization Techniques. <br/>
In ACM SIGKDD Workshop on Visual Data Mining, San Francisco, CA.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Ankerst, M., Breunig, M. M. Kriegel, H.P. Sander, J. (1999).** <br/> 
OPTICS: ordering points to identify the clustering structure. <br/>
In SIGMOD Rec. 28, 2 (June 1999), 49–60. <br/>
https://doi.org/10.1145/304181.304187`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Styling`
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
