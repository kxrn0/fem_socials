import { createSignal, mergeProps, onCleanup, onMount } from "solid-js";
import SCGrid from "./Grid.styled.tsx";
import Vector from "../../utilities/Vector.ts";
import is_point_in_circle from "../../utilities/is_point_in_circle.ts";
import { createNoise3D } from "simplex-noise";
import clamp from "../../utilities/clamp.ts";

type Props = {
  distance?: number;
};

type Dot = {
  position: Vector;
  strength: number;
};

export default function Grid(props: Props) {
  const merged = mergeProps({ distance: 100 }, props);
  const [animeId, setAnimeId] = createSignal(-1);
  let canvas!: HTMLCanvasElement;

  onMount(() => {
    const noise = createNoise3D();
    const context = canvas.getContext("2d")!;
    const dots: Dot[] = [];
    const width = innerWidth / merged.distance;
    const height = innerHeight / merged.distance;
    const mouse = new Vector(innerWidth / 2, innerHeight / 2);

    function draw_dots(dots: Dot[], context: CanvasRenderingContext2D) {
      for (let dot of dots) {
        context.beginPath();
        context.fillStyle = `rgb(50, 255, 100, ${dot.strength})`;
        context.arc(dot.position.x, dot.position.y, 1, 0, Math.PI * 2);
        context.fill();
      }
    }

    function update_dots(dots: Dot[], z: number) {
      for (let dot of dots) {
        const ds = noise(dot.position.x / 250, dot.position.y / 250, z) / 100;

        dot.strength = clamp(dot.strength + ds, 0, 1);
      }
    }

    function anime(timestamp: number) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      draw_dots(dots, context);
      update_dots(dots, timestamp / 1000);

      setAnimeId(requestAnimationFrame(anime));
    }

    function init() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;

      for (let x = 0; x < width; x++)
        for (let y = 0; y < height; y++) {
          const position = new Vector(x * merged.distance, y * merged.distance);
          const strength = 0;
          const dot = { position, strength };

          dots.push(dot);
        }

      canvas.addEventListener("mousemove", (event) => {
        const center = new Vector(event.clientX, event.clientY);
        const circle = { radius: 50, center };

        for (let dot of dots) {
          if (is_point_in_circle(dot.position, circle)) {
            dot.strength = Math.min(1, dot.strength + 0.05);
          }
        }

        mouse.copy(center);
      });

      setAnimeId(requestAnimationFrame(anime));
    }

    init();
  });

  onCleanup(() => cancelAnimationFrame(animeId()));

  return <SCGrid ref={canvas}></SCGrid>;
}
