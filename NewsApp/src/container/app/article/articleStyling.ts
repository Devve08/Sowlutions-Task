import {StyleSheet} from 'react-native';

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      padding: 16,
    },
    image: {
      height: 200,
      marginBottom: 16,
    },
    content: {
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    source: {
      fontSize: 16,
      color: '#888888',
      marginBottom: 8,
    },
    publishedAt: {
      fontSize: 14,
      color: '#888888',
      marginBottom: 16,
    },
    description: {
      fontSize: 18,
      marginBottom: 8,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 12,
      borderRadius: 4,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default styles