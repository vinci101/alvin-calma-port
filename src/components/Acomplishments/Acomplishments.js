import React from "react";
import { ProjectData } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle main>Accomplishments</SectionTitle>
    <Boxes>
      {ProjectData.map(({ number, text }, index) => (
        <Box key={index}>
          <BoxNum>{number}</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
