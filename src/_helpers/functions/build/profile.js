export default (path='main.current', selects)=>({
  key: 'chain',
  path,
  display: 'path',
  selectors: {
    ...selects,
    images: 'profile_image',
  },
  then: {
    key: 'condition',
    success: {
      key: 'Noob',
    },
    fail: {
      key: 'Constants',
      defaults: {
        source: require('assets/profile.jpg'),
      },
    },
  },
})
