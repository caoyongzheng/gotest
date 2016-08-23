import R from 'R'
module.exports = {
  path: R.Blog,
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./apps/BlogApp'))
    })
  },
  indexRoute: { onEnter: (nextState, replace) => replace(R.BlogIndex) },
  childRoutes: [
    require('./routes/add'),
    require('./routes/edit'),
    require('./routes/Index'),
    require('./routes/view'),
  ],
}
