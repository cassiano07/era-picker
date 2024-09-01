import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10
  },
  buttonClean: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a8a7ad',
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
    padding: 5
  },
  buttonCleanText: {
    color: '#a8a7ad',
  },
  buttonDone: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#6e7bf2',
    padding: 5,
    flex: 1
  },
  buttonDoneText: {
    color: 'white',
  },
});

export {
  styles
};