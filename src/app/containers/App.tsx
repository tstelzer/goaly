/* tslint:disable */
import * as React from 'react'

import {SetRepsList} from 'modules/sets'

import 'assets/normalize.css'
import 'assets/reset.scss'
import 'assets/base.scss'
import 'assets/utility.scss'

// TODO: Remove.
import 'assets/react-table.css'

let instances: React.Component[] = []

const register = (route: React.Component) =>
  instances.push(route)

const unregister = (route: React.Component) =>
  instances.splice(instances.indexOf(route), 1)

const historyPush = (path: string) => {
  window.history.pushState({}, path, path)
  instances.forEach(i => i.forceUpdate())
}

const historyReplace = (path: string) => {
  window.history.replaceState({}, path, path)
  instances.forEach(i => i.forceUpdate())
}

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
  readonly path?: string,
  readonly exact?: boolean,
  readonly component?: () => any,
  readonly render?: (match: any) => any,
}

class Route extends React.Component<RouteProps, any> {
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
    register(this)
  }

  public componentWillUnmount(): void {
    unregister(this)
    removeEventListener('popstate', this.handlePop)
  }

  private readonly handlePop = () => {
    this.forceUpdate()
  }

}


interface LinkProps {
  readonly to: string,
  readonly replace?: boolean,
}
class Link extends React.Component<LinkProps, any> {
  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const {replace, to} = this.props
    e.preventDefault()
    replace ? historyReplace(to) : historyPush(to)
  }
  render() {
    const {to, children} = this.props
    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}

const Main = () => (
  <div>
    <h1>Main</h1>
  </div>
)

const Two = () => (
  <div>
    <h1>Two</h1>
  </div>
)

const Three = () => (
  <div>
    <h1>Three</h1>
  </div>
)

const App = () => (
  <div>
    <ul>
      <li><Link to='/'>Main</Link></li>
      <li><Link to='/two'>Two</Link></li>
      <li><Link to='/three'>Three</Link></li>
    </ul>

    <Route path='/' exact component={Main} />
    <Route path='/two' component={Two} />
    <Route path='/three' component={Three} />
  </div>
)

export default App
