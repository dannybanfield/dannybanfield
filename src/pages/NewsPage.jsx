import { Navbar } from "~/components/Navbar";
import { BackToTop } from "~/components/BackToTop";

export function NewsPage(props) {
  return (
    <div class="flex flex-col min-h-dvh bg-gradient-to-b from-black to-black to-90% pb-4">
      <div class="flex flex-col normal-container justify-around text-center m-0 p-0">
        <Navbar />
        <main>
          <div class="flex flex-row text-amber-100 w-full justify-center font-bold sm:text-4xl md:text-7xl lg:text-8xl my-6">
            <span class="gradient-text font-thin">NEWS + SOCIALS</span>
          </div>
          <div class="flex flex-row md:container md:mx-auto w-full justify-center text-white text-left text-xl my-6 px-8">
          </div>
          <BackToTop />
        </main>
      </div>
    </div>
  );
}
