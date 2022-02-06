import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = `http://localhost:3001/products?categoryId=${categoryId}`;
        const { data } = await axios.get(url);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [categoryId]);

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {products.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
