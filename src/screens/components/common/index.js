import {lazy} from 'react';
export default {
  text: lazy(()=>import('./text')),
  list: lazy(()=>import('./list')),
  normal_list: lazy(()=>import('./normal_list')),
  button: lazy(()=>import('./button')),
  // input: lazy(()=>import('./inputs')),
 
  // ...comp,
}
