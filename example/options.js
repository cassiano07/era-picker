import EraPicker from 'era-picker';
import { View, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { format } from 'date-fns';

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

const translation = {
  Date: 'Data',
  Time: 'Hora',
  Clear: 'Limpar',
  Done: 'Concluir',
  Hour: 'Hora',
  Minute: 'Minuto',
  Second: 'Segundo',
}

const options = {
  timestamp_format: 'dd/MM/yyyy HH:mm:ss',
  daysOfWeek,
  months,
  translation
}

export default function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [datePicked, setDatePicked] = useState(false);

  return (
    <View style={styles.container}>
      
      <Button
        onPress={() => setShowCalendar(prevValue => !prevValue)}
        color="#302f34"
        title={datePicked ? format(datePicked, options.timestamp_format) : 'Select a date'}
      />

      {showCalendar &&
        <EraPicker
          defaultDate={new Date()}
          datePicked={datePicked}
          setDatePicked={setDatePicked}
          setShowCalendar={setShowCalendar}
          mode="timestamp"
          options={options}
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