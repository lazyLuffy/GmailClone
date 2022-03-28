import { Checkbox, IconButton } from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import React, { useEffect, useState } from "react";
import "./emailList.css";
import Section from "./Section";
import EmailRow from './EmailRow'
import { db } from "./Firebase";


function EmailList() {
  const [emails,setEmails] = useState([]);
  useEffect(()=>{
    db.collection("emails").orderBy("timeStamp","desc").onSnapshot((snapshot)=>
      setEmails(
        snapshot.docs.map((doc)=>({
          id:doc.id,
          data:doc.data()
        }))
        )
    )
  },[])
  return (
    <div className="emailList">
      <div className="emailList_setting">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_settingRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList_section">
            <Section Icon ={Inbox} title="Primary" color="red" selected/>
            <Section Icon ={People} title ="social" color ="#1A73E8"/>
            <Section Icon = {LocalOffer} title="promotions" color="green"/>
      </div>
      <div className="emailList_List">
        {emails.map(({id,data:{to,subject,message,timeStamp}})=>(
          <EmailRow id={id} key={id} title={to} subject={subject} description={message} time={new Date(timeStamp?.seconds * 1000).toUTCString()}/>
        ))}
      </div>
    </div>
  );
}

export default EmailList;
