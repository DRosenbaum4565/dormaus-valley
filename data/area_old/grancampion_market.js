{
        "title": "grancampion_market",
        "header": "The Grand Market",
        "nomap": "As an indentured servant, your options for exploration are limited. You'll have to walk on foot.",
        "subheader": "For all their crowding and grandeur, the markets of Gran Campion are of limited use to someone in your position. Each of these long busy streets contains mostly things you cannot afford. You find yourself at the end of one of the many streets radiating out from the bustling, almost suffocatingly crowded market square. Here, the crowds are a little less busy, with a number of more artisanal stores that have their own buildings rather than mere stands or tents.",
        "events": [
            {
                "id": "returnworkhouse",
                "title": "Return to the Workhouse",
                "subtitle": "Go back to the drudgery of life in Gran Campion.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You head back to the wet, cold and miserable squalor of the workhouse.",
                        "area": "grancampion_workhouse",
                        "outcomes": []
                    }
                }
            },{
                "id": "goscentstore",
                "title": "Go to the Scent Store",
                "subtitle": "Try as you might, you can’t stop thinking about the beautiful skunk merchant and his aromatic market stall. As you walk by the canals of Gran Campion, you smell the familiar perfumes drifting through the air. Is the merchant selling his goods here too? You notice a new store being built with the same handsome merchant resting in the doorway. Sure enough, the skunk recognizes you and calls out, “Back for another sniff, customer? You’ve only sampled a small taste of all I have to offer. Wouldn’t you like to try a little more?” Do you listen to his tempting sales pitch and give in to your desires?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "scent_obsession",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You don’t just want to breathe the skunk’s lovely musk again, you need to. Without a second thought, you approach the market stall, desperate for more.",
                        "area": "grancampion_store",
                        "outcomes": []
                    }
                }
            },{
                "id": "sealtf",
                "title": "A Seal for a Walrus",
                "subtitle": "As you pass a small tavern, a strange, salty scent lingers in your nose. You bark slightly, an 'ort' escaping from your mouth. That scent...you must follow it...",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 25,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "fail": { 
                        "text": "One of the bar patrons is a huge, burly grey walrus. His thick arms bulge with muscle, his belly is round and firm, and a massive white moustache covers his face, from where his thick tusks curve down. He looks familiar.</p></p>You approach the burly sailor, as he quaffs down ale from his massive tankard. His thick black coat is draped over the chair behind him, and his clothes are stained and rumpled from hard work. The stink of his sweat is salty and mature and a little woody. It washes over you as you approach. It feels familiar, making you shudder. Sweat drips from your smooth grey skin as you feel an overwhelming desire to be near the walrus.</p></p>You crawl down under the table, where you see that the walrus has pushed off his massive boots, and his thick grey feet are bare on the floorboards. You nuzzle against them, inhaling that salty seaman scent. Your whiskers tickle against his broad toes, and he guffaws. \"What the blazes?\", he says, before leaning down and seeing you on all fours at his feet.</p></p>\"Well blow me down, if it ain't that cute lubber from Otterton! You followed me all the way out here, eh?\", he says. You grin dumbly, shuddering as his scent flows around you. \"Ort!\", you say. He chuckles, and rubs your smooth head. His rough hand feels so good, makes you feel so proud. A good pet...</p></p>\"Well, seems you don't need any trainin', so I can't turn down a cute seadog like you. Come here, pup\", the walrus says. He leans down and lifts you up, before placing you atop the table. His rough hands pull away your clothes, your belongings. As he pushes them all aside, leaving you naked and helpless, you feel your mind pushing away along with it. Forgetting your past, your desires, everything except the basic, obedient instincts of a pet.</p></p>The walrus strokes and massages your legs, making them slowly grow warm. They press together, fusing and merging, becoming a thick, muscular seal tail. You flick and wiggle your flipper-feet at the end of it, and bark some more. \"Ort, ort!\"</p></p>The walrus grins, and leans down. His thick, fluffy moustache strokes over your bare crotch and legs, tickling you and making you bark and wiggle. Then, he takes a loop of rope from his belt, and fashions a makeshift collar and leash for you. You bark with joy at this gift from your new owner, and obediently hop down to the floor again.</p></p>\"Now wait here for me to finish my ale, eh little pup?\", Master says. You bark, and flop over to his feet again. He chuckles as you nuzzle against him, your mind utterly joyous at your new place in the world. A happy sea pet, at your master's feet.",
                        "trapped_desc": 'You are a dumb, obedient feral seal. Your master, the handsome and smelly walrus Ryosh, keeps you as a performing pet.',
                        "trapped": 'You are a dumb, obedient feral seal. Your master, the handsome and smelly walrus Ryosh, keeps you as a performing pet.',
                        "outcomes": [{
                            "parameter": "trapped",
                            "quantity": 20,
                            "change": "set"
                        }]
                    }
                }
            },{
                "id": "deflate",
                "title": "Strange Green Fabric",
                "subtitle": "You do see one stand you can afford, a junk store. Among the trinkets and baubles for sale, something catches your eye. A large, folded up sheet of glossy green fabric, piled in among trash and junk.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "slip",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "fail": { 
                        "text": "You haggle with the merchant, a chubby gator wearing a fez, and he eventually settles for just a single slip in exchange for the fabric. \"Friend of mine, he was\", he says. \"Went like that when we got home! Poor thing, will make a nice drape or something at least. Seems the nobs here are into that sorta thing.\"</p></p>You carry the material away, and unfold it in a nearby street. As you unwrap and flatten it, you realise it is shaped roughly like an alligator, made from painted rubbery material. It's deflated and flat, for now, but there is a plastic nozzle between its legs, presumably to re-inflate it. When you touch the nozzle, you swear the thing almost seems to twitch.</p></p>Curiously, you pop open the nozzle, and then lean down to blow into it. It's difficult, and strains your lungs, but after a few long, deep blows, the material gradually begins to puff out a little, gaining volume and roundness. You stop to take a breath, and the gator weakly lifts an arm, and its floppy partially-inflated head droops forward.</p></p>Suprised, you quickly lean back down between his legs, and blow some more. His belly gradually fills in, his head straightens and stops flopping left and right. One of his arms pats you gently, and you stop to take another breath, while keeping a finger on his nozzle to keep him from losing air.</p></p>\"Thank you, thank you, oh I am so grateful! I feared I was doomed to become a doormat for some wretched hyena, or even a mere tarp for goods. When I get my hands on Glistlin, I will have his hide! We were selling goods in Glowscale, and I ended up transformed into this odd, shiny form. It was all fun and games until we made port in Makarna, and suddenly I was deflating and losing all my strength! I cannot believe he brought me all the way out here just to sell me off!\", the gator says. He sighs and flexes his limbs, poking the wrinkled and floppy parts where he's not yet inflated.</p></p>\"Would you be so kind...?\", he asks. His hand pats gently on yours, where you're touching his nozzle. With him more inflated and round, it is increasingly obvious how lewd the position is. Still, you lean down, and his hands stroke over your head as you blow into him more. His belly bulges, becoming rounder and bigger. His legs stretch out, thickening and pressing either side of your head. He sighs happily, shivering with delight.</p></p>\"Yes, it seems in a low-magic country like this, an inflatable needs other sources to keep his magic going...\", he says with a chuckle. As you move to lean up and take another breath, his hands pin you down, suddenly strong despite their light, hollow form. You are forced to keep blowing, even as you start to see spots and feel weak and dizzy. His toes pop out, claws wiggling. His tail bulges and fattens, and the spikes on his back rise up. Your arms flop down, your body sinking as it grows too heavy to move. Your head is fuzzy and confused, while you slowly start to flatten and deflate.</p></p>\"Yes, give me every breath. Everything you have, my friend. I will appreciate it all, I assure you...\", he says. His hands stroke over you, pressing down on your body, flattening you more and forcing more air out from you, into him. More than you ever thought you had. Your movements weaken to twitches, then to even less, as you are pushed and rolled and squished down completely flat and helpless. He pushes you off him, and closes his valve carefully.</p></p>His huge, glossy green body is now taut, round and jiggly. He grins happily, as he leans down and slowly starts to roll you up. Your skin feels sensitive and pleasurable as every inch of you is tightly rolled, squeezed against itself, curled up. It's like being bound up into a small ball, where your genitals and mouth and skin is all rubbing and squeezing against itself, helplessly teased and unable to move. He then hefts you over his shoulder and walks out of the alley, whistling nonchalantly as he goes.",
                        "trapped_desc": 'You are a deflated, helpless inflatable. Your skin is rubber, and your new owner is keeping you tightly rolled up so that he can sell you off.',
                        "trapped": 'You are a deflated, helpless inflatable. Your skin is rubber, and your new owner is keeping you tightly rolled up so that he can sell you off.',
                        "outcomes": [{
                            "parameter": "trapped",
                            "quantity": 21,
                            "change": "set"
                        }]
                    }
                }
            },{
                "id": "birdtf",
                "title": "A Quiet Road",
                "subtitle": "One of the streets is unusually quiet, one leading out towards the sea. You can faintly hear music.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 56,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "fail": { 
                        "text": "You walk along one of the streets closest to the sea, inhaling the fresh and salty breeze as it pushes away at the cloying, crowded stench of Gran Campion. The land at the edge of the street falls off beyond a short wall, dropping down along a cliffside and then down to the ocean below. In the distance, past miles of glittering blue water, is a squat, miserable-looking island covered in tall stone walls and towers, like a seafort.</p></p>You pass by a merchant, hurrying nervously with a bundle of wares clutched tightly to his chest. He sees you and waves you down. \"There's a bird down that street\", he hisses, in the same tone that someone might say \"the road is covered in venomous snakes\". When you don't react with horror and alarm, he persists. \"I will make a call to the watch guards and have it removed. You had best take another road\", he says, before fleeing down a side street.</p></p>You walk along, and begin to hear a melancholy set of musical tones. It's barely a song, more a random collection of jumbled notes. The source of the music soon appears; a young avian, sitting on the wall overlooking the sea and idly blowing on a rough wooden flute. He is thin and tall, with shiny black feathers and a grinning yellow beak. His arms end in wide hands with long feather-fingers, and he's wearing only a loose pair of puffy white trousers, with his three-toed talons bare.</p></p>He sees you, and grins wider. His eyes are unfocused, and seem to look right through you. \"A friend? Come to hear me play, eh? I lack my piccolo but for a cute one like you, I think I could learn other tricks with me tongue\", he says. He winks, and you find yourself smiling. His attitude is infectious, and before you know it, you are sitting on the wall next to him. His long arm stretches across your shoulders, and his fingers stroke along your chest. He leans into you, his odd scent flowing into your nostrils. He smells a little like incense, or spices. You giggle, and feel a little dizzy as his beak nuzzles against your cheek.</p></p>\"Care for a kiss? They say a kiss from a bird is like falling from a great height, you know\", he says. You nod, feeling sleepy and drunk. His arms wrap around you as his beak strokes over your face, and his tongue enters your mouth, twining with your own. His bare chest rubs on yours, his warmth covers your skin. Then, in an instant, he presses his palms to your chest, and shoves you.</p></p>You topple backwards, over the wall, and find yourself tumbling through the air, down the cliff. You feel a sense of distant panic in the back of your head, under the drunken dizziness, and try to shake yourself awake. Your skin prickles, pins and needles spreading over you and making you shudder and gasp. Your feet stretch, toes growing longer and sharper, before bursting out into long, scaly talons. Your face pushes forward, nose and mouth becoming hard and smooth.</p></p>Then, in a flurry of feathers, you land in something soft. The black-feathered bird has caught you in his arms, and he looks even taller and more handsome than before. You blush, and squawk a little. He places you down on the sand, your legs wobbly, and then strokes his fingers across your chest. You shiver as he touches along your new blue feathers, lifting and brushing them. His beak nuzzles against yours with a clack, and your toes curl with the desire to be in his arms.</p></p>\"What a cute little bluejay you are. But only part bird, not big enough wings to fly. Perhaps if I see you again in our cold grey aviary, you could become something more. See the lines with me, little bird...\", he croons. His finger lifts your chin slightly, but as you lean in for a kiss, he suddenly takes off into the air. His long arms widen, becoming wings as he rises up and then glides over to the distant island.</p></p>After a moment, your dizziness fades, and you realise it will be a long and awkward walk from the narrow strip of rocky beach you have landed on back to the city.",
                        "descriptionchange": "You are a thin and pretty bluejay, with soft blue feathers and a smooth firm beak. Your feet are long clawed talons, and your arms are winglike but not big enough to fly with.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 56,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "orcfeet",
                "title": "A Peculiar Vehicle",
                "subtitle": "Outside of one extravagant fabrics store, you notice an unusual sight. A bulky, polished mechanical vehicle on two wheels, made from a complex array of twisted pipes, wheels and belts. Strapped to the back is a tower of tightly-bound fabric swatches.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "submissiveness",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "footfetish",
                "results": {
                    "fail": { 
                        "text": "The door to the store jangles, and a tall and broad-shouldered man walks out. He's wearing a heavy black leather jacket, which glistens wetly in the foggy street. Atop his head is a black leather cap, and his powerful legs are clad similarly in black leather chaps and a pair of massive black boots, the tips capped with spiked steel. He lifts his cap and winks at you, and you see that he has a chiselled, handsome green-skinned face, with a pair of massive jutting tusks.</p></p>\"Admiring Black Betty, eh? Bet you've never seen a lady like this\", he says in a deep rumbling voice. He pats the front of the vehicle, where two glass lamps are strapped either side of a steering wheel. \"Rare as hen's teeth, dug her up myself in the badlands down Westwood. Rich toffs here will pay good money for Westwood-fast delivery of their silks and spices!\"</p></p>His hand slides from the chassis of his vehicle, over towards you. His leather glove stroke up along your chest, and slips under your shirt to rub against your skin. \"But damn, Betty here's only the second nicest treasure on this street\", he says. You find yourself blushing as he puts his other hand forward. He wraps his arms around your chest, and pulls you forward against him. His jacket hangs open, and you press against a thin fabric shirt that barely contains his bulging green pecs.</p></p>\"How'd a hot thing like you end up in this town? I can't see you hanging around these streets. All I see when I look at you is a traveller who needs to feel some strong, green orc loving...\"</p></p>Something about the orc, his scent, his size, makes you feel dizzy. The smell of leather, of mossy sweat, of oil, it all mingles into a mind-numbing fog. His gloved hand reaches up and strokes your cheek, and he leans down, his hot breath wafting over you. \"'s a damn long trip up north for this one though. I could really use a bit of a foot massage, help relax me after being ridin' for days....\"</p></p>You gulp as he leans against the side of the store, and then lifts his feet, pushing his boots off one by one by pressing the toe against the back and pulling them down. His huge, broad green feet are revealed, steaming with sweat as they are freed from their tight, hot leather prisons. As you inhale his powerful, sweaty, grassy stink, you already find your knees buckling. You drop down, mouth watering as he lifts his foot and slides it into your hands.</p></p>You rub and massage the orc's heavy foot, stroking your thumbs along his rough dark green sole, smearing the sweat and dirt around as you press and massage it. He flexes his toes, spreading scent over you and making you more dizzy, more flushed and warm. You pull his foot close, massaging the sides, rubbing your fingers across his toes and sliding your palms up and down the arches of his huge feet.</p></p>\"You serve orc feet like a born and raised goblin, friend. Like this is what you were made to do\", he says. His voice rumbles through your mind, as he pulls his foot from your hands and presses it firmly onto your face. The warmth of his strong sole spreads across your face. His sweat clings to your cheeks, and your lungs fill with his scent. Then, he pulls it away, and you lurch forward as you try to grab hold again. He pushes you back, and slides his feet back into his tall, heavy boots.</p></p>\"That was damn good. Tell you what, if we meet up again after this delivery, how 'bout you do the goblin pledge ritual with me? Drink the sweat from my boot and pledge your life to me as your orc commander. Just become a dumb, foot-loving little goblin bitch, who can polish my boots, clean Betty, and drink down my superior orc cum. You like that?\", he says. You nod dumbly, your whole body aching for more of him.</p></p>He hops up onto Betty, straddling the gleaming vehicle. He tips his hat to you and winks, before the bike spins into action and tears off down the street. You almost find yourself crawling to follow it, before you gradually come back to your senses.",
                        "outcomes": [
                            {
                                "parameter": "submissiveness",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "statue1",
                "title": "A Certain Statue",
                "subtitle": "The more upscale streets of Gran Campion tend to be decorated more finely, with columns and statues. One you have seen multiple times is of a tall, imperious bear in fine clothing, holding a chain and with one of his legs lifted, showing the bottom of his stone foot. Something about it is peculiar.",
                "type": "random", //or random
                "requirements": [
                    
                ],
                "icon": "inanimatefetish",
                "results": {
                    "fail": { 
                        "text": "The next time you see one of those statues, you approach to get a closer look. The craftsmanship is very fine. Each detail of the bear's expensive clothing is finely carved. His long jacket, his waistcoat, his cravat, even the seams on what are probably silken pants. His face is twisted into an arrogant, superior sneer, and his hand is clutching a chain made of actual iron, rather than stone.</p></p>You lean down to read the engraving. Apparently this is a statue of Euonymus Alabaster, a noble from hundreds of years ago. He is remembered for the vast fortune he earned by travelling the world, enslaving and conquering everyone he saw. The statue commemorates this perfect specimen of the true noble mindset, understanding that they are superior to all other beings. That other, inferior classes should simply accept their place, should fall to their knees and beg to serve at the feet of their betters.</p></p>You feel a little odd, reading the strangely-worded text. Your eyes drift over to the bear's upraised foot. Every detail of his bare paw is lovingly rendered in the stone. The fur around his sharp claws, the wrinkles on his thickly padded soles. Your mouth waters, and you feel warm and tingly.</p></p>You look up at the statue's face. His stone eyes look down at you with contempt and disgust. You feel yourself recoiling slightly, averting your eyes. You don't have to right to look up at such a man. You look down instead, back at his paw. His superior, perfect paw. Where you belong, underfoot, servile, obedient...</p></p>You realise to your surprise that your hand is down your pants, and you are slowly stroking and pleasuring yourself. Your cheeks flush with embarrassment, but you are unable to stop. You keep thinking about the bear, what it would be like to meet him. To have him strip you, chain you. Make you serve at his feet and kiss his throbbing shaft.</p></p>You moan, shuddering as you climax. Cum soaks your fingers, dripping along your hand. You feel dizzy and confused, and stumble back away from the statue. The statue of your superior, of a powerful noble. You belong to them. You need to serve them. You are nothing but a peasant...</p></p>You shake your head and scurry away, trying to calm your thoughts and clear out these echoing demands inside your mind, demands telling you that you are inferior, obedient.",
                        "temporary_param": "evilstatue",
                        "outcomes": []
                    }
                }
            },{
                "id": "statue2",
                "title": "Return to the Statue",
                "subtitle": "You feel it calling to you. Your eyes drift towards its direction any time you are near that street. Your dreams are filled with his arrogant, demeaning gaze. You need to see him again...",
                "type": "random", //or random
                "requirements": [
                    {
                        "temporary_param": "evilstatue",
                        "value": "evilstatue"
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "fail": { 
                        "text": "You return to the statue, which looms out through the thick fog as you get closer. A dark, tall silhouette. In the mist, you can almost imagine it is the real, living Euonymus, come to take ownership of you. To make you his property forever.</p></p>Seeing him up close makes you feel flushed and warm. That gleaming marble body. His handsome, dour glare, his cold and arrogant eyes. And of course, his huge and powerful ursine foot. Your mouth waters, drool dripping down your chin. You start stripping down, dropping your clothes to the floor despite the cold and damp of the foggy weather. It just feels right to be naked before this statue, to be helpless and weak.</p></p>You move forward, and stroke your hand along the statue's body. Feeling the curves and wrinkles of his pants, blushing as you grope his marble-sculpted bulge. How you wish you could reach in and pull out his cock, to feel his thick and heavy ursine meat in your hand. It would feel so incredible to taste it, to have this man thrust into your throat and growl with pleasure.</p></p>You may not be able to service his shaft, but his paw is sculpted and detailed right there before you. You lean down, and touch the smooth, cold marble. You feel the texture of his carved fur, the bulges and shapes of his thick toes and padded sole. Fog moisture drips from his toes, and in your lust-addled mind you can almost imagine it is his sweat. The imaginary scent of his feet flows into your lungs as you picture it consuming you, wiping away your mind. Each breath reminding you where you belong...</p></p>A clinking sound draws your attention away from his foot, to the iron chain in his hand. It sways in the wind, and you see the end of it has a hinged collar. You take hold of it, and pull it open. You would have expected it to be rusted and stiff, but the collar opens smoothly and easily.</p></p>Wear it. Accept it. Surrender yourself to me.</p></p>You blink, looking down at the collar. It looms like the jaws of a predator. Cold and hard. Ready to claim you, to consume you.</p></p>Accept your place. Be my slave for all eternity.</p></p>You start to lift it up. The metal reaching to your neck, the cold sending shivers down your spine.</p></p>You belong to me.</p></p>You close the collar with a click, and it locks firmly around your neck. For a moment you feel a rush of panic, and try to tug it open again, but it resists and will not budge. You look up at the bear's face. Has that marble expression become a little smugger? Is that a hint of a smirk on his lips, or just a trick of the foggy light?</p></p>The space beneath his upraised paw calls out to you. It seems empty, the statue incomplete. You shake with anticipation as you crawl down, and rest your naked body atop the statue's base. You slide forward, pushing your body under the bear's foot. The cold sole strokes over your chest, up along your pecs. Until finally, you are on your back beneath Euonymus's paw, his toes pressed over your face. Your whole body feels hot and intense, yet also strangely cold. Like the mixed sensations of fever, fighting inside you.</p></p>You reach down, grasping for your throbbing, needy cock. Your limbs feel heavy and stiff, and hard to move. They almost creak as you move, and your breathing is shallow and strange. Your skin feels cold, and firm. As you move, you realise that your face seems to be almost glued to the bear's paw. The place where it touches your skin is stuck, and you can feel a hard, cold sensation spreading over your cheeks and nose.</p></p>You reach up, and feel the cold marble of his foot. The curves, the angles, the continuation of the marble right down onto your face. Like you were carved from the same block of stone he was. You try to breathe in, a rush of panic and fear, but you no longer seem to need to breathe. Your body is getting harder and harder to move, as the marble texture spreads over your head, down your torso. All the colour in you draining away, evaporating.</p></p>This is where you belong. You are mine. You are my slave.</p></p>You shudder once more, your arms resting down on the statue's plinth, and locking down against it as stone.</p></p>You are nothing but my property.</p></p>You twitch and gasp as your insides harden, stiffen. Your skin becomes carved marble, smooth and perfectly sculpted.</p></p>You are mine. Forever.</p></p>Finally, you stop moving completely. Your only thoughts are of the pleasure of servitude. Of how you belong to your superior, arrogant master. That you are his obedient property, his adoring slave. And you will be, forever.",
                        "trapped_desc": "You are a statue of a chained slave, kissing your evil master's stony paw",
                        "trapped": "You are a statue of a chained slave, kissing your evil master's stony paw",
                        "outcomes": [{
                            "parameter": "trapped",
                            "quantity": 24,
                            "change": "set"
                        }]
                    }
                }
            }
        ],
        "npcs": [
        ]
    }