import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;
  margin-top: 82px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 60px;
`;
export const UserAvatarButton = styled.TouchableOpacity`
  /* margin-top: 32px; */
`;

export const UserAvatar = styled.Image`
  height: 136px;
  width: 136px;
  border-radius: 88px;
  align-self: center;
`;
