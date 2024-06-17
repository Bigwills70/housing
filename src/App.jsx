import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About, { NewAboutComponentII } from "./component/About";
import Conditional from "./component/Conditional";
import Events from "./component/Events";
import Home from "./component/Home";
import Layout from "./component/Layout/Layout";
import MyForm from "./component/MyForm";
import NewHome, { NewHomeIII } from "./component/NewHome";
import Person from "./component/Person";
import Props from "./component/Props";
import ReactList from "./component/ReactList";
import Contact from "./component/Contact";
import NotFound from "./component/NotFound";
import { ToastContainer } from "react-toastify";
import Dashboard from "./component/Dashboard";
import FirstComponent from "./Project/Component/FirstComponent";
import Hero from "./Project/Component/Hero";
import Employer from "./Project/Employer";
import { products } from "./Data";
import Products from "./Project/Products";
import CartItems from "./Project/CartItems";
import Api from "./Project/Component/Api";

function App() {
  return (
    <>
      {/*  <Home />
      <About />
      <NewAboutComponentII />
      <NewHome />
      <NewHomeIII />
      <Props />
      <Person />
      <Events />
      <Conditional />
      <ReactList />
      <MyForm /> */}
      {/*  <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sign-up" element={<MyForm />} />
            <Route
              path="dashboard"
              element={
                localStorage.getItem("auth") ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/sign-up" />
                )
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}

      {/*   <FirstComponent />
      <Hero /> */}
      <ToastContainer />
      {/* <Employer /> */}
      <div className="row">
        {products.map((product) => {
          return (
            <>
              <Products
                id={product.id}
                name={product.name}
                price={product.price}
              />
            </>
          );
        })}
      </div>

      <CartItems />
      <Api />
    </>
  );
}

export default App;
