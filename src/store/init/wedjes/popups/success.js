import appStyles from 'app-global-styles.json'
import {buildStyles} from '_helpers/functions/build/styles'
export default (text='Request sent Success')=>({
  comps: {
    body: {
      comp: {type: 'layout.flex'},
      styles: buildStyles('container', {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 200,
      }),
      comps: {
        icon: {
          comp: {type: 'common.icon'},
          color: appStyles.colors.success,
          type: 'FontAwesome',
          name: 'check-circle',
          size: 40,
        },
        text: {
          comp: {type: 'common.text'},
          value: text,
          styles: buildStyles('text', {...appStyles.typo.large_r, color: appStyles.colors.success}),
        },
      },
    },
  },
})
