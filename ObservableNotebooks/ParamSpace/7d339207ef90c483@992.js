import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["posterior_parameters.csv",new URL("./files/eb7f45c3c12b5d7c19537c07093cfab8f72b97a343a9bef5c3ffe9404706094b7bb2de39e2dfcbc6a667c75cc528dcae1a4ab4591a802375b28c64c715ada24a",import.meta.url)],["overview.png",new URL("./files/47f4c33a7f8e3ffab8e9eb535c2044c900184ea2c78083754dc18970cf27c38bacf0c828ba3ce0a780e570a1e75e5b2197051880db6d432d716d73472ad03420",import.meta.url)],["multi-pcp.png",new URL("./files/4c12689a2b637fa9c48485fe4c3fe800bbc75bcf4c31e7d8888286dd2100dca0f39abb11fbc4d1ebc28cac95dbd5a5cbbf71034717c0f065dd304e463338f203",import.meta.url)],["optim.png",new URL("./files/9ca7e7e23cd9e91b6e57177a6c9832232e992721b040e21173776787e3a0eec41c6c8a1d0fd72aceaa75bceb2830b6885afd73e1e384dfad593ccda419baead1",import.meta.url)],["nimbus.png",new URL("./files/f9c83c73f20e8d094be1e8e1a4126b2afadd25d954c2f147029daf6468d2bc1dd432be574200a194e14a7708398771db5ee6492af9fcaf264d9f4554012cec13",import.meta.url)],["output_prediction_full_11-09-2020_18-57-41.short.txt",new URL("./files/8dfe98f6334119ebb63fc626de0f464677af8ac6b0c85276303a50e616c975bc1e812c066f49c3546bcfb5cdeb35ab21edcd4a603975b97a7ecfe20ad69255cb",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/7d339207ef90c483">https://observablehq.com/d/7d339207ef90c483</a></pre>`;

  } else {
    return htl.html`<pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is a live version of the Observable Notebook supplement for the RAMPVIS PhilTransA submission titled </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</pre>`;
  }
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Linked parallel coordinates for visual parameter space exploration`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 1. TASK & USERS - User Story`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`* As **an epidemiological model builder**
* I would like to:
    * understand which parameters have the most/least effect on model outcomes, esp hospitalizations and deaths
    * understand which parameters have different effects on different outcomes (e.g. which parameters are more important for hospitalizations vs deaths)
    * how much of an effect does the stochasticity aspect produce
    * what inputs will fit the model to observed data?
    * Which inputs lead to certain outcomes (e.g. hospitalizations over x)
* So that I can *(3 different user stories)*:
    1. Understand which parameters are the most important to adjust to try and match observed data
    2. Understand which parts of the model are responsible for which output metrics
    3. Understand which parameters (and ranges thereof) can I change to affect a desired change
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `Data is technically the model itself, which can be seen as a function of input parameters to output metrics. The model is a compartmental model. The representation of the model that we have right now is a table of samples. There is one sample for each:
* day (200 days)
* initial parameter configuration (~130)
* stochastic variation (~100)

The **inputs** are 14 scalar parameters controlling, among other aspects, the initial state of the various compartments in the model.

The **outputs** are the final states of the various compartments, e.g. number in hospital or infected.

Outputs can be aggregated over the days and stochastic variation to essentially produce a ${tex `R^n \rightarrow R^m`} mapping.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## File layout

Input parameters are stored in a single file called \`posterior_parameters.csv\`. Each parameter run is stored in a separate directory called \`output_row_n/output_prediction_full_<datetime>.txt\`, where n refers to the corresponding row in the input parameter file. Both files are CSV files. Thus the file layout is:

\`\`\`
├── posterior_parameters.csv
├── output_row_0
│   ├── output_prediction_full_11-09-2020_18-57-41.txt
│   ├── output_prediction_simu_11-09-2020_18-57-41.txt
│   └── run_11-09-2020_18-57-41.log
├── output_row_1
│   ├── output_prediction_full_11-09-2020_18-58-05.txt
│   ├── output_prediction_simu_11-09-2020_18-58-05.txt
│   └── run_11-09-2020_18-58-05.log
├── output_row_2
│   ├── output_prediction_full_11-09-2020_19-01-40.txt
│   ├── output_prediction_simu_11-09-2020_19-01-40.txt
│   └── run_11-09-2020_19-01-40.log
...
\`\`\``
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Input file`
)});
  main.variable(observer("inputs")).define("inputs", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("posterior_parameters.csv").csv({typed: true})
)});
  main.variable(observer()).define(["Inputs","inputs"], function(Inputs,inputs){return(
Inputs.table(inputs)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Output file

There is one of these per row (run) in the input parameters file`
)});
  main.variable(observer("output")).define("output", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("output_prediction_full_11-09-2020_18-57-41.short.txt").csv({typed:true})
)});
  main.variable(observer()).define(["Inputs","output"], function(Inputs,output){return(
Inputs.table(output)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Linked parallel coordinates for parameter space analysis uses two separate parallel coordinates views: one to show the distribution of input parameters and one to show the distribution of output metrics. These two views are linked so that filtering for specific parameter sets in one view shows the corresponding values in the other view. 

The general goal of parameter space analysis seeks to understand the relationship between input parameters (aka independent variables) and output metrics (aka dependent variables) in a model. Often the goal is to find a specific output value from a simulation (optimization, history matching, etc). In addition, there are often multiple, competing objectives to optimise. Another task of parameter space analysis is understanding this tradeoff. Models do not explicitly have to be traditional simulations. Here the term *model* includes traditional simulations, performance metrics based on adjusting meta-parameters, statistical regression models, etc.

Linked parallel coordinates seeks to accomplish the goals of parameter space analysis through interactive selection filters. Users can adjust their selection of the input parameters to see which output metrics are produced or filter in the output metrics to understand what input combinations will possibly lead to the desired effect.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`(Visual) parameter space analysis is closely related to the concept of response surface methodology which dates back to [Box and Wilson (1951)](https://doi.org/10.1111/j.2517-6161.1951.tb00067.x). This methodology focused on exploring the relationship between input and output parameters. Visual parameter space analysis uses interactive visualization (rather than statistical measures) as that primary mode of explaining a complex model to a user.

This was later extended to incorporate the idea of emulators as a way to quickly estimate results from a computer simulation ([Sacks et al. (1989)](https://doi.org/10.1214/ss/1177012413)). The original concept of emulators was designed around experiments typically run on super computers. Each run of a simulation is expensive in terms of money and time but statistical analysis of simulation runs requires many samples. The idea of emulators was introduced to address this issue. An emulator, essentially a regression model, would be built on a small number of carefully chosen samples (e.g. space-filling design) of the simulation. Statistical analysis is then performed using the emulator as a stand-in for the full simulation model. If needed, additional samples can be identified and run in the complex simulation. 

[Sedlmair et al. (2014)](https://doi.org/10.1109/TVCG.2014.2346321) organized existing solutions and developed a taxonomy for visual parameter space analysis.

Visual parameter space analysis has a number of challenges:
* multi-dimensional input space
* multiple outputs from the simulation
* complex (non-linear), and often slow-running, simulation model
* representing multi- and high-dimensional spaces on screen`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`
An early example of this in the visualization community is from [Matkovic et al. (2008)](https://doi.org/10.1109/tvcg.2008.145). This work used the idea of *coordinated multiple views* between separate plots of the input and output dimensions. However, these used different visual encodings for the input and output space (see 
[Berger and Piringer (2010)](https://doi.org/10.1109/VAST.2010.5651694),
[Matkovic et al. (2009)](https://doi.org/10.1109/TVCG.2009.155),
[Zhao et al. (2017)](https://doi.org/10.1109/tvcg.2017.2744738)
) or only viewed one space at a time (see, e.g., 
[Konyha et al. (2006)](https://doi.org/10.1109/TVCG.2006.99),
[Demir and Westermann (2013)](https://doi.org/10.1111/cgf.12089),
[Torsney-Weir, Sedlmair, Moeller (2017)](https://doi.org/10.1111/cgf.13177),
[Torsney-Weir et al. (2018)](https://doi.org/10.1111/cgf.13415)
). Using the same visual encoding should, theoretically, ease the training process due to the use of small multiples [Munzner (2014)](https://www.routledge.com/Visualization-Analysis-and-Design/Munzner/p/book/9781466508910)
This was employed by [Berger et al. (2011)](https://doi.org/10.1111/j.1467-8659.2011.01940.x) who used two sets of parallel coordinates: one for the input space and one for the output space (panels b and f in the image below).

![multi-pcp.png](${await FileAttachment("multi-pcp.png").url()})`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`**[Cajot et al. (2019)](https://doi.org/10.3389/fict.2018.00032)** use linked parallel coordinates to understand how adjusting the range of inputs would influence possible solutions. In this case, the selection is only possible in one direction, from selecting input ranges to viewing possible outputs.![optim.png](${await FileAttachment("optim.png").url()})`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`**www-nimbus** uses parallel coordinates to communicate possible solutions in a multi-objective problem (as is done in the VPSA case as well) but only looks at the output space.

demo: https://wwwnimbus.it.jyu.fi/

paper: [Miettinen and Maekelae (2000)](https://doi.org/10.1016/S0305-0548(99%2900115-X)

![nimbus.png](${await FileAttachment("nimbus.png").url()})`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`The linked parallel coordinates view is shown here. The top PCP shows input parameter combinations while the bottom one shows output parameter configurations. To **show which outputs correspond to which inputs**, modellers would select particular combinations of input parameters in the top and view which lines are highlighted in the lower plot. 

![overview.png](${await FileAttachment("overview.png").url()})

Correspondingly, the modeller can filter in the lower, output parameter plot and see which combinations of input parameters will lead to the selected set of outputs. This helps them to understand **which parts of the model and which input paramter combinations will lead to a desired outcome**.

By filtering in on a particular set of output runs, the modeller could understand, for each input parameter, what are the posible ranges that could lead to that outcome. Parameters with a narrow range mean that the output is very sensitive to those parameters. Thus, to **affect a desired outcome** these particular parameters need to be adjusted.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.0 Reflective Discussion  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Visual parameter space analysis requires the development of multiple, integrated, linked views of a dataset. Datasets may be large and thus the filtering and other interactions must be performant. In addition, visualization techniques are ideally augmented by statistical modelling such as emulation, sensitivity analysis, correlation, and dimension reduction. Effective combinations of these techniques are user- and model-specific. Because of this, the loop from idea to development to feedback back to new ideas is very long and requires extensive development time (see neg #3). `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In terms of the design process, joining in to the weekly meetings of an
Uncertainty Quantification (UQ) group within the SCRC consortium that consists
of a mix of modellers and uncertainty quantification researchers, has been
instrumental in developing an understanding of what is needed within the
applied context and in informing our choice of using linked parallel
coordinates for visual parameter space exploration. Within the initial weekly
meetings, we mostly listened silently in the background -- which we are
referring to as "lurking" in meetings in another Notebook -- to get a feel for
the domain and problem specification before recommending any solutions. In
order to build trust and a mutual understanding and to avoid any
misunderstandings, we explained that visualisation researchers will remain
silent for a while and only listen. The other UQ group members referred to some
of us as "visualisation spies" in a playful way to recognise that we are
joining the calls but mostly remaining silent and observing. This silent phase
transformed into a more engaged and active participation from the visualisation
researchers as we build a better understanding and develop a number of ideas
joining the calls but mostly remaining silent and observing. This silent phase
transformed into a more engaged and active participation from the visualisation
researchers as we build a better understanding and develop a number of ideas
and prototypes. The learnings from the silent listening phase enabled us to
introduce our designs in a much more informed manner by using a vocabulary that
will resonate with the rest of the team, underpinning a healthier dialogue
within the collaboration.
                                      `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Knowledge of the visual parameter space framework helped greatly in terms of understanding which mid-level tasks would be relevant to the high-level task of "understanding the model." (see pos #1) It encouraged the identification of input (independent) and output (dependent) parameters. In addition, it provided some common terminology and understanding of available statistical techniques. Some good examples are "space filling design" for sampling and the use of "emulators" which is a model that can be quickly queried to get an estimate of the more complex model. 

The advantage of using linked parallel coordinates views is that software and knowledge to create and link the views is readily available as opposed to more novel techniques, like slices ([Torsney-Weir, Sedlmair, Moeller](https://doi.org/10.1111/cgf.13177)), which are much less common and not part of the collective intelligence of the visualization community. Thus shortening developer and tutorial time.

Different users may prefer purely visual/interactive or purely statistical techniques. A mismatch of user and technique can greatly affect user engagement (see neg #1). In addition, these techniques (statistical vs visual) seemed to be viewed as separate and not integral in our case.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`1. Visual parameter space analysis was a good reference for mid-level tasks and terminology
2. Parallel coordinates and interactive brushing and linking (specific implementation of VPSA) are commonly implemented in the visualization community, thus required little instruction in terms of implementation
3. Interactive linking allows a single tool to be used for different tasks (multi-objective optimization, sensitivity analysis, finding inputs that generate a particular output)

With a single set of 2 plots we could address the main 3 user stories above.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`1. User engagement
2. Effective layout and coordination of multiple plots is not simple to define
3. Development time made it difficult to develop alternative prototypes and incorporate statistical techniques
4. Workflow of the tool was not clear. Using a more general interactive technique meant it was not obvious how to, e.g. perform sensitivity analysis, using the tool. *Yes, this is basically the opposite of what I put for positive #3 above but this the tradeoff between general and specific*`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The biggest problem with techniques like these is that they are great for initially defining the project, finding what's important, etc but they lack specific guidance about what visualization techniques and interactions will be most effective for which mid-level tasks. 

#### Future developments:
* more linking of tasks to techniques
* studying how interaction can support analysis tasks (i.e. not just visualization techniques)
* rapid experimentation with novel interaction and visualization methods (e.g. slicing)

Examples of these tools are often complex and rarely available online which makes dissemination difficult`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Tom Torsney-Weir, Rita Borgo, Cagatay Turkay, Hui Fang, Qiru Wang, Elif Firat, Robert Laramee`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Box, G.E.P. and Wilson, K.B. (1951)**.<br/>
*On the Experimental Attainment of Optimum Conditions*. <br/>
Journal of the Royal Statistical Society: Series B (Methodological), 13, 1-38<br/>
https://doi.org/10.1111/j.2517-6161.1951.tb00067.x

**Sacks, J., Welch, W.J., Mitchell, T.J., & Wynn H.P. (1989)**.<br/>
*Design and Analysis of Computer Experiments*.<br/>
Statistical Science, 4(4), 409-423.<br/>
https://doi.org/10.1214/ss/1177012413

**Konyha, Z., Matkovic, K., Gracanin, D., Jelovic, M. & Hauser, H. (2006)**.<br/>
*Interactive Visual Analysis of Families of Function Graphs*.<br/>
IEEE Transactions on Visualization and Computer Graphics, 12(6), 1373–1385.<br/>
https://doi.org/10.1109/TVCG.2006.99

**Matkovic, K., Gracanin, D., Jelovic, M., & Hauser H. (2008)**.<br/>
*Interactive Visual Steering - Rapid Visual Prototyping of a Common Rail Injection System*.<br/>
IEEE Transactions on Visualization and Computer Graphics, 14(6), 1699-1706.<br/>
https://doi.org/10.1109/TVCG.2008.145

**Matkovic, K., Gracanin, D., Klarin, B., & Hauser, H. (2009)**.<br/>
*Interactive Visual Analysis of Complex Scientific Data as Families of Data Surfaces*.<br/> 
IEEE Transactions on Visualization and Computer Graphics, 15(6), 1351–1358.<br/>
https://doi.org/10.1109/tvcg.2009.155

**Berger, W. and Piringer, H. (2010)**.<br/>
*Interactive Visual Analysis of Multiobjective Optimizations*.<br/> 
In 2010 IEEE Symposium on Visual Analytics Science and Technology.<br/>
https://doi.org/10.1109/vast.2010.5651694.

**Berger, W., Piringer, H., Filzmoser, P., & Gröller, E. (2011)**.<br/>
*Uncertainty-Aware Exploration of Continuous Parameter Spaces Using Multivariate Prediction*.<br/>
Computer Graphics Forum, 30(3) 911–920.<br/>
https://doi.org/10.1111/j.1467-8659.2011.01940.x

**Demir, I. & Westermann, R. (2013)**.<br/>
*Progressive High-Quality Response Surfaces for Visually Guided Sensitivity Analysis*.<br/>
Computer Graphics Forum, 32(3), 21–30.<br/>
https://doi.org/10.1111/cgf.12089

**Sedlmair, M., Heinzl, C., Bruckner, S., Piringer, H., Möller, T. (2014)**.<br/>
*Visual Parameter Space Analysis: A Conceptual Framework*.<br/>
 IEEE Transactions on Visualization and Computer Graphics, 20(12), 2161-2170.<br/>
 https://doi.org/10.1109/TVCG.2014.2346321

**Munzner, T. (2014)**.<br/>
*Visualization Analysis and Design*.<br/>
A K Peters/CRC Press.

**Torsney-Weir, T., Sedlmair, M.,  Möller, T. (2017)**.<br/>
*Sliceplorer: 1D slices for multi-dimensional continuous functions*.<br/>
Computer Graphics Forum, 36(3), 167-177.<br/>
https://doi.org/10.1111/cgf.13177

**Zhao, X., Wu, Y., Cui, W., Du, X., Chen, Y., Wang, Y., Lee, D.L., & Qu, H. (2017)**.<br/>
*SkyLens: Visual Analysis of Skyline on Multi-Dimensional Data*.<br/>
IEEE Transactions on Visualization and Computer Graphics, 24(1), 246-255.<br/>
https://doi.org/10.1109/tvcg.2017.2744738

Torsney-Weir, T., Möller, T., Sedlmair, M., & Kirby, R.M. (2018)**.<br/>
*Hypersliceplorer: Interactive Visualization of Shapes in Multiple Dimensions*.<br/>
Computer Graphics Forum, 37(3), 229-240.<br/>
https://doi.org/10.1111/cgf.13415
`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
