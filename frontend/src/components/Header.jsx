import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-row justify-between items-center absolute z-10 w-[100%] h-[6vh] bg-black/40 px-[10vh] font-opensans text-[2.4vh] text-sky-100 font-thin'>
      <p className=''>GDE-GI-OOP Boutique Hotel</p>
      <ul className='flex flex-row justify-between w-[46vw]'>
        <li>Szabadidő</li>
        <li>Lélegzetelállító Szobáink</li>
        <li>Exkluzív Spa</li>
        <li className='bg-sky-200 p-[2px] px-[14px] rounded-full text-sky-900'>Kapcsolat</li>
      </ul>
    </div>
  )
}
