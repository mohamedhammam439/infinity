// import {fetch, fetchApp} from './fetch';
// import {createAll, createApp} from './create';
// import {deleting, deletingApp} from './remove';
// import {updating, updatingApp} from './update';
import {uploadModels} from './extra';
// export function localApp() {
//   return {
//     fetch,
//     createAll,
//     deleting,
//     updating,
//   }
// }
// export function gApp() {
//   return {
//     fetchApp,
//     createApp,
//     deletingApp,
//     updatingApp,
//   }
// }

export function extra() {
  return {
    // clock,
    uploadModels,
  }
}
