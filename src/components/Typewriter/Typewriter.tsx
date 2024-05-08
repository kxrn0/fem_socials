import SCTypewriter from "./Typewriter.styled.tsx";
import { For, createSignal, mergeProps, onCleanup, onMount } from "solid-js";

type Props = {
  words: string[];
  duration: number;
  delay?: number;
};

type CurrentType = {
  chars: string[];
  string: string;
};

export default function Typewriter(props: Props) {
  const merged = mergeProps({ delay: 0 }, props);
  const [seen, setSeen] = createSignal<string[]>([]);
  const [current, setCurrent] = createSignal<CurrentType>({
    chars: [],
    string: "alhazred",
  });
  const [state, setState] = createSignal<"w" | "d">("w");
  const [animeId, setAnimeId] = createSignal(0);

  onMount(() => {
    let prevTime = 0;
    setTimeout(() => anime, props.delay);

    function anime(timestamp: number) {
      const dt = timestamp - prevTime;

      if (dt >= props.duration!) {
        if (state() === "w") {
          if (current().chars.length === current().string.length) {
            setState("d");
          } else {
            setCurrent((prev) => ({
              ...prev,
              chars: [...prev.chars, prev.string[prev.chars.length]],
            }));
          }
        } else {
          if (!current().chars.length) {
            setState("w");
            setCurrent({ chars: [], string: "string" });
          } else {
            setCurrent((prev) => ({
              ...prev,
              chars: prev.chars.slice(0, prev.chars.length - 1),
            }));
          }
        }

        prevTime = timestamp;
      }

      setAnimeId(requestAnimationFrame(anime));
    }

    setAnimeId(requestAnimationFrame(anime));
  });

  onCleanup(() => {
    cancelAnimationFrame(animeId());
  });

  return (
    <SCTypewriter>
      "<For each={current().chars}>{(char) => <p class="pee">{char}</p>}</For>"
    </SCTypewriter>
  );
}
