import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

export function push(targetUrl: string) {
  history.push(targetUrl)
}

export function redirect(targetUrl: string) {
  history.replace(targetUrl)
}

export const currentPath = () => new Promise<string>((resolve, _) => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    resolve(tabs[0].url)
  })
})
