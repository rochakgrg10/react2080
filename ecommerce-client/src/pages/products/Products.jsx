import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
  return (
    <>
      <div>Seller products</div>
      {JSON.stringify(products)}
    </>
  );
}
