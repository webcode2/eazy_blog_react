import React from 'react'

function BackToTop({visible}) {
  return (
    <div  className={`${visible} bottom-10 right-10 fixed`}>
    <div onClick={()=>window.scrollTo({top:0,left:0,behavior:'smooth'})} className="bg-green-400 px-5 py-5 rounded-lg">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
        />
      </svg>
    </div>
  </div>  )
}

export default BackToTop