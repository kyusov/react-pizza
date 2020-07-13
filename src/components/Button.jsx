import React from 'react'
import classNames from 'classnames'

function Button({ className, onClick, outline, children }) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  )
}

export default Button
