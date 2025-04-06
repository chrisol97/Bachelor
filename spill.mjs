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
    let forestBackgroundMusic = new Audio("Lydfiler/Musikk/forestBackgroundMusic.mp3");
    let beachBackgroundMusic = new Audio("Lydfiler/Musikk/beachBackgroundMusic.mp3");

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
    let mainCharVoiceIntro9 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro9.mp3");
    let mainCharVoiceIntro10 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro10.mp3");
    let mainCharVoiceBeachIntro1 = new Audio("Lydfiler/Karakterer/mainCharVoiceBeachIntro1.mp3");
    let mainCharVoiceForestIntro1 = new Audio("Lydfiler/Karakterer/mainCharVoiceForestIntro1.mp3");
    let mainCharVoiceCityIntro1 = new Audio("Lydfiler/Karakterer/mainCharVoiceCityIntro1.mp3");
    let mainCharVoiceCardsExpl1 = new Audio("Lydfiler/Karakterer/mainCharVoiceCardsExpl1.mp3");
    let mainCharVoiceCardsExpl2 = new Audio("Lydfiler/Karakterer/mainCharVoiceCardsExpl2.mp3");
    let giraffeVoiceIntro1 = new Audio("Lydfiler/Karakterer/giraffeVoiceIntro1.mp3");
    let catVoiceIntro1 = new Audio("Lydfiler/Karakterer/catVoiceIntro1.mp3");
    let styrerVoiceIntro1 = new Audio("Lydfiler/Karakterer/styrerVoiceIntro1.mp3");
    let ouchCatMainChar = new Audio("Lydfiler/Karakterer/ouchCatMainChar.mp3"); 

// KORT

    // RESPONSES
    let applause = new Audio("Lydfiler/Kort/Responses/applause.mp3");
    let notQuiteCorrect = new Audio("Lydfiler/Kort/Responses/notQuiteCorrect.mp3");
    let wrongAnswerSound1 = new Audio("Lydfiler/Kort/Responses/wrongAnswerSound1.mp3");
    let wrongAnswerSound2 = new Audio("Lydfiler/Kort/Responses/wrongAnswerSound2.mp3");
    let challengeCompleted1 = new Audio("Lydfiler/Kort/Responses/challengeCompleted1.mp3");
    let challengeCompleted2 = new Audio("Lydfiler/Kort/Responses/challengeCompleted2.mp3");
    let challengeNotCompleted1 = new Audio("Lydfiler/Kort/Responses/challengeNotCompleted1.mp3");
    let yesCorrect = new Audio("Lydfiler/Kort/Responses/yesCorrect.mp3");

    // FOREST

        // CHANCE
        let chanceCardF1Voice = new Audio("Lydfiler/Kort/Forest/Chance/chanceCardF1Voice.mp3");
        let chanceCardF2Voice = new Audio("Lydfiler/Kort/Forest/Chance/chanceCardF2Voice.mp3");
        let chanceCardF3Voice = new Audio("Lydfiler/Kort/Forest/Chance/chanceCardF3Voice.mp3");
        let chanceCardF4Voice = new Audio("Lydfiler/Kort/Forest/Chance/chanceCardF4Voice.mp3");
        let chanceCardF5Voice = new Audio("Lydfiler/Kort/Forest/Chance/chanceCardF5Voice.mp3");
        let chanceCardF6Voice = new Audio("Lydfiler/Kort/Forest/Chance/chanceCardF6Voice.mp3");

        // QUESTION
        let qCardFBiggestAnimalVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFBiggestAnimalVoice.mp3");
        let qCardFCountingSquirrelsVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFCountingSquirrelsVoice.mp3");
        let qCardFMikkelRevVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFMikkelRevVoice.mp3");
        let qCardFOddOneOutVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFOddOneOutVoice.mp3");
        let qCardFOwlSoundVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFOwlSoundVoice.mp3");
        let qCardFWhatTreeLosesLeavesVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFWhatTreeLosesLeavesVoice.mp3");
        let qCardFWhoEatsNutsVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFWhoEatsNutsVoice.mp3");
        let qCardFWhoHowlsVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFWhoHowlsVoice.mp3");
        let qCardFWhoMakesHoneyVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFWhoMakesHoneyVoice.mp3");
        let qCardFWoodpeckerVoice = new Audio("Lydfiler/Kort/Forest/Question/qCardFWoodpeckerVoice.mp3");

        // CHALLENGE
        let chCardFFloodVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFFloodVoice.mp3");
        let chCardFGiraffeLostVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFGiraffeLostVoice.mp3");
        let chCardFHulkBabyPoopVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFHulkBabyPoopVoice.mp3");
        let chCardFJumpLikeRabbitVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFJumpLikeRabbitVoice.mp3");
        let chCardFMooseLaughVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFMooseLaughVoice.mp3");
        let chCardFNameAnimalsVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFNameAnimalsVoice.mp3");
        let chCardFRobotMushroomVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFRobotMushroomVoice.mp3");
        let chCardFSongAboutTrollVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFSongAboutTrollVoice.mp3");
        let chCardFStretchLikeTreeVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFStretchLikeTreeVoice.mp3");
        let chCardFTadpoleVoice = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFTadpoleVoice.mp3");
        let chCardFMooseLaughVoiceComplete = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFMooseLaughVoiceComplete.mp3");
        let chCardFRobotMushroomVoiceComplete = new Audio("Lydfiler/Kort/Forest/Challenge/chCardFRobotMushroomVoiceComplete.mp3");

    // CITY

        // CHANCE
        let chanceCardC1Voice = new Audio("Lydfiler/Kort/City/Chance/chanceCardC1Voice.mp3");
        let chanceCardC2Voice = new Audio("Lydfiler/Kort/City/Chance/chanceCardC2Voice.mp3");
        let chanceCardC3Voice = new Audio("Lydfiler/Kort/City/Chance/chanceCardC3Voice.mp3");
        let chanceCardC4Voice = new Audio("Lydfiler/Kort/City/Chance/chanceCardC4Voice.mp3");
        let chanceCardC5Voice = new Audio("Lydfiler/Kort/City/Chance/chanceCardC5Voice.mp3");
        let chanceCardC6Voice = new Audio("Lydfiler/Kort/City/Chance/chanceCardC6Voice.mp3");
        let chanceCardC7Voice = new Audio("Lydfiler/Kort/City/Chance/chanceCardC7Voice.mp3");
        let chanceCardC8Voice = new Audio("Lydfiler/Kort/City/Chance/chanceCardC8Voice.mp3");

        // QUESTION
        let qCardCCountingWindowsVoice = new Audio("Lydfiler/Kort/City/Question/qCardCCountingWindowsVoice.mp3");
        let qCardCRedLightVoice = new Audio("Lydfiler/Kort/City/Question/qCardCRedLightVoice.mp3");
        let qCardCTwoThingsBakerVoice = new Audio("Lydfiler/Kort/City/Question/qCardCTwoThingsBakerVoice.mp3");
        let qCardCWhatColorTrafficLightVoice = new Audio("Lydfiler/Kort/City/Question/qCardCWhatColorTrafficLightVoice.mp3");
        let qCardCWhatIsABusVoice = new Audio("Lydfiler/Kort/City/Question/qCardCWhatIsABusVoice.mp3");
        let qCardCWhatIsDoctorVoice = new Audio("Lydfiler/Kort/City/Question/qCardCWhatIsDoctorVoice.mp3");
        let qCardCWhatIsFiremanVoice = new Audio("Lydfiler/Kort/City/Question/qCardCWhatIsFiremanVoice.mp3");
        let qCardCWhatIsPoliceVoice = new Audio("Lydfiler/Kort/City/Question/qCardCWhatIsPoliceVoice.mp3");
        let qCardCWhatIsStoreVoice = new Audio("Lydfiler/Kort/City/Question/qCardCWhatIsStoreVoice.mp3");
        let qCardCWheelsOnTheBusVoice = new Audio("Lydfiler/Kort/City/Question/qCardCWheelsOnTheBusVoice.mp3");

        // CHALLENGE
        let chCardCBakeBreadVoice = new Audio("Lydfiler/Kort/City/Challenge/chCardCBakeBreadVoice.mp3");
        let chCardCBuildBuildingVoice = new Audio("Lydfiler/Kort/City/Challenge/chCardCBuildBuildingVoice.mp3");
        let chCardCCatHidingVoice = new Audio("Lydfiler/Kort/City/Challenge/chCardCCatHidingVoice.mp3");
        let chCardCCountCarsVoice = new Audio("Lydfiler/Kort/City/Challenge/chCardCCountCarsVoice.mp3");
        let chCardCDroppedGroceriesVoice = new Audio("Lydfiler/Kort/City/Challenge/chCardCDroppedGroceriesVoice.mp3");

    // BEACH

        // CHANCE
        let chanceCardB1Voice = new Audio("Lydfiler/Kort/Beach/Chance/chanceCardB1Voice.mp3");
        let chanceCardB2Voice = new Audio("Lydfiler/Kort/Beach/Chance/chanceCardB2Voice.mp3");
        let chanceCardB3Voice = new Audio("Lydfiler/Kort/Beach/Chance/chanceCardB3Voice.mp3");
        let chanceCardB4Voice = new Audio("Lydfiler/Kort/Beach/Chance/chanceCardB4Voice.mp3");
        let chanceCardB5Voice = new Audio("Lydfiler/Kort/Beach/Chance/chanceCardB5Voice.mp3");
        let chanceCardB6Voice = new Audio("Lydfiler/Kort/Beach/Chance/chanceCardB6Voice.mp3");

        // QUESTION
        let qCardBBiggestSandCastleVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBBiggestSandCastleVoice.mp3");
        let qCardBGarbageVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBGarbageVoice.mp3");
        let qCardBJellyfishStringVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBJellyfishStringVoice.mp3");
        let qCardBOddOneOutVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBOddOneOutVoice.mp3");
        let qCardBSandTracksVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBSandTracksVoice.mp3");
        let qCardBSharkVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBSharkVoice.mp3");
        let qCardBStarfishVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBStarfishVoice.mp3");
        let qCardBSunscreenVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBSunscreenVoice.mp3");
        let qCardBSwimSafelyVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBSwimSafelyVoice.mp3");
        let qCardBThreeDifferentAnimalsVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBThreeDifferentAnimalsVoice.mp3");
        let qCardBWhaleVoice = new Audio("Lydfiler/Kort/Beach/Question/qCardBWhaleVoice.mp3");

        // CHALLENGE
        let chCardBBiggestFishVoice = new Audio("Lydfiler/Kort/Beach/Challenge/chCardBBiggestFishVoice.mp3");
        let chCardBCatWaterVoice = new Audio("Lydfiler/Kort/Beach/Challenge/chCardBCatWaterVoice.mp3");
        let chCardBCountFishVoice = new Audio("Lydfiler/Kort/Beach/Challenge/chCardBCountFishVoice.mp3");
        let chCardBMermaidCatVoice = new Audio("Lydfiler/Kort/Beach/Challenge/chCardBMermaidCatVoice.mp3");
        let chCardBSongAboutOceanVoice = new Audio("Lydfiler/Kort/Beach/Challenge/chCardBSongAboutOceanVoice.mp3");
        let chCardBSunburntGiraffeVoice = new Audio("Lydfiler/Kort/Beach/Challenge/chCardBSunburntGiraffeVoice.mp3");
        let chCardBWalkLikeCrabVoice = new Audio("Lydfiler/Kort/Beach/Challenge/chCardBWalkLikeCrabVoice.mp3");



Start(startscreen);

function startscreen() {
    const startscreenobject = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 325, y: 150, width: 400, height:500 });
    const skipbutton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 200, y: 200, width: 200, height: 200});                           // HUSK Å FJERNE DETTE
    Actions.Click(skipbutton, () => {
        GaaTil(sceneCityHub);
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
    const videobutton = new Blocks.Image("Bilder/Knapper/videoButton.png", {x: 750, y: 190, width: 250, height: 150});
    const skipbutton = new Blocks.Image("Bilder/Knapper/playButton.png", {x: 60, y: 190, width: 250, height: 150});                                 // Legge til navn på spillet, og forklaring av hva knappene gjør
    Actions.Click(skipbutton, () => {
        titlescreenmusic.pause();
        GaaTil(sceneIntro5)
    })
    Actions.Click(videobutton, () => {
        titlescreenmusic.pause();
        GaaTil(sceneIntro1);
    })
    
}

function sceneIntro1() {
    mainCharVoiceIntro1.play();
    flyingplanesound.play();
    const scene1background = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", {x: -8, y: -8, width: 1088, height: 818});
    const sign1 = new Blocks.Image("Bilder/Objekter/signHumlekollen.png", {x: 100, y: 350, width: 120, height: 150});
    const sign2 = new Blocks.Image("Bilder/Objekter/signMarihønehula.png", {x: 475, y: 350, width: 75, height: 90});
    const sign3 = new Blocks.Image("Bilder/Objekter/signMaurtua.png", {x: 940, y: 320, width: 100, height: 150});
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
    Actions.Colide(mainChar, yellowball, () => {Actions.Tween(yellowball, -10, 10)});
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
        styrerVoiceIntro1.play();                                                                   
    }
    styrerVoiceIntro1.onended = () => {                                                             
        styrerPlaceholderTalking.hide();
        styrerPlaceholder.show();
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro7.play();                                                                 
    }
    mainCharVoiceIntro7.onended = () => {                                                           
        mainCharTalking.hide();
        mainCharTalking2.show();
        mainCharVoiceIntro8.play();                                                                 
    } 
    mainCharVoiceIntro8.onended = () => {                                                           
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
    mainCharVoiceIntro9.play();
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
    mainCharVoiceIntro9.onended = () => {
        mainCharVoiceIntro10.play();
        beachText.show();
        cityText.show();
        forestText.show();
        kindergartenText.show();
    }
    mainCharVoiceIntro10.onended = () => {
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
    mainCharVoiceBeachIntro1.play()                     
    const sceneBeachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", {x: -8, y: -8, width: 1088, height: 818});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 700, y: 550, width: 300, height: 400, auto: true, loop: true});
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 330, y: 330, width: 400, height: 550, auto: true, loop: true});
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    cityButton.hide();
    forestButton.hide();
    kindergartenButton.hide();
    mainCharTalking2.hide();
    qCardBack.hide();
    chCardBack.hide();
    chanceCardBack.hide();
    mainCharVoiceBeachIntro1.onended = () => {         
        qCardBack.show();
        chCardBack.show();
        chanceCardBack.show();
        mainCharVoiceCardsExpl1.play();                      
    }
    mainCharVoiceCardsExpl1.onended = () => {             
        cityButton.show();
        forestButton.show();
        kindergartenButton.show();
        mainCharTalking.hide();
        mainCharTalking2.show();
        mainCharVoiceCardsExpl2.play();                 
    }
    mainCharVoiceCardsExpl2.onended = () => {           
        GaaTil(sceneBeachHub)
    }

}

function sceneBeachHub() {
    beachBackgroundMusic.play();
    beachBackgroundMusic.loop = true;
    beachBackgroundMusic.currentTime = 0;
    const sceneBeachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", {x: -8, y: -8, width: 1088, height: 818});
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    Actions.Click(forestButton, () => {
        beachBackgroundMusic.pause();
        GaaTil(sceneForestHub);
    });
    Actions.Click(cityButton, () => {
        beachBackgroundMusic.pause();
        GaaTil(sceneCityHub);
    });
    Actions.Click(kindergartenButton, () => {
        beachBackgroundMusic.pause();
        GaaTil(sceneOutro1);
    });
    Actions.Click(qCardBack, () => {
        beachBackgroundMusic.pause();
        GaaTil(sceneBeachQuestionFront);
    });
    Actions.Click(chCardBack, () => {
        beachBackgroundMusic.pause();
        GaaTil(sceneBeachChallengeFront);
    });
    Actions.Click(chanceCardBack, () => {
        beachBackgroundMusic.pause();
        GaaTil(sceneBeachChanceFront);
    });
}

// FOREST - POTENSIELT I EGEN .MJS-FIL

function sceneForestIntro1() {
    mainCharVoiceForestIntro1.play();                                                    
    const sceneForestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 700, y: 550, width: 300, height: 400, auto: true, loop: true});
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 330, y: 330, width: 400, height: 550, auto: true, loop: true});
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    cityButton.hide();
    beachButton.hide();
    kindergartenButton.hide();
    mainCharTalking2.hide();
    qCardBack.hide();
    chCardBack.hide();
    chanceCardBack.hide();
    mainCharVoiceForestIntro1.onended = () => {          
        qCardBack.show();
        chCardBack.show();
        chanceCardBack.show();
        mainCharVoiceCardsExpl1.play();
    }
    mainCharVoiceCardsExpl1.onended = () => {                
        cityButton.show();
        beachButton.show();
        kindergartenButton.show();
        mainCharTalking.hide();
        mainCharTalking2.show();
        mainCharVoiceCardsExpl2.play();                 
    }
    mainCharVoiceCardsExpl2.onended = () => {           
        GaaTil(sceneForestHub)
    }

}

function sceneForestHub() {
    forestBackgroundMusic.play();
    forestBackgroundMusic.loop = true;
    forestBackgroundMusic.currentTime = 0;
    const sceneForestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    Actions.Click(cityButton, () => {
        forestBackgroundMusic.pause();
        GaaTil(sceneCityHub);
    });
    Actions.Click(beachButton, () => {
        forestBackgroundMusic.pause();
        GaaTil(sceneBeachHub);
    });
    Actions.Click(kindergartenButton, () => {
        forestBackgroundMusic.pause();
        GaaTil(sceneOutro1);
    });
    Actions.Click(qCardBack, () => {
        forestBackgroundMusic.pause();
        GaaTil(sceneForestQuestionFront);
    });
    Actions.Click(chCardBack, () => {
        forestBackgroundMusic.pause();
        GaaTil(sceneForestChallengeFront);
    });
    Actions.Click(chanceCardBack, () => {
        forestBackgroundMusic.pause();
        GaaTil(sceneForestChanceFront);
    });
}

// CITY - POTENSIELT I EGEN .MJS-FIL

function sceneCityIntro1() {
    mainCharVoiceCityIntro1.play();
    const sceneCityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", {x: 15, y: 200, width: 330, height: 450});
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", {x: 370, y: 200, width: 330, height: 450});
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", {x: 720, y: 200, width: 330, height: 450});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 700, y: 550, width: 300, height: 400, auto: true, loop: true});
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 330, y: 330, width: 400, height: 550, auto: true, loop: true});
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 460, y: 20, width: 150, height: 150});
    forestButton.hide();
    beachButton.hide();
    kindergartenButton.hide();
    mainCharTalking2.hide();
    qCardBack.hide();
    chCardBack.hide();
    chanceCardBack.hide();
    mainCharVoiceCityIntro1.onended = () => {
        qCardBack.show();
        chCardBack.show();
        chanceCardBack.show();
        mainCharVoiceCardsExpl1.play();                      
    }
    mainCharVoiceCardsExpl1.onended = () => {                
        forestButton.show();
        beachButton.show();
        kindergartenButton.show();
        mainCharTalking.hide();
        mainCharTalking2.show();
        mainCharVoiceCardsExpl2.play();                 
    }
    mainCharVoiceCardsExpl2.onended = () => {           
        GaaTil(sceneCityHub)
    }
}

function sceneCityHub() {                                                                                                   // Spille inn bakgrunnsmusikk?
    const sceneCityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", {x: 200, y: 20, width: 150, height: 150});
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", {x: 717, y: 20, width: 150, height: 150});
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.PNG", {x: 460, y: 20, width: 150, height: 150});
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
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        const chanceCard0 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF1.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardF1Voice.play();
        const seagull = new Blocks.Image("Bilder/Objekter/seagull.png", {x: 0, y: 460, width: 400, height: 250});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardF1Voice.pause();
            chanceCardF1Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 1) {
        const chanceCard1 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF2.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardF2Voice.play();
        const bootMud = new Blocks.Image("Bilder/Objekter/bootInMud.png", {x: 600, y: 460, width: 400, height: 250});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardF2Voice.pause();
            chanceCardF2Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 2) {
        const chanceCard2 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF3.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardF3Voice.play();
        const rocks = new Blocks.Image("Bilder/Objekter/rocks1.png", {x: 600, y: 400, width: 300, height: 250});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardF3Voice.pause();
            chanceCardF3Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 3) {
        const chanceCard3 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF4.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardF4Voice.play();
        const troll = new Blocks.Image("Bilder/Karakterer/troll.png", {x: 700, y: 400, width: 300, height: 300});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardF4Voice.pause();
            chanceCardF4Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 4) {
        const chanceCard4 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF5.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardF5Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardF5Voice.pause();
            chanceCardF5Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 5) {
        const chanceCard5 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF6.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardF6Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardF6Voice.pause();
            chanceCardF6Voice.currentTime = 0;
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
        chanceCardC1Voice.play();
        const redLight = new Blocks.Image("Bilder/Objekter/redLight.png", {x: 800, y: 450, width: 150, height: 250});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardC1Voice.pause();
            chanceCardC1Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 1) {
        const chanceCard1 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC2.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardC2Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardC2Voice.pause();
            chanceCardC2Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 2) {
        const chanceCard2 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC3.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardC3Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardC3Voice.pause();
            chanceCardC3Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 3) {
        const chanceCard3 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC4.png", {x: 30, y: 10, width: 1020, height: 700})
        chanceCardC4Voice.play();
        const bus = new Blocks.Image("Bilder/Objekter/bus.png", {x: 650, y: 480, width: 300, height: 200});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardC4Voice.pause();
            chanceCardC4Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 4) {
        const chanceCard4 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC5.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardC5Voice.play();
        const racecar = new Blocks.Image("Bilder/Objekter/raceCar.png", {x: 700, y: 500, width: 300, height: 200});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardC5Voice.pause();
            chanceCardC5Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 5) {
        const chanceCard5 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC6.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardC6Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardC6Voice.pause();
            chanceCardC6Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 6) {
        const chanceCard6 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC7.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardC7Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 120, height: 110});
        Actions.Click(continueButton, () => {
            chanceCardC7Voice.pause();
            chanceCardC7Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 7) {
        const chanceCard7 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC8.png", {x: 30, y: 10, width: 1020, height: 700});
        chanceCardC8Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 120, height: 110});
        Actions.Click(continueButton, () => {
            chanceCardC8Voice.pause();
            chanceCardC8Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });
    }
}


    // BEACH

function sceneBeachChanceFront() {
    const beachmap = new Blocks.Image("Bilder/Bakgrunner/beach.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        chanceCardB1Voice.play();
        const chanceCard0 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB1.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardB1Voice.pause();
            chanceCardB1Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 1) {
        chanceCardB2Voice.play();
        const chanceCard1 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB2.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardB2Voice.pause();
            chanceCardB2Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 2) {
        chanceCardB3Voice.play();
        const chanceCard2 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB3.png", {x: 30, y: 10, width: 1020, height: 700});
        const plane = new Blocks.Image("Bilder/Objekter/plane.png", {x: 600, y: 450, width: 400, height: 220});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardB3Voice.pause();
            chanceCardB3Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 3) {
        chanceCardB4Voice.play();
        const chanceCard3 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB4.png", {x: 30, y: 10, width: 1020, height: 700});
        const crab = new Blocks.Image("Bilder/Objekter/crab.png", {x: 720, y: 500, width: 250, height: 205});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardB4Voice.pause();
            chanceCardB4Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 4) {
        chanceCardB5Voice.play();
        const chanceCard4 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB5.png", {x: 30, y: 10, width: 1020, height: 700});
        const seagull = new Blocks.Image("Bilder/Objekter/seagull.png", {x: 750, y: 490, width: 300, height: 150});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 120, height: 110});
        Actions.Click(continueButton, () => {
            chanceCardB5Voice.pause();
            chanceCardB5Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 5) {
        chanceCardB6Voice.play();
        const chanceCard5 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB6.png", {x: 30, y: 10, width: 1020, height: 700});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chanceCardB6Voice.pause();
            chanceCardB6Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });
    }
}

// QUESION CARDS                                                                     // Spill inn lyder og legg til objektbilder til enkelte kort

    // FOREST

function sceneForestQuestionFront() {                                                                                                          
    const forestbackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 10);
    //tall = 2; //For Debugging
    if (tall === 0) {
        const forestQuestion1 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFBiggestAnimal.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardFBiggestAnimalVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardFBiggestAnimalVoice.pause();
            qCardFBiggestAnimalVoice.currentTime = 0;
            GaaTil(sceneForestQ1Answer);
        })

    } else if (tall === 1) {
        const forestQuestion2 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFCountingSquirrels.png", {x:30, y: 10, width: 1020, height: 700});
        qCardFCountingSquirrelsVoice.play();
        const squirrel = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 50, y: 400, width: 300, height: 300});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardFCountingSquirrelsVoice.pause();
            qCardFCountingSquirrelsVoice.currentTime = 0;
            GaaTil(sceneForestQ2Answer);
        })

    } else if (tall === 2) {
        const forestQuestion3 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFMikkelRev.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardFMikkelRevVoice.play();
        const letter = new Blocks.Image("Bilder/Objekter/mikkelRevLetter.png", {x: 50, y: 450, width: 350, height: 200});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardFMikkelRevVoice.pause();
            qCardFMikkelRevVoice.currentTime = 0;
            GaaTil(sceneForestQ3Answer)
        })

    } else if (tall === 3) {
        const forestQuestion4 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFOddOneOut.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardFOddOneOutVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardFOddOneOutVoice.pause();
            qCardFOddOneOutVoice.currentTime = 0;
            GaaTil(sceneForestQ4Answer);
        })

    } else if (tall === 4) {
        const forestQuestion5 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFOwlSound.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardFOwlSoundVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardFOwlSoundVoice.pause();
            qCardFOwlSoundVoice.currentTime = 0;
            GaaTil(sceneForestQ5Answer);
        })

    } else if (tall === 5) {
        const forestQuestion6 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhatTreeLosesLeaves.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardFWhatTreeLosesLeavesVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardFWhatTreeLosesLeavesVoice.pause();
            qCardFWhatTreeLosesLeavesVoice.currentTime = 0;
            GaaTil(sceneForestQ6Answer);
        })

    } else if (tall === 6) {
        const forestQuestion7 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhoEatsNuts.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardFWhoEatsNutsVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardFWhoEatsNutsVoice.pause();
            qCardFWhoEatsNutsVoice.currentTime = 0;
            GaaTil(sceneForestQ7Answer);
        })

    } else if (tall === 7) {
        const forestQuestion8 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhoHowls.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardFWhoHowlsVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardFWhoHowlsVoice.pause();
            qCardFWhoHowlsVoice.currentTime = 0;
            GaaTil(sceneForestQ8Answer);
        })

    } else if (tall === 8) {
        const forestQuestion9 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhoMakesHoney.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardFWhoMakesHoneyVoice.play();
        const beeCube = new Blocks.Image("Bilder/Objekter/beeCube.png", {x: 750, y: 450, width: 200, height: 200});
        const continuebutton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continuebutton, () => {
            qCardFWhoMakesHoneyVoice.pause();
            qCardFWhoMakesHoneyVoice.currentTime = 0;
            GaaTil(sceneForestQ9Answer);
        })

    } else if (tall === 9) {
        const forestQuestion10 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWoodpecker.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardFWoodpeckerVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardFWoodpeckerVoice.pause();
            qCardFWoodpeckerVoice.currentTime = 0;
            GaaTil(sceneForestQ10Answer);
        })
    }
}


    // CITY

function sceneCityQuestionFront() {
    const cityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 10);
    //tall = 9; // For debugging
    if (tall === 0) {
        const cityQuestion1 = new Blocks.Image("Bilder/Kort/City/Question/qCardCCountingWindows.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCCountingWindowsVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardCCountingWindowsVoice.pause();
            qCardCCountingWindowsVoice.currentTime = 0;
            GaaTil(sceneCityQ1Answer);
        })

    } else if (tall === 1) {
        const cityQuestion2 = new Blocks.Image("Bilder/Kort/City/Question/qCardCRedLight.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCRedLightVoice.play();
        const redLight = new Blocks.Image("Bilder/Objekter/redLight.png", {x: 50, y: 480, width: 200, height: 350});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardCRedLightVoice.pause();
            qCardCRedLightVoice.currentTime = 0;
            GaaTil(sceneCityQ2Answer);
        })

    } else if (tall === 2) {
        const cityQuestion3 = new Blocks.Image("Bilder/Kort/City/Question/qCardCTwoThingsBaker.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCTwoThingsBakerVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", {x: 40, y: 554, width: 150, height: 150});
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", {x: 891, y: 554, width: 150, height: 150});
        Actions.Click(donebutton, () => {
            qCardCRedLightVoice.pause();
            qCardCRedLightVoice.currentTime = 0;
            applause.play();
            applause.onended = () => {
                GaaTil(sceneCityHub);
            }
        })
        Actions.Click(notdonebutton, () => {
            qCardCRedLightVoice.pause();
            qCardCRedLightVoice.currentTime = 0;
            challengeNotCompleted1.play();
            challengeNotCompleted1.onended = () => {
                GaaTil(sceneCityHub);
            }
        })

    } else if (tall === 3) {
        const cityQuestion4 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatColorTrafficLight.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCWhatColorTrafficLightVoice.play();
        const car = new Blocks.Image("Bilder/Objekter/car.png", {x: 35, y: 500, width: 300, height: 200});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardCWhatColorTrafficLightVoice.pause();
            qCardCWhatColorTrafficLightVoice.currentTime = 0;
            GaaTil(sceneCityQ3Answer);
        })

    } else if (tall === 4) {
        const cityQuestion5 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsABus.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCWhatIsABusVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 620, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardCWhatIsABusVoice.pause();
            qCardCWhatIsABusVoice.currentTime = 0;
            GaaTil(sceneCityQ4Answer);
        })

    } else if (tall === 5) {
        const cityQuestio6 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsDoctor.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCWhatIsDoctorVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardCWhatIsDoctorVoice.pause();
            qCardCWhatIsDoctorVoice.currentTime = 0;
            GaaTil(sceneCityQ5Answer);
        })

    } else if (tall === 6) {
        const cityQuestion7 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsFireman.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCWhatIsFiremanVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardCWhatIsFiremanVoice.pause();
            qCardCWhatIsFiremanVoice.currentTime = 0;
            GaaTil(sceneCityQ6Answer);
        })

    } else if (tall === 7) {
        const cityQuestion8 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsPolice.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCWhatIsPoliceVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardCWhatIsPoliceVoice.pause();
            qCardCWhatIsPoliceVoice.currentTime = 0;
            GaaTil(sceneCityQ7Answer);
        })

    } else if (tall === 8) {
        const cityQuestion9 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsStore.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCWhatIsStoreVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        const icecream = new Blocks.Image("Bilder/Objekter/iceCream.png", {x: 50, y: 50, width: 200, height: 280});
        const lemon = new Blocks.Image("Bilder/Objekter/lemon.png", {x: 50, y: 500, width: 200, height: 200});
        const strawberry = new Blocks.Image("Bilder/Objekter/strawberry.png", {x: 820, y: 500, width: 200, height: 200});
        Actions.Click(continueButton, () => {
            qCardCWhatIsStoreVoice.pause();
            qCardCWhatIsStoreVoice.currentTime = 0;
            GaaTil(sceneCityQ8Answer);
        })

    } else if (tall === 9) {
        const cityQuestion10 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWheelsOnTheBus.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardCWheelsOnTheBusVoice.play();
        const bus = new Blocks.Image("Bilder/Objekter/bus.png", {x: 75, y: 500, width: 300, height: 200});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            qCardCWheelsOnTheBusVoice.pause();
            qCardCWheelsOnTheBusVoice.currentTime = 0;
            GaaTil(sceneCityQ9Answer);
        })
        // Legg til knapp for "riktig svar" og knapp for "feil svar" + objekter + lyd

    }
}


    // BEACH

function sceneBeachQuestionFront() {
    const beachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 11);
    // tall = 0; // For debugging
    if (tall === 0) {
        const beachQuestion1 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBBiggestSandCastle.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBBiggestSandCastleVoice.play();
        // Lag selve oppgaven + lyd --> gå videre til en ny scene med oppgave

    } else if (tall === 1) {
        const beachQuestion2 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBGarbage.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBGarbageVoice.play();
        // Legg til knapp for "riktig svar" og knapp for "feil svar", evt videre til ny scene med svaralternativ + lyd

    } else if (tall === 2) {
        const beachQuestion3 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBJellyfishString.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBJellyfishStringVoice.play();
        // Gå videre til ny scene med Maneten Martine + svaralternativ. Husk å spille inn lyd

    } else if (tall === 3) {
        const beachQuestion4 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBOddOneOut.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBOddOneOutVoice.play();
        // Gå videre til ny scene med bilder av forskjellige dyr/svaralternativ. Ett riktig svar. + lyd

    } else if (tall === 4) {
        const beachQuestion5 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBSandTracks.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBSandTracksVoice.play();
        // Gå videre til ny scene med bilde av fotspor + svaralternativ. + lyd + objekter

    } else if (tall === 5) {
        const beachQuestion6 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBShark.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBSharkVoice.play();
        // Legg til knapp for "riktig svar" og knapp for "feil svar", evt videre til ny scene med svaralternativ + lyd

    } else if (tall === 6) {
        const beachQuestion7 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBStarfish.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBStarfishVoice.play();
        // Legg til knapp for "riktig svar" og knapp for "feil svar", evt videre til ny scene med svaralternativ + lyd

    } else if (tall === 7) {
        const beachQuestion8 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBSunscreen.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBSunscreenVoice.play();
        // Legg til knapp for "riktig svar" og knapp for "feil svar", evt videre til ny scene med svaralternativ + lyd

    } else if (tall === 8) {
        const beachQuestion9 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBSwimSafely.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBSwimSafelyVoice.play();
        // Legg til knapp for "riktig svar" og knapp for "feil svar", evt videre til ny scene med svaralternativ + lyd + objekter

    } else if (tall === 9) {
        const beachQuestion10 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBThreeDifferentAnimals.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBThreeDifferentAnimalsVoice.play();
        // Legg til knapp for "riktig svar" og knapp for "feil svar" + lyd

    } else if (tall === 10) {
        const beachQuestion11 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBWhale.png", {x: 30, y: 10, width: 1020, height: 700});
        qCardBWhaleVoice.play();
        // Legg til knapp for "riktig svar" og knapp for "feil svar", evt videre til ny scene med svaralternativ + lyd + objekter

    }
}


// CHALLENGE CARDS

    // FOREST

function sceneForestChallengeFront() {
    const forestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 10);
    //tall = 9; // For debugging
    if (tall === 0) {
        const forestChallenge1 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFFlood.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFFloodVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chCardFFloodVoice.pause();
            chCardFFloodVoice.currentTime = 0;
            GaaTil(sceneForestCh1Answer);
        })

    } else if (tall === 1) {
        const forestChallenge2 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFGiraffeLost.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFGiraffeLostVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        const giraffe = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 800, y: 310, width: 220, height: 400});
        Actions.Click(continueButton, () => {
            chCardFGiraffeLostVoice.pause();
            chCardFGiraffeLostVoice.currentTime = 0;
            GaaTil(sceneForestCh2Answer);
        })

    } else if (tall === 2) {
        const forestChallenge3 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFHulkBabyPoop.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFHulkBabyPoopVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        const hulkbaby = new Blocks.Image("Bilder/Karakterer/hulkbaby.png", {x: 50, y: 400, width: 250, height: 300});
        Actions.Click(continueButton, () => {
            chCardFHulkBabyPoopVoice.pause();
            chCardFHulkBabyPoopVoice.currentTime = 0;
            GaaTil(sceneForestCh3Answer);
        })

    } else if (tall === 3) {
        const forestChallenge4 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFJumpLikeRabbit.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFJumpLikeRabbitVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", {x: 150, y: 520, width: 150, height: 150});
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", {x: 788, y: 520, width: 150, height: 150});
        Actions.Click(donebutton, () => {
            chCardFJumpLikeRabbitVoice.pause();
            chCardFJumpLikeRabbitVoice.currentTime = 0;
            challengeCompleted2.play();
            challengeCompleted2.onended = () => {
                GaaTil(sceneForestHub);
            }
        })
        Actions.Click(notdonebutton, () => {
            chCardFJumpLikeRabbitVoice.pause();
            chCardFJumpLikeRabbitVoice.currentTime = 0;
            challengeNotCompleted1.play();
            challengeNotCompleted1.onended = () => {
                GaaTil(sceneForestHub);
            }
        })

    } else if (tall === 4) {
        const forestChallenge5 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFMooseLaugh.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFMooseLaughVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        const moose = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", {x: 100, y: 450, width: 350, height: 450});
        Actions.Click(continueButton, () => {
            chCardFMooseLaughVoice.pause();
            chCardFMooseLaughVoice.currentTime = 0;
            GaaTil(sceneForestCh4Answer);
        })

    } else if (tall === 5) {
        const forestChallenge6 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFNameAnimals.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFNameAnimalsVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", {x: 150, y: 520, width: 150, height: 150});
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", {x: 788, y: 520, width: 150, height: 150});
        Actions.Click(donebutton, () => {
            chCardFNameAnimalsVoice.pause();
            chCardFNameAnimalsVoice.currentTime = 0;
            applause.play();
            applause.onended = () => {
                GaaTil(sceneForestHub);
            }
        })
        Actions.Click(notdonebutton, () => {
            chCardFNameAnimalsVoice.pause();
            chCardFNameAnimalsVoice.currentTime = 0;
            challengeNotCompleted1.play();
            challengeNotCompleted1.onended = () => {
                GaaTil(sceneForestHub);
            }
        })

    } else if (tall === 6) {
        const forestChallenge7 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFRobotMushroom.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFRobotMushroomVoice.play();
        const robot = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", {x: 30, y: 410, width: 200, height: 300});
        const mushroom1 = new Blocks.Image("Bilder/Objekter/chantarelleMushroom.png", {x: 475, y: 540, width: 150, height: 150});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chCardFRobotMushroomVoice.pause();
            chCardFRobotMushroomVoice.currentTime = 0;
            GaaTil(sceneForestCh5Answer);
        })

    } else if (tall === 7) {
        const forestChallenge8 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFSongAboutTroll.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFSongAboutTrollVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", {x: 50, y: 20, width: 150, height: 150});
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", {x: 883, y: 20, width: 150, height: 150});
        Actions.Click(donebutton, () => {
            chCardFSongAboutTrollVoice.pause();
            chCardFSongAboutTrollVoice.currentTime = 0;
            challengeCompleted1.play();
            challengeCompleted1.onended = () => {
                GaaTil(sceneForestHub);
            }
        })
        Actions.Click(notdonebutton, () => {
            chCardFSongAboutTrollVoice.pause();
            chCardFSongAboutTrollVoice.currentTime = 0;
            challengeNotCompleted1.play();
            challengeNotCompleted1.onended = () => {
                GaaTil(sceneForestHub);
            }
        })
        

    } else if (tall === 8) {
        const forestChallenge9 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFStretchLikeTree.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFStretchLikeTreeVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", {x: 150, y: 520, width: 150, height: 150});
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", {x: 788, y: 520, width: 150, height: 150});
        Actions.Click(donebutton, () => {
            chCardFStretchLikeTreeVoice.pause();
            chCardFStretchLikeTreeVoice.currentTime = 0;
            applause.play();
            applause.onended = () => {
                GaaTil(sceneForestHub);
            }
        })
        Actions.Click(notdonebutton, () => {
            chCardFStretchLikeTreeVoice.pause();
            chCardFStretchLikeTreeVoice.currentTime = 0;
            challengeNotCompleted1.play();
            challengeNotCompleted1.onended = () => {
                GaaTil(sceneForestHub);
            }
        })

    } else if (tall === 9) {
        const forestChallenge10 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFTadpole.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardFTadpoleVoice.play();
        const tadpole1 = new Blocks.Image("Bilder/Karakterer/tadpoleBoy.png", {x: 200, y: 450, width: 200, height: 200});
        const tadpole2 = new Blocks.Image("Bilder/Karakterer/tadpoleGirl.png", {x: 700, y: 450, width: 200, height: 200});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chCardFTadpoleVoice.pause();
            chCardFTadpoleVoice.currentTime = 0;
            GaaTil(sceneForestCh6Answer);
        })

    }
}


    // CITY

function sceneCityChallengeFront() {
    const cityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 5);
    //tall = 3; // For debugging
    if (tall === 0) {
        const cityChallenge1 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCBakeBread.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardCBakeBreadVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", {x: 150, y: 520, width: 150, height: 150});
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", {x: 788, y: 520, width: 150, height: 150});
        Actions.Click(donebutton, () => {
            chCardCBakeBreadVoice.pause();
            chCardCBakeBreadVoice.currentTime = 0;
            challengeCompleted1.play();
            challengeCompleted1.onended = () => {
                GaaTil(sceneCityHub);
            }
        })
        Actions.Click(notdonebutton, () => {
            chCardCBakeBreadVoice.pause();
            chCardCBakeBreadVoice.currentTime = 0;
            challengeNotCompleted1.play();
            challengeNotCompleted1.onended = () => {
                GaaTil(sceneCityHub);
            }
        })

    } else if (tall === 1) {
        const cityChallenge2 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCBuildBuilding.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardCBuildBuildingVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 620, width: 150, height: 150});
        const blocks1 = new Blocks.Image("Bilder/Objekter/block1.png", {x: 30, y: 500, width: 200, height: 200});
        const blocks2 = new Blocks.Image("Bilder/Objekter/block2.png", {x: 30, y: 412, width: 200, height: 200});
        const blocks3 = new Blocks.Image("Bilder/Objekter/block3.png", {x: 30, y: 320, width: 200, height: 200});
        Actions.Click(continueButton, () => {
            chCardCBuildBuildingVoice.pause();
            chCardCBuildBuildingVoice.currentTime = 0;
            GaaTil(sceneCityCh1Answer);
        })

    } else if (tall === 2) {
        const cityChallenge3 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCCatHiding.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardCCatHidingVoice.play();
        const cat = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", {x: 650, y: 420, width: 400, height: 300});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chCardCCatHidingVoice.pause();
            chCardCCatHidingVoice.currentTime = 0;
            GaaTil(sceneCityCh2Answer);
        })

    } else if (tall === 3) {
        const cityChallenge4 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCCountCars.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardCCountCarsVoice.play();
        const car = new Blocks.Image("Bilder/Objekter/bus.png", {x: 40, y: 500, width: 300, height: 200});
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
        Actions.Click(continueButton, () => {
            chCardCCountCarsVoice.pause();
            chCardCCountCarsVoice.currentTime = 0;
            GaaTil(sceneCityCh3Answer);
        })

    } else if (tall === 4) {
        const cityChallenge5 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCDroppedGroceries.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardCDroppedGroceriesVoice.play();
        // Gå videre til ny scene hvor den faktiske oppgaven utføres + lyd + objekter + knapper

    }
}


    // BEACH 

function sceneBeachChallengeFront() {
    const beachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", {x: -8, y: -8, width: 1088, height: 818});
    let tall = Math.floor(Math.random() * 7);
    // tall = 0; // For debugging
    if (tall === 0) {
        const beachChallenge1 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBBiggestFish.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardBBiggestFishVoice.play();
        // Gå videre til ny scene hvor den faktiske oppgaven utføres + lyd + objekter + knapper

    } else if (tall === 1) {
        const beachChallenge2 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBCatWater.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardBCatWaterVoice.play();
        // Gå videre til ny scene hvor den faktiske oppgaven utføres + lyd + objekter + knapper evt knapp for gjennomført / ikke gjennomført oppgave

    } else if (tall === 2) {
        const beachChallenge3 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBCountFish.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardBCountFishVoice.play();
        // Gå videre til ny scene hvor den faktiske oppgaven utføres + lyd + objekter + knapper

    } else if (tall === 3) {
        const beachChallenge4 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBMermaidCat.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardBMermaidCatVoice.play();
        // Gå videre til ny scene hvor den faktiske oppgaven utføres + lyd + objekter + knapper

    } else if (tall === 4) {
        const beachChallenge5 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBSongAboutOcean.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardBSongAboutOceanVoice.play();
        // Knapp for gjennomført oppgave/ikke gjennomført oppgave + lyd

    } else if (tall === 5) {
        const beachChallenge6 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBSunburntGiraffe.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardBSunburntGiraffeVoice.play();
        // Gå videre til ny scene hvor den faktiske oppgaven utføres + lyd + objekter + knapper

    } else if (tall === 6) {
        const beachChallenge7 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBWalkLikeCrab.png", {x: 30, y: 10, width: 1020, height: 700});
        chCardBWalkLikeCrabVoice.play();
        // Knapp for gjennomført oppgave/ikke gjennomført oppgave + lyd
    }
}


// ANSWERS/TASKS

    // FOREST - QUESTIONS

function sceneForestQ1Answer() {
    const forestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 375, height: 275});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 375, height: 275});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 375, height: 275});
    const wronganswer1 = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 190, y: 135, width: 200, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Karakterer/fish1.png", {x: 680, y: 285, width: 200, height: 200});
    const correctanswer = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", {x: 270, y: 505, width: 150, height: 200});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestQ2Answer() {
    const forestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground2.png", {x: -8, y: -8, width: 1088, height: 818});
    const tree1 = new Blocks.Image("Bilder/Objekter/oakTree.png", {x: 700, y: 20, width: 400, height: 650});
    const tree2 = new Blocks.Image("Bilder/Objekter/pineTree.png", {x: 0, y: 100, width: 500, height: 700});
    const sq1 = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 950, y: 100, width: 90, height: 90});
    const sq2 = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 100, y: 570, width: 100, height: 120});
    const sq3 = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 180, y: 100, width: 100, height: 100});
    const sq4 = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 300, y: 400, width: 100, height: 100});
    const sq5 = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 770, y: 220, width: 150, height: 150});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 360, y: 20, width: 325, height: 225});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 420, y: 280, width: 325, height: 225});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 480, y: 540, width: 325, height: 225});
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/handFourFinger.png", {x: 450, y: 55, width: 150, height: 150});
    const wronganswer2 = new Blocks.Image("Bilder/Objekter/handOneFinger.png", {x: 500, y: 315, width: 150, height: 150});
    const correctanswer = new Blocks.Image("Bilder/Objekter/handFiveFinger.png", {x: 570, y: 575, width: 150, height: 150});
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneForestHub);
        }
    })

}

function sceneForestQ3Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground2.png", {x: -8, y:  -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/Forest/Question/qCardFMikkelRevWrong1.png", {x: 180, y: 130, width: 210, height: 210});
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/Forest/Question/qCardFMikkelRevWrong2.png", {x: 235, y: 510, width: 210, height: 200});
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/Forest/Question/qCardFMikkelRevCorrect.png", {x: 680, y: 280, width: 210, height: 210});
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestQ4Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 375, height: 275});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 375, height: 275});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 375, height: 275});
    const correctanswer = new Blocks.Image("Bilder/Karakterer/whale.png", {x: 190, y: 135, width: 200, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", {x: 680, y: 285, width: 200, height: 200});
    const wronganswer1 = new Blocks.Image("Bilder/Karakterer/bearSleeping.png", {x: 240, y: 535, width: 200, height: 150});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneForestHub);
        }
    })

}

function sceneForestQ5Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackgroundRiver.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 375, height: 275});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 375, height: 275});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 375, height: 275});
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/placeholderWrong.png", {x: 650, y: 320, width: 280, height: 150});
    const wronganswer2 = new Blocks.Image("Bilder/Objekter/placeholderWrong.png", {x: 200, y: 540, width: 280, height: 150});
    const correctanswer = new Blocks.Image("Bilder/Objekter/placeholderCorrect.png", {x: 150, y: 160, width: 280, height: 150});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })

}

function sceneForestQ6Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 10, y: 200, width: 500, height: 400});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 560, y: 200, width: 500, height: 400});
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/pineTree.png", {x: 140, y: 240, width: 250, height: 300});
    const correctanswer = new Blocks.Image("Bilder/Objekter/oakTree.png", {x: 700, y: 240, width: 250, height: 310});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestQ7Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground2.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Karakterer/monkeyClosedMouth.png", {x: 250, y: 500, width: 230, height: 230});
    const wronganswer2 = new Blocks.Image("Bilder/Karakterer/troll.png", {x: 690, y: 282, width: 230, height: 230});
    const correctanswer = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 200, y: 134, width: 230, height: 230});
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })

}

function sceneForestQ8Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Karakterer/bearSleeping.png", {x: 188, y: 150, width: 230, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 280, y: 500, width: 150, height: 230});
    const correctanswer = new Blocks.Image("Bilder/Objekter/placeholderCorrect.png", {x: 690, y: 282, width: 230, height: 230});
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestQ9Answer() {
    const forestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 375, height: 275});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 375, height: 275});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 375, height: 275});
    const wronganswer1 = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 190, y: 135, width: 200, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Karakterer/turtle.png", {x: 680, y: 285, width: 200, height: 200});
    const correctanswer = new Blocks.Image("Bilder/Objekter/bee.png", {x: 240, y: 505, width: 200, height: 200});
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestQ10Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", {x: 200, y: 133, width: 200, height: 230});
    const wronganswer2 = new Blocks.Image("Bilder/Karakterer/monkeyClosedMouth.png", {x: 690, y: 285, width: 230, height: 220});
    const correctanswer = new Blocks.Image("Bilder/Objekter/placeholderCorrect.png", {x: 250, y: 520, width: 200, height: 200});
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

    // FOREST - CHALLENGES

function sceneForestCh1Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackgroundRiver.png", {x: -8, y: -8, width: 1088, height: 1088});
    const log1 = new Blocks.Image("Bilder/Objekter/logRound1.png", {x: 637, y: 195, width: 100, height: 100});
    const log2 = new Blocks.Image("Bilder/Objekter/logTriangle2.png", {x: 765, y: 710, width: 100, height: 100});
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
    Actions.Drag(log1);
    Actions.Drag(log2);
    Actions.Click(continueButton, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestCh2Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const giraffe1 = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 270, y: 170, width: 200, height: 650});
    const rocks1 = new Blocks.Image("Bilder/Objekter/rocks1.png", {x: 700, y: 650, width: 200, height: 150});
    const rocks2 = new Blocks.Image("Bilder/Objekter/rocks2.png", {x: 600, y: 600, width: 100, height: 100});
    const tree1 = new Blocks.Image("Bilder/Objekter/oakTree.png", {x: 250, y: 330, width: 300, height: 550});
    const treestump = new Blocks.Image("Bilder/Objekter/treeStump.png", {x: 570, y: 560, width: 50, height: 50});
    const rocks3 = new Blocks.Image("Bilder/Objekter/rocks1.png", {x: 30, y: 650, width: 100, height: 100});
    const squirrel = new Blocks.Image("Bilder/Karakterer/squirrel.png", {x: 710, y: 200, width: 50, height: 50});
    Actions.Click(giraffe1, () => {
        challengeCompleted1.play();
        challengeCompleted1.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestCh3Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", {x: 50, y: 50, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", {x: 610, y: 50, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", {x: 610, y: 400, width: 400, height: 300});
    const poop = new Blocks.Image("Bilder/Objekter/poop.png", {x: 100, y: 400, width: 350, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Karakterer/bearSleeping.png", {x: 130, y: 100, width: 250, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 730, y: 430, width: 150, height: 230});
    const correctanswer = new Blocks.Image("Bilder/Objekter/placeholderCorrect.png", {x: 690, y: 100, width: 250, height: 200});
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestCh4Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground2.png", {x: -8, y: -8, width: 1088, height: 818});
    const moose1 = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", {x: 270, y: 200, width: 500, height: 800});
    const moose2 = new Blocks.CellAnimation(["Bilder/Karakterer/mooseClosedmouth.png", "Bilder/Karakterer/mooseClosedMouth.png", "Bilder/Karakterer/mooseClosedMouth.png", "Bilder/Karakterer/mooseOpenMouth.png"], {x: 270, y: 200, width: 500, height: 800, auto: true, loop: true});
    moose2.hide();
    const countdown1 = new Actions.CountDown(5, (complete) => {
        if (complete) {
            moose1.hide();
            moose2.show();
            chCardFMooseLaughVoiceComplete.play();
            chCardFMooseLaughVoiceComplete.onended = () => {
                moose2.hide();
                moose1.show();
                challengeCompleted1.play();
                challengeCompleted1.onended = () => {
                    GaaTil(sceneForestHub);
                }
            }
        }}, {onTick: true, auto: true});

}

function sceneForestCh5Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const rocks1 = new Blocks.Image("Bilder/Objekter/rocks1.png", {x: 800, y: 450, width: 100, height: 100});
    const rocks2 = new Blocks.Image("Bilder/Objekter/rocks2.png", {x: 800, y: 650, width: 200, height: 200});
    const flower1 = new Blocks.Image("Bilder/Objekter/flower1.png", {x: 450, y: 600, width: 50, height: 50});
    const mushroom1 = new Blocks.Image("Bilder/Objekter/fluesopp.png", {x: 500, y: 560, width: 70, height: 70});
    const mushroom2 = new Blocks.Image("Bilder/Objekter/chantarelleMushroom.png", {x: 750, y: 490, width: 70, height: 70});
    const robot1 = new Blocks.CellAnimation(["Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manOpenMouth.png"], {x: 270, y: 350, width: 450, height: 600, loop: true, auto: true});
    robot1.hide();
    Actions.Click(mushroom2, () => {
        robot1.show();
        chCardFRobotMushroomVoiceComplete.play();
        chCardFRobotMushroomVoiceComplete.onended = () => {
            GaaTil(sceneForestHub);
        }

    })

}

function sceneForestCh6Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", {x: 50, y: 10, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", {x: 610, y: 10, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", {x: 50, y: 330, width: 400, height: 300});
    const tadpole1 = new Blocks.Image("Bilder/Karakterer/tadpoleBoy.png", {x: 200, y: 720, width: 80, height: 80});
    const tadpole2 = new Blocks.Image("Bilder/Karakterer/tadpoleBoy.png", {x: 880, y: 620, width: 80, height: 80});
    const tadpole3 = new Blocks.Image("Bilder/Karakterer/tadpoleGirl.png", {x: 570, y: 650, width: 80, height: 80});
    const tadpole4 = new Blocks.Image("Bilder/Karakterer/tadpoleGirl.png", {x: 580, y: 570, width: 40, height: 40});
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/handFiveFinger.png", {x: 160, y: 60, width: 200, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Objekter/handTwoFinger.png", {x: 730, y: 50, width: 150, height: 200});
    const correctanswer = new Blocks.Image("Bilder/Objekter/handFourFinger.png", {x: 175, y: 377, width: 150, height: 200});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

    // CITY - QUESTIONS

function sceneCityQ1Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground2.png", {x: -8, y: -8, width: 1088, height: 818});
    const house = new Blocks.Image("Bilder/Objekter/houseDrawing.png", {x: 580, y: 300, width: 450, height: 400});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 50, y: 10, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 610, y: 10, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 50, y: 330, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/handOneFinger.png", {x: 180, y: 50, width: 150, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Objekter/handFourFinger.png", {x: 740, y: 50, width: 150, height: 200});
    const correctanswer = new Blocks.Image("Bilder/Objekter/handThreeFinger.png", {x: 170, y: 380, width: 160, height: 200});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneCityHub);
        }
    })

}

function sceneCityQ2Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCRedLightWrong1.png", {x: 680, y: 290, width: 240, height: 220})
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCRedLightWrong2.png", {x: 230, y: 510, width: 240, height: 220});
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCRedLightCorrect.png", {x: 205, y: 147, width: 200, height: 200});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
}

function sceneCityQ3Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatColorTrafficLightWrong1.png", {x: 200, y: 517, width: 300, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatColorTrafficLightWrong2.png", {x: 150, y: 150, width: 300, height: 200});
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatColorTrafficLightCorrect.png", {x: 650, y: 297, width: 300, height: 200});
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
}

function sceneCityQ4Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsABusWrong1.png", {x: 150, y: 150, width: 200, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsABusWrong2.png", {x: 645, y: 287, width: 310, height: 220});
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsABusCorrect.png", {x: 220, y: 500, width: 230, height: 200});
    const plane = new Blocks.Image("Bilder/Objekter/plane.png", {x: 270, y: 200, width: 240, height: 200});
    const bus = new Blocks.Image("Bilder/Objekter/bus.png", {x: 350, y: 630, width: 130, height: 100});
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
}

function sceneCityQ5Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong1.png", {x: 200, y: 510, width: 300, height: 220});
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong2.png", {x: 650, y: 283, width: 300, height: 230});
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorCorrect.png", {x: 145, y: 135, width: 310, height: 215});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneCityHub);
        }
    })

}

function sceneCityQ6Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong1.png", {x: 200, y: 510, width: 300, height: 220});
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong2.png", {x: 650, y: 283, width: 300, height: 230});
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorCorrect.png", {x: 145, y: 135, width: 310, height: 215});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })

}

function sceneCityQ7Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground3.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong1.png", {x: 200, y: 510, width: 300, height: 220});
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong2.png", {x: 650, y: 283, width: 300, height: 230});
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorCorrect.png", {x: 145, y: 135, width: 310, height: 215});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
}

function sceneCityQ8Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground2.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsStoreWrong1.png", {x: 200, y: 520, width: 300, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsStoreWrong2.png", {x: 650, y: 285, width: 300, height: 220});
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsStoreCorrect.png", {x: 153, y: 150, width: 300, height: 200});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
}

function sceneCityQ9Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 100, y: 100, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 600, y: 250, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", {x: 150, y: 470, width: 400, height: 300});
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWheelsOnTheBusWrong1.png", {x: 146, y: 137, width: 310, height: 220});
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWheelsOnTheBusWrong2.png", {x: 650, y: 288, width: 305, height: 220});
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWheelsOnTheBusCorrect.png", {x: 200, y: 510, width: 305, height: 220});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
}

    // CITY - CHALLENGES

function sceneCityCh1Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground2.png", {x: -8, y: -8, width: 1088, height: 818});
    const blocks1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock1.png", {x: 440, y: 615, width: 200, height: 200});
    const blocks2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock2.png", {x: 358, y: 277, width: 200, height: 200});
    const blocks3 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock3.png", {x: 54, y: 421, width: 200, height: 200});
    const blocks4 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock4.png", {x: 28, y: 27, width: 200, height: 200});
    const blocks5 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock5.png", {x: 804, y: 248, width: 200, height: 200});
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 475, y: 10, width: 150, height: 150});
    continueButton.hide();
    const countdown = new Actions.CountDown(8, (complete) => {
        if (complete) {
            continueButton.show();
        }
    }, {onTick: true, auto: true});
    Actions.Drag(blocks1);
    Actions.Drag(blocks2);
    Actions.Drag(blocks3);
    Actions.Drag(blocks4);
    Actions.Drag(blocks5);
    Actions.Click(continueButton, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
}

function sceneCityCh2Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const cat = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", {x: 625, y: 530, width: 60, height: 50});
    const man = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", {x: 485, y: 600, width: 50, height: 70});
    const giraffe = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 300, y: 340, width: 70, height: 140});
    const car = new Blocks.Image("Bilder/Objekter/car.png", {x: 500, y: 720, width: 100, height: 80});
    const girl = new Blocks.Image("Bilder/Karakterer/humanGirlClosedMouth.png", {x: 750, y: 670, width: 50, height: 70});
    const hulk = new Blocks.Image("Bilder/Karakterer/hulkClosedMouth.png", {x: 100, y: 650, width: 100, height: 100});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 700, y: 670, width: 50, height: 70});
    Actions.Click(cat, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneCityHub);
        }
    })

}

function sceneCityCh3Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", {x: -8, y: -8, width: 1088, height: 818});
    const answercard1 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", {x: 30, y: 30, width: 400, height: 300});
    const answercard2 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", {x: 630, y: 30, width: 400, height: 300});
    const answercard3 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", {x: 630, y: 370, width: 400, height: 300});
    const car1 = new Blocks.Image("Bilder/Objekter/bus.png", {x: 200, y: 720, width: 130, height: 80});
    const car2 = new Blocks.Image("Bilder/Objekter/bus.png", {x: 700, y: 700, width: 130, height: 80});
    const car3 = new Blocks.Image("Bilder/Objekter/bus.png", {x: 300, y: 430, width: 80, height: 50});
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/handTwoFinger.png", {x: 750, y: 80, width: 150, height: 200});
    const wronganswer2 = new Blocks.Image("Bilder/Objekter/handFiveFinger.png", {x: 155, y: 90, width: 170, height: 200});
    const correctanswer = new Blocks.Image("Bilder/Objekter/handThreeFinger.png", {x: 750, y: 420, width: 150, height: 200});
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneCityHub);
        }
    })
}

function sceneCityCh4Answer() {

}

function sceneCityCh5Answer() {

}

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
