export const historyPush = (instances: React.Component[], path: string) => {
  window.history.pushState({}, path, path)
  instances.forEach(i => i.forceUpdate())
}

export const historyReplace = (instances: React.Component[], path: string) => {
  window.history.replaceState({}, path, path)
  instances.forEach(i => i.forceUpdate())
}
