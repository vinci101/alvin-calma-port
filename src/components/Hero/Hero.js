import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm Alvin Calma
        <br /> Welcome to my portfolio
      </SectionTitle>

      <SectionText>Let's build and grow together</SectionText>
      <Button
        onClick={() => (window.location = "mailto: alvin.l.calma.ac@gmail.com")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
