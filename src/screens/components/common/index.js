import {lazy} from 'react';
export default {
  text: lazy(()=>import('./text')),
  list: lazy(()=>import('./list')),
  normal_list: lazy(()=>import('./normal_list')),
  button: lazy(()=>import('./button')),
  image: lazy(()=>import('./image')),
  icon: lazy(()=>import('./icon')),
  input: lazy(()=>import('./inputs/default/text')),
 
  // ...comp,
}
