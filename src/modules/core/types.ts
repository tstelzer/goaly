export type Reducer<S, A> = (
  state: S,
  action: A,
) => S

export interface Action<T> {
  readonly type: string
  readonly payload: T
  readonly error?: boolean
  readonly meta?: any
}

export interface HandlersMap<T> {
  readonly [type: string]: (action: Action<any>) => T,
}

export interface Entities<T> {
  readonly [id: string]: T
}

export type AllIds = string[]

export interface StateSlice<T> {
  readonly entities: Entities<T>,
  readonly allIds: AllIds,
  readonly ui?: any,
}

export interface StoreSlice<T> {
  readonly [index: string]: StateSlice<T>
}
