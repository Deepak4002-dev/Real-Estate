import { Children } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
