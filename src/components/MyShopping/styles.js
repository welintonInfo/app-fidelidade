import styled from 'styled-components'

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

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px
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