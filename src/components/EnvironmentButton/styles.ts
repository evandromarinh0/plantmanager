import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface RectButtonProps {
  isActive?: boolean;
}

export const Container = styled(RectButton)<RectButtonProps>`
  background: ${props => props.isActive ? '#DAF2E4' : '#F0F0F0'} ;
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 4px;
`;

export const Title = styled.Text<RectButtonProps>`
  color: ${props => props.isActive ? '#2B7A4B' : '#52665A'};
  font-family: ${props => props.isActive ? 'Jost_600SemiBold' : 'Jost_400Regular'};
`;