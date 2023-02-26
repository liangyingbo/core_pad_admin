import { viteMockServe } from 'vite-plugin-mock'


export function setupMockPlugin(isBuild) {
    return (viteMockServe({
        mockPath: 'mock',
        localEnabled: !isBuild,
    }))
}