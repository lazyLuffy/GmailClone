import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./mail.css"
function Mail() {
  const navigate = useNavigate();
  const {selectedMail}=useSelector(state=>state.mail)
  console.log(selectedMail)
  return (
    <div className='mail'>
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick = {()=>{navigate('/')}}>
              <ArrowBack/>
          </IconButton>
          <IconButton>
            <MoveToInbox/>
          </IconButton>
          <IconButton>
            <Error/>
          </IconButton>
          <IconButton>
            <Delete/>
          </IconButton>
          <IconButton>
            <Email/>
          </IconButton>
          <IconButton>
            <WatchLater/>
          </IconButton>
          <IconButton>
            <CheckCircle/>
          </IconButton>
          <IconButton>
            <LabelImportant/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        <div className="mailtools_right">
            <IconButton>
              <UnfoldMore/>
            </IconButton>
            <IconButton>
                <Print/>
            </IconButton>
            <IconButton>
              <ExitToApp/>
            </IconButton>
        </div>
      </div>
        <div className="mail_body">
          <div className="mail_bodyHeader">
            <h2>{selectedMail?.subject}</h2>
            <LabelImportant className = "mail_important"/>
            <p>{selectedMail?.title}</p>
            <p className='mail_time'>{selectedMail?.time}</p>
          </div>
          <div className="mail_message">
            <p>{selectedMail?.description}</p>
          </div>
        </div>
      </div>
  )
}

export default Mail