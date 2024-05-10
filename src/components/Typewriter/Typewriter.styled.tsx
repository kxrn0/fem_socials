import { styled } from "solid-styled-components";

const SCTypewriter = styled("div")`
  color: white;
  display: flex;
  position: relative;
  height: 14px;

  .cursor {
    background: azure;
    width: 1px;
    animation: blink calc(2 * var(--time-unit)) infinite;
    position: absolute;
    top: 5px;
    bottom: -3px;
    right: -2px;
  }
`;

export default SCTypewriter;
