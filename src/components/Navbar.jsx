import { useLocation, useNavigate, A } from "@solidjs/router";

export function Navbar() {
  const location = useLocation();
  const active = (path) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";

  return (
    <div data-theme="dark" class="navbar navtext flex-none w-100 bg-neutral-950">
      <div class="flex flex-col md:flex-row md:justify-evenly w-full text-lg">
        <A href="/" class={`border-b-2 ${active("/")}`}>
          HOME
        </A>
        <A href="/media" class={`border-b-2 ${active("/media")}`}>
          MEDIA
        </A>

        <A href="/contact" class={`border-b-2 ${active("/contact")}`}>
          CONTACT
        </A>
      </div>
    </div>
  );
}
