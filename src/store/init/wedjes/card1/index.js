import {buildStyles} from '_helpers/functions/build/styles.js'
import { someData } from '../../../../_helpers/functions/filters/main'

export default {
    card1:{
        comp:{type:'layout.flex'},
        // styles: buildStyles('container', { width:'100%' }),

        comps: {
            head: {
              comp: {type: 'layout.flex'},
              styles: buildStyles('container', {paddingVertical: 20 ,marginBottom: 0,marginTop: 0,alignItems: "center",justifyContent: "center",}),
              
              comps:{
                tittle: {
                  comp: {type: 'common.text'},
                  value: '${tittle}',
                  styles: buildStyles('text', {fontSize: 20, color: "red", border: '1px solid red'}),
                }  ,
                content: {
                  comp: {type: 'common.text'},
                  value: '${content}',
                  styles: buildStyles('text', {fontSize: 20, color: "blue"}),
                }   ,
                description: {
                  comp: {type: 'common.text'},
                  value: '${description}',
                  styles: buildStyles('text', {fontSize: 20, color: "black"}),
                }  
              }
            },
        }

    }
    , 
  //   card2:{
  //     comp:{type:'layout.flex'},
  //     styles: buildStyles('container', {backgroundColor: 'blue'}),

  //     comps: {
  //         head: {
  //           comp: {type: 'layout.flex'},
  //           styles: buildStyles('container', {paddingVertical: 20,marginBottom: 0,marginTop: 0,backgroundColor: "#fcf7ff",alignItems: "center",justifyContent: "center",}),
            
  //           comps:{
  //             tittle: {
  //               comp: {type: 'common.text'},
  //               value: '${tittle}',
  //               styles: buildStyles('text', {fontSize: 20, color: "red" , backgroundColor: 'orange'}),
  //             },
  //             content: {
  //               comp: {type: 'common.text'},
  //               value: '${content}',
  //               styles: buildStyles('text', {fontSize: 20, color: "red"}),
  //             }  
  //           }
  //         },
  //     }

  // }
}