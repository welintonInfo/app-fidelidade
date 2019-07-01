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