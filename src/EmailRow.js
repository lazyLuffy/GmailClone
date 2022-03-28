import React from 'react'
import { Checkbox, IconButton } from "@material-ui/core"
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import './emailRow.css'
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {selectMail } from './features/mailSlice'
function EmailRow({id,title, subject, description, time }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toNavigate = ()=>{
        dispatch(selectMail({
            id,title,subject,description,time
        }))
        navigate("/mail")
        
    }
    return (
    <div  onClick={toNavigate} className='emailRow'>
        <div  className="emailRow_option">
        <Checkbox/>
        <IconButton>
            <StarBorderOutlined/>
        </IconButton>
        <IconButton>
            <LabelImportantOutlined/>
        </IconButton>
        </div>
        <h3 className="emailRow_title">
            {title}
        </h3>
        <div className="emailRow_subject">
            <h4>
            {subject}  
            <span className="emailRow_subject_description">
            {description}
            </span>
            </h4>
        </div>

        <p className="emailRow_time">
            {time}
        </p>

    </div>
  )
}

export default EmailRow