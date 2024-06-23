let randomNumber = randomNum(1, 13);

//TODO Need to add the typings

// The options for our Secret Name (Key Puzzle) can change thanks to the switch
let secretName: string = "";
switch (randomNumber) {
  case 1:
    secretName = "Rob Vanarsdall";
    break; // This allows it to exit the switch, otherwise it will check the entire switch
  case 2:
    secretName = "Mary Reagan";
    break;
  case 3:
    secretName = "Henry Dufour";
    break;
  case 4:
    secretName = "John Isabella";
    break;
  case 5:
    secretName = "Eli The Warlock"; // Playtester Eli's choice
    break;
  case 6:
    secretName = "Muriala"; // Playtester Nick Reference
    break;
  case 7:
    secretName = "The One They Call Steve"; // Playtester Andrew Reference
    break;
  case 8:
    secretName = "Ash The Trainer Of Yellow Mice"; // Playtester Scarlem's choice
    break;
  case 9:
    secretName = "Taran The Warrior";
    break;
  case 10:
    secretName = "Zorkington";
    break;
  case 11:
    secretName = "Zug Zug The Zug"; // Playtester Joshua Reference
    break;
  case 12:
    secretName = "Callian The Hunter"; // Playtester Devin Reference
    break;
  case 13:
    secretName = "Fannar"; // Playtester Sean Reference
    break;
  default:
    secretName = "unknown";
}

// A list of words that I want to have in Yellow Text
let highlightedWords:string = [
  secretName,
  /*Hero Actions*/
  `"Move"`,
  `"m"`,
  `"Backpack"`,
  `"b"`,
  `"Look"`,
  `"l"`,
  `Items`,
  `"Status"`,
  `"s"`,
  `Healthy`,
  `"Interact"`,
  `"i"`,
  `"Take"`,
  `"t"`,
  `"Drop"`,
  `"d"`,
  `"Help"`,
  `"h"`,
  `"Exit"`,
  `"e"`,
  /*Characters & Interact spots*/
  `Adventurer`,
  `Retired`,
  `Simple Villager`,
  `Innkeeper`,
  `Obnoxious Patron`,
  `Musician With A Broken Arm`,
  `Sleeping Child`,
  `Exhausted Parents`,
  `Crooked Sign`,
  `Letterbox`,
  `Dragon`,
  `Mounds Of Gold`,
  `Heaps Of Silver`,
  `Pile Of Bones`,
  `Grim Reaper`,
  /*Inventory Items*/
  `Sword`,
  `Gold`,
  `Premium Horse Manure`,
  `Bucket`,
  `Bag Of Jewels`,
  `Warm Meal`,
  `Town Map`,
  `Warm Apple Pie`,
  `Damaged Lute`,
  `Pointless Rock`,
  "'s Treasure",
  `Death's Scythe`,
  /*Locations*/
  `Dorkington`,
  `Town Triangle`,
  `Idiot's Inspiring Inn`,
  `Upstairs Room`,
  `Forlorn Forest Of Fatality`,
  `Deep Woods Of Certain Doom`,
  `Hag's Horrid Hovel`,
  "'s Keep",
  `Underworld`,
  /*Status*/
  `Black Eye`,
  `Dead`,
  `Justly Deceased`,
  `Dead (again)`,
  `Alive Once More & Healthier than Ever`,
  /*Other*/
  `the Mighty`,
  `the Mightier`,
  `Squire`,
  `Hero`,
  `Were-verine`,
  `Town Guards`,
  `Murder`,
  `justice`,
  `Demonic Voice`,
  `Demonic Spirit`,
];

//! Classes Go Here = FIRST THING!!!
// Player's Backpack Inventory Management
class Player {
  constructor(name: string, inventory: Array, status: string) {
    (this.name = name), (this.inventory = inventory);
    this.status = status;
  }
}
// TODO still need to set up typing
// A List of All Interactable Items
class Commodity {
  constructor({ name, altNames, interact, followUp }) {
    this.name = name;
    this.altNames = altNames;
    this.interact = interact;
    this.followUp = followUp;
  }
}

// A List of All Interactable People
class Person {
  constructor({ name, altNames, inventory, interact, followUp, status }) {
    this.altNames = altNames;
    this.interact = interact;
    this.inventory = inventory;
    this.name = name;
    this.followUp = followUp;
    this.status = status;
  }
}

//List of all the Locations in this Adventure, containing everything they have.
class Room {
  constructor({
    name,
    altNames,
    doorLock,
    inventory,
    interact,
    possibleLocations,
    description,
  }) {
    this.altNames = altNames;
    this.description = description;
    this.doorLock = doorLock;
    this.interact = interact;
    this.inventory = inventory;
    this.name = name;
    this.possibleLocations = possibleLocations;
  }
}

//! Object Definition
//Player Inventory
let hero = new Player(
  "Taran", // Placeholder Name
  ["Bucket", "Sword", "Premium Horse Manure"], //Hero's Backpack - starts with a Sword & useless Junk
  "Healthy." // Status is Healthy
);

// The following is a list of Objects that define our rooms.
let townTriangle = new Room({
  name: "Town Triangle",
  altNames: ["Town Triangle", "Town", "Triangle", "Tt"],
  doorLock: false,
  inventory: [],
  interact: ["Retired Adventurer", "Simple Villager"],
  possibleLocations: ["Idiot's Inspiring Inn", "Forlorn Forest Of Fatality"],
  description:
    "\nThe Town Triangle\nThe center of a rustic hamlet of Dorkington in the shape of a triangle.\nIt is usually a vibrant hub of activity, but most people are still asleep. \nThe only inhabitants, presently present, are the Simple Villager and the Retired Adventurer.\n\nFrom here you can go to the Idiot's Inspiring Inn\nor travel into the Forlorn Forest Of Fatality.\n",
});

let idiotsInspiringInn = new Room({
  name: "Idiot's Inspiring Inn",
  altNames: [
    "Idiot's Inspiring Inn",
    "Idiots Inspiring Inn",
    "Idiot",
    "Idiots",
    "Idiot's",
    "Inspiring",
    "Inn",
    "Iii",
  ],
  doorLock: false,
  inventory: ["Bag Of Jewels"],
  interact: ["Innkeeper", "Obnoxious Patron", "Musician With A Broken Arm"],
  possibleLocations: ["Town Triangle", "Upstairs Room"],
  description:
    "\nThe Idiot's Inspiring Inn\nThe most popular tavern in Dorkington, \nprimarily because it is the only tavern in the entire village. \nThe Innkeeper behind the bar is preparing a meal for a Musician With A Broken Arm. \nIn the back of the room, an Obnoxious Patron is slovenly eating a meal.\nA Bag Of Jewels is scattered across the patron's table.\n\nFrom here you can head outside to the Town Triangle\nor go to the Upstairs Room.\n",
});

let upstairsRoom = new Room({
  name: "Upstairs Room",
  altNames: ["Upstairs Room", "Upstairs", "Room", "Ur"],
  doorLock: false,
  inventory: [],
  interact: ["Sleeping Child", "Exhausted Parents"],
  possibleLocations: ["Idiot's Inspiring Inn"],
  description:
    "The Upstairs Room\nHeading up the stairs you come across\na pair of Exhausted Parents reading just outside of a room.\nInside the room, a Sleeping Child lays motionless on the bed.\n\nFrom here you can head back downstairs to the Idiot's Inspiring Inn.\n",
});

let forlornForestOfFatality = new Room({
  name: "Forlorn Forest Of Fatality",
  altNames: [
    "Forlorn Forest Of Fatality",
    "Forlorn Forest",
    "Forlorn",
    "Forest",
    "Fatality",
    "Ffof",
    "Fff",
  ],
  doorLock: false,
  inventory: ["Damaged Lute"],
  interact: ["Crooked Sign"],
  possibleLocations: ["Town Triangle", "Deep Woods Of Certain Doom"],
  description:
    "\nThe Forlorn Forest Of Fatality\nThe edge of the forest seems welcoming enough.\nAs you travel down the overgrown path\nyou see a Crooked Sign hanging on a weatherbeaten post.\n\nFrom here you can head back to safety in the Town Triangle\nor venture onward into the Deep Woods Of Certain Doom.\n",
});

let deepWoodsOfCertainDoom = new Room({
  name: "Deep Woods Of Certain Doom",
  altNames: [
    "Deep Woods Of Certain Doom",
    "Deep Woods",
    "Certain Doom",
    "Deep",
    "Woods",
    "Certain",
    "Doom",
    "Dwocd",
  ],
  doorLock: true,
  inventory: ["Pointless Rock"],
  interact: [],
  possibleLocations: [
    "Forlorn Forest Of Fatality",
    "Hag's Horrid Hovel",
    "Dragon's Keep",
  ],
  description:
    "\nThe Deep Woods Of Certain Doom\nAs soon as you step into the shadows of the trees,\nyou can feel the warmth pulled from your body,\nas if by an unnatural force.\nYou know that this is the point of no return.\nYou steel yourself as you continue to march onward.\n\nFrom here you can head back to the Forlorn Forest Of Fatality,\nfollow the path to the Hag's Horrid Hovel\nor trek towards the Dragon's Keep.\n",
});

let hagsHorridHovel = new Room({
  name: "Hag's Horrid Hovel",
  altNames: [
    "Hag's Horrid Hovel",
    "Hags Horrid Hovel",
    "Hag's Hovel",
    "Hags Hovel",
    "Hag's",
    "Hags",
    "Horrid",
    "Hovel",
    "Hhh",
  ],
  doorLock: false,
  inventory: [],
  interact: ["Letterbox"],
  possibleLocations: ["Deep Woods Of Certain Doom"],
  description:
    "\nThe Hag's Horrid Hovel\nA gnarled pile of sticks and mud twist together to form a makeshift shelter.\nOut of the braided husk of a dying tree sits a simple Letterbox.\n\nFrom here you can follow the path back to the Deep Woods Of Certain Doom.\n",
});

let dragonsKeep = new Room({
  name: "Dragon's Keep",
  altNames: ["Dragon's Keep", "Dragons Keep", "Keep", "Dk"],
  doorLock: false,
  inventory: [],
  interact: ["Dragon", "Mounds Of Gold", "Heaps Of Silver", "Pile Of Bones"],
  possibleLocations: ["Deep Woods Of Certain Doom"],
  description:
    "\nDragon's Keep\nThe air smells of ash, as you approach a dark cave.\nYou can see the light being reflected off of shimmering Mounds Of Gold and Heaps Of Silver.\nIn the back of the cave you spot a large red Dragon, sleeping upon a massive Pile Of Bones.\n\nFrom here you can run away and end up in the Deep Woods Of Certain Doom.\n",
});

let underworld = new Room({
  name: "Underworld",
  altNames: ["Underworld", "U"],
  doorLock: "No Escape",
  inventory: [],
  interact: ["Grim Reaper"],
  possibleLocations: [
    `... \nFunny there are no exits...\nThere is nowhere to go,\nthere is no escape.`,
  ],
  description: `-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X\n\nYou could feel your consciousness leave your body.\nThen suddenly without warning you were here.\nYou know without a shadow of a doubt that you are in the Underworld.\n\nInside a dark cavern.  The only source of light...\nA flickering torch held by a robed figure,\nwhom you instinctually know is the personification of Death, the Grim Reaper.\n`,
});

// Variables
let currentLocation = "Town Triangle"; // This updates as the player moves
let heroName = ""; // Currently their is no input
let userInput = ""; // Currently their is no input

// See functions "locationMove" & "locationUpdate" to see how you move
//The following are all the locations the player can travel to
let locations = {
  "Town Triangle": townTriangle,
  "Idiot's Inspiring Inn": idiotsInspiringInn,
  "Upstairs Room": upstairsRoom,
  "Forlorn Forest Of Fatality": forlornForestOfFatality,
  "Deep Woods Of Certain Doom": deepWoodsOfCertainDoom,
  "Hag's Horrid Hovel": hagsHorridHovel,
  "Dragon's Keep": dragonsKeep,
  Underworld: underworld,
};

// List of Interactable Persons (People b/c Grammar)
// Complicated Person, see "retiredAdventurerInteraction" function
let retiredAdventurer = new Person({
  name: "Retired Adventurer",
  altNames: ["Retired Adventurer", "Retired", "Adventurer", "Ra"],
  inventory: ["Death's Scythe", "Town Map"],
  interact: `\nThe Retired Adventurer looks you up and down.\n    "I daresay, I hath been retired only since morn.\n     Tis good of yee to taketh the mantle up.\n     Dost thou even hoist?\n     Alas, I shalth spend me retirment playing me favorite game...\n    'Guess the Number'\n     Doth thou wisheth to play?`,
  followUp: () => {}, //Game of Guess the Number
  status: 0, //This is a counter
});

let simpleVillager = new Person({
  name: "Simple Villager",
  altNames: ["Simple Villager", "Simple", "Villager", "Sv"],
  inventory: [],
  interact: `Simple Villager\n    "Thank you for all your assistance brave adventurer.\n     Your services are invaluable to us here in Dorkington.\n     Only you can save us from the horrors that plague us.\n     Being stranded in a cozy little hamlet with no Gold to fix our broken bridge.\n     We lead a truly cursed life."`,
  followUp: () => {},
  status: "Normal",
});

let innkeeper = new Person({
  name: "Innkeeper",
  altNames: ["Innkeeper", "Ik", "I"],
  inventory: ["Warm Meal"],
  // The interaction changes after the first time you speak
  interact: `Innkeeper\n    "Hallooo there, Adventurer!\n     Welcome to the Idiot's Inspring Inn where our hospitality is as warm as our food.\n     Don't believe me?\n     Help yourself to a Warm Meal, and feel free to talk to anybody round these parts.\n     We're all the friendly sort,\n     of course the Musician With A Broken Arm seems a tad jumpy,\n     and the Obnoxious Patron back there is a strange one\n     who's fixing to get into a tussel.`,
  followUp: () => {
    itemExchange(
      innkeeper.inventory,
      locations[currentLocation].inventory,
      "Warm Meal"
    );
    innkeeper.interact = `Innkeeper\n    "Welcome to the Idiot's Inspring Inn where our hospitality is as warm as our food.\n     Good to see you again, ${heroName}!\n     Feel free to talk to anybody round these parts.\n     We're the friendly sort of folk,\n     and we all have some nuggets of useful information.`;
  },
  status: "Normal",
});

// This is a complicated Person, key to solving Puzzles
let obnoxiousPatron = new Person({
  name: "Obnoxious Patron",
  altNames: ["Obnoxious Patron", "Obnoxious", "Patron", "Op"],
  inventory: [], //Reward for Solving Puzzle
  interact: `As you approach the individual at the far end of the room,`,
  //FollowUp changes based off the this.status
  followUp: () => {
    if (obnoxiousPatron.status === "Happy") {
      colorChangeWords(
        `the Obnoxious Patron grins at you with a split lip.\n\nObnoxious Patron\n    "That was a good fight, bub.\n     You make an excellent sparring partner.\n     Listen up, if you wanna stay alive.\n     Don't go into the Deep Woods Of Certain Doom without a Sword.\n     Doesn't matter how good you fight, you need a weapon."\n`,
        highlightedWords
      );
    } else if (obnoxiousPatron.status === "Beaten") {
      colorChangeWords(
        `the Obnoxious Patron sits back using their spoon-fists to eat their meal.\n\nObnoxious Patron\n    "Look at you with your fancy weapon, bub.\n     I have no idea where you got soemthing like that,\n     But it won't do you any good in the Deep Woods Of Certain Doom.\n     You need a Sword to survive out there."\n`,
        highlightedWords
      );
    } else {
      colorChangeWords(
        `you are taken aback by the sheer quantity of food\nbeing shovelled down their gullet.\n\nObnoxious Patron\n    "What are you lookin at bub?\n     Stay away from my Bag Of Jewels\n     Or I'll beat you to a pulp."\n`,
        highlightedWords
      );
    }
  },
  status: "Normal", //Options Normal, Happy, Beaten
});

// Complicated Person, see "musicianSongInteraction" function
let musicianWithABrokenArm = new Person({
  name: "Musician With A Broken Arm",
  altNames: ["Musician With A Broken Arm", "Musician", "Broken Arm", "Mwaba"],
  inventory: [],
  interact: `\nMusician With A Broken Arm\n    "You... who are you?!?!?!?!\n     It doesn't matter, you can't help me.\n     I was attacked by many a foul beast out in the Forlorn Forest Of Fatality!\n     They broke my arm, causing me to drop my Damaged Lute.\n     That will teach me to go out into the woods without a weapon.\n     I wish my instrument could be returned to me.\n     Music brings comfort.\n     Especially in these dark times where monsters hide amoung us...\n`,
  //if the hero has the Damaged Lute the interaction changes
  followUp: () => {
    if (hero.inventory.includes("Damaged Lute") === true) {
      colorChangeWords(
        `\nYou reach into your backpack and pull out the Musician's Damaged Lute.\nTears of joy appear in the Musician's eyes.\n\nMusician With A Broken Arm.\n    "My Broke Lute!\n    I never thought I would see it again!\n    Thank you so much, ${heroName}.\n    I shall use the power of music to fight against the darkness."\n\nThe musician plucks the one string on the lute that hasn't snapped.\nAn eerie sound resonates through the room.\n\n    "I should tell you, one of the foul beasts from the woods has infiltrated our humble hamlet.\n     A creature of darkness has possessed the Sleeping Child.\n     But it will only make itself known to people like myself whom have been injured."\n`,
        highlightedWords
      );
      itemExchange(
        hero.inventory,
        musicianWithABrokenArm.inventory,
        "Damaged Lute"
      );
      musicianWithABrokenArm.interact = `\nMusician With A Broken Arm.\n    "Thank you so much, ${heroName} for returning my Damaged Lute to me.\n     I should tell you, a creature of darkness has possessed the Sleeping Child.\n     But it will only make itself known to people, like myself, whom have been injured.\n`;
      musicianWithABrokenArm.status = "Singing";
    }
  },
  status: "Normal", //Options "Normal" "Singing"
});

// Complicated Person, see "sleepingChildInteraction" function
let sleepingChild = new Person({
  name: "Sleeping Child",
  altNames: ["Sleeping Child", "Sleeping", "Child", "Sp"],
  inventory: ["Warm Apple Pie"], //Reward for Solving Puzzle
  interact: "\nA motionless child lays asleep on an oversized bed.",
  //Locked Door & puzzle challenge threshold
  followUp: () => {
    if (sleepingChild.status === "Freed") {
      colorChangeWords(
        `It looks as though the Sleeping Child is finally resting peacfully.`,
        highlightedWords
      );
    } else if (sleepingChild.status === "Possessed") {
      colorChangeWords(
        `Suddenly, the child's body snaps upright!\nThe head of the Sleeping Child begins to spin in a circle as vomit is spewed in every direction.\n\nDemonic Voice\n    "Look who's back!\n     Let me guess, ${heroName}.\n     You think you know what my name is.`,
        highlightedWords
      );
    } else if (hero.status === "Black Eye") {
      colorChangeWords(
        `Your Black Eye begins to throb as you look upon the still form of the Sleeping Child.\nSuddenly, the child's body snaps upright, eyes flashing wide open!\nThe Sleeping Child opens their mouth and makes an otherworldly sound!\n\nDemonic Voice\n    "Well, well well,\n     What have we here?\n     Its little ${heroName}, pretending to be an Adventurer.\n     You simple fool, you have no idea how powerful names are.\n     And I will stay locked inside this Sleeping Child unless you say my name."\n\nWith that the body of the Sleeping Child twists and contorts,\nbefore flopping back into the bed, asleep.\n`,
        highlightedWords
      );
      sleepingChild.status = "Possessed";
    } else {
    }
  },
  status: "Normal", //Options Normal, Possessed, Freed
});

let exhaustedParents = new Person({
  name: "Exhausted Parents",
  altNames: ["Exhausted Parents", "Exhausted", "Parents", "Ep"],
  inventory: ["Town Map"], // Trade for Food
  interact:
    "\nA pair of weary parents are looking over a Town Map.\nThey are talking in hushed voices about where to send their Sleeping Child to school.\nYou can barely hear their voices over their rumbling stomaches.\nThey should probably eat something.\n",
  //Follow up changes based on an item presents.
  followUp: () => {
    if (hero.inventory.includes("Warm Meal")) {
      colorChangeWords(
        `\nAs you approach them, with food in hand, the two look up at you.\n\nExhausted Parents\n    "Thank you for bringing us a Warm Meal, ${heroName}.\n     We have been so busy that we haven't had a chance to eat."\n
      \nThe Exhausted Parents drop the Town Map in the Upstairs Room.`,
        highlightedWords
      );
      itemExchange(hero.inventory, exhaustedParents.inventory, "Warm Meal");
      itemExchange(
        exhaustedParents.inventory,
        locations[currentLocation].inventory,
        "Town Map"
      );
      exhaustedParents.interact = `Exhausted Parents\n    "Thank you for bringing us a Warm Meal, ${heroName}.\n     We have been so busy that we haven't had a chance to eat."\n\nThe pair continue to eat their food, oblivious to the world around them.`;
    }
  },
  status: "Normal",
});

// This is a complicated Person, Success means winning the game.
let dragon = new Person({
  name: "Dragon",
  altNames: ["Dragon", "D"],
  inventory: ["Dragon's Treasure"],
  interact: `\nYou dash forward, hoping to attack the Dragon while it slumbered.\nBut it was all a ploy.\nAs you closed in on the monster,\nits eyes snapped open and it let out a mighty roar.\nIt was merely pretending to sleep to gain the advantage.`,
  //Followup changes based on inventory
  followUp: () => {
    if (hero.inventory.includes("Death's Scythe") === true) {
      colorChangeWords(
        `\nBut that advantage will not be enough to save the beast.\nYou trivially dodge its attacks before jumping high in the air.\nYou raise Death's Scythe aloft and slice it across the Dragon's body.\nThe Dragon immediately perishes.\nLeaving behind its horde of loot for the taking.\n\nDon't forget to "Interact" with the Dragon's Treasure, it is your reason for being here.`,
        highlightedWords
      );
      itemExchange(
        dragon.inventory,
        dragonsKeep.inventory,
        "Dragon's Treasure"
      );
      dragonsKeep.description =
        "\nDragon's Keep\nThe site of your epic battle with the Dragon.\nNow that the beast is slain you can claim your prize.\nThe Dragon's Treasure is yours for the taking.\n\nFrom here you can head back to the Deep Woods Of Certain Doom.\n";
      dragonsKeep.interact = [];
    } else if (hero.inventory.includes("Sword") === true) {
      colorChangeWords(
        `\nBut you will not be outwitted that easily.\nYou manage to dodge the Dragon's attacks before closing the distance on the beast.\nNow standing right below the creature's heart you bring your Sword back and thrust it into the Dragon's body.\n     clink\n\nThe Sword could not penetrate the Dragon's thick scales.\nYou recall the words of the Retired Adventurer from earlier today,\nas the Dragon rears back and roasts you to a crisp.\n`,
        highlightedWords
      );
      hero.status = "Dead";
      locationUpdate("HERO-DEATH");
    } else {
      colorChangeWords(
        `\nIt didn't need that much of an advantage to begin with...\nYou left all of your weapons beind.\n\n     That was a really stupid thing to do...\nYou didn't last long against the fire-breathing menace,\nand were gobbled up before you could escape.`,
        highlightedWords
      );
      hero.status = "Dead";
      locationUpdate("HERO-DEATH");
    }
  },
  status: "Normal",
});

let grimReaper = new Person({
  name: "Grim Reaper",
  altNames: ["Grim Reaper", "Grim", "Reaper", "Death", "Gr"],
  inventory: ["Death's Scythe"], //Reward for Solving the Puzzle
  interact:
    "You approach the Grim Reaper.\nEvery step closer to the cloaked figure chills you to your bones.\nAs you approach you see the skeletal face of Death\nwatching your every move with the piercing gaze of red eyes.",
  //Followup changes based on inventroy
  followUp: () => {
    if (hero.inventory.includes("Warm Apple Pie") === true) {
      colorChangeWords(
        `\n\nGrim Reaper\n    "Welcome to the Underwold, ${heroName}.\n     What's that delicious aroma in the air?\n     Do you have a freshly-baked Warm Apple Pie with you?\n     I haven't had one of those in a millennium.\n     Tell you what, if you give me your dessert,\n     I will give you a second chance at life.\n     I will even give you my weapon to sweeten the deal."\n\nYou receive Death's Scythe.\n`,
        highlightedWords
      );
      itemExchange(hero.inventory, grimReaper.inventory, "Warm Apple Pie");
      itemExchange(grimReaper.inventory, hero.inventory, "Death's Scythe");
      hero.status = "Alive Once More & Healthier than Ever";
      locationUpdate("HERO-UNDEATH");
    } else {
      colorChangeWords(
        `\n\nGrim Reaper\n    "Welcome to the Underwold, ${heroName}.\n     Sadly, you won't be staying for very long.\n     You see, I am incredibly hungry and you are the only thing on the menu."\n\nWith no where to turn and no hope of escape,\nYou are resigned to your fate.\nThe Grim Reaper bakes you into a pie and eats you.\nAt least you left the world knowing that you were delicious.\n\n`,
        highlightedWords
      );
      pieSliceArt();
      playAgain();
    }
  },
  status: "Normal",
});

let crookedSign = new Person({
  name: "Crooked Sign",
  altNames: ["Crooked Sign", "Crooked", "Sign", "Cs"],
  inventory: [],
  interact: `\nA worn sign at the intersection of two paths.\nIt reads:\n    "Abandon hope all yee who enter here!\n     This forest are a living maze that you'll not want to be lost in.\n     There be deadly monsters within these trees."\n`,
  followUp: () => {},
  status: "Normal",
});

let letterbox = new Person({
  name: "Letterbox",
  altNames: ["Letterbox", "L"],
  inventory: [],
  interact: "",
  followUp: () => {
    colorChangeWords(
      `\nA plain wooded box that is void of all postage.\nThere is something carved into it... "${secretName}"\n`,
      highlightedWords
    );
  },
  status: "Normal",
});

let moundsOfGold = new Person({
  name: "Mounds Of Gold",
  altNames: ["Mounds Of Gold", "Mounds", "Mound", "Gold", "Mog"],
  inventory: [],
  interact: `\nYour eyes don't deceive you.  There are piles upon piles of Gold in this cave.\nIt is more wealth than you have ever dreamed of.\nCertainly enough to rebuild the town's broken bridge.\n\nYou daydream about the heroic feast the village will throw you.\n     The cooked meats assorted deserts.\n     The dancing into the night with an attractive villager.\n     Turns out that villager was your soulmate!\n     Eventually the two of you will be married\n     and have 3 children, 2 dogs and a hampster.\n     It was an incredibly wonderful life!\n\nOr it would have been...\nYou were so busy daydreaming about the Mounds Of Gold you did not realize\nthe Dragon had stirred from its slumber.\nIt attacked you while you were not paying attention...\n`,
  followUp: () => {
    hero.status = "Dead";
    locationUpdate("HERO-DEATH");
  },
  status: "Normal",
});

let heapsOfSilver = new Person({
  name: "Heaps Of Silver",
  altNames: ["Heaps Of Silver", "Heaps", "Heap", "Silver", "Hos"],
  inventory: [],
  interact: `\nSilver!  You have never seen so many glittering coins.\nThere are heaps upon heaps of silver in this cave.\nIt is more wealth than you have ever dreamed of.\n\nYou daydream all that you could do with this silver.\n     Buy fancy armor and weapons.\n     Melt it down and have a statue crafted in your image.\n     You could make a large pile of coins and just go swimming in it!\n     There is nothing better than having all that silver at your fingertips.\n     You will live like a king!\n\nOr you would have...\nSadly, you were so distracted by the Heaps Of Silver you did not realize\nthe Dragon had stirred from its slumber.\nIt attacked you while you were not paying attention...\n`,
  followUp: () => {
    hero.status = "Dead";
    locationUpdate("HERO-DEATH");
  },
  status: "Normal",
});

let pileOfBones = new Person({
  name: "Pile Of Bones",
  altNames: ["Pile Of Bones", "Pile", "Bones", "Pob"],
  inventory: [],
  interact: `\nAs you approach the back of the cave you see the massive Pile Of Bones littering the Dragon's Keep.\nYou look closely at the bones, and your heart starts to sink.\n     You get the feeling that you have been here before...\n     That you have tried to fight the Dragon and failed...\n     You realize that the bones on the floor are your bones!!!\n     You have gotten to this point so many times!!!\n     This is where you die!\n     Over and over again, as though your life is some twisted game\n\nYou push these thoughts out of your head.`,
  followUp: () => {
    colorChangeWords(
      `     "You are "${heroName} the Mightier" and you will succeed!"\nAre your last thoughts as you turn towards the now awake Dragon.\nIt roars inches from your face.\nIts breath hot upon your cheeks.\nThe roar was so loud and so sudden that you were scared to death...`,
      highlightedWords
    );
    hero.status = "Dead (again)";
    locationUpdate("HERO-DEATH");
  },
  status: "Normal",
});

//All the Person(s) you can interact with
let interactPeople = {
  "Retired Adventurer": retiredAdventurer,
  "Simple Villager": simpleVillager,
  Innkeeper: innkeeper,
  "Obnoxious Patron": obnoxiousPatron,
  "Musician With A Broken Arm": musicianWithABrokenArm,
  "Sleeping Child": sleepingChild,
  "Exhausted Parents": exhaustedParents,
  Dragon: dragon,
  "Grim Reaper": grimReaper,
  "Crooked Sign": crookedSign,
  Letterbox: letterbox,
  "Mounds Of Gold": moundsOfGold,
  "Heaps Of Silver": heapsOfSilver,
  "Pile Of Bones": pileOfBones,
};

// List of Interactable Items
let sword = new Commodity({
  name: "Sword",
  altNames: ["Sword"],
  interact:
    "\nThe sword of an adventurer.\nThe blade is very sharp.\nA lethal weapon, to be sure.",
  followUp: () => {},
});

let bucket = new Commodity({
  name: "Bucket",
  altNames: ["Bucket"],
  interact: "\nA simple bucket, with a hole in the bottom.",
  followUp: () => {},
});

let premiumHorseManure = new Commodity({
  name: "Premium Horse Manure",
  altNames: [
    "Premium Horse Manure",
    "Horse Manure",
    "Premium",
    "Horse",
    "Manure",
    "Phm",
  ],
  interact:
    "\nIf it looks like shit,\nsmells like shit,\nand tastes like shit...\nIt'll make the crops grow tall!",
  followUp: () => {},
});

let warmMeal = new Commodity({
  name: "Warm Meal",
  altNames: ["Warm Meal", "Meal", "Wm"],
  interact:
    "\nThe meal consists of a plain gruel.\nTasteless but still comforting.",
  followUp: () => {},
});

// This is a complicated Item, the inventory of the Hero and Room are factored in determining the outcome.
let BagOfJewels = new Commodity({
  name: "Bag Of Jewels",
  altNames: [
    "Bag Of Jewels",
    "Bags Of Jewels",
    "Bag Of Jewel",
    "Bag",
    "Jewels",
    "Boj",
  ],
  interact: "A bag of priceless gems.",
  followUp: () => {
    if (obnoxiousPatron.status === "Normal") {
      colorChangeWords(
        `\nAs you reach for the Bag Of Jewels, the table next you you is slammed into a wall.\n\nObnoxious Patron\n    "I warned you to stay away from my Bag Of Jewels, bub!\n     Now, I'm gonna beat you to a pulp!"\n\nThe Obnoxious Patron's hands become balled into fists and they assume a fighting stance.\nSuddenly, spoons erupt from the Obnoxious Patron's fists, three spoons per fist, right between each knuckle.`,
        highlightedWords
      );
    }
    if (hero.inventory.includes("Death's Scythe") === true) {
      colorChangeWords(
        `\nSpoons?!\nThat's an odd choice of weapon.\nYou pull out Death's Scythe, the weapon radiates an unnatural energy in the room.\nUpon seeing this the Obnocious Patron holds his hands up in defeat\n\nObnoxious Patron\n    "Easy there, bub.\n     This is my Bag Of Jewels.\n     No need to cause trouble."\n\nThe Obnoxious Patron sits back down at the table,\npocketing the Bag Of Jewels.\nYou smile on the inside.\nClearly you are getting the hang of being and Adventurer.\nYou twirl Death's Scythe in a fancy flourish,\nfeeling its power,\nbefore smacking yourself in the face with it's blunt end.\n     Ow, that hurt.\n     Clearly you need more practice.\n     You can already feel your face starting to swell.\n     Looks like you've given yourself a Black Eye.\n `,
        highlightedWords
      );
      hero.status = "Black Eye";
      obnoxiousPatron.status = "Beaten";
      itemExchange(
        locations[currentLocation].inventory,
        obnoxiousPatron.inventory,
        "Bag Of Jewels"
      );
      idiotsInspiringInn.description =
        "\nThe Idiot's Inspiring Inn\nThe most popular tavern in Dorkington, \nprimarily because it is the only tavern in the entire village. \nThe Innkeeper behind the bar is preparing a meal for a Musician With A Broken Arm. \nIn the back of the room, an Obnoxious Patron is slovenly eating a meal.\n\nFrom here you can head outside to the Town Triangle\nor go to the Upstairs Room.\n";
    } else if (hero.inventory.includes("Sword") === true) {
      colorChangeWords(
        `\nSpoons?!\nYou were not expecting that.\nNor were you expecting the Obnoxious Patron to charge at you with the ferocity of a Were-verine!!!\n\nYou drew your Sword just in time to defend yourself.\nThe Obnoxious Patron charged!\nYou closed your eyes...\nWhen you opened them again the Obnoxious Patron was impaled on your blade, Dead.\n\nIn the distance you hear the rapid approach of footsteps.\nThe Town Guards rush into the Idiot's Inspiring Inn.\n\nTown Guards\n    "${heroName}, you have committed the crime of Murder in our peaceful hamlet.\n     The punishment for which...\n     Life in prison!"\n\nA disgraced ${heroName} is dragged to the jailhouse, to live out the remainder of their life.\nFor years, you wondered what would have happen if only you didn't have that Sword...`,
        highlightedWords
      );
      hero.status = "Justly Imprisoned";
      playAgain();
    } else if (
      locations[currentLocation].inventory.includes("Sword") === true
    ) {
      colorChangeWords(
        `\nThe Obnoxious Patron charges at you with the ferocity of a Were-verine!!!\nCircling around you, and heading right for...\nThe Sword you dropped in the room.\nObnoxious Patron picks up the blade all while staring at you with bloodshot eyes!\n\nObnoxious Patron\n    "No one touches my family jewels without my consent!"\n\nYou didn't last long after that.\nAt least you died with dignity.\nDying by the Sword and not by the spoon.\n`,
        highlightedWords
      );
      hero.status = "Dead";
      locationUpdate("HERO-DEATH");
    } else {
      colorChangeWords(
        `\nThe Obnoxious Patron charges at you with the ferocity of a Were-verine!!!\nWith no weapons around the two of you duke it out in fisticuffs.\nThe other villagers in the inn watch the free entertainment before them.\nAfter tussling for a few minutes, you stand victorious.\nBoth you and the Obnoxious Patron are beaten and bruised.\n\nObnoxious Patron\n    "I like you, bub.\n     But this here is my Bag Of Jewels"\n\nThe Obnoxious Patron sits back down at the table,\npocketing the Bag Of Jewels.\nYou smile on the inside.  Looks like you made a friend.\nAnd it looks like that friend has given you a Black Eye.`,
        highlightedWords
      );
      hero.status = "Black Eye";
      obnoxiousPatron.status = "Happy";
      itemExchange(
        locations[currentLocation].inventory,
        obnoxiousPatron.inventory,
        "Bag Of Jewels"
      );
      idiotsInspiringInn.description =
        "\nThe Idiot's Inspiring Inn\nThe most popular tavern in Dorkington, \nprimarily because it is the only tavern in the entire village. \nThe Innkeeper behind the bar is preparing a meal for a Musician With A Broken Arm. \nIn the back of the room, an Obnoxious Patron is slovenly eating a meal.\n\nFrom here you can head outside to the Town Triangle\nor go to the Upstairs Room.\n";
    }
  },
});

let townMap = new Commodity({
  name: "Town Map",
  altNames: ["Town Map", "Map", "Tm"],
  interact:
    "\nA Map of Dorkington and the surrounding forest.\nYou can't get lost with this in hand.\n",
  followUp: () => {},
});

let warmApplePie = new Commodity({
  name: "Warm Apple Pie",
  altNames: ["Warm Apple Pie", "Apple Pie", "Apple", "Pie", "Wap"],
  interact:
    "\nFresh baked pie is the best.\nEveryone loves apple pie.\nAnd people do crazy, death-defying things when they are in love.\n",
  followUp: () => {},
});

let damagedLute = new Commodity({
  name: "Damaged Lute",
  altNames: ["Damaged Lute", "Damaged", "Lute", "Dl"],
  interact:
    "\nA musical instrument that has seen better days.\nIt appears to have been damaged by some kind of wild animal.",
  followUp: () => {},
});

let pointlessRock = new Commodity({
  name: "Pointless Rock",
  altNames: ["Pointless Rock", "Pointless", "Rock", "Pr"],
  interact: "\nA simple rock that has no innate value.\n",
  followUp: () => {},
});

let dragonsTreasure = new Commodity({
  name: "Dragon's Treasure",
  altNames: ["Dragon's Treasure", "Dragons Treasure", "Treasure", "Dt"],
  interact: `\nYour prize for slaying the Dragon!\nWealth beyond your wildest dreams.\nYou return to the hamlet, with all the Gold in tow.\nAll the villagers praise your efforts.`,
  followUp: () => {
    colorChangeWords(
      `They will sing your praises from now until the end of time.\nAll will know your name:\n     "${heroName} the Mightier"\n     the Hero of Dorkington!\n\nCongratulations, You Won!`,
      highlightedWords
    );
    playAgain();
  },
});

let deathsScythe = new Commodity({
  name: "Death's Scythe",
  altNames: ["Death's Scythe", "Deaths Scythe", "Scythe", "Ds"],
  interact:
    "\nThe immortal weapon of the manifestation of Death.\nA single scratch would cause any creature to immediately perish.\nUse with caution.",
  followUp: () => {},
});

//All the Items (Commodity) you can interact with
let interactCommodity = {
  Sword: sword,
  Bucket: bucket,
  "Premium Horse Manure": premiumHorseManure,
  "Warm Meal": warmMeal,
  "Bag Of Jewels": BagOfJewels,
  "Town Map": townMap,
  "Warm Apple Pie": warmApplePie,
  "Damaged Lute": damagedLute,
  "Pointless Rock": pointlessRock,
  "Dragon's Treasure": dragonsTreasure,
  "Death's Scythe": deathsScythe,
};