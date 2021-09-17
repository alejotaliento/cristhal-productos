import { Button } from "@chakra-ui/button";
import { Grid, Link, Stack, Text, Flex } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import React from "react";
import api from "./product/api";
import { Product } from "./product/types";

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
    <Stack spacing={6}>
      <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
        {products.map((product) => (
          <Stack
            borderRadius="md"
            padding={4}
            spacing={3}
            backgroundColor="gray.100"
            key={product.id}
          >
            <Stack spacing={1}>
              <Text>{product.title}</Text>
              <Text fontSize="sm" fontWeight="500" color="green.500">
                {parseCurrency(product.price)}
              </Text>
            </Stack>
            <Button
              colorScheme="primary"
              onClick={() => setCart((cart) => cart.concat(product))}
              variant="outline"
            >
              Agregar
            </Button>
          </Stack>
        ))}
      </Grid>
      {Boolean(cart.length) && (
        <Flex
          position="sticky"
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
