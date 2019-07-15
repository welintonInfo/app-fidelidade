import styled from 'styled-components/native'
import LinerGradient from 'react-native-linear-gradient'

export const Container = styled(LinerGradient).attrs({
  colors: ['#518499', '#336f87'],
  start: { x: 0, y:0 },
  end: { x: 1, y:1 },
})`
  flex: 1;  
`