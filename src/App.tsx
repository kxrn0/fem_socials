import SCApp from "./App.styled";
import Socials from "./components/Socials/Socials";

import photo from "./assets/images/avatar-jessica.jpeg";

function App() {
  const data = {
    photo,
    name: "Mutation Observer",
    location: "Test String, UAE",
    description: "Generative Artist",
    links: [{ name: "github", href: "https://4chan.org/g" }],
  };
  return (
    <SCApp>
      <Socials {...data} />
    </SCApp>
  );
}

export default App;
