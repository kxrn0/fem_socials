import { styled } from "solid-styled-components";

const SCSocials = styled("div")`
  background: var(--dark-gray);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 40px;
  border-radius: 12px;

  .profile-picture {
    width: 88px;
    height: 88px;
    border-radius: 100%;
  }

  .title {
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
      background: var(--gray);
      color: white;
      text-transform: capitalize;
      text-decoration: none;
      text-align: center;
      width: 305px;
      padding: 12px;
      border-radius: 8px;
      transition: background-color var(--duration), color var(--duration);

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
