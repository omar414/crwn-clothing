import Home from "./routes/home/home.components.jsx";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigayion.component.jsx";
import Authentication from "./routes/authentication/authentication.jsx";
const App = () => {

  const Shop = () => {
    return <h1>I am the shop page</h1>;
  };
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
