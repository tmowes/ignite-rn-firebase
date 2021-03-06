import { TouchableOpacityProps } from 'react-native'
import { ComponentProps } from 'react'

import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconProps = TouchableOpacityProps & {
  color?: 'success' | 'alert' | 'default'
  size?: 'small' | 'large'
  icon?: ComponentProps<typeof MaterialIcons>['name']
}

export type ContainerProps = {
  color: 'success' | 'alert' | 'default'
  size: 'small' | 'large'
}
