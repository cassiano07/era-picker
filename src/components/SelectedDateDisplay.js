import { View, Text } from 'react-native';
import { styles } from '../styles/selectedDateDisplay';

export default function SelectedDateDisplay({ datePicked, startDate, endDate, mode, fmtDate, fmtTimestamp, fmtTime }) {

  let formattedStartDate
  let formattedEndDate
  switch (mode) {
    case 'timestamp':
      if (datePicked) formattedStartDate = fmtTimestamp(datePicked)
      break;
    case 'date':
      if (datePicked) formattedStartDate = fmtDate(datePicked)
      break;
    case 'time':
      if (datePicked) formattedStartDate = fmtTime(datePicked)
      break;
    case 'range_date':
      if (startDate) formattedStartDate = fmtDate(startDate)
      if (endDate) formattedEndDate = fmtDate(endDate)
      break;
  }

  if (!formattedStartDate && !formattedEndDate) return null

  return (
    <View style={styles.dateArea}>
      <Text style={styles.dateText}>
        {formattedStartDate}{formattedEndDate ? ` - ${formattedEndDate}` : null}
      </Text>
    </View>
  );
}