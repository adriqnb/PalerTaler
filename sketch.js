// declare our global
// arrays (aka "model")
let pageTexts = []; // array of texts
let choicesTexts = []; // array of texts
let pageImages = []; // array of images
let consequences = []; // array of lists (aka as arrays)

// declare global var
// to represent current page number (aka "state")
let currentPageIndex = 0;

// declare global var
// to store previously displayed page
let previousPageIndex = 0;

function preload() {
  // ********************
  // "The Tale of Paler"
  // ********************

  let tempI = 0;
  pageTexts[tempI] = 'The Tale of Paler';
  choicesTexts[tempI] = 'To begin, press [1]';
  consequences[tempI] = [1];

  // page 1
  tempI = 1;
  pageTexts[tempI] =
    'Would you like to hear the tale of the three moonlit paper kites?';
  choicesTexts[tempI] =
    'If so, press [1];\nif not, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/kite_03.jpg');
  consequences[tempI] = [4, 2];

  // page 2
  tempI = 2;
  pageTexts[tempI] =
    'Would you prefer the tale of the three quiet lighthouse keepers?';
  choicesTexts[tempI] =
    'If so, press [1];\nif not, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/lighthouse_01.jpg');
  consequences[tempI] = [16, 3];

  // page 3
  tempI = 3;
  pageTexts[tempI] =
    'Would you rather read the one about the three wandering constellations?';
  choicesTexts[tempI] =
    'If so, press [1];\nif not, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/kite_02.jpg');
  consequences[tempI] = [17, 21];

  // page 4
  tempI = 4;
  pageTexts[tempI] =
    'Once, three paper kites slept in a lilac dusk, folded neat upon a windowsill. Their strings coiled like kittens’ tails, their tissue skins shimmering faintly with borrowed moon.';
  choicesTexts[tempI] =
    "If you'd prefer another description, press [1];\nif this one will do, press [2];\nTo go back, press [b]";
  pageImages[tempI] = loadImage('./assets/kites_01.jpg');
  consequences[tempI] = [9, 5];

  // page 5
  tempI = 5;
  pageTexts[tempI] =
    'Their rest was blank and still. The truth is these little travelers seldom dream.';
  choicesTexts[tempI] =
    "If you'd rather they did dream, press [1];\nif not, press [2];\nTo go back, press [b]";
  pageImages[tempI] = loadImage('./assets/kite_02.jpg');
  consequences[tempI] = [6, 7];

  // page 6
  tempI = 6;
  pageTexts[tempI] =
    'They were dreaming, of course. Kites dream always—of thermals, tall coasts, and a sea that hums like a shell held to the heart.';
  choicesTexts[tempI] =
    'If you wish to know their dream, press [1];\nif its neither here nor there, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/stars_01.jpg');
  consequences[tempI] = [11, 7];

  // page 7
  tempI = 7;
  pageTexts[tempI] =
    'Their tails wore tinkling bells, and each bell wore a ribbon: one sable, one copper, one pale-gold as morning tea.';
  choicesTexts[tempI] =
    "If you'd prefer a different ribbon color, press [1];\nif you’re happy as is, press [2];\nTo go back, press [b]";
  pageImages[tempI] = loadImage('./assets/stars_02.jpg');
  consequences[tempI] = [8, 10];

  // page 8
  tempI = 8;
  pageTexts[tempI] =
    'Very well—indigo ribbons then, deep as a harbor at night.';
  choicesTexts[tempI] =
    'If you’d like another color again, press [1];\nif indigo suits, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/kites_02.jpg');
  consequences[tempI] = [7, 10];

  // page 9
  tempI = 9;
  pageTexts[tempI] =
    'They had silver thread along their seams and a secret stitched beneath: a map of winds no sailor had ever seen.';
  choicesTexts[tempI] =
    'If you’d prefer fewer embellishments, press [1];\nif you approve the silver thread, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/lighthouse_01.jpg');
  consequences[tempI] = [5, 21];

  // page 10
  tempI = 10;
  pageTexts[tempI] =
    'All three dreamed the same dream; for they adored one another and, old companions they were, their thoughts often braided in the breeze.';
  choicesTexts[tempI] =
    'If you wish to know their dream, press [1];\nif not, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/kites_02.jpg');
  consequences[tempI] = [11, 12];

  // page 11
  tempI = 11;
  pageTexts[tempI] =
    'They dreamed they rose for a night-flight and found the sky fenced with wires. Each star was locked behind a grid. Startled, they woke with a paper rustle.';
  choicesTexts[tempI] =
    'If you wish to know why wires frightened them, ponder what wind desires; then, if it’s all the same, press [1];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/kites_03.jpg');
  consequences[tempI] = [12];

  // page 12
  tempI = 12;
  pageTexts[tempI] =
    "'Hush-a-skirl!' they whispered as their sticks straightened. 'What a sour dream we’ve flown through!' 'A bad omen,' said the first. 'A bind,' said the second. 'A clue,' said the third—cleverest of the trio. 'Let me explain...'";
  choicesTexts[tempI] =
    'If you can’t wait for the third kite’s analysis, press [1];\nif you’d rather hear the others’ reaction, press [2];\nTo go back, press [b]';
  consequences[tempI] = [15, 13];

  // page 13
  tempI = 13;
  pageTexts[tempI] =
    "'Since when do you lecture on dreams?' quivered the first. 'Yes—since when?' chimed the second, their bells politely cross.";
  choicesTexts[tempI] =
    'If you too wish to know since when, press [1];\nif not, press [1] anyway—mystery loves company;\nTo go back, press [b]';
  consequences[tempI] = [14];

  // page 14
  tempI = 14;
  pageTexts[tempI] =
    "'Since when?' sang the third. 'Who can say? I only know the wind speaks and I translate. Watch.'";
  choicesTexts[tempI] =
    'If you wish to watch, press [1];\nif not, press [1] regardless—eyes open better in motion;\nTo go back, press [b]';
  consequences[tempI] = [15];

  // page 15
  tempI = 15;
  pageTexts[tempI] =
    "You have overtaken P2 and P3, and are now in P2 with 3 laps to go. You are coming up on the leader, Joe Dovi.";
  choicesTexts[tempI] =
    'To overtake aggressively, press [1];\nTo wait for him to make a mistake, press [2];\nTo go back, press [b]';
  consequences[tempI] = [17, 16];

  // page 16
  tempI = 16;
  pageTexts[tempI] =
    'Joe Dovi spins out and slams into a wall, bringing you into P1 and winning the race.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  //pageImages[tempI] = loadImage('./assets/lighthouse_02.jpg');
  consequences[tempI] = [19];

  // page 17
  tempI = 17;
  pageTexts[tempI] =
    'You try to overtake aggressively, and break your front wing. This makes it impossible to overtake again. The race ends with you in P2.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  //pageImages[tempI] = loadImage('./assets/stars_01.jpg');
  consequences[tempI] = [19];

  // page 18
  tempI = 18;
  pageTexts[tempI] =
    'Paler watches the race in his bed, and falls asleep.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  consequences[tempI] = [19];

  // page 19
  tempI = 19;
  pageTexts[tempI] =
    'The end.';
  choicesTexts[tempI] =
    'To restart, press [1]\nTo go back, press [b]';
  //pageImages[tempI] = loadImage('./assets/kite_01.jpg');
  consequences[tempI] = [0];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  displayCurrentPage();
}

// Styling for the page layout
function displayCurrentPage() {
  let leftMargin = 100;
  let topMargin = leftMargin;
  let contentWidth = windowWidth - leftMargin * 2;
  let contentMargin = 50;
  let pageTextHeight = windowWidth * 0.4;
  let choicesTextHeight = 125;
  let choicesTextY = topMargin + pageTextHeight + contentMargin;
  let pageNumX = windowWidth / 2;
  let pageNumY = windowHeight * 0.95;

  // background image or solid
  if (typeof pageImages[currentPageIndex] === 'undefined') {
    background(0);
  } else {
    background(pageImages[currentPageIndex]);
  }

  fill(255);
  textSize(windowWidth / 33);
  text(
    pageTexts[currentPageIndex],
    leftMargin,
    topMargin,
    contentWidth,
    pageTextHeight
  );

  textSize(20);
  text(
    choicesTexts[currentPageIndex],
    leftMargin,
    choicesTextY,
    contentWidth,
    choicesTextHeight
  );

  text(currentPageIndex, pageNumX, pageNumY);
}

// --------------------------------

/* --- AUDIO ON SCENE LOAD ------------------------- */

// 1) Map each page index → audio file path (replace with your files)
const pageAudioSrc = {
  0: './assets/audio/p0_title.mp3',
  1: './assets/audio/p1_intro.mp3',
  2: './assets/audio/p2_lighthouse_prompt.mp3',
  3: './assets/audio/p3_constellations_prompt.mp3',
  4: './assets/audio/p4_kites_sleeping.mp3',
  5: './assets/audio/p5_seldom_dream.mp3',
  6: './assets/audio/p6_dreaming.mp3',
  7: './assets/audio/p7_ribbons.mp3',
  8: './assets/audio/p8_indigo_ribbons.mp3',
  9: './assets/audio/p9_silver_seams.mp3',
  10: './assets/audio/p10_shared_dream.mp3',
  11: './assets/audio/p11_caged_stars.mp3',
  12: './assets/audio/p12_analyze.mp3',
  13: './assets/audio/p13_teasing.mp3',
  14: './assets/audio/p14_since_when.mp3',
  15: './assets/audio/p15_quay.mp3',
  16: './assets/audio/p16_keepers_watch.mp3',
  17: './assets/audio/p17_constellations_watch.mp3',
  18: './assets/audio/p18_noticed_watchers.mp3',
  19: './assets/audio/p19_back_home.mp3',
  20: './assets/audio/p20_no_sequel.mp3',
  21: './assets/audio/p21_ended.mp3',
};

// 2) Create Audio objects (run once in setup)
let pageAudio = {};
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // build audio objects
  Object.keys(pageAudioSrc).forEach(k => {
    const a = new Audio(pageAudioSrc[k]);
    a.preload = 'auto';
    a.volume = 0.9; // adjust as needed
    pageAudio[k] = a;
  });
}

// 3) Helpers to stop any currently playing clip and play scene audio
function stopAllAudio() {
  for (const k in pageAudio) {
    const a = pageAudio[k];
    if (!a) continue;
    a.pause();
    try {
      a.currentTime = 0;
    } catch (e) {}
  }
}

function playSceneAudio(index) {
  stopAllAudio();
  const a = pageAudio[index];
  if (a) {
    // playback will succeed after a user gesture (your keypress)
    a.play().catch(() => {});
  }
}
// --------------------------------

function keyPressed() {
  if (key === 'b') {
    currentPageIndex = previousPageIndex;
    playSceneAudio(currentPageIndex);
  } else {
    let consequencesCurrentPage = consequences[currentPageIndex];
    let userInputAsInt = parseInt(key);
    let consequencesIndex = userInputAsInt - 1;

    if (
      consequencesIndex >= 0 &&
      consequencesIndex < consequencesCurrentPage.length
    ) {
      previousPageIndex = currentPageIndex;
      currentPageIndex = consequencesCurrentPage[consequencesIndex];
      playSceneAudio(currentPageIndex);
    }
  }
}
