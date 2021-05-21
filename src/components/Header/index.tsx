import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { 
  Container,
  Profile,
  Hello,
  Username,
  UserImage
} from './styles';

export function Header() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function loadUsername() {
      const user = await AsyncStorage.getItem('@PlantManager:user');

      setUsername(user || '');
    }
    loadUsername();
  }, []);

  return(
    <Container>
      <Profile>
        <Hello>Olá,</Hello>
        <Username>{username}</Username>
      </Profile>

      <UserImage source={{ uri: 'https://github.com/evandromarinh0.png' }} />
    </Container>
  );
}