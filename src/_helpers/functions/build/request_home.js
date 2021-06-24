import {iconContainer, shadowStyle, buildStyles} from './styles'
import appStyles from 'app-global-styles.json';
import {merge} from 'lodash';

export default (icon, text, app, colors, merging, props={}) => (merge({
  comp: {
    type: 'layout.click',
  },
  styles: {
    ...shadowStyle({
      marginVertical: 10,
      marginHorizontal: '1%',
      width: '48%',
      justifyContent: 'center',
      minHeight: 120,
      backgroundColor: colors.card || appStyles.colors.white,
      borderRadius: 20,
      borderWidth: 1,
      ...props?.shadow,
    }),
  },
  wraps: {
    nav: {},
  },
  click: {
    key: 'Navigate',
    nav: 'Master',
    params: app.app ? {...app, title: text}:{app, title: text},
  },
  comps: {
    container: {
      comp: {type: 'layout.flex'},
      styles: buildStyles('container', {
        paddingHorizontal: 15,
        width: '100%',
      }),
      comps: {
        iconContainer: {
          comp: {type: 'layout.flex'},
          styles: {
            ...iconContainer(colors),
          },
          comps: {
            icon: {
              comp: {type: 'common.icon'},
              type: 'AntDesign',
              props: {
                size: 28,
                color: colors.icon,
                ...icon,
              },
            },
          },
        },
        text: {
          comp: {type: 'common.text'},
          styles: props.text || buildStyles('text', appStyles.typo.res),
          value: text,
        },
      },
    },
  },
}, merging))
