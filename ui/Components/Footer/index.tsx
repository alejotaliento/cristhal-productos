import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

import styles from "./index.module.scss";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex className={styles.root}>
      <Stack direction={["column", "row"]} spacing="24px" />
    </Flex>
  );
};
