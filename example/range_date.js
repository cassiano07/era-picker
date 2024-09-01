import EraPicker from 'era-picker';
import { View, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { format } from 'date-fns';

export default function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);


  return (
    <View style={styles.container}>

      <Button
        onPress={() => setShowCalendar(prevValue => !prevValue)}
        color="#302f34"
        title={startDate && endDate ? `${format(startDate, 'dd/MM/yyyy')} - ${format(endDate, 'dd/MM/yyyy')}` : 'Select a period'}
      />

      {showCalendar &&
        < EraPicker
          defaultDate={new Date()}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setShowCalendar={setShowCalendar}
          mode="range_date"
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative'
  }
});