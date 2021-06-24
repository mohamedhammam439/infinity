import success from '_helpers/app/widgets/popups/success'

export const successPopup = (text) =>({
  key: 'Dispatching',
  dis: [{type: 'set_main_main', data: {popup: success()}}],
  then: {
    key: 'Delayed',
    delay: 3000,
    fun: {
      key: 'Dispatching',
      dis: [{type: 'set_main_main', data: {popup: {}}}],
    },
  },
})
