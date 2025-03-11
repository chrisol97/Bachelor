//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";
import BaseBlock from "./barneprat/blocks/baseBlock.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

// MUSIKK
    let titlescreenmusic = new Audio("Lydfiler/Musikk/titlescreenmusic.mp3");

// OBJEKTLYDER
    let flyingplanesound = new Audio("Lydfiler/Objektlyder/planesound.mp3");

// KARAKTERER

    let mainCharVoice1 = new Audio("Lydfiler/Karakterer/mainCharVoice1.mp3");

Start(startscreen);

function startscreen() {
    const startscreenobject = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 325, y: 150, width: 400, height:500 });
    const skipbutton = new Blocks.Image("Bilder/Objekter/continueButton.png", {x: 200, y: 200, width: 200, height: 200});                           // HUSK Å FJERNE DETTE
    Actions.Click(skipbutton, () => {
        GaaTil(demoscenetimer);
    })
    Actions.Click(startscreenobject, () => {
        GaaTil(titlescreen);
    })
}

function titlescreen() {
    titlescreenmusic.play();
    const titlescreenbackground = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", {x: -8, y: -8, width: 1088, height: 818});
    const sign1 = new Blocks.Image("Bilder/Objekter/signHumlekollen.png", {x: 100, y: 350, width: 120, height: 150});
    const sign2 = new Blocks.Image("Bilder/Objekter/signMarihønehula.png", {x: 475, y: 350, width: 75, height: 90});
    const sign3 = new Blocks.Image("Bilder/Objekter/signMaurtua.png", {x: 940, y: 320, width: 100, height: 150});
    const sun = new Blocks.Image("Bilder/Objekter/sun.png", {x: 900, y: -20, width: 200, height: 250});
    const giraffetitlescreen = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 300, y: 220, width: 150, height: 300});
    const cattitlescreen = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", {x: 600, y: 490, width: 350, height: 300});
    const mantitlescreen = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", {x: 780, y: 330, width: 50, height: 100});
    const mainchartitlescreen = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 200, y: 440, width: 200, height: 350});
    titlescreenmusic.onended = () => {
        GaaTil(scene1);
    }
}

function scene1() {
    const scene1background = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", {x: -8, y: -8, width: 1088, height: 818});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 420, y: 800, width: 250, height: 400});
    const flyingplane = new Blocks.Image("Bilder/Objekter/plane.png", { x: -250, y: 0, width: 220, height: 150});
    const mainCharMoving = Actions.Tween(mainChar, 0, -6);
    Utils.Bound(mainChar, Utils.Bounds(0, 400 , 1000, 5000), () => {
        mainChar.hide();
        mainCharMoving.pause();
        Actions.Tween(flyingplane, 6.5, 0);
        flyingplanesound.play();
        new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 420, y: 400, width: 250, height: 400, loop: true, auto: true});
        mainCharVoice1.play();
    })
    mainCharVoice1.onended = () => {
        GaaTil(scene2);
    }
}

function scene2() {
    
}

function demoscenetimer() {
    const kindergartenOutside2 = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", { x: -8, y: -8, width: 1088, height: 818});
    const giraffeRoof2 = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 220, y: 190, width: 150, height: 150 });
    const biggestblock = new Blocks.Image("Bilder/Objekter/block1.png", { x: 400, y: 120, width: 100, height: 110});
    const bigblock = new Blocks.Image("Bilder/Objekter/block2.png", { x: 100, y: 670, width: 80, height: 100});
    const smallblock = new Blocks.Image("Bilder/Objekter/block3.png", { x: 800, y: 380, width: 40, height: 60});
    const continueButton = new Blocks.Image("Bilder/Objekter/continueButton.png", { x: 700, y: 0, width: 200, height: 200});
    Actions.Drag(biggestblock);
    Actions.Drag(bigblock);
    Actions.Drag(smallblock);
    Actions.Click(continueButton, () => {
        giraffeHappy.play();
        GaaTil(demoscene12);
    })
}
