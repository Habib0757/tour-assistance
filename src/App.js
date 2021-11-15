import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddPlace from "./Components/AddPlace/AddPlace";
import AuthProvider from "./Components/Context/AuthProvider";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageOrders from "./Components/ManageOrders/ManageOrders";
import MyOrders from "./Components/MyOrders/MyOrders";
import NotFound from "./Components/NotFound/NotFound";
import Order from "./Components/Order/Order";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services/>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/add/place">
              <AddPlace></AddPlace>
            </PrivetRoute>
            <PrivetRoute exact path="/order/place/tour/:id">
              <Order></Order>
            </PrivetRoute>
            <PrivetRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivetRoute>
            <PrivetRoute path="/admin/manage/order">
              <ManageOrders></ManageOrders>
            </PrivetRoute>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
