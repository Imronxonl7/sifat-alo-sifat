import React from "react";
import Container from "../Container";
import api from "@/utils/api";

const HomePopularProducts = async () => {
  const { data: products } = await api({ url: "products" });
  console.log(products);
  return (
    <section>
      <Container className="">
        <div></div>
      </Container>
    </section>
  );
};

export default HomePopularProducts;
