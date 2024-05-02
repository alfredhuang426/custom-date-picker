import { useState } from "react";
import { DatePicker } from "./components/Datepicker/DatePicker";
import { format } from "date-fns";

function App() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className="App">
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <div>Start Date : {startDate ? format(startDate, "yyyy-MM-dd") : ""}</div>
      <div>End Date : {endDate ? format(endDate, "yyyy-MM-dd") : ""}</div>
    </div>
  );
}

export default App;
