import Lottie from "lottie-react";
import contact from "../assets/lottie/contact.json";
import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import styled from "styled-components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

export default function Landing({ data }) {
  const [checkDate, setCheckDate] = useState(false);
  const [singleOrDouble, setSingleOrDouble] = useState('all');
  const [choosenRooms, setChoosenRooms] = useState([]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ]);

  return (
    <section className="w-[100%] h-[90vh] bg-main bg-cover bg-black/10 overflow-hidden">
      <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-gradient-to-b from-transparent from-70% to-90% to-zinc-800">
        <div className="absolute z-10 right-[28vw] top-[20vh] flex justify-center items-center size-[20vh] bg-[#bfd0e6] rounded-full shadow-[2px_15px_10px_5px_rgba(0,0,0,0.6)]">
          <Lottie animationData={contact} loop={true} />
          <button className="absolute size-[20vh] animate-pulse">
            <span class="material-symbols-outlined">call</span>
          </button>
        </div>
        <CalendarContainer
          className={
            checkDate
              ? "flex justify-center p-[50px] py-[16px] pb-[32px] w-[80vw]"
              : "p-[50px] "
          }
        >
          {checkDate ? (
            <div className="rdrDateDisplay">
              <div className="flex flex-row text-sky-100 font-opensans tracking-wider">
                <p
                  style={{
                    textShadow: "1px 1px 2px #000000aa",
                    fontFamily: "Open Sans, sans-serif"
                  }}
                >
                  {format(state[0].startDate, "yyyy.MM.dd")} -{" "}
                </p>
                <p
                  style={{
                    textShadow: "1px 1px 2px #000000aa",
                    fontFamily: "Open Sans, sans-serif"
                  }}
                >
                  {state[0].endDate
                    ? format(state[0].endDate, "yyyy.MM.dd")
                    : "Select end date"}
                </p>
              </div>
            </div>
          ) : (
            <DateRange
              className="bg-white/80 backdrop-blur-sm p-[2vh] rounded-sm"
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              rangeColors={["#f33e5b"]}
            />
          )}
        </CalendarContainer>
        <button
          onClick={() => setCheckDate(!checkDate)}
          className="px-[6vh] py-[1vh] rounded-2xl bg-[#ff9634] font-opensans uppercase shadow-[2px_15px_10px_5px_rgba(0,0,0,0.6)] -translate-y-[4vh] text-orange-950"
        >
          {checkDate
            ? state[0].endDate
              ? "Másik időpontot választok"
              : "Időpontot választok"
            : "Foglalás"}
        </button>
        <div className="w-[80vw] h-[50vh] rounded-[3px] overflow-scroll overflow-x-hidden bg-sky-100">
          {checkDate && data?.map((room) => (
            <div
              className="w-[80vw] px-[2vw] flex flex-row justify-between py-[2vh]"
              key={room.szobaszam}
            >
              <p className="w-[25%] justify-start text-[2vh]"> {room.szobaszam}</p>
              <p className="w-[25%] justify-start text-[2vh]"> {room.ar}</p>
              <p className="w-[25%] justify-start text-[2vh]"> {room.tipus}</p>
              <p className="w-[25%] justify-start text-[2vh]"> {room.kilatas}</p>
              <button onClick={() => setChoosenRooms(...choosenRooms,data.szobaszam)} className="flex justify-center items-center w-[4.5vh] h-[3vh] border-solid border-2 border-orange-400 rounded-full">
                {choosenRooms.includes(room.szobaszam) && <div className="w-[3vh] h-[2vh] bg-orange-400 rounded-full"></div>}
              </button>
            </div>
          ))}
        </div>
        <button 
          className="px-[6vh] py-[1vh] rounded-2xl bg-[#ff9634] font-opensans uppercase shadow-[2px_15px_10px_5px_rgba(0,0,0,0.6)] -translate-y-[4vh] text-orange-950"
        >
          {checkDate
            ? state[0].endDate
              ? "Lefoglalom, tovább a fizetésre"
              : "Időpontot választok"
            : "Foglalás"}
        </button>
      </div>
    </section>
  );
}

const CalendarContainer = styled.div`
  backdrop-filter: blur(10px);
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
