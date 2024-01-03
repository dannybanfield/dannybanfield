import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export function NotFoundPage() {
  return (<>
    <Title>404 - Not Found | Marketplace</Title>
    <div class="h-dvh text-gray-700 bg-neutral-700">
      <main class="text-center mx-autop-4">
        <h1 class="max-6-xs text-6xl text-orange-500 font-thin uppercase my-16">
          Not Found
        </h1>
        <p class="mt-8 text-base-content">
          Sorry, the page you were looking for could not be found.
        </p>
        <p class="mt-8 text-base-content">
          You can choose one of the links below, or the navigation bar above.
        </p>
        <p class="my-4">
          <A href="/" class="text-sky-300 hover:underline">
            <button class="btn btn-sm btn-primary text-lg">Home</button>
          </A>
        </p>
      </main>
    </div>
  </>);
}
