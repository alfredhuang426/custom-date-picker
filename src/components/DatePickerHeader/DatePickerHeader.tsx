import { addMonths, format, subMonths } from "date-fns";
import { Dispatch, FC, SetStateAction } from "react";
import styles from "./DatePickerHeader.module.css";

type DatePickerHeaderProps = {
  headerChosenDate: Date;
  setHeaderChosenDate: Dispatch<SetStateAction<Date>>;
};

export const DatePickerHeader: FC<DatePickerHeaderProps> = ({
  headerChosenDate,
  setHeaderChosenDate,
}) => {
  return (
    <header className={styles?.header}>
      <button
        className={styles?.button}
        onClick={() => setHeaderChosenDate(subMonths(headerChosenDate, 1))}
      >
        &lt;
      </button>
      <span className={styles?.title}>
        {format(headerChosenDate, "yyyy年M月")}
      </span>
      <button
        className={styles?.button}
        onClick={() => setHeaderChosenDate(addMonths(headerChosenDate, 1))}
      >
        &gt;
      </button>
    </header>
  );
};
