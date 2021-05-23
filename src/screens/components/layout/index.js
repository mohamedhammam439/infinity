import {lazy} from 'react'
export default {
  flex: lazy(()=>import('./flex')),
  click: lazy(()=>import('./click')),
  scroll: lazy(()=>import('./scroll')),
  wedjes: lazy(()=>import('./wedjes')),
}

