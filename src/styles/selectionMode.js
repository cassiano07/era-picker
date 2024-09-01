import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  optionArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonDate: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: "center",
    alignItems: 'center',    
    borderWidth: 1,
    borderColor: '#6e7bf2',
    padding: 5,
    flex: 1
  },
  buttonDateText: {
  },
  buttonTime: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderColor: '#6e7bf2',
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
    padding: 5
  },
});

export {
  styles
};