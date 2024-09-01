import { View, Text } from 'react-native';
import { generateRandomKey } from '../utils/dateUtils';
import { styles } from '../styles/daysOfWeek';


export default function DaysOfWeek({ daysOfWeek }) {
  const renderDaysOfWeek = (day) => {
    return (
      <View style={styles.day} key={generateRandomKey()}>
        <Text style={styles.dayOfWeekText}>{day.slice(0, 3)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.daysOfWeek}>
      {daysOfWeek.map((day) => renderDaysOfWeek(day))}
    </View>
  );
}