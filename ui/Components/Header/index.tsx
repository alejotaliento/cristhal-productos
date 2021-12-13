import React from "react";
import { Flex, Stack, Text, Box, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";

import styles from "./index.module.scss";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Flex className={styles.root}>
      <Spacer />
      <Stack direction={["column", "row"]} spacing="24px">
        <Link href="/">
          <a>
            <Heading as="h1" className={styles.text}>
              Home
            </Heading>
          </a>
        </Link>
      </Stack>
      <Spacer />
    </Flex>
  );
};
