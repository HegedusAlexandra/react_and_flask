import Lottie from "lottie-react";
import contact from "../assets/lottie/contact.json";
import { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

export default function Landing() {
  const [value, onChange] = useState(new Date());

  return (
    <section className="w-[100%] h-[90vh] bg-main bg-cover bg-black/10 overflow-hidden">
      <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-gradient-to-b from-transparent from-70% to-90% to-zinc-800">
        <div className="absolute z-10 left-[64vw] top-[9vh] flex justify-center items-center size-[20vh] bg-[#bfd0e6] rounded-full shadow-[2px_15px_10px_5px_rgba(0,0,0,0.6)]">
          <Lottie animationData={contact} loop={true} />
          <button className="absolute size-[20vh] animate-pulse">
            <span class="material-symbols-outlined">call</span>
          </button>
        </div>
        <CalendarContainer>
          <Calendar calendarType="US" />
        </CalendarContainer>
        <button className="px-[10vh] py-[1vh] rounded-2xl bg-[#ff9634] font-sans uppercase shadow-[2px_15px_10px_5px_rgba(0,0,0,0.6)] -translate-y-[2vh] text-orange-950">Foglalás</button>
      </div>
    </section>
  );
}

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 40vw;
  width: 40vw;
  background-color: #111111bb;
  backdrop-filter: blur(4px);
  padding: 50px;
  border-radius: 3px;
  font-family: "Open Sans", sans-serif;

  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  button {
    margin: 3px;
    background-color: #919399;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;

    &:hover {
      background-color: #BFD0E6;
    }

    &:active {
      background-color:#BFD0E6;
    }
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #0f0f0f;
  }

  .react-calendar__tile--range {
    background:#A25709;
    box-shadow: 0 0 6px 2px black;
  }

  abbr {
    all: unset;
    color: #efefef;
  }
`;
