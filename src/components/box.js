import styled from 'styled-components'
import { color,space,layout,flexbox,borderRadius } from 'styled-system'
import { View } from 'react-native'

const Box = styled(View)(
  flexbox,
  space,
  layout,
  color,
  borderRadius
)

export default Box