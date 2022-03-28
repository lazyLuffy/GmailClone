import React from "react";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./sidebar.css";
import SideBarOption from "./SIdeBarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import { AccessTime, Duo, ExpandMore, LabelImportant, NearMe, Note, Person, Phone, Star } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { composeOpen, } from "./features/mailSlice";



function Sidebar() {
  // const messageOpen = useSelector(selectsendMessageIsOpen)
  const dispatch = useDispatch();
  const openMessage = ()=>{
    dispatch(composeOpen())
  }
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={openMessage}
      >
        compose
      </Button>
      <SideBarOption Icon={InboxIcon} title="inbox" number={54} />
      <SideBarOption Icon={Star} title="Starred" number={54} />
      <SideBarOption Icon={AccessTime} title="Snoozed" number={54} />
      <SideBarOption Icon={LabelImportant} title="Important" number={54} />
      <SideBarOption Icon={NearMe} title="Sent" number={54} />
      <SideBarOption Icon={Note} title="Drafts" number={54} />
      <SideBarOption Icon={ExpandMore} title="More" number={54} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person/>
          </IconButton>
          <IconButton>
            <Duo/>
          </IconButton>
          <IconButton>
            <Phone/>
          </IconButton>
        </div>
      </div>
    </div>  
  );
}

export default Sidebar;
