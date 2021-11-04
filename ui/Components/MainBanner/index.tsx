import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import { OptimizeLoader } from "../../../utils";

import styles from "./index.module.scss";

export interface MainBannerProps {
  title: string;
  subtitle?: string;
  imageProps: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
}

const MainBanner = ({ title, subtitle, imageProps }: MainBannerProps) => {
  return (
    <div className={styles.background}>
      <Flex className={styles.root} component="section">
        <Flex className={styles.imageContainer}>
          <Image
            alt="Banner"
            blurDataURL={OptimizeLoader({
              src: imageProps.src,
              width: 2000,
              quality: 1,
            })}
            layout="fill"
            loader={OptimizeLoader}
            loading="lazy"
            objectFit="contain"
            placeholder="blur"
            quality="100"
            src={imageProps.src}
          />
        </Flex>
        <Flex container className={styles.container}>
          <Text className={styles.principalText} color="secondary" variant="inherit">
            {title}
          </Text>
          {subtitle && (
            <Text className={styles.secondaryText} color="secondary" variant="subtitle1">
              {subtitle}
            </Text>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default MainBanner;
