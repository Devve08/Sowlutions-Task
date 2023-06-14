import {StyleSheet} from 'react-native';

const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      elevation: 3,
      marginHorizontal: 16,
      marginBottom: 16,
    },
    image: {
      height: 200,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      marginBottom: 8,
    },
    date: {
      fontSize: 14,
      color: '#888888',
    },
  });

export default styles;
