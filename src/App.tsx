import SCApp from "./App.styled";
import Socials from "./components/Socials/Socials";
import photo from "./assets/images/pic.png";
import Fireworks from "./components/Fireworks/Fireworks";
import Vector from "./utilities/Vector";
import Grid from "./components/Grid/Grid";

function App() {
  const data = {
    photo,
    name: "Mutation Observer",
    location: "Dallas, USA",
    description: [
      '"Generative Artist"',
      '"Creative Coder"',
      '"SolidJS Enthusiast"',
      '"Arch Linux User"',
      '"Web Developer"',
      '"Ruby Enjoyer"',
    ],
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
  const x = innerWidth / 2;
  const y = innerHeight / 3;
  const initialPosition = new Vector(x, y);
  const distance = 200;

  return (
    <SCApp>
      <Grid distance={25} />
      <Socials {...data} />
      <Fireworks
        popDelay={330}
        popDuration={700}
        initialPosition={initialPosition}
        distance={distance}
      />
    </SCApp>
  );
}

export default App;
