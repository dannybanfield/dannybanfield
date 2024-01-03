import { Navbar } from "~/components/Navbar";

export function InfoPage(props) {
  return (
    <div class="flex flex-col min-h-dvh bg-gradient-to-b from-black to-black to-90%">
      <div class="flex flex-col normal-container justify-around text-center m-0 p-0">
        <Navbar />
        <main>
          Info Page
          {props.children}
        </main>
      </div>
    </div>
  );
}
