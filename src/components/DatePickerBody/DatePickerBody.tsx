import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./DatePickerBody.module.css";
import { DateButton } from "../DateButton/DateButton";

type DatePickerBodyProps = {
  headerChosenDate: Date;
  startDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
};

export const DatePickerBody: FC<DatePickerBodyProps> = ({
  headerChosenDate,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [dateList, setDateList] = useState<Date[]>([]);

  useEffect(() => {
    let firstDay = getFirstDayOfMonth(headerChosenDate);
    firstDay = firstDay === 0 ? 7 : firstDay;
    let lastDay = getLastDayOfMonth(headerChosenDate);
    lastDay = lastDay === 0 ? 7 : lastDay;
    const daysInMonth = new Date(
      headerChosenDate.getFullYear(),
      headerChosenDate.getMonth() + 1,
      0
    ).getDate();
    const tempDateList = [];
    for (let i = firstDay - 1; i > 0; i--) {
      tempDateList.push(
        new Date(
          headerChosenDate.getFullYear(),
          headerChosenDate.getMonth(),
          -i + 1
        )
      );
    }
    for (let i = 1; i <= daysInMonth; i++) {
      tempDateList.push(
        new Date(headerChosenDate.getFullYear(), headerChosenDate.getMonth(), i)
      );
    }
    for (let i = 1; i <= 7 - lastDay; i++) {
      tempDateList.push(
        new Date(
          headerChosenDate.getFullYear(),
          headerChosenDate.getMonth() + 1,
          i
        )
      );
    }
    setDateList(tempDateList);
  }, [headerChosenDate]);

  const getFirstDayOfMonth = (d: Date) => {
    let firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
    return firstDay.getDay();
  };

  const getLastDayOfMonth = (d: Date) => {
    let lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    return lastDay.getDay();
  };

  return (
    <div className={styles?.["date-picker-body"]}>
      {dateList.map((date, i) => (
        <DateButton
          date={date}
          key={i}
          headerChosenDate={headerChosenDate}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      ))}
    </div>
  );
};
