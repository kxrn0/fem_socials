import { createSignal, mergeProps, onCleanup, onMount } from "solid-js";
import Vector from "../../utilities/Vector.ts";
import Body from "../../utilities/Body.ts";
import SCFireworks from "./Fireworks.styled.tsx";
import random from "../../utilities/random.ts";

type Props = {
  width?: number;
  height?: number;
  popDuration?: number;
  popDelay?: number;
  initialPosition?: Vector;
  distance?: number;
};

export default function Fireworks(props: Props) {
  const merged = mergeProps(
    {
      width: innerWidth,
      height: innerHeight,
      popDuration: 0,
      popDelay: 0,
      initialPosition: new Vector(0, 0),
      distance: 0,
    },
    props
  );
  const [animeId, setAnimeId] = createSignal(-1);
  let canvas!: HTMLCanvasElement;

  onMount(() => {
    const context = canvas.getContext("2d")!;
    const gravity = new Vector(0, 0.25);
    let bodies: Body[] = [];
    let prevTime: number, startTime: number;

    function pop() {
      const x = random(-merged.distance, merged.distance);
      const y = random(-merged.distance, merged.distance);
      const u = new Vector(x, y);
      const position = Vector.add(u, merged.initialPosition);

      for (let i = 0; i < 250; i++) {
        const velocity = Vector.random_vector(random(1, 10));
        const radius = random(1, 3);
        const mass = (Math.PI * Math.pow(radius, 3) * 4) / 3;
        const red = random(0, 255);
        const green = random(0, 255);
        const blue = random(0, 255);
        const alpha = 1;
        const fillStyle = { red, green, blue, alpha };
        const body = new Body(
          context,
          position,
          velocity,
          radius,
          mass,
          fillStyle
        );

        bodies.push(body);
      }
    }

    function anime(timestamp: number) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      const diff = Date.now() - startTime;

      if (merged.popDuration > 0) {
        if (diff <= merged.popDuration) {
          const dt = timestamp - prevTime;

          if (dt >= merged.popDelay) {
            pop();

            prevTime = timestamp;
          }
        }
      }

      for (let body of bodies) {
        body.apply_force(gravity.clone().scale(body.mass));
        body.move();
        body.draw();
        body.fillStyle.alpha = Math.max(0, body.fillStyle.alpha - 0.01);
      }

      bodies = bodies.filter(
        (body) =>
          body.position.y <= canvas.height + body.radius ||
          body.fillStyle.alpha == 0
      );

      if (merged.popDuration > 0 && diff > merged.popDuration && !bodies.length)
        return;

      setAnimeId(requestAnimationFrame(anime));
    }

    function init() {
      canvas.width = merged.width;
      canvas.height = merged.height;

      prevTime = 0;
      startTime = Date.now();

      setAnimeId(requestAnimationFrame(anime));
    }

    init();
  });

  onCleanup(() => cancelAnimationFrame(animeId()));

  return <SCFireworks ref={canvas}></SCFireworks>;
}
