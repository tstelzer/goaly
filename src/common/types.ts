export type Reducer<S, A> = (
  state: S,
  action: A,
) => S

// Flux Standard Action
export interface FSA<T, P> {
  readonly type: T
  readonly payload: P
  readonly error?: boolean
  readonly meta?: any
}

export type ID = string

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
