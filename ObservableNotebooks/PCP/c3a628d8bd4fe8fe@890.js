import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["ensemble_pcp_1@1.png",new URL("./files/6bc634bebadbcf71f5be865ac4981a7477be6b3166b16a6268b0a627e78b28b155f2b83970be2bdafa2bf52f388f9a74e7f4a085a6633e584b837661cc947fa4",import.meta.url)],["ensemble_pcp_2.png",new URL("./files/6f41b70af27e651a669a3a3efab8e1a27143ceb58e9d20848a9e6439bed75289a33ce0a22681ab6fd25d9f066f6450d83be2158b143e4e6e94dde63ac6a606c4",import.meta.url)],["pcpwithcardata@1.PNG",new URL("./files/d7c0ed83305f9cb4dc69fd3dc6bb0e4144c782fcded666c493723a1fdcc62fdfc016744de50d5cffad0447f25d11dbe3cd608958648e91aac648e667a1a59d8f",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Parallel Coordinates Plots`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/c3a628d8bd4fe8fe">https://observablehq.com/d/c3a628d8bd4fe8fe</a></pre>`;

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
    * interactively compare models with **different input, output and configurations**
    * **identify error and uncertainty** in the data and adjust the model accordingly
    
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

## 3. Parallel Coordinates Plots`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Parallel Coordinate Plots (PCPs) introduced by [Inselberg et al. (1990)](https://ieeexplore.ieee.org/document/146402) is one of the most useful techniques for displaying large multivariate datasets. PCPs provide a graphical representation of relationships between data variables by connecting polylines that represent a data record, through the parallel axes representing variables and their ranges. In practice, a PCP design can display high-dimensional data with up to 10-15 dimensions, as each axis is visually separated [(Kosara et al., 2006)](https://ieeexplore.ieee.org/abstract/document/1634321).

PCPs allow us to present parameter space and variations. Implementation of the interaction provides the parameter space analysis and comprehension of complex layers in the multivariate data. The use of brushing and interaction enables users to reveal relationships and tendencies between both adjacent and non-adjacent axes.  
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Parallel Coordinate Plot (PCP) introduced by [Inselberg et al. (1990)](https://ieeexplore.ieee.org/document/146402) is a visual design showing multidimensional relations by using parallel axes.

A nice interactive implementation is available in the _Tour Through the Visualization Zoo_ conducted by Jeff Heer and colleagues. They use [Parallel Coordinates of Automobile Data](https://homes.cs.washington.edu/~jheer/files/zoo/ex/stats/parallel.html) to demonstrate the technique.

Surveys on PCP design focus on evaluation and categorization of PCP studies [(Johansson et al., 2015)](https://ieeexplore.ieee.org/abstract/document/7192677?casa_token=UPXK5vRXQq0AAAAA:3JU9blB00XcL7byMiewoG5H-g0PUY_wgasxYNz-TonjZWx8zrkfviMbRSYpnywNe55WmhA) and cover geometric models and reviews methods for constructing and understanding PCPs [(Heinrich et al., 2013)](https://diglib.eg.org/handle/10.2312/conf.EG2013.stars.095-116).

Another survey by [Dasgupta et al. (2012)](https://www.semanticscholar.org/paper/Conceptualizing-Visual-Uncertainty-in-Parallel-Dasgupta-Chen/44cb1910be9b2362b2b6bb757f4eeab62546c177) searches for several sorts of ambiguity in parallel coordinate images and proposes a taxonomy for classifying them in order to reduce uncertainty. The goal was to detect different sources of uncertainty in the design and link them to different implications of uncertainty on the user by building a taxonomy.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[Siirtola et al. (2006)](https://academic.oup.com/iwc/article-abstract/18/6/1278/682231?redirectedFrom=fulltext) present an example parallel coordinate plot of the car data set which helps to understand the relationships between the different attributes of various models.

The PCP shows 9 attributes in the car dataset with their ranges (e.g. Cylinders min-max values [3-8]). Each edge represents a car entry that crosses each parallel axis to show the value on the axis for each entry. `
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("pcpwithcardata@1.PNG").image({width:600})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
PCP allows us to see the expected strong inverse relationships between weight and acceleration (ACCEL), and economy (MPG), and the number of cylinders (CYL). In order to find more, we need to highlight cars of a particular year or origin to see how they vary across multiple variable axes. PCPs also show 'signatures' across multiple variables but are highly dependent upon axis ordering. In this example, it is challenging to relate the number of cylinders (CYL) with acceleration here, but it would be straightforward to see the correlation if they were adjacent axes. Once again, this highlights the need for interaction. Displaying large datasets results in a cluttered PCP view by overlapping the edges. This challenge can be aided by the brushing feature which is based on selecting a certain area on an axis.
  This will update the PCP view and show only the selected edges across the axes on the PCP. For example, the work by Roberts et al. (2018) introduces smart brushing techniques that improve the standard interactive brushing of a PCP.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We developed a PCP that shows input parameters. The feature of brushing polylines by selecting a different range of parameters enables comparisons of parameters. This interactivity facilitates an effective discovery of the relationship between the parameters. Users can focus on a certain range of axes using brushing to see its connection with other parameters while reducing clutter and ambiguity in both input and output data. 

#### PCP for input parameters:`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("ensemble_pcp_1@1.png").image({width:800})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We have introduced a PCP view that shows the output data from the parameter set. The view also allows using the brushing feature. The PCP presents the median value as a focus for each age group in a parameter and median value of the output data as well as standard deviation. This enables users to reveal differences between age groups for the output data as well addressing the pattern in the output data. For example, the median value for group 6 indicates that the highest number of deaths among all age groups was recorded for this group.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The image with output parameters represents age group 3 with the median values of all age groups. The brushing technique is applied on the axis of the R_mean variable. Selected edges are shown in blue, while unselected edges remain grey. This selection shows that the number of deaths (D_mean) recorded in the [40-60] days range, R_mean value is in the [5000 -6000] range is close to 0, while the I_mean value is around 20,000. We can also interpret the selection as that hospitalization numbers (H_mean) are very high for the day range [40-60] as the values are very near with 1000 records to the max value of H_mean. Brushing can be applied to another axis or a larger area can be selected. This feature allows obtaining various results from PCP by comparing different fields.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### PCP for output parameters`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("ensemble_pcp_2.png").image({width:800})
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
md`PCP is the most suitable solution to display the given multivariate data that enables us to see trends and patterns easily while reducing the impact of overplotting and uncertainty in the data. We have introduced two PCP views exploring the input and output data since EMBs are also familiar with PCP design. Interactions enable filtering and comparison between parameter configurations and simulation output.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The large dataset size (256,000,000 data points) means we have to preprocess the data and produce a derived dataset, this may affect the accuracy of what we are trying to represent. Due to the large size of the data, ideal solutions were sought in order to pre-process the data and to increase the performance of parallel coordinates. Potential feedback from EMBs can help to improve the system further.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities

The size and complexity of the RAMPVIS data make it challenging to uncover trends and outliers in a confined space. In addition, the patterns are sometimes obscured by overlapping edges in a dense PCP. Future endeavours could develop new interactive methods to make it easier to explore the relationship between data dimensions and find trends in the data. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The entire EnsembleVis team.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Heer, J., Bostock, M., & Ogievetsky, V. (2010).**<br/>
_A tour through the visualization zoo._<br/>
Communications of the ACM, 53(6), 59-67.<br/>
https://homes.cs.washington.edu/~jheer/files/zoo/

**Heinrich, J. & Weiskopf, D. (2013).**<br/>
_Many-to-many geographically-embedded flow visualisation: An evaluation._<br/>
IEEE Transactions on Visualization and Computer Graphics, 23(1).
https://doi.org/10.2312/conf/EG2013/stars/095-116

**Inselberg, A., & Dimsdale, B (1990).**<br/>
_Parallel coordinates: a tool for visualizing multi-dimensional geometry._<br/>
In Proceedings of the First IEEE Conference on Visualization: Visualization90 (pp. 361-378)
https://doi.org/10.1109/VISUAL.1990.146402

**Johansson, J. & Forsell, C. (2015).**<br/>
_Evaluation of parallel coordinates: Overview, categorization and guidelines for future research._<br/>
IEEE Transactions on Visualization and Computer Graphics, 22(1), 579-588.
https://doi.org/10.1109/TVCG.2015.2466992

**Kosora, R., Bendix, F., & Hauser, H. (2006).**<br/>
_Parallel Sets: interactive exploration and visual analysis of categorical data._<br/>
IEEE Transactions on Visualization and Computer Graphics, 12(4), 558 - 568.<br/>
https://doi.org/10.1109/TVCG.2006.76

**Roberts, R. C. & Laramee, R. S. & Smith, Gary A. & Brookes, P. & D'Cruze, T (2018).**<br/>
Smart Brushing for Parallel Coordinates._<br/>
IEEE Transactions on Visualization and Computer Graphics, 25(3), 1575 - 1590.
https://doi.org/10.1109/TVCG.2018.2808969

**Siirtola, H. & Räihä, K. (2006).**<br/>
_Interacting with parallel coordinates._<br/>
Interacting with Computers, 18(6), 1278-1309.
https://doi.org/10.1016/j.intcom.2006.03.006`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

  ### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
