// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";
// import { HandEffect } from "@/components/HandEffect";

export const Home = (): JSX.Element => {
  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4" css={{ marginLeft: "$2" }}>
                Olá, meu nome é {userData.nameUser} {/*<HandEffect /> */}
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Eu sou{" "}
              <Text as="span" type="heading1" color="brand1">
                apaixonado
              </Text>{" "}
              em colocar minha criatividade em{" "}
              <Text as="span" type="heading1" color="brand1">
                projetos
              </Text>{" "}
            </Text>
            <Text type="body1" color="grey2">
              No meu site você vai conhecer todos os meu projetos e tecnologias.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Meus Projetos
              </Button>
              <Button
                as="a"
                type="circle"
                target="_blank"
                href={`https://github.com/${userData.githubUser}`}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Todos os projetos foram desenvolvidos para o curso{" "}
                <Text as="span" color="brand5">
                  Kenzie Academy
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
