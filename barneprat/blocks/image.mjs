import * as Utils from "../utils/utils.mjs";
import BaseBlock from "./baseBlock.mjs";

// Dette er nytt - for aspect ratio
const org_width = 1088;
const org_height = 818;

const dW = (window.innerWidth / org_width);
const dH = (window.innerHeight / org_height);
console.log(dW, dH);

// Ned hit

class Image extends BaseBlock {


    constructor(source, settings = { x: 0, y: 0, width: 100, height: 100 }, container) {
        super();
        this.container = container || document.body;
        this.source = source;
        this.x = settings.x || 0;
        this.y = settings.y || 0;
        this.width = settings.width || 100;
        this.height = settings.height || 100;


        // Dette er nytt - for aspect ratio
        this.width = Math.round(this.width * dW);
        this.height = Math.round(this.height * dH);
        settings.width = Math.round(settings.width * dW);
        settings.height = Math.round(settings.height * dH);

        // Ned hit


        this.img = document.createElement("img");
        this.img.src = this.source;
        Utils.positionElement(this.img, settings);
        this.container.appendChild(this.img);
        this.target = this.img;
    }

}


export default Image;