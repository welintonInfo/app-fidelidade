import styled from 'styled-components/native'
import LinerGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled(LinerGradient).attrs({
  colors: ['#7159c1', '#9b49c1'],
  start: { x: 0, y:0 },
  end: { x: 1, y:1 },
})`
  flex: 1;  
  padding-top: ${getStatusBarHeight(true)}px;  
`
export const Name = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
  text-align: center;
`

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #FFF;
  margin-top: 5px;
  line-height: 20px;
  padding: 20px;
`

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px
`

export const LogoContent = styled.View`
  flex: 1;  
  align-items: stretch;  
  justify-content: center; 
`

export const LogoContentTitle = styled.View`
  position: absolute;
  top: 70%;
  bottom: 0;
  left: 0;
  right: 0; 
  justify-content: center;
  align-items: center;
`

export const CompanyContent = styled.View``