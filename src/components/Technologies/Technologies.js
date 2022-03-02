import React from "react";
import { DiFirebase, DiReact, DiCssTricks, DiAtlassian } from "react-icons/di";
import { GiBigGear } from "react-icons/gi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>I have worked on a range of technologies</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experienced with <br />
            React
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCssTricks size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Adobe XD, Figma and Canva
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAtlassian size="3rem" />
        <ListContainer>
          <ListTitle>Project Management</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Atlassian
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <GiBigGear size="3rem" />
        <ListContainer>
          <ListTitle>Automations</ListTitle>
          <ListParagraph>
            Experienced in <br />
            UI Path
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
