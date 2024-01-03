import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";
import DanInBar from "~/assets/DanInBar.png";
import Dan2 from "~/assets/Dan2.png";
import StarSVG from "~/assets/star.svg";
import ShipwrightPromo from "~/assets/Shipwright Promo 5.png";

const myEmailToken = "890b0197fdbaace202000e78f7eef3d1";  // "dev@appurist.com";
const emailSubmitAction = `https://formsubmit.co/${myEmailToken}`;

export function HomePage() {
  return (
    <div class="flex flex-col min-h-dvh bg-gradient-to-b from-black to-black to-90%">
      <div class="flex flex-col normal-container justify-around text-center m-0 p-0">
        <Navbar />
        <main>
          <div class="flex flex-row justify-evenly w-full text-lg my-8">
            <a href="#party" target="_self" class="btn max-w-32 pb-1 border-b">The Kitchen Party</a>
            <a href="#shows" target="_self" class="btn max-w-32 pb-1 border-b">Upcoming Shows</a>
            <a href="#bio" target="_self" class="btn w-28 border-b self-end">Bio</a>
            <a href="#requests" target="_self" class="btn max-w-32 border-b">Song Request</a>
          </div>
          <div class="flex flex-row text-amber-100 w-full justify-center font-bold sm:text-4xl md:text-7xl lg:text-8xl my-6">
            <span class="gradient-text">DANNY BANFIELD</span>
          </div>

          <div class="flex flex-row text-amber-100 w-full justify-evenly px-8 text-center gap-4">
            <div class="flex-col">
              <div class="text-2xl font-sans font-bold lg:mt-6">
                <span class="gradient-text">Classic Songs You Forgot You Loved</span>
              </div>
              <div class="text-white text-lg font-sans max-w-96 my-3">
                An engaging entertainer bringing you songs you forgot you loved, songs you've always loved,
                and songs you will grow to love. Requests and musical guests welcome!!
              </div>
              <a href="#book" target="_self" ><button class="btn btn-warning w-80 text-xl mt-4">Book Me!</button></a>
            </div>
            <div class="flex-col">
              <image src={DanInBar} class="rounded-xl" alt="Danny Banfield in the Bar" />
            </div>
          </div>

          <div id="party" class="divider gradient-text mx-8" />

          <div class="flex flex-row flex-wrap  w-full justify-evenly text-center px-4">
            <div class="flex flex-col basis-2/5 px-4">

              <div class="flex flex-col lg:flex-row">
                <div class="flex flex-col">
                  <div class="gradient-text text-3xl font-sans my-3">
                    The Kitchen Party
                  </div>

                  <div class="flex flex-col lg:flex-row mx-auto">
                    <div class="flex flex-col text-white text-lg font-sans mx-4 my-3">
                      <p>Shipwright Brewing Company</p>
                      <p>80 Montague Street,</p>
                      <p>Lunenburg</p>
                    </div>
                    <div class="flex flex-col text-center mx-4 justify-around">
                      <img src={StarSVG} class="bg-white w-8 h-8 my-2 mx-auto" alt="Star" />
                      <p>Every 2nd Friday</p>
                      <p>8:30pm</p>
                    </div>
                  </div>
                  <div class="flex flex-row my-5">
                    <image src={ShipwrightPromo} class="rounded-xl" style="max-height:480px;" alt="Danny Banfield in the Bar" />
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-row lg:flex-col md:basis-3/5 xl:mt-48 px-4 text-left text-md">
              Danny Banfield (Originals) - 10CC - Beatles - Blue Rodeo - Garth Brooks - Neil Young - Van Morrison - Jason Mraz - Looking Glass
              - Neil Diamond - Eagles - Trooper - James Taylor - Jimmy Buffett - Willie Nelson - Band - Lighthouse - Led Zeppelin - Monkees
              - Muppets - Michael Jackson - Stone Temple Pilots - Temptations - Nancy Sinatra - Warren Zevon - Steve Miller - Who - Ron Hynes
              - Prince – Hank Williams - Harry Chapin - Gordon Lightfoot - Cat Stevens - Joe Jackson - Tragically Hip - John Denver - Stampeders
              - U2 - Bruce Springsteen - Judy Garland - Kim Mitchell - Steelers Wheel - Oasis - Louis Armstrong - Billy Joel - The Police - Incubus
              - Johnny Cash - Old Crow Medicine Show - Partridge Family - Ramones - Seals & Crofts - Dr. Hook - Five Man Electrical Band - Phil Collins
              - Guns N' Roses - Alistair MacGillivray -  George Michael - America - Metallica - Steppenwolf - Lovin Spoonful - Glen Campbell
              - Dire Straits - AC/DC - Murray McLaughlin - Rush - Talking Heads - Don McLean - Doors - BJ Thomas - Lyle Lovett - April Wine - REM
              - Duran Duran - Tom Jones - The Cure - Journey - Kenny Rogers - Lynyrd Skynyrd - Doobie Brothers - John Mellencamp - Kool and the Gang
              - Tina Turner - Queen - Bryan Adams - Hall & Oates - Al Stewart - Alice Cooper - Alice in Chains - Pat Benatar - Valdy - Billy Idol
              - Peter Gabriel - Crowbar - Crowded House - INXS - Tom Petty & the Heartbreakers - Eurythmics - Black Crowes - Bob Marley - Boomtown Rats
              - Bruce Cockburn - BTO - Cake - The Cars – Aerosmith - ZZ Top - The Rolling Stones - Heart - David Bowie - Elton John - Rod Stewart
              - Stevie Wonder - Toto - Bob Seger - Fleetwood Mac - Dobie Gray - Deep Purple - Paul McCartney - Don Henley - Paul Simon - Tracy Chapman
              - Culture Club - Chicago - Men at Work - Pink Floyd - Robert Palmer - Kenny Loggins - Tears for Fears - B-52's - Boston - Joan Jett
              - Stevie Nicks - Sting - The Pretenders - The Clash - Squeeze - Styx - The Human League - Violent Femmes - Elvis Costello - Eddie Money
              - Loverboy - Crosby Stills Nash (& Young) - Aretha Franklin - UB 40 - Simple Minds - Earth Wind & Fire - KISS - Marvin Gaye - Spandau Ballet
              - Bonnie Raitt - Eric Clapton - Corey Hart - John Lennon - Red Hot Chili Peppers - Rick Springfield - Tom Waits - Chris De Burgh
              - AND MANY MORE!!!
            </div>
          </div>
          <BackToTop />

          <div id="shows" class="divider gradient-text mx-8" />

          <div class="flex flex-col w-full justify-evenly text-center px-4">
            <p class="text-3xl font-sansmy-3"><span class="gradient-text">Upcoming Shows</span></p>
            <p class="text-white text-lg font-sans my-3">Shipwright Brewing Company, December 22, 2023, 8:30pm</p>
            <p class="text-white text-lg font-sans my-3">
              Shipwright Brewing Company, January 5, 2024, 8:30pm
            </p>
            <p class="text-white text-lg font-sans my-3">
              and EVERY 2ND FRIDAY THEREAFTER!!
            </p>
          </div>
          <BackToTop />

          <div id="bio" class="divider gradient-text mx-8" />

          <div class="flex flex-row flex-wrap lg:flex-nowrap text-left px-4">
            <div class="flex flex-col px-4">
              <div class="flex flex-row my-3">
                <p class="text-3xl font-sans gradient-text">About Danny</p>
              </div>
              <div class="text-white text-lg font-sans">
                <p class="my-3">Danny Banfield has been entertaining since childhood, when he used his voice, a ukulele, and a box of rice for percussion to deliver a rockin' rendition of the Stampeders' "Sweet City Woman." It was his first offering in the Songversation that continues to this day. Countless house parties and basement jams in the North End of Halifax were a training ground for the young songster.</p>
                <p class="my-3">His work in radio in the '80s encouraged the start of his professional music career in the '90s. Initially performing with The Luv Handles and then fronting The Laughing Freemen, his passion has also extended into management, recording, publicity, tech, teaching, and consulting with many musical artists. He enjoys sharing his extensive industry experience with a new generation of performers.</p>
                <p class="my-3">Danny has started and maintained many musical relationships, largely due to his pure enjoyment of music: the songs, the artists, the history, and, in particular, the camaraderie and joy. He has been known to create parties from groups of strangers, encouraging an interactive, communal musical experience. Hosting numerous local jams and a 10-year stint at Long & McQuade further widened Danny's network of friends, fans, and jammers.</p>
                <p class="my-3">Whether solo, with an accompanist, or with the full band, Danny connects with an audience as if they were lifelong friends hanging in his living room. He has an uncanny ability to field requests for classic tracks...forever the spontaneous, witty, and professional showman with that uniquely identifiable rich, strong, expressive voice.</p>
                <p class="my-3">If you've booked Danny Banfield, be prepared to sing along with songs you forgot you loved. Get ready to dance about, goof around, and maybe even join in the musical fun! You can expect reminiscences, laughter, and new memories with new friends.</p>
                <p class="my-3">Sing you all there!!</p>
              </div>
            </div>

            <div class="flex flex-col px-4 justify-center mx-auto">
              <image src={Dan2} class="flex flex-col px-4 rounded-xl max-w-fit max-w-1/2" alt="Danny Performing" style="max-height: 640px;" />
            </div>
          </div>
          <BackToTop />

          <div id="requests" class="divider gradient-text mx-8" />

          <div class="flex flex-row flex-wrap lg:flex-nowrap text-left px-4">
            <div class="flex flex-col w-1/2 px-4">
              <p class="text-2xl font-sans font-bold lg:mt-6">
                <span class="gradient-text">Live Show Song Request</span>
              </p>
              <p class="text-white text-lg font-sans my-3">
                If you're planning to attend one of my shows, let me know songs and/or artists you'd like to hear.... and why!!
              </p>
              <form action={emailSubmitAction} method="POST" class="flex flex-col border border-solid border-1 p-5">
                <label for="name" class="text-white text-lg font-sans">What is your first name?</label>
                <input id="name" name="name" type="text" class="text-black text-lg font-sans w-full my-3" />
                <label for="message" class="text-white text-lg font-sans mt-3">What song(s) or artist(s) would you like to hear...and why?*</label>
                <input id="message" name="message" type="text" class="text-black text-lg font-sans w-full my-3" />
                <label for="when" class="text-white text-lg font-sans mt-3">Which of Danny's upcoming shows will you be attending?</label>
                <textarea name="when" id="when" class="text-black text-lg font-sans w-full my-3" />
                <button class="btn btn-warning w-40 text-xl mx-auto mt-3">Submit</button>
              </form>
            </div>

            <div id="book" class="divider divider-horizontal" />

            <div class="flex flex-col w-1/2 px-4">
              <p class="text-2xl font-sans font-bold lg:mt-6">
                <span class="gradient-text">Book Me!</span>
              </p>
              <p class="text-white text-lg font-sans my-3">
                Allow me to add some music, laughs and fond memories to your Private or business event.
                Solo, duo, or band - I can do a show for every budget.
                Please include details such as where, when, how many people, and times (all details subject to change).
              </p>
              <form action={emailSubmitAction} method="POST" class="flex flex-col border border-solid border-1 p-5">
                <div class="flex flex-row gap-4">
                  <div class="flex flex-col w-1/2">
                    <label for="firstname" class="text-white text-lg font-sans">First Name</label>
                    <input id="firstname" name="firstname" type="text" class="text-black text-lg font-sans w-full my-3" />
                  </div>
                  <div class="flex flex-col w-1/2">
                    <label for="lastname" class="text-white text-lg font-sans">Last Name</label>
                    <input id="lastname" name="lastname" type="text" class="text-black text-lg font-sans w-full my-3" />
                  </div>
                </div>
                <div class="flex flex-row gap-4">
                  <div class="flex flex-col w-1/2">
                    <label for="email" class="text-white text-lg font-sans">Email Address*</label>
                    <input id="email" name="email" type="email" class="text-black text-lg font-sans w-full my-3" />
                  </div>
                  <div class="flex flex-col w-1/2">
                    <label for="phone" class="text-white text-lg font-sans">Phone</label>
                    <input id="phone" name="phone" type="text" class="text-black text-lg font-sans w-full my-3" />
                  </div>
                </div>
                <label for="message" class="text-white text-lg font-sans mt-3">Message (please include as many details as possible)*</label>
                <textarea id="message" name="message" class="text-black text-lg font-sans w-full my-3" />
                <button class="btn btn-warning w-40 text-xl mx-auto mt-3">Submit</button>
              </form>
            </div>
          </div>
          <BackToTop />
          <div class="flex flex-row mb-8">
          </div>
        </main>
      </div>
    </div>
  );
}
