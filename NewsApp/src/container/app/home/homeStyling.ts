import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    inputContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    error: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      paddingTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      textDecorationLine: 'underline',
    },
    btnText: {
      color: 'white',
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      width: '75%',
      height: 40,
      paddingHorizontal: 10,
    },
    searchBtn: {
      width: '20%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gray',
      padding: 10,
      borderRadius: 10,
    },
  });
};

export default styles;
