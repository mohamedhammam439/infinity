import {successPopup} from './constants'
import {buildStyles, fieldStyle} from './styles'
import owners from '_helpers/modules/fields/owner'
import unit from '_helpers/modules/fields/unit'
import reason from '_helpers/modules/fields/reason'
import {assign, mapValues} from 'lodash'
import {two_side} from '_helpers/app/widgets/units'
// import applyFilters from '_helpers/functions/filters'
// import {partner} from 'fixed_data/wiz'
export const summAcc = (merging, ass)=>(assign({
  comp: {type: 'layout.scroll'},
  wraps: {form_vals: {}},
  comps: {
    units: {
      title: 'Selected Unit',
      expanded: true,
      comp: {type: 'common.Accordian'},
      wraps: {
        condition: {
          path: 'props.values.unit.unit',
        },
      },
      comps: {
        unit: {
          wraps: {
            fun: {
              key: 'multiApply',
              apps: {
                unit: {
                  key: 'chain',
                  path: 'props.values.unit',
                  selectors: {
                    units: 'unit',
                  },
                },
              },
            },
          },
          ...two_side(),

          ...merging.unit_select,
        },
      },
    },
    owners: {
      title: 'Partners',
      expanded: true,
      wraps: {
        condition: {
          path: 'props.values.partner',
        },
      },
      // comp: {type: 'layout.flex'},
      comp: {type: 'common.Accordian'},
      comps: mapValues(owners, (d)=>({...d, ...(d.show_type || {type: 'label'})})),
      ...merging.owners,
    },
    remove: {
      title: 'Removed Partner',
      expanded: true,
      wraps: {
        condition: {
          path: 'props.values.remove',
        },
      },
      // comp: {type: 'layout.flex'},
      comp: {type: 'common.Accordian'},
      comps: {
        partner: {
          comp: {type: 'common.input'},
          name: 'remove',
          type: 'label',
          label: 'Removed Owner',
          ...fieldStyle(),
          val_fun: {
            key: 'chain',
            display: 'fullname',
            selectors: {
              partners: 'partner',
            },
          },
        },
      },
      ...merging.remove,
    },
    plan: {
      expanded: true,
      title: 'Choosen Plan',
      wraps: {
        condition: {
          path: 'props.values.payment.plan',
        },
      },
      // comp: {type: 'layout.flex'},
      comp: {type: 'common.Accordian'},
      comps: {
        partner: {
          comp: {type: 'common.input'},
          name: 'payment',
          type: 'label',
          label: 'Choosen Plan',
          ...fieldStyle(),
          val_fun: {
            key: 'chain',
            display: 'name',
            selectors: {
              plans: 'plan',
            },
          },
        },
      },
      ...merging.remove,
    },
    unit: {
      expanded: true,
      title: 'Unit Data',
      comp: {type: 'common.Accordian'},
      // comp: {type: 'layout.flex'},
      wraps: {
        condition: {
          path: 'props.values.unit_data',
        },
      },
      comps: mapValues(unit, (d)=>({...d, type: 'label'})),
      ...merging.unit,
    },
    reason: {
      expanded: true,
      comp: {type: 'common.Accordian'},
      title: 'Reasons',
      wraps: {
        condition: {
          path: 'props.values.reason',
        },
      },
      check: {path: 'props.values.unit.unit'},
      comps: mapValues(reason, (d)=>({...d, ...(d.show_type || {type: 'label'})})),
      ...merging.reason,
    },
    scedule: {
      expanded: true,
      comp: {type: 'common.Accordian'},
      title: 'Selected Date',
      wraps: {
        condition: {
          path: 'props.values.schedule',
        },
      },
      comps: {
        expanded: true,
        date: {
          comp: {type: 'common.input'},
          name: 'schedule.date',
          type: 'label',
          label: 'Selected Date',
          ...fieldStyle(),
          val_fun: {
            key: 'FormatDate',
            format: 'LLL',
          },
        },
      },
      ...merging.schedule,
    },
    ...merging.comps,
  },
}, ass))
const summaries = (merging={})=>({
  label: 'Review',
  comps: {
    form: summAcc(merging),
  },
})
export default (form, steps, summary={}, props)=>({
  comp: {type: 'layout.stepper'},
  styles: buildStyles('container', {flex: 1}),
  action: {
    key: 'executePropsFun',
    fun: 'submitForm',
  },
  wraps: {
    Form: {
      init: {
        key: 'Constants',
        defaults: {},
      },
      onSubmit: {
        key: 'GoBack',
        then: successPopup(),
      },
      ...form,
    },
    nav: {},
  },
  steps: {
    ...steps,
    summary: summaries(summary),
  },
  ...props,
})

export const buildSummary = ()=>({})
