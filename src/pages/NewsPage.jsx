import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";
import SocialFB from "~/assets/news/FBcurrent.jpg";
import SocialIG from "~/assets/news/DB IG.webp";
import SocialYT from "~/assets/news/DB YT.webp";
import SocialSC from "~/assets/news/DB SC.webp";

export function NewsPage(props) {
  return (
    <div class="flex flex-col min-h-dvh bg-black text-white bg-gradient-to-b from-black to-yellow-900 to-90% pb-4">
      <div class="flex flex-col normal-container justify-around text-center m-0 p-0">
        <Navbar />
        <main class="mx-auto">
          <div class="flex flex-row text-amber-100 w-full justify-center font-bold sm:text-4xl md:text-7xl lg:text-8xl my-6">
            <span class="gradient-text font-thin">NEWS + SOCIALS</span>
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-left text-xl my-6 px-8">
          </div>

          <div class="flex flex-col md:container my-6 px-8">
            <p class="w-full mx-auto lg:w-3/4 py-1">
              <a href="https://www.facebook.com/dannybanfieldmusic" class="link">
                <img src={SocialFB} alt="Facebook"></img>
              </a>
            </p>
            <p class="w-full mx-auto lg:w-3/4 py-1">
              <a href="https://www.instagram.com/dannybanfield" class="link">
                <img src={SocialIG} alt="Instagram"></img>
              </a>
            </p>
            <p class="w-full mx-auto lg:w-3/4 py-1">
              <a href="https://www.youtube.com/user/DannyBanfield" class="link">
                <img src={SocialYT} alt="YouTube"></img>
              </a>
            </p>
            <p class="w-full mx-auto lg:w-3/4 py-1">
              <a href="https://www.facebook.com/dannybanfieldmusic" class="link">
                <img src={SocialSC} class="w-full" alt="SoundCloud"></img>
              </a>
            </p>
          </div>
          <BackToTop />
        </main>
      </div>
    </div>
  );
}
