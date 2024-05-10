import { mergeProps, onMount } from "solid-js";
import Vector from "./Vector.ts";
import Body from "./Body.ts";
import SCFireworks from "./Fireworks.styled.tsx";
import random from "../../utilities/random.ts";

type Props = {
  width?: number;
  height?: number;
};

export default function Fireworks(props: Props) {
  const merged = mergeProps({ width: innerWidth, height: innerHeight }, props);
  let canvas!: HTMLCanvasElement;

  onMount(() => {
    const context = canvas.getContext("2d")!;
    const gravity = new Vector(0, 1);
    let bodies: Body[] = [];

    function anime() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let body of bodies) {
        body.apply_force(gravity.clone().scale(body.mass));
        body.move();
        body.draw();
      }

      bodies = bodies.filter(
        (body) => body.position.y <= canvas.height + body.radius
      );

      requestAnimationFrame(anime);
    }

    function init() {
      canvas.width = merged.width;
      canvas.height = merged.height;

      canvas.addEventListener("click", (event) => {
        for (let i = 0; i < 100; i++) {
          const position = new Vector(event.clientX, event.clientY);
          const randomV = random(10, 20);
          const velocity = Vector.random_vector(randomV);
          const radius = random(1, 5);
          const mass = (Math.PI * Math.pow(radius, 3) * 4) / 3;
          const fillStyle = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(
            0,
            255
          )})`;
          const body = new Body(
            context!,
            position,
            velocity,
            radius,
            mass,
            fillStyle
          );

          bodies.push(body);
        }
      });

      requestAnimationFrame(anime);
    }

    init();
  });

  return <SCFireworks ref={canvas}></SCFireworks>;
}
