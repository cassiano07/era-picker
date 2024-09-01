import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dayOfWeekText: {
    color: '#a8a7ad',
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
});

export {
  styles
};