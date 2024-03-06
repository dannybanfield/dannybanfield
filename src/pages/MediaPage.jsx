import { createSignal, createEffect } from "solid-js";
import { useNavigate } from "@solidjs/router";

import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";
import { SpotifyTrack } from "~/components/SpotifyTrack";
import { SlideShow } from "~/components/SlideShow";

import img01 from "~/assets/portfolio/01-PromoPic.jpg";
import img02 from "~/assets/portfolio/02-danstage.webp";
import img03 from "~/assets/portfolio/03-shipwright830a.webp";
import img04 from "~/assets/portfolio/04-danchair.webp";
import img05 from "~/assets/portfolio/05-danpromo.webp";
import img06 from "~/assets/portfolio/06-danbar.webp";
import img07 from "~/assets/portfolio/07-band.webp";
import img08 from "~/assets/portfolio/08-Firks.jpg";
import img09 from "~/assets/portfolio/09-danguitar.webp";

const slides = [
  { src: img01, alt: "Danny Promo Pic" },
  { src: img02, alt: "Danny onstage" },
  { src: img03, alt: "Kitchen Party Promo" },
  { src: img04, alt: "Danny in a chair onstage" },
  { src: img05, alt: "Danny promo" },
  { src: img06, alt: "Danny in a bar" },
  { src: img07, alt: "The band onstage" },
  { src: img08, alt: "At Firkensteins Brewery" },
  { src: img09, alt: "Dan BW" },
];

export function MediaPage(props) {
  const [current, setCurrent] = createSignal(0);
  const [isOpen, setIsOpen] = createSignal(false);

  function Thumbnail(props) {
    const slide = slides[props.slide];
    console.log("Thumbnail", props.slide, slide);
    return (<>
      <button class="" onClick={() => openModal(props.slide)}>
        <img class="bg-white my-2" src={slide.src} alt={slide.alt} />
      </button>
    </>);
  }

  const MODAL_ID = "slide_show";
  function closeModal() {
    const modal = document.getElementById(MODAL_ID);
    modal.close();
    setIsOpen(false);
  }

  function openModal(slide) {
    console.log("openModal", slide);
    setCurrent(slide || 0);

    const wasOpen = isOpen();
    if (wasOpen) {
      closeModal();
    }

    const modal = document.getElementById(MODAL_ID);
    setIsOpen(true);
    modal.showModal();
  }

  const navigate = useNavigate();
  createEffect(() => {
    console.log("navigating to slide", current());
    navigate("#slide" + current(), { replace: true });
  });


  return (<>
    <div class="flex flex-col min-h-dvh bg-black text-white bg-gradient-to-b from-black to-yellow-900 to-90% pb-4">
      <div class="flex flex-col normal-container justify-around text-center m-0 p-0">
        <Navbar />
        <main class="px-5">
          <div class="flex flex-row text-amber-100 w-full justify-center font-bold sm:text-4xl md:text-7xl lg:text-8xl my-6">
            <span class="gradient-text font-thin">MEDIA</span>
          </div>
          <div class="flex flex-row w-full text-lg my-8">
            <div class="flex flex-row w-full justify-center gap-12">
              <a href="#music" target="_self" class="btn max-w-32 pb-1 border-b">Music</a>
              <a href="#photos" target="_self" class="btn max-w-32 pb-1 border-b">Photos</a>
              <a href="#videos" target="_self" class="btn w-28 border-b self-end">Videos</a>
            </div>
          </div>
          <div class="flex flex-row text-white w-full justify-center md:text-xl my-6">
            An engaging entertainer bringing you classic songs from all genres. Songs to sing to, songs to dance to, songs you forgot you loved!
          </div>

          <dialog id={MODAL_ID} class="modal justify-center">
            <div class="modal-box w-11/12 max-w-5xl m-0 p-0 justify-center overflow-hidden">
              <SlideShow slides={slides} index={current()} />
              <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
            </div>
          </dialog>
          <div id="music" class="gradient-text text-3xl font-sans my-3">
            Music
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-right text-l my-6 px-8 gap-4">
            <div class="flex-col basis-1/2">
              <p class="flex-row py-2">
                My 1st single release is available on all streaming platforms!
              </p>
              <p class="flex-row py-2">
              My close friends and family have been singing along to this song for decades - the Coal Miner's Symphony - a piece I wrote around 1981/82 while attending Waterloo University.....and missing home so much. This is a new recording, featuring Rob Willis on electric guitar.
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
              <SpotifyTrack track="7l8y00YBfJv7i3SUIR4jqA" title="Coal Miner's Symphony on Spotify" />
            </div>
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-right text-l my-6 px-8 gap-4">
            <div class="flex-col basis-1/2">
              <p class="flex-row py-2">
                Of Christmas was written in 2022 by Lana Keddy and myself, and feature's Lana's golden voice. We had a blast producing this!
              </p>
              <p class="flex-row py-2">
                It's available on all streaming platforms as well. Please feel free to add to your holiday playlist, and share with your friends.
              </p>
            </div>
            <div class="flex-col basis-1/2">
              <SpotifyTrack track="3hf5ytEhNG5C2bqmgOkSAf" title="Of Christmas on Spotify" />
            </div>
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-right text-l my-6 px-8 gap-4">
            <div class="flex-col basis-1/2">
              <p class="flex-row py-2">
              A song inspired by homelessness in the late 80's - a mosaic of characters.
              </p>
              <p class="flex-row py-2">
              The vibe was influenced by Elvis Costello. 
              </p>
            </div>
            <div class="flex-col basis-1/2">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/75148132&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/banfieldd" title="Danny Banfield" target="_blank" style="color: #cccccc; text-decoration: none;">Danny Banfield</a> · <a href="https://soundcloud.com/banfieldd/poverty-and-providence" title="Poverty and Providence" target="_blank" style="color: #cccccc; text-decoration: none;">Poverty and Providence</a></div>
            </div>
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-right text-l my-6 px-8 gap-4">
            <div class="flex-col basis-1/2">
              <p class="flex-row py-2">
                This is Lanalanalana...practically impossible not to sing along with...kinda like Lana!
              </p>
              <p class="flex-row py-2">
              If you know Lana, this song epitomizes the amazingness of her joyous, giving, loving, caring and playful ways. 
              </p>
              <p class="flex-row py-2">
              Written and recorded in 2023
              </p>
            </div>
            <div class="flex-col basis-1/2">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1609378077&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
              </iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/banfieldd" title="Danny Banfield" target="_blank" style="color: #cccccc; text-decoration: none;">Danny Banfield</a> · <a href="https://soundcloud.com/banfieldd/lanalanalana" title="Lanalanalana" target="_blank" style="color: #cccccc; text-decoration: none;">Lanalanalana</a></div>
            </div>
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-right text-l my-6 px-8 gap-4">
            <div class="flex-col basis-1/2">
              <p class="flex-row py-2">
              Porcupine was written by Terry Saunders, my childhood friend, and bandmate in The Luv Handles 
              from about 1993 to 2005 (pictured - L to R - Gary Greer, Brian Smeltzer, Howard Mclean, 
              Terry Saunders....and me).
              </p>
              <p class="flex-row py-2">
              The Luv Handles recorded this song back at the turn of the millenium. 
              This is my try at this crazy gem of a song! 
              </p>
            </div>
            <div class="flex-col basis-1/2">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/749860198&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/banfieldd" title="Danny Banfield" target="_blank" style="color: #cccccc; text-decoration: none;">Danny Banfield</a> · <a href="https://soundcloud.com/banfieldd/porcupinejan26-2020" title="Porcupine" target="_blank" style="color: #cccccc; text-decoration: none;">Porcupine</a></div>
            </div>
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-right text-l my-6 px-8 gap-4">
            <div class="flex-col basis-1/2">
              <p class="flex-row py-2">
              Written in the early 90's....about a dude in my hood that was let out of jail (names have been changed, of course),
               and the lynch mob scene that ensued as he tried to integrate back into society.
              </p>
              <p class="flex-row py-2">
              It's too easy for things to get carried away...to escalate. It's a trap that's hard to fall out of. 
              </p>
            </div>
            <div class="flex-col basis-1/2">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/75149466&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/banfieldd" title="Danny Banfield" target="_blank" style="color: #cccccc; text-decoration: none;">Danny Banfield</a> · <a href="https://soundcloud.com/banfieldd/warlock-hunt" title="Warlock Hunt" target="_blank" style="color: #cccccc; text-decoration: none;">Warlock Hunt</a></div>
            </div>
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-right text-l my-6 px-8 gap-4">
            <div class="flex-col basis-1/2">
              <p class="flex-row py-2">
              A goofy ditty from decades ago. 
              </p>
              <p class="flex-row py-2">
              Your heartbeat is comprised of many instruments.
              </p>
            </div>
            <div class="flex-col basis-1/2">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/75147060&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/banfieldd" title="Danny Banfield" target="_blank" style="color: #cccccc; text-decoration: none;">Danny Banfield</a> · <a href="https://soundcloud.com/banfieldd/another-part-of-your-heartbeat" title="Another Part of your Heartbeat" target="_blank" style="color: #cccccc; text-decoration: none;">Another Part of your Heartbeat</a></div>
            </div>
          </div>
          
          <BackToTop />
          <div id="photos" class="gradient-text text-3xl font-sans my-3">
            Photos
          </div>
          <div id="photos" class="flex flex-row px-4 md:px-0 md:container md:mx-auto text-white w-full justify-center md:text-xl mx-8 my-6 gap-4">
            <div class="flex flex-col basis-1/4">
              <Thumbnail src={slides[0].src} slide={0} />
              <Thumbnail src={slides[1].src} slide={1} />
            </div>
            <div class="flex flex-col basis-1/4">
              <Thumbnail src={slides[2].src} slide={2} />
              <Thumbnail src={slides[3].src} slide={3} />
              <Thumbnail src={slides[8].src} slide={8} />
            </div>
            <div class="flex flex-col basis-1/4">
              <Thumbnail src={slides[4].src} slide={4} />
            </div>
            <div class="flex flex-col basis-1/4">
              <Thumbnail src={slides[5].src} slide={5} />
              <Thumbnail src={slides[6].src} slide={6} />
              <Thumbnail src={slides[7].src} slide={7} />
            </div>
          </div>

          <div id="videos" class="gradient-text text-3xl font-sans my-3">
            Videos
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-left text-xl my-6 px-8 gap-4">
          <div class="flex-col basis-1/3">
            <iframe width="400" height="225" src="https://www.youtube.com/embed/dBGMgJocSgU?si=eOdxCD4CzPu0vZ5K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="flex-col basis-1/3">
              <iframe width="400" height="225" src="https://www.youtube.com/embed/oOpE-3ogXsQ?si=b8StClpDQYfaGzXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="flex-col basis-1/3">
              <iframe width="400" height="225" src="https://www.youtube.com/embed/ZkzpaRkbdQY?si=pDM5_S8ilMUwKvOt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <BackToTop />
        </main>
      </div>
    </div>
  </>);
}
