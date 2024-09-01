import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { getCalendar } from '../utils/dateUtils';
import { format } from 'date-fns';

import { styles } from '../styles/eraPicker';

import Days from './Days';
import DaysOfWeek from './DaysOfWeek';
import Time from './Time';
import SelectionMode from './SelectionMode';
import ActionButtons from './ActionButtons';
import SelectedDateDisplay from './SelectedDateDisplay';
import MonthSwitcher from './MonthSwitcher';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function EraPicker({ defaultDate, datePicked, setDatePicked, startDate, setStartDate, endDate, setEndDate, setShowCalendar, mode, options = {} }) {
  const [date, setDate] = useState(datePicked || startDate || defaultDate || new Date());
  const [showDate, setShowDate] = useState(true);
  const [days, setDays] = useState([]);

  useEffect(() => {
    updateDays(date);
  }, [date]);

  const updateDays = (date) => {
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const daysArray = getCalendar(currentYear, currentMonth)
    setDays(daysArray);
  }

  const updateMonth = (direction) => {
    setDate(prevDate => {
      const newDate = new Date(prevDate)
      const oldMonth = prevDate.getMonth()
      const oldYear = prevDate.getFullYear()
      const newMonth = (oldMonth + direction + 12) % 12;
      const newYear = newMonth == 0 && oldMonth == 11 ? oldYear + 1 : (newMonth == 11 && oldMonth == 0 ? oldYear - 1 : oldYear);
      newDate.setMonth(newMonth)
      newDate.setYear(newYear)
      return newDate
    })
  }

  const nextMonth = () => updateMonth(1);
  const prevMonth = () => updateMonth(-1);

  const fmtDate = (date) => format(date, options.date_format || 'yyyy/MM/dd')
  const fmtTimestamp = (date) => format(date, options.timestamp_format || 'yyyy/MM/dd HH:mm:ss')
  const fmtTime = (date) => format(date, options.time_format || 'HH:mm:ss')

  const selectDate = (day) => {
    const newDate = new Date(new Date(date).setDate(day));
    setDate(newDate);
    if (setDatePicked) setDatePicked(newDate);
    if (mode == 'range_date') {
      if (!startDate) setStartDate(newDate);
      else if (newDate >= startDate) setEndDate(newDate);
    }
  };

  const cleanDate = () => {
    setDate(defaultDate)
    if (setDatePicked) setDatePicked(false)
    if (setStartDate) setStartDate(false)
    if (setEndDate) setEndDate(false)
  }

  return (
    <View style={styles.container}>
      <SelectionMode
        showDate={showDate}
        setShowDate={setShowDate}
        mode={mode}
        options={options}
      />

      {mode == 'time' &&
        <Time
          date={date}
          setDate={setDate}
          setDatePicked={setDatePicked}
          options={options}
        />
      }

      {mode != 'time' && showDate &&
        <>
          <MonthSwitcher
            months={options.months || months}
            date={date}
            nextMonth={nextMonth}
            prevMonth={prevMonth}
          />

          <DaysOfWeek daysOfWeek={options.daysOfWeek || daysOfWeek} />

          <Days
            days={days}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            date={date}
            selectDate={selectDate}
            startDate={startDate}
            endDate={endDate}
            datePicked={datePicked}
            mode={mode}
            fmtDate={fmtDate}
            fmtTimestamp={fmtTimestamp}
            fmtTime={fmtTime}
          />
        </>
      }

      {!showDate &&
        <Time
          date={date}
          setDate={setDate}
          setDatePicked={setDatePicked}
          options={options}
        />
      }

      <SelectedDateDisplay
        datePicked={datePicked}
        startDate={startDate}
        endDate={endDate}
        mode={mode}
        fmtDate={fmtDate}
        fmtTimestamp={fmtTimestamp}
        fmtTime={fmtTime}
      />

      <ActionButtons
        cleanDate={cleanDate}
        setShowCalendar={setShowCalendar}
        options={options}
      />
    </View>
  );
}