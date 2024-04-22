
import Lottie from "lottie-react";
import contact from "../assets/lottie/contact.json";
import { useState } from 'react';
import Calendar from 'react-calendar';


export default function Landing() {
    const [value, onChange] = useState(new Date());

  return (
    <section className="w-[100%] h-[100vh] bg-main bg-cover bg-black/20">
      <div className="flex justify-center items-center w-[100%] h-[100vh] bg-gradient-to-b from-black/20 from-50% to-zinc-800">
        <div className="absolute left-[14vw] top-[30vh] flex justify-center items-center size-[20vh] bg-[#8C8D01] rounded-full shadow-[2px_15px_10px_5px_rgba(0,0,0,0.6)]">
          <Lottie animationData={contact} loop={true} />
          <button className="absolute size-[20vh] animate-pulse">
            <span class="material-symbols-outlined">call</span>
          </button>
        </div>
        <div className="flex items-center justify-center size-[60vh] bg-[#f0e8e6] font-bold rounded-md p-[4vh] leading-[6vh]" >
            <Calendar className='flex flex-col justify-center items-center gap-[2vh]' onChange={onChange} value={value} />
        </div>
      </div>
    </section>
  );
}
