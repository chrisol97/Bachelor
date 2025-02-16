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

// OBJEKTLYDER
    let flyingplanesound = new Audio("Lydfiler/Objektlyder/planesound.mp3");
    let campfiresound = new Audio("Lydfiler/Objektlyder/campfire.mp3");

// KARAKTERLYDER
    let giraffeTalking = new Audio("Lydfiler/Karakterer/giraffetalking.mp3");
    let catTalking = new Audio("Lydfiler/Karakterer/cattalking.mp3");
    let catTalking2 = new Audio("Lydfiler/Karakterer/cattalking2.mp3");

Start(demoscene0);

function demoscene0() {
    const startscreenobject = new Blocks.Image("Bilder/Karakterer/extraman.png", { x: 265, y: 150, width: 500, height: 500 });
        const skipbutton = new Blocks.Image("Bilder/Objekter/heart.png", { x: 265, y: 500, width: 300, height: 500 });
        Actions.Click(skipbutton, () => {
            GaaTil(demoscene5);
        })
    Actions.Click(startscreenobject, () => {
        giraffeTalking.play();
        flyingplanesound.play();
        GaaTil(demoscene1);
    })
}

function demoscene1() {
    const demobackground = new Blocks.Image("Bilder/Bakgrunner/demoBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    const giraffe = new Blocks.CellAnimation(["Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeOpenMouth.png", "Bilder/Karakterer/giraffeOpenMouth.png"], { x: 100, y: 0, width: 700, height: 1000, loop: true, auto: true});
    const flyingplane = new Blocks.Image("Bilder/Objekter/plane.png", { x: -250, y: -70, width: 220, height: 200});
    Actions.Tween(flyingplane, 6.5, 0);
    flyingplanesound.onended = () => {
        catTalking.play();
        GaaTil(demoscene2);
    }
}

function demoscene2() {
    const grillhutbackground = new Blocks.Image("Bilder/Bakgrunner/grillhut.png", { x: -8, y: -8, width: 1088, height: 1150});
    const cattalking = new Blocks.CellAnimation(["Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catOpenMouth.png"], { x: 400, y: 200, width: 600, height: 800, loop: true, auto: true});
    catTalking.onended = () => {
        GaaTil(demoscene3);
    }
} 

function demoscene3() {
    const grillhutbackground = new Blocks.Image("Bilder/Bakgrunner/grillhut.png", { x: -8, y: -8, width: 1088, height: 1150});
    const checkmarkbutton =  new Blocks.Image("Bilder/Objekter/continueButton.png", { x: 387, y: -50, width: 300, height: 300});
    const log1 = new Blocks.Image("Bilder/Objekter/logRound1.png", { x: 280, y: 678, width: 100, height: 100});
    const log2 = new Blocks.Image("Bilder/Objekter/logRound2.png", { x: 69, y: 608, width: 100, height: 100});
    const log3 = new Blocks.Image("Bilder/Objekter/logTriangle1.png", { x: 643, y: 691, width: 100, height: 100});
    const log4 = new Blocks.Image("Bilder/Objekter/logTriangle2.png", { x: 896, y: 607, width: 100, height: 100});
    Actions.Drag(log1);
    Actions.Drag(log2);
    Actions.Drag(log3);
    Actions.Drag(log4);
    Actions.Click(checkmarkbutton, () => {
        campfiresound.play();
        catTalking2.play();
        GaaTil(demoscene4);
    })
}

function demoscene4() {
    const grillhutbackground = new Blocks.Image("Bilder/Bakgrunner/grillhut.png", { x: -8, y: -8, width: 1088, height: 1150});
    const cattalking = new Blocks.CellAnimation(["Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catOpenMouth.png"], { x: 400, y: 200, width: 600, height: 800, loop: true, auto: true});
    catTalking2.onended = () => {
        campfiresound.pause();
        GaaTil(demoscene5);
    }
}

function demoscene5() {
    const bilbanebackground = new Blocks.Image("Bilder/Bakgrunner/bilbane.jpg", { x: -8, y: -8, width: 1088, height: 1150});
    const racecar = new Blocks.Image("Bilder/Objekter/raceCar.png", { x: 300, y: 450, width: 150, height: 100});
    const puzzle = new Blocks.Image("Bilder/Objekter/puzzleSolved.png", { x: 800, y: 550, width: 100, height: 100});
    //Actions.Colide(racecar, puzzle);                                                                                      Trenger hjelp med dette                                                                                            
    Actions.Tween(racecar, 8.0, 1.5);
    
}