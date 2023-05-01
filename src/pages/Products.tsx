import { Box, Container, Heading, Select, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  useCategories,
  useProducts,
  useProductsByCategory,
} from "../api/products";
import { Product } from "../components/Product";

export const Products = () => {
  const [selectedCat, setSelectedCat] = useState<string>("");

  const { products, isLoading } = useProducts();

  const { categories } = useCategories();

  const { productsByCategory } = useProductsByCategory(selectedCat);

  const handleChange = (e: any) => {
    setSelectedCat(e.target.value);
  };

  useEffect(() => {
    console.log(productsByCategory);
  }, [selectedCat]);

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  return (
    <Container maxW="80rem" centerContent>
      <Box>
        <Select onChange={handleChange} m={4} placeholder={`Select category`}>
          {categories?.map((e: string) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </Select>
      </Box>
      <SimpleGrid spacing="40px" columns={[2, 3, 4]}>
        {!productsByCategory &&
          products?.map((e) => {
            return <Product key={e.id} product={e} />;
          })}
        {productsByCategory &&
          productsByCategory?.map((e) => {
            return <Product key={e.id} product={e} />;
          })}
      </SimpleGrid>
    </Container>
  );
};
