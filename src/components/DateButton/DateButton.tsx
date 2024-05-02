import { Dispatch, FC, SetStateAction } from "react";
import styles from "./DateButton.module.css";
import { compareAsc, isToday } from "date-fns";

type DateButtonProps = {
  headerChosenDate: Date;
  date: Date;
  startDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
};

export const DateButton: FC<DateButtonProps> = ({
  headerChosenDate,
  date,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const handleDateRange = () => {
    if (!startDate) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (!endDate) {
        if (compareAsc(startDate, date) === -1) {
          setEndDate(date);
        } else if (compareAsc(startDate, date) === 1) {
          setStartDate(date);
          setEndDate(null);
        }
      } else {
        setStartDate(date);
        setEndDate(null);
      }
    }
  };

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <button
      className={`${styles?.button} ${
        isToday(date) ? styles?.["is-today"] : ""
      } ${
        headerChosenDate.getMonth() === date.getMonth()
          ? ""
          : styles?.["non-current-month"]
      } 
      ${startDate ? (isSameDay(startDate, date) ? styles?.active : "") : ""} 
      ${endDate ? (isSameDay(endDate, date) ? styles?.active : "") : ""}
      ${
        startDate && endDate
          ? date > startDate && date < endDate
            ? styles?.active
            : ""
          : ""
      }
      `}
      onClick={handleDateRange}
    >
      {date?.getDate()}
    </button>
  );
};
