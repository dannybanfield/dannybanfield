import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";
import DanInBar from "~/assets/DanInBar.png";
import Dan2 from "~/assets/Dan2.png";
import StarSVG from "~/assets/star.svg";
import ShipwrightPromo from "~/assets/shipwright830a.png";

export function HomePage() {
  return (
    <div class="flex flex-col min-h-dvh bg-black text-white bg-gradient-to-b from-black to-yellow-900 to-90% pb-4">
      <div class="md:container md:mx-auto">
        <div class="flex flex-col normal-container justify-around text-center m-0 p-0 mb-8">
          <Navbar />
          <main>
            {/* ---------- TITLE AREA ---------- */}
            <div class="flex flex-row justify-evenly w-full text-lg my-8">
              <a href="#party" target="_self" class="btn max-w-32 pb-1 border-b">The Kitchen Party</a>
              <a href="#shows" target="_self" class="btn max-w-32 pb-1 border-b">Upcoming Shows</a>
              <a href="#bio" target="_self" class="btn w-28 border-b self-end">Bio</a>
              <a href="/contact/#requests" target="_self" class="btn max-w-32 border-b">Song Request</a>
              <a href="/contact/#book" target="_self" class="btn max-w-32 border-b">Book Me!</a>
            </div>
            <div class="flex flex-row text-amber-100 w-full justify-center font-bold sm:text-4xl md:text-7xl lg:text-8xl my-6">
              <span class="gradient-text font-thin">DANNY BANFIELD</span>
            </div>

            {/* ---------- CLASSIC SONGS INTRO ---------- */}
            <div class="flex flex-row text-amber-100 w-full justify-evenly px-8 text-center gap-4">
              <div class="flex-col">
                <div class="text-2xl font-sans font-bold lg:mt-6">
                  <span class="gradient-text">Classic Songs You Forgot You Loved</span>
                </div>
                <div class="text-white text-lg font-sans max-w-96 my-3">
                  An engaging entertainer bringing you songs you forgot you loved, songs you've always loved,
                  and songs you will grow to love. Requests and musical guests welcome!!
                </div>
                <a href="/contact/#book" target="_self" ><button class="btn btn-warning w-80 text-xl mt-4">Book Me!</button></a>
              </div>
              <div class="flex-col">
                <image src={DanInBar} class="rounded-xl" alt="Danny Banfield in the Bar" />
              </div>
            </div>

            {/* ---------- KITCHEN PARTY ---------- */}
            <div id="party" class="divider md:container gradient-text" />
            <div class="flex flex-row flex-wrap md:container justify-evenly text-center px-4">
              <div class="flex flex-col basis-2/5 px-4">

                <div class="flex flex-col lg:flex-row">
                  <div class="flex flex-col">
                    <div class="gradient-text text-3xl font-sans  my-3">
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
                      <image src={ShipwrightPromo} class="rounded-xl" style="max-height:480px;" alt="Kitchen Party Promo" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-row lg:flex-col md:basis-3/5 px-4 xl:mt-48 text-left text-sm">
                Danny Banfield (Originals) - 10CC - Beatles - Blue Rodeo - Garth Brooks - Neil Young - Van Morrison - Jason Mraz - Looking Glass
                - Neil Diamond - Eagles - Trooper - James Taylor - Jimmy Buffett - Willie Nelson - Band - Lighthouse - Led Zeppelin - Monkees
                - Muppets - Michael Jackson - Stone Temple Pilots - Temptations - Nancy Sinatra - Warren Zevon - Steve Miller - Who - Ron Hynes
                - Prince - Hank Williams - Harry Chapin - Gordon Lightfoot - Cat Stevens - Joe Jackson - Tragically Hip - John Denver - Stampeders
                - U2 - Bruce Springsteen - Judy Garland - Kim Mitchell - Steelers Wheel - Oasis - Louis Armstrong - Billy Joel - The Police - Incubus
                - Johnny Cash - Old Crow Medicine Show - Partridge Family - Ramones - Seals & Crofts - Dr. Hook - Five Man Electrical Band - Phil Collins
                - Guns N' Roses - Alistair MacGillivray -  George Michael - America - Metallica - Steppenwolf - Lovin Spoonful - Glen Campbell
                - Dire Straits - AC/DC - Murray McLaughlin - Rush - Talking Heads - Don McLean - Doors - BJ Thomas - Lyle Lovett - April Wine - REM
                - Duran Duran - Tom Jones - The Cure - Journey - Kenny Rogers - Lynyrd Skynyrd - Doobie Brothers - John Mellencamp - Kool and the Gang
                - Tina Turner - Queen - Bryan Adams - Hall & Oates - Al Stewart - Alice Cooper - Alice in Chains - Pat Benatar - Valdy - Billy Idol
                - Peter Gabriel - Crowbar - Crowded House - INXS - Tom Petty & the Heartbreakers - Eurythmics - Black Crowes - Bob Marley - Boomtown Rats
                - Bruce Cockburn - BTO - Cake - The Cars - Aerosmith - ZZ Top - The Rolling Stones - Heart - David Bowie - Elton John - Rod Stewart
                - Stevie Wonder - Toto - Bob Seger - Fleetwood Mac - Dobie Gray - Deep Purple - Paul McCartney - Don Henley - Paul Simon - Tracy Chapman
                - Culture Club - Chicago - Men at Work - Pink Floyd - Robert Palmer - Kenny Loggins - Tears for Fears - B-52's - Boston - Joan Jett
                - Stevie Nicks - Sting - The Pretenders - The Clash - Squeeze - Styx - The Human League - Violent Femmes - Elvis Costello - Eddie Money
                - Loverboy - Crosby Stills Nash (& Young) - Aretha Franklin  - KISS - Marvin Gaye - Spandau Ballet
                - Bonnie Raitt - Eric Clapton - Corey Hart - John Lennon - Red Hot Chili Peppers - Rick Springfield - Tom Waits - Chris De Burgh
                - and WHATEVER OTHER SONGS WE COME UP WITH IN THE SONVERSATION!!!
              </div>
            </div>
            <BackToTop />

            {/* ---------- UPCOMING SHOWS ---------- */}
            <div id="shows" class="divider border-white mx-8" />
            <div class="flex flex-col w-full justify-evenly text-center px-4">
              <p class="text-3xl font-sansmy-3"><span class="gradient-text">Upcoming Shows</span></p>
              <p class="text-white text-lg font-sans mt-3">Fri Feb 2, 16; Mar 1, 15, 29 2024 - KITCHEN PARTY -
              <a class="link hover:text-yellow-500" href="https://www.shipwrightbrewing.com/" target="_blank">
                  <span class="mx-1">Shipwright Taproom</span>
                </a> - Lunenburg, NS</p>
              <p class="text-white text-md font-sans mb-3">Every 2nd Friday indefinitely - 8:30-11:30pm</p>
              <p class="text-white text-lg font-sans mt-3">Sat Feb 3, Mar 2, Apr 6, May 4 2024 - SONGVERSATION - 
              <a class="link hover:text-yellow-500" href="https://www.kitchinn.com/bettys.html/" target="_blank">
                  <span class="mx-1">Betty's at The Kitch</span>
                </a> - Mahone Bay, NS</p>
              <p class="text-white text-md font-sans mb-3">1st Saturday of every month - 7-11pm</p>
              <p class="text-white text-lg font-sans mt-3">Fri Feb 23, 2024 - BANFIELD & BASTIAN - 
              <a class="link hover:text-yellow-500" href="https://www.facebook.com/stmargarets.legion/" target="_blank">
                  <span class="mx-1">Seabright Legion </span>
                </a>- Seabright, NS - 8-11pm</p>
              <p class="text-white text-md font-sans mb-3">$10 Cover - 19+ Event</p>
              <p class="text-white text-lg font-sans mt-3">Fri Mar 8, 2024 - 
              <a class="link hover:text-yellow-500" href="https://www.sackawa.ca/" target="_blank">
                  <span class="mx-1">Sackawa Canoe Club</span>
                </a> - Lower Sackville, NS - 7-10pm</p>
              <p class="text-white text-lg font-sans mt-3">Sat Mar 16, 2024 - 
              <a class="link hover:text-yellow-500" href="https://www.deerfieldpub.ca/" target="_blank">
                  <span class="mx-1">Deerfield Pub</span></a> - Hammonds Plains, NS - 7-10pm</p>
                <p class="text-white text-lg font-sans mt-3">Fri May 31, 2024 - 
              <a class="link hover:text-yellow-500" href="https://www.deerfieldpub.ca/" target="_blank">
                  <span class="mx-1">Deerfield Pub</span></a> - Hammonds Plains, NS - 7-10pm</p>
                <p class="text-white text-lg font-sans mt-3">Sat Aug 17, 2024 - 
              <a class="link hover:text-yellow-500" href="https://www.deerfieldpub.ca/" target="_blank">
                  <span class="mx-1">Deerfield Pub</span></a> - Hammonds Plains, NS - 7-10pm</p>
                <p class="text-white text-lg font-sans mt-3">Sat Oct 5, 2024 - 
              <a class="link hover:text-yellow-500" href="https://www.deerfieldpub.ca/" target="_blank">
                  <span class="mx-1">Deerfield Pub</span></a> - Hammonds Plains, NS - 7-10pm</p>
                <p class="text-white text-lg font-sans mt-3">Sat Dec 14, 2024 - 
              <a class="link hover:text-yellow-500" href="https://www.deerfieldpub.ca/" target="_blank">
                  <span class="mx-1">Deerfield Pub</span></a> - Hammonds Plains, NS - 7-10pm</p>
            </div>
            <BackToTop />

            {/* ---------- BIO - ABOUT DANNY ---------- */}
            <div id="bio" class="divider gradient-text mx-8" />
            <div class="flex flex-row flex-wrap lg:flex-nowrap text-left px-4">
              <div class="flex flex-col px-4">
                <div class="flex flex-row my-3">
                  <p class="text-3xl font-sans gradient-text">About Danny</p>
                </div>
                <div class="text-white text-lg font-sans">
                  <p class="my-3">Danny Banfield has been entertaining since childhood, when he used his voice, a ukulele, and a box of rice for percussion to deliver a rockin' rendition of the Stampeders' "Sweet City Woman." It was his first offering in the Songversation that continues to this day. Countless house parties and basement jams in the North End of Halifax were a training ground for the young songster.</p>
                  <p class="my-3">His work in radio (CJCH 920 AM) in the '80s encouraged the start of his professional music career in the '90s. Initially performing with The Luv Handles and then fronting The Laughing Freemen, his passion has also extended into management, recording, publicity, tech, teaching, and consulting with many musical artists. He enjoys sharing his extensive industry experience with a new generation of performers.</p>
                  <p class="my-3">Danny has started and maintained many musical relationships, largely due to his pure enjoyment of music: the songs, the artists, the history, and, in particular, the camaraderie and joy. He has been known to create parties from groups of strangers, encouraging an interactive, communal musical experience. Hosting numerous local jams and a 10-year stint at Long & McQuade further widened Danny's network of friends, fans, and jammers.</p>
                  <p class="my-3">Whether solo, with an accompanist, or with the full band, Danny connects with an audience as if they were lifelong friends hanging in his living room. He has an uncanny ability to field requests for classic tracks...forever the spontaneous, witty, and professional showman with that uniquely identifiable rich, strong, expressive voice.</p>
                  <p class="my-3">If you've booked Danny Banfield, be prepared to sing along with songs you forgot you loved. Get ready to dance about, goof around, and maybe even join in the musical fun! You can expect reminiscences, laughter, and new memories with new friends.</p>
                  <p class="my-3">SING YA THERE!!</p>
                </div>
              </div>

              <div class="flex flex-col justify-center mx-auto">
                <image src={Dan2} class="px-4 rounded-xl max-w-fit" alt="Danny Performing" style="max-height: 640px;" />
              </div>
            </div>

            <BackToTop />
          </main>
        </div>
      </div>
    </div>
  );
}
