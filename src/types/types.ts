
export type GameSettingsType = {
  field: number,
  delay: number
}

export type GameSettingsState = {
  error: boolean,
  gameMode: GameSettingsType
}
