import { For } from "solid-js";

function Slide(props) {
  let prev = (props.index == 0) ? props.slides.length - 1 : props.index - 1;
  let next = (props.index == props.slides.length - 1) ? 0 : props.index + 1;
  let slide = props.slides[props.index];
  console.log("Slide", prev, props.index, next, slide.src);
  return (<>
    <div id={"slide" + props.index} class="carousel-item relative h-auto w-full overflow-hidden justify-center p-0">
      <img src={slide.src} class="object-contain" alt={props.alt} />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={"#slide" + prev} class="btn btn-circle border-yellow-100">❮</a>
        <a href={"#slide" + next} class="btn btn-circle  border-yellow-100">❯</a>
      </div>
      {/* <div class="absolute flex w-full justify-around mx-auto text-thin text-2xl text-amber-100 ">
        {slide.alt}
      </div> */}
    </div>
  </>);
}

export function SlideShow(props) {
  console.log("SlideShow", props);
  return (<>
    <div class="carousel">
      <For each={props.slides}>
        {(slide, index) => (<Slide slides={props.slides} index={index()} />)}
      </For>
    </div>
  </>);
}
