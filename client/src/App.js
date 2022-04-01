import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductDiscriptionScreen from "./screens/ProductDiscriptionScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import OrderInfo from "./screens/OrderInfo";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./admin/AdminScreen";
import UserList from "./admin/UserList";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./Dashboard/Dashboard";

const App = () => {
  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;
  return (
    <Router>
      <Header />
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/product/:id" component={ProductDiscriptionScreen} />
      <Route exact path="/cart" component={CartScreen} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/orders" component={OrderScreen} />
      <Route exact path="/order/:id" component={OrderInfo} />
      <Route exact path="/profile" component={ProfileScreen} />
      <Route
        path="/dashboard"
        component={userInfo?.user.isAdmin ? Dashboard : HomeScreen}
      />
      <Route
        path="/admin"
        component={userInfo?.user.isAdmin ? AdminScreen : HomeScreen}
      />
      <Footer />
    </Router>
  );
};

export default App;
