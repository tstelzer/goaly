import * as React from 'react'

const register = (instances: React.Component[], route: React.Component) =>
  instances.push(route)

const unregister = (instances: React.Component[], route: React.Component) =>
  instances.splice(instances.indexOf(route), 1)

const matchPath = (pathname: string, opts: any) => {
  const {exact = false, path} = opts
  if (!path) {
    return {
      path: null,
      url: pathname,
      isExact: true,
    }
  }

  const match = new RegExp(`^${path}`).exec(pathname)

  if (!match) {
    // No match.
    return null
  }

  const url = match[0]
  const isExact = pathname === url

  if (exact && !isExact) {
    // There was a mathc, but it wasn't
    // an exact match as specified by
    // the exact prop.
    return null
  }

  return {path, url, isExact}
}

interface RouteProps {
  readonly instances: React.Component[],
  readonly path?: string,
  readonly exact?: boolean,
  readonly component?: () => any,
  readonly render?: (match: any) => any,
}

export class Route extends React.Component<RouteProps, any> {
  render() {
    const {path, exact, component, render} = this.props

    const match = matchPath(window.location.pathname, {path, exact})

    if (!match) {return null}

    if (component) {
      return React.createElement(component, {match})
    }

    if (render) {
      return render({match})
    }

    return null
  }

  public componentWillMount(): void {
    addEventListener('popstate', this.handlePop)
    register(this.props.instances, this)
  }

  public componentWillUnmount(): void {
    unregister(this.props.instances, this)
    removeEventListener('popstate', this.handlePop)
  }

  private readonly handlePop = () => {
    this.forceUpdate()
  }

}
