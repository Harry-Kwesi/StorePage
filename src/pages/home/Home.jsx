import React from "react";
import Layout from "../../layout";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import { AttributeGrid } from "../../components";

const Home = () => {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };

  return (
    <Layout disablePaddingBottom>
      <Hero
        maxWidth={"500px"}
        image={"../../../static/banner1.jpg"}
        title={"Essentials for a cold winter"}
        subtitle={"Discover Autumn Winter 2024"}
        ctaText={"shop now"}
        ctaAction={goToShop}
      />
      <AttributeGrid />
    </Layout>
  );
};

export default Home;
