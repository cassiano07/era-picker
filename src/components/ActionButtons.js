import { View, Pressable, Text } from 'react-native';
import { styles } from '../styles/actionButtons';

export default function ActionButtons({ cleanDate, setShowCalendar, options }) {
  return (
    <View style={styles.buttonArea}>
      <Pressable style={styles.buttonClean} onPress={cleanDate}>
        <Text style={styles.buttonCleanText}>{options.translation?.['Clear'] || 'Clear'}</Text>
      </Pressable>
      <Pressable style={styles.buttonDone} onPress={() => setShowCalendar(prevValue => !prevValue)}>
        <Text style={styles.buttonDoneText}>{options.translation?.['Done'] || 'Done'}</Text>
      </Pressable>
    </View>
  );
}