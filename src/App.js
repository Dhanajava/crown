import Home from "./routes/home/home.component"
import { Route,Routes  } from "react-router-dom";
import Navigation from './routes/navigation/navigation.component'
import Authentictaion from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout(orderlist)/checkout.component";



const App=()=> {
 return (
  <Routes>
    <Route path="/" element={<Navigation />}>
    <Route path='home' element={<Home />}/>
    <Route path='shop' element={<Shop />}/>
    <Route path='auth' element={<Authentictaion />}/>
    <Route path='checkout' element={<CheckOut />}/>
    </Route>
  </Routes>
 );
};

export default App;


