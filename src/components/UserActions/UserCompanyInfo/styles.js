import styled from 'styled-components'

export const Container = styled.ScrollView`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  margin-bottom: 15px;
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
  padding-bottom: 30px;
`
export const LogoEditButton = styled.View`
  position: absolute;
  top: 5%;
  right: 2%; 
  justify-content: center;
  align-items: center;
  border-color: red;
`