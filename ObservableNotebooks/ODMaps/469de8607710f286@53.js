// https://observablehq.com/@mbostock/cross-origin-images@53
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Cross-Origin Images

Because Observable runs in a sandbox, you need to use [CORS-enabled images](https://developer.mozilla.org/docs/Web/HTML/CORS_enabled_image) if you want to render them to a Canvas or use them to create a WebGL texture.`
)});
  main.variable(observer("fetchImage")).define("fetchImage", function(){return(
function fetchImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image;
    image.crossOrigin = "anonymous";
    image.src = src;
    image.onload = () => resolve(image);
    image.onerror = reject;
  });
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Try commenting out the *image*.crossOrigin line above. You should see a security error below because the canvas has been tainted by cross-origin data.`
)});
  main.variable(observer("image")).define("image", ["fetchImage"], function(fetchImage){return(
fetchImage("https://gist.githubusercontent.com/mbostock/9511ae067889eefa5537eedcbbf87dab/raw/944b6e5fe8dd535d6381b93d88bf4a854dac53d4/mona-lisa.jpg")
)});
  main.variable(observer()).define(["DOM","width","height","image"], function(DOM,width,height,image)
{
  const context = DOM.context2d(width, height, 1);
  context.drawImage(image, 0, 0, width, height);
  const buffer = context.getImageData(0, 0, width, height);
  for (let y = 0, i = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x, i += 4) {
      buffer.data[i + 0] = 255 - buffer.data[i + 0];
      buffer.data[i + 1] = 255 - buffer.data[i + 1];
      buffer.data[i + 2] = 255 - buffer.data[i + 2];
    }
  }
  context.putImageData(buffer, 0, 0);
  return context.canvas;
}
);
  main.variable(observer("height")).define("height", ["width","image"], function(width,image){return(
Math.round(width / image.naturalWidth * image.naturalHeight)
)});
  return main;
}
