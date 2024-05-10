import { createStore } from "solid-js/store";
import SCTypewriter from "./Typewriter.styled.tsx";
import { For, createSignal, mergeProps, onCleanup, onMount } from "solid-js";

type Props = {
  words: string[];
  duration?: number;
  delay?: number;
  pause?: number;
};

export default function Typewriter(props: Props) {
  const merged = mergeProps({ delay: 0, duration: 100, pause: 0 }, props);
  const [seen, setSeen] = createStore<string[]>([]);
  const [current, setCurrent] = createStore({ chars: [""], string: "" });
  const [state, setState] = createSignal<"w" | "d">("w");
  const [animeId, setAnimeId] = createSignal(0);

  onMount(() => {
    let prevTime = 0;

    function select_word() {
      if (seen.length === merged.words.length) setSeen([]);

      let count;

      count = 0;
      while (count++ < 1e3) {
        const index = ~~(Math.random() * merged.words.length);
        const word = merged.words[index];

        if (!seen.includes(word)) {
          setSeen(seen.length, word);
          setCurrent({ chars: [], string: word });

          break;
        }
      }
    }

    function anime(timestamp: number) {
      const dt = timestamp - prevTime;

      if (dt >= merged.duration) {
        if (state() === "w") {
          if (current.chars.length === current.string.length) setState("d");
          else {
            const lastChar = current.string[current.chars.length];
            const chars = [...current.chars, lastChar];

            setCurrent("chars", chars);
          }
        } else {
          if (!current.chars.length) {
            setState("w");
            select_word();
          } else {
            const chars = current.chars.slice(0, current.chars.length - 1);

            setCurrent("chars", chars);
          }
        }

        prevTime = timestamp;

        if (state() === "d" && current.chars.length === current.string.length) {
          prevTime += merged.pause;
        }
      }

      setAnimeId(requestAnimationFrame(anime));
    }

    function init() {
      select_word();

      setAnimeId(requestAnimationFrame(anime));
    }

    setTimeout(init, merged.delay);
  });

  onCleanup(() => {
    cancelAnimationFrame(animeId());
  });

  return (
    <SCTypewriter>
      <For each={current.chars}>
        {(char) => <pre class="fs-body">{char}</pre>}
      </For>
      <div class="cursor"></div>
    </SCTypewriter>
  );
}
