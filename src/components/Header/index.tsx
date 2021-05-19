import React from 'react';
import { 
  Container,
  Profile,
  Hello,
  Username,
  UserImage
} from './styles';

export function Header() {
  return(
    <Container>
      <Profile>
        <Hello>Olá,</Hello>
        <Username>Evandro</Username>
      </Profile>

      <UserImage source={{ uri: 'https://github.com/evandromarinh0.png' }} />
    </Container>
  );
}