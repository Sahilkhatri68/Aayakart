import Footer from "./components/Footer";
import Mainheader from "./components/Mainheader";
import Introsection from "./components/Introsection";
import Container from "./components/Container";
import Dealofday from "./components/Dealofday";
import Topcategories from "./components/Topcategories";
import Populardepartments from "./components/Populardepartments";
import Midbanner from "./components/Midbanner";
import Newarrivals from "./components/Newarrivals";
import Newcollection from "./components/Newcollection";
import NewBanner from "./components/NewBanner";
import Ourclients from "./components/Ourclients";
import RecentView from "./components/RecentView";
import MainBody from "./components/MainBody";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderComplete from "./components/OrderComplete";
import Wishlist from "./components/Wishlist";
import Error404 from "./components/Error404";
import Myaccount from "./components/Myaccount";
import Contactus from "./components/Contactus";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import OurBlog from "./components/OurBlog";
import Emptycart from "./components/Emptycart";
import axios from "axios";
import Allproduct from "./components/Allproduct";

// credentials of axios--------------------
axios.defaults.withCredentials = true;
// credentials of axios--------------------
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<MainBody />}></Route>
        <Route path="/product/:slug" exact element={<Product />}></Route>
        <Route path="/allproduct" exact element={<Allproduct />}></Route>
        <Route path="/cart" exact element={<Cart />}></Route>
        <Route path="/chekcout" exact element={<Checkout />}></Route>
        <Route path="/ordercomplete" exact element={<OrderComplete />}></Route>
        <Route path="/wishlist" exact element={<Wishlist />}></Route>
        <Route path="/myaccount" exact element={<Myaccount />}></Route>
        <Route path="/contactus" exact element={<Contactus />}></Route>
        <Route path="/ourblog" exact element={<OurBlog />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/emptycart" exact element={<Emptycart />}></Route>
        <Route path="*" exact element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
