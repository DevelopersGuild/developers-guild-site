import fetch from 'isomorphic-fetch'

function mxref(filename: string, origin: string) {
  return "" + origin + "/markdown/" + filename;
}

function genMarkdown(path: string, origin: string) {
  return fetch(mxref(path, origin)).then(function (prim) {
                return prim.text();
              }).then(function (text) {
              return Promise.resolve(text);
            });
}

export {
  genMarkdown 
}