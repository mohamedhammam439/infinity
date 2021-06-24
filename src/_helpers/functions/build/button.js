import {buildStyles} from './styles';
import appStyles from 'app-global-styles.json'
import {merge} from 'lodash';
export default (text, click, styles, props)=>(merge({
  comp: {type: 'layout.click'},
  // wraps: {nav: {}},
  styles: buildStyles('container', {alignItems: 'center', justifyContent: 'center', ...styles.container}),
  click,
  comps: {
    text: {
      comp: {type: 'common.text'},
      styles: buildStyles('text', {...appStyles.typo.res, ...styles.text}),
      ...text,
    },
  },
}, props))
