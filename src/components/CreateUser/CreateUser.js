import React from "react";
import {connect} from 'react-redux'
import {handleCreateUser} from '../../redux/users/usersOperations'
import Form from "../Form/Form";

import css from './CreateUser.module.scss'

const CreateUser = ({handleCreateUser}) => {
  return (
      <div className={css.container}>
        <Form onSubmit={handleCreateUser} create/>
      </div>
  )
}

const mDTP = {
  handleCreateUser
}

export default connect(null, mDTP)(CreateUser)