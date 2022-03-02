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
        Welcome To
        <br /> My Personal Portfolio
      </SectionTitle>

      <SectionText>Let's build and grow together</SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://mail.google.com/mail/u/1/?pli=1#inbox?compose=new")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
