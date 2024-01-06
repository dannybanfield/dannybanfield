import { createSignal, createEffect } from "solid-js";
import { useNavigate } from "@solidjs/router";

import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";
import { SpotifyTrack } from "~/components/SpotifyTrack";
import { SlideShow } from "~/components/SlideShow";

import img01 from "~/assets/01-danguitar.webp";
import img02 from "~/assets/02-danstage.webp";
import img03 from "~/assets/03-shipwright830a.webp";
import img04 from "~/assets/04-danchair.webp";
import img05 from "~/assets/05-danpromo.webp";
import img06 from "~/assets/06-danbar.webp";
import img07 from "~/assets/07-band.webp";

const slides = [
  { src: img01, alt: "Danny performing" },
  { src: img02, alt: "Danny onstage" },
  { src: img03, alt: "Kitchen Party Promo" },
  { src: img04, alt: "Danny in a chair onstage" },
  { src: img05, alt: "Danny promo" },
  { src: img06, alt: "Danny in a bar" },
  { src: img07, alt: "The band onstage" },
];

export function InfoPage(props) {
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
    <div class="flex flex-col min-h-dvh bg-gradient-to-b from-black to-black to-90% pb-4">
      <div class="flex flex-col normal-container justify-around text-center m-0 p-0">
        <Navbar />
        <main class="px-5">
          <div class="flex flex-row text-amber-100 w-full justify-center font-bold sm:text-4xl md:text-7xl lg:text-8xl my-6">
            <span class="gradient-text font-thin">PORTFOLIO</span>
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

          <div class="flex flex-row px-4 md:px-0 md:container md:mx-auto text-white w-full justify-center md:text-xl mx-8 my-6 gap-4">
            <div class="flex flex-col basis-1/4">
              <Thumbnail src={slides[0].src} slide={0} />
              <Thumbnail src={slides[1].src} slide={1} />
            </div>
            <div class="flex flex-col basis-1/4">
              <Thumbnail src={slides[2].src} slide={2} />
              <Thumbnail src={slides[3].src} slide={3} />
            </div>
            <div class="flex flex-col basis-1/4">
              <Thumbnail src={slides[4].src} slide={4} />
            </div>
            <div class="flex flex-col basis-1/4">
              <Thumbnail src={slides[5].src} slide={5} />
              <Thumbnail src={slides[6].src} slide={6} />
            </div>
          </div>

          <div class="gradient-text text-3xl font-sans my-3">
            Videos
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-left text-xl my-6 px-8 gap-4">
            <div class="flex-col basis-1/2">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/oOpE-3ogXsQ?si=b8StClpDQYfaGzXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="flex-col basis-1/2">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ZkzpaRkbdQY?si=pDM5_S8ilMUwKvOt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>

          <div class="gradient-text text-3xl font-sans my-3">
            Music
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
  </>);
}
