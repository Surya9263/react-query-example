import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProductsById } from "../api/products";

export const SingleProduct = () => {
  const { id } = useParams();

  const { productById } = useProductsById(Number(id));

  return (
    <Card m="auto" maxW="md">
      <CardBody>
        <Image
          src={productById?.image}
          alt={`image/${productById?.title}`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{productById?.title}</Heading>
          <Text>{productById?.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            $ {productById?.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
