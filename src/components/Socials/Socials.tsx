import { For } from "solid-js";
import SCSocials from "./Socials.styled.tsx";

type Props = {
  photo: string;
  name: string;
  location: string;
  description: string;
  links: { name: string; href: string }[];
};

export default function Socials(props: Props) {
  return (
    <SCSocials class="anime-expand">
      <div class="anime-container">
        <img
          src={props.photo}
          alt={props.name}
          class="profile-picture anime-enter"
        />
      </div>
      <div class="anime-container">
        <div class="title anime-enter">
          <p class="fs-title">{props.name}</p>
          <p class="fs-body-bold">{props.location}</p>
        </div>
      </div>
      <p class="description fs-body">"{props.description}"</p>
      <ul class="links">
        <For each={props.links}>
          {(link, index) => (
            <a
              href={link.href}
              target="_blank"
              class="fs-body-bold anime-enter"
              style={`--x: ${(index() % 2 ? 1 : -1) * 50}vw`}
            >
              {link.name}
            </a>
          )}
        </For>
      </ul>
    </SCSocials>
  );
}
