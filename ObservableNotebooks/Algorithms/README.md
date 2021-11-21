# RAMPVIS Idiom : Integrated Algorithmic Tools for Visual Analytics

https://observablehq.com/@lborohfang/rampvis-idiom-integrated-algorithmic-tools-for-visual-ana@906

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
npx http-server
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/d/43358599cbcc009d@906.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@lborohfang/rampvis-idiom-integrated-algorithmic-tools-for-visual-ana";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~
