import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  editModalClose,
  editModalOpen
} from '../../redux/controller/controllerActions'
import {modal} from '../../redux/controller/controllerSelectors'
import {users} from '../../redux/users/usersSelectors'
import {
  handleDeleteUser,
  handleUpdateUser,
  handleUsers
} from '../../redux/users/usersOperations'
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import css from './User.module.scss'

const User = ({users, handleUsers, onDelete, handleUpdateUser, modalOpen, modalClose, modal}) => {
  const history = useHistory()
  const userId = history.location.pathname.split('/')[2]
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!!!users.length) {
      handleUsers()
    }
    setUser(users.find(el => el.id === Number(userId)))
  }, [users])

  const handleDeleteClick = () => {
    onDelete(user.id)
    history.push('/users')
}

  return (
      <div className={css.container}>

        {/*USER INFO*/}
        {user && (
            <div className={css.user}>
              <div className={css.user__name}>
                <p className={css.user__name__title}>Name:</p>
                <p className={css.user__name__text}>{user.name}</p>
              </div>
              <div className={css.user__name}>
                <p className={css.user__name__title}>Surname:</p>
                <p className={css.user__name__text}>{user.surname}</p>
              </div>
              <div className={css.user__desc}>
                <p>Description:</p>
                <p>{user.desc}</p>
              </div>
            </div>
        )}

        {/*BUTTON*/}
        <div className={css.button}>
          <button
              onClick={modalOpen}
              className={css.button__edit}>
            Edit
          </button>
          <button onClick={handleDeleteClick}
                  className={css.button__delete}>
            Delete
          </button>
        </div>

        {/*MODAL*/}
        {modal && (
            <Modal onClose={modalClose}>
              <Form {...user} onClose={modalClose}
                    onSubmit={handleUpdateUser}/>
            </Modal>
        )}
      </div>
  )
}

const mSTP = state => (
    {
      users: users(state),
      modal: modal(state)
    }
)

const mDTP = {
  handleUsers,
  handleUpdateUser: handleUpdateUser,
  onDelete: handleDeleteUser,
  modalOpen: editModalOpen,
  modalClose: editModalClose,
}

export default connect(mSTP, mDTP)(User)
