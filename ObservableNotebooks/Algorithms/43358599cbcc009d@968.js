// https://observablehq.com/@lborohfang/rampvis-idiom-integrated-algorithmic-tools-for-visual-ana@968
import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["image@1.png",new URL("./files/2e0ce81cee8b6402e851c15a6d00e140192d5f359a5bbdec324181ca8dca4ba2f2037ab93df6f3e97cdbdee5cc4924bd3e6f691302eb142161cd15daa76f4393",import.meta.url)],["tool (2).png",new URL("./files/55d4b5d7b9b9c8bba6dd652113bef54633a1274c517219cfeafb4f7c09f35a30bcaf4fd71ff1f1350c168452f349d85304e0e723d6a594551b5c7a34be247a57",import.meta.url)],["image@2.png",new URL("./files/3567fe6a605656acdc14eaefb7cd335310c6dc9a069596a0437b6a4d487787026f25d79f4f75cd9c4bbce902ec396f4a35537cb03b08756cfa436cec22d14601",import.meta.url)],["image@5.png",new URL("./files/ec7aef8175f1bb4e4fe06d2f193c4465aae6221d796b03ff746c70206a1b4eec408500ed7b4e3d702e6b02c00037b888bde1f03093f1cc4fea568367accb0bc6",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Integrated Algorithmic Tools for Visual Analytics`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@lborohfang/rampvis-idiom-integrated-algorithmic-tools-for-visual-ana ">https://observablehq.com/@lborohfang/rampvis-idiom-integrated-algorithmic-tools-for-visual-ana </a></pre>`;

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
md`
- As an **epidemiological modeller simulating the spread of Covid**
- I would like to:
  - explore the relationships between factors in agent-based models and simulated time-series
- so that I can **select and optimize models to match real World observations**

*Further note:* - The work described here involves the ensemble vis team in which we focus on developing the visual analytics platform as a container and the visual analytics team in which we are investigating algorithmic tools. While these two teams worked separately and worked on different data sets, there is overlap between targeted users and the ways that the idea presented in this notebook operates within this context.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`The data we use in this notebook is 160,000 time-series simulated records from 160 configurations evenly sampled from input space. Each time-series record has 199 dimensions which refer to 199 days' infection and hospitalisation simulation. When we plot all the time-series data illustrated in the following figure, it is difficult to understand how they correspond to the input space where a set of parameters is used to drive a compartment model to generate these curves. Here, each color represents the curves generated from one configuration set among 160 sets. Therefore, it is hard to have a clear view of how these input configurations could make impact on the simulated curves due to the cluttering output curves. 

  <img src="${await FileAttachment(
  "image@1.png"
).url()}" width=600>

The following is the link to EERA model that we use to generate our data:
https://scottishcovidresponse.github.io/Covid19_EERAModel/
<br/>

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A data source: [https://coronavirus.data.gov.uk/details/healthcare](https://coronavirus.data.gov.uk/details/healthcare)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Integrated Algorithmic Tools for Visual Analytics`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The key focus of a successful visual analytics (VA) system is to understand the relationship between input and output spaces. For a VA system to analyse modern state-of-the-art machine learning algorithms [1,2,3], e.g., convolutional neural networks, this insight improves the interpretability of the highly non-linear mapping between feature space and annotated labels. Whilst for a VA system to investigate agent-based modelling (ABM) simulators [4], this information facilitates better configurations of important causal factors to generate realistic simulations. <br/>
 
Despite a well-motivated task, designing an elegant visual analytics system is challenging because both input and output spaces are high-dimensional and there are too many interesting patterns for visualization so that it is a hard decision how to allocate powerful visual channels, e.g., colours and shapes, to various attributes for users to gain insightful knowledge of the models.  
  
In this exploration, we aim to integrate many classical machine learning algorithms, including unsupervised clustering algorithms, dimensional reduction methods and regression models, into a visual analytics system to serve the purpose of understanding an epidemiology simulation model, EERA [5]. Both the output uncertainty for each corresponding configuration set and sensitivity caused by each configuration parameter can be analysed well with the help of various algorithmic tools.<br/>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Visual analytics systems are popular to provide a better understanding of models, e.g., a machine learning-based facial expression recognition model introduced by [Tam et al (2011)](https://dl.acm.org/doi/10.1111/j.1467-8659.2011.01939.x) and an agent-based modelling model by [Slingsby et al (2019)](https://doi.org/10.2312/eurp.20191153). In many related works, various algorithmic tools are investigated and integrated to facilitate insightful analysis of different types of models. Some recent visual analytics papers, such as [6, 7, 8], discussed how to efficiently combine clustering, classification and dimensional reduction method to improve the effectiveness of VA systems.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A concrete example of integrating algorithmic tools for VA is in [9]. We used short term (e.g. two weeks) measurements of hospital admissions and optimised a simple compartmental simulator of Covid-19 to fit this data using an evolutionary optimiser. We, therefore, were able to identify a range of plausible vectors of parameters that could have given rise to the observed data using the simulator. The best fit parameter vector runs the simulator to produce a forecast for the next two weeks. The user can then interact with the tool by changing a slider that controls a parameter relating to the contact rate within a given population (Figure below; copied from [9]). 
. 
`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("tool (2).png").image({width:600})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We are currently working on an extension of this tool, where we plot all the vectors of parameters that fit the data well on a parallel coordinate plot. The user can then interactively decide to brush some of the vectors of parameters away, perhaps based on their ancillary data and knowledge of forthcoming policy decisions, and investigate forecasts accordingly. This tool will help users make better decisions on how best to prepare given the forecasts from the simulator based on their belief of what is plausible. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`As we have 160,000 output simulated time-series records by using 160 input configuration sets, it is impossible to colour-code the configuration sets to find out the relationship between the input and output spaces. To facilitate the VA on both uncertainty and sensitivity analysis, we propose to use an unsupervised clustering algorithm - K-means method to group the 160,000 time-series records first. After using the elbow method to select an optimal cluster number, which is set to six in our experiments, we assign a colour map to represent these clusters to understand the connections between the 160 configuration sets as well as the variations in each configuration set. In addition, to deal with the high dimensionality of each time-series record, we investigate a dimensional reduction method - Principal Component Analysis, to project the 199 dimensions into 2-D space. As the first two coefficients preserve ~90% variations, we believe the 2-D feature representatively reflects its original time-series signal. After this, we create 10X16 grid-based scatter plots to visualize the distributions of samples in the output space.`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("image@2.png").image({width:800})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`From the figure, we observe that some closest configuration sets generate outputs belonging to different clusters. One could further analyze the difference between these configuration sets. Another insight is that some input configuration sets, e.g., configuration set No.20 (5th scatterplot from the left in the second row) [0.384, 0.476, 63.3, 0.267, 0.978, 0.36, 1, 0.0007, 12.677, 12.49, 5.30, 10.18, 10000, 0.327 ] has high variations as it produces outputs which are grouped into three clusters. This indicates that there is some sensitive parameter to make an impact on the output curves. A zoom-in is shown as below:`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("image@5.png").image({width:600})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`With the visualisation tool by using clustering and dimensional reduction methods, it could further help us to identify different patterns the simulator behaves with each configuration set. For example, the subplots [3,3] (i.e. [column index, row index]) [3,10] [5,2] have mixed colours. These show that in the high dimensional simulated output space, these three configuration sets generated samples which are represented by several clusters and the simulated patterns are more complicated than other configuration sets. While the subplots [7,6] [2,3] [12,10] [4,6] have relatively wider distributions compared to other sets but with the same clustering colour. It means that in the high dimensional space, the simulated data can be clustered well but there exist larger variations in the simulation compared to other configurations. On contrary, subplots [4,1] [15,3] shows linear patterns. It indicates that the first and the second largest components of the PCA have a strong correlation in the simulated data in these configuration sets.

In addition, we also investigated the use of various clustering algorithms, e.g., DBSCAN and agglomeration clustering, and dimensional reduction methods, including TSNE and UMAP, to analyze the distributions, uncertainty, and how sensitivity of the output related to the input parameter sets.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## 7 Reflective Discussion  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
 Integration of various machine learning-based algorithmic tools helps to build a powerful visual analytics system. In this approach, we practice the use of classical unsupervised learning methods, including clustering, dimensional reduction and regression methods, to tackle the high-dimensional data challenge in both input and output spaces and facilitate a powerful VA system to investigate the uncertainty and sensitivity of an epidemiological model. Specifically, the unsupervised clustering algorithm could help us to find similarities and variations of the simulated data by using different configuration settings so that we could further evaluate the sensitivity of the causal factors in the input space. Further, the dimensional reduction technique allows us to visualize the high-dimensional data for analysis. 

In RAMPVIS consortium, we believe there are other developments that could be categorized into this approach as the integration of algorithmic tools is a common practice in VIS community although they do not explicitly describe their designs in such a manner. While our approach could potentially provide a data processing pipeline for other VA platforms to standardise the process stage.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Based on observations from the visualization supported by these integrated algorithmic tools, insightful analysis about the relationship between input and output spaces is achieved. Our approach supports the identification of which parameter settings generate more variations in its simulation and which settings generate similar outputs. These findings provide better configurations as well as indicating potential causal factors that are important to drive the changes in the output space.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In the current version of the developed system, we have not fully explored the algorithmic tools in an interactive manner although some patterns could be clearly spotted. Currently, we have not conducted a comprehensive study to select the most suitable tools for the task. We will investigate the possible bias which may be incurred due to the selection of different tools.

At the current stage, it is not a tight integration of algorithmic tools for the VA system. However, it has been proved to be a useful tool for prompt analysis even with this loose integration system. This is our next stage once these tools are properly integrated to the RAMP-VIS platform and it will work better with elegant interactions.

There are several reasons for the partial implementation:
(1) there are many different combinations of methods that we could use. We have implemented several classical methods, for example, K-mean and DBScan for clustering, PCA, TSNE and UMAP for dimensional reduction, and regression models for emulators. While it will take more time to integrate them into the platform.
(2) we have 8 ageing groups as well as simulated curves with various attributes, e.g., hospitalisation, exposures, infections, ICU usage and death toll etc. A more developed user interaction process is needed so that the users will not lose their focus when they have so many options to select.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`First, we will improve our system in a more interactive manner. This could further help us to understand detailed and subtle patterns in both the input and the output spaces as well as their mapping relationship. We will provide a holistic embedding space so that users could find out how clustered outputs of each configuration setting distribute on the holistic view of the simulated data. Second, we will investigate what clustering algorithms and dimensional reduction methods are more suitable for the analysis. Finally, these will be implemented into the VA platform that our ensemble vis team is developing to enhance the uncertainty and sensitivity analysis of the models.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Hui Fang, Alma Rahat, Cagatay Turkay, Franck Vidal, Rita Borgo, Shaunave Santhirasekaran
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[1] Tam, Kwok-Leung, Fang, H., Aubrey, Andrew, Grant, P. W., Rosin, Paul L., Marshall, Daniel and Chen, M. (2011). Visualization of time-series data in parameter space for understanding facial dynamics. Computer Graphics Forum 30 (3), pp. 901-910.<br/>
https://doi.org/10.1111/j.1467-8659.2011.01939.x

[2] T. Spinner, U. Schlegel, H. Schäfer and M. El-Assady (2020). "explAIner: A Visual Analytics Framework for Interactive and Explainable Machine Learning," in IEEE Transactions on Visualization and Computer Graphics, vol. 26, no. 1, pp. 1064-1074, Jan. <br/>
https://doi.org/10.1109/TVCG.2019.2934629.

[3] G. K. L. Tam, V. Kothari and M. Chen, (2017). "An Analysis of Machine- and Human-Analytics in Classification," in IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 71-80, Jan. 2017, <br/>
https://doi.org/10.1109/TVCG.2016.2598829.

[4] Slingsby, A. , Hyde, J. and Turkay, C.  (2019). Visual Analysis of Reactionary Train Delay from an Agent-Based Model. Poster presented at the EuroVis 2019, 3-7 Jun 2019, Porto, Portugal. <br/>
https://doi.org/10.2312/eurp.20191153

[5] Covid-19 EERA model (2021).<br/>https://scottishcovidresponse.github.io/Covid19_EERAModel/site/model_documentation.html.

[6] Wenskovitch, John, et al. (2017). "Towards a systematic combination of dimension reduction and clustering in visual analytics." IEEE transactions on visualization and computer graphics 24.1: 131-141. <br/>
https://doi.org/10.1109/TVCG.2017.2745258.

[7] Packer, Eli, et al. (2013). "Visual analytics for spatial clustering: Using a heuristic approach for guided exploration." IEEE Transactions on Visualization and Computer Graphics 19.12 2179-2188. <br/>
https://doi.org/10.1109/TVCG.2013.224

[8] Ali, Mohammed, et al. (2019). "Clustering and classification for time series data in visual analytics: A survey." IEEE Access 7: 181314-181338. <br/>
https://doi.org/10.1109/ACCESS.2019.2958551.

[9] Gibson, F., Fabbro, R., Rahat, A., Torsney-Weir, T., Archambault, D., Gravenor, M. and Lucini, B., (2021). July. An interactive tool for enhancing hospital capacity predictions using an epidemiological model. In Proceedings of the Genetic and Evolutionary Computation Conference Companion (pp. 55-56). <br/>
https://doi.org/10.1145/3449726.3462738.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
