import { AccordionItem } from "./AccordionItem";
import "./accordion-style.css";
import { DailyWeather } from "../../API/apiCalls";

type Accordion = {
  dailyWeather: DailyWeather[];
};

export const Accordion = (props: Accordion) => {
  return (
    <div className="dw-container d-flex flex-column flex-grow-1 w-100 overflow-auto rounded-3">
      {props.dailyWeather.map((dayWeather: DailyWeather, index) => {
        return <AccordionItem dayWeather={dayWeather} key={`day: ${index}`} />;
      })}
    </div>
  );
};
