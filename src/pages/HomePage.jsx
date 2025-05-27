import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";
import DanInBar from "~/assets/DanBar.webp";
import Dan2 from "~/assets/Dan2.png";
import MapIcon from "~/assets/map.svg";
import ShipwrightPromo from "~/assets/shipwright830a.png";
import SundaySociablePromo from "~/assets/sundaysociablepromo.png";
import Facebook from "~/assets/logo-facebook.png";
import Instagram from "~/assets/logo-instagram.png";
import YouTube from "~/assets/logo-youtube.png";
import SoundCloud from "~/assets/logo-soundcloud.png";
import Logo from "~/assets/Logo.png";

export function HomePage() {
  return (
    <div class="flex flex-col min-h-dvh min-w-80 bg-black text-white bg-gradient-to-b from-black to-yellow-900 to-90% pb-4">
      <div class="md:container md:mx-auto">
        <div class="flex flex-col normal-container justify-around text-center m-0 p-0 mb-8">
          <Navbar />
          <main>
            {/* ---------- TITLE AREA ---------- */}
            <div class="flex flex-row justify-evenly w-full text-lg my-4">
              <a href="#news" target="_self" class="btn btn-ghost max-w-24 pb-1 border-b">News</a>
              <a href="#shows" target="_self" class="btn btn-ghost max-w-24 pb-1 border-b">Calendar</a>
              <a href="#bio" target="_self" class="btn btn-ghost max-w-24 border-b self-end">Bio</a>
              <a href="/contact/#requests" target="_self" class="btn btn-ghost max-w-24 border-b">Requests!</a>
              <a href="/contact/#book" target="_self" class="btn btn-ghost max-w-24 border-b">Book Me!</a>
            </div>
            <div class="flex flex-row text-amber-100 w-full justify-center font-bold sm:text-4xl md:text-7xl lg:text-8xl mt-6 mb-4">
              <span class="gradient-text font-medium">DANNY BANFIELD</span>
            </div>

            {/* ---------- SOCIAL MEDIA LINKS ---------- */}
            <div class="flex flex-row mx-auto w-full gap-3 justify-center mb-4">
              <div class="bg-banfield text-black text-sm rounded-xl p-3">
                <a href="https://www.instagram.com/dannybanfield" target="_blank" class="link">
                  <img src={Instagram} height="20" width="20" alt="Instagram" class="inline"></img>
                  <span class="ps-2 font-bold no-underline hidden xl:inline">Instagram</span>
                </a>
              </div>
              <div class="bg-banfield text-black text-sm rounded-xl p-3">
                <a href="https://www.facebook.com/danny.banfield/" target="_blank" class="link">
                  <img src={Facebook} height="20" width="20" alt="Facebook" class="inline"></img>
                  <span class="ps-2 font-bold no-underline hidden xl:inline">Facebook</span>
                </a>
              </div>
              <div class="bg-banfield text-black text-sm rounded-xl p-3">
                <a href="https://www.youtube.com/user/DannyBanfield" target="_blank" class="link">
                  <img src={YouTube} height="20" width="20" alt="YouTube" class="inline"></img>
                  <span class="ps-2 font-bold no-underline hidden xl:inline">YouTube</span>
                </a>
              </div>
              <div class="bg-banfield text-black text-sm rounded-xl p-3">
                <a href="https://soundcloud.com/banfieldd" target="_blank" class="link">
                  <img src={SoundCloud} height="20" width="20" alt="SoundCloud" class="inline"></img>
                  <span class="ps-2 font-bold no-underline hidden xl:inline">SoundCloud</span>
                </a>
              </div>
            </div>


            {/* ---------- CLASSIC SONGS INTRO ---------- */}
            <div class="flex flex-row flex-wrap gap-8 lg:flex-nowrap text-amber-100 w-full justify-evenly px-8 my-6 text-center gap-4">
              <div class="flex-col items-center">
                <div class="flex justify-center">
                  <image src={Logo} alt="Danny Banfield Logo" width="256" />
                </div>
                <div class="text-2xl font-sans font-bold my-2">
                  <span class="gradient-text">Classic Songs You Forgot You Loved</span>
                </div>
                <a href="/contact/#book" target="_self">
                  <button class="btn btn-warning w-80 text-xl my-3">Book Me!</button>
                </a>
                <div class="text-white text-lg font-sans max-w-96 my-2">
                  An engaging entertainer with a golden voice, and a HUGE repertoire of songs you forgot you loved, songs you've always loved,
                  and songs you will grow to love...originals and covers. Requests and musical guests welcome!!
                </div>
              </div>
              <div class="flex-col items-center w-full md:flex-col">
                <image src={DanInBar} class="rounded-xl w-full max-w-[888px]" alt="Danny Banfield in the Bar" />
              </div>
            </div>

            <div class="divider md:container gradient-text" />
            <div id="artists-list" class="flex flex-row lg:flex-col px-4 text-left text-sm">
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

            {/* ---------- NEWS: SUNDAY SOCIABLE & KITCHEN PARTY ---------- */}
            <div class="divider md:container gradient-text" />
            <div id="news" class="flex flex-row flex-wrap md:container justify-evenly text-center px-4">
              <div id="promo-list" class="flex flex-col px-4 w-full">
                <div id="events-list" class="flex flex-col lg:flex-row lg:justify-around lg:gap-8">
                  <div id="sunday-sociable" class="flex flex-col lg:basis-1/2">
                    <div class="gradient-text text-4xl font-sans my-3">
                      The Sunday Sociable
                    </div>
                    <div class="gradient-text text-lg font-sans">
                      Danny hosts every second Sunday
                    </div>
                    <div class="gradient-text text-lg font-sans">
                      Alternate Sundays hosted by Doug Hawco, and Thompson & Middleton
                    </div>

                    <div class="flex flex-col lg:flex-row text-left mx-auto mt-3">
                      <div class="flex flex-col lg:text-right text-white">
                        <p>Eli + Trix</p>
                        <p>Every 2nd Sunday</p>
                        <p>2-4pm</p>
                      </div>
                      <div class="flex flex-col lg:text-left lg:mx-4 justify-around">
                        <p>538 Main St.</p>
                        <p>Mahone Bay, NS</p>
                        <a class="flex flex-row items-center" href="https://maps.app.goo.gl/iMw1rdYAUJ8TWNZj7" target="_blank">
                          <span>See on map</span>
                        <img src={MapIcon} class="w-6 h-6 mx-2" alt="See location on Google Maps" />
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-row justify-center mt-5">
                      <image src={SundaySociablePromo} class="rounded-xl" style="max-height:480px;" alt="Sunday Sociable Promo" />
                    </div>
                  </div>
                  <div id="kitchen-party" class="flex flex-col lg:basis-1/2">
                    <div class="gradient-text text-4xl font-sans my-3">
                      The Kitchen Party
                    </div>
                    <div class="gradient-text text-lg font-sans">
                      Danny hosts every second Friday
                    </div>
                    <div class="gradient-text text-lg font-sans">
                      Have a songversation with Danny!
                    </div>

                    <div class="flex flex-col lg:flex-row text-left mx-auto mt-3">
                      <div class="flex flex-col lg:text-right text-white">
                        <p>Shipwright Brewing Company</p>
                        <p>Every 2nd Friday</p>
                        <p>8:30pm</p>
                      </div>
                      <div class="flex flex-col lg:mx-4 justify-around">
                        <p>80 Montague Street,</p>
                        <p>Lunenburg</p>
                        <a class="flex flex-row items-center" href="https://maps.app.goo.gl/YHAWWwhQmE9dMrrWA" target="_blank">
                          <span>See on map</span>
                          <img src={MapIcon} class="w-6 h-6 mx-2" alt="See location on Google Maps" />
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-row justify-center mt-5">
                      <image src={ShipwrightPromo} class="rounded-xl" style="max-height:480px;" alt="Kitchen Party Promo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BackToTop />

            {/* ---------- CALENDAR ---------- */}
            <div class="divider md:container gradient-text" />
            <div class="gradient-text text-4xl font-sans my-3">
              Danny's Calendar
            </div>

            <div id="shows" class="elfsight-app-d96db166-c337-4517-b382-6f4f7f33ac5b mt-4" data-elfsight-app-lazy></div>
            <BackToTop />

            {/* ---------- BIO - ABOUT DANNY ---------- */}
            <div id="bio" class="divider gradient-text mx-8" />
            <div class="flex flex-row flex-wrap lg:flex-nowrap text-left px-4">
              <div class="flex flex-col px-4">
                <div class="flex flex-row my-3">
                  <p class="text-3xl font-sans gradient-text">About Danny Banfield</p>
                </div>
                <div class="text-white text-lg font-sans">
                  <p class="my-3"><em>Danny Banfield</em> has been entertaining since childhood, when he used his voice, a ukulele, and a box of rice for percussion to deliver a rockin' rendition of the Stampeders' "Sweet City Woman." It was his first offering in the Songversation that continues to this day. Countless house parties and basement jams in the North End of Halifax were a training ground for the young songster.</p>
                  <p class="my-3">His work in radio (CJCH 920 AM) in the '80s encouraged the start of his professional music career in the '90s. Initially performing with <em>The Luv Handles</em> and then fronting <em>The Laughing Freemen</em>, his passion has also extended into management, recording, publicity, tech, teaching, and consulting with many musical artists. He enjoys sharing his extensive industry experience with a new generation of performers.</p>
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
