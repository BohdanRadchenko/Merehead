import React, {useState} from "react";
import {connect} from 'react-redux'
import {getUser} from '../../redux/session/sessionSelectors'
import splitUserName from '../../helpers/splitUserName.helpers'

import css from './UserIcon.module.scss'
import HeaderModal
  from "../../components/Modal/HeaderModal/HeaderModal";
import UserIconModal from "./UserIconModal";

const UserIcon = ({user}) => {
  const [isOpen, setIsOpen] = useState(false)
  const splitName = splitUserName(user.name)

  const handleProfileClick = e => {
    setIsOpen(!isOpen)
  }

  const handleModalClose = e => {
    setIsOpen(false)
  }

  if (!user) {
    return null
  }

  return (
      <>
        <div onClick={handleProfileClick}
             className={css.container}>
          <div className={css.profile}>
            <div className={css.profile__pad}>
              <div className={css.icon}>
                <p>{splitName}</p>
              </div>
            </div>
          </div>
        </div>

        {/*MODAL PROFILE*/}
        {isOpen && (
            <HeaderModal onClose={handleModalClose}>
              <UserIconModal onClose={handleModalClose} {...user} />
            </HeaderModal>
        )}
      </>
  )
}

const mSTP = state => (
    {
      user: getUser(state)
    }
)

export default connect(mSTP)(UserIcon)