import {React, useContext, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import { CartContext } from "../../components/contexts/cart-context";
import { useLocation } from "react-router-dom";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation-component.styles";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user-selector";

const NavBar = () => {
    const currentUser = useSelector(userSelector);
    const { cartOpen, setCartOpen } = useContext(CartContext);
    const location = useLocation();
    useEffect(()=>{setCartOpen(false)},[location])

    return(
        <Fragment>
            <NavigationContainer>

                <LogoContainer to={"/"}>
                    <CrwnLogo className="logo"/>
                </LogoContainer>

                <NavLinksContainer>
                    <NavLink to={"/shop"}>SHOP</NavLink>
                    {currentUser 
                    ? <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
                    : <NavLink to={"/auth"}>SIGN IN</NavLink>
                    }
                    <CartIcon/>
                </NavLinksContainer>
                {cartOpen && <CartDropdown/>}
            </NavigationContainer>
            {/* 'Outlet' specifies where nested routes render to */}
            <Outlet/>
        </Fragment>
    )
}

export default NavBar; 