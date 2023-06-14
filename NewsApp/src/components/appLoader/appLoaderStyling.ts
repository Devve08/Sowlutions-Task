import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      justifyContent: 'center',
      zIndex: 100,
      alignItems: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0.6)',
      height: 800,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    containerBtn: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activityIndicator: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    activityIndicatorColor: {
      color: 'black',
    },
  });
};

export default styles;
