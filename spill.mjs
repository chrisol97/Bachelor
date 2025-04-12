//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Actions from "./barneprat/actions.mjs";
import * as Blocks from "./barneprat/blocks.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

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
let qCardFOwlSoundVoiceAnswer = new Audio("Lydfiler/Kort/Forest/Question/qCardFOwlSoundVoiceAnswer.mp3");
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
    const startscreenobject = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", { x: 325, y: 150, width: 400, height: 500 });
    const skipbutton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 200, y: 200, width: 200, height: 200 });                           // HUSK Å FJERNE DETTE
    Actions.Click(skipbutton, () => {
        GaaTil(sceneBeachHub);
    })
    Actions.Click(startscreenobject, () => {
        GaaTil(titlescreen);
    })
}

function titlescreen() {
    titlescreenmusic.play();
    const titlescreenbackground = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", { x: -8, y: -8, width: 1088, height: 818 });
    const sign1 = new Blocks.Image("Bilder/Objekter/signHumlekollen.png", { x: 100, y: 350, width: 120, height: 150 });
    const sign2 = new Blocks.Image("Bilder/Objekter/signMarihønehula.png", { x: 475, y: 350, width: 75, height: 90 });
    const sign3 = new Blocks.Image("Bilder/Objekter/signMaurtua.png", { x: 940, y: 320, width: 100, height: 150 });
    const sun = new Blocks.Image("Bilder/Objekter/sun.png", { x: 900, y: -20, width: 200, height: 250 });
    const giraffetitlescreen = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 300, y: 220, width: 150, height: 300 });
    const cattitlescreen = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", { x: 600, y: 490, width: 350, height: 300 });
    const mantitlescreen = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", { x: 780, y: 330, width: 50, height: 100 });
    const mainchartitlescreen = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", { x: 200, y: 440, width: 200, height: 350 });
    const videobutton = new Blocks.Image("Bilder/Knapper/videoButton.png", { x: 765, y: 320, width: 250, height: 150 });
    const skipbutton = new Blocks.Image("Bilder/Knapper/playButton.png", { x: 60, y: 320, width: 250, height: 150 });
    const title = new Blocks.Image("Bilder/Objekter/gameTitle.png", { x: 280, y: 20, width: 540, height: 200 });
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
    const scene1background = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", { x: -8, y: -8, width: 1088, height: 818 });
    const sign1 = new Blocks.Image("Bilder/Objekter/signHumlekollen.png", { x: 100, y: 350, width: 120, height: 150 });
    const sign2 = new Blocks.Image("Bilder/Objekter/signMarihønehula.png", { x: 475, y: 350, width: 75, height: 90 });
    const sign3 = new Blocks.Image("Bilder/Objekter/signMaurtua.png", { x: 940, y: 320, width: 100, height: 150 });
    const flyingplane = new Blocks.Image("Bilder/Objekter/plane.png", { x: -250, y: 0, width: 220, height: 150 });
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", { x: 420, y: 400, width: 250, height: 400 });
    mainChar.hide();
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 420, y: 400, width: 250, height: 400, loop: true, auto: true });
    const continuebutton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 800, y: 500, width: 150, height: 150 });
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
    const background = new Blocks.Image("Bilder/Bakgrunner/sandbox.png", { x: -8, y: -8, width: 1088, height: 818 });
    const giraffeSandbox = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 200, y: 200, width: 200, height: 400 });
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", { x: 1100, y: 0, width: 200, height: 250 });
    const yellowball = new Blocks.Image("Bilder/Objekter/yellowBall1.png", { x: 550, y: 550, width: 100, height: 100 });
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 595, y: 303, width: 200, height: 250, loop: true, auto: true });
    const giraffeTalking = new Blocks.CellAnimation(["Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeOpenMouth.png"], { x: 200, y: 200, width: 200, height: 400, loop: true, auto: true });
    giraffeTalking.hide();
    mainCharTalking.hide();
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 700, y: 50, width: 150, height: 150 });
    const mainCharMoving = Actions.Tween(mainChar, -10, 6);
    continueButton.hide();
    Actions.Colide(mainChar, yellowball, () => { Actions.Tween(yellowball, -10, 10) });
    Actions.Colide(mainChar, yellowball, () => { mainCharMoving.pause() });
    Actions.Colide(mainChar, yellowball, () => { boingsound.play() });
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
    const background = new Blocks.Image("Bilder/Bakgrunner/grillhutOutside.png", { x: -8, y: -8, width: 1088, height: 818 });
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", { x: 1100, y: 460, width: 220, height: 320 });
    const catStanding = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", { x: 200, y: 500, width: 300, height: 250 });
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 490, y: 460, width: 220, height: 320, loop: true, auto: true });
    const catTalking = new Blocks.CellAnimation(["Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catOpenMouth.png"], { x: 200, y: 500, width: 300, height: 250, auto: true, loop: true });
    mainCharTalking.hide();
    catTalking.hide();
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 550, y: 50, width: 150, height: 150 });
    continueButton.hide();
    const mainCharMoving = Actions.Tween(mainChar, -10, 0);
    Actions.Colide(mainChar, catStanding, () => { mainCharMoving.pause() });
    Actions.Colide(mainChar, catStanding, () => { ouchCatMainChar.play() });
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
    const background = new Blocks.Image("Bilder/Bakgrunner/wardrobe.png", { x: -8, y: -8, width: 1088, height: 818 });
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", { x: 1100, y: 470, width: 220, height: 320 });
    const styrerPlaceholder = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", { x: 150, y: 300, width: 350, height: 450 });
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 498, y: 470, width: 220, height: 320, auto: true, loop: true });
    const styrerPlaceholderTalking = new Blocks.CellAnimation(["Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manOpenMouth.png"], { x: 150, y: 300, width: 350, height: 450, auto: true, loop: true });
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 350, y: 300, width: 420, height: 620, auto: true, loop: true });
    const mainChar2 = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", { x: 350, y: 300, width: 420, height: 620 });
    mainChar2.hide();
    mainCharTalking2.hide();
    mainCharTalking.hide();
    styrerPlaceholderTalking.hide();
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 700, y: 50, width: 150, height: 150 });
    continueButton.hide();
    const mainCharMoving = Actions.Tween(mainChar, -9, 0);
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
    const mapBackground = new Blocks.Image("Bilder/Bakgrunner/mapBackground.jpg", { x: -8, y: -8, width: 1088, height: 818 });
    const beachText = new Blocks.Image("Bilder/Objekter/beachTitle.PNG", { x: 380, y: 50, width: 300, height: 70 });
    const cityText = new Blocks.Image("Bilder/Objekter/cityTitle.PNG", { x: 720, y: 550, width: 300, height: 70 });
    const forestText = new Blocks.Image("Bilder/Objekter/forestTitle.PNG", { x: 30, y: 550, width: 300, height: 70 });
    const kindergartenText = new Blocks.Image("Bilder/Objekter/kindergartenTitle.PNG", { x: 410, y: 415, width: 250, height: 50 });
    const mainCharTalking1 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 415, y: 550, width: 250, height: 350, auto: true, loop: true });
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", { x: 415, y: 550, width: 250, height: 350 });
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
    const sceneBeachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", { x: 15, y: 200, width: 330, height: 450 });
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", { x: 370, y: 200, width: 330, height: 450 });
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", { x: 720, y: 200, width: 330, height: 450 });
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 700, y: 550, width: 300, height: 400, auto: true, loop: true });
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 330, y: 330, width: 400, height: 550, auto: true, loop: true });
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", { x: 200, y: 20, width: 150, height: 150 });
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", { x: 717, y: 20, width: 150, height: 150 });
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.png", { x: 460, y: 20, width: 150, height: 150 });
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
    const sceneBeachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", { x: 200, y: 20, width: 150, height: 150 });
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", { x: 717, y: 20, width: 150, height: 150 });
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.png", { x: 460, y: 20, width: 150, height: 150 });
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", { x: 15, y: 200, width: 330, height: 450 });
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", { x: 370, y: 200, width: 330, height: 450 });
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", { x: 720, y: 200, width: 330, height: 450 });
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
    const sceneForestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", { x: 15, y: 200, width: 330, height: 450 });
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", { x: 370, y: 200, width: 330, height: 450 });
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", { x: 720, y: 200, width: 330, height: 450 });
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 700, y: 550, width: 300, height: 400, auto: true, loop: true });
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 330, y: 330, width: 400, height: 550, auto: true, loop: true });
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", { x: 200, y: 20, width: 150, height: 150 });
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", { x: 717, y: 20, width: 150, height: 150 });
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.png", { x: 460, y: 20, width: 150, height: 150 });
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
    const sceneForestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    const cityButton = new Blocks.Image("Bilder/Knapper/cityButton.PNG", { x: 200, y: 20, width: 150, height: 150 });
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", { x: 717, y: 20, width: 150, height: 150 });
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.png", { x: 460, y: 20, width: 150, height: 150 });
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", { x: 15, y: 200, width: 330, height: 450 });
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", { x: 370, y: 200, width: 330, height: 450 });
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", { x: 720, y: 200, width: 330, height: 450 });
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
    const sceneCityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", { x: 15, y: 200, width: 330, height: 450 });
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", { x: 370, y: 200, width: 330, height: 450 });
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", { x: 720, y: 200, width: 330, height: 450 });
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 700, y: 550, width: 300, height: 400, auto: true, loop: true });
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], { x: 330, y: 330, width: 400, height: 550, auto: true, loop: true });
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", { x: 200, y: 20, width: 150, height: 150 });
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", { x: 717, y: 20, width: 150, height: 150 });
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.png", { x: 460, y: 20, width: 150, height: 150 });
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
    const sceneCityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    const forestButton = new Blocks.Image("Bilder/Knapper/forestButton.PNG", { x: 200, y: 20, width: 150, height: 150 });
    const beachButton = new Blocks.Image("Bilder/Knapper/beachButton.PNG", { x: 717, y: 20, width: 150, height: 150 });
    const kindergartenButton = new Blocks.Image("Bilder/Knapper/kindergartenButton.png", { x: 460, y: 20, width: 150, height: 150 });
    const qCardBack = new Blocks.Image("Bilder/Kort/questionCardBack.png", { x: 15, y: 200, width: 330, height: 450 });
    const chCardBack = new Blocks.Image("Bilder/Kort/challengeCardBack.png", { x: 370, y: 200, width: 330, height: 450 });
    const chanceCardBack = new Blocks.Image("Bilder/Kort/chanceCardBack.png", { x: 720, y: 200, width: 330, height: 450 });
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
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        const chanceCard0 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF1.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardF1Voice.play();
        const seagull = new Blocks.Image("Bilder/Objekter/seagull.png", { x: 0, y: 460, width: 400, height: 250 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardF1Voice.pause();
            chanceCardF1Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 1) {
        const chanceCard1 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF2.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardF2Voice.play();
        const bootMud = new Blocks.Image("Bilder/Objekter/bootInMud.png", { x: 600, y: 460, width: 400, height: 250 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardF2Voice.pause();
            chanceCardF2Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 2) {
        const chanceCard2 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF3.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardF3Voice.play();
        const rocks = new Blocks.Image("Bilder/Objekter/rocks1.png", { x: 600, y: 400, width: 300, height: 250 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardF3Voice.pause();
            chanceCardF3Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 3) {
        const chanceCard3 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF4.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardF4Voice.play();
        const troll = new Blocks.Image("Bilder/Karakterer/troll.png", { x: 700, y: 400, width: 300, height: 300 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardF4Voice.pause();
            chanceCardF4Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 4) {
        const chanceCard4 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF5.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardF5Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardF5Voice.pause();
            chanceCardF5Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });

    } else if (tall === 5) {
        const chanceCard5 = new Blocks.Image("Bilder/Kort/Forest/Chance/chanceCardF6.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardF6Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardF6Voice.pause();
            chanceCardF6Voice.currentTime = 0;
            GaaTil(sceneForestHub);
        });
    }
}


// CITY

function sceneCityChanceFront() {
    const citymap = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    let tall = Math.floor(Math.random() * 8);
    if (tall === 0) {
        const chanceCard0 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC1.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardC1Voice.play();
        const redLight = new Blocks.Image("Bilder/Objekter/redLight.png", { x: 800, y: 450, width: 150, height: 250 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardC1Voice.pause();
            chanceCardC1Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 1) {
        const chanceCard1 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC2.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardC2Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardC2Voice.pause();
            chanceCardC2Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 2) {
        const chanceCard2 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC3.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardC3Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardC3Voice.pause();
            chanceCardC3Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 3) {
        const chanceCard3 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC4.png", { x: 30, y: 10, width: 1020, height: 700 })
        chanceCardC4Voice.play();
        const bus = new Blocks.Image("Bilder/Objekter/bus.png", { x: 650, y: 480, width: 300, height: 200 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardC4Voice.pause();
            chanceCardC4Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 4) {
        const chanceCard4 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC5.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardC5Voice.play();
        const racecar = new Blocks.Image("Bilder/Objekter/raceCar.png", { x: 700, y: 500, width: 300, height: 200 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardC5Voice.pause();
            chanceCardC5Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 5) {
        const chanceCard5 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC6.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardC6Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardC6Voice.pause();
            chanceCardC6Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 6) {
        const chanceCard6 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC7.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardC7Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 120, height: 110 });
        Actions.Click(continueButton, () => {
            chanceCardC7Voice.pause();
            chanceCardC7Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });

    } else if (tall === 7) {
        const chanceCard7 = new Blocks.Image("Bilder/Kort/City/Chance/chanceCardC8.png", { x: 30, y: 10, width: 1020, height: 700 });
        chanceCardC8Voice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 120, height: 110 });
        Actions.Click(continueButton, () => {
            chanceCardC8Voice.pause();
            chanceCardC8Voice.currentTime = 0;
            GaaTil(sceneCityHub);
        });
    }
}


// BEACH

function sceneBeachChanceFront() {
    const beachmap = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        chanceCardB1Voice.play();
        const chanceCard0 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB1.png", { x: 30, y: 10, width: 1020, height: 700 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardB1Voice.pause();
            chanceCardB1Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 1) {
        chanceCardB2Voice.play();
        const chanceCard1 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB2.png", { x: 30, y: 10, width: 1020, height: 700 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardB2Voice.pause();
            chanceCardB2Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 2) {
        chanceCardB3Voice.play();
        const chanceCard2 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB3.png", { x: 30, y: 10, width: 1020, height: 700 });
        const plane = new Blocks.Image("Bilder/Objekter/plane.png", { x: 600, y: 450, width: 400, height: 220 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardB3Voice.pause();
            chanceCardB3Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 3) {
        chanceCardB4Voice.play();
        const chanceCard3 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB4.png", { x: 30, y: 10, width: 1020, height: 700 });
        const crab = new Blocks.Image("Bilder/Objekter/crab.png", { x: 720, y: 500, width: 250, height: 205 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardB4Voice.pause();
            chanceCardB4Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 4) {
        chanceCardB5Voice.play();
        const chanceCard4 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB5.png", { x: 30, y: 10, width: 1020, height: 700 });
        const seagull = new Blocks.Image("Bilder/Objekter/seagull.png", { x: 750, y: 490, width: 300, height: 150 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 120, height: 110 });
        Actions.Click(continueButton, () => {
            chanceCardB5Voice.pause();
            chanceCardB5Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });

    } else if (tall === 5) {
        chanceCardB6Voice.play();
        const chanceCard5 = new Blocks.Image("Bilder/Kort/Beach/Chance/chanceCardB6.png", { x: 30, y: 10, width: 1020, height: 700 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chanceCardB6Voice.pause();
            chanceCardB6Voice.currentTime = 0;
            GaaTil(sceneBeachHub);
        });
    }
}

// QUESION CARDS

// FOREST

function sceneForestQuestionFront() {
    const forestbackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    let tall = Math.floor(Math.random() * 10);
    //tall = 9; //For Debugging
    if (tall === 0) {
        const forestQuestion1 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFBiggestAnimal.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFBiggestAnimalVoice.play();
        const forestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 375, height: 275 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 375, height: 275 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 375, height: 275 });
        const wronganswer1 = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 190, y: 135, width: 200, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 680, y: 285, width: 200, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", { x: 270, y: 505, width: 150, height: 200 });
        forestBackground.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardFBiggestAnimalVoice.onended = () => {
            forestBackground.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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

    } else if (tall === 1) {
        const forestQuestion2 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFCountingSquirrels.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFCountingSquirrelsVoice.play();
        const squirrel = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 50, y: 400, width: 300, height: 300 });
        const forestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
        const tree1 = new Blocks.Image("Bilder/Objekter/oakTree.png", { x: 700, y: 20, width: 400, height: 650 });
        const tree2 = new Blocks.Image("Bilder/Objekter/pineTree.png", { x: 0, y: 100, width: 500, height: 700 });
        const sq1 = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 950, y: 100, width: 90, height: 90 });
        const sq2 = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 100, y: 570, width: 100, height: 120 });
        const sq3 = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 180, y: 100, width: 100, height: 100 });
        const sq4 = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 300, y: 400, width: 100, height: 100 });
        const sq5 = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 770, y: 220, width: 150, height: 150 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 360, y: 20, width: 325, height: 225 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 420, y: 280, width: 325, height: 225 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 480, y: 540, width: 325, height: 225 });
        const wronganswer1 = new Blocks.Image("Bilder/Objekter/handFourFinger.png", { x: 450, y: 55, width: 150, height: 150 });
        const wronganswer2 = new Blocks.Image("Bilder/Objekter/handOneFinger.png", { x: 500, y: 315, width: 150, height: 150 });
        const correctanswer = new Blocks.Image("Bilder/Objekter/handFiveFinger.png", { x: 570, y: 575, width: 150, height: 150 });
        forestBackground.hide();
        tree1.hide();
        tree2.hide();
        sq1.hide();
        sq2.hide();
        sq3.hide();
        sq4.hide();
        sq5.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardFCountingSquirrelsVoice.onended = () => {
            forestBackground.show();
            tree1.show();
            tree2.show();
            sq1.show();
            sq2.show();
            sq3.show();
            sq4.show();
            sq5.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
    }
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

    } else if (tall === 2) {
        const forestQuestion3 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFMikkelRev.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFMikkelRevVoice.play();
        const letter = new Blocks.Image("Bilder/Objekter/mikkelRevLetter.png", { x: 50, y: 450, width: 350, height: 200 });
        const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/Forest/Question/qCardFMikkelRevWrong1.png", { x: 180, y: 130, width: 210, height: 210 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/Forest/Question/qCardFMikkelRevWrong2.png", { x: 235, y: 510, width: 210, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/Forest/Question/qCardFMikkelRevCorrect.png", { x: 680, y: 280, width: 210, height: 210 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardFMikkelRevVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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
        
    } else if (tall === 3) {
        const forestQuestion4 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFOddOneOut.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFOddOneOutVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 375, height: 275 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 375, height: 275 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 375, height: 275 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/whale.png", { x: 190, y: 135, width: 200, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", { x: 680, y: 285, width: 200, height: 200 });
        const wronganswer1 = new Blocks.Image("Bilder/Karakterer/bearSleeping.png", { x: 240, y: 535, width: 200, height: 150 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        correctanswer.hide();
        wronganswer2.hide();
        wronganswer1.hide();
        qCardFOddOneOutVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            correctanswer.show();
            wronganswer2.show();
            wronganswer1.show();
        }
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

    } else if (tall === 4) {
        const forestQuestion5 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFOwlSound.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFOwlSoundVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/forestBackgroundRiver.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 375, height: 275 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 375, height: 275 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 375, height: 275 });
        const wronganswer1 = new Blocks.Image("Bilder/Karakterer/woodPecker.png", { x: 680, y: 295, width: 180, height: 180 });
        const wronganswer2 = new Blocks.Image("Bilder/Objekter/seagull.png", { x: 200, y: 540, width: 280, height: 150 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/owl.png", { x: 180, y: 145, width: 230, height: 180 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardFOwlSoundVoice.onended = () => {
            qCardFOwlSoundVoiceAnswer.play();
            qCardFOwlSoundVoiceAnswer.loop = true;
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
        Actions.Click(wronganswer1, () => {
            qCardFOwlSoundVoiceAnswer.pause();
            qCardFOwlSoundVoiceAnswer.currentTime = 0;
            notQuiteCorrect.play();
            notQuiteCorrect.onended = () => {
                GaaTil(sceneForestHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            qCardFOwlSoundVoiceAnswer.pause();
            qCardFOwlSoundVoiceAnswer.currentTime = 0;
            wrongAnswerSound2.play();
            wrongAnswerSound2.onended = () => {
                GaaTil(sceneForestHub);
            }
        })
        Actions.Click(correctanswer, () => {
            qCardFOwlSoundVoiceAnswer.pause();
            qCardFOwlSoundVoiceAnswer.currentTime = 0;
            yesCorrect.play();
            yesCorrect.onended = () => {
                GaaTil(sceneForestHub);
            }
        })

    } else if (tall === 5) {
        const forestQuestion6 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhatTreeLosesLeaves.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFWhatTreeLosesLeavesVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 10, y: 200, width: 500, height: 400 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 560, y: 200, width: 500, height: 400 });
        const wronganswer1 = new Blocks.Image("Bilder/Objekter/pineTree.png", { x: 140, y: 240, width: 250, height: 300 });
        const correctanswer = new Blocks.Image("Bilder/Objekter/oakTree.png", { x: 700, y: 240, width: 250, height: 310 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        wronganswer1.hide();
        correctanswer.hide();
        qCardFWhatTreeLosesLeavesVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            wronganswer1.show();
            correctanswer.show();
        }
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
        

    } else if (tall === 6) {
        const forestQuestion7 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhoEatsNuts.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFWhoEatsNutsVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Karakterer/monkeyClosedMouth.png", { x: 250, y: 500, width: 230, height: 230 });
        const wronganswer2 = new Blocks.Image("Bilder/Karakterer/troll.png", { x: 690, y: 282, width: 230, height: 230 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 200, y: 134, width: 230, height: 230 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardFWhoEatsNutsVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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

    } else if (tall === 7) {
        const forestQuestion8 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhoHowls.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFWhoHowlsVoice.play();
        const moon = new Blocks.Image("Bilder/Objekter/moon.png", { x: 0, y: 400, width: 250, height: 250 });
        const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Karakterer/bearSleeping.png", { x: 188, y: 150, width: 230, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 280, y: 500, width: 150, height: 230 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/wolf.png", { x: 690, y: 282, width: 230, height: 230 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardFWhoHowlsVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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
        
    } else if (tall === 8) {
        const forestQuestion9 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWhoMakesHoney.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFWhoMakesHoneyVoice.play();
        const beeCube = new Blocks.Image("Bilder/Objekter/beeCube.png", { x: 750, y: 450, width: 200, height: 200 });
        const forestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 375, height: 275 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 375, height: 275 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 375, height: 275 });
        const wronganswer1 = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 190, y: 135, width: 200, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Karakterer/turtle.png", { x: 680, y: 285, width: 200, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Objekter/bee.png", { x: 240, y: 505, width: 200, height: 200 });
        forestBackground.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardFWhoMakesHoneyVoice.onended = () => {
            forestBackground.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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

    } else if (tall === 9) {
        const forestQuestion10 = new Blocks.Image("Bilder/Kort/Forest/Question/qCardFWoodpecker.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardFWoodpeckerVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", { x: 200, y: 133, width: 200, height: 230 });
        const wronganswer2 = new Blocks.Image("Bilder/Karakterer/monkeyClosedMouth.png", { x: 690, y: 285, width: 230, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/woodPecker.png", { x: 250, y: 520, width: 200, height: 200 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardFWoodpeckerVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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
}


// CITY

function sceneCityQuestionFront() {
    const cityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    let tall = Math.floor(Math.random() * 10);
    //tall = 9; // For debugging
    if (tall === 0) {
        const cityQuestion1 = new Blocks.Image("Bilder/Kort/City/Question/qCardCCountingWindows.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCCountingWindowsVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
        const house = new Blocks.Image("Bilder/Objekter/houseDrawing.png", { x: 580, y: 300, width: 450, height: 400 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 50, y: 10, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 610, y: 10, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 50, y: 330, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Objekter/handOneFinger.png", { x: 180, y: 50, width: 150, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Objekter/handFourFinger.png", { x: 740, y: 50, width: 150, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Objekter/handThreeFinger.png", { x: 170, y: 380, width: 160, height: 200 });
        background.hide();
        house.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardCCountingWindowsVoice.onended = () => {
            background.show();
            house.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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

    } else if (tall === 1) {
        const cityQuestion2 = new Blocks.Image("Bilder/Kort/City/Question/qCardCRedLight.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCRedLightVoice.play();
        const redLight = new Blocks.Image("Bilder/Objekter/redLight.png", { x: 50, y: 480, width: 200, height: 350 });
        const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCRedLightWrong1.png", { x: 680, y: 290, width: 240, height: 220 })
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCRedLightWrong2.png", { x: 230, y: 510, width: 240, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCRedLightCorrect.png", { x: 205, y: 147, width: 200, height: 200 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardCRedLightVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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

    } else if (tall === 2) {
        const cityQuestion3 = new Blocks.Image("Bilder/Kort/City/Question/qCardCTwoThingsBaker.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCTwoThingsBakerVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", { x: 40, y: 554, width: 150, height: 150 });
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", { x: 891, y: 554, width: 150, height: 150 });
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
        const cityQuestion4 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatColorTrafficLight.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCWhatColorTrafficLightVoice.play();
        const car = new Blocks.Image("Bilder/Objekter/car.png", { x: 35, y: 500, width: 300, height: 200 });
        const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatColorTrafficLightWrong1.png", { x: 200, y: 517, width: 300, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatColorTrafficLightWrong2.png", { x: 150, y: 150, width: 300, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatColorTrafficLightCorrect.png", { x: 650, y: 297, width: 300, height: 200 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardCWhatColorTrafficLightVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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

    } else if (tall === 4) {
        const cityQuestion5 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsABus.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCWhatIsABusVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsABusWrong1.png", { x: 150, y: 150, width: 200, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsABusWrong2.png", { x: 645, y: 287, width: 310, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsABusCorrect.png", { x: 220, y: 500, width: 230, height: 200 });
        const plane = new Blocks.Image("Bilder/Objekter/plane.png", { x: 270, y: 200, width: 240, height: 200 });
        const bus = new Blocks.Image("Bilder/Objekter/bus.png", { x: 350, y: 630, width: 130, height: 100 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        plane.hide();
        bus.hide();
        qCardCWhatIsABusVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
            plane.show();
            bus.show();
        }
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

    } else if (tall === 5) {
        const cityQuestio6 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsDoctor.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCWhatIsDoctorVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong1.png", { x: 200, y: 510, width: 300, height: 220 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong2.png", { x: 650, y: 283, width: 300, height: 230 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorCorrect.png", { x: 145, y: 135, width: 310, height: 215 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardCWhatIsDoctorVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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

    } else if (tall === 6) {
        const cityQuestion7 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsFireman.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCWhatIsFiremanVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong1.png", { x: 200, y: 510, width: 300, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong2.png", { x: 650, y: 283, width: 300, height: 230 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorCorrect.png", { x: 145, y: 135, width: 310, height: 215 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        correctanswer.hide();
        wronganswer2.hide();
        qCardCWhatIsFiremanVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            correctanswer.show();
            wronganswer2.show();
        }
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

    } else if (tall === 7) {
        const cityQuestion8 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsPolice.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCWhatIsPoliceVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong1.png", { x: 200, y: 510, width: 300, height: 220 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorWrong2.png", { x: 650, y: 283, width: 300, height: 230 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsDoctorCorrect.png", { x: 145, y: 135, width: 310, height: 215 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        correctanswer.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        qCardCWhatIsPoliceVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            correctanswer.show();
            wronganswer1.show();
            wronganswer2.show();
        }
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

    } else if (tall === 8) {
        const cityQuestion9 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWhatIsStore.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCWhatIsStoreVoice.play();
        const icecream = new Blocks.Image("Bilder/Objekter/iceCream.png", { x: 50, y: 50, width: 200, height: 280 });
        const lemon = new Blocks.Image("Bilder/Objekter/lemon.png", { x: 50, y: 500, width: 200, height: 200 });
        const strawberry = new Blocks.Image("Bilder/Objekter/strawberry.png", { x: 820, y: 500, width: 200, height: 200 });
        const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsStoreWrong1.png", { x: 200, y: 520, width: 300, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsStoreWrong2.png", { x: 650, y: 285, width: 300, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWhatIsStoreCorrect.png", { x: 153, y: 150, width: 300, height: 200 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardCWhatIsStoreVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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
        

    } else if (tall === 9) {
        const cityQuestion10 = new Blocks.Image("Bilder/Kort/City/Question/qCardCWheelsOnTheBus.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardCWheelsOnTheBusVoice.play();
        const bus = new Blocks.Image("Bilder/Objekter/bus.png", { x: 75, y: 500, width: 300, height: 200 });
        const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWheelsOnTheBusWrong1.png", { x: 146, y: 137, width: 310, height: 220 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWheelsOnTheBusWrong2.png", { x: 650, y: 288, width: 305, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/City/Question/qCardCWheelsOnTheBusCorrect.png", { x: 200, y: 510, width: 305, height: 220 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardCWheelsOnTheBusVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
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
}


// BEACH

function sceneBeachQuestionFront() {
    const beachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
    let tall = Math.floor(Math.random() * 11);
    //tall = 10; // For debugging
    if (tall === 0) {
        const beachQuestion1 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBBiggestSandCastle.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBBiggestSandCastleVoice.play();
        const girl = new Blocks.Image("Bilder/Karakterer/humanGirlClosedMouth.png", { x: 96, y: 451, width: 200, height: 250 });
        const sandCastle = new Blocks.Image("Bilder/Objekter/sandcastle.png", { x: 816, y: 566, width: 250, height: 300 });
        const background = new Blocks.Image("Bilder/Bakgrunner/beachBackground4.png", { x: -8, y: -8, width: 1088, height: 818 });
        const correctanswer = new Blocks.Image("Bilder/Objekter/sandcastle.png", { x: 49, y: 437, width: 400, height: 300 });
        const wronganswer2 = new Blocks.Image("Bilder/Objekter/sandcastle.png", { x: 596, y: 441, width: 300, height: 250 });
        const wronganswer1 = new Blocks.Image("Bilder/Objekter/sandcastle.png", { x: 504, y: 152, width: 250, height: 200 });
        background.hide();
        correctanswer.hide();
        wronganswer2.hide();
        wronganswer1.hide();
        qCardBBiggestSandCastleVoice.onended = () => {
            background.show();
            correctanswer.show();
            wronganswer2.show();
            wronganswer1.show();
        }
        Actions.Click(correctanswer, () => {
            applause.play();
            applause.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer1, () => {
            wrongAnswerSound1.play();
            wrongAnswerSound1.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            notQuiteCorrect.play();
            notQuiteCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 1) {
        const beachQuestion2 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBGarbage.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBGarbageVoice.play();
        const garbage = new Blocks.Image("Bilder/Objekter/trash.png", { x: 625, y: 471, width: 400, height: 230 });
        const background = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBGarbageWrong1.png", { x: 146, y: 134, width: 300, height: 220 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBGarbageWrong2.png", { x: 687, y: 283, width: 250, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBGarbageCorrect.png", { x: 250, y: 520, width: 250, height: 200 });
        const trashCan = new Blocks.Image("Bilder/Objekter/trashCan.png", { x: 177, y: 593, width: 120, height: 150 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        trashCan.hide();
        qCardBGarbageVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
            trashCan.show();
        }
        Actions.Click(wronganswer1, () => {
            wrongAnswerSound1.play();
            wrongAnswerSound1.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            notQuiteCorrect.play();
            notQuiteCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(correctanswer, () => {
            yesCorrect.play();
            yesCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 2) {
        const beachQuestion3 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBJellyfishString.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBJellyfishStringVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/beachBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const jellyfish = new Blocks.Image("Bilder/Karakterer/jellyfish.png", { x: 94, y: 331, width: 400, height: 450 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 76, y: 30, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 595, y: 30, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 595, y: 402, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Objekter/handFourFinger.png", { x: 175, y: 75, width: 200, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Objekter/handTwoFinger.png", { x: 698, y: 450, width: 200, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Objekter/handFiveFinger.png", { x: 707, y: 76, width: 200, height: 200 });
        background.hide();
        jellyfish.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardBJellyfishStringVoice.onended = () => {
            background.show();
            jellyfish.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
        Actions.Click(wronganswer1, () => {
            notQuiteCorrect.play();
            notQuiteCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            wrongAnswerSound2.play();
            wrongAnswerSound2.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(correctanswer, () => {
            applause.play();
            applause.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 3) {
        const beachQuestion4 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBOddOneOut.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBOddOneOutVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/beachBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 176, y: 149, width: 250, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Objekter/crab.png", { x: 703, y: 300, width: 200, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", { x: 248, y: 509, width: 200, height: 220 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardBOddOneOutVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
        Actions.Click(wronganswer1, () => {
            wrongAnswerSound1.play();
            wrongAnswerSound1.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            wrongAnswerSound2.play();
            wrongAnswerSound2.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(correctanswer, () => {
            yesCorrect.play();
            yesCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 4) {
        const beachQuestion5 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBSandTracks.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBSandTracksVoice.play();
        const cat = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", { x: 690, y: 490, width: 330, height: 220 });
        const background = new Blocks.Image("Bilder/Bakgrunner/beachBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 50, y: 50, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 620, y: 50, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 50, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Objekter/crab.png", { x: 130, y: 91, width: 240, height: 220 });
        const wronganswer2 = new Blocks.Image("Bilder/Objekter/seagull.png", { x: 101, y: 505, width: 300, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/humanGirlClosedMouth.png", { x: 719, y: 82, width: 200, height: 230 });
        const sandTracks = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBSandTracksTracks.png", { x: 470, y: 360, width: 600, height: 400 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        sandTracks.hide();
        qCardBSandTracksVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
            sandTracks.show();
        }
        Actions.Click(wronganswer1, () => {
            wrongAnswerSound2.play();
            wrongAnswerSound2.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            notQuiteCorrect.play();
            notQuiteCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(correctanswer, () => {
            applause.play();
            applause.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        

    } else if (tall === 5) {
        const beachQuestion6 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBShark.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBSharkVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Karakterer/whale.png", { x: 180, y: 135, width: 250, height: 220 });
        const wronganswer2 = new Blocks.Image("Bilder/Karakterer/fish2.png", { x: 673, y: 295, width: 250, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/shark.png", { x: 226, y: 511, width: 250, height: 200 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardBSharkVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
        Actions.Click(wronganswer1, () => {
            notQuiteCorrect.play();
            notQuiteCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            wrongAnswerSound2.play();
            wrongAnswerSound2.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(correctanswer, () => {
            yesCorrect.play();
            yesCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 6) {
        const beachQuestion7 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBStarfish.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBStarfishVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/beachBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Objekter/crab.png", { x: 231, y: 521, width: 240, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Karakterer/turtle.png", { x: 692, y: 289, width: 220, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Objekter/starFish.png", { x: 186, y: 136, width: 230, height: 220 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardBStarfishVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
        Actions.Click(wronganswer1, () => {
            notQuiteCorrect.play();
            notQuiteCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            wrongAnswerSound1.play();
            wrongAnswerSound1.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(correctanswer, () => {
            yesCorrect.play();
            yesCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 7) {
        const beachQuestion8 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBSunscreen.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBSunscreenVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBSunscreenWrong1.png", { x: 150, y: 137, width: 250, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBSunscreenWrong2.png", { x: 197, y: 504, width: 250, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBSunscreenCorrect.png", { x: 646, y: 283, width: 250, height: 200 });
        const poop = new Blocks.Image("Bilder/Objekter/poop.png", { x: 390, y: 604, width: 150, height: 150 });
        const sunscreen = new Blocks.Image("Bilder/Objekter/sunscreen.png", { x: 859, y: 363, width: 100, height: 150 });
        const milk = new Blocks.Image("Bilder/Objekter/milk.png", { x: 356, y: 203, width: 100, height: 150 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        poop.hide();
        sunscreen.hide();
        milk.hide();
        qCardBSunscreenVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
            poop.show();
            sunscreen.show();
            milk.show();
        }
        Actions.Click(wronganswer1, () => {
            wrongAnswerSound1.play();
            wrongAnswerSound1.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            wrongAnswerSound2.play();
            wrongAnswerSound2.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(correctanswer, () => {
            applause.play();
            applause.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 8) {
        const beachQuestion9 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBSwimSafely.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBSwimSafelyVoice.play();
        const jellyfish = new Blocks.Image("Bilder/Karakterer/jellyfish.png", { x: 23, y: 458, width: 300, height: 350 });
        const background = new Blocks.Image("Bilder/Bakgrunner/beachBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Objekter/snorkel.png", { x: 720, y: 291, width: 180, height: 220 });
        const wronganswer2 = new Blocks.Image("Bilder/Objekter/swimmingFeet.png", { x: 265, y: 513, width: 180, height: 220 });
        const correctanswer = new Blocks.Image("Bilder/Karakterer/humanGirlSwimming.png", { x: 215, y: 137, width: 180, height: 220 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        qCardBSwimSafelyVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
        Actions.Click(wronganswer1, () => {
            notQuiteCorrect.play();
            notQuiteCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            wrongAnswerSound2.play();
            wrongAnswerSound2.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(correctanswer, () => {
            applause.play();
            applause.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 9) {                                                                                                                                    // Anchor
        const beachQuestion10 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBThreeDifferentAnimals.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBThreeDifferentAnimalsVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", { x: 40, y: 554, width: 150, height: 150 });
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", { x: 891, y: 554, width: 150, height: 150 });
        Actions.Click(donebutton, () => {
            qCardBThreeDifferentAnimalsVoice.pause();
            qCardBThreeDifferentAnimalsVoice.currentTime = 0;
            applause.play();
            applause.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(notdonebutton, () => {
            qCardBThreeDifferentAnimalsVoice.pause();
            qCardBThreeDifferentAnimalsVoice.currentTime = 0;
            challengeNotCompleted1.play();
            challengeNotCompleted1.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 10) {
        const beachQuestion11 = new Blocks.Image("Bilder/Kort/Beach/Question/qCardBWhale.png", { x: 30, y: 10, width: 1020, height: 700 });
        qCardBWhaleVoice.play();
        const background = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
        const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
        const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
        const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
        const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBWhaleWrong1.png", { x: 244, y: 509, width: 250, height: 200 });
        const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBWhaleWrong2.png", { x: 705, y: 278, width: 250, height: 200 });
        const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBWhaleCorrect.png", { x: 151, y: 135, width: 250, height: 200 });
        const crab = new Blocks.Image("Bilder/Objekter/crab.png", { x: 621, y: 408, width: 120, height: 120 });
        const fish = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 165, y: 602, width: 150, height: 150 });
        const whale = new Blocks.Image("Bilder/Karakterer/whale.png", { x: 333, y: 232, width: 150, height: 150 });
        background.hide();
        answercard1.hide();
        answercard2.hide();
        answercard3.hide();
        wronganswer1.hide();
        wronganswer2.hide();
        correctanswer.hide();
        crab.hide();
        fish.hide();
        whale.hide();
        qCardBWhaleVoice.onended = () => {
            background.show();
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
            crab.show();
            fish.show();
            whale.show();
        }
        Actions.Click(wronganswer1, () => {
            wrongAnswerSound2.play();
            wrongAnswerSound2.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(wronganswer2, () => {
            notQuiteCorrect.play();
            notQuiteCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(correctanswer, () => {
            yesCorrect.play();
            yesCorrect.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    }
}


// CHALLENGE CARDS

// FOREST

function sceneForestChallengeFront() {
    const forestBackground = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    let tall = Math.floor(Math.random() * 10);
    //tall = 2; // For debugging
    if (tall === 0) {
        const forestChallenge1 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFFlood.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFFloodVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardFFloodVoice.pause();
            chCardFFloodVoice.currentTime = 0;
            GaaTil(sceneForestCh1Answer);
        })

    } else if (tall === 1) {
        const forestChallenge2 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFGiraffeLost.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFGiraffeLostVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        const giraffe = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 800, y: 310, width: 220, height: 400 });
        Actions.Click(continueButton, () => {
            chCardFGiraffeLostVoice.pause();
            chCardFGiraffeLostVoice.currentTime = 0;
            GaaTil(sceneForestCh2Answer);
        })

    } else if (tall === 2) {
        const forestChallenge3 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFHulkBabyPoop.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFHulkBabyPoopVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        const hulkbaby = new Blocks.Image("Bilder/Karakterer/hulkbaby.png", { x: 50, y: 400, width: 250, height: 300 });
        Actions.Click(continueButton, () => {
            chCardFHulkBabyPoopVoice.pause();
            chCardFHulkBabyPoopVoice.currentTime = 0;
            GaaTil(sceneForestCh3Answer);
        })

    } else if (tall === 3) {
        const forestChallenge4 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFJumpLikeRabbit.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFJumpLikeRabbitVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", { x: 150, y: 520, width: 150, height: 150 });
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", { x: 788, y: 520, width: 150, height: 150 });
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
        const forestChallenge5 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFMooseLaugh.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFMooseLaughVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        const moose = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", { x: 100, y: 450, width: 350, height: 450 });
        Actions.Click(continueButton, () => {
            chCardFMooseLaughVoice.pause();
            chCardFMooseLaughVoice.currentTime = 0;
            GaaTil(sceneForestCh4Answer);
        })

    } else if (tall === 5) {
        const forestChallenge6 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFNameAnimals.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFNameAnimalsVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", { x: 150, y: 520, width: 150, height: 150 });
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", { x: 788, y: 520, width: 150, height: 150 });
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
        const forestChallenge7 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFRobotMushroom.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFRobotMushroomVoice.play();
        const robot = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", { x: 30, y: 410, width: 200, height: 300 });
        const mushroom1 = new Blocks.Image("Bilder/Objekter/chantarelleMushroom.png", { x: 475, y: 540, width: 150, height: 150 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardFRobotMushroomVoice.pause();
            chCardFRobotMushroomVoice.currentTime = 0;
            GaaTil(sceneForestCh5Answer);
        })

    } else if (tall === 7) {
        const forestChallenge8 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFSongAboutTroll.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFSongAboutTrollVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", { x: 50, y: 20, width: 150, height: 150 });
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", { x: 883, y: 20, width: 150, height: 150 });
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
        const forestChallenge9 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFStretchLikeTree.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFStretchLikeTreeVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", { x: 150, y: 520, width: 150, height: 150 });
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", { x: 788, y: 520, width: 150, height: 150 });
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
        const forestChallenge10 = new Blocks.Image("Bilder/Kort/Forest/Challenge/chCardFTadpole.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardFTadpoleVoice.play();
        const tadpole1 = new Blocks.Image("Bilder/Karakterer/tadpoleBoy.png", { x: 200, y: 450, width: 200, height: 200 });
        const tadpole2 = new Blocks.Image("Bilder/Karakterer/tadpoleGirl.png", { x: 700, y: 450, width: 200, height: 200 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardFTadpoleVoice.pause();
            chCardFTadpoleVoice.currentTime = 0;
            GaaTil(sceneForestCh6Answer);
        })

    }
}


// CITY

function sceneCityChallengeFront() {
    const cityBackground = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    let tall = Math.floor(Math.random() * 5);
    //tall = 4; // For debugging
    if (tall === 0) {
        const cityChallenge1 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCBakeBread.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardCBakeBreadVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", { x: 150, y: 520, width: 150, height: 150 });
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", { x: 788, y: 520, width: 150, height: 150 });
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
        const cityChallenge2 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCBuildBuilding.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardCBuildBuildingVoice.play();
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 620, width: 150, height: 150 });
        const blocks1 = new Blocks.Image("Bilder/Objekter/block1.png", { x: 30, y: 500, width: 200, height: 200 });
        const blocks2 = new Blocks.Image("Bilder/Objekter/block2.png", { x: 30, y: 412, width: 200, height: 200 });
        const blocks3 = new Blocks.Image("Bilder/Objekter/block3.png", { x: 30, y: 320, width: 200, height: 200 });
        Actions.Click(continueButton, () => {
            chCardCBuildBuildingVoice.pause();
            chCardCBuildBuildingVoice.currentTime = 0;
            GaaTil(sceneCityCh1Answer);
        })

    } else if (tall === 2) {
        const cityChallenge3 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCCatHiding.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardCCatHidingVoice.play();
        const cat = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", { x: 650, y: 420, width: 400, height: 300 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardCCatHidingVoice.pause();
            chCardCCatHidingVoice.currentTime = 0;
            GaaTil(sceneCityCh2Answer);
        })

    } else if (tall === 3) {
        const cityChallenge4 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCCountCars.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardCCountCarsVoice.play();
        const car = new Blocks.Image("Bilder/Objekter/bus.png", { x: 40, y: 500, width: 300, height: 200 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardCCountCarsVoice.pause();
            chCardCCountCarsVoice.currentTime = 0;
            GaaTil(sceneCityCh3Answer);
        })

    } else if (tall === 4) {
        const cityChallenge5 = new Blocks.Image("Bilder/Kort/City/Challenge/chCardCDroppedGroceries.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardCDroppedGroceriesVoice.play();
        const hulk = new Blocks.Image("Bilder/Karakterer/hulkClosedMouth.png", { x: -90, y: 470, width: 550, height: 400 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardCDroppedGroceriesVoice.pause();
            chCardCDroppedGroceriesVoice.currentTime = 0;
            GaaTil(sceneCityCh4Answer);
        })

    }
}


// BEACH 

function sceneBeachChallengeFront() {
    const beachBackground = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
    let tall = Math.floor(Math.random() * 7);
    //tall = 6; // For debugging
    if (tall === 0) {
        const beachChallenge1 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBBiggestFish.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardBBiggestFishVoice.play();
        const jellyfish = new Blocks.Image("Bilder/Karakterer/jellyfish.png", { x: 731, y: 419, width: 300, height: 350 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardBBiggestFishVoice.pause();
            chCardBBiggestFishVoice.currentTime = 0;
            GaaTil(sceneBeachCh1Answer);
        })

    } else if (tall === 1) {
        const beachChallenge2 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBCatWater.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardBCatWaterVoice.play();
        const cat = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", { x: 18, y: 487, width: 350, height: 250 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 620, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardBCatWaterVoice.pause();
            chCardBCatWaterVoice.currentTime = 0;
            GaaTil(sceneBeachCh2Answer);
        })

    } else if (tall === 2) {
        const beachChallenge3 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBCountFish.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardBCountFishVoice.play();
        const fish1 = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 825, y: 500, width: 200, height: 200 });
        const fish2 = new Blocks.Image("Bilder/Karakterer/fish2.png", { x: 53, y: 500, width: 200, height: 200 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardBCountFishVoice.pause();
            chCardBCountFishVoice.currentTime = 0;
            GaaTil(sceneBeachCh3Answer);
        })

    } else if (tall === 3) {
        const beachChallenge4 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBMermaidCat.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardBMermaidCatVoice.play();
        const mermaidCat = new Blocks.Image("Bilder/Karakterer/mermaidCat.png", { x: 729, y: 438, width: 300, height: 250 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardBMermaidCatVoice.pause();
            chCardBMermaidCatVoice.currentTime = 0;
            GaaTil(sceneBeachCh4Answer);
        })

    } else if (tall === 4) {
        const beachChallenge5 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBSongAboutOcean.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardBSongAboutOceanVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", { x: 43, y: 547, width: 150, height: 150 });
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", { x: 885, y: 547, width: 150, height: 150 });
        Actions.Click(donebutton, () => {
            challengeCompleted1.play();
            challengeCompleted1.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(notdonebutton, () => {
            challengeNotCompleted1.play();
            challengeNotCompleted1.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })

    } else if (tall === 5) {
        const beachChallenge6 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBSunburntGiraffe.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardBSunburntGiraffeVoice.play();
        const giraffe = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 817, y: 277, width: 220, height: 400 });
        const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
        Actions.Click(continueButton, () => {
            chCardBSunburntGiraffeVoice.pause();
            chCardBSunburntGiraffeVoice.currentTime = 0;
            GaaTil(sceneBeachCh5Answer);
        })

    } else if (tall === 6) {
        const beachChallenge7 = new Blocks.Image("Bilder/Kort/Beach/Challenge/chCardBWalkLikeCrab.png", { x: 30, y: 10, width: 1020, height: 700 });
        chCardBWalkLikeCrabVoice.play();
        const donebutton = new Blocks.Image("Bilder/Knapper/correctButton.png", { x: 40, y: 554, width: 150, height: 150 });
        const notdonebutton = new Blocks.Image("Bilder/Knapper/wrongButton.png", { x: 891, y: 554, width: 150, height: 150 });
        Actions.Click(donebutton, () => {
            chCardBWalkLikeCrabVoice.pause();
            chCardBWalkLikeCrabVoice.currentTime = 0;
            challengeCompleted2.play();
            challengeCompleted2.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
        Actions.Click(notdonebutton, () => {
            chCardBWalkLikeCrabVoice.pause();
            chCardBWalkLikeCrabVoice.currentTime = 0;
            challengeNotCompleted1.play();
            challengeNotCompleted1.onended = () => {
                GaaTil(sceneBeachHub);
            }
        })
    }
}


// ANSWERS/TASKS


// FOREST - CHALLENGES

function sceneForestCh1Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackgroundRiver.png", { x: -8, y: -8, width: 1088, height: 1088 });
    const log1 = new Blocks.Image("Bilder/Objekter/logRound1.png", { x: 637, y: 195, width: 100, height: 100 });
    const log2 = new Blocks.Image("Bilder/Objekter/logTriangle2.png", { x: 765, y: 710, width: 100, height: 100 });
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
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
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    const giraffe1 = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 270, y: 170, width: 200, height: 650 });
    const rocks1 = new Blocks.Image("Bilder/Objekter/rocks1.png", { x: 700, y: 650, width: 200, height: 150 });
    const rocks2 = new Blocks.Image("Bilder/Objekter/rocks2.png", { x: 600, y: 600, width: 100, height: 100 });
    const tree1 = new Blocks.Image("Bilder/Objekter/oakTree.png", { x: 250, y: 330, width: 300, height: 550 });
    const treestump = new Blocks.Image("Bilder/Objekter/treeStump.png", { x: 570, y: 560, width: 50, height: 50 });
    const rocks3 = new Blocks.Image("Bilder/Objekter/rocks1.png", { x: 30, y: 650, width: 100, height: 100 });
    const squirrel = new Blocks.Image("Bilder/Karakterer/squirrel.png", { x: 710, y: 200, width: 50, height: 50 });
    Actions.Click(giraffe1, () => {
        challengeCompleted1.play();
        challengeCompleted1.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestCh3Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    const answercard1 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 50, y: 50, width: 400, height: 300 });
    const answercard2 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 610, y: 50, width: 400, height: 300 });
    const answercard3 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 610, y: 400, width: 400, height: 300 });
    const poop = new Blocks.Image("Bilder/Objekter/poop.png", { x: 100, y: 400, width: 350, height: 300 });
    const wronganswer1 = new Blocks.Image("Bilder/Karakterer/bearSleeping.png", { x: 130, y: 100, width: 250, height: 200 });
    const wronganswer2 = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 730, y: 430, width: 150, height: 230 });
    const correctanswer = new Blocks.Image("Bilder/Objekter/rabbit.png", { x: 690, y: 100, width: 250, height: 200 });
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneForestHub);
        }
    })
}

function sceneForestCh4Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
    const moose1 = new Blocks.Image("Bilder/Karakterer/mooseClosedMouth.png", { x: 270, y: 200, width: 500, height: 800 });
    const moose2 = new Blocks.CellAnimation(["Bilder/Karakterer/mooseClosedmouth.png", "Bilder/Karakterer/mooseClosedMouth.png", "Bilder/Karakterer/mooseClosedMouth.png", "Bilder/Karakterer/mooseOpenMouth.png"], { x: 270, y: 200, width: 500, height: 800, auto: true, loop: true });
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
        }
    }, { onTick: true, auto: true });

}

function sceneForestCh5Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
    const rocks1 = new Blocks.Image("Bilder/Objekter/rocks1.png", { x: 800, y: 450, width: 100, height: 100 });
    const rocks2 = new Blocks.Image("Bilder/Objekter/rocks2.png", { x: 800, y: 650, width: 200, height: 200 });
    const flower1 = new Blocks.Image("Bilder/Objekter/flower1.png", { x: 450, y: 600, width: 50, height: 50 });
    const mushroom1 = new Blocks.Image("Bilder/Objekter/fluesopp.png", { x: 500, y: 560, width: 70, height: 70 });
    const mushroom2 = new Blocks.Image("Bilder/Objekter/chantarelleMushroom.png", { x: 750, y: 490, width: 70, height: 70 });
    const robot1 = new Blocks.CellAnimation(["Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manOpenMouth.png"], { x: 270, y: 350, width: 450, height: 600, loop: true, auto: true });
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
    const background = new Blocks.Image("Bilder/Bakgrunner/forestBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
    const answercard1 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 50, y: 10, width: 400, height: 300 });
    const answercard2 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 610, y: 10, width: 400, height: 300 });
    const answercard3 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 50, y: 330, width: 400, height: 300 });
    const tadpole1 = new Blocks.Image("Bilder/Karakterer/tadpoleBoy.png", { x: 200, y: 720, width: 80, height: 80 });
    const tadpole2 = new Blocks.Image("Bilder/Karakterer/tadpoleBoy.png", { x: 880, y: 620, width: 80, height: 80 });
    const tadpole3 = new Blocks.Image("Bilder/Karakterer/tadpoleGirl.png", { x: 570, y: 650, width: 80, height: 80 });
    const tadpole4 = new Blocks.Image("Bilder/Karakterer/tadpoleGirl.png", { x: 580, y: 570, width: 40, height: 40 });
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/handFiveFinger.png", { x: 160, y: 60, width: 200, height: 200 });
    const wronganswer2 = new Blocks.Image("Bilder/Objekter/handTwoFinger.png", { x: 730, y: 50, width: 150, height: 200 });
    const correctanswer = new Blocks.Image("Bilder/Objekter/handFourFinger.png", { x: 175, y: 377, width: 150, height: 200 });
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


// CITY - CHALLENGES

function sceneCityCh1Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
    const blocks1 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock1.png", { x: 440, y: 615, width: 200, height: 200 });
    const blocks2 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock2.png", { x: 358, y: 277, width: 200, height: 200 });
    const blocks3 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock3.png", { x: 54, y: 421, width: 200, height: 200 });
    const blocks4 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock4.png", { x: 28, y: 27, width: 200, height: 200 });
    const blocks5 = new Blocks.Image("Bilder/Kort/KortSvar/City/Challenge/chCardCBuildBuildingBlock5.png", { x: 804, y: 248, width: 200, height: 200 });
    const continueButton = new Blocks.Image("Bilder/Knapper/continueButton.png", { x: 475, y: 10, width: 150, height: 150 });
    continueButton.hide();
    const countdown = new Actions.CountDown(8, (complete) => {
        if (complete) {
            continueButton.show();
        }
    }, { onTick: true, auto: true });
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
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    const cat = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", { x: 625, y: 530, width: 60, height: 50 });
    const man = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", { x: 485, y: 600, width: 50, height: 70 });
    const giraffe = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", { x: 300, y: 340, width: 70, height: 140 });
    const car = new Blocks.Image("Bilder/Objekter/car.png", { x: 500, y: 720, width: 100, height: 80 });
    const girl = new Blocks.Image("Bilder/Karakterer/humanGirlClosedMouth.png", { x: 750, y: 670, width: 50, height: 70 });
    const hulk = new Blocks.Image("Bilder/Karakterer/hulkClosedMouth.png", { x: 100, y: 650, width: 100, height: 100 });
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", { x: 700, y: 670, width: 50, height: 70 });
    Actions.Click(cat, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneCityHub);
        }
    })

}

function sceneCityCh3Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground.png", { x: -8, y: -8, width: 1088, height: 818 });
    const answercard1 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 30, y: 30, width: 400, height: 300 });
    const answercard2 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 630, y: 30, width: 400, height: 300 });
    const answercard3 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 630, y: 370, width: 400, height: 300 });
    const car1 = new Blocks.Image("Bilder/Objekter/bus.png", { x: 200, y: 720, width: 130, height: 80 });
    const car2 = new Blocks.Image("Bilder/Objekter/bus.png", { x: 700, y: 700, width: 130, height: 80 });
    const car3 = new Blocks.Image("Bilder/Objekter/bus.png", { x: 300, y: 430, width: 80, height: 50 });
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/handTwoFinger.png", { x: 750, y: 80, width: 150, height: 200 });
    const wronganswer2 = new Blocks.Image("Bilder/Objekter/handFiveFinger.png", { x: 155, y: 90, width: 170, height: 200 });
    const correctanswer = new Blocks.Image("Bilder/Objekter/handThreeFinger.png", { x: 750, y: 420, width: 150, height: 200 });
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

function sceneCityCh4Answer() {                                                                                                             // Bli ferdig med denne 
    const background = new Blocks.Image("Bilder/Bakgrunner/cityBackground2.png", { x: -8, y: -8, width: 1088, height: 818 });
    const hulkShopping = new Blocks.Image("Bilder/Karakterer/hulkShopping.png", { x: 270, y: -10, width: 600, height: 450 });
    const shoppingBag = new Blocks.Image("Bilder/Objekter/shoppingBagElement.png", { x: 292, y: 284, width: 130, height: 100 });
    const cheese = new Blocks.Image("Bilder/Objekter/cheese.png", { x: 271, y: 648, width: 90, height: 90 });
    const kiwi = new Blocks.Image("Bilder/Objekter/kiwi.png", { x: 651, y: 595, width: 90, height: 90 });
    const lemon = new Blocks.Image("Bilder/Objekter/lemon.png", { x: 433, y: 534, width: 90, height: 90 });
    const milk = new Blocks.Image("Bilder/Objekter/milk.png", { x: 930, y: 577, width: 90, height: 120 });
    const plum = new Blocks.Image("Bilder/Objekter/plum.png", { x: 856, y: 380, width: 90, height: 120 });
    const strawberry = new Blocks.Image("Bilder/Objekter/strawberry.png", { x: 67, y: 525, width: 90, height: 90 });
    Actions.Drag(cheese);
    Actions.Drag(kiwi);
    Actions.Drag(lemon);
    Actions.Drag(milk);
    Actions.Drag(plum);
    Actions.Drag(strawberry);
    Actions.Colide(cheese, shoppingBag, () => { cheese.hide(); });
    Actions.Colide(kiwi, shoppingBag, () => { kiwi.hide(); });
    Actions.Colide(lemon, shoppingBag, () => { lemon.hide(); });
    Actions.Colide(milk, shoppingBag, () => { milk.hide(); });
    Actions.Colide(plum, shoppingBag, () => { plum.hide(); });
    Actions.Colide(strawberry, shoppingBag, () => { strawberry.hide(); });
    //const pictureArray = [cheese, kiwi, lemon, milk, plum, strawberry];


}

// BEACH - QUESTIONS                                                                                                                    // Anchor

function sceneBeachQ10Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
    const answercard1 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
    const answercard2 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
    const answercard3 = new Blocks.Image("Bilder/Kort/questionCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBWhaleWrong1.png", { x: 244, y: 509, width: 250, height: 200 });
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBWhaleWrong2.png", { x: 705, y: 278, width: 250, height: 200 });
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Question/qCardBWhaleCorrect.png", { x: 151, y: 135, width: 250, height: 200 });
    const crab = new Blocks.Image("Bilder/Objekter/crab.png", { x: 621, y: 408, width: 120, height: 120 });
    const fish = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 165, y: 602, width: 150, height: 150 });
    const whale = new Blocks.Image("Bilder/Karakterer/whale.png", { x: 333, y: 232, width: 150, height: 150 });
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })

}

// BEACH - CHALLENGE

function sceneBeachCh1Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/beachBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
    const jellyfish = new Blocks.Image("Bilder/Karakterer/jellyfish.png", { x: -305, y: -10, width: 300, height: 400 });
    const wronganswer1 = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 57, y: 467, width: 130, height: 130 });
    const wronganswer2 = new Blocks.Image("Bilder/Karakterer/fish2.png", { x: 247, y: 601, width: 180, height: 180 });
    const wronganswer3 = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 438, y: 526, width: 50, height: 50 });
    const correctanswer = new Blocks.Image("Bilder/Karakterer/fish2.png", { x: 763, y: 527, width: 220, height: 220 });
    Actions.Tween(jellyfish, 5, 0);
    Actions.Click(wronganswer1, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(wronganswer3, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })

}

function sceneBeachCh2Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
    const answercard1 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
    const answercard2 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
    const answercard3 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/sunscreen.png", { x: 213, y: 139, width: 170, height: 200 });
    const wronganswer2 = new Blocks.Image("Bilder/Objekter/bucket.png", { x: 697, y: 290, width: 200, height: 200 });
    const correctanswer = new Blocks.Image("Bilder/Objekter/towel.png", { x: 219, y: 515, width: 250, height: 200 });
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(correctanswer, () => {
        yesCorrect.play();
        yesCorrect.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })

}

function sceneBeachCh3Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/beachBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
    const answercard1 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
    const answercard2 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
    const answercard3 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
    const wronganswer1 = new Blocks.Image("Bilder/Objekter/handTwoFinger.png", { x: 262, y: 514, width: 150, height: 200 });
    const wronganswer2 = new Blocks.Image("Bilder/Objekter/handFourFinger.png", { x: 704, y: 298, width: 200, height: 200 });
    const correctanswer = new Blocks.Image("Bilder/Objekter/handFiveFinger.png", { x: 218, y: 141, width: 200, height: 200 });
    const fish1 = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 1090, y: 290, width: 120, height: 120 });
    const fish2 = new Blocks.Image("Bilder/Karakterer/fish2.png", { x: -216, y: -22, width: 200, height: 200 });
    const fish3 = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 1087, y: 256, width: 100, height: 100 });
    const fish4 = new Blocks.Image("Bilder/Karakterer/fish2.png", { x: -166, y: 455, width: 150, height: 150 });
    const fish5 = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 1100, y: 620, width: 200, height: 200 });
    answercard1.hide();
    answercard2.hide();
    answercard3.hide();
    wronganswer1.hide();
    wronganswer2.hide();
    correctanswer.hide();
    Actions.Tween(fish1, -6, 0);
    Actions.Tween(fish2, 7, 0);
    Actions.Tween(fish3, -5, -1);
    Actions.Tween(fish4, 9, 0);
    Actions.Tween(fish5, -8, 0);
    const countdown = new Actions.CountDown(8.4, (complete) => {
        if (complete) {
            answercard1.show();
            answercard2.show();
            answercard3.show();
            wronganswer1.show();
            wronganswer2.show();
            correctanswer.show();
        }
    }, { onTick: true, auto: true });

    Actions.Click(wronganswer1, () => {
        wrongAnswerSound1.play();
        wrongAnswerSound1.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })

}

function sceneBeachCh4Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/beachBackground3.png", { x: -8, y: -8, width: 1088, height: 818 });
    const crab = new Blocks.Image("Bilder/Objekter/crab.png", { x: 593, y: 723, width: 60, height: 60 });
    const fish1 = new Blocks.Image("Bilder/Karakterer/fish1.png", { x: 812, y: 95, width: 200, height: 200 });
    const rocks = new Blocks.Image("Bilder/Objekter/rocks2.png", { x: 136, y: 653, width: 300, height: 200 });
    const jellyfish = new Blocks.Image("Bilder/Karakterer/jellyfish.png", { x: 318, y: 142, width: 220, height: 330 });
    const starFish = new Blocks.Image("Bilder/Objekter/starFish.png", { x: 362, y: 192, width: 60, height: 60 });
    Actions.Click(starFish, () => {
        challengeCompleted1.play();
        challengeCompleted1.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })

}

function sceneBeachCh5Answer() {
    const background = new Blocks.Image("Bilder/Bakgrunner/beach.png", { x: -8, y: -8, width: 1088, height: 818 });
    const answercard1 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 100, y: 100, width: 400, height: 300 });
    const answercard2 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 600, y: 250, width: 400, height: 300 });
    const answercard3 = new Blocks.Image("Bilder/Kort/challengeCardFront.png", { x: 150, y: 470, width: 400, height: 300 });
    const wronganswer1 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Challenge/chCardBSunburntGiraffeWrong1.png", { x: 649, y: 287, width: 220, height: 200 });
    const wronganswer2 = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Challenge/chCardBSunburntGiraffeWrong2.png", { x: 195, y: 500, width: 220, height: 200 });
    const correctanswer = new Blocks.Image("Bilder/Kort/KortSvar/Beach/Challenge/chCardBSunburntGiraffeCorrect.png", { x: 152, y: 137, width: 220, height: 200 });
    const sunscreen = new Blocks.Image("Bilder/Objekter/sunscreen.png", { x: 350, y: 136, width: 100, height: 170 });
    const milk = new Blocks.Image("Bilder/Objekter/milk.png", { x: 834, y: 341, width: 120, height: 170 });
    const tomato = new Blocks.Image("Bilder/Objekter/tomato.png", { x: 381, y: 557, width: 120, height: 120 });
    Actions.Click(wronganswer1, () => {
        notQuiteCorrect.play();
        notQuiteCorrect.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(wronganswer2, () => {
        wrongAnswerSound2.play();
        wrongAnswerSound2.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })
    Actions.Click(correctanswer, () => {
        applause.play();
        applause.onended = () => {
            GaaTil(sceneBeachHub);
        }
    })

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
