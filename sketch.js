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
    'Would you like to hear The Tale of Paler?';
  choicesTexts[tempI] =
    'To hear The Tale of Paler, press [1]\nTo not hear The Tale of Paler, press [2]';
  pageImages[tempI] = loadImage('./assets/photos/Page1.jpg');
  consequences[tempI] = [2, 3];

  // page 2
  tempI = 2;
  pageTexts[tempI] =
    'Paler is at home deciding what to do on the weekend. Paler really loves F1, but he has two choices:';
  choicesTexts[tempI] =
    'To watch an F1 race, press [1]\nTo race in an F1 race, press [2]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page2.webp');
  consequences[tempI] = [4, 5];

  // page 3
  tempI = 3;
  pageTexts[tempI] =
    'Please?';
  choicesTexts[tempI] =
    'To hear the tale, press [1]\nTo not hear the tale, press [2]';
  pageImages[tempI] = loadImage('./assets/photos/Page3.webp');
  consequences[tempI] = [2, 19];

  // page 4
  tempI = 4;
  pageTexts[tempI] =
    'Paler decides to watch the race, like a loser. Does he watch it in his bed, or on his sofa?';
  choicesTexts[tempI] =
    "To watch in bed, press [1]\nTo watch on the sofa, press [2]\nTo go back, press [b]";
  pageImages[tempI] = loadImage('./assets/photos/Page4.jpg');
  consequences[tempI] = [18, 6];

  // page 5
  tempI = 5;
  pageTexts[tempI] =
    'Paler decides to go racing at the Las Vegas GP. What team does he race for?';
  choicesTexts[tempI] =
    "For Red Bull, press [1]\nFor Mercedes, press [2]\nTo go back, press [b]";
  pageImages[tempI] = loadImage('./assets/photos/Page5.avif');
  consequences[tempI] = [7,7];

  // page 6
  tempI = 6;
  pageTexts[tempI] =
    'Paler watches the race on his sofa, and gets inspired to race in the next one.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page6.jpg');
  consequences[tempI] = [5];

  // page 7
  tempI = 7;
  pageTexts[tempI] =
    'Paler is at the start line.';
  choicesTexts[tempI] =
    "To start, press [1]\nTo stand still, press [2]\nTo go back, press [b]";
  pageImages[tempI] = loadImage('./assets/photos/Page7.jpg');
  consequences[tempI] = [8, 9];

  // page 8
  tempI = 8;
  pageTexts[tempI] =
    'Paler is behind 2 cars, coming up to a sharp turn. Does he:';
  choicesTexts[tempI] =
    'To risk it and dive bomb the inside, press [1]\nTo play it safe and take the outside line, press [2]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page8.webp');
  consequences[tempI] = [10, 11];

  // page 9
  tempI = 9;
  pageTexts[tempI] =
    'Someone rear ends Paler and he dies.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page9.webp');
  consequences[tempI] = [19];

  // page 10
  tempI = 10;
  pageTexts[tempI] =
    'Paler dive bombs the inside and hits into the side of the Ferrari car. He hits into the wall as he loses control. The car is no longer driveable.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page10.jpg');
  consequences[tempI] = [19];

  // page 11
  tempI = 11;
  pageTexts[tempI] =
    'Paler takes the outside line, and the cars on the inside crash into each other as Paler makes it through. He is now in P7.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page11.jpg');
  consequences[tempI] = [12];

  // page 12
  tempI = 12;
  pageTexts[tempI] =
    "It is now lap 50/71. Paler is in P6, Paler is approaching the McLaren Duo.";
  choicesTexts[tempI] =
    'To let them battle, press [1]\nTo try an overtake, press [2]\nTo go back, press [b]';
   pageImages[tempI] = loadImage('./assets/photos/Page12.jpg');
   consequences[tempI] = [13, 14];

  // page 13
  tempI = 13;
  pageTexts[tempI] =
    "Paler spots an opportunity to sneak through the pair and take it. Paler is now in P4 and is now approaching the leaders.";
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page13.jpg');
  consequences[tempI] = [15];

  // page 14
  tempI = 14;
  pageTexts[tempI] =
    "Paler fails the overtake and in the process, his tires are too worn to attempt another overtake. The race ends with Paler in P5.";
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page14.webp');

  consequences[tempI] = [19];

  // page 15
  tempI = 15;
  pageTexts[tempI] =
    "Paler has overtaken P2 and P3, and now is in P2 with 3 laps to go. He is coming up on the leader, Joe Dovi.";
  choicesTexts[tempI] =
    'To overtake aggressively, press [1];\nTo wait for him to make a mistake, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page15.avif');
  consequences[tempI] = [17, 16];

  // page 16
  tempI = 16;
  pageTexts[tempI] =
    'Joe Dovi spins out and slams into a wall, bringing Paler into P1 and winning the race.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page16.jpg');
  consequences[tempI] = [19];

  // page 17
  tempI = 17;
  pageTexts[tempI] =
    'Paler tries to overtake aggressively, and breaks his front wing. This makes it impossible to overtake again. The race ends with Paler in P2.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page17.jpg');
  consequences[tempI] = [19];

  // page 18
  tempI = 18;
  pageTexts[tempI] =
    'Paler watches the race in his bed, and falls asleep.';
  choicesTexts[tempI] =
    'To continue, press [1]\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/photos/Page18.jpg');
  consequences[tempI] = [19];

  // page 19
  tempI = 19;
  pageTexts[tempI] =
    'The End.';
  choicesTexts[tempI] =
    'To restart, press [1]\nTo go back, press [b]';
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
  let pageTextHeight = windowWidth * 0.2;
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
  stroke(0);
  strokeWeight(3);
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
