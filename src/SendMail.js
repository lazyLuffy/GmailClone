
import React from "react";
import firebase from 'firebase'
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "./sendMail.css";
import { composeClose } from "./features/mailSlice";
import { db } from "./Firebase.js";

function SendMail() {
  const dispatch = useDispatch();
  const { register,handleSubmit,errors} = useForm();
  const onSubmit = (formData)=>{
    db.collection("emails").add({
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      timeStamp:firebase.firestore.FieldValue.serverTimestamp()
    }).then(console.log("database connected"))
    dispatch(composeClose())
  }
  const closeCompose =()=>{ 
    dispatch(composeClose())
  }
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close className="close" onClick={closeCompose}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="text"
          placeholder="To"
          ref = {register({required:true})}
          />
          {errors.to && <p className="sendMail_error">To is required</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          ref = {register({required:true})}
        />
        {errors.subject && <p className="sendMail_error">Name is required</p>}
        <input
          name="message"
          type="text"
          className="sendMail_message"
          placeholder="Message"
          ref = {register({required:true})}
        />
        {errors.message && <p className="sendMail_error">Message is required</p>}
        <div className="sendMail_option">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
