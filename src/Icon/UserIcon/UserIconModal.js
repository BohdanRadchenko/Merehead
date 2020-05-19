import React from "react";
import {NavLink} from "react-router-dom";
import css from './UserIcon.module.scss'

const UserIconModal = ({name, email}) => {

  const handleLogOut = e => {
    console.log('log out')
  }

  return (
      <div className={css.modal}>

        <div className={css.modal__block}>
          <p>{name}</p>
          <p>{email}</p>
        </div>

        <div className={css.modal__block}>
          <NavLink to="/profile"
                   className={css.modal__block__nav}>
            Profile and Visibility
          </NavLink>
          <NavLink to="/activity"
                   className={css.modal__block__nav}>
            Activity
          </NavLink>
        </div>

        <div className={css.modal__block}>
          <NavLink to="/students"
                   className={css.modal__block__nav}>
            Students
          </NavLink>
        </div>

        <div className={css.modal__block}>
          <NavLink to="/settings"
                   className={css.modal__block__nav}>
            Settings
          </NavLink>
          <NavLink to="/help"
                   className={css.modal__block__nav}>
            Help
          </NavLink>
        </div>

        <div className={css.modal__block}>
          <button
          onClick={handleLogOut}
              className={css.modal__block__nav}>
            Log Out
          </button>
        </div>
      </div>
  )
}

export default UserIconModal