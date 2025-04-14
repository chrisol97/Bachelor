//#region 
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
//#endregion


if ("serviceWorker" in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    await navigator.serviceWorker.register("/sw.js");
} else {
    console.error("Service workers are not supported.");
}

let spill = null

try {
    spill = await import("./spill.mjs")
} catch (error) {
    alert("Noe er feil");
    console.log(error);
}

