import styled from 'styled-components'

export const Container = styled.ScrollView`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  margin-bottom: 15px;  
`

export const ContentList = styled.View`
  border-bottom-color: gray;
  border-bottom-width: 1px;
  padding: 10px 0;
`

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: true,
})`
  margin-top: 20px
`

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`

export const Stat = styled.View`
  flex-direction: row;  
  text-align: right;
`
export const Name = styled.Text`
  font-weight: bold;
  color: #333;
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

export const ModalCloseButton = styled.TouchableOpacity`
  background: #ff8080;
  color: #FFF;
  padding: 6px;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  align-items: center;
`