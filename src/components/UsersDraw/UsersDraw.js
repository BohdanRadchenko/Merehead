import React from 'react'
import Icon from '../../Icon/Icon'
import css from './UsersDraw.module.scss'

const UsersDraw = ({id, name, surname, desc, onDelete}) => {
  const {DeleteIcon} = Icon()
  const handleClickDelete = () => [
      // onDelete(id)
  ]
  return (
      <div className={css.container}>
        <div className={css.name}>
          <p className={css.name__title}>{name}</p>
          <p className={css.name__title}>{surname}</p>
        </div>
        <p className={css.desc}>{desc}</p>

        <button className={css.delete} onClick={handleClickDelete}>
          <DeleteIcon/>
        </button>
      </div>
  )
}

export default UsersDraw