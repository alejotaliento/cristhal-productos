import * as React from "react";
import { Button, Flex, Grid, Link, ListItem, Stack, Text } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
} from "@chakra-ui/react";

import { Product } from "../types";
import { parseCurrency } from "../../utils";
import ProductCard from "../components/ProductCard";

interface Props {
  products: Product[];
}

const StoreScreen: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [isCartOpen, toggleCart] = React.useState<boolean>(false);

  function handleRemoveFromCart(index: number) {
    setCart((cart) => cart.filter((_, _index) => _index !== index));
  }

  const text = React.useMemo(
    () =>
      cart
        .reduce(
          (message, product) =>
            message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`),
          ``
        )
        .concat(
          `\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`
        ),
    [cart]
  );

  return (
    <>
      <Stack justifyContent="center" minHeight="50vh" spacing={6}>
        {products.length ? (
          <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={(product) => setCart((cart) => cart.concat(product))}
              />
            ))}
          </Grid>
        ) : (
          <Text color="gray.500" fontSize="lg" margin="auto">
            No hay productos
          </Text>
        )}
        {Boolean(cart.length) && (
          <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky">
            <Button colorScheme="whatsapp" width="fit-content" onClick={() => toggleCart(true)}>
              Ver pedido ({cart.length} productos)
            </Button>
          </Flex>
        )}
      </Stack>
      <Drawer isOpen={isCartOpen} placement="right" size="md" onClose={() => toggleCart(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Tu pedido</DrawerHeader>

          <DrawerBody>
            <List>
              {cart.map((product, index) => (
                <ListItem key={product.id}>
                  <Text> {product.title}</Text>
                  <Text>{parseCurrency(product.price)}</Text>
                  <Button colorScheme="red" onClick={() => handleRemoveFromCart(index)}>
                    X
                  </Button>
                </ListItem>
              ))}
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button
              isExternal
              as={Link}
              colorScheme="whatsapp"
              href={`https://wa.me/5491141414141?text=${encodeURIComponent(text)}`}
              size="lg"
              width="100%"
            >
              Completar pedido ({cart.length} productos)
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default StoreScreen;
