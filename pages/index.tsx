import React from "react";
import { Button } from "@chakra-ui/button";
import { Grid, Link, Stack, Text, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import api from "../product/api";
import { Product } from "../product/types";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
interface Props {
  products: Product[];
}

function parseCurrency(value: number): string {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}

const IndexRoute: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = React.useState<string>(null);
  const text = React.useMemo(
    () =>
      //only ejecut when cart change
      cart
        .reduce(
          (menssage, product) =>
            menssage.concat(
              `* ${product.title} - ${parseCurrency(product.price)}\n`
            ),
          ` `
        )
        .concat(
          `\nTotal: ${parseCurrency(
            cart.reduce((total, product) => total + product.price, 0)
          )}`
        ),
    [cart]
  );

  return (
    <AnimateSharedLayout type="crossfade">
      <Stack spacing={6}>
        <Grid
          gridGap={6}
          templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
        >
          {products.map((product) => (
            <Stack
              borderRadius="md"
              padding={4}
              spacing={3}
              backgroundColor="gray.100"
              key={product.id}
            >
              <Image
                as={motion.img}
                cursor="pointer"
                layoutId={product.image}
                maxHeight={128}
                objectFit="cover"
                src={product.image}
                alt={product.title}
                onClick={() => setSelectedImage(product.image)}
              />
              <Stack spacing={1}>
                <Text>{product.title}</Text>
                <Text fontSize="sm" fontWeight="500" color="green.500">
                  {parseCurrency(product.price)}
                </Text>
              </Stack>
              <Button
                colorScheme="primary"
                onClick={() => setCart((cart) => cart.concat(product))}
              >
                Agregar
              </Button>
            </Stack>
          ))}
        </Grid>
        <AnimatePresence></AnimatePresence>
        {Boolean(cart.length) && (
          <Flex
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            position="sticky"
            as={motion.div}
            bottom={4}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              href={`https://wa.me/11111111?text=${encodeURIComponent(text)}`}
              isExternal
              colorScheme="whatsapp"
              width="fit-content"
              as={Link}
            >
              Completar pedido ({cart.length} productos)
            </Button>
          </Flex>
        )}
      </Stack>
      <AnimatePresence>
        {selectedImage && (
          <Flex
            key="backdrop"
            alignItems="center"
            as={motion.div}
            draggable="true"
            backgroundColor="rgba(0,0,0,0.5)"
            justifyContent="center"
            layoutId={selectedImage}
            position="fixed"
            top={0}
            left={0}
            height="100%"
            width="100%"
            onClick={() => setSelectedImage(null)}
          >
            <Image key="image" src={selectedImage} alt="SelectedImage"></Image>
          </Flex>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const products = await api.list();

  // if (!products) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      products,
      revalidate: 10,
    },
  };
};

export default IndexRoute;
