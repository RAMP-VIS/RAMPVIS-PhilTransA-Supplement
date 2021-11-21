import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["image.png",new URL("./files/7329ad507dee462606413b36373817ab6d71a96a0e0d300cc1d9c92678ec54b58802bc6f85c70882b9c23f34aca2bfc87c19963a3df5afd64687c099713759f3",import.meta.url)],["image@1.png",new URL("./files/5ec074c1c72012aef8983bcefebeab2f061315b759373804404eff903cbe2d62c2acb2a5c7d8ba6a6a38fcf996c565d332e545332cee62f8ce1d585417231a6e",import.meta.url)],["image@2.png",new URL("./files/91ffacc44937858b973872056903171ce0f58c1fe80be63a7f07593b24db271507d7f233efed07ff3b75cac7bd64df3a5d49de32c21c78d1117ba1eb43cde862",import.meta.url)],["image@3.png",new URL("./files/bbdca12bd590e3cb11176f47df1cfc868e7a5ee38dab1a0f1206cf312da3267819150c396dac091ca57ce357eddc7aeba159fda61bed6626b2b201afa68114ad",import.meta.url)],["image@4.png",new URL("./files/b0c451e151ac620a945b34beb6f41d15d13dcfa6dce1c4e9821eb55671f17f2d977ad3a94c5f598e3ae2c0d6c5568008a79265566688a43e83df7f73f4f862af",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Visual Faceting & Sorting for Comparative Time Series Analysis`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/4aebb875cacaef3a">https://observablehq.com/d/4aebb875cacaef3a</a></pre>`;

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
md`- As an epidemiology **researcher/public health expert**
- I would like to:
  - identify regions that follow similar or different pandemic evolution trajectories 
  - reason about the underlying factors (demographic, behavioural) that might cause these similarities or differences observed
- so that I can **explain the differences within the progression of the pandemic in response to the interventions that took place and inform the development of future interventions** `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- As per the core disease indicators, we have daily time-series covering over **1.5 years** for **149 Upper Tier Local Authorities** (UTLA) and for each UTLA, we have 6 time-series on:
  - *cumVaccination* - People who have received vaccinations, by vaccination date, 
  - *CompleteCoverageByVaccinationDatePercentage* - Cumulative percentage of adult population who have received vaccinations, by vaccination date, 
  - *cumVaccinesGivenByPublishDate* - Cumulative number of people who have received vaccinations, by publish date, 
  - *newCasesByPublishDate* - New Daily COVID-19 Cases, by publish date, 
  - *newDeaths28DaysByDeathDate* - New Daily Deaths within 28 Days from a positive COVID-19 test, by death date
  - *newHospitalisations* - New Daily Hospitalisations
- As **Underlying factors** -- *181 wider determinants of health* per each UTLA from the Public Health Outcomes Framework (https://fingertips.phe.org.uk/profile/public-health-outcomes-framework) , some examples of relevance could be:
  - Inequality in life expectancy at birth
  - Healthy life expectancy at birth
  - Deprivation score (IMD 2019)

The data sources and the data curation process is described here: https://github.com/ScottishCovidResponse/scrc-vis-analytical/tree/master/ClusteringAndImpactAnalysis/data`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Usual approaches to analysing and comparing many time series are to condense the complex similarities and differences between pairs of time series into single numbers. In fact, this strategy extends beyond time series to anytime when similarity relationships are sought between many data points with complex characteristics (e.g., gene expression profiles, brain white matter tracts). Focusing on such simplified similarity measures rather than on the meta-data describing the objects that are compared is an effective abstraction mechanism when we compare thousands of objects or more as it helps reduce the problem. It helps us focus on the clustering relationships because we cannot focus on individual point descriptions anyway.

Covid related analyses however are often targeting fewer data-points, such as hundreds of countries worldwide or the 149 upper-tier local authorities in the UK. On the other hand the properties of individual data points, such as periods and amplitudes of extreme epidemiological manifestations, the specific nature and duration of lockdown and other mitigation strategies, and other demographic and behavioral indicators are highly relevant and likely to exhibit intricate interdependencies. So, a visual approach that highlights overview similarities between datapoints while providing access to datapoint detail was needed. 

Our approach - **visual faceting & sorting** -- is a method of comparing several time-series through the (computational) use of data associated with the individual time-series as a means of grouping and conditioning the data interactively to observe similarities and differences within classes of and individual time-series*. We exemplify how this approach operates within the context of this study in Section-6 of this notebook.

**Conceptual reusable idea:** When the number of data points to analyze is manageable but detail about data point characteristics are important we can assign display space to each data point and organize the points so as to reflect similarities.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Visual analytics researchers have a general intuition that comparisons - exploration of similarities and differences - are an important requirement in data analyses. Gleicher's work on supporting comparisons evidences this [3]. One general recipe to tackle this when many datapoints (thousands and more) need to be considered at once is to: (1) approximate similarities/differences between pairs of data points with single numbers; and (2) map those pairwise similarities visually using one of a few methods (e.g., 2D projections achieved by various means; adjecency matrices; agglomerative clusterings). Such approaches underlie genomic analyses that seek groups of genes that exhibit similar regulation patterns [9], documents that cover similar topics [10], or white matter tracts that connect similar brain regions [1].  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`Other visualisation researchers have used similarity measures and underlying faceting structures to organise time-series in composite visualisations to reveal similarities within and across clusters. One example is the CorrelatedMultiples technique from Xiaotong et al. [2]. Following is a screenshot that shows: "*The Dow Jones Industrial Average (DJIA) from 1897 to 2011. Left: rendered as sequential small multiples, ordered by year. Right: CorrelatedMultiples, in a spatially coherent layout based on similarity. Charts of the years 2008 and 1920 are similar and are placed close to each other at the top of CorrelatedMultiples (right), but are far apart in the sequential small multiples (left).*" as described in the paper [2].



<img src="${await FileAttachment(
  "image.png"
).url()}" height=250/>

Similarity sorting has also been used to organise time series depicting trends/changes across multiple temporal variables and to reveal temporally correlated/(dis)similar time-series. Such a use can be seen in Turkay et al. in their Attribute Signatures technique where they use sortable time-series visualisations to depict temporal similarities within over 50 variables [4]:


<img src="${await FileAttachment(
  "image@1.png"
).url()}" height=450/>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In the following, we walk through a protocol to generate *visual faceting & sorting* alternatives.

The Python code and some narrative that outlines the analysis in the following can be found on this Github repository -- [https://github.com/ScottishCovidResponse/scrc-vis-analytical/tree/master/ClusteringAndImpactAnalysis](https://github.com/ScottishCovidResponse/scrc-vis-analytical/tree/master/ClusteringAndImpactAnalysis)`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`### Faceting routine - 1: Raw data similarities to facets

The first routine is to *facet by time-series data similarity*, and then visualise the raw data and the underlying factor distributions within the facets. 

In the following, we first cluster one of the time-series variables -- *newDeaths28DaysByDeathDate*. We use an algorithm called KShape [5] using Dynamic time warping based distance by also setting a parameter that determines the number of clusters -- we set this to *k=5* in this case. 

(**NB:** Note that after a trial with the actual numbers, we are using here population normalised values for the time series, i.e., when we refer to *newDeaths28DaysByDeathDate*, we refer to its population normalised counterpart, i.e., *newDeaths28DaysByDeathDate for each 100k people*)

We then facet the original data by these derived clusters, and use an heatmap based time-series visualisation approach (for an historical account of this widely used visualisation approach see the paper by Wilkinson & Friendly [8]) to visualise all the corresponding time-series under each group. 

We can observe here that there are particular features within the time-series that lead to the different facets. A number of observations could be made here following an inspection of these facets:
- Cluster-0 (left-most in the figure) is a group of UTLAs where the numbers have not been particularly pronounced
- Cluster-1, the largest of the groups is the most typical 2-peak UTLAs with a much more pronounced 2nd peak
- While 4 (right-most) has also two peak periods, the latter peak has been significantly wider, i.e., taking a much longer time
- Cluster-3 stands out as the most badly hit with both the first and second peak periods having high values. However, a number of outliers, such as Warwickshire, Richmond-Upon-Thames, that have visibly different patterns, raise some question marks on the overall reading of this cluster, perhaps requiring us a re-run of the clustering approach with different parameters or different distance measures.
- The UTLAs in Cluster-2 have a visible two-mode structure within the 2nd wave of the pandemic

<img src="${await FileAttachment(
  "image@2.png"
).url()}" height=450/>

As a further key inspection to this faceting operation, we also explore whether there are any explanatory underlying factor that led to this clustering here. As an example of this operation, we visualise the distribution of the "*Deprivation score (IMD 2019)*" values, again faceted with the clustering we produced. We choose the deprivation score here due to its composite nature that tries to capture many aspects of quality of life within the UK population and due to its demonstrated relation to COVID-19 outcomes [6]. 

The goal here is to check whether we can see any distinction within the deprivation score distributions of these five clusters. We use a strip plot here -- a 1-dimensional visualisation that has been widely used as a statistical graphic to show the distribution of a single variable and sometimes with inherent faceting, some early examples used by Tufte []. Although there are some differences within the facets' deprivation score distributions, the strip plot reveals no clear distinction between these. This intermediate result here leads us to the second route into faceting.`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`### Faceting routine - 2: Underlying factor similarities to facets
The second routine is to facet by underlying factor similarity, and then visualise the raw data and the underlying factor distributions within the facets.

The gist of this approach is to start the analysis/clustering by an underlying factor that we expect to have an impact on the observed trends/patterns, and visually explore whether the facets indeed reveal any pronounced structures.

Following on from the analysis above, we perform our clustering this time using the "*Deprivation score (IMD 2019)*" values. The strip plot in the following figure conveniently reveals five clusters with clear boundaries which we can use as a "*least deprived to most deprived ordering*" (clusters 0, 3, 1, 2, 4).

We then visualise the raw time-series data depicting the *newDeaths28DaysByDeathDate* values. This time we **facet** the time-series by the five clusters coming from the deprivation scores, and **order** the facets from the least to the most deprived as seen here.  Some observations:

- The more deprived areas seem to have longer first and second peaks. In particular, the most deprived UTLAs have faced a much more prolonged second peak, almost to an extent that there has been little gap between the two peaks, e.g., Blackpool or Knowsley that has seen high numbers apart from a short period over the summer months of 2020.
- The least deprived group have had both the waves of the pandemic relatively lightly compared to the other clusters.
- While the above observations could be made, it is also clear that there are significant variations within the clusters and it is hard to explain all the observed patterns by looking at the faceting based on a single underlying factor indicator. Therefore further investigation and further corrections are indeed necessary.

<img src="${await FileAttachment(
  "image@3.png"
).url()}" height=450/>
`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`## Further visual explorations

The above examples made use of a heat-map style representations to show time-series data. This allowed time series to be compacted into single lines and stacked into space-efficient overview visualizations. On the other hand, the limited space allocated to individual regions meant limited data - in this case just one time-series - could be shown for each region. This restricts the visual inferences that one can make to this single type of data.

As such, we considered visual faceting approaches that assign more space to each region and allow more complexity to be shown for each region. Such complexity could for example include combinations of multiple, overlaid time series (e.g., cases, hospitalisations, and vaccination efforts) and temporal annotations to mark lockdown events.

Liu et al.'s CorrelatedMultiples [2], exemplified in the images in section 5, is relevant as it could sort and facet rectangular glyphs that would be sufficiently large to show the complexity we wanted. Unfortunately, we found no ready implementation of it and lacked the resources to replicate it as detailed in Liu et al's report. Instead we built our own version: similarity measures (already described) can be used to produce an agglomerative clustering of regions; this can then be used to organize regions so that regions with similar behaviour are close together; a constant (relatively) large rectangular regions is given to each region to allow detailed data to be shown. This is essentially the same idea from [2] but with a different layout approach (based on agglomerative clustering).

In the following, we show an example output based on an alternative data set, sourced from Our World in Data ([https://ourworldindata.org/coronavirus](https://ourworldindata.org/coronavirus)). We used the approach described above to construct line-glyphs of disease progression for each country and organize them based on their Euclidean-distance similarities. It's easy to notice that countries with similar progression are placed close together. While in this prototype the data representations are still simple - a single line graph corresponding to a single time-series - the glyphs afford sufficient space for significantly more complex depictions for each region.


<img src="${await FileAttachment(
  "image@4.png"
).url()}" height=450/>


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
md`- The visual conditioning approach lends itself to the specification of grouping/sorting criteria based on combinations of meta-data features. Given that we did not have access to combinations of meta-data conditions that epidemiologist would immediately find useful, we needed to implement features to specify conditions visually and interactively which created some additional development requirements not addressable by static visualisations.
- Not having access to epidemiologists routinely meant that we had to build on a few limited/occasional interactions that we had and had to rely on our existing knowledge and experience to make design decisions
- The idiom seems highly suited to COVID related analyses due to the complexities of the data points themselves and their limited number. On the negative side the idiom is somewhat poorly explored in existing literature and there isn't sufficient guidance and support for its deployment (detailed below).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- The idiom gives control over both grouping criteria (i.e., what dimensions or characteristics of a data point to use to compute similarity; what computational similarity measures to rely on) and what ought to be shown for each data point (e.g., dimensions, characteristics) and how (e.g. visual encoding, normalization). Thinking of these separately and how to combine them is potentially powerful. If the two are the same,  then the analyst is essentially relying on the computer to reveal similarity relationships that may be interesting to dig into further. If they are different then the analyst could use this as a mechanism to compare different ways of judging similarity. For example, an analyst
  could group regions by similarity in disease progression and manifestation (i.e. time series) but visually show or emphasize health indicators. The combination may allow the analyst to spot regions that have similar disease progression (via spatial grouping) but different health indicators (via visual similarity). The former workflow could be useful in more preliminary analyses while the latter in more advanced stages. 
- The ability to specify combinations of meta-data for grouping and sorting is effective to generate bespoke criteria aligned with the diverse needs of the application domain. Having full control over the faceting and sorting criteria enables the analyst to suggest and apply conditions that map to some underlying hypothesis/expectations on the phenomena, e.g., faceting the data by deprivation levels and exploring whether distinctive patterns within/across the facets could be observed
- Once the ordering/sorting mechanism is in place, one can incorporate any visualisation within them -- this makes the approach scalable and adaptable to different representations
- Relating individual level representations, e.g, a single heatmap of a time-series and group-level summaries, e.g., the collective heatmap of a facet, are important in understanding member-cluster associations
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- In the first phases of the pandemic, we were working with Health Board level Scotland data where regions showed relatively similar behaviour -- this meant that we had a small number of time-series with little variation within the patterns, this limited what is possible to observe visually with the technique -- if there are not many discernible patterns in the data, there is not much that visualisation can do.
- Lack of meta-data availability led us to different data sets (such as the Our World in Data dataset) where there are more features per time-series, and meant that our approach was not too successful with the Scottish data
- The idiom is not based on any well establish in the literature and support code/software doesn't exist. Spatially Correlated Small Multiples [2] comes close as a technique, however, The code for this is unavailable and its implementation from scratch is non-trivial.
  Moreover, a design space or implementation for interactions that would allow the method to be used in real, exploratory,
  iterative analyses (potentially as described above) doesn't exist. 
- ** The design/implementation/interaction space for a general system built around this idiom is rather larger **. Points of action that analysts may find useful can include: subset of datapoint characteristics to scaffold the grouping around and particular similarity measures to include (e.g. ..); actual approach of grouping data objects (e.g., spatially correlated small multiples; agglomerative embedding); subsets of datapoint characteristics to include in the visual representations and details of their visual representation (e.g., normalization, ordering, saliency of particular
  characteristics, etc.). ** Building a system that would allow all these points to be controlled interactively involves a significant software development effort** that could not be sustained given the voluntary nature of the team. The urgency of developing this quickly during the pandemic made it even less feasible. This **could be mitigated and the design space restricted by fixing in place design aspects based on informed choices ** (e.g., normalize all time series around their individual (rather than global) means; group regions by hospitalization and death progression alone). These choices would have needed to be informed by discussions and feedback with epidimiologists. The result would have
  been a system more limited in scope, targeted at the specific needs of one or a few epidimiologists. However, **lack of continuous access to epidemiologists throughout the process meant we had to build general / customizable solutions that could be quickly configured and demonstrated**.  
- Beyond lack of software implementations and guidance about the use of the idiom in real analytic settings, there are also questions about what types of analyses it is apropriate for. For example, we intially worked with 14 NHS authorities in Scotland. For this small dataset analyses could be done fully visually and the benefits of 
  laying out authorities spatially to capture similarity are unclear and perhaps even detrimental over a geographic
  one. So, there are open questions about the lower and upper bounds where this idiom applies.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- Aim for rich meta-data 
- Aim for flexible layouts that are capable of displaying both individual-level data as well as group-level data summaries 
- Develop libraries that would allow this idiom to be easily deployed in practice; explore design space of interactions and visual analytic approaches that could work in tandem with the idiom; explore the use of the idiom in real analysis settings - how is it used, what analyses does it support, what are the scenarios that it maps to best.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Radu Jianu, Cagatay Turkay, Franck Vidal, Hui Fang, Alma Rahat, Phong Nguyen, Tuna Gonen`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[1] R. Jianu, C. Demiralp and D. Laidlaw, "Exploring 3D DTI Fiber Tracts with Linked 2D Representations," in IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 6, pp. 1449-1456, Nov.-Dec. 2009, doi: 10.1109/TVCG.2009.141.

[2] Liu, X., Hu, Y., North, S. and Shen, H.-W. (2018), CorrelatedMultiples: Spatially Coherent Small Multiples With Constrained Multi-Dimensional Scaling. Computer Graphics Forum, 37: 7-18. https://doi.org/10.1111/cgf.12526

[3] Gleicher, M., Albers, D., Walker, R., Jusufi, I., Hansen, C.D. and Roberts, J.C., 2011. Visual comparison for information visualization. Information Visualization, 10(4), pp.289-309.

[4] Turkay, C., Slingsby, A., Hauser, H., Wood, J. and Dykes, J., 2014. Attribute signatures: Dynamic visual summaries for analyzing multivariate geographical data. IEEE Transactions on Visualization and Computer Graphics, 20(12), pp.2033-2042.

[5] aparrizos, J. and Gravano, L., 2015, May. k-shape: Efficient and accurate clustering of time series. In Proceedings of the 2015 ACM SIGMOD International Conference on Management of Data (pp. 1855-1870).

[6] Lone, N.I., McPeake, J., Stewart, N.I., Blayney, M.C., Seem, R.C., Donaldson, L., Glass, E., Haddow, C., Hall, R., Martin, C. and Paton, M., 2021. Influence of socioeconomic deprivation on interventions and outcomes for patients admitted with COVID-19 to critical care units in Scotland: A national cohort study. The Lancet Regional Health-Europe, 1, p.100005.

[7] Tufte, E.R. 1974.  Data analysis for politics and policy.  Englewood Cliffs, NJ: Prentice-Hall.

[8] Leland Wilkinson & Michael Friendly (2009) The History of the Cluster Heat Map, The American Statistician, 63:2, 179-184, DOI: 10.1198/tas.2009.0033

[9] Lex, A., Streit, M., Schulz, H.J., Partl, C., Schmalstieg, D., Park, P.J. and Gehlenborg, N., 2012, June. StratomeX: visual analysis of large‐scale heterogeneous genomics data for cancer subtype characterization. In Computer graphics forum (Vol. 31, No. 3pt3, pp. 1175-1184). Oxford, UK: Blackwell Publishing Ltd.

[10] Danielle Albers Szafir, Deidre Stuffer, Yusef Sohail, and Michael Gleicher. TextDNA: Visualizing Word Usage with Configurable Colorfields. Computer Graphics Forum, vol. 35, no. 3, pp. 421–430, 2016.
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
