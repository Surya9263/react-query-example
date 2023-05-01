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
import { useNavigate } from "react-router-dom";

export const Product = ({ product }: any) => {
  const { id, title, price, image } = product;
  const navigate = useNavigate();
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          cursor={"pointer"}
          src={image}
          alt={`image/${title}`}
          borderRadius="lg"
          onClick={() => navigate(`/${id}`)}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {price}
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
