import React from "react";
import Header from "./Components/Header";
import Catalog from "./Components/Catalog";
import Footer from "./Components/Footer";

// Updated catalog data with correct image names
const catalogData = [
  { id: 1, title: "Organic Apple", price: 1.99, image: "/images/organic-apple.jpg" },
  { id: 2, title: "Fresh Carrot", price: 0.99, image: "/images/organic-carrot.jpg" },
  { id: 3, title: "Green Lettuce", price: 2.49, image: "/images/lettuce.webp" },  // updated
  { id: 4, title: "Banana", price: 1.29, image: "/images/organic-banana.jpg" },
  { id: 5, title: "Tomato", price: 1.50, image: "/images/tomato.webp" },  // updated
];

export default function App() {
  return (
    <>
      <Header />
      <Catalog catalog={catalogData} />
      <Footer />
    </>
  );
}



