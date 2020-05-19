import React, {useState} from "react";
import Textarea from "react-textarea-autosize";

import css from './Form.module.scss'

const Form = ({id, name = '', surname = '', desc = '', onSubmit, onClose, create}) => {
  const defaultForm = {name, surname, desc}
  const [form, setForm] = useState(defaultForm)

  const titleText = create ? ' Create User' : 'Edit User'
  const buttonText = create ? ' Create' : 'Save'

  const handleInputChange = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    if (create) {
      onSubmit(form)
      setForm(defaultForm)
    }
    if (!create) {
      onSubmit(id, form)
      onClose()
    }
  }

  return (
      <form
          className={css.form}
          onSubmit={handleFormSubmit}>
        <h1 className={css.form__title}>{titleText}</h1>

        {/*INPUT NAME*/}
        <div className={css.form__inputWrapper}>
          <label htmlFor='name' className={css.form__label}>
            Name:
          </label>
          <input required className={css.form__input} type="text"
                 name="name"
                 id='name'
                 placeholder='Enter Name...'
                 value={form.name} onChange={handleInputChange}/>
        </div>

        {/*INPUT SURNAME*/}
        <div className={css.form__inputWrapper}>
          <label htmlFor='surname' className={css.form__label}>
            Surname:
          </label>
          <input required className={css.form__input} type="text"
                 name="surname"
                 id='surname'
                 placeholder='Enter Surname...'
                 value={form.surname} onChange={handleInputChange}/>
        </div>

        {/*INPUT SURNAME*/}
        <div className={css.form__inputWrapper}>
          <label htmlFor='surname' className={css.form__label}>
            Description:
          </label>
          <Textarea className={css.form__textarea} name="desc"
                    id='desc'
                    placeholder='Enter Description...'
                    value={form.desc} onChange={handleInputChange}/>
        </div>

        {/*BUTTON*/}
        <button className={css.form__button}>
          {buttonText}
        </button>

      </form>
  )
}

export default Form