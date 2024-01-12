import { config as configBase } from '@tamagui/config'
import { createTamagui } from 'tamagui'

export const config = createTamagui(configBase)

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}