import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "15px",
          }}
        >
          {" "}
          <DiCssdeck size="3rem" />
          <Span>Alvin Calma</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/vinci101">
        <AiFillGithub size="2.5rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/alvin-calma/">
        <AiFillLinkedin size="2.5rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com/vinci1009/">
        <AiFillFacebook size="2.5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
