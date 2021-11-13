{
        "title": "ping_cavern",
        "header": "Cavern Entrance",
        "mapId": "dormausvillage.jpg",
        "position": [-1,-1],
        "subheader": "The cavern entrance is a relatively small round room acting as the buffer between the cave and the “outside world.” The stone walls of the cave abruptly merge and fade into walls of tightly packed soil supported by old splintering wooden beams, creating the look of an excavated mine shaft. The dirt walls themselves end in a rusted metal door. Sunlight and a slight draft of air stream in from around the door, giving the conclusion that it leads to out of the cave.",
        "events": [{
            "id": "gotopatron",
            "title": "West Further into The Cavern",
            "subtitle": "The path back into the cavern is still open. You can see the flickering of fire inside.",
            "type": "random", //or random
            "requirements": [
                
            ],
            "icon": "navigateicon",
            "results": {
                "success": { 
                    "text": "The way back through is as uneventful as before, leading you back, further into the cavern.",
                    "area": "contributor_1_2",
                    "outcomes": []
                }
            }
        },{
            "id": "entrance_south",
            "title": "East to the Outside",
            "subtitle": "The only thing preventing you from going to the outside is the metal door at the end of the room. It looks fairly rusted over, but thick and sturdy. It looks like it would normally open outward, but the handle of the door lies on the ground in front of it, having rusted off seemingly years ago, making it impossible to open normally. You’ll have to find a way to open it if you want to get out of this cave system.",
            "type": "statcheck", //or random
            "stat": "might",
            "difficulty": 20,
            "requirements": [
            ],
            "icon": "navigateicon",
            "results": {
                "success": { 
                    "text": "You try to push on the door, but it refuses to budge an inch, instead the rusted metal stands firm in its place. It seems to be stuck, the apparent years of degradation making it inoperable. But still you try to get it open. You back up a little bit, and gain a running start, slamming into the door with all your weight. The scrap metal of the door relents and in flings open with you running out into the outside. You are only outside for a few moments before you hear a loud metal “Clang!” and turn to see the door having shut behind you.",
                    "area": "ping_forest",
                    "outcomes": []
                },
                "fail": { 
                    "text": "You try to push on the door, but it refuses to budge an inch, instead the rusted metal stands firm in its place. It seems to be stuck, the apparent years of degradation making it inoperable. But still you try to get it open. You proceed to attempt to put your weight against it, slamming your body in the hopes of breaking it open, but still it doesn’t budge; in the end, you are left with a sore shoulder and a door that remains shut.",
                    "outcomes": []
                }
            }
        },{
            "id": "guest_fursuit",
            "title": "The Abandoned Pickaxe",
            "subtitle": "As you pass through the cavern you feel your foot kick something on the ground. You look down and see a pickaxe that you didn’t notice before. Despite a layer of dirt and dust sprinkled on top of it, it looks to be in almost pristine condition. Looking at it, the metal seems to almost gleam a golden hue in the dark and the handle seems to be a dark black, making the whole thing look both peculiar and valuable. You could take it for yourself, but you get a little bit of an ominous feeling from it.",
            "type": "random",
            "requirements": [
                {
                    "parameter": "species",
                    "value": 60,
                    "comparison": "nequal" //default greater
                }
            ],
            "icon": "tffetish",
            "results": {
                "grizzsex": {
                    "text": "You bend over to pick up the pickaxe, and your hand grasps around the handle of it. Instantaneously, a jolt of energy rushes through your arm, simultaneously freezing cold and burning hot, you recoil harshly. However, your hand doesn’t leave the pickaxe, instead it grasps with a firm grip of its own accord. You shake your arm with a feeling of dread, trying to loosen the accursed pick from your hand, but instead your hand grips tighter, the strange hot-cold feeling moving to the rest of your body.</p>\tThe pickaxe starts to radiate glowing wisps of golden light as you shake it violently. Said wisps start to curl around your arm a little like vines on a tree trunk, and rapidly grow about your body. As it does so, your fear begins to slowly subside, unnaturally so. Calm washing over the very fiber of your being. Eventually you stop, the tendrils of light going over most of your body, you feel as if you should still be panicking but something seems to block this feeling. In fact, all you feel is emptiness, as if every emotion is being blocked and replaced by nothing. In less than a minute your whole body is wrapped in these ghostly tendrils, and with a flash the tendrils disappear replaced by something else.</p>\tAbove your skin sits a ghostly illusion of an anthropomorphic mole. You can see your own body through this apparition, but for some reason it looks more real to you than your own body. Looking at yourself, the ghostly image that appears to have covered your body seems to be one of a male anthropomorphic mole in miner’s clothes. An imposing figure, his body large and stout. His fur is a dark brown, appearing to be a coarse and rough, with his hands ending in sharp claws designed for digging through dirt and stone. Lastly, his face despite the small beady eyes looks weathered and rough.</p>\tFor a few seconds you stand there still and silent, then the apparition speaks, as it does your mouth moves wordlessly with it. In a deep and slightly slurred voice he says, “Break time’s over, time to get back to work…” You watch as your body moves as he does, devoid of your own control. Your body turns and walks back into the cavern going down a path that you could have sworn that you never have seen before. Pickaxe in hand you go down this new passage until you reach a dead-end. Without any pause you lift the pick up high and swing it down, beginning to dig away at the stone. </p>\tHours pass without you realizing, the only important thing before you being the work done with your body as a tool. You focus entirely on the rise and fall of the pick, the sounds it makes as it chips away at the stone, the little progress that is being made. You don’t even notice as the apparition of the mole man fades away as your hands shift into similarly clawed digits. Minutes later, the same happens with your arms, the illusion fading away leaving them changed into the chubby yet muscular arms of the mole. As you work, more and more the ghostly image disappears and more and more your body changes to match what was once there, until what stands there is a near identical copy.</p>\tAfter a few more hours of mining without rest, you finally stop, your arms aching from the constant work. You look at the progress you made, having mined a few meters in the last few hours. You feel an odd sense of satisfaction detached from you but still welling inside of you. You then mumble, in a similar voice to before, “Break time…” And again, like before, you walk not of your own accord. You walk slowly back to the entrance of the cavern, your tired feet dragging against the stone. Once you finally are back at the entrance, your grip on the pickaxe loosens and it falls to the ground with a clatter. Instantly all of your emotions return with a rush of energy. You are back in control again, and a little shaken by the experience. Turning around the pickaxe is conspicuously gone, only an imprint in the dirt.",
                    "descriptionchange": "This adventurer is a stocky mole, with muscular arms built for mining but also possessing a soft rotund belly.",
                    "outcomes": [
                        {
                            "parameter": "species",
                            "quantity": 60,
                            "change": "set"
                        }
                    ]
                }
            }
        },{
            "id": "loitering",
            "title": "Loitering",
            "subtitle": "You could take a small break to catch a breath before going further into the cavern system or going above ground.",
            "type": "random",
            "requirements": [
                
            ],
            "icon": "random",
            "results": {
                "1": {
                    "text": "As you take a small breather, sitting on the, admittedly uncomfortable, ground, you begin to hear squeaking noises coming from deep in the cave. The noises are high pitched, evoking the image of a swarm of bats approaching as the noises get louder. This wouldn’t be so strange except you can’t seem to remember seeing any bats, or even signs of them, when you were spelunking.  The squeaking gets louder and louder as it seemingly gets closer until finally the cave grows extremely quiet.</p>\tA minute passes with nothing happening, so you reckon that the beasts probably found a different way out of this hole, or at least you do until a shadowy figure seems to stand at the edge of the archway. It resembles one of the bat anthros you would see walking among the denizens of Dormaus, and not unlike Mr. Bat in shape, a little skinnier and taller than average but otherwise a normal build, except somehow, despite the light coming into the chamber you can not seem to make out any more details about the fellow. His shadowy form giving off an almost sinister vibe. He speaks first, his voice smooth and deep, having a very gentlemanly accent to it, “Why welcome my taciturn friend, what would bring such a delectable individual such as yourself into my humble abode?” </p>\tYou are about to respond to his peculiar statement when he answers for you, “Why of course, it’s to sample paradise, how could I be so negligent to my guest?” Two red orbs appear in the head of the shadow. Glowing, piercing, enthralling. For some reason you can move your gaze away from them, something about them being so… enticing… The shadow moves forward, walking into the light but still not gaining form, not that you could care, the only thing mattering being those red orbs. Those beautiful red eyes. As he walks no sound is made, no imprint in the dirt, as if he was a phantom that existed only in the world of your mind. </p>\tHe walks up to you, those red orbs hovering barely a few inches away from your face. Your gaze still transfixed, your mind only thinking on how beautiful they are, how perfect they are, how you could just keep looking at them forever… He stands there for a moment before the orbs lower, moving forward and then out of view. An immense sadness filling you as you can’t see them anymore while at the same time feeling like you couldn’t move gaze cause those eyes wouldn’t want you to. </p>\tYour obedience is soon rewarded by two pinpricks of pain in your neck followed by an immense feeling of warmth and happiness overcoming you. You don’t quite know why but you are full of vitality and life, whatever the shadow did feels amazing. The sensation of heat travels down from your neck and through your body, your breathing getting excited as well as the rest of you. The shadow then speaks again for a final time, “Oh my, you are a surprisingly tasty one, I’ll be sure to find you again…” At the last word your staring ends, your body slumping as if you were held up by strings, the only sound left in the cave being your haggard, pleasure filled breathing. The shadow that left you like this being seemingly gone.",
                    "outcomes": [
                        
                    ]
                },
                "2": {
                    "text": "You stand around for a few moments in the cavern and soon notice a small glint of light in the ground near your feet. You look down and spot something you could not believe you didn’t notice before: A perfectly cut diamond the size of your fist. It looks unbelievable, enough so to arouse your suspicions. You bend down to pick it up to look at it closer but as you do, more and more shining diamonds appear around you. Veins of the stone going up the walls and even jutting out of the dirt. You blink, and the scenery changes. Not just diamonds around you but gold, rubies, sapphires, emeralds embedded into walls of gold. You stare in awe, thoughts of wealth inadvertently racing through your mind. You blink once more, and then everything is back to normal, the first diamond just a dirt covered rock and the walls unfortunately just dirt and stone. You lightly kick it away in mild frustration, wondering why you saw such an illusion.",
                    "outcomes": [
                        
                    ]
                },
                "3": {
                    "text": "Nothing happens. It is boring. You reminisce on the fact that usually something happens if you just wait around.",
                    "outcomes": [
                        
                    ]
                },
                "4": {
                    "text": "You hear music in the distance. The song is familiar, but you can’t quite remember the name of it. You don’t know from where it is playing but after a few minutes of listening to it, it fades back into silence. ",
                    "outcomes": [
                        
                    ]
                }
            }
        }],
        "npcs": []
    }