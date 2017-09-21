export interface Action<T> {
  readonly type: string
  readonly payload: T
  readonly error?: boolean
  readonly meta?: any
}

export interface HandlersMap<T> {
  readonly [type: string]: (action: Action<any>) => T,
}

export interface ById<T> {
  readonly [id: string]: T
}

export type AllIds = string[]

export interface State<T> {
  readonly byId: ById<T>,
  readonly allIds: AllIds,
}
