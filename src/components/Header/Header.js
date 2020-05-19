import React from 'react'
import {NavLink} from "react-router-dom";
import css from './Header.module.scss'

const Header = () => {
  return (
      <div className={css.container}>
        <header className={css.header}>
          {/*LOGO*/}
          <NavLink
              to='/users'
              className={css.header__logo}>
            Merehead
          </NavLink>

          {/*NAVIGATION MENU*/}
          <nav className={css.header__nav}>
            <ul className={css.header__nav__list}>
              <li className={css.header__nav__list__item}>
                <NavLink
                    to='/users'
                    className={css.header__nav__list__item__link}
                    activeClassName={css.header__nav__list__item__link__active}>
                  Users
                </NavLink>
              </li>
              <li className={css.header__nav__list__item}>
                <NavLink
                    to='/create'
                    className={css.header__nav__list__item__link}
                    activeClassName={css.header__nav__list__item__link__active}>
                  Create
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
  )
}

export default Header