import { styled } from "solid-styled-components";

const SCApp = styled("div")`
  --duration: 0.33s;
  --black: #141414;
  --dark-gray: #1f1f1f;
  --gray: #333333;
  --neon-green: #c4f82a;

  background: var(--black);
  display: grid;
  place-items: center;
  min-height: 100vh;

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
`;

export default SCApp;
