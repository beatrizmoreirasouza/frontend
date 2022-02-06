import { Link } from "react-router-dom";

const Logotipo = () => {
  return (
    <Link to="/">
      <div className="logotipo">
        <i className="fas fa-cubes"></i>
        <span>E-Shop</span>
      </div>
    </Link>
  );
};

export default Logotipo;
