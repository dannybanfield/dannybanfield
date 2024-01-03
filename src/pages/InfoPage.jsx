import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";
import { SpotifyTrack } from "~/components/SpotifyTrack";

import img01 from "~/assets/01-danguitar.webp";
import img02 from "~/assets/02-danstage.webp";
import img03 from "~/assets/03-shipwright2.webp";
import img04 from "~/assets/04-danchair.webp";
import img05 from "~/assets/05-goldenyears.webp";
import img06 from "~/assets/06-danpromo.webp";
import img07 from "~/assets/07-danX6.webp";
import img08 from "~/assets/08-danbar.webp";
import img09 from "~/assets/09-band.webp";

export function InfoPage(props) {
  return (
    <div class="flex flex-col min-h-dvh bg-gradient-to-b from-black to-black to-90% pb-4">
      <div class="flex flex-col normal-container justify-around text-center m-0 p-0">
        <Navbar />
        <main>
          <div class="flex flex-row text-amber-100 w-full justify-center font-bold sm:text-4xl md:text-7xl lg:text-8xl my-6">
            <span class="gradient-text font-thin">PORTFOLIO</span>
          </div>
          <div class="flex flex-row text-white w-full justify-center md:text-xl my-6">
            An engaging entertainer bringing you classic songs from all genres. Songs to sing to, songs to dance to, songs you forgot you loved!
          </div>
          <div class="flex flex-row md:container md:mx-auto text-white w-full justify-center md:text-xl mx-8 my-6 gap-4">
            <div class="flex flex-col basis-1/4">
              <img src={img01} class="bg-white my-2" alt="Danny performing" />
              <img src={img02} class="bg-white my-2" alt="Danny onstage" />
            </div>
            <div class="flex flex-col basis-1/4">
              <img src={img03} class="bg-white my-2" alt="Kitchen Party Promo" />
              <img src={img04} class="bg-white my-2" alt="Danny in a chair onstage" />
            </div>
            <div class="flex flex-col basis-1/4">
              <img src={img05} class="bg-white my-2" alt="The Laughing Freemen perform Golden Years" />
              <img src={img06} class="bg-white my-2" alt="Danny promo" />
            </div>
            <div class="flex flex-col basis-1/4">
              <img src={img07} class="bg-white my-2" alt="Six-track Danny" />
              <img src={img08} class="bg-white my-2" alt="Danny in a bar" />
              <img src={img09} class="bg-white my-2" alt="The band onstage" />
            </div>
          </div>

          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-left text-xl my-6 px-8 gap-4">
            <div class="flex-col basis-1/2">
              <p class="flex-row py-2">
                My 1st single release is now available on all streaming platforms!
              </p>
              <p class="flex-row py-2">
              For those who know me, you've been singing along to this song for decades - the Coal Miner's Symphony - a piece I wrote while going to school in Ontario, and missing home so much. This is a new recording, featuring Rob Willis on electric guitar.
              </p>
              <p class="flex-row py-2">
                That's right; Spotify, Google, Apple, Amazon, Pandora....you can listen to it on all of the above, and more!
              </p>
              <p class="flex-row py-2">
                Please share at will, and add to your playlists!!
              </p>
              <p class="flex-row py-2">
                Enjoy!
              </p>
            </div>
            <div class="flex-col basis-1/2">
              <SpotifyTrack track="4EXgkS7mmjZ0pFaEIBso8i" title="Coal Miner's Symphony on Spotify" />
            </div>
          </div>
          <BackToTop />
        </main>
      </div>
    </div>
  );
}
