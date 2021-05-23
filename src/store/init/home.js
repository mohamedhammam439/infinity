import {buildStyles , fullButtonStyle , inputStyles , labelStyles} from '_helpers/functions/build/styles.js'
import appStyles from 'app-global-styles.json'

export default {
  body: {
    head: {
      comp: {type: 'layout.flex'},
      styles: buildStyles('container', {flex:1,flexDirection:"row", flexWrap:'wrap' ,maxHeight:'55vh', backgroundColor: "gray" , justifyContent:'center' , alignItems:'center'}),

      comps:{
        card1: {
          comp:{type:'layout.flex'},
          styles: buildStyles('container' , {margin:15, backgroundColor:'green' , justifyContent:'center' , alignItems:'center', width:280 , height:80}),

          comps:{
            bestseller: {
                  comp: {type: 'common.text'},
                  value: 'bestseller',
            }
          }
        }, card2: {
          comp:{type:'layout.flex'},
          styles: buildStyles('container' , {margin:15, backgroundColor:'red', justifyContent:'center' , alignItems:'center', width:280 , height:80}),

          comps:{
            bestseller: {
                  comp: {type: 'common.text'},
                  value: 'bestseller2',
            }
          }
        }, card3: {
          comp:{type:'layout.flex'},
          styles: buildStyles('container' , {margin:15, backgroundColor:'green', justifyContent:'center' , alignItems:'center', width:280 , height:80}),
          css: 'red',
          comps:{
            bestseller: {
                  comp: {
                    type: 'common.text'
                  },
                  value: 'bestseller3',
                  // styles: buildStyles('text' , {color:'white'}),

            }
          }
        }, card4: {
          comp:{type:'layout.flex'},
          styles: buildStyles('container' , {margin:15, backgroundColor:'red', justifyContent:'center' , alignItems:'center', width:280 , height:80}),

          comps:{
            bestseller: {
                  comp: {type: 'common.text'},
                  value: 'bestseller4',
            }
          }
        },card5: {
          comp:{type:'layout.flex'},
          styles: buildStyles('container' , {margin:15, backgroundColor:'green' , justifyContent:'center' , alignItems:'center', width:280 , height:80}),

          comps:{
            bestseller: {
                  comp: {type: 'common.text'},
                  value: 'bestseller5',
            }
          }
        }, card6: {
          comp:{type:'layout.flex'},
          styles: buildStyles('container' , {margin:15, backgroundColor:'red', justifyContent:'center' , alignItems:'center', width:280 , height:80}),

          comps:{
            bestseller: {
                  comp: {type: 'common.text'},
                  value: 'bestseller6',
            }
          }
        }, card7: {
          comp:{type:'layout.flex'},
          styles: buildStyles('container' , {margin:15, backgroundColor:'green', justifyContent:'center' , alignItems:'center', width:280 , height:80}),

          comps:{
            bestseller: {
                  comp: {type: 'common.text'},
                  value: 'bestseller7',
            }
          }
        }, card8: {
          comp:{type:'layout.flex'},
          styles: buildStyles('container' , {margin:15, backgroundColor:'red', justifyContent:'center' , alignItems:'center', width:280 , height:80}),

          comps:{
            bestseller: {
                  comp: {type: 'common.text'},
                  value: 'bestseller8',
            }
          }
        }, card9: {
          comp:{type:'layout.flex'},
          styles: buildStyles('container' , {margin:15, backgroundColor:'red', justifyContent:'center' , alignItems:'center', width:290 , height:80}),

          comps:{
            bestseller: {
                  comp: {type: 'common.text'},
                  value: 'bestseller8',
            }
          }
        }
        

      }
    
      // comps: {
      //   head: {
      //     comp: {type: 'layout.flex'},
      //     styles: buildStyles('container', {paddingVertical: 20,marginBottom: 0,marginTop: 30,backgroundColor: "#fcf7ff",alignItems: "center",justifyContent: "center",}),
          
      //     comps:{
      //       tittle: {
      //         comp: {type: 'common.text'},
      //         value: 'Mince',
      //         styles: buildStyles('text', {fontSize: 20,}),
      //       }  
      //     }
      //   },
      //   navbar: {
      //     comp: {type: 'layout.flex'},
      //     styles: buildStyles('container', { flexDirection: "row",alignItems: "flex-start",justifyContent: "flex-start"}),
       
      //     comps:{
      //       bestseller: {
      //         comp: {type: 'common.text'},
      //         value: 'bestseller',
      //         styles: buildStyles('text', {backgroundColor: "#fff",color: "#cb3e76",paddingVertical: 5,paddingHorizontal: 20,borderRadius: 5,marginHorizontal: 5,shadowColor: "#fcf7ff",shadowOffset: {width: 5,height: 5,},shadowOpacity: 0.8,shadowRadius: 10,elevation: 10}),
      //       } ,
      //       burger: {
      //         comp: {type: 'common.text'},
      //         value: 'Burger',
      //         styles: buildStyles('text', {backgroundColor: "#3b2845",color: "white",paddingVertical: 5,paddingHorizontal: 20,borderRadius: 5,marginHorizontal: 5,shadowColor: "#fcf7ff",shadowOffset: {width: 5,height: 5,},shadowOpacity: 0.8,shadowRadius: 10,elevation: 10}),
      //       }  ,
      //       hotdogs: {
      //         comp: {type: 'common.text'},
      //         value: 'Hotdogs',
      //         styles: buildStyles('text', {marginHorizontal: 5,backgroundColor: "#fff",color: "#3b2845",paddingVertical: 5,paddingHorizontal: 20,borderRadius: 5,shadowColor: "#fcf7ff",shadowOffset: {width: 5,height: 5,},shadowOpacity: 0.8,shadowRadius: 10,elevation: 10}),
      //       }     ,
      //       fridChiken: {
      //         comp: {type: 'common.text'},
      //         value: 'FridChicken',
      //         styles: buildStyles('text', {marginHorizontal: 5,backgroundColor: "#fff",color: "#3b2845",paddingVertical: 5,paddingHorizontal: 20,borderRadius: 5,shadowColor: "#fcf7ff",shadowOffset: {width: 5,height: 5,},shadowOpacity: 0.8,shadowRadius: 10,elevation: 10}),
      //       }    
      //     }
      //   },
      //   hTitle:{
      //     comp: {type: 'layout.flex'},
      //     styles: buildStyles('container', {marginLeft: 0,paddingVertical: 15}),

      //     comps:{
      //       tittle: {
      //         comp: {type: 'common.text'},
      //         value: 'Burger',
      //         styles: buildStyles('text', {fontSize: 20,}),
      //       }  
      //     }
      //   },
      //   List: {
      //     comp: {type: 'layout.scroll'},
      //     styles: buildStyles('container', {flexGrow:0, flexDirection: "row",backgroundColor: "#fff",paddingHorizontal: 5,paddingVertical: 5,marginVertical: 10,borderRadius:15,shadowColor: "red",shadowOffset: {width: 2,height: 1,},shadowOpacity: 0.55,shadowRadius: 14.78,elevation: 4}),
          
      //     comps: {
      //       cardTittle: {
      //         comp: {type: 'common.text'},
      //         value: 'card tittle',
      //         styles: buildStyles('text', {padding: 3,color: "black"}),
      //       },
      //       cardContent: {
      //         comp: {type: 'common.text'},
      //         value: 'card content',
      //         styles: buildStyles('text', {padding: 3,color: "red"}),
      //       },
      //       cardPrice:{
      //         comp: {type: 'common.text'},
      //         value: 'card price',
      //         // styles: buildStyles('text', {padding: 3,color: "green"}),
      //         css: 'red.module.scss'
      //       }
      //     },
      //   },


      //     cardOne:{
      //       comp:{type:'layout.wedjes'},
      //       styles: buildStyles('container', {flex:1 ,padding: 5, backgroundColor: "white" , marginBottom: 15 , marginVertical: 10,borderRadius:15,shadowColor: "gray",shadowOffset: {width: 2,height: 1,},shadowOpacity: 0.55,shadowRadius: 14.78,elevation: 4}),
      //       data: {
      //         name:'card1',
      //         tittle: 'hello from wedjes',
      //         content: 'card content',
      //         description: 'description'
      //       }
      //     },
        //  , wedjes:{
        //     comp:{type:'layout.wedjes'},
        //     styles: buildStyles('container', {flex:2 , padding: 5,backgroundColor: "orange" , marginBottom: 15}),
            
        //     data: {
        //       name:'card2',
        //       tittle: 'tittle 2 ',
        //       content: 'content 2'
        //     }
        //   },

        
      //   button: {
      //     comp: {type: 'common.button'},
      //     button: {
      //       styles: fullButtonStyle(),
      //       text: 'Button',
      //       action: {
      //         key: 'formAction',
      //         action: 'submitForm',
      //       },
      //     },
      //   },

      //   // button: {
      //   //   wraps: {
      //   //     nav: {},
      //   //   },
      //   //   comp: {type: 'common.button'},
      //   //   styles: {
      //   //     ...buildStyles('container', {width: '100%', alignItems: 'center', justifyContent: 'center'}),
      //   //   },
      //   //   button: {
      //   //     styles: {
      //   //       ...buildStyles('main', {
      //   //         width: '100%',
      //   //         backgroundColor: appStyles.colors.secondary,
      //   //         marginVertical: '3%',
      //   //         paddingVertical: '3%',
      //   //         alignItems: 'center',
      //   //         justifyContent: 'center',
      //   //       }),
      //   //       ...buildStyles('container', {
      //   //         width: '100%',
      //   //         color: appStyles.colors.icon,
      //   //         alignItems: 'center',
      //   //         justifyContent: 'center',
      //   //       }),
      //   //       ...buildStyles('button', {...appStyles.typo.large_r, color: appStyles.colors.white}),
      //   //     },
      //   //     text: 'Add Replay',
      //   //     action: {
      //   //       key: 'mapParams',
      //   //       params: {
      //   //         app: 'requests.home',
      //   //         request: 'props.route.params.request',
      //   //         id: {key: 'UUID'},
      //   //         body: 'replay',
      //   //         title: 'Replay',
      //   //       },
      //   //       then: {
      //   //         key: 'Navigate',
      //   //         nav: 'Master',
      //   //       },
      //   //     },
      //   //   },
      //   // },
       
      //   wrap: {
      //     comp: {type: 'layout.scroll'},
      //     styles: buildStyles('container', {
      //       marginHorizontal: 20,
      //       marginVertical: 20,
      //     }),
      //     comps: {
      //       Compose: {
      //         comp: {type: 'common.input'},
      //         label: 'Reason',
      //         styles: inputStyles(), ...labelStyles(),
      //         name: 'reason',
      //         blurOnSubmit: false,
      //         multiline: true,
      //         numberOfLines: 7,
      //         validates: {required: true},
      //       },
      //       file: {
      //         comp: {type: 'common.input'},
      //         styles: inputStyles(),
      //         label: 'Attachments',
      //         name: 'attach',
      //         type: 'image',
      //       },
      //     },
      //   },

      //   cardScroll1: {
      //     comp: {type: 'layout.scroll'},
      //     styles: buildStyles('container', {flexGrow:0, flexDirection: "row",backgroundColor: "#fff",paddingHorizontal: 5,paddingVertical: 5,marginVertical: 10,borderRadius:15,shadowColor: "red",shadowOffset: {width: 2,height: 1,},shadowOpacity: 0.55,shadowRadius: 14.78,elevation: 4}),
          
         
      //     comps: {
      //       cardTittle: {
      //         comp: {type: 'common.text'},
      //         value: '11',
      //         styles: buildStyles('text', {padding: 3,color: "black"}),
      //       },
      //       cardContent: {
      //         comp: {type: 'common.text'},
      //         value: '12',
      //         styles: buildStyles('text', {padding: 3,color: "black"}),
      //       },
      //       cardPrice:{
      //         comp: {type: 'common.text'},
      //         value: '13',
      //         styles: buildStyles('text', {display:"flex",padding: 3,color: "black"}),
      //       }
      //     },
      //   },
      //   cardScroll2: {
      //     comp: {type: 'layout.scroll'},
      //     styles: buildStyles('container', {flexGrow:0, flexDirection: "row",backgroundColor: "#fff",paddingHorizontal: 5,paddingVertical: 5,marginVertical: 10,borderRadius:15,shadowColor: "red",shadowOffset: {width: 2,height: 1,},shadowOpacity: 0.55,shadowRadius: 14.78,elevation: 4}),
          
         
      //     comps: {
      //       cardTittle: {
      //         comp: {type: 'common.text'},
      //         value: '21',
      //         styles: buildStyles('text', {padding: 3,color: "black"}),
      //       },
      //       cardContent: {
      //         comp: {type: 'common.text'},
      //         value: '22',
      //         styles: buildStyles('text', {padding: 3,color: "black"}),
      //       },
      //       cardPrice:{
      //         comp: {type: 'common.text'},
      //         value: '23',
      //         styles: buildStyles('text', {display:"flex",padding: 3,color: "black"}),
      //       }
      //     },
      //   },
      //   cardScroll3: {
      //     comp: {type: 'layout.scroll'},
      //     styles: buildStyles('container', {flexGrow:0, flexDirection: "row",backgroundColor: "#fff",paddingHorizontal: 5,paddingVertical: 5,marginVertical: 10,borderRadius:15,shadowColor: "red",shadowOffset: {width: 2,height: 1,},shadowOpacity: 0.55,shadowRadius: 14.78,elevation: 4}),
          
         
      //     comps: {
      //       cardTittle: {
      //         comp: {type: 'common.text'},
      //         value: '31',
      //         styles: buildStyles('text', {padding: 3,color: "black"}),
      //       },
      //       cardContent: {
      //         comp: {type: 'common.text'},
      //         value: '32',
      //         styles: buildStyles('text', {padding: 3,color: "black"}),
      //       },
      //       cardPrice:{
      //         comp: {type: 'common.text'},
      //         value: '33',
      //         styles: buildStyles('text', {display:"flex",padding: 3,color: "black"}),
      //       }
      //     },
      //   },
      //   cardScroll4: {
      //     comp: {type: 'layout.scroll'},
      //     styles: buildStyles('container', {flexGrow:0, flexDirection: "row",backgroundColor: "#fff",paddingHorizontal: 5,paddingVertical: 5,marginVertical: 10,borderRadius:15,shadowColor: "red",shadowOffset: {width: 2,height: 1,},shadowOpacity: 0.55,shadowRadius: 14.78,elevation: 4}),
          
         
      //     comps: {
      //       cardTittle: {
      //         comp: {type: 'common.text'},
      //         value: '41',
      //         styles: buildStyles('text', {padding: 3,color: "black"}),
      //       },
      //       cardContent: {
      //         comp: {type: 'common.text'},
      //         value: '42',
      //         styles: buildStyles('text', {padding: 3,color: "black"}),
      //       },
      //       cardPrice:{
      //         comp: {type: 'common.text'},
      //         value: '43',
      //         styles: buildStyles('text', {display:"flex",padding: 3,color: "black"}),
      //       }
      //     },
      //   },

     
      //  },
    },
  },
 
}


    
    
    
    
 
 
