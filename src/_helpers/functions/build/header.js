export default (title, props)=>({
  title: {
    key: 'DataOrDefault',
    defaults: title,
    path: 'props.scene.route.params.title',
  },
  center: true,
  ...props,
})

export const buildHeader = (title, props)=>({
  header: {
    title: {
      key: 'Constants',
      defaults: title,
    },
    center: true,
    ...props,
  },
})
