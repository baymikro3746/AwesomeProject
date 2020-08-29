import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { color,space,size,flexbox, layout,borderRadius } from 'styled-system'

const Button = styled(TouchableOpacity)(
  flexbox,
  space,
  color,
  size,
  layout,
  borderRadius
)

Button.defaultProps = {
  flexDirection : 'row',
  alignItems : 'center',
  justifyContent :'center',
  color : '#000'
}

export default Button