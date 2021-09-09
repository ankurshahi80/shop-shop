import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      <CategoryMenu setCategory={setCategory} /> {/*Passes the setCategory object to the CategoryMenu component}  */}
      <ProductList currentCategory={currentCategory} /> {/*Passes the currentCategory object with it default value of null to ProductList component*/}
    </div>
  );
};

export default Home;
