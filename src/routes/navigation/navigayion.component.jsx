import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {LogoContainer, NavigationContainer, NavLinks, NavLink} from "./navigation.styles.jsx";
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { CartContext } from "../../contexts/cart";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
       { isCartOpen && <CartDropDown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
