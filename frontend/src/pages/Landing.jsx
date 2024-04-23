import Lottie from "lottie-react";
import contact from "../assets/lottie/contact.json";
import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import styled from "styled-components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Landing() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ]);

  // Function to apply styles to elements within the range
  const applyStylesWithinRange = () => {
    const rangeElements = document.querySelectorAll(".rdrInRange .rdrDay");
    rangeElements.forEach((element) => {
      element.style.background = "orange";
    });
  };

  // useEffect hook to apply styles within the range when the component mounts
  useEffect(() => {
    applyStylesWithinRange();
  }, []);

  return (
    <section className="w-[100%] h-[90vh] bg-main bg-cover bg-black/10 overflow-hidden">
      <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-gradient-to-b from-transparent from-70% to-90% to-zinc-800">
        <div className="absolute z-10 right-[28vw] top-[20vh] flex justify-center items-center size-[20vh] bg-[#bfd0e6] rounded-full shadow-[2px_15px_10px_5px_rgba(0,0,0,0.6)]">
          <Lottie animationData={contact} loop={true} />
          <button className="absolute size-[20vh] animate-pulse">
            <span class="material-symbols-outlined">call</span>
          </button>
        </div>
        <CalendarContainer>
          <DateRange
            className="bg-white/80 backdrop-blur-sm p-[2vh] rounded-sm"
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            rangeColors={["#f33e5b"]}
          />
        </CalendarContainer>
        <button className="px-[10vh] py-[1vh] rounded-2xl bg-[#ff9634] font-sans uppercase shadow-[2px_15px_10px_5px_rgba(0,0,0,0.6)] -translate-y-[4vh] text-orange-950">
          Foglalás
        </button>
      </div>
    </section>
  );
}

const CalendarContainer = styled.div`


  backdrop-filter: blur(10px);
  padding: 50px;
  border-radius: 3px;
  font-family: "Open Sans", sans-serif;

  .rdrCalendarWrapper {
  }
  .rdrDateRangeWrapper {
  }
  .rdrDateDisplayWrapper {
    background: transparent;
  }
  .rdrDateDisplay {
    display: flex;
    flex-direction: row;
    gap: 2vh;
  }
  .rdrDateInput {
    display: flex;
    padding-left: 6px;
    border-radius: 4px;
    background: whitesmoke;
  }

  .rdrDateDisplayItem {
  }
  .rdrDateDisplayItemActive {
    border: none;
  }
  .rdrMonthAndYearWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .rdrNextPrevButton {
    color: #000;
  }
  .rdrPprevButton {
    width: 20px;
    height: 20px;
    background: transparent;
  }
  .rdrMonthAndYearPickers {
    padding: 20px;
  }
  .rdrMonthPicker {
    margin-right: 20px;
  }
  .rdrYearPicker {
  }
  .rdrNextButton {
    width: 20px;
    height: 20px;
    background: transparent;
  }
  .rdrMonths {
  }
  .rdrMonthsVertical {
  }
  .rdrMonth {
  }
  .rdrWeekDays {
    display: none;
  }
  .rdrWeekDay {
  }
  .rdrDays {
    display: flex;
    flex-wrap: wrap;
    justify-items: stretch;
    color: red !important;

    button {
      padding: 1vh;
    }

    .rdrDay {
      color: black !important;
    }

    .rdrDay:focus {
      border-radius: 4px;
    }

    .rdrDayPassive {
      color: #afafaf !important;
    }

    .rdrDayHovered {
      color: #c46200 !important;
      font-weight: bold;
    }

    .rdrDayWeekend {
    }
    .rdrDayStartOfWeek {
    }
    .rdrDayStartOfMonth {
    }
    .rdrDayToday {
    }
    .rdrStartEdge {
      background: #9c590a !important;
    }
    .rdrEndEdge {
      background: #9c590a !important;
    }
    .rdrInRange {
      background: #ff9634 !important; /* Change background color to orange */
    }
    .rdrDayEndOfWeek {
    }
    .rdrDayEndOfMonth {
    }
  }
`;
