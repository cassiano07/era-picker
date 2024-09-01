import EraPicker from 'era-picker';
import { View, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { format } from 'date-fns';

export default function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [datePicked, setDatePicked] = useState(false);

  return (
    <View style={styles.container}>
      
      <Button
        onPress={() => setShowCalendar(prevValue => !prevValue)}
        color="#302f34"
        title={datePicked ? format(datePicked, 'HH:mm:ss') : 'Select a time'}
      />

      {showCalendar &&
        <EraPicker
          defaultDate={new Date()}
          datePicked={datePicked}
          setDatePicked={setDatePicked}
          setShowCalendar={setShowCalendar}
          mode="time"
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