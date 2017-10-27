export type Reducer<S, A> = (
  state: S,
  action: A,
) => S

export interface Action<T, P> {
  readonly type: T
  readonly payload: P
  readonly error?: boolean
  readonly meta?: any
}
// export type HandleActions = <S, A>(a: Action<A>, h: HandlersMap<S, A>, s: S) => S

// export interface HandlersMap<S, A> {
//   readonly [i: string]: (action: Action<A>) => S,
// }

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
