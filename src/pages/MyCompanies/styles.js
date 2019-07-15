import styled from 'styled-components/native'
import LinerGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled(LinerGradient).attrs({
  colors: ['#518499', '#a0daf2'],
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

export const CompanyContent = styled.ScrollView`
  
`

export const Pontuation = styled.Text`
  font-size: 24px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
`

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
  justify-content: space-between;
  padding: 30px 20px; 
`

export const Stat = styled.View`
  flex-direction: row;  
  text-align: right;
`

export const Button = styled.Button`
  background-color: #666;
  color: #FFF;
  font-size: 2px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`