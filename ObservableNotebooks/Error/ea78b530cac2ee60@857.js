import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["fua1999.png",new URL("./files/7e618496796003131b74f8707c3538958d614eb33923a1e7388eae52be1693f3aa130eb9848f510b86ea285d07047c98a03f5e661a3cf4192868a5340b696291",import.meta.url)],["ensemble_line_chart@2.png",new URL("./files/a6c203c891687e9778d3426a2c6f8495c03ebce4c65cbd91fcc16d561ae19b75d55e7c6f9f73050a16e8d232f316f19b7f970b9fa1f3c3f4eb9dff850fac03eb",import.meta.url)],["line_3.png",new URL("./files/c2e7e02af32149da17fb553cefb0e2bffca80f8208f11377df07abac22c93f18d7405e56768f4ea60771c1e0e824dac8748659b88f4d3f9f2619df038753409c",import.meta.url)],["line_2.png",new URL("./files/8d481dc1d08d145142ad19631629580c890d463bfdb1406c30f3b4ba14b7a242fe3a4b657c0d488ab8d613de7f2fced3464f62ab59c6e82b62d7277997765fd9",import.meta.url)],["line_ci.png",new URL("./files/462bac22864baa56d4db12c41138ec135944b05216aee3dad5f40a8db3978d3fd676f20235c3f50de7d45b82c42c3f31e90413285479e407d10d1904a6cbab32",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Representing Error and Uncertainty`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@henryqw/represent-error-and-uncertainty">https://observablehq.com/@henryqw/represent-error-and-uncertainty</a></pre>`;

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
    * assist epidemiological model builders(EMB) in **adjusting models**
* so that EMBs can
    * **identify error and uncertainty** through interactive comparison of models with **different input, output and configurations**, and adjust the model accordingly
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Input data:

* 160 different parameter configurations, each includes 16 parameters:
  * https://github.com/ScottishCovidResponse/EnsembleVis-UI/blob/master/public/assets/posterior_parameters.csv

Output data:

* Average value from 1,000 runs for each configuration:
  * https://github.com/ScottishCovidResponse/EnsembleVis-UI/tree/master/public/assets/data/output`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Representing error and uncertainty`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We aim to **represent error and uncertainty** from multiple configurations through multiple linked views and interactions.

There are **aleatoric/statistical uncertainty**, **structural uncertainty** and **prediction uncertainty** from the output ([Sedlmair et al., 2014)](https://doi.org/10.1109/TVCG.2014.2346321).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Visualization plays an important role in facilitating understanding of the errors and uncertainty that describe key characteristics used to interpret the data ([Bonneau et al., 2014](https://link.springer.com/chapter/10.1007/978-1-4471-6497-5_1)). By representing the errors and uncertainty that arise from the simulation data, eg. noisy data, human error, or incorrect model parameters, visualization illustrates the potential to assist EMBs in producing better models that are natural to the phenomenon.

We did not start with a specific type of error or uncertainty in mind, as the project progressed, we started to observe abnormalities in the output, which then prompted further investigations. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`There are many examples of using different visual designs and techniques to represent uncertainty.

[Fua et al. (1999)](http://ieeexplore.ieee.org/document/809866/) use a hierarchical parallel coordinates combined with colours and transparency to depict uncertainty in a fatal accident dataset. Extent scaling, a technique to uniformly scale overlapping bands to reveal relative sizes of the extents, is applied to reduce occlusions. See figure below, left (without extent scaling) vs. right (with extent scaling).

${await FileAttachment("fua1999.png").image({width:600})}

[Jones (2003)](https://onlinelibrary.wiley.com/doi/10.1002/mrm.10331) uses glyphs with orientations to encode uncertainty from MRI data. In the figure below, a) shows an MRI scan of fiber orientation, b) shows the encoded visualization of the selected region in a, aiming to identify the relationship between uncertainty in fiber orientation and anisotropy, c) shows a zoomed view of a selected region in b, where the uncertainty is high. The radius of the cone encodes uncertainty in the orientation of bundles.

<img src="https://onlinelibrary.wiley.com/cms/asset/83ec8664-2915-4846-864c-3a9dce28328c/mfig002.jpg" width=600/>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`Errors from the output can be easily observed in the line chart below. **Around day 21, the data appeared to be abnormal.**

${await FileAttachment("ensemble_line_chart@2.png").image({width:600})}

Other abnormal outputs (eg. flat curves) were also observed during our demonstration with the EMBs.

${await FileAttachment("line_2.png").image({width:600})}
${await FileAttachment("line_3.png").image({width:600})}


In some outputs, uncertainty is encoded with confidence bands.
${await FileAttachment("line_ci.png").image({width:600})}

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
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`* We have introduced a dashboard-like system to explore the input and output data.
* Interactions enable filtering and comparison between parameter configurations and simulation output.
* Multiple linked views facilitate data exploration and insight generation. According to the EMBs, the use of Multiple Linked Views to represent error and uncertainty with interactions, is a first under the epidemiological setting. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`* The large dataset size (256,000,000 data points) means we have to preprocess the data and produce a derived dataset, this may affect the accuracy of what we are trying to represent.
* We did not have enough time to polish our system (UI/UX).
* We did not have enough opportunities to consult the EMBs, our end users.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
* We need to consolidate and optimize our data processing pipeline, in order to improve performance and reduce overhead
* We are in the process of redesigning our user interface to improve the user experience
* Support the comparison of multiple selected parameter configurations
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Rita Borgo, Hui Fang, Elif Firat, Robert Laramee, Cagatay Turkay, Tom Torsney-Weir, Qiru Wang`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Sedlmair et al. (2014)**: Sedlmair, M., Heinzl, C., Bruckner, S., Piringer, H., & Moller, T. (2014). Visual Parameter Space Analysis: A Conceptual Framework. IEEE Transactions on Visualization and Computer Graphics, 20(12), 2161–2170. https://doi.org/10.1109/TVCG.2014.2346321

**Bonneau et al. (2014)**: Bonneau, G.-P., Hege, H.-C., Johnson, C. R., Oliveira, M. M., Potter, K., Rheingans, P., & Schultz, T. (2014). Overview and State-of-the-Art of Uncertainty Visualization. In C. D. Hansen, M. Chen, C. R. Johnson, A. E. Kaufman, & H. Hagen (Eds.), Scientific Visualization (pp. 3–27). Springer London. https://doi.org/10.1007/978-1-4471-6497-5_1

**Jones (2003)**: Jones, D. K. (2003). Determining and visualizing uncertainty in estimates of fiber orientation from diffusion tensor MRI. Magnetic Resonance in Medicine, 49(1), 7–12. https://doi.org/10.1002/mrm.10331

**Fua et al. (1999)**: Ying-Huey Fua, Ward, M. O., & Rundensteiner, E. A. (1999). Hierarchical parallel coordinates for exploration of large datasets. Proceedings Visualization ’99 (Cat. No.99CB37067), 43–508. https://doi.org/10.1109/VISUAL.1999.809866

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

### Imports
`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
