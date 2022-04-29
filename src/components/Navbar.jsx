import React, { useEffect, useState } from 'react'

function Navbar(props) {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 479 ) {
      setNavbarColor(true)
    }
    if (window.scrollY < 479 ) {
      setNavbarColor(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor)
  });

  return (
    <header className={`flex justify-between p-5 bg-slate-100 border-y border-slate-400 sticky top-0 z-50`}>
      <div className='flex items-center space-x-5'>
        <a href="/"> 
          <div className='flex object-contain items-center cursor-pointer'>
            <img 
              className="w-28"
              src="/images/logo.svg"
              alt="logo"
            />
          </div>
        </a>
      </div>
      <div className='flex items-center space-x-5 text-black'>
        <div className='hidden md:inline-flex items-center space-x-5 font-extralight'>
          <span className='cursor-pointer'>Soluções</span>
          <span className='cursor-pointer'>Blog</span>
          <span className='cursor-pointer'>Contato</span>
          <span className='cursor-pointer'>Seja Parceiro</span>
          <span className='cursor-pointer'>Ajuda</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar