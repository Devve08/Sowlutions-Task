import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Modal from 'react-native-modal';
import applyStyles from '../appLoader/appLoaderStyling'


const AppLoader: React.FC = () => {
  return (
    <View style={applyStyles().container}>
      <ActivityIndicator
        animating={true}
        style={applyStyles().activityIndicator}
        color={'black'}
        size={'large'}
      />
    </View>
  );
};

export default AppLoader;
