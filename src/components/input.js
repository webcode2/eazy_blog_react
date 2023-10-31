import React from 'react'

function Input({type,style_class,placeholder="",label=''}) {
  return (

    <input
    type={type}
    name={label}
    className={`block focus:outline-none w-full py-3 px-4 rounded-md bg-transparent   border-2 focus:ring  focus:border-none border-slate-500 focus:ring-green-300 ${style_class}`}
    placeholder={placeholder}
    
  />
  )
}

export default Input