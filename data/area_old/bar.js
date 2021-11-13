{
   "title":"bar",
   "position":[
      0.76,
      0.74
   ],
   "header":"The Fur and Feather Bar",
   "subheader":"The bar is dim compared to the streets outside, but a roaring fire and many flickering candles gives it a homely and welcoming feeling. A massive dire-bear-skin rug lies next to the fireplace, and behind the bar, a dizzying array of colourful spirits are begging to be tasted.",
   "events":[
      {
         "id":"gotopatron",
         "title":"Go to the Patron's Lounge",
         "subtitle":"A mysterious door here leads to the patrons-only area.",
         "type":"random",
         "requirements":[
            {
               "parameter":"contributor",
               "value":0,
               "comparison":"greater"
            }
         ],
         "icon":"navigateicon",
         "results":{
            "success":{
               "text":"You open the door, and walk through into a mysterious ballroom.",
               "area":"patrons",
               "outcomes":[
                  
               ]
            }
         }
      },
      {
         "id":"pub_cleantables",
         "title":"Clean Tables",
         "subtitle":"Waiting tables isn't glamorous, but it pays the bills.",
         "type":"statcheck",
         "stat":"stealth",
         "difficulty":2,
         "requirements":[
            {
               "parameter":"grizz_interest",
               "value":2,
               "comparison":"less"
            }
         ],
         "icon":"wine_1",
         "results":{
            "success":{
               "text":"Grizz makes it clear that you must not disturb his clients. Many of them are busy with drinking powerful transformative alcohol, and no one likes to get distracted half way through their change. You sneak around past adventurers who are bulging out into muscular minotaurs, and snag their beer steins before they knock them to the ground. You slide extra servings of dumbing-down booze to guys who are half-donkey and already too dumb to realise it's a bad idea to drink more. At the end of the day, Grizz pays you with some of the extra bottles of wine that transformed customers left behind.",
               "outcomes":[
                  {
                     "parameter":"wine_1",
                     "quantity":5,
                     "change":"add"
                  },
                  {
                     "parameter":"grizz_interest",
                     "quantity":1,
                     "change":"add"
                  }
               ]
            },
            "fail":{
               "text":"Grizz warns you not to disturb his clients, or distract them from their transformations. You do well at first, but just as you're ducking under the flailing leg of a guy partway turning into a horse, you bump right into the table of another customer. One who's rapidly becoming a big, angry minotaur. He shoves you off his table, knocking the wine out of the hands of several other customers. After that, it turns into a full-on brawl. You manage to escape by scooting away, only to bump into a very angry Grizz. He gives you a pound on the head with his enormous handpaw for screwing up.",
               "outcomes":[
                  {
                     "parameter":"pain",
                     "quantity":1,
                     "max":2,
                     "change":"add"
                  }
               ]
            }
         }
      },
      {
         "id":"pub_payday",
         "title":"Payday",
         "subtitle":"It's time for payment for working at the bar.",
         "type":"random",
         "requirements":[
            {
               "parameter":"grizz_interest",
               "value":1,
               "comparison":"greater"
            }
         ],
         "icon":"grizzicong",
         "results":{
            "grizzpay":{
               "text":"Grizz motions you over to him behind the bar. For a moment, it looks like he\\'s going to say something to you, but then the big bear just shrugs and glances away. After a moment, his huge padded paw pats you on the head. Presumably in Grizz-talk, that means \"Good job, kid\". </p> The bear then leans down and pulls a crate out from under the bar, before sliding it over to you. It\\'s stacked with dusty bottles of cheap wine, and you both drink a glass together in amicable silence before he leaves you with the crate and goes back to work.",
               "outcomes":[
                  {
                     "parameter":"wine_1",
                     "quantity":15,
                     "change":"add"
                  },
                  {
                     "parameter":"grizz_interest",
                     "quantity":0,
                     "change":"set"
                  },
                  {
                     "parameter":"grizz_connection",
                     "quantity":1,
                     "change":"add"
                  }
               ]
            }
         }
      },
      {
         "id":"pub_payday2",
         "title":"Payday?",
         "subtitle":"As you enter the pub, the barkeeper looks over at you. His enormous furry body reaches up to the ceiling, and his deep voice seems to make the building rumble. </p>\"Hey, shortie. Special on tonight. Bear Musk. New cocktail. You tryin\\'?\" The massive bear scratches his furry belly and gives you a dirty leer.",
         "type":"random",
         "requirements":[
            {
               "parameter":"grizz_connection",
               "value":0,
               "comparison":"greater"
            },
            {
               "parameter":"species",
               "value":2,
               "comparison":"nequal"
            }
         ],
         "icon":"grizzicong",
         "results":{
            "grizzsex":{
               "text":"The bear chuckles, then turns around. You hear a grunting and pumping, and he pants, one of his arms propping him up against the wall. Then there\\'s a deep growl, and a sticky splashing noise. He turns back around, still panting a bit, and slides a shot glass over to you. It\\'s filled with thick creamy goo, which is splattered all over it in a messy dripping load. The goo has a strong, musky and sexual aroma, which reminds you a lot of the huge shaggy smelly bear. </p>He grins widely at you as you gulp it down, swallowing the warm goo in one go. Immediately, you feel hot and flushed all over. Your skin itches as sweat starts to drip down your body, giving you a musky stink that has a deep, beastlike undertone to it, just like the barkeeper. You feel thick, bristly fur growing all over you, especially under your arms and around your crotch. The floorboards under you creak as you grow taller and wider, heavy with swelling muscles under your hairy skin. </p>As you pant and sweat at the bar, the barkeeper bear steps back, showing off that he\\'s naked below the waist. Only the countertop was concealing his fat, dark cock and huge musky furry bear balls. He grips his shaft in one massive rough paw, and starts to pump and stroke it right in front of you. Your mouth waters as you watch his huge cockhead dribble and gush with slick precum. After a few minutes of pounding his cock, he growls, spurting a thick white stream of cum into a new shot glass. The dripping cum fills it up and makes a sticky mess all over his hand and the bartop. He then slides it over to you, and you grab and swallow it like a man dying of thirst. </p>With more bear cum in your belly, your changes accelerate. Your chest grows heavy and round, a layer of fat beginning to cover your rock-hard new muscles. Your palms and soles develop a dark, tough padding, and your fingernails transform to thick powerful black claws. Your face grows into a stocky muzzle, the bones creaking as they transform, making your jaw powerful and deadly. The intensity of the changes make you fall to your knees, clutching your furry gut with your clawed hands. </p>The barkeeper walks around and stands in front of you, his brick-thick cock in your face. You cannot resist, and you eagerly open your fanged muzzle to take in his sweaty, musky cock, so that you can suck down his powerful cum straight from the tap. Your furry face pushes against his crotch over and over, his heavy gut resting on your head, until he grabs your head and squashes you in firmly between his legs. Cum is pumped into your throat in messy spurts. </p>The more you drink, the more you change, and by the time the barkeep pulls his cock from your face, you are a huge hairy chubby bear just like him. A few last splatters of cum spray over your muzzle, before the big bear returns to his bar like nothing happened.",
               "descriptionchange":"This adventurer is a huge, chubby and very furry bear.",
               "outcomes":[
                  {
                     "parameter":"species",
                     "quantity":2,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"hammernail",
         "title":"Hammer and Nail",
         "subtitle":"When you enter the bar, your first reaction is to think that some sort of terrifying monster has invaded the building. It takes you a moment to realise that it is a person, leaning one arm on the bar. She is an enormous grizzly bear, taller even than Grizz, wearing mismatched leather armour and carrying an absurdly massive ultra greatsword on her back.",
         "type":"random",
         "requirements":[
            {
               "parameter":"grizz_connection",
               "value":0,
               "comparison":"greater"
            }
         ],
         "icon":"default",
         "results":{
            "Orc Absinthe":{
               "text":"The bear slams her fist down on the bar. \"Another! Something stronger this time, not this horse's piss!\", She roars. Grizz silently starts to pour a tankard of ale from the tap, and she stares at him as it slowly fills. One of her massive claws scratches a groove in the wooden bar top, and she brushes her hand through her short-cropped hair.</p>\"Come on, Hammer. How can you stand here wearing your prissy little apron and pour drinks for soft fingered city rats?\", She growls. Grizz ignores her, and she sighs. \"Don't you miss the thrill of battle? The rush of the blood rage, the sound of your enemies beneath your feet. We could own this valley!\"</p>Grizz slides the tankard over towards her across the bar. She glares at him sullenly and downs it in one massive gulp. When she slams the tankard down, the metal visibly dents and bends from the force. \"Fine, fine. You don't want to play, I can't hang around in here all day, or I'll go soft. I need some fun for the night though...\", she says. She looks around, then grins at you before swiping towards you and lifting you up in one powerful hand. Your whole body dangles off the ground before she hugs her other arm around you and shoves you against her furry, powerful chest. You hear a deep, low rumbling sound, one so loud that it makes the floor shake. Grizz is growling, his muzzle bared into an ursine snarl. The bear woman slowly grins. \"So there is some fire left in you, after all, Hammer! Feeling jealous? Wrestle me for it, and if you win I'll let you keep this little toy\", she says.</p>Grizz places one of his massive furry arms on the table, and the other bear growls as she matches it with her own. You see them both grit their teeth, the muscles on their arms bulging and straining. They wobble and shake from one side, then the other. Grizz pants and growls, slowly but surely bending the wrestle in his favour...and then with a sudden, shocking thump, the bear woman slams his arm down so hard that he bellows in pain and stumbles. She stands up, and drops you, while Grizz pants and clutches his wrist.</p>\"Never mind. I don't feel like it anymore. You can keep your pet\", The bear woman snarls. Despite her angry tone, her face is furrowed with frustration and sadness. She storms out of the bar, and Grizz sighs deeply before returning to wiping his countertop.",
               "outcomes":[
                  
               ]
            }
         }
      },
      {
         "id":"bar_random",
         "title":"Hang Out",
         "subtitle":"Interesting info can always be found at a bar, right?",
         "type":"random",
         "requirements":[
            
         ],
         "icon":"default",
         "results":{
            "Orc Absinthe":{
               "text":"\"Hello there, by any chance is there any green absinthe, barkeeper?\", you hear an adventurer say. He\\'s sitting at the bar, and Grizz grunts, before sliding over a tall bottle. The adventurer pours himself a bit, and takes a gulp. He shudders, and clutches his chest. He looks unwell - his skin is taking on a green, grassy tint. His jaw creaks forward, and his lower teeth start to thicken and jut out, becoming big curved tusks. \"That was amaz- er, wonde-, errr...GOOD!\" he says, in a deeper, slower voice. </p>He drinks more, his body thickening with muscle and the chair under him creaking as he grows taller and heavier. His clothes give way with a RIP, revealing a stacked, muscular green chest, and his boots explode open to show off gigantic green muscular feet. He snorts and grunts. \"Me green. Drink good.\" he says, and Grizz just nods.</p>The new orc orders a round of drinks for everyone, including you.",
               "outcomes":[
                  {
                     "parameter":"wine_1",
                     "quantity":5,
                     "change":"add"
                  }
               ]
            },
            "Age Booze":{
               "text":"You settle down at the bar, nodding to Grizz and ordering a little something to wet your whistle. The bear goes to fill a glass, a stern growl and furrowed brow show his irritation. \"I feel like I just changed this darn keg...be right back!\"</p>You watch the bear trundle off go the backroom, scratching his belly as he grumbles in mild irritation. As soon as the door swings shut beside him you notice movement next to you. A spry young looking lion takes the seat next to you. </p>He has a big grin on his face as he makes a quiet, \"Shhh...\" motion with his finger. His red mane is short and still seems to be filling in around his golden tan fur. The young feline is reaching behind the counter trying to grab a bottle before you get back. You watch in in surprise, not sure if you should call Grizz or not.</p>\"YOU!\" A thunderous grumble silences the bar, all eyes falling on the thieving cat. His eyes wide with his arm behind the counter, like a kid caught with his paw in the cookie jar. He grins and tries to bolt. </p>Even with the keg on his shoulder the bear moves quick, quicker than you think a bear his size might. He grabs the lion by the scruff of the neck and bends him backwards over the bar. </p>\"Don\\'t move kid!\" He growls, \"I\\'ve had it up to here with you. The legal age to drink is twenty-one, NOT eighteen! If you want a nip that bad, maybe Ol\\' Grizz can help you out with that.\"</p>The lion is too scared to move under the watchful eye of the intimidating bear. You can\\'t help but remain obediently rooted to your seat as well. The bear taps the keg on his shoulder with one angry fist, twisting the spigot on. Beer starts pouring into the young cat\\'s mouth. The bear kicks up the bottle the cat was reaching for and uncorks it as well, pouring and adding it to the stream. Lastly the bear slides his cock into the lion\\'s open maw. The two streams of alcohol pour over the bear\\'s cock as he humps the lion\\'s throat.</p>The lion struggles under Grizz, gagging on the fluids assaulting his throat. His shirt is pulled up due to how he\\'s bent. You watch his trim golden belly grow a thick read treasure trail into his pants. The bulge in his trousers thickens and expands, soon the young lion is hard. His body continues to broaden. His chest becoming thicker, he gains a bit of a beer belly as the treasure trail grows thicker and richer. A wet stain forms in the lion\\'s bulge, not sure if the drunk kid has wet himself like a drunk, or if he has cum. The scent of booze overwhelms. The thick red treasure trail gets flecks of silver. You look up and see the youthful teenage face of the lion is gone. Now there is a rugged older lion guzzling booze and bear cock like a champ, a full mane and beard on his strong jaw. It\\'s a deep red with mature flecks of silver. As the keg taps out, Grizz pulls his cock free. The older lion gives a triumphant belch, looking down in surprise at the man he\\'s become. </p>\"Don\\'t look so smug kid, you still gotta pay your tab!\" Grizz gruffs with a smirk. The lion is good for his debts, and a few days later he comes around with some extra cash, which gives you a bonus from Grizz.(Guest event by Fahlma)",
               "outcomes":[
                  {
                     "parameter":"wine_1",
                     "quantity":5,
                     "change":"add"
                  }
               ]
            },
            "Drunk Mouse":{
               "text":"You see a small mouse sitting on the countertop, drinking from a thimble. He\\'s leaning against a bowl of nuts and looks very drunk. \"Stupid coyote cheated me.\", he squeaks, and drowns his sorrows in more tiny quantities of ale. \"S\\'not all bad, though. Ale is cheap when you\\'re this tiny!\", he finishes. </p>With a drunken giggle, he stumbles and falls into the nuts, his own furry rodent balls resting atop two walnuts as he falls asleep. You snatch the little mouse up moments before a big tiger grabs a handful of nuts from the bowl, and Grizz pays you a few extra bottles for saving a paying customer.",
               "outcomes":[
                  {
                     "parameter":"wine_1",
                     "quantity":5,
                     "change":"add"
                  }
               ]
            },
            "Grizz Blowjob":{
               "text":"Grizz seems distracted today. He\\'s not wiping his usual glass, and he is taking longer than usual to serve customers. Every now and then he grunts and moans, and his shaggy fur is damp with sweat. Someone asks for a bear musk, and he grunts that it\\'s all been reserved for a special customer. </p>Curious, you lean over, looking past the bar under Grizz\\'s massive furry gut. Sure enough, between his legs is a smaller bear with a huge grin on his face. The bear is bobbing his head back and forth on Grizz\\'s enormous cock, and every time Grizz moans and pants, a spurt of cum escapes from the other bear\\'s lips. Must be a special offer - straight from the tap. Grizz slides you over a few bottles to keep your mouth shut.",
               "outcomes":[
                  {
                     "parameter":"wine_1",
                     "quantity":5,
                     "change":"add"
                  }
               ]
            }
         }
      },
      {
         "id":"dwarf",
         "title":"A Loud Party Underground",
         "subtitle":"Grizz looks annoyed at the banging and shouting coming from a trapdoor behind the bar. He mutters something about \"dwarf parties\".",
         "type":"random",
         "requirements":[
            {
               "parameter":"species",
               "value":20,
               "comparison":"nequal"
            }
         ],
         "icon":"tffetish",
         "results":{
            "grizzsex":{
               "text":"You ask Grizz what\\'s going on, and he grunts and pounds his foot on a wooden trapdoor near the back of the bar. You can hear shouting, clanging and music coming from beneath it. \"Private party\", he mutters. Curious, you ask him if you can go in, and you take his disinterested shrug as an agreement.</p>You pull on the heavy iron ring attached to the trapdoor, and heave it open. The sounds become much louder as you do, and it\\'s clearly a group of men with deep, gravelly voices singing together. You start to climb down, and Grizz kicks the trapdoor closed as you descend. You find yourself under the bar, where kegs are lined up against pipes in the ceiling. The walls are rough-hewn stone, and you follow the sounds through a tunnel where the stone becomes rougher and coarser, until finally you enter into a wider stone room, complete with stone benches, a few kegs, and some guttering braziers on the walls.</p>Inside the room are dozens of short, bearded men, all of them singing and drinking, and many of them lewdly engaging in sex together. They range from three to four feet tall, and every one of them is sporting a thick beard and moustache. Some have them braided, and some have rings or bands in them, but they all have at least half their rugged faces covered by facial hair. As you watch, one of the dwarves kicks off his huge steel-capped boots, revealing his rough muscular feet, then drops his leather pants to show off a thick rock-hard cock that looks enormous on his short body. The dwarf next to him grins widely under his thick golden facial hair, and grabs his friend\\'s hips before lowering his head to that fat cock and starting to suck on it eagerly, the shaft sliding in and out between his massive moustache.</p>You don\\'t know if it\\'s the music, the sights of a dwarf orgy happening in front of you, or perhaps even the rough, masculine scent of a gang of hard-working miners, but you feel compelled to walk in and sit down. One dwarf, a man with a dark black beard and moustache, pats the bench beside him. You sit down next to him and he hands you a tankard filled with foaming ale. \"Och aye, ain\\'t you a bonny lad!\", he says. You gulp down the heady, foaming ale, and the dwarf starts to pull down your pants. Your head swims and you grin, feeling dizzy and giddy after only a few gulps. You spread your legs as the dwarf strokes your crotch with his wide, rough, shovel-like hands, and starts to pleasure you. He leans down, grinning through his bushy beard. The feeling of his moustache tickling against your bare crotch makes you squirm and gasp. Another dwarf, with rust-red hair, takes hold of your shoulders, and pulls you down with his powerful muscular arms until you\\'re lying on your back on the bench. He straddles your waist, and starts to push his fat cock into your mouth as he face fucks you. You look up past his hard, round beer belly, up at his wild bushy red beard and moustache, as he pants and moans with a huge, eager grin. \"Aye cousin, take it!\", he grunts, and you feel your body starting to change as the two dwarves have their way with you.</p>Your bones creak and thicken, getting heavier and stouter, even as you start to shrink down. Your muscles toughen and harden like powerful aged wood, and your skin becomes rough and hairy. Your hands and feet grow larger even as your body gets shorter, as your proportions change to match the stout and sturdy form of the other dwarves around you. Most importantly, you feel a prickling and tingling on your face, as thick hair grows down your cheeks and over your chin. It thickens and gets longer and bushier, forming into a massive moustache of your own that completely covers your mouth, along with a large and masculine beard growing thick from all over your chin and cheeks.</p>The red-haired dwarf grunts and slams down his tankard of ale, as his cock unloads a rush of thick, hot cum deep into your throat. You shudder and moan, as a powerful orgasm rushes through your body. The black-haired dwarf pulls himself off your crotch and wipes your cum from his beard. \"Welcome, cousin!\", he says. Your two new friends pull you to your feet, and you party and quaff ale deep into the night.",
               "descriptionchange":"This adventurer is a short, muscular dwarf with a huge beard and moustache.",
               "outcomes":[
                  {
                     "parameter":"species",
                     "quantity":20,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"festival_party",
         "title":"Help Decorate the Bar",
         "subtitle":"You see Ace leaning on the side of the bar, talking to Grizz. Grizz is silently wiping the counter and ignoring him. \"C'mon, Grizz. Where's your festival spirit? You never decorate for Red Night, so why not let me do the place up with some old Westwood traditions?\", he says. Grizz remains silent. Ace notices you watching, and lifts his hat up a bit before smiling at you.</p>\"See, here's the perfect person to help out! I got a great idea on how we can get some Wolf Party decorations for this boring watering hole, an' even get some treats for Red Night. You interested?\", Ace says. Grizz gives you a snorting grunt, which makes you think that Ace may not have your best interests at heart with this plan.",
         "type":"random",
         "requirements":[
            {
               "parameter":"species",
               "value":50,
               "comparison":"nequal"
            }
         ],
         "icon":"tffetish",
         "results":{
            "grizzsex":{
               "text":"You agree, with only slight hesitation. Ace grabs you by the wrist, and pulls you over towards the bar. \"Don't worry, this won't hurt a bit. Grizz, gimme that old bottle a' sweet bacanora I brought back with me\", he says. Grizz sighs and reaches down under the bar. You hear the sound of clinking glass as he grabs a bottle and places it on the counter. The insides are a golden brown, and when Ace grabs the cork and yanks it out, your nostrils sting with the potency of the alcohol within.</p>Ace presses himself against you, his furry chest pushing you back against the bar. \"Bottoms up!\", he says with a chuckle, before placing the rim of the bottle to your lips and raising it high. You gulp down the booze that flows out, which is thick and extremely sugary, but leaves a sharp alcholic tang in the back of your throat. Even after only a few gulps, you start to feel dizzy, and the room around you sways and becomes unfocused. Ace pulls the bottle away, and you hiccup and giggle at him. He seems to split in two and sway left and right. \"How you feelin', pardner? Wanna party?\", he asks. You find yourself nodding in agreement. A party sounds amazing!</p>\"You heard it, Grizz! We're having a party!\", Ace says. You find yourself clapping and giggling. You want everyone to have a fun time! With colours and lights and dancing and music! You try to grip the bottle that Ace put down, but your fingers are feeling stubby and stiff and short. Eventually you manage to grab it by pushing both your thick, swollen hands against either side of the bottle, and lifting it up to guzzle down some more. The thick alcohol tastes even better this time, and with every gulp you feel your neck start to thicken and swell. It stretches out, getting taller and wider, and your ears start to rise up and grow pointy and wide as they migrate to the top of your head.</p>You slam the bottle back down and wipe your mouth with the back of your hand. It feels papery and fluffy, and you look down with your blurred vision to see strange colours starting to crawl up from your wrist. You try to focus, and you wiggle your stubby fingers as you see strips of colourful paper growing from your skin, and thickening into a pelt that spreads slowly up your limbs. Somehow that doesn't seem all that important though. You are supposed to be having a party!</p>You grab the side of the bar with your hands and start to clamber up onto it. It seems taller than it was before, but you manage to scrabble at the bottom with your feet, even as your shoes and socks fall off, and your feet thicken and flatten into stubby hoof-like lumps. Once you get atop the bar, you feel an uncontrollable urge to dance. You hop and bounce, spinning and twisting from hoof to hoof as you waggle your butt at Ace's amused face. You feel long yellow paper strands grow from your rear, forming a rustling paper tail, while your body gets fatter and shorter and more unrealistic in proportion. Your eyes grow wide and round, and your mouth stretches into a fixed, eager grin. Blue, pink and yellow paper spreads up your body in stripes and patterns, and you feel so light and bouncy and sugary and full of joy! As you finish your dance, you start to lean down and bow, but suddenly Ace grabs you by your sides and pulls you down against the bar again. You look up at him, noticing he's almost twice your height now. \"Nice moves, partner. Now I want my treats\", he says with a sinister grin. You blink, and giggle some more. His hand slides down across your side, and further down to his pants, where he unbuckles his belt and pulls out his long, thick cock. His musky, unwashed stink makes you feel even more dizzy, as he presses his tip under your paper tail, and starts to push. You feel him pressing through you, through the thick shell of your strange skin and into your center. He thrusts, slamming you against the bar, and the impact makes your whole body shudder and flush with intense, pleasurable feeling.</p>Another thrust, a brain-rattling slam against the counter, and you almost gasp. Being struck and rammed makes you feel so good! Each time you feel the impact, your insides feel bubbly and happy and so wonderful. You start to wiggle your hooves and whinny with need, and he hits you harder and faster, making you lose all grasp on the situation as all you can think of is that drumming, pounding pleasure.</p>Finally, you can take it no more. You feel so full of pleasure and happiness that it has to come out! You open your mouth, scrunch your eyes, and HEE-HAW as loud as you can! You feel a rush of orgasmic bliss, as large, colourful round objects spill from your mouth. Candies and wrappers, chocolates and treats, all spewing out from you and spilling onto the floor, making a treasure trove of delights. You finally feel empty again, and Ace places you on the bartop. He picks up one of the chocolates and pops it in his mouth, before winking at Grizz. \"Told ya. Now just gotta do that a few dozen more times, and we're sorted for the festival!\"",
               "descriptionchange":"This adventurer is a living piñata. Their body is horselike, but short and stocky with stubby and clumsy limbs, and their head is oversized and silly. Instead of fur, they are covered all over with strips of colourful paper that rustle in the breeze.",
               "outcomes":[
                  {
                     "parameter":"species",
                     "quantity":50,
                     "change":"set"
                  },
                  {
                     "parameter":"festival_time",
                     "quantity":1,
                     "change":"add"
                  }
               ]
            }
         }
      },
      {
         "id":"macropotion",
         "title":"Try the Macro Brewery",
         "subtitle":"One item on the menu is marked as restricted. Macrobrewery special ale, only for sale in trade for twenty bottles of wine.",
         "type":"random",
         "requirements":[
            {
               "parameter":"wine_1",
               "value":20,
               "comparison":"greater"
            }
         ],
         "icon":"tffetish",
         "results":{
            "grizzsex":{
               "text":"Grizz grunts when you tell him you want to try the macro potion. He counts through your payment carefully, then turns and unlocks a small cabinet behind him. He draws out a glass bottle, and you can see that the fluid inside is swirling and pulsing, almost like it's straining against the glass of its container.</p>He leads you out of the bar and down the road, without explanation. You follow along behind him as he walks across the bridge, past the marketplace, and eventually all the way out into the fields. By the time you reach your destination you are tired and sweating from how far he's leading you.</p>He has taken you to an old field past the limits of the town. There's a few abandoned buildings and a large, empty barn, along with a lot of weeds growing everywhere. He turns and looks at you. \"Strip\", he says.</p>You hesitate for a moment, then start to pull off your clothes and hand them over. He takes them from you, folds them, and places them neatly aside. Once you are completely naked, he finally hands you the potion. As soon as you uncork it, it begins to bubble and froth up over the rim of the bottle. You quickly gulp it down, and Grizz backs away cautiously.</p></p>The first sign of it taking effect is a feeling of pressure and bubbling inside you. It's like you need to burp, but the feeling spreads throughout your whole body. You look down and see your feet starting to sink into the mud, as your body starts to grow taller, wider, and heavier. Grizz and the world around you look like they are shrinking. Your body aches, stretches and grows, and you quickly lean against something beside you for balance. You turn to see that the short wooden object you're resting against is actually a fully grown oak tree, and you are already towering over it!</p>You continue to grow, your vision quickly surpassing the treeline, and letting you see out across the valley. The village nearby looks like a model town, and the buildings near your feet are like child's playhouses. You reach down and touch the top of the abandoned farmhouse roof, and your hand knocks the tiles aside effortlessly. You accidentally crush the chimney with a brush of your hand, and the feeling gives you a strange, powerful rush.</p>You haven't finished growing, either. The little house is down to your hips, then soon to your knee. Your foot is covering much of an entire field, leaving a gigantic crater-like print in the mud. The trees look more like tall grass at most, and you step over and press your foot down. You feel the trunks and branches crunch and crumble under your weight, and that rush of excitement comes back once more. Unable to control yourself, you start laughing. The sound of your deep, titanic voice echoes across the valley. You raise your leg, and smash your foot down on the abandoned farmhouse. It resists slightly, the walls and timbers straining against you, before they crumble and crash down. The stone walls fall like wooden blocks, and scatter across the ground.</p></p>You turn to the barn next, and stomp over to it, the ground shaking beneath you. You step over it, straddling the once-large building, and sit down. It strains beneath your weight, before cracking down the middle and collapsing. You lie flat on your back, laughing at how easy it is to wreck things! You are a giant monster, an unstoppable beast! You can crush anything you want!</p>Your eyes wild and hungry, you clamber to your feet. You start stomping towards the village, but you feel a tingly, dizzy sensation as you do. The world around you starts to get bigger, trees growing up suddenly, the sky shrinking away. You growl with annoyance as your body shrinks and reduces back down to its normal height, and the sudden loss of your short-lived power causes you to stumble and trip.</p></p>Grizz walks over and returns your clothing, then leaves back along the road you came in on, without a word. You turn and look back at the dust clouds and scattered rubble of your playing, and for a brief moment you feel a strong desire to knock some stuff over, before the macro-high finally passes.",
               "outcomes":[
                  {
                     "parameter":"wine_1",
                     "quantity":20,
                     "change":"sub"
                  },
                  {
                     "parameter":"might",
                     "quantity":5,
                     "change":"add"
                  },
                  {
                     "parameter":"magic",
                     "quantity":5,
                     "change":"add"
                  }
               ]
            }
         }
      },
      {
         "id":"grizz_piss",
         "title":"Grizz's Piss",
         "subtitle":"You want to ask for a special brew today.",
         "type":"random",
         "requirements":[
            {
               "parameter":"pisscurse",
               "value":0,
               "comparison":"greater"
            }
         ],
         "icon":"grizzicon",
         "results":{
            "grizzpay":{
               "text":"\"What are ya havin\\'\", Grizz grunts. You turn to the barkeeper, not having intended to really buy anything right now, but before you can respond, your curse starts to feel warm and heavy in your chest. Your voice speaks without you meaning to, and you find yourself saying \"Piss!\"</p>You quickly cover your mouth, but it\\'s too late. Grizz just nods, and reaches forward over the bar, before grabbing hold of you and dragging you close to him. He shoves you onto your knees behind the bar, your face next to his heavy and musky cock. He shoves his thumb into your mouth to force it open, then rams his cock forward, and holds your face firmly against his crotch. You are left with your jaw aching around his shaft for a moment, before he starts to grunt, and you feel him relieve himself. His piss is very warm, and it flows directly down your throat and into your belly. You taste only a little at the back of your throat, and it is bitter and acrid. Your stomach seems to almost bulge and swell as the bear releases what feels like pints of urine into you, and your head feels foggy and dizzy. When he finally pulls free, and the last of his piss dribbles down your face, you hiccup and realise you are drunk!",
               "outcomes":[
                  
               ]
            }
         }
      },
      {
         "id":"dragonsbreath",
         "title":"Drink the Dragon's Breath",
         "subtitle":"The bar's most notorious brew, made from mostly apples. Mostly. It's not named that because it turns you into a dragon, or anything. It just tastes like drinking fire, and is about 5000 percent proof. Do not drink the Dragon's Breath.",
         "type":"random",
         "requirements":[
            
         ],
         "icon":"outcast",
         "results":{
            "mayor_intern":{
               "text":"You drink the Dragon's Breath, and immediately regret it. The almost acid-like booze burns every inch of you as it goes down. There is an aftertaste of apples, but mostly it tastes like medical alcohol that someone stepped in.</p></p>Your vision fuzzles. The world spins. You feel simultaneously like you are going to throw up and pass out. Possibly you do, one after the other.</p></p>You awaken some time later, in agony. Your mouth tastes like you swallowed a desert. Your head rings and aches with every sound, and the slightest light is like daggers in your eyes. You appear to be passed out in a gutter. You are wearing a pink tutu and what appears to be a bloodstained gorilla mask. You toss them aside, and stumble out into the street.</p></p>A path of carnage and graffiti surrounds you. Overturned carts, painted walls, the stink of urine and vomit. Everyone pointedly avoids you, and gives you disgusted looks. This isn't good.",
               "area":"dormaus_streets",
               "outcomes":[
                  {
                     "parameter":"outcast",
                     "quantity":5,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"mistthing2",
         "title":"The Curse Returns",
         "subtitle":"You feel a strange shuddering... (Contributed by Whitestripe)",
         "type":"statcheck",
         "stat":"magic",
         "difficulty":80,
         "requirements":[
            {
               "parameter":"oldcurse",
               "value":1,
               "comparison":"equal"
            },
            {
               "parameter":"grizz_connection",
               "value":0,
               "comparison":"greater"
            }
         ],
         "icon":"thevoid",
         "results":{
            "success":{
               "text":"You stumbled into the bear’s bar, feeling almost like something was guiding your feet, as though you weren’t fully in control of your body. Your head was throbbing, and in your chest, you were feeling warm, warm and….bubbly…..</p></p>But that was right….that was okay….you were nice and full. A big bottle of Boar Beer, ready to be guzzled up. You belonged…..belonged in a bar….this was….where you should be….</p></p>You freeze, shaking your head No. No. This wasn’t right. The curse. This was the curse’s magic at work, it was attacking your mind and body. You needed to fight, to resist it. </p></p>“Honestly, what’s a bottle doing just laying around here? Huh, must have fallen out of the delivery. Well, let’s get it back where it belongs. Hey Grizz, could you grab that one? My arms are full” </p></p>You freeze and turn as you see a large bear pointing towards you, one of Grizz’s helpers that he hires to unload goods on busy days. Grizz turns to look, and looks at you strangely. As if….you weren’t a person….like you were a thing. </p></p>And….had that other bear just called you a bottle? </p></p>You blink in shock, stumbling back as you see the bear’s large paw reaching towards you. You can feel a mental presence attacking you, trying to take over, command you to submit. To give yourself to this bear. He was your owner. You were nothing but a nice bubbly beer. A tasty beverage to quench someone’s thirst. To make them feel warm and buzzed. Nice and relaxed and happy. You shouldn’t be walking around, shouldn’t be thinking…..Good….good bottle…..</p></p>You sway a bit, a dopey smile coming to your face as you feel the bear’s paw grab you and lift you off the ground. Despite your weight, Grizz is able to pick up your whole body in one paw as he looks you up and down, licking his jaws. </p>Ace sees him holding you, and whistles. “Woah now, Boar Beer? That stuff is real rare, not to mention real tasty!” Ace says with a grin. “Surprised to see top-shelf stuff in a dive like this.” He says cheekily. Grizz growls, his thundering voice shaking the table and making the glasses wobble and shake. Ace winks at him. </p></p>As Grizz carried you, you could feel your thoughts shutting down, your mind fading into happy, almost bottle like thoughts. The desire to be drank from, to serve your purpose starting to fill you as the corruption slowly spreads through your body. But you try and push back. Thinking of all the time you had spent with Grizz. Working for him here in the bar. Of becoming a bear, just like him. And getting the chance to become a macro…..</p></p>Something within you seemed to push back against the corruption within you, as a pulse of white magic washed out of your body and into Grizz. The bear freezes in place, as though his mind was moving at lightning speed. </p></p>The bear let out a gasp, panting as he looked at you in surprise, like he hadn’t realised you were there at all.",
               "outcomes":[
                  {
                     "parameter":"oldcurse",
                     "quantity":2,
                     "change":"set"
                  }
               ]
            },
            "fail":{
               "text":"You stumbled into the bear’s bar, feeling almost like something was guiding your feet, as though you weren’t fully in control of your body. Your head was throbbing, and in your chest, you were feeling warm, warm and….bubbly…..</p></p>But that was right….that was okay….you were nice and full. A big bottle of Boar Beer, ready to be guzzled up. You belonged…..belonged in a bar….this was….where you should be….</p></p>You freeze, shaking your head No. No. This wasn’t right. The curse. This was the curse’s magic at work, it was attacking your mind and body. You needed to fight, to resist it. </p></p>“Honestly, what’s a bottle doing just laying around here? Huh, must have fallen out of the delivery. Well, let’s get it back where it belongs. Hey Grizz, could you grab that one? My arms are full” </p></p>You freeze and turn as you see a large bear pointing towards you, one of Grizz’s helpers that he hires to unload goods on busy days. Grizz turns to look, and looks at you strangely. As if….you weren’t a person….like you were a thing. </p></p>And….had that other bear just called you a bottle? </p></p>You blink in shock, stumbling back as you see the bear’s large paw reaching towards you. You can feel a mental presence attacking you, trying to take over, command you to submit. To give yourself to this bear. He was your owner. You were nothing but a nice bubbly beer. A tasty beverage to quench someone’s thirst. To make them feel warm and buzzed. Nice and relaxed and happy. You shouldn’t be walking around, shouldn’t be thinking…..Good….good bottle…..</p></p>You sway a bit, a dopey smile coming to your face as you feel the bear’s paw grab you and lift you off the ground. Despite your weight, Grizz is able to pick up your whole body in one paw as he looks you up and down, licking his jaws. </p>Ace sees him holding you, and whistles. “Woah now, Boar Beer? That stuff is real rare, not to mention real tasty!” Ace says with a grin. “Surprised to see top-shelf stuff in a dive like this.” He says cheekily. Grizz growls, his thundering voice shaking the table and making the glasses wobble and shake. Ace winks at him. </p></p>As he carried you, you could feel your thoughts shutting down, your mind fading into happy, almost bottle like thoughts. The desire to be drank from, to serve your purpose starting to fill you as the corruption slowly spreads through your body. This….this was how you were meant to be…..just….just a bottle of beer. That was….that was all you were…..just….drink….</p></p>You felt the bear carry you behind the bar, before pausing, taking a look at you for a moment, and licking his lips, as though considering. Then, he lifts your head up to his jaws. The top of your head slips into his jaws, as he gives a flick of his fangs, and there is a ‘popping’ sound, before the bear spits out a bottle cap. The bear lifting you back up and pushing your head against his muzzle as he begins to take deep drafts and you feel…..something...flowing out…..</p></p>Your body rapidly begins to harden. Smooth, solid glass forming over your body. Your arms and legs rapidly melting into your body, your large belly flattening down as you grow skinnier and skinnier, even as you shrink more and more in the bear’s grasp. Your head and face changing into the opening and neck of a bottle. </p></p>In a few moments, as the bear let out a sigh, licking his jaws as he pulled the half empty bottle of Royal Boar Beer away from his muzzle. He growls appreciatively, a flick of his paw causing the bottle to reseal itself. And with it, all memory of your actions or self was wiped from the world as you were set up onto a shelf. </p></p>Nothing but an ordinary bottle of beer in a bar. </p></p>And it was all you’d ever be again. </p></p>",
               "trapped_desc":"You are nothing but a bottle of delicious beer",
               "trapped":"You are nothing but a bottle of delicious beer",
               "outcomes":[
                  {
                     "parameter":"trapped",
                     "quantity":30,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"fixbeer",
         "title":"Mr Bat, Publican",
         "subtitle":"A smug bat sits beside the bar, late at night when most patrons are heading off for the day. Last orders are up.",
         "trapped":true,
         "type":"random",
         "requirements":[
            {
               "parameter":"trapped",
               "value":30,
               "comparison":"equal"
            }
         ],
         "icon":"mrbat",
         "results":{
            "footstool_1":{
               "text":"Grizz wipes a cloth around a glass, and looks out the window at the darkening evening. He rings a copper bell at the side of the bar, the sign for last orders before the bar closes.</p></p>A well-dressed bat sitting on one of the bar stools leans over, his tall top hat covering his eyes. “Ah, one more for the road my friend? Perhaps that bottle on the top shelf? The finest Boar Beer, I see. Fear not - money is no object for me.”</p></p>He raises a hand, and shining coins fall from his palm over the countertop. Grizz sweeps them into his paw, and reaches up, before handing over the bottle to the bat.</p></p>Mr Bat holds you firmly in his grip. His long fingers stroke over your smooth, cold glass. They touch and feel your papery, rough label, the moisture condensing on your cold body.</p></p>“This is awfully rude of me, considering you ended up like this by taking a shot designed to hurt me; but I simply cannot resist taking a shot myself”, he says. His thumb flicks open your top, sending a shudder of anticipation through you. Then he raises you to his lips, and allows a trickle of your cold, flavoursome beer to flow across his tongue. You feel part of yourself flowing into Mr Bat, drawn down into the dark abyss of his body. There is a shuddering, overpowering pleasure, followed by emptiness as part of you is absorbed and lost.</p></p>He places the bottle on the bar stool next to him. Then, in an instant, you stumble forward, your head hitting the bar. You stand up, swaying drunkenly, and struggling to think as your whole body suddenly and jarringly has blood, bones, flesh. Mr Bat has vanished, and Grizz pushes you out of the bar, assuming you’re simply another drunk.</p>",
               "freeTrap":true,
               "outcomes":[
                  
               ]
            }
         }
      }
   ],
   "npcs":[
      {
         "id":"grizz",
         "name":"Grizz",
         "description":"Grizz is an enormous musclebound bear, his powerful muscles coated by soft blubber and thick, heavy fur.",
         "icon":"grizzicon",
         "shop":{
            "trades":[
               "wine_1",
               "wine_2",
               "smart_potion",
               "dumb_potion"
            ],
            "buys":[
               
            ],
            "sells":[
               
            ]
         },
         "dialogue":[
            {
               "input":"What is your name?",
               "output":"\"Name\\'s Grizz.\""
            },
            {
               "input":"What is your job?",
               "output":"\"Barkeeper.\"</p>He stares at you like your question is incredibly stupid."
            },
            {
               "input":"See you later.",
               "output":"He just grunts at you."
            },
            {
               "input":"Can I see your cock?",
               "output":"He stares at you from under his hairy, brutish eyebrows, then reaches one hefty paw under the bar. With a grunt, he lifts up an enormous glistening black sausage of a cock, thicker than your arm. He drops it on the counter, the stink of bear crotch filling the bar, then pulls it back down between his legs."
            },
            {
               "input":"Can I touch your paws?",
               "output":"The bear grunts, and grabs a stool behind the bar, which he sits on. It creaks like it\\s on the verge of snapping in half under his weight. He lifts one of his feet and drops it on the bartop with a heavy THUMP. His enormous foot is bigger than your face, the sole completely covered with a thick, dark black pawpad. His long claws stick out from shaggy fur, and his foot is glistening with dirt and sweat. He pulls it back down and stands up like nothing happened."
            }
         ]
      }
   ]
}