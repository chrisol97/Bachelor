//#region 
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
//#endregion


if ("serviceWorker" in navigator) {
    console.log("Hey I am installing service worker");
    await navigator.serviceWorker.register("/sw.js");
    console.log("Done");
}

let spill = null

try {
    spill = await import("./spill.mjs")
} catch (error) {
    alert("Noe er feil");
    console.log(error);
}

