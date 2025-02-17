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
    let campfiresound = new Audio("Lydfiler/Objektlyder/campfire.mp3");
    let racecarsound = new Audio("Lydfiler/Objektlyder/raceCar.mp3");
    let crashsound = new Audio("Lydfiler/Objektlyder/crash.mp3");

// KARAKTERLYDER
    let giraffeTalking = new Audio("Lydfiler/Karakterer/giraffetalking.mp3");
    let catTalking = new Audio("Lydfiler/Karakterer/cattalking.mp3");
    let catTalking2 = new Audio("Lydfiler/Karakterer/cattalking2.mp3");
    let manTalking = new Audio("Lydfiler/Karakterer/mantalking.mp3");
    let manTalking2 = new Audio("Lydfiler/Karakterer/mantalking2.mp3");
    let manTalking3 = new Audio("Lydfiler/Karakterer/mantalking3.mp3");

Start(startscreen);

function startscreen() {
    const startscreenobject = new Blocks.Image("Bilder/Karakterer/extraman.png", { x: 265, y: 150, width: 500, height: 500 });
    const skipbutton = new Blocks.Image("Bilder/Objekter/continueButton.png", { x: 500, y: 100, width: 200, height: 200});
    Actions.Click(skipbutton, () => {
        GaaTil(demoscene10);
    })
    Actions.Click(startscreenobject, () => {
        GaaTil(titlescreen);
    })
}

function titlescreen() {
    titlescreenmusic.play();
    const titlescreenbackground = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", { x: -8, y: -8, width: 1088, height: 818});
    const sign1 = new Blocks.Image("Bilder/Objekter/signHumlekollen.png", { x: 100, y: 350, width: 120, height: 150});
    const sign2 = new Blocks.Image("Bilder/Objekter/signMarihønehula.png", { x: 475, y: 350, width: 75, height: 90});
    const sign3 = new Blocks.Image("Bilder/Objekter/signMaurtua.png", { x: 940, y: 320, width: 100, height: 150});
    const sun = new Blocks.Image("Bilder/Objekter/sun.png", { x: 900, y: -20, width: 200, height: 250});
    const giraffetitlescreen = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 200, y: 200, width: 300, height: 350});
    const cattitlescreen = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", { x: 600, y: 290, width: 400, height: 600});
    const mantitlescreen = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", { x: 770, y: 300, width: 75, height: 150});
    titlescreenmusic.onended = () => {
        giraffeTalking.play();
        flyingplanesound.play();
        GaaTil(demoscene1);
    }
}

function demoscene1() {
    const outsidebackground = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", { x: -8, y: -8, width: 1088, height: 818 });
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
    const log1 = new Blocks.Image("Bilder/Objekter/logRound1.png", { x: 280, y: 660, width: 100, height: 100});
    const log2 = new Blocks.Image("Bilder/Objekter/logRound2.png", { x: 69, y: 608, width: 100, height: 100});
    const log3 = new Blocks.Image("Bilder/Objekter/logTriangle1.png", { x: 643, y: 670, width: 100, height: 100});
    const log4 = new Blocks.Image("Bilder/Objekter/logTriangle2.png", { x: 896, y: 607, width: 100, height: 100});
    Actions.Drag(log1);
    Actions.Drag(log2);
    Actions.Drag(log3);
    Actions.Drag(log4);
    var collision1 = false 
    var collision2 = false
    var collision3 = false
    Actions.Colide(log1, log2, () => {collision1 = true});
    Actions.Colide(log2, log3, () => {collision2 = true});
    Actions.Colide(log3, log4, () => {collision3 = true});
    Actions.Colide(log4, log1, () => {{ 
        if (collision1 && collision2 && collision3) {
            catTalking2.play();
            GaaTil(demoscene4);
        }
    }});
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
    manTalking.play();
    const grillhutOutside = new Blocks.Image("Bilder/Bakgrunner/grillhutOutside.jpg", { x: -8, y: -8, width: 1088, height: 900});
    const mantalking = new Blocks.CellAnimation(["Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manOpenMouth.png"], { x: 10, y: 100, width: 500, height: 700, loop: true, auto: true});
    const cat = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", { x: 400, y: 150, width: 600, height: 800});
    manTalking.onended = () => {
        GaaTil(demoscene6);
    }
}

function demoscene6() {
    racecarsound.play();
    const bilbanebackground = new Blocks.Image("Bilder/Bakgrunner/bilbane.jpg", { x: -8, y: -8, width: 1088, height: 1150});
    const racecar = new Blocks.Image("Bilder/Objekter/raceCar.png", { x: 300, y: 450, width: 150, height: 100});
    const puzzle = new Blocks.Image("Bilder/Objekter/puzzleSolved.png", { x: 800, y: 550, width: 100, height: 100});
    Actions.Tween(racecar, 8.0, 1.5);
    Actions.Colide(racecar, puzzle, () => {Actions.Tween(puzzle, 4.0, -3.0)});
    Actions.Colide(racecar, puzzle, () => {crashsound.play()});
    racecarsound.onended = () => {
        manTalking2.play();
        GaaTil(demoscene7);
    }                                                                                                                 
}

function demoscene7() {
    const grillhutOutside = new Blocks.Image("Bilder/Bakgrunner/grillhutOutside.jpg", { x: -8, y: -8, width: 1088, height: 900});
    const mantalking = new Blocks.CellAnimation(["Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manOpenMouth.png"], { x: 10, y: 100, width: 500, height: 700, loop: true, auto: true});
    const brokenpuzzle1 = new Blocks.Image("Bilder/Objekter/puzzleUnsolved1.png", { x: 950, y: 500, width: 100, height: 100});
    const brokenpuzzle2 = new Blocks.Image("Bilder/Objekter/puzzleUnsolved2.png", { x: 350, y: 700, width: 100, height: 100});
    const brokenpuzzle3 = new Blocks.Image("Bilder/Objekter/puzzleUnsolved3.png", { x: 600, y: 250, width: 100, height: 100});
    const brokenpuzzle4 = new Blocks.Image("Bilder/Objekter/puzzleUnsolved4.png", { x: 75, y: 400, width: 100, height: 100});
    const catopenmouth = new Blocks.Image("Bilder/Karakterer/catOpenMouth.png", { x: 400, y: 150, width: 600, height: 800});
    manTalking2.onended = () => {
        GaaTil(demoscene8);
    }
}

function demoscene8() {
    const grillhutOutside = new Blocks.Image("Bilder/Bakgrunner/grillhutOutside.jpg", { x: -8, y: -8, width: 1088, height: 900});
    const brokenpuzzle1 = new Blocks.Image("Bilder/Objekter/puzzleUnsolved1.png", { x: 950, y: 500, width: 100, height: 100});
    const brokenpuzzle2 = new Blocks.Image("Bilder/Objekter/puzzleUnsolved2.png", { x: 350, y: 650, width: 100, height: 100});
    const brokenpuzzle3 = new Blocks.Image("Bilder/Objekter/puzzleUnsolved3.png", { x: 600, y: 250, width: 100, height: 100});
    const brokenpuzzle4 = new Blocks.Image("Bilder/Objekter/puzzleUnsolved4.png", { x: 75, y: 400, width: 100, height: 100});
    Actions.Drag(brokenpuzzle1);
    Actions.Drag(brokenpuzzle2);
    Actions.Drag(brokenpuzzle3);
    Actions.Drag(brokenpuzzle4);
    var collision1 = false 
    var collision2 = false
    var collision3 = false
    Actions.Colide(brokenpuzzle1, brokenpuzzle2, () => {collision1 = true});
    Actions.Colide(brokenpuzzle2, brokenpuzzle3, () => {collision2 = true});
    Actions.Colide(brokenpuzzle3, brokenpuzzle4, () => {collision3 = true});
    Actions.Colide(brokenpuzzle4, brokenpuzzle1, () => {{
        if (collision1 && collision2 && collision3) {
            manTalking3.play(); 
            GaaTil(demoscene9);
        }
    }});
}

function demoscene9() {
    const grillhutOutside = new Blocks.Image("Bilder/Bakgrunner/grillhutOutside.jpg", { x: -8, y: -8, width: 1088, height: 900});
    const mantalking = new Blocks.CellAnimation(["Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manOpenMouth.png"], { x: 10, y: 100, width: 500, height: 700, loop: true, auto: true});
    const cathappy = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", { x: 400, y: 150, width: 600, height: 800});
    const puzzlesolved = new Blocks.Image("Bilder/Objekter/puzzleSolved.png", { x: 320, y: 520, width: 120, height: 120});
    manTalking3.onended = () => {
        GaaTil(demoscene10);
    }
}

function demoscene10() {
    const kindergartenOutside = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", { x: -8, y: -8, width: 1088, height: 818});
    const man = new Blocks.Image("Bilder/Karakterer/manOpenMouth.png", { x: 200, y: 300, width: 200, height: 200});
    const cat = new Blocks.Image("Bilder/Karakterer/catOpenMouth.png", { x: 350, y: 350, width: 170, height: 200});
    const girafferoof = new Blocks.CellAnimation(["Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeOpenMouth.png", "Bilder/Karakterer/giraffeOpenMouth.png"], { x: 220, y: 190, width: 150, height: 150, loop: true, auto: true});
    const biggestblock = new Blocks.Image("Bilder/Objekter/block1.png", { x: 400, y: 120, width: 100, height: 110});
    const bigblock = new Blocks.Image("Bilder/Objekter/block2.png", { x: 100, y: 670, width: 80, height: 100});
    const smallblock = new Blocks.Image("Bilder/Objekter/block3.png", { x: 800, y: 380, width: 40, height: 60});

}

