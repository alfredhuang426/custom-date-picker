import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./DatePicker.module.css";
import { DatePickerHeader } from "../DatePickerHeader/DatePickerHeader";
import { DatePickerBody } from "../DatePickerBody/DatePickerBody";

type DatePickerProps = {
  startDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
};

export const DatePicker: FC<DatePickerProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [headerChosenDate, setHeaderChosenDate] = useState<Date>(new Date());
  return (
    <div className={styles?.["date-picker-layout"]}>
      <DatePickerHeader
        headerChosenDate={headerChosenDate}
        setHeaderChosenDate={setHeaderChosenDate}
      />
      <DatePickerBody
        headerChosenDate={headerChosenDate}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </div>
  );
};
