import React from 'react'
import '../Button/styles.css'
function Button({children}) {
  return (
   <button  className='button' >{children}</button>
  )
}

export default Button