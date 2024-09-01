import { View, Pressable, Text } from 'react-native';
import { generateRandomKey } from '../utils/dateUtils';
import { styles } from '../styles/days';

export default function Days({ days, prevMonth, nextMonth, date, selectDate, startDate, endDate, datePicked, mode, fmtTimestamp, fmtDate, fmtTime }) {

  let changeColor = false;
  const renderDay = (item) => {
    if (item === 1) changeColor = !changeColor;
    const color = changeColor ? 'white' : '#a8a7ad';
    let selectDay
    const newDate = new Date(new Date(date).setDate(item))
    let borderRadius = { borderRadius: 40 }
    switch (mode) {
      case 'timestamp':
        if (datePicked) selectDay = fmtTimestamp(datePicked) == fmtTimestamp(newDate) && changeColor ? '#6e7bf2' : null
        break;
      case 'date':
        if (datePicked) selectDay = fmtDate(datePicked) == fmtDate(newDate) && changeColor ? '#6e7bf2' : null
        break;
      case 'time':
        if (datePicked) selectDay = fmtTime(datePicked) == fmtTime(newDate) && changeColor ? '#6e7bf2' : null
        break;
      case 'range_date':
        const formattedNewDate = fmtDate(newDate);

        if (startDate && endDate) {
          const formattedStartDate = fmtDate(startDate);
          const formattedEndDate = fmtDate(endDate);
          selectDay = newDate >= startDate && newDate <= endDate && changeColor ? '#6e7bf2' : null
          if (formattedStartDate !== formattedEndDate) {
            borderRadius = {};

            if (formattedStartDate === formattedNewDate) {
              borderRadius = {
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              };
            }

            if (formattedEndDate === formattedNewDate) {
              borderRadius = {
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20
              };
            }
          }
        }
        else if (startDate){
          const formattedStartDate = fmtDate(startDate);
          selectDay = formattedNewDate == formattedStartDate && changeColor ? '#6e7bf2' : null
        }
        else if (endDate) {
          const formattedEndDate = fmtDate(endDate);
          selectDay = formattedNewDate == formattedEndDate && changeColor ? '#6e7bf2' : null
        }
        else
          selectDay = null
        break;
    }

    let onPress;
    if (changeColor) {
      onPress = () => selectDate(item)
    } else {
      if (item > 15) {
        onPress = () => prevMonth();
      } else {
        onPress = () => nextMonth();
      }
    }

    return (
      <Pressable
        style={[styles.day, { backgroundColor: selectDay }, borderRadius]}
        key={generateRandomKey()}
        onPress={onPress}
      >
        <Text style={[styles.numberOfTheDay, { color: color }]}>{item}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.dayArea}>
      {days.map((item) => renderDay(item))}
    </View>
  );
}