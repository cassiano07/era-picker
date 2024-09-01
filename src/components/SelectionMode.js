import { View, Pressable, Text } from 'react-native';
import { styles } from '../styles/selectionMode';

export default function SelectionMode({ showDate, setShowDate, mode, options }) {

  switch (mode) {
    case 'timestamp':
      break;
    case 'date':
      return null;
    case 'time':
      return null;
    case 'range_date':
      return null;
  }
  
  const dateBgColor = {
    backgroundColor: showDate ? '#6e7bf2' : null,
  }

  const dateTextColor = {
    color: showDate ? 'white' : '#6e7bf2'
  }

  const timeBgColor = {
    backgroundColor: showDate ? null : '#6e7bf2',
  }

  const timeTextColor = {
    color: showDate ? '#6e7bf2' : 'white'
  }

  return (
    <View style={styles.optionArea}>
      <Pressable style={[styles.buttonDate, dateBgColor]} onPress={() => setShowDate(true)}>
        <Text style={[styles.buttonDateText, dateTextColor]}>{options.translation?.['Date'] || 'Date'}</Text>
      </Pressable>
      <Pressable style={[styles.buttonTime, timeBgColor]} onPress={() => setShowDate(false)}>
        <Text style={[styles.buttonDateText, timeTextColor]}>{options.translation?.['Time'] || 'Time'}</Text>
      </Pressable>
    </View>
  );
}