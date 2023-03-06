import {React, useContext, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import '../navigation/navigation-component.style.scss';
import { UserContext } from "../../components/contexts/user-context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import { CartContext } from "../../components/contexts/cart-context";
import { useLocation } from "react-router-dom";

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
    const { cartOpen, setCartOpen } = useContext(CartContext);
    const location = useLocation();

    useEffect(()=>{setCartOpen(false)},[location])

    return(
        <Fragment>
            <div className='navigation'>

                <Link className="logo-container" to={"/"}>
                    <CrwnLogo className="logo"/>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to={"/shop"}>SHOP</Link>
                    {currentUser 
                    ? <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    : <Link className="nav-link" to={"/auth"}>SIGN IN</Link>
                    }
                    <CartIcon/>
                </div>
                {cartOpen && <CartDropdown/>}
            </div>
            {/* 'Outlet' specifies where nested routes render to */}
            <Outlet/>
        </Fragment>
    )
}

export default NavBar; 