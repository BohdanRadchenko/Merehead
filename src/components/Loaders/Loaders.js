import React from 'react'
import Loader from 'react-loader-spinner'
import css from './Loaders.module.css'

export const Loaders = () => {
  return(
      <div className={css.container}>
        <Loader
            type="Audio"
            color="#ccc"
            height={56}
            width={56}
        />
      </div>
  );
}