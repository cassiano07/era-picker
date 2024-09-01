import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  contentInput: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputTime: {
    width: 60,
    height: 50,
    borderWidth: 1,
    borderColor: '#6e7bf2',
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  buttonCleanText: {
    color: '#a8a7ad',
  },
});

export {
  styles
};