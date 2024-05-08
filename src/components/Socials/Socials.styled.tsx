import { styled } from "solid-styled-components";

const SCSocials = styled("div")`
  --n: 3;
  --delay: calc(var(--n) * var(--time-unit));
  --duration: var(--delay);
  background: var(--dark-gray);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 40px;
  border-radius: 12px;

  .profile-picture {
    --x: 0;
    --y: -100px;
    --delay: calc(2 * var(--duration));

    width: 88px;
    height: 88px;
    border-radius: 100%;
  }

  .title {
    --x: 0;
    --y: -200px;
    --delay: calc(2 * var(--duration));

    display: flex;
    flex-direction: column;
    align-items: center;

    .fs-body-bold {
      color: var(--neon-green);
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .fs-body-bold {
      --delay: calc(2 * var(--duration));
      background: var(--gray);
      color: white;
      text-transform: capitalize;
      text-decoration: none;
      text-align: center;
      width: 305px;
      padding: 12px;
      border-radius: 8px;
      transition: background-color var(--time-unit), color var(--time-unit);

      @media (hover: hover) {
        &:hover {
          background: var(--neon-green);
          color: var(--gray);
        }
      }

      @media screen and (max-width: 500px) {
        width: 280px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    padding: 24px;
  }
`;

export default SCSocials;
