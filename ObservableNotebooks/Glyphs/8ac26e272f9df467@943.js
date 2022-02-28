import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["2-blank.png",new URL("./files/a9f819837c19196c4ce4833706f7b8d6384fa8ca2562aa9ae5debe7563fe0b5c1736506b0b276d9429ad41db688edfdee1f7dc0b3631d4725c3255fe5b29ea5d",import.meta.url)],["6-blank.png",new URL("./files/64feac5712cb242bbd5fd416cf2c6bfeab1a200c336e2f1b945b2fe7d58394c9a78e483731f64381a1ed1f1f2efc57f968985b75213befc7851fd513011a03ac",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS : Pictograms`
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

  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/@ritsosp/rampvis-idioms-pictograms">https://observablehq.com/@ritsosp/rampvis-idioms-pictograms</a></pre>`;

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

* As a **member of the public**
* I would like to:
  - **read stories related to how modelling assists in understanding the pandemic**
  - **read stories that describe how the pandemic unfolds in my area / when compared to the nation / when compared to another location**
* so that I can make **informed decisions about my travels, and day to day choices with regards to infection levels etc.** 
  

----

**Note 1:** This is shared with some of the other RAMPVIS notebooks from the disseminative visualisation team

**Note 2:** 
The initial brief concerning the disseminative visualisation was:
* To communicate information about the pandemic and the RAMPVIS modelling activities to the public 
  * to complement existing dashboards and governmental information 
  * to present specific activities and data, from the RAMPVIS activities
  * to achieve higher levels of engagement with the public, compared to conventional visualisation interfaces (e.g., governmental information) `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Preliminary outputs did not use particular data, but were based on the basic [SEIRD Infection model](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjxpIjF_snyAhXRQ0EAHbavDBYQFnoECAYQAQ&url=https%3A%2F%2Fassets.gov.ie%2F74593%2Fa4951e8c993e4f4d96997815c7380851.pdf&usg=AOvVaw1PPI8nSESjLd4h3I0fqvDb) from Irish Epidemiology Modelling 
Advisory Group, and the use of metaphors to explain *modelling*.

Early infographics used data from the Modelling Team Supporting 1-km2 Spatial Simulation (see [RAMPVIS : Gridded Glyphmaps](https://observablehq.com/@aidans/rampvis-idiom-gridded-glyphmaps)).

The use of some pictograms is anticipated in the data-driven interviews prepared by the Disseminative Vis Team.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. Pictograms`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In our context, *pictograms* are visualisations that use stylized figurative drawings (icons, images etc.) to represent data ([Borgo et al., 2013](http://diglib.eg.org/handle/10.2312/conf.EG2013.stars.039-063)), often in a space-saving and language-saving manner ([Davies et al., 1998](https://www.sciencedirect.com/science/article/pii/S0003687097000215?via%3Dihub)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Pictograms, and metaphoric glyphs can come in different forms, ranging from abstract representations to photographic icons ([Legg et al., 2012](https://doi.org/10.1111/j.1467-8659.2012.03118.x)). In particular, the use of icons is a popular technique used in healthcare, where they were found to enhance visual attention, comprehension and adherence to instructions ([Baros et al., 2014](http://dx.doi.org/10.1016/j.sapharm.2013.11.002)). Likewise, they have been deemed very effective in presenting data, and said efficiency has also been indicated in a variety of visualisation applications ([Borgo et al., 2013](http://diglib.eg.org/handle/10.2312/conf.EG2013.stars.039-063), and may aid memorization, visual search and concept comprehension ([Borgo et al., 2012](https://doi.org/10.1109/TVCG.2012.197)). 

During the pandemic, pictograms have been used to inform the public, such in governmental infographics (see examples) and key messages ( e.g., [Hands-Face-Space campaign](https://www.gov.uk/government/news/new-campaign-to-prevent-spread-of-coronavirus-indoors-this-winter) and [WHO public advice campaigns](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public)). Various organisations, such as the [UN' Office for the Coordination of Humanitarian Affairs (OCHA)](https://www.unocha.org/) have produced [special icon sets](https://www.unocha.org/story/ocha-releases-humanitarian-icons-help-covid-19-response). In terms of data visualisations, pictograms have also been employed by various organisations and governmental dashboards, either to assist with the comprehension of the data displays (e.g., [WHO measures dashboard](https://covid19.who.int/measures)) or to present data-driven information, such as infection rates, percentages etc. in a visual manner (e.g., [CDCs campaigns](https://www.cdc.gov/coronavirus/2019-ncov/covid-data/data-visualization.htm#COVID-NET-archive)).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We provide links to examples of pandemic-related infographics, where the use of pictograms, icons and glyphs is a common practice:

* Informational content on [social media of the Welsh Government](https://twitter.com/welshgovernment/status/1298690447716618240) about the local shielding regulations regulations and safety recommendations. The infographic uses a consistent icon theme. We have no information on the effectiveness of these infographics.
* [Infographics from the British Society for Immunology](https://www.immunology.org/coronavirus/connect-coronavirus-public-engagement-resources/covid-19-testing-infographics), using a combination of icons and pictograms along with simple visualisations to convey messaging for Covid-19 testing. In this instance the elements are coloured, with a consistent colour scheme (compared to monochrome for the example above). We have no information on the effectiveness of these infographics.
  
* [Infographic from ECDC](https://www.ecdc.europa.eu/en/publications-data/infographic-covid-19) describing the Coronavirus symptoms. The icons and pictograms used in this case are more common. The virus, face-mask, hand-washing and person coughing pictograms are similar to those aforementioned by the Welsh Government and the British Society for Immunology. In this instance the elements are coloured, with a consistent colour scheme. We have no information on the effectiveness of these examples.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Pictograms (Glyphs/icons) were used in the videos and infographics created by the disseminative visualisation teams to provide succinct messages and generate focal points, with limited use of text and in limited space. (see below). The infographics were created with the online tool [Visme](https://www.visme.co/).

These infographics were used to generate video sequences (one slide per frame) to present key messages. The pictograms were used in many of the slides to depict key message elements, such as a lockdown indicated through the use of a lock icon in a geographical pin icon, or populations of symptomatic/un-symptomatic and non-infected individuals, such as with stick figures of different colours.`
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("2-blank.png").image({width:600})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Likewise, social distance was depicted with a circle around a stick figure. The creation of this ideas was not systematic, and as a consequence the icons generated are not consistent, or part of a larger family of icons/glyphs/pictograms. `
)});
  main.variable(observer()).define(["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("6-blank.png").image({width:600})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Pictograms are an easy way to create succinct, impactful messaging, which follows the mantra "_an image tells a thousand words_". Especially in a world where the imaging relating to the pandemic has become frequent, it is easy to convey messages this manner. The technique is popular in a number of messages from governments and health organisations (see Section 5), whereas their efficiency in broad terms is indicated by their adoption in messaging from major organisations (see Section 6, e.g., WHO, CDC etc). In terms of their efficiency in data visualisation applications, works, such as from [Borgo et al. (2012)](https://doi.org/10.1109/TVCG.2012.197), indicate they can aid memorization, visual search and concept comprehension. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The team has not used pictograms (or glyphs in general) that are data-driven and most uses were as mere icons (which, as far as this idiom is concerned is not a limitation of the idiom, but of how it was used by the team). 

A challenge of using pictograms in any context, and more so with regards to the pandemic due to the different points of view, is making sure they are appropriate for the message conveyed. 

The expressiveness of pictograms/icons/glyphs, i.e., the degree to which a single or collection of pictograms portrays a clear and unambiguous message, in healthcare is often dependent on the readers experience, cultural background and age ([Sorfleet et al., 2009](https://doi.org/10.3821/1913-701X-142.2.82)). Likewise, in our examples, the lockdown icon may not be familiar to people that have not used online maps, and cannot see the *pin* part of the pictogram. Another challenge is finding suitable pictograms and icons, or even creating those in the first place. Consequently, there is a challenge ending up with *chartjunk* (Tufte, 1983), where non-data-driven, redundant depictions do not assist the comprehension of the visualisations, or distract from the main message.

This is most likely the reason that most informational content from governments for key messages is using universally known icons (e.g, hands, face masks, stick figures).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Recommendations / Opportunities
* Create libraries of pictograms of consistent design (these probably require an artist), considering the intended audience. At the time, no sets were available - however many have emerged in the last few months, either by organisations 
such as [UN's Office for the Coordination of Humanitarian Affairs (OCHA)](https://www.unocha.org/story/ocha-releases-humanitarian-icons-help-covid-19-response) or individual artists (e.g., sets in the [Noun Project](https://thenounproject.com/search/?q=covid-19)). Most of these icon-sets are suitable for developing stories in our context.
* Development of narrative patterns using pictograms (and ensembles of) unique to the nature of the Pandemic (face masks, testing kits, hand wash 'best practice; etc.). Some of these exist in different contexts (e.g., H&S). The aforementioned icon-sets could be used to develop those, as long as there is some form of structure. For example, [Font Awesome](https://fontawesome.com/), a popular web-icon set, has icons for file-types, popular online tools and services etc. Likewise, sub-groupings of importance, with respect to the pandemic could be devised - e.g., icons for testing, transmission, PPE etc.
* Propose guidelines for a *no-chartjunk* approach for the pandemic.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Pictograms where used in outputs created by **P.D. Ritsos**, with input from **M. Chen** and **J.C. Roberts**`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Legg, P.A., Chung, D.H.S., Parry, M.L., Jones, M.W., Long, R., Griffiths, I.W. and Chen, M. (2012)**, MatchPad: Interactive Glyph-Based Visualization for Real-Time Sports Performance Analysis. Computer Graphics Forum, 31: 1255-1264. https://doi.org/10.1111/j.1467-8659.2012.03118.x

**Borgo, R., Kehrer, J., Chung, D.H., Maguire, E., Laramee, R., Hauser, H., Ward, M., & Chen, M. (2013)**. Glyph-based Visualization: Foundations, Design Guidelines, Techniques and Applications. Eurographics.
http://diglib.eg.org/handle/10.2312/conf.EG2013.stars.039-063

**Ward M. O. (2008)**. Multivariate data glyphs: Principles and practice. In Handbook of Data Visualization, Chen C.-H., Hardle W., Unwin A., (Eds.), Springer Handbooks Comp. Statistics. Springer, pp. 179–198. 2. https://doi.org/10.1007/978-3-540-33037-0_8

**Davies S, Haines H, Norris B, Wilson JR. (1998)** Safety pictograms: are they getting the message across? Applied Ergonomics. Feb;29(1):15-23. https://doi.org/10.1016/S0003-6870(97)00021-5

**Barros IM, Alcântara TS, Mesquita AR, Santos AC, Paixão FP, Lyra DP Jr. (2014)** The use of pictograms in the health care: a literature review. Research in Social & Administrative Pharmacy : RSAP. 2014 Sep-Oct;10(5):704-719. https://doi.org/10.1016/j.sapharm.2013.11.002

**R. Borgo, A. Abdul-Rahman, F. Mohamed, P. W. Grant, I. Reppa, L. Floridi, and M. Chen (2012)**, An empirical study on using visual embellishments in visualization, IEEE Transactions on Visualization and Computer Graphics, 18(12):2759-2768. https://doi.org/10.1109/TVCG.2012.197

**Tijus, C., Barcenilla, J., de Lavalette, B. C., & Meunier, J. (2007).** " Chapter 2: The Design, Understanding and Usage of Pictograms". In Written Documents in the Workplace. Leiden, The Netherlands: Brill. https://doi.org/10.1163/9789004253254_003

**Sorfleet, C., Vaillancourt, R., Groves, S., & Dawson, J. (2009).** Design, Development and Evaluation of Pictographic Instructions for Medications Used during Humanitarian Missions. Canadian Pharmacists Journal / Revue Des Pharmaciens Du Canada, 142(2), 82–88. 
https://doi.org/10.3821/1913-701X-142.2.82

**Tufte, Edward R. (1983).** The Visual Display of Quantitative Information. Cheshire, CT: Graphics Press.
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
