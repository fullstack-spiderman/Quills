import { contextBridge } from 'electron'
import { contextIsolated } from 'process'

if (!contextIsolated) {
  throw new Error('contextIsolation must be enabled in the browser window.')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO:
  })
} catch (error) {
  console.log('Error:', error)
}
