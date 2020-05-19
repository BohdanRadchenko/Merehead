import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  handleDeleteUser,
  handleUsers
} from '../../redux/users/usersOperations'
import {users} from '../../redux/users/usersSelectors'
import {pagination} from "../../helpers/pagination.helpers";
import UsersDraw from "../UsersDraw/UsersDraw";
import css from './UsersList.module.scss'

const UsersList = ({handleUsers, users, handleDeleteUser}) => {
  const history = useHistory()
  const [page, setPage] = useState(1)
  const pag = pagination(users, page)

  useEffect(() => {
    handleUsers()
  }, [handleUsers])

  const handlePaginationClick = e => {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.name === 'prev' && page > 1) {
        setPage(page - 1)
      }
      if (e.target.name === 'next' && page < pag.total_page) {
        setPage(page + 1)
      }
    }
    if (e.target.tagName === 'LI') {
      setPage(e.target.value)
    }
  }

  const handleUserClick = id => {
    history.push(`/users/${id}`)
  }

  return (
      <div className={css.container}>
        {/*LIST*/}
        {users && (
            <ul className={css.list}>
              {pag.list.map(user => (
                  <li key={user.id}
                      onClick={e => handleUserClick(user.id)}
                      className={css.list__item}>
                    <UsersDraw {...user} onDelete={handleDeleteUser}/>
                  </li>
              ))}
            </ul>
        )}

        {/*PAGINATION*/}
        <div className={css.pagination}>
          <button
              disabled={page === 1}
              onClick={handlePaginationClick}
              name='prev'
              className={css.pagination__button}>
          </button>

          <ul className={css.pagination__list}>
            {pag.count.map(el => (
                <li value={el + 1}
                    className={el + 1 === page
                        ? css.pagination__list__currentItem
                        : css.pagination__list__item}
                    onClick={e => handlePaginationClick(e)}
                    key={`count-${el}`}>
                  {el + 1}
                </li>
            ))}
          </ul>

          <button
              disabled={page === pag.total_page}
              onClick={handlePaginationClick}
              name='next'
              className={css.pagination__button}>
          </button>
        </div>
      </div>
  )
}

const mSTP = state => (
    {
      users: users(state)
    }
)

const mDTP = {
  handleUsers,
  handleDeleteUser
}

export default connect(mSTP, mDTP)(UsersList)