import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/time';

const limiteField = {
  hour: 23,
  minute: 59,
  second: 59
}

export default function Time({ date, setDate, setDatePicked, options }) {

  const handleChange = (text, field) => {
    const cleanedText = text.replace(/\D/g, '').slice(0, 2);
    let value = cleanedText ? parseInt(cleanedText, 10) : '';

    if (isNaN(value)) {
      value = '';
    }

    value = value > limiteField[field] ? limiteField[field] : value

    let newDate = new Date(date)
    switch (field) {
      case 'hour':
        newDate.setHours(value);
        break;
      case 'minute':
        newDate.setMinutes(value);
        break;
      case 'second':
        newDate.setSeconds(value);
        break;
    }

    newDate = new Date(newDate)
    if (setDatePicked) setDatePicked(newDate)
    setDate(newDate);
  };

  return (
    <View style={styles.inputArea}>
      <View style={styles.contentInput}>
        <TextInput
          style={styles.inputTime}
          keyboardType="numeric"
          value={new Date(date).getHours().toString()}
          onChangeText={(text) => handleChange(text, 'hour')}
          maxLength={2}
          placeholder="00"
        />
        <Text style={styles.buttonCleanText}>{options.translation?.['Hour'] || 'Hour'}</Text>
      </View>

      <View style={styles.contentInput}>
        <TextInput
          style={styles.inputTime}
          keyboardType="numeric"
          value={new Date(date).getMinutes().toString()}
          onChangeText={(text) => handleChange(text, 'minute')}
          maxLength={2}
          placeholder="00"
        />
        <Text style={styles.buttonCleanText}>{options.translation?.['Minute'] || 'Minute'}</Text>
      </View>

      <View style={styles.contentInput}>
        <TextInput
          style={styles.inputTime}
          keyboardType="numeric"
          value={new Date(date).getSeconds().toString()}
          onChangeText={(text) => handleChange(text, 'second')}
          maxLength={2}
          placeholder="00"
        />
        <Text style={styles.buttonCleanText}>{options.translation?.['Second'] || 'Second'}</Text>
      </View>

    </View>
  );
}