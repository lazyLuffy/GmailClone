import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import "./header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./Firebase";

function Header() {
  const {user} = useSelector(state=>state.user)
  const dispatch = useDispatch();
  const logOut = ()=>{
    auth.signOut().then(()=>{

      dispatch(logout())
    })
  }
  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.citypng.com/public/uploads/preview/-11597272377xtovj4zmfl.png"
          alt="Gmail-logo"
        />
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header-right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <IconButton>
          <Avatar onClick = {logOut} src={user.photoUrl}  />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
