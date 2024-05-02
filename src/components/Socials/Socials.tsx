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
    <SCSocials>
      <img src={props.photo} alt={props.name} class="title" />
      <div class="title">
        <p class="fs-title">{props.name}</p>
        <p class="fs-body-bold">{props.location}</p>
      </div>
      <p class="description fs-body">{props.description}</p>
      <ul class="links">
        <For each={props.links}>
          {(link) => (
            <a href={link.href} target="_blank" class="fs-body-bold">
              {link.name}
            </a>
          )}
        </For>
      </ul>
    </SCSocials>
  );
}
