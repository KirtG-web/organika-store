import React from "react";
import Header from "./Components/Header";
import Catalog from "./Components/Catalog";
import Footer from "./Components/Footer";
import { getItems } from "./services/itemService"; // 👈 import the service

export default function App() {
  const catalogData = getItems(); // 👈 get data from the service

  return (
    <>
      <Header />
      <Catalog catalog={catalogData} />
      <Footer />
    </>
  );
}




