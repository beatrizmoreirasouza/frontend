import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pages">{children}</div>
    </div>
  );
};

export default Layout;
