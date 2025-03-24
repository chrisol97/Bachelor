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
    let mainCharVoiceIntro6 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro6.mp3");
    let mainCharVoiceIntro7 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro7.mp3");
    let mainCharVoiceIntro8 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro8.mp3");
    let giraffeVoiceIntro1 = new Audio("Lydfiler/Karakterer/giraffeVoiceIntro1.mp3");
    let catVoiceIntro1 = new Audio("Lydfiler/Karakterer/catVoiceIntro1.mp3");
    let styrerVoiceIntro1 = new Audio("Lydfiler/Karakterer/styrerVoiceIntro1.mp3");
    let ouchCatMainChar = new Audio("Lydfiler/Karakterer/ouchCatMainChar.mp3"); 


Start(startscreen);

function startscreen() {
    const startscreenobject = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 325, y: 150, width: 400, height:500 });
    const skipbutton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 200, y: 200, width: 200, height: 200});                           // HUSK Å FJERNE DETTE
    Actions.Click(skipbutton, () => {
        GaaTil(sceneForestHub);
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
    const startbutton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 420, y: 500, width: 150, height: 150});
    Actions.Click(startbutton, () => {
        titlescreenmusic.pause();
        GaaTil(sceneIntro1);
    })

                                                                                            // Legg til knapper for å skippe intro hvis barna ønsker det
    
}

function sceneIntro1() {
    mainCharVoiceIntro1.play();
    flyingplanesound.play();
    const scene1background = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", {x: -8, y: -8, width: 1088, height: 818});
    const flyingplane = new Blocks.Image("Bilder/Objekter/plane.png", { x: -250, y: 0, width: 220, height: 150});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 420, y: 400, width: 250, height: 400});
    mainChar.hide();
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 420, y: 400, width: 250, height: 400, loop: true, auto: true});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 800, y: 500, width: 150, height: 150});
    continuebutton.hide();
    Actions.Tween(flyingplane, 6.5, 0);
    mainCharVoiceIntro1.onended = () => {
        mainCharTalking.hide();
        mainChar.show();
        continuebutton.show();
    }
    Actions.Click(continuebutton, () => {
        flyingplanesound.pause();
        mainCharVoiceIntro1.pause();
        GaaTil(sceneIntro2);
    })

}

function sceneIntro2() {
    const background = new Blocks.Image("Bilder/Bakgrunner/sandbox.png", {x: -8, y: -8, width: 1088, height: 818});
    const giraffeSandbox = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 200, y: 200, width: 200, height: 400});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 1100, y: 0, width: 200, height: 250});
    const yellowball = new Blocks.Image("Bilder/Objekter/yellowBall1.png", {x: 550, y: 550, width: 100, height: 100});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 595, y: 303, width: 200, height: 250, loop: true, auto: true});
    const giraffeTalking = new Blocks.CellAnimation(["Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeOpenMouth.png"], {x: 200, y: 200, width: 200, height: 400, loop: true, auto: true});
    giraffeTalking.hide();
    mainCharTalking.hide();
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 700, y: 50, width: 150, height: 150});
    const mainCharMoving = Actions.Tween(mainChar, -10, 6);
    continueButton.hide();
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
        continueButton.show();

    }
    Actions.Click(continueButton, () => {
        boingsound.pause();
        mainCharVoiceIntro2.pause();
        giraffeVoiceIntro1.pause();
        mainCharVoiceIntro3.pause();
        GaaTil(sceneIntro3);
    })
}

function sceneIntro3() {
    const background = new Blocks.Image("Bilder/Bakgrunner/grillhutOutside.png", {x: -8, y: -8, width: 1088, height: 818});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 1100, y: 460, width: 220, height: 320});
    const catStanding = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", {x: 200, y: 500, width: 300, height: 250});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 490, y: 460, width: 220, height: 320, loop: true, auto: true});
    const catTalking = new Blocks.CellAnimation(["Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catOpenMouth.png"], {x: 200, y: 500, width: 300, height: 250, auto: true, loop: true});
    mainCharTalking.hide();
    catTalking.hide();
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 550, y: 50, width: 150, height: 150});
    continueButton.hide();
    const mainCharMoving = Actions.Tween(mainChar, -10, 0);
    Actions.Colide(mainChar, catStanding, () => {mainCharMoving.pause()});
    Actions.Colide(mainChar, catStanding, () => {ouchCatMainChar.play()});             
    ouchCatMainChar.onended = () => {
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro4.play();

    } 
    mainCharVoiceIntro4.onended = () => {                       
        mainCharTalking.hide();
        mainChar.show();
        catStanding.hide();
        catTalking.show();
        catVoiceIntro1.play();                                                                                          // Malene?

    }
    catVoiceIntro1.onended = () => {                                                                                    // Malene?
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
        continueButton.show();
        
    }
    Actions.Click(continueButton, () => {
        ouchCatMainChar.pause();
        mainCharVoiceIntro4.pause();
        catVoiceIntro1.pause();
        mainCharVoiceIntro5.pause();
        GaaTil(sceneIntro4);
    })
}

function sceneIntro4() {
    const background = new Blocks.Image("Bilder/Bakgrunner/wardrobe.png", {x: -8, y: -8, width: 1088, height: 818});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 1100, y: 470, width: 220, height: 320});
    const styrerPlaceholder = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", {x: 150, y: 300, width: 350, height: 450});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 498, y: 470, width: 220, height: 320, auto: true, loop: true});
    const styrerPlaceholderTalking = new Blocks.CellAnimation(["Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manOpenMouth.png"], {x: 150, y: 300, width: 350, height: 450, auto: true, loop: true});
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 350, y: 300, width: 420, height: 620, auto: true, loop: true});
    const mainChar2 = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 350, y: 300, width: 420, height: 620});
    mainChar2.hide();
    mainCharTalking2.hide();
    mainCharTalking.hide();
    styrerPlaceholderTalking.hide();
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 700, y: 50, width: 150, height: 150});
    continueButton.hide();
    const mainCharMoving = Actions.Tween(mainChar, -7, 0);
    Actions.Colide(mainChar, styrerPlaceholder, () => {
        mainCharMoving.pause();
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro6.play();                             
    })
    mainCharVoiceIntro6.onended = () => {
        mainCharTalking.hide();
        mainChar.show();
        styrerPlaceholder.hide();
        styrerPlaceholderTalking.show();
        styrerVoiceIntro1.play();                                                                   // Endre hva han sier
    }
    styrerVoiceIntro1.onended = () => {                                                             // Endre hva han sier
        styrerPlaceholderTalking.hide();
        styrerPlaceholder.show();
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro7.play();                                                                 // Endre hva han sier
    }
    mainCharVoiceIntro7.onended = () => {                                                           // Endre hva han sier
        mainCharTalking.hide();
        mainCharTalking2.show();
        mainCharVoiceIntro8.play();                                                                 // Endre hva han sier
    } 
    mainCharVoiceIntro8.onended = () => {                                                           // Endre hva han sier
        mainCharTalking2.hide();
        mainChar2.show();
        continueButton.show();
    }
    Actions.Click(continueButton, () => {
        mainCharVoiceIntro6.pause();
        styrerVoiceIntro1.pause();
        mainCharVoiceIntro7.pause();
        mainCharVoiceIntro8.pause();
        GaaTil(sceneIntro5);
    })
}

function sceneIntro5() {
    boingsound.play();                          //  Legg til/spill inn mainCharVoiceIntro9 (forklaring av "mappet", avslutt før man introduserer de forskjellige stedene på kartet) 
    const mapBackground = new Blocks.Image("Bilder/Bakgrunner/mapBackground.jpg", {x: -8, y: -8, width: 1088, height: 818});
    const beachText = new Blocks.Image("Bilder/Objekter/beachTitle.PNG", {x: 380, y: 50, width: 300, height: 70});
    const cityText = new Blocks.Image("Bilder/Objekter/cityTitle.PNG", {x: 720, y: 550, width: 300, height: 70});
    const forestText = new Blocks.Image("Bilder/Objekter/forestTitle.PNG", {x: 30, y: 550, width: 300, height: 70});
    const kindergartenText = new Blocks.Image("Bilder/Objekter/kindergartenTitle.PNG", {x: 410, y: 415, width: 250, height: 50});
    const mainCharTalking1 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 415, y: 550, width: 250, height: 350, auto: true, loop: true});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 415, y: 550, width: 250, height: 350});
    mainChar.hide();
    beachText.hide();
    cityText.hide();
    forestText.hide();
    kindergartenText.hide();
    boingsound.onended = () => {                // Legg til/spill inn mainCharVoiceIntro9 (forklaring av "mappet", avslutt før man introduserer de forskjellige stedene på kartet)
        flyingplanesound.play();                // Legg til/spill inn mainCharVoiceIntro10 (forklaring av hva de forskjellige stedene på kartet er, og hva de innebærer)
        beachText.show();
        cityText.show();
        forestText.show();
        kindergartenText.show();
    }
    flyingplanesound.onended = () => {          // Legg til/spill inn mainCharVoiceIntro10 (forklaring av hva de forskjellige stedene på kartet er, og hva de innebærer)
        mainCharTalking1.hide();
    }
    Actions.Click(beachText, () => {
        GaaTil(sceneBeachIntro1);
    })
    Actions.Click(cityText, () => {
        GaaTil(sceneCityIntro1);
    })
    Actions.Click(forestText, () => {
        GaaTil(sceneForestIntro1);
    })
    Actions.Click(kindergartenText, () => {
        GaaTil(sceneKindergartenIntro1);
    })
}

// BEACH - POTENSIELT I EGET .MJS-FIL

function sceneBeachIntro1() {
    flyingplanesound.play()                     // Spill inn/legg til mainCharVoiceBeachIntro1 (forklaring av hva som skjer på stranda)
    const sceneBeachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", {x: -8, y: -8, width: 1088, height: 818});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 700, y: 550, width: 300, height: 400, auto: true, loop: true});
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 330, y: 330, width: 400, height: 550, auto: true, loop: true});
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    cityButton.hide();
    forestButton.hide();
    kindergartenButton.hide();
    mainCharTalking2.hide();
    qCardBack.hide();
    chCardBack.hide();
    chanceCardBack.hide();
    flyingplanesound.onended = () => {          // Spill inn/legg til mainCharVoiceBeachIntro1 (forklaring av hva som skjer på stranda)
        qCardBack.show();
        chCardBack.show();
        chanceCardBack.show();
        boingsound.play();                      // Spill inn/legg til mainCharVoiceCardsExpl1 (forklaring av hvordan kortene fungerer)
    }
    boingsound.onended = () => {                // Spill inn/legg til mainCharVoiceCardsExpl1 (forklaring av hvordan kortene fungerer)
        cityButton.show();
        forestButton.show();
        kindergartenButton.show();
        mainCharTalking.hide();
        mainCharTalking2.show();
        ouchCatMainChar.play();                 // Spill inn/legg til mainCharVoiceCardsExpl2 (forklare hvordan knappene fungerer, og ønske barna lykke til på reisen)
    }
    ouchCatMainChar.onended = () => {           // Spill inn/legg til mainCharVoiceCardsExpl2 (forklare hvordan knappene fungerer, og ønske barna lykke til på reisen)
        GaaTil(sceneBeachHub)
    }

}

function sceneBeachHub() {                                                                                                      // Spille inn bakgrunnsmusikk?
    const sceneBeachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", {x: -8, y: -8, width: 1088, height: 818});
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    Actions.Click(forestButton, () => {
        GaaTil(sceneForestHub);
    });
    Actions.Click(cityButton, () => {
        GaaTil(sceneCityHub);
    });
    Actions.Click(kindergartenButton, () => {
        GaaTil(sceneOutro1);
    });
    Actions.Click(qCardBack, () => {
        GaaTil(sceneBeachQuestionFront);
    });
    Actions.Click(chCardBack, () => {
        GaaTil(sceneBeachChallengeFront);
    });
    Actions.Click(chanceCardBack, () => {
        GaaTil(sceneBeachChanceFront);
    });
}

// FOREST - POTENSIELT I EGEN .MJS-FIL

function sceneForestIntro1() {
    flyingplanesound.play();                                                    // Spill inn/legg til mainCharVoiceForestIntro1 (forklaring av hva som skjer i skogen)
    const sceneForestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 700, y: 550, width: 300, height: 400, auto: true, loop: true});
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 330, y: 330, width: 400, height: 550, auto: true, loop: true});
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    cityButton.hide();
    beachButton.hide();
    kindergartenButton.hide();
    mainCharTalking2.hide();
    qCardBack.hide();
    chCardBack.hide();
    chanceCardBack.hide();
    flyingplanesound.onended = () => {          // Spill inn/legg til mainCharVoiceForestIntro1 (forklaring av hva som skjer i skogen)
        qCardBack.show();
        chCardBack.show();
        chanceCardBack.show();
        boingsound.play();                      // Spill inn/legg til mainCharVoiceCardsExpl1 (forklaring av hvordan kortene fungerer)
    }
    boingsound.onended = () => {                // Spill inn/legg til mainCharVoiceCardsExpl1 (forklaring av hvordan kortene fungerer)
        cityButton.show();
        beachButton.show();
        kindergartenButton.show();
        mainCharTalking.hide();
        mainCharTalking2.show();
        ouchCatMainChar.play();                 // Spill inn/legg til mainCharVoiceCardsExpl2 (forklare hvordan knappene fungerer, og ønske barna lykke til på reisen)
    }
    ouchCatMainChar.onended = () => {           // Spill inn/legg til mainCharVoiceCardsExpl2 (forklare hvordan knappene fungerer, og ønske barna lykke til på reisen)
        GaaTil(sceneForestHub)
    }

}

function sceneForestHub() {                                                                                                      // Spille inn bakgrunnsmusikk?
    const sceneForestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    Actions.Click(cityButton, () => {
        GaaTil(sceneCityHub);
    });
    Actions.Click(beachButton, () => {
        GaaTil(sceneBeachHub);
    });
    Actions.Click(kindergartenButton, () => {
        GaaTil(sceneOutro1);
    });
    Actions.Click(qCardBack, () => {
        GaaTil(sceneForestQuestionFront);
    });
    Actions.Click(chCardBack, () => {
        GaaTil(sceneForestChallengeFront);
    });
    Actions.Click(chanceCardBack, () => {
        GaaTil(sceneForestChanceFront);
    });
}

// CITY - POTENSIELT I EGEN .MJS-FIL

function sceneCityIntro1() {
    flyingplanesound.play();                                                    // Spill inn/legg til mainCharVoiceCityIntro1 (forklaring av hva som skjer i byen)
    const sceneCityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 700, y: 550, width: 300, height: 400, auto: true, loop: true});
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 330, y: 330, width: 400, height: 550, auto: true, loop: true});
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    forestButton.hide();
    beachButton.hide();
    kindergartenButton.hide();
    mainCharTalking2.hide();
    qCardBack.hide();
    chCardBack.hide();
    chanceCardBack.hide();
    flyingplanesound.onended = () => {          // Spill inn/legg til mainCharVoiceCityIntro1 (forklaring av hva som skjer i byen)
        qCardBack.show();
        chCardBack.show();
        chanceCardBack.show();
        boingsound.play();                      // Spill inn/legg til mainCharVoiceCardsExpl1 (forklaring av hvordan kortene fungerer)
    }
    boingsound.onended = () => {                // Spill inn/legg til mainCharVoiceCardsExpl1 (forklaring av hvordan kortene fungerer)
        forestButton.show();
        beachButton.show();
        kindergartenButton.show();
        mainCharTalking.hide();
        mainCharTalking2.show();
        ouchCatMainChar.play();                 // Spill inn/legg til mainCharVoiceCardsExpl2 (forklare hvordan knappene fungerer, og ønske barna lykke til på reisen)
    }
    ouchCatMainChar.onended = () => {           // Spill inn/legg til mainCharVoiceCardsExpl2 (forklare hvordan knappene fungerer, og ønske barna lykke til på reisen)
        GaaTil(sceneCityHub)
    }
}

function sceneCityHub() {                                                                                                   // Spille inn bakgrunnsmusikk?
    const sceneCityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    Actions.Click(forestButton, () => {
        GaaTil(sceneForestHub);
    });
    Actions.Click(beachButton, () => {
        GaaTil(sceneBeachHub);
    });
    Actions.Click(kindergartenButton, () => {
        GaaTil(sceneOutro1);
    });
    Actions.Click(qCardBack, () => {
        GaaTil(sceneCityQuestionFront);
    });
    Actions.Click(chCardBack, () => {
        GaaTil(sceneCityChallengeFront);
    });
    Actions.Click(chanceCardBack, () => {
        GaaTil(sceneCityChanceFront);
    });
}




// CHANCE CARDS

    // FOREST

function sceneForestChanceFront() {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});                     // Spill inn lyder, legg til objektbilder til enkelte kort osv.
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        const chanceCard0 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF1.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneForestHub);
        });
    } else if (tall === 1) {
        const chanceCard1 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF2.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneForestHub);
        });
    } else if (tall === 2) {
        const chanceCard2 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF3.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneForestHub);
        });
    } else if (tall === 3) {
        const chanceCard3 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF4.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneForestHub);
        });
    } else if (tall === 4) {
        const chanceCard4 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF5.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneForestHub);
        });
    } else if (tall === 5) {
        const chanceCard5 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF6.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneForestHub);
        });
    }
}


    // CITY

function sceneCityChanceFront() {
    const citymap = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 8);
    if (tall === 0) {
        const chanceCard0 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC1.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneCityHub);
        });
    } else if (tall === 1) {
        const chanceCard1 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC2.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneCityHub);
        });
    } else if (tall === 2) {
        const chanceCard2 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC3.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneCityHub);
        });
    } else if (tall === 3) {
        const chanceCard3 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC4.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneCityHub);
        });
    } else if (tall === 4) {
        const chanceCard4 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC5.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneCityHub);
        });
    } else if (tall === 5) {
        const chanceCard5 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC6.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneCityHub);
        });
    } else if (tall === 6) {
        const chanceCard6 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC7.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneCityHub);
        });
    } else if (tall === 7) {
        const chanceCard7 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC8.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneCityHub);
        });
    }
}


    // BEACH

function sceneBeachChanceFront() {
    const beachmap = new Blocks.Image("Bilder/Bakgrunner/beach.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        const chanceCard0 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB1.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneBeachHub);
        });
    } else if (tall === 1) {
        const chanceCard1 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB2.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneBeachHub);
        });
    } else if (tall === 2) {
        const chanceCard2 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB3.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneBeachHub);
        });
    } else if (tall === 3) {
        const chanceCard3 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB4.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneBeachHub);
        });
    } else if (tall === 4) {
        const chanceCard4 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB5.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneBeachHub);
        });
    } else if (tall === 5) {
        const chanceCard5 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB6.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            GaaTil(sceneBeachHub);
        });
    }
}

// QUESION CARDS

    // FOREST

function sceneForestQuestionFront() {
    const forestbackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 10);
    if (tall === 0) {
        const forestQuestion1 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFBiggestAnimal.png", {x: 30, y: 10, width: 1020, height: 700});
        // Legg til knapp for "riktig svar", og knapp for "feil svar"

    } else if (tall === 1) {
        const forestQuestion2 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFCountingSquirrels.png", {x:30, y: 10, width: 1020, height: 700});
        // Legg til selve oppgaven

    } else if (tall === 2) {
        const forestQuestion3 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFMikkelRev.png", {x: 30, y: 10, width: 1020, height: 700});
        // Legg til knapp for "riktig svar" og knapp for "feil svar"

    } else if (tall === 3) {
        const forestQuestion4 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFOddOneOut.png", {x: 30, y: 10, width: 1020, height: 700});
        // Legg til selve oppgaven

    } else if (tall === 4) {
        const forestQuestion5 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFOwlSound.png", {x: 30, y: 10, width: 1020, height: 700});
        // Legg til en knapp for å spille av lyden, spill også inn lyden (uglelyd)

    } else if (tall === 5) {
        const forestQuestion6 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhatTreeLosesLeaves.png", {x: 30, y: 10, width: 1020, height: 700});
        // Legg til knapp for "riktig svar", og knapp for "feil svar", evt selve oppgaven?

    } else if (tall === 6) {
        const forestQuestion7 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhoEatsNuts.png", {x: 30, y: 10, width: 1020, height: 700});
        // Legg til knapp for "riktig svar", og knapp for "feil svar", evt selve oppgaven?

    } else if (tall === 7) {
        const forestQuestion8 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhoHowls.png", {x: 30, y: 10, width: 1020, height: 700});
        // Legg til knapp for "riktig svar", og knapp for "feil svar"

    } else if (tall === 8) {
        const forestQuestion9 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhoMakesHoney.png", {x: 30, y: 10, width: 1020, height: 700});
        // Legg til knapp for "riktig svar" og knapp for "feil svar"

    } else if (tall === 9) {
        const forestQuestion10 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWoodpecker.png", {x: 30, y: 10, width: 1020, height: 700});
        // Legg til knapp for "riktig svar" og knapp for "feil svar"
    }
}


    // CITY



    // BEACH



// CHALLENGE CARDS

    // FOREST



    // CITY



    // BEACH 



/*
const loadingbar10 = new Blocks.Image("Bilder/Objekter/loadingbar10.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar9 = new Blocks.Image("Bilder/Objekter/loadingbar9.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar8 = new Blocks.Image("Bilder/Objekter/loadingbar8.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar7 = new Blocks.Image("Bilder/Objekter/loadingbar7.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar6 = new Blocks.Image("Bilder/Objekter/loadingbar6.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar5 = new Blocks.Image("Bilder/Objekter/loadingbar5.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar4 = new Blocks.Image("Bilder/Objekter/loadingbar4.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar3 = new Blocks.Image("Bilder/Objekter/loadingbar3.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar2 = new Blocks.Image("Bilder/Objekter/loadingbar2.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar1 = new Blocks.Image("Bilder/Objekter/loadingbar1.png", {x: 140, y: 20, width: 800, height: 100});
const loadingbar0 = new Blocks.Image("Bilder/Objekter/loadingbar0.png", {x: 140, y: 20, width: 800, height: 100});
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
