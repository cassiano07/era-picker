import { View, Pressable, Text } from 'react-native';
import { styles } from '../styles/monthSwitcher';

export default function MonthSwitcher({ months, date, nextMonth, prevMonth }) {

  return (
    <View style={styles.header}>
      <Pressable onPress={prevMonth} style={styles.arrowArea}>
        <Text style={styles.arrow}>{'<'}</Text>
      </Pressable>
      <Text style={styles.title}>{months[date.getMonth()]} {date.getFullYear()}</Text>
      <Pressable onPress={nextMonth} style={styles.arrowArea}>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
    </View>
  );
}