import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/categories");
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="menu">
      {categories.map((item) => (
        <span key={item.id}>
          <Link to={`/categories/${item.id}`}>{item.name}</Link>
        </span>
      ))}
    </div>
  );
};

export default Menu;
