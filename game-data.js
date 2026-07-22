/* ============================================================
   SURVIVE THE SEASON — GAME CONTENT
   7th Grade Texas History · Unit 1 · TEKS 7.2A, 7.9A
   All student-facing text is written at a 5th grade reading level.
   Writers: edit strings and numbers here. Game logic never changes.
   ============================================================ */

const GAME_DATA = {
  meterStart: 60,
  totalDecisions: 8,

  endings: {
    thrived: {
      title: "You Thrived!",
      text: "Your people knew this land well. You chose the ways that fit your home — and the land gave back everything you needed. A new spring is coming, and your people are strong."
    },
    survived: {
      title: "You Survived",
      text: "You made it through a hard year. Some choices fit your land. Some did not. Your people are alive, but the year left its marks. Next time, watch how your land shapes every choice."
    },
    failed: {
      food: "Without enough food, your group could not go on. Every people in early Texas had a smart way to stay fed — but it had to match their land.",
      shelter: "Without good shelter, the weather won. Every people built the home that fit their place and their way of life.",
      health: "Without health and safety, the group grew too weak to continue. Staying safe meant knowing your land and its dangers."
    },
    replayNudge: "Try another people — their land gave them very different choices."
  },

  peoples: [

    /* ================= COMANCHE ================= */
    {
      id: "comanche",
      name: "Comanche",
      region: "Great Plains",
      home: "Teepee",
      food: "Buffalo",
      color: "#a0522d",
      cardImage: "assets/images/card_comanche.jpg",
      intro: "You are Comanche, of the Great Plains. Your life moves with the buffalo. When the herd moves, you move. The horse — brought by the Spanish — makes your people fast and strong. Your home is the teepee, and you can pack it in minutes.",
      debrief: [
        "The Comanche lived on the wide, open Great Plains.",
        "They were nomadic — that means they moved all year, following the buffalo herds.",
        "The buffalo gave them almost everything: food, hides for clothes, and covers for their homes.",
        "Their home was the teepee, a cone of buffalo hides that packs up in minutes.",
        "The horse, brought by the Spanish, made the Comanche fast, powerful hunters."
      ],
      seasons: [
        {
          key: "spring",
          title: "The Herds Return",
          image: "assets/images/comanche_spring.jpg",
          alt: "A Comanche camp on green spring plains, packing hide teepees onto travois as a distant buffalo herd begins to move.",
          intro: "The grass turns green. Far off, the buffalo herds begin to move. Your camp must decide how to greet the new season.",
          decisions: [
            {
              prompt: "Scouts spot a herd two days' ride away.",
              choices: [
                { text: "Pack the teepees and follow the herd on horseback.",
                  effects: { food: 15, health: 5 },
                  verdict: "right",
                  feedback: "Yes. The Comanche were always on the move. Teepees pack up fast, and horses let you follow the buffalo — your main source of food, tools, and shelter." },
                { text: "Stay here and plant corn by the creek.",
                  effects: { food: -15, health: -5 },
                  verdict: "wrong",
                  feedback: "Planting was the way of the Jumano and Caddo in other regions. The Plains Comanche did not farm. The camp goes hungry waiting for crops that won't come." },
                { text: "Send a few hunters on foot; keep camp here.",
                  effects: { food: 5, health: -5 },
                  verdict: "partial",
                  feedback: "On foot you catch a little. But without the horses and the whole camp moving, you can't use the whole herd. The horse was your people's greatest gift." }
              ]
            },
            {
              prompt: "A cold spring storm rolls across the open plain.",
              choices: [
                { text: "Search the flat grassland for a cave.",
                  effects: { shelter: -15, health: -5 },
                  verdict: "wrong",
                  feedback: "The open plains have almost no caves. Your shelter is the home you carry with you." },
                { text: "Start building a mud-brick house to wait out the storm.",
                  effects: { shelter: -15 },
                  verdict: "wrong",
                  feedback: "Adobe houses — made of clay and straw — took weeks to build and belonged to the Jumano by the rivers. You need shelter now, and yours is already packed." },
                { text: "Turn the teepee's sloped side to the wind and pile earth around the bottom.",
                  effects: { shelter: 15 },
                  verdict: "right",
                  feedback: "The teepee was built for the plains. Its cone shape sheds wind and rain." }
              ]
            }
          ]
        },
        {
          key: "summer",
          title: "Following the Buffalo",
          image: "assets/images/comanche_summer.jpg",
          alt: "Comanche riders on horseback following a large buffalo herd across sunny summer plains.",
          intro: "The sun is high and the great herd drifts north across the grass. Your people must keep up.",
          decisions: [
            {
              prompt: "The herd is now far to the north.",
              choices: [
                { text: "Stay by the cool river and wait.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "The buffalo don't come to you. Waiting means empty stomachs." },
                { text: "Move the whole band north on horseback.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "Staying close to the herd kept your people fed. Moving fast was everything." },
                { text: "Split the band — half follow, half stay.",
                  effects: { food: 5, health: -5 },
                  verdict: "partial",
                  feedback: "A split band is harder to protect, and half your people still go hungry." }
              ]
            },
            {
              prompt: "A rival band claims the same hunting ground.",
              choices: [
                { text: "Defend the ground with your horse-mounted warriors.",
                  effects: { health: 10 },
                  verdict: "right",
                  feedback: "The Comanche were powerful riders and among the strongest warriors of the plains." },
                { text: "Give up the ground and move away.",
                  effects: { food: -10 },
                  verdict: "wrong",
                  feedback: "Losing the best hunting ground means losing food." },
                { text: "Build a wooden fort and dig in.",
                  effects: { shelter: -10 },
                  verdict: "wrong",
                  feedback: "Forts were not the Comanche way. Your strength was speed, not walls." }
              ]
            }
          ]
        },
        {
          key: "fall",
          title: "Getting Ready for Winter",
          image: "assets/images/comanche_fall.jpg",
          alt: "Comanche people drying strips of buffalo meat on wooden racks on golden autumn plains.",
          intro: "The days grow short. Whatever you gather now must last through the cold months.",
          decisions: [
            {
              prompt: "How will you save food for winter?",
              choices: [
                { text: "Eat well now and worry about winter later.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "A full belly today means an empty one in January. Winter will come whether you are ready or not." },
                { text: "Store corn in clay pots.",
                  effects: { food: -10 },
                  verdict: "wrong",
                  feedback: "Storing corn was the farming peoples' way. You have no corn to store — your people did not plant fields." },
                { text: "Dry buffalo meat into jerky and pemmican.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "Dried meat lasted for months and carried easily — perfect for a moving people. Pemmican is dried meat mixed with fat and berries." }
              ]
            },
            {
              prompt: "The cold is coming. What materials do you gather?",
              choices: [
                { text: "Weave grass mats for house walls.",
                  effects: { shelter: -10 },
                  verdict: "wrong",
                  feedback: "Woven grass walls belonged to the Caddo in the forests. They won't help you on the open plains." },
                { text: "Prepare extra buffalo hides for warm robes and teepee covers.",
                  effects: { shelter: 10, health: 5 },
                  verdict: "right",
                  feedback: "The buffalo gave your people warmth as well as food." },
                { text: "Gather firewood only, and skip the hides.",
                  effects: { shelter: 5, health: -5 },
                  verdict: "partial",
                  feedback: "Fires help, but wood is scarce on the plains. Without thick hides, the cold still finds you." }
              ]
            }
          ]
        },
        {
          key: "winter",
          title: "The Long Cold",
          image: "assets/images/comanche_winter.jpg",
          alt: "A Comanche winter camp of teepees tucked into a sheltered snowy canyon, smoke rising from the camp.",
          intro: "Ice rides the wind. This is the season that tests everything you prepared.",
          decisions: [
            {
              prompt: "Choose where to make your winter camp.",
              choices: [
                { text: "Stay out on the open plain.",
                  effects: { health: -15 },
                  verdict: "wrong",
                  feedback: "The open plain in winter is deadly. There is nothing to block the wind." },
                { text: "Travel to the coast to fish.",
                  effects: { food: -10, health: -10 },
                  verdict: "wrong",
                  feedback: "Fishing the coast was the Karankawa's way. The long trip in winter is dangerous and far from home." },
                { text: "Move to a sheltered valley or canyon, out of the wind.",
                  effects: { shelter: 10, health: 5 },
                  verdict: "right",
                  feedback: "Comanche often wintered in protected valleys where the wind couldn't reach." }
              ]
            },
            {
              prompt: "Food is running low.",
              choices: [
                { text: "Plant a winter garden.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "Nothing grows in the frozen plains, and your people were never farmers." },
                { text: "Live on stored pemmican and hunt small game on horseback.",
                  effects: { food: 10 },
                  verdict: "right",
                  feedback: "Your fall preparation pays off. Stored food carries you through." },
                { text: "Trade a horse away for food.",
                  effects: { food: 5, health: -5 },
                  verdict: "partial",
                  feedback: "You eat today, but horses were your people's greatest strength. Each one traded away makes the band weaker." }
              ]
            }
          ]
        }
      ]
    },

    /* ================= KARANKAWA ================= */
    {
      id: "karankawa",
      name: "Karankawa",
      region: "Gulf Coast (Coastal Plains)",
      home: "Wigwam",
      food: "Fish & shellfish",
      color: "#2e6f6c",
      cardImage: "assets/images/card_karankawa.jpg",
      intro: "You are Karankawa, of the Texas Gulf Coast. Your life follows the fish and the seasons of the bay. Your dugout canoe — a boat carved from one big log — carries you across shallow waters. Your home is the wigwam, a dome of bent poles covered with mats and hides. You carry it wherever you go.",
      debrief: [
        "The Karankawa lived along the Texas Gulf Coast, near bays and marshes.",
        "They were nomadic hunter-gatherers — they moved along the coast in small groups.",
        "They fished and gathered oysters, turtles, roots, and berries. They did not farm.",
        "They traveled the shallow bays in dugout canoes carved from single logs.",
        "Their home was the wigwam — a portable dome of bent poles covered with hides or woven mats."
      ],
      seasons: [
        {
          key: "spring",
          title: "The Fish Return",
          image: "assets/images/karankawa_spring.jpg",
          alt: "Karankawa people loading dugout canoes on a calm Texas bay in spring, dome wigwams on the shore.",
          intro: "Warm wind blows in from the Gulf. The bays fill with fish again. Your small group wakes to the sound of water birds. It is time to decide where the season will take you.",
          decisions: [
            {
              prompt: "The fish are returning to the shallow bays.",
              choices: [
                { text: "Clear the land and plant corn.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "Farming was the way of the Jumano and Caddo in other regions. The Karankawa moved too often to farm — and the sandy coast is poor ground for corn." },
                { text: "Load the dugout canoes and move camp to the bay to fish.",
                  effects: { food: 15, health: 5 },
                  verdict: "right",
                  feedback: "Yes. The Karankawa followed the food along the coast. Dugout canoes let you fish the shallow bays where the catch was best." },
                { text: "Stay at the winter camp and gather berries nearby.",
                  effects: { food: 5, health: -5 },
                  verdict: "partial",
                  feedback: "Berries help, but the real food is in the bays. A people who follow the food must move when the food moves." }
              ]
            },
            {
              prompt: "Your group is moving to a new camp by the water.",
              choices: [
                { text: "Take down the wigwam poles and mats and carry them along.",
                  effects: { shelter: 15 },
                  verdict: "right",
                  feedback: "The wigwam was made to travel. Bent poles and woven mats go up fast at every new camp." },
                { text: "Spend weeks building a house of adobe — clay and straw bricks.",
                  effects: { shelter: -15 },
                  verdict: "wrong",
                  feedback: "Adobe was the Jumano's way in the dry mountains. You will move again soon — a heavy house would be left behind." },
                { text: "Don't bother with shelter. Sleep in the open by the fire.",
                  effects: { shelter: -10, health: -5 },
                  verdict: "wrong",
                  feedback: "Coast weather changes fast. Rain and wind come off the Gulf with little warning. Your people always raised their wigwams." }
              ]
            }
          ]
        },
        {
          key: "summer",
          title: "Life on the Bay",
          image: "assets/images/karankawa_summer.jpg",
          alt: "Karankawa fishers in a dugout canoe on a bright summer bay, gathering oysters near marsh grass.",
          intro: "The sun burns high over the water. The bays are full of life — fish, oysters, and sea turtles. But summer on the coast brings its own dangers.",
          decisions: [
            {
              prompt: "The group needs food for the long summer days.",
              choices: [
                { text: "Walk far inland to the plains to hunt buffalo.",
                  effects: { food: -15, health: -5 },
                  verdict: "wrong",
                  feedback: "Following buffalo was the Comanche's way, with horses, on the plains. On foot, far from your canoes and your coast, your people would struggle." },
                { text: "Set fish traps but stay on shore in the shade.",
                  effects: { food: 5 },
                  verdict: "partial",
                  feedback: "Traps catch some fish. But the best food — oysters, turtles, deep-water fish — needs the canoes." },
                { text: "Paddle the canoes out to fish and gather oysters and turtles.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "The bay was your people's table. Fish, shellfish, and turtles kept the Karankawa strong all summer." }
              ]
            },
            {
              prompt: "Clouds of mosquitoes rise from the marsh at sundown.",
              choices: [
                { text: "Ignore the bugs. They're just a bother.",
                  effects: { health: -15 },
                  verdict: "wrong",
                  feedback: "On the marshy coast, insect bites brought real sickness. Your people learned long ago to protect their skin." },
                { text: "Rub on alligator and fish oil, the old coast trick to keep bugs away.",
                  effects: { health: 10 },
                  verdict: "right",
                  feedback: "It worked! The Karankawa really did coat their skin with oils to keep biting insects off. Fewer bites meant less sickness." },
                { text: "Move the whole camp far from the water.",
                  effects: { health: 5, food: -5 },
                  verdict: "partial",
                  feedback: "Fewer bugs, but now you are far from the fish. The coast people found ways to live with the marsh, not run from it." }
              ]
            }
          ]
        },
        {
          key: "fall",
          title: "Gathering Time",
          image: "assets/images/karankawa_fall.jpg",
          alt: "Karankawa people gathering roots, nuts, and berries near the coast in autumn, wigwams and drying fish nearby.",
          intro: "The wind turns cooler. The plants along the coast offer roots, nuts, and berries. Wise groups gather now, before the cold pushes the food away.",
          decisions: [
            {
              prompt: "How will your group prepare food for the cold months?",
              choices: [
                { text: "Gather roots, nuts, and berries, and dry fish to store.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "The Karankawa gathered what each season gave. Dried fish and stored plants would feed the group when the bays grew cold." },
                { text: "Harvest your corn fields.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "There are no corn fields. Your people never planted any — farming belonged to the settled peoples like the Caddo and Jumano." },
                { text: "Keep fishing every day and store nothing.",
                  effects: { food: 5, health: -5 },
                  verdict: "partial",
                  feedback: "Fresh fish is good — today. But cold weather will thin the bays. A group with no stored food gambles with winter." }
              ]
            },
            {
              prompt: "Where should the group plan to spend the winter?",
              choices: [
                { text: "Stay right here on the open beach.",
                  effects: { shelter: -15 },
                  verdict: "wrong",
                  feedback: "The open beach has no shield from winter storms. Your people knew to move when the season changed." },
                { text: "Build a permanent village of big grass houses.",
                  effects: { shelter: -10 },
                  verdict: "wrong",
                  feedback: "Grass houses were the Caddo's homes in the Piney Woods — built to stay. Your people move with the seasons, and your wigwams move with you." },
                { text: "Scout sheltered camps inland, near woods and fresh water.",
                  effects: { shelter: 10, health: 5 },
                  verdict: "right",
                  feedback: "Smart. In cold months the Karankawa moved to protected inland camps, out of the sea wind." }
              ]
            }
          ]
        },
        {
          key: "winter",
          title: "The Cold Wind",
          image: "assets/images/karankawa_winter.jpg",
          alt: "A sheltered Karankawa winter camp among trees near the coast, wigwams close together under a gray sky.",
          intro: "Gray waves crash on the empty beach. The sea wind bites. Your group has moved before the cold — now every choice matters.",
          decisions: [
            {
              prompt: "The north wind is here. Where does the group camp?",
              choices: [
                { text: "Set up the wigwams at a sheltered inland camp, out of the wind.",
                  effects: { shelter: 10, health: 5 },
                  verdict: "right",
                  feedback: "Your wigwams go up fast in the protected camp. Moving with the seasons is how the coast people stayed safe." },
                { text: "Camp out on the open beach to watch for fish.",
                  effects: { health: -15 },
                  verdict: "wrong",
                  feedback: "Winter storms off the Gulf are dangerous. The open beach gives no protection at all." },
                { text: "Walk to the far plains to find buffalo.",
                  effects: { food: -10, health: -10 },
                  verdict: "wrong",
                  feedback: "That was the Comanche's world, and they had horses. A long winter walk away from your coast leaves your people weak and lost." }
              ]
            },
            {
              prompt: "The stored food is getting low.",
              choices: [
                { text: "Plant a garden to grow more food.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "Nothing grows in winter, and your people were never farmers. The coast fed you — you never needed fields." },
                { text: "Eat as little as possible and wait for spring.",
                  effects: { food: -5, health: -5 },
                  verdict: "partial",
                  feedback: "Going hungry weakens the group. Your people kept working for food all winter — gathering, hunting, and using what they stored." },
                { text: "Live on stored food, hunt small game, and gather shellfish on mild days.",
                  effects: { food: 10 },
                  verdict: "right",
                  feedback: "Your fall gathering pays off. With stored food plus a little hunting, the group makes it through." }
              ]
            }
          ]
        }
      ]
    },

    /* ================= JUMANO ================= */
    {
      id: "jumano",
      name: "Jumano",
      region: "Mountains and Basins",
      home: "Adobe pueblo",
      food: "Corn, beans & squash",
      color: "#b0713a",
      cardImage: "assets/images/card_jumano.jpg",
      intro: "You are Jumano, of the dry Mountains and Basins. Your village stands beside the river, where your people have farmed for many lifetimes. Your home is the pueblo — a strong, multi-story house made of adobe, which is clay mixed with straw. Traders from far away know your people's name.",
      debrief: [
        "The Jumano lived in the dry Mountains and Basins region of far west Texas.",
        "They were sedentary — that means they stayed in one place all year.",
        "They farmed corn, beans, and squash in fields beside the river.",
        "Their home was the pueblo — a multi-story house of adobe, made from clay and straw.",
        "They were famous traders who connected peoples across great distances."
      ],
      seasons: [
        {
          key: "spring",
          title: "Planting by the River",
          image: "assets/images/jumano_spring.jpg",
          alt: "Jumano farmers planting corn in river-side fields, multi-story adobe pueblo village behind them in dry mountain country.",
          intro: "The river runs full with spring water. In the dry lands, this is the season everything depends on. Your village gathers at the fields at dawn.",
          decisions: [
            {
              prompt: "The planting season has arrived.",
              choices: [
                { text: "Pack up and follow the buffalo herds.",
                  effects: { food: -15, shelter: -5 },
                  verdict: "wrong",
                  feedback: "Following the herds was the Comanche's way on the plains. Your people stay. Your fields, your home, and your trade are all here." },
                { text: "Plant only a small patch and plan to trade for the rest.",
                  effects: { food: 5 },
                  verdict: "partial",
                  feedback: "Trade was a Jumano strength — but trade works best when you have plenty to offer. A small crop is a thin plan." },
                { text: "Plant corn, beans, and squash in the fields by the river.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "Yes. The river made farming possible in the dry country. Corn, beans, and squash were the Jumano's life." }
              ]
            },
            {
              prompt: "Winter rains wore grooves into the pueblo walls.",
              choices: [
                { text: "Take the pueblo apart and sew teepees instead.",
                  effects: { shelter: -15 },
                  verdict: "wrong",
                  feedback: "Teepees were the moving home of the Comanche. Your people stay by the river — and a strong pueblo beats a tent in the desert heat and cold." },
                { text: "Repair the adobe walls with fresh clay and straw.",
                  effects: { shelter: 15 },
                  verdict: "right",
                  feedback: "Adobe homes lasted for generations — when they were cared for. Each spring, your people renewed the walls." },
                { text: "Skip the repairs and spend every day in the fields.",
                  effects: { shelter: -5, food: 5 },
                  verdict: "partial",
                  feedback: "The crops get help, but cracked walls only get worse. In the desert, your thick walls are your shield from heat and cold." }
              ]
            }
          ]
        },
        {
          key: "summer",
          title: "Water and Trade",
          image: "assets/images/jumano_summer.jpg",
          alt: "Jumano villagers carrying river water to green fields under a hot summer sun, traders arriving at the adobe pueblo.",
          intro: "The desert sun beats down. The corn stands tall, but only because the river is near. Dust rises on the trail — travelers are coming toward your village.",
          decisions: [
            {
              prompt: "The summer heat is drying out the fields.",
              choices: [
                { text: "Carry river water to the crops and tend them every day.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "In the dry country, water is life. Your people kept the fields alive with river water through the hottest months." },
                { text: "Leave the village to wander and hunt for the summer.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "With no one to water them, the crops die in the heat. Settled farmers cannot walk away from their fields." },
                { text: "Water the fields only when clouds don't come.",
                  effects: { food: 5 },
                  verdict: "partial",
                  feedback: "In the Mountains and Basins, rain clouds usually pass without rain. Waiting on the sky is a risky bet." }
              ]
            },
            {
              prompt: "Traders from far away arrive at your village.",
              choices: [
                { text: "Turn them away. Strangers can't be trusted.",
                  effects: { health: -10 },
                  verdict: "wrong",
                  feedback: "Trade was a Jumano superpower. Turning traders away cuts your people off from tools, goods, and friendships." },
                { text: "Leave the fields and travel far away with the traders.",
                  effects: { food: -10 },
                  verdict: "wrong",
                  feedback: "Some Jumano did travel to trade — but the village and fields always came first. Abandoning the crops in high summer costs you the harvest." },
                { text: "Welcome them and trade crops and goods.",
                  effects: { health: 10, food: 5 },
                  verdict: "right",
                  feedback: "The Jumano were famous traders. They connected peoples across huge distances and brought home goods their land could not give." }
              ]
            }
          ]
        },
        {
          key: "fall",
          title: "The Harvest",
          image: "assets/images/jumano_fall.jpg",
          alt: "Jumano villagers harvesting corn and storing it in adobe pueblo rooms in autumn light.",
          intro: "The corn is heavy and gold. What your village gathers and stores in these weeks will decide how winter feels.",
          decisions: [
            {
              prompt: "The crops are ready.",
              choices: [
                { text: "Feast now and let the rest stand in the fields.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "Crops left standing are lost to birds, beasts, and frost. A farmer's wealth is the food in the storeroom." },
                { text: "Harvest the crops and store them in the pueblo's storage rooms.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "This is why your people farmed. A full storage room meant a safe winter — a promise the desert could not break." },
                { text: "Harvest fast and leave the smallest ears behind.",
                  effects: { food: 5 },
                  verdict: "partial",
                  feedback: "Most of the crop is in, but waste is risk in the dry country. Careful hands harvested everything." }
              ]
            },
            {
              prompt: "The nights grow cold in the high desert.",
              choices: [
                { text: "Dry beans and squash, seal the storerooms, and mend the roof.",
                  effects: { shelter: 10, health: 5 },
                  verdict: "right",
                  feedback: "Dried food keeps for months, and a tight pueblo keeps the cold out. Your village is ready." },
                { text: "Weave grass mats to cover the walls.",
                  effects: { shelter: -10 },
                  verdict: "wrong",
                  feedback: "Grass walls belonged to the Caddo in the wet forests. Your adobe is far stronger here — it just needs care, not grass." },
                { text: "Trade away extra food for shells and feathers.",
                  effects: { food: -5, health: 5 },
                  verdict: "partial",
                  feedback: "Beautiful goods lift the village's spirit — but food traded away in fall can be missed in February. Trade the surplus, keep the store." }
              ]
            }
          ]
        },
        {
          key: "winter",
          title: "Warm Walls",
          image: "assets/images/jumano_winter.jpg",
          alt: "A Jumano adobe pueblo village on a cold clear winter day, smoke rising, snow dusting the dry mountains behind.",
          intro: "Frost silvers the fields at dawn. But inside the pueblo, the thick adobe walls hold the warmth of the fire. Your people gather close.",
          decisions: [
            {
              prompt: "The deep cold has arrived.",
              choices: [
                { text: "Set out on a long winter trading trip.",
                  effects: { health: -15 },
                  verdict: "wrong",
                  feedback: "Winter travel in the mountains is dangerous. Your people traded in better seasons and kept close to home in the cold." },
                { text: "Stay in the warm, thick-walled pueblo.",
                  effects: { shelter: 10, health: 5 },
                  verdict: "right",
                  feedback: "Adobe walls hold heat like a blanket. This is the reward of a settled life — a strong home that never moves." },
                { text: "Build a quick brush shelter near the hunting grounds.",
                  effects: { shelter: -15 },
                  verdict: "wrong",
                  feedback: "A quick shelter in a desert winter is a poor trade for adobe walls. Moving out was never the Jumano way." }
              ]
            },
            {
              prompt: "The village needs food to last until spring.",
              choices: [
                { text: "Travel to the coast to fish.",
                  effects: { food: -10, health: -10 },
                  verdict: "wrong",
                  feedback: "The coast was the Karankawa's home, far away. Your food is already here, stored safe in the pueblo." },
                { text: "Send hunters into the winter mountains.",
                  effects: { food: 5, health: -5 },
                  verdict: "partial",
                  feedback: "A little fresh meat helps, but winter hunts are risky. Your stored crops were always the safer meal." },
                { text: "Live on stored corn, beans, and squash, plus goods from trade.",
                  effects: { food: 10 },
                  verdict: "right",
                  feedback: "The harvest carries you through. Farming and trading meant your people rarely feared winter." }
              ]
            }
          ]
        }
      ]
    },

    /* ================= CADDO ================= */
    {
      id: "caddo",
      name: "Caddo",
      region: "Piney Woods (Southeastern)",
      home: "Grass house",
      food: "Corn, beans, pumpkins & squash",
      color: "#4a7a3a",
      cardImage: "assets/images/card_caddo.jpg",
      intro: "You are Caddo, of the green Piney Woods. Your people are farmers, hunters, and makers of fine things. Your village of tall grass houses stands among the pines. Fields of corn, beans, pumpkins, and squash circle the village. The forest gives your people all they need.",
      debrief: [
        "The Caddo lived in the Piney Woods of East Texas — the Southeastern region.",
        "They had a complex, settled farming society with organized villages and leaders.",
        "They farmed corn, beans, pumpkins, and squash, and also hunted in the forest.",
        "Their home was the grass house — a large dome of wooden poles covered with woven grass.",
        "They were skilled craftspeople, famous for their fine pottery and tools."
      ],
      seasons: [
        {
          key: "spring",
          title: "Clearing the Fields",
          image: "assets/images/caddo_spring.jpg",
          alt: "Caddo farmers clearing and planting fields beside tall dome-shaped grass houses among pine trees in spring.",
          intro: "Rain drips from the tall pines. The soil is dark and rich. In your village, everyone has a job to do — spring is the busiest season of all.",
          decisions: [
            {
              prompt: "The planting moon has come.",
              choices: [
                { text: "Pack up and travel west to follow the buffalo.",
                  effects: { food: -15, shelter: -5 },
                  verdict: "wrong",
                  feedback: "Chasing herds was the Comanche's way on the far plains. Your people stay. Your fields, your village, and your kin are all here." },
                { text: "Clear the fields and plant corn, beans, squash, and pumpkins.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "Yes. The Caddo were expert farmers. The rich forest soil grew big harvests that fed large, organized villages." },
                { text: "Plant a small garden and count on hunting for the rest.",
                  effects: { food: 5 },
                  verdict: "partial",
                  feedback: "Caddo hunters were skilled — but farming fed the village. A small garden cannot feed a large settled people." }
              ]
            },
            {
              prompt: "Winter storms damaged some homes in the village.",
              choices: [
                { text: "Build adobe houses of clay and straw instead.",
                  effects: { shelter: -15 },
                  verdict: "wrong",
                  feedback: "Adobe was the Jumano's home in the dry west. In the rainy Piney Woods, mud-brick walls would soften and fail." },
                { text: "Sew hide teepees like the plains people.",
                  effects: { shelter: -10 },
                  verdict: "wrong",
                  feedback: "Teepees are for people who move. The Caddo stayed — and had few buffalo hides. Your forest gives wood and grass for strong, lasting homes." },
                { text: "Repair the grass houses — new poles, fresh woven grass.",
                  effects: { shelter: 15 },
                  verdict: "right",
                  feedback: "The grass house was perfect for the Piney Woods. Its thick woven walls shed rain and stayed cool in the heat." }
              ]
            }
          ]
        },
        {
          key: "summer",
          title: "Green and Growing",
          image: "assets/images/caddo_summer.jpg",
          alt: "A Caddo village in summer with green crop fields, people making pottery in the shade of pines.",
          intro: "The fields are a sea of green. Deer move in the shade of the pines. In the village, skilled hands shape clay into fine pots.",
          decisions: [
            {
              prompt: "The crops are growing, but the village must stay fed all summer.",
              choices: [
                { text: "Tend the crops, and hunt deer in the woods.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "The Caddo did both — farmed the fields and hunted the forest. Two food sources made the village strong." },
                { text: "Leave the village and wander for the summer.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "Weeds and animals take an untended field fast. A settled farming people cannot abandon their crops." },
                { text: "Stop farming and only hunt.",
                  effects: { food: 5, health: -5 },
                  verdict: "partial",
                  feedback: "Hunting alone cannot feed a big village. The harvest is what fills the storehouses for winter." }
              ]
            },
            {
              prompt: "There is quiet time between field work. How is it used?",
              choices: [
                { text: "Rest in the shade until harvest.",
                  effects: { health: -5 },
                  verdict: "partial",
                  feedback: "Rest is fine, but your people were makers. Skipping craft work means fewer tools and less to trade." },
                { text: "Make fine pottery and tools for use and for trade.",
                  effects: { health: 10 },
                  verdict: "right",
                  feedback: "Caddo pottery was famous — some of the finest in early Texas. Craft and trade made the village wealthy and respected." },
                { text: "March everyone to the far coast to gather shells.",
                  effects: { health: -10, food: -5 },
                  verdict: "wrong",
                  feedback: "The coast belonged to the Karankawa. Caddo traders got shells the smart way — through trade, not a long, risky march." }
              ]
            }
          ]
        },
        {
          key: "fall",
          title: "The Great Harvest",
          image: "assets/images/caddo_fall.jpg",
          alt: "Caddo villagers bringing in baskets of corn and pumpkins at harvest time, grass houses and autumn pines behind.",
          intro: "The fields have turned gold and orange. Baskets fill with corn and pumpkins. This is the moment the whole year was built for.",
          decisions: [
            {
              prompt: "The great harvest is ready.",
              choices: [
                { text: "Bring in the whole harvest and store the extra food.",
                  effects: { food: 15 },
                  verdict: "right",
                  feedback: "Stored surplus — extra food — is what made Caddo society strong. Full storehouses meant no hungry winters." },
                { text: "Hold one giant feast and eat everything now.",
                  effects: { food: -15 },
                  verdict: "wrong",
                  feedback: "A feast that empties the storehouse is a feast you pay for in January. Your people celebrated — and still stored the surplus." },
                { text: "Store a little and trade the rest away quickly.",
                  effects: { food: 5 },
                  verdict: "partial",
                  feedback: "Trade is good, but food comes first. The Caddo traded from their extra, never from what winter would need." }
              ]
            },
            {
              prompt: "The harvest is in. The village leaders call everyone together.",
              choices: [
                { text: "Let each family keep to itself.",
                  effects: { health: -5 },
                  verdict: "partial",
                  feedback: "Families alone are weaker than a village together. Caddo strength came from organization and community." },
                { text: "Send everyone west on a long buffalo hunt.",
                  effects: { food: -5, health: -10 },
                  verdict: "wrong",
                  feedback: "The far plains were Comanche country. Your food is already here — in the fields, the forest, and the storehouses." },
                { text: "Hold a community gathering to share the work and give thanks.",
                  effects: { health: 10, food: 5 },
                  verdict: "right",
                  feedback: "The Caddo were an organized society. Gatherings kept the village united — and shared work filled the storehouses faster." }
              ]
            }
          ]
        },
        {
          key: "winter",
          title: "The Quiet Woods",
          image: "assets/images/caddo_winter.jpg",
          alt: "A Caddo grass-house village in winter, frost on the pines, smoke rising from the dome roofs.",
          intro: "Frost sparkles on the pine needles. The fields sleep. Inside the thick grass houses, fires burn and stories are told.",
          decisions: [
            {
              prompt: "The cold has settled over the forest.",
              choices: [
                { text: "Stay in the warm grass-house village.",
                  effects: { shelter: 10, health: 5 },
                  verdict: "right",
                  feedback: "The thick woven walls keep the warmth in. A settled people's reward is a strong home in the cold." },
                { text: "Migrate south to escape the winter.",
                  effects: { shelter: -10, health: -5 },
                  verdict: "wrong",
                  feedback: "Your people do not migrate. Leaving means abandoning homes, storehouses, and fields — everything your village built." },
                { text: "Camp in portable hide shelters near the hunting grounds.",
                  effects: { shelter: -15 },
                  verdict: "wrong",
                  feedback: "Portable shelters were for moving peoples like the Comanche and Karankawa. Why shiver in a tent when your village is warm?" }
              ]
            },
            {
              prompt: "The village needs food until spring.",
              choices: [
                { text: "Travel to the coast to fish the winter bays.",
                  effects: { food: -10, health: -10 },
                  verdict: "wrong",
                  feedback: "Fishing the bays was the Karankawa's way of life. Your food is closer: the storehouse and the winter woods." },
                { text: "Live on stored corn, and hunt deer and turkey in the woods.",
                  effects: { food: 10 },
                  verdict: "right",
                  feedback: "Storehouses plus forest hunting — the Caddo's two food sources carry the village through winter with ease." },
                { text: "Eat as little as possible and wait for spring.",
                  effects: { food: -5, health: -5 },
                  verdict: "partial",
                  feedback: "No need to go hungry — your people planned for this. Winter was for eating stored food, hunting, and craft work." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
