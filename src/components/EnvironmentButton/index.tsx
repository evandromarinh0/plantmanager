import React, { useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

interface EnvironmentButtonProps extends RectButtonProperties {
  title: string;
  isActive?: boolean;
}

export function EnvironmentButton({ title, isActive, ...rest }: EnvironmentButtonProps) {
  return(
    <Container isActive={isActive} {...rest}>
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
}