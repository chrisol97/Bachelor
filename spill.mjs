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
    let boingsound = new Audio("Lydfiler/Objektlyder/boing.mp3");

// KARAKTERER
    let mainCharVoiceIntro1 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro1.mp3");
    let mainCharVoiceIntro2 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro2.mp3");
    let mainCharVoiceIntro3 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro3.mp3");
    let mainCharVoiceIntro4 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro4.mp3");
    let mainCharVoiceIntro5 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro5.mp3");
    let giraffeVoiceIntro1 = new Audio("Lydfiler/Karakterer/giraffeVoiceIntro1.mp3");
    let catVoiceIntro1 = new Audio("Lydfiler/Karakterer/catVoiceIntro1.mp3");
    let ouchCatMainChar = new Audio("Lydfiler/Karakterer/ouchCatMainChar.mp3"); 

Start(startscreen);

function startscreen() {
    const startscreenobject = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 325, y: 150, width: 400, height:500 });
    const skipbutton = new Blocks.Image("Bilder/Objekter/continueButton.png", {x: 200, y: 200, width: 200, height: 200});                           // HUSK Å FJERNE DETTE
    Actions.Click(skipbutton, () => {
        GaaTil(scene3);
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
        mainCharVoiceIntro1.play();
    })
    mainCharVoiceIntro1.onended = () => {
        GaaTil(scene2);
    }
}

function scene2() {
    const background = new Blocks.Image("Bilder/Bakgrunner/sandbox.png", {x: -8, y: -8, width: 1088, height: 818});
    const giraffeSandbox = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 200, y: 200, width: 200, height: 400});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 1100, y: 0, width: 200, height: 250});
    const yellowball = new Blocks.Image("Bilder/Objekter/yellowBall1.png", {x: 550, y: 550, width: 100, height: 100});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 595, y: 303, width: 200, height: 250, loop: true, auto: true});
    const giraffeTalking = new Blocks.CellAnimation(["Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeOpenMouth.png"], {x: 200, y: 200, width: 200, height: 400, loop: true, auto: true});
    const triggerObject = new Blocks.Image("Bilder/Objekter/block3.png", {x: 50, y: 850, width: 20, height: 20});
    giraffeTalking.hide();
    mainCharTalking.hide();
    const mainCharMoving = Actions.Tween(mainChar, -5, 3);
    Actions.Colide(mainChar, yellowball, () => {Actions.Tween(yellowball, -10, 10)});                       // Spørre hvordan jeg kan stoppe denne
    Actions.Colide(mainChar, yellowball, () => {mainCharMoving.pause()});
    Actions.Colide(mainChar, yellowball, () => {boingsound.play()});
    boingsound.onended = () => {
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro2.play();

    }
    mainCharVoiceIntro2.onended = () => {
        mainCharTalking.hide();
        mainChar.show();
        giraffeSandbox.hide();
        giraffeTalking.show();
        giraffeVoiceIntro1.play();   

    }
    giraffeVoiceIntro1.onended = () => {                         
        giraffeTalking.hide();
        giraffeSandbox.show();
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro3.play();                     
       
    }
    mainCharVoiceIntro3.onended = () => {
        mainCharTalking.hide();
        mainChar.show();
        Actions.Tween(mainChar, -10, 6);
    }
    Actions.Colide(mainChar, triggerObject, () => {
        GaaTil(scene3);
    });
}

function scene3() {
    const background = new Blocks.Image("Bilder/Bakgrunner/grillhutOutside.png", {x: -8, y: -8, width: 1088, height: 818});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 1100, y: 460, width: 220, height: 320});
    const catStanding = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", {x: 200, y: 500, width: 300, height: 250});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 490, y: 460, width: 220, height: 320, loop: true, auto: true});
    const catTalking = new Blocks.CellAnimation(["Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catOpenMouth.png"], {x: 200, y: 500, width: 300, height: 250, auto: true, loop: true});
    const triggerObject = new Blocks.Image("Bilder/Objekter/block3.png", {x: 1400, y: 450, width: 20, height: 20 });
    mainCharTalking.hide();
    catTalking.hide();
    const mainCharMoving = Actions.Tween(mainChar, -10, 0);
    Actions.Colide(mainChar, catStanding, () => {mainCharMoving.pause()});
    Actions.Colide(mainChar, catStanding, () => {ouchCatMainChar.play()});             
    ouchCatMainChar.onended = () => {
        mainChar.hide(); 
        mainCharTalking.show();
        mainCharVoiceIntro4.play()                              
    } 
    mainCharVoiceIntro4.onended = () => {                       
        mainCharTalking.hide();
        mainChar.show();
        catStanding.hide();
        catTalking.show();
        catVoiceIntro1.play();                                  
    }
    catVoiceIntro1.onended = () => {                            
        catTalking.hide();
        catStanding.show();
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro5.play();                             
    }
    mainCharVoiceIntro5.onended = () => {                       
        mainCharTalking.hide();
        mainChar.show();
        Actions.Tween(mainChar, 10, 0);
    }
    Actions.Colide(mainChar, triggerObject, () => {
        GaaTil(scene4);
    });
}

function scene4() {
    const background = new Blocks.Image("Bilder/Bakgrunner/wardrobe.png", {x: -8, y: -8, width: 1088, height: 818});
}



/*
const countdown = new Actions.CountDown(11, (complete) => {
        if (countdown.remainingTime < 10000) {
            loadingbar10.hide();
        }
        if (countdown.remainingTime < 9000) {
            loadingbar9.hide();
        }
        if (countdown.remainingTime < 8000) {
            loadingbar8.hide();
        } 
        if (countdown.remainingTime < 7000) {
            loadingbar7.hide();
        }
        if (countdown.remainingTime < 6000) {
            loadingbar6.hide();
        }
        if (countdown.remainingTime < 5000) {
            loadingbar5.hide();
        }
        if (countdown.remainingTime < 4000) {
            loadingbar4.hide();
        }
        if (countdown.remainingTime < 3000) {
            loadingbar3.hide();
        }
        if (countdown.remainingTime < 2000) {
            loadingbar2.hide();
        }
        if (countdown.remainingTime < 1000) {
            loadingbar1.hide();
        }
        if (complete) {
            GaaTil(scene2);
        }
    }, {onTick: true, auto: true}); */