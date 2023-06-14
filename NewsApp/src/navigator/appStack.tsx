import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppLoader from '../components/appLoader/appLoader';
import MainStack from './mainStack';

export type Props = {
  isLanguageSaved: boolean;
};

const AppStack: React.FC<Props> = ({isLanguageSaved}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <NavigationContainer>
      {isLoading ? <AppLoader /> : <MainStack />}
    </NavigationContainer>
  );
};

export default AppStack;
