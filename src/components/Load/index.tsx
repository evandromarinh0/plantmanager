import React from 'react';
import { Container } from "./styles";
import LottieView from 'lottie-react-native';

import loadingAnimation from '../../assets/load.json';

export function Load() {
  return(
    <Container>
      <LottieView 
        source={loadingAnimation}
        autoPlay
        loop
        style={{ width: 200, height: 200, backgroundColor: 'transparent' }}
      />
    </Container>   
  );
}