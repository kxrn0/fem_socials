import { styled } from "solid-styled-components";

const SCApp = styled("div")`
  --black: #141414;
  --dark-gray: #1f1f1f;
  --gray: #333333;
  --neon-green: #c4f82a;
  --n: 1;
  --delay: 0;
  --time-unit: 0.33s;
  --x: 0;
  --y: 0;

  background: var(--black);
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow-x: hidden;

  .fs-title,
  .fs-body,
  .fs-body-bold {
    font-family: inter;
  }

  .fs-title {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
  }

  .fs-body-bold,
  .fs-body {
    font-size: 14px;
    line-height: 21px;
  }

  .fs-body-bold {
    font-weight: 700;
  }

  .fs-body {
    font-weight: 400;
  }

  .anime-enter {
    transform: translate(var(--x), var(--y));
    animation: enter-anime var(--duration) forwards;
    animation-delay: var(--delay);

    @keyframes enter-anime {
      from {
        transform: translate(var(--x), var(--y));
      }

      to {
        transform: translate(0, 0);
      }
    }
  }

  .anime-appear {
    animation: appean-anime var(--duration) forwards;
    animation-delay: var(--delay);

    @keyframes appear-anime {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }

  .anime-expand {
    transform: scale(0.05, 0.05);
    transform-origin: top center;

    animation: expand-anime var(--duration) forwards;
    animation-delay: var(--delay);

    & > * {
      opacity: 0;
      animation: appear-anime var(--duration) forwards;
      animation-delay: calc(var(--delay) + var(--duration));
    }

    @keyframes expand-anime {
      from {
        transform: scale(0.05, 0.05);
      }

      50% {
        transform: scale(1, 0.05);
      }

      to {
        transform: scale(1, 1);
      }
    }
  }

  @keyframes blink {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export default SCApp;
