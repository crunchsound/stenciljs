import { p as patchBrowser, b as bootstrapLazy } from './index-61243d7a.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["my-rating",[[1,"my-rating",{"maxValue":[2,"max-value"],"starList":[32]}]]]], options);
});
