import appStyles from 'app-global-styles.json'
import {buildStyles} from './styles'
export default (icon, text)=>({
  comp: {type: 'layout.flex'},
  styles: buildStyles('container', {flexDirection: 'row', marginHorizontal: '1%'}),
  comps: {
    icon: {
      comp: {type: 'common.icon'},
      size: 18, color: appStyles.colors.secondary,
      ...icon,
    },
    text: {
      comp: {type: 'common.text'},
      styles: buildStyles('text', {...appStyles.typo.small, color: appStyles.colors.secondary}),
      ...text,
    },
  },
})
