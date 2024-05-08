import SCApp from "./App.styled";
import Socials from "./components/Socials/Socials";

import photo from "./assets/images/pic.png";
import Typewriter from "./components/Typewriter/Typewriter";

function App() {
  const strings = ["angular sucks", "install gentoo", "svelte", "solid jay es"];

  const data = {
    photo,
    name: "Mutation Observer",
    location: "Test String, UAE",
    description: "Generative Artist",
    links: [
      { name: "github", href: "https://github.com/kxrn0" },
      { name: "twitter", href: "https://twitter.com/alhazred999" },
      { name: "4chan", href: "https://4chan.org/g/wdg" },
      {
        name: "frontend mentor",
        href: "https://www.frontendmentor.io/profile/kxrn0",
      },
      { name: "reddit", href: "https://ol.reddit.com/user/0x_by_me/" },
    ],
  };
  return (
    <SCApp>
      <Socials {...data} />
      <Typewriter words={strings} duration={100} />
    </SCApp>
  );
}

export default App;
