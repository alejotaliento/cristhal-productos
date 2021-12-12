import React from "react";
import { Flex, Stack, Container, Text, Divider } from "@chakra-ui/react";

import styles from "./index.module.scss";

export type Section = {
  title: string;
  description: string;
};
export interface FooterProps {
  sections: [Section, Section?, Section?, Section?];
}

export const Footer: React.FC<FooterProps> = ({ sections }) => {
  return (
    <Flex className={styles.root}>
      <Stack direction={["column", "row"]} spacing="24px">
        {sections.length &&
          sections.map((section, index) => (
            <>
              <Container>
                <Text fontSize="xl">{section.title}</Text>
                <Text fontSize="sm">{section.description}</Text>
              </Container>
              {index < 3 ? <Divider orientation="vertical" /> : null}
            </>
          ))}
      </Stack>
    </Flex>
  );
};
