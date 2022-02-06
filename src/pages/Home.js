import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1 className="title">Home</h1>
      <Link to="/about" className="link">
        About
      </Link>
      <div className="row">
        <span className="id">
          <strong>Id</strong>
        </span>
        <span className="name">
          <strong>Name</strong>
        </span>
        <span>
          <strong>Username</strong>
        </span>
      </div>
      {users.map((item) => (
        <div key={item.id} className="row">
          <span className="id">{item.id}</span>
          <span className="name">{item.name}</span>
          <span>{item.username}</span>
        </div>
      ))}
      ))
    </div>
  );
};

export default Home;
