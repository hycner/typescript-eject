type AVanilla = (a: string) => number

const AVanilla: AVanilla = (a: string) => a.charCodeAt(0)

export type SharedType = number
const st: SharedType = 1