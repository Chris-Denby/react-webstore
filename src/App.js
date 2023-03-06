import React, { useEffect, useContext } from "react";
import Home from "../src/routes/home/home-component";
import NavBar from "./routes/navigation/navbar-component";
import { Outlet, Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication-component";
import Product from "./routes/products/product-page"
import Shop from "./routes/shop/shop-component";
import Checkout from "./routes/checkout/checkout-component";

const App = () => {

  return ( 
    <Routes>

        <Route path='/' element={<NavBar/>}>
          {/* Nested routes are relative pathed - and render below parent */}\
            <Route>
              {/* when path matches, render element */}
              {/* because these are nested routes, they will render to the parent elements <Outlet> component */}
              {/* child routes only render to an Outlet, and wont render otherwise */}
              {/* 'index' tells navigation to render this element as root*/}
              <Route index element={<Home/>}/>
              <Route path="shop" element={<Shop/>}>
                {/* the ':' tells the router that any values after : relative to shop are parameters, so match parameters only */}
                <Route path=":product" element={<Product/>}/>
              </Route>
              <Route path="checkout" element={<Checkout/>}></Route>

              <Route path="auth" element={<Authentication/>}/>

          </Route>
        </Route>    

    </Routes>
  );
}

export default App;
