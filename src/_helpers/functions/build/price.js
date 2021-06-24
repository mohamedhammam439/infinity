import {rowSplitStyles} from '_helpers/functions/build/styles';
const currency= {
  key: 'Constants',
  defaults: 'EGP',
}
export const price = (paths)=>({
  comp: {type: 'common.text'},
  fun: {
    key: 'joining',
    separate: ' ',
    funs: {
      price: {
        path: paths.price,
        key: 'toCommas',
      },
      currency,
    },
  },
})
export default (paths, merging)=>({
  comp: {type: 'layout.flex'},
  styles: merging.styles || rowSplitStyles({maxWidth: '50%'}),
  comps: {
    left: {
      comp: {type: 'common.text'},
      ...merging.title,
    },
    right: price(paths),
  },
})
