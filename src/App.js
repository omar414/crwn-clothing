import Home from "./routes/home/home.components.jsx";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigayion.component.jsx";
import Authentication from "./routes/authentication/authentication.jsx";
import Shop from "./routes/shop/shop.jsx";
import CheckOut from "./routes/checkout/CheckOut.jsx";
const App = () => {

 
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
