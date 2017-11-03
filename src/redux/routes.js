import { routerForBrowser } from 'redux-little-router'

const routes = {
  '/app': {
    '/speaker': {
      '/profile': {},
      '/talks': {},
    },
    '/organizer': {
      '/events': {},
      '/event/:id': {
        '/dashboard': {},
        '/edit': {
          '/cfp': {},
          '/members': {},
        },
        '/cfp': {},
      },
    },
  },
  '/': {
    '/login': {},
  },
}

export const { reducer, middleware, enhancer } = routerForBrowser({ routes })
