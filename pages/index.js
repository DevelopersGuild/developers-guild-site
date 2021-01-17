import { Container } from "react-bootstrap";
import DiscordLink from "../components/DiscordLink.react";
import NavbarMain from "../components/NavbarMain.react";

export default function Home(props) {
  return (
    <>
      <NavbarMain links={props.links} />
      <br />
      <Container>
        <DiscordLink className="float-right" />
      </Container>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
      links: [
        { name: "About", path: "/about", external: false },
        { name: "Contact", path: "/contact", external: false },
        { name: "Constitution", path: "/constitution", external: false },
        { name: "Lab", path: "/lab", external: false },
        { name: "DA Hack", path: "https://dahack.dev/", external: true },
      ],
    },
  };
};
