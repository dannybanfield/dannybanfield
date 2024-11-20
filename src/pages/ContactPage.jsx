import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";
import Facebook from "~/assets/logo-facebook.png";
import Instagram from "~/assets/logo-instagram.png";
import YouTube from "~/assets/logo-youtube.png";
import SoundCloud from "~/assets/logo-soundcloud.png";

// const myEmailToken = "890b0197fdbaace202000e78f7eef3d1";  // "dev@appurist.com";
const myEmailToken ="544d940bc7cb7838bb03cddbb620c782";// "danny@dannybanfield.com";
const emailSubmitAction = `https://formsubmit.co/${myEmailToken}`;

export function ContactPage(props) {
  return (
    <div class="flex flex-col min-h-dvh bg-black text-white bg-gradient-to-b from-black to-yellow-900 to-90% pb-4">
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
                <a href="https://www.facebook.com/danny.banfield/" class="link">
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
                <a href="https://soundcloud.com/banfieldd" class="link">
                  <img src={SoundCloud} height="24" width="24" alt="SoundCloud" class="inline"></img>
                  <span class="ps-2 font-bold no-underline hidden xl:inline">Danny on SoundCloud</span>
                </a>
              </p>
            </div>

            {/* <div class="divider divider-horizontal hidden lg:inline" /> */}
            <div class="flex-col basis-1/2 font-thin my-4 text-left">
              <p class="flex-row py-2 text-3xl gradient-text text-center">Book A Show!</p>
              <p class="flex-row py-1">
                <em>Danny Banfield</em> offers a show for all budgets! Contact Danny through the <em>Book Me!</em> <a href="#book" class="link text-banfield">booking form</a> below!
              </p>
              <p class="flex-row py-2 text-3xl gradient-text text-center">Request A Song!</p>
              <p class="flex-row py-1">
                Want to make a special request for an upcoming show? Feel free to make a request through the <em>Live Show Song Request</em> <a href="#book" class="link text-banfield">request form</a>form below!
              </p>
            </div>
          </div>

          <div id="requests" class="divider mx-8 my-2" />
          {/* ---------- SONG REQUESTS & BOOKING ---------- */}
          <div class="flex flex-row flex-wrap lg:flex-nowrap text-left px-4">
            {/* ---------- SONG REQUEST ---------- */}
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
                <label for="message" class="text-white text-lg font-sans mt-3">What song(s) or artist(s) would you like to hear... and why? *</label>
                <input id="message" name="message" type="text" class="text-black text-lg font-sans w-full my-3" />
                <label for="when" class="text-white text-lg font-sans mt-3">Which of Danny's upcoming shows will you be attending?</label>
                <textarea name="when" id="when" class="text-black text-lg font-sans w-full my-3" />
                <button class="btn btn-warning w-40 text-xl mx-auto mt-3">Submit</button>
                <p class="text-white text-xs ">* required</p>
              </form>
            </div>

            <div id="book" class="divider divider-horizontal mx-1" />
            {/* ---------- BOOK ME ---------- */}
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
                    <label for="email" class="text-white text-lg font-sans">Email Address *</label>
                    <input id="email" name="email" type="email" class="text-black text-lg font-sans w-full my-3" />
                  </div>
                  <div class="flex flex-col w-1/2">
                    <label for="phone" class="text-white text-lg font-sans">Phone</label>
                    <input id="phone" name="phone" type="text" class="text-black text-lg font-sans w-full my-3" />
                  </div>
                </div>
                <label for="message" class="text-white text-lg font-sans mt-3">Message (please include as many details as possible) *</label>
                <textarea id="message" name="message" class="text-black text-lg font-sans w-full my-3" />
                <button class="btn btn-warning w-40 text-xl mx-auto mt-3">Submit</button>
                <p class="text-white text-xs ">* required</p>
              </form>
            </div>
          </div>

          <BackToTop />
        </main>
      </div>
    </div>
  );
}
