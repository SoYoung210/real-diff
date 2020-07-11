import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

export function push(targetUrl: string) {
  history.push(targetUrl)
}

export function redirect(targetUrl: string) {
  history.replace(targetUrl)
}
