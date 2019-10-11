import styled from 'styled-components'

export const Container = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  margin-bottom: 15px;
`

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`

export const Stats = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

export const Stat = styled.View`
  flex-direction: row;  
  text-align: right;
`

export const StatRight = styled.View`
float: right;
`

export const StatCount = styled.Text`
  margin-left: 6px;
`

export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #666;
`

export const ModalContent = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  margin-bottom: 15px;
  align-items: center;
`

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
`

export const ModalButtons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

export const ModalCloseButton = styled.TouchableOpacity`
  background: #ff8080;
  color: #FFF;
  padding: 6px;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  align-items: center;
`

export const SetUserPontuationButton = styled.TouchableOpacity`
  background: #bfc2bc;
  color: #FFF;
  padding: 6px;
  height: 40px;
  width: 40px;
  border-radius: 30px;
  align-items: center;
`