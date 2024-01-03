import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";
import Facebook from "~/assets/logo-facebook.png";
import Instagram from "~/assets/logo-instagram.png";
import YouTube from "~/assets/logo-youtube.png";
import SoundCloud from "~/assets/logo-soundcloud.png";

export function ContactPage(props) {
  return (
    <div class="flex flex-col min-h-dvh bg-gradient-to-b from-black to-black to-90% pb-4">
      <div class="flex flex-col normal-container justify-around text-center m-0 p-0">
        <Navbar />
        <main>
          <div class="flex flex-row text-amber-100 w-full justify-center font-bold sm:text-4xl md:text-7xl lg:text-8xl my-6">
            <span class="gradient-text font-thin">CONTACT</span>
          </div>
          <div class="flex flex-col md:flex-row flex-wrap md:container md:mx-auto w-full justify-center text-white text-left text-xl my-6 px-8">
            <div class="flex-col basis-1/4 font-mono">
              <p class="py-2 text-3xl font-sans gradient-text">Direct Contact</p>
              <a href="mailto:danny@dannybanfield.com?subject=Website Contact" class="block py-1">
                danny@dannybanfield.com
              </a>
              <a href="tel:1-902-499-0831" class="block py-1">902-499-0831</a>
              <a href="https://www.instagram.com/dannybanfield" class="block py-1">@DannyBanfield</a>
            </div>

            {/* <div class="divider divider-horizontal hidden md:inline" /> */}
            <div class="flex flex-col basis-1/4 px-8 gap-2">
              <p class="flex-row py-2 text-3xl gradient-text text-center">Social Media</p>
              <p class="bg-banfield text-black text-sm rounded-xl p-2 self-center max-w-32 xl:max-w-fit">
                <a href="https://www.instagram.com/dannybanfield" class="link">
                  <img src={Instagram} height="24" width="24" alt="Instagram" class="inline"></img>
                  <span class="ps-2 font-bold no-underline hidden xl:inline">Danny on Instagram</span>
                </a>
              </p>
              <p class="bg-banfield text-black text-sm rounded-xl p-2 self-center max-w-32 xl:max-w-fit">
                <a href="https://www.facebook.com/dannybanfieldmusic" class="link">
                  <img src={Facebook} height="24" width="24" alt="Facebook" class="inline"></img>
                  <span class="ps-2 font-bold no-underline hidden xl:inline">Danny on Facebook</span>
                </a>
              </p>
              <p class="bg-banfield text-black text-sm rounded-xl p-2 self-center max-w-32 xl:max-w-fit">
                <a href="https://www.youtube.com/user/DannyBanfield" class="link">
                  <img src={YouTube} height="24" width="24" alt="YouTube" class="inline"></img>
                  <span class="ps-2 font-bold no-underline hidden xl:inline">Danny on YouTube</span>
                </a>
              </p>
              <p class="bg-banfield text-black text-sm rounded-xl p-2 self-center max-w-32 xl:max-w-fit">
                <a href="https://www.facebook.com/dannybanfieldmusic" class="link">
                  <img src={SoundCloud} height="24" width="24" alt="SoundCloud" class="inline"></img>
                  <span class="ps-2 font-bold no-underline hidden xl:inline">Danny on SoundCloud</span>
                </a>
              </p>
            </div>

            {/* <div class="divider divider-horizontal hidden lg:inline" /> */}
            <div class="flex-col basis-1/2 font-thin my-4 text-left">
              <p class="flex-row py-1">
                Are you looking to hire a party band? Danny is lead vocalist and guitarist for <em>The Laughing Freemen</em>.
                The Freemen play a special blend of classic rock/ pop/ new wave/ funk/ Motown/ country.
              </p>
              <p class="flex-row py-1">
                Theme shows (60s, 70s, 80s, CanCon, Acoustic Pop, etc) and interactive "join the band" parties are also options
                when booking The Freemen. Special songs and/or requests are welcome.
              </p>
              <p class="flex-row py-1">
                Visit <a class="link text-banfield" href="https://www.laughing-freemen.com/">laughing-freemen.com</a> to learn more.
              </p>
            </div>
          </div>
          <div class="flex flex-col md:container md:mx-auto w-full text-center text-white text-left text-xl my-6 px-8">
            <p class="flex-row py-2 text-3xl gradient-text text-center">Book Me!</p>
            <p class="flex-row py-1">
              <em>The Laughing Freemen</em> offer a show for all budgets! Contact Danny through <a href="http://localhost:3000/#book" class="link text-banfield">the Book Me! form</a>.
            </p>
          </div>
          <BackToTop />
        </main>
      </div>
    </div>
  );
}
