import {
  buildStyles,
  fullButtonStyle,
  inputStyles,
  labelStyles,
  shadowStyle,
} from "_helpers/functions/build/styles.js";




export default {
  body: {
    container: {
      comp: { type: "layout.flex" },
      styles: buildStyles("container", {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#ffffff",
        padding: 0,
        marginTop: 30,
      }),
      comps: {
        header: {
          comp: { type: "layout.flex" },
          styles: buildStyles("container", {
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#ffffff",
            height: 60,
            width: "100%",
            padding: 10,
          }),

          comps: {
            headTittle: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", { width: "50%", padding: 3 }),

              comps: {
                tittle: {
                  comp: { type: "common.text" },
                  value: "Home",
                  styles: buildStyles("text", {
                    fontSize: 30,
                    color: "#024a60",
                    width: "50%",
                  }),
                },
              },
            },
            headIcon: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                display: "flex",
                flexDirection: "row",
                width: "50%",
                justifyContent: "space-around",
                paddingVertical: 3,
              }),

              comps: {
                Icon1: {
                  comp: { type: "common.icon" },
                  type: 'Octicons',
                  name: 'diff-added',
                  size: 30,
                  color: "#024a60",
                },
                Icon2: {
                  comp: { type: "common.icon" },
                  type: 'Ionicons',
                  name: 'search',
                  size: 30,
                  color: "#024a60",
                },
                Icon3: {
                  comp: { type: "common.icon" },
                  type: 'FontAwesome',
                  name: 'envelope-o',
                  size: 30,
                  color: "#024a60",
                },
              },
            },
          },
        },
        content: {
          comp: { type: "layout.scroll" },
          styles: buildStyles("container", {
            display: "flex",
            height: "84%",
            width: "100%",
            padding: 5,
            marginRight: 1,
            backgroundColor: "#e9eff2",
          },'content' , {
            justifyContent:'center',

          }),
          comps: {
            share: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                backgroundColor: "#e9eff2",
                width: "100%",
                height: 80,
                marginVertical: 10,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
              }),
              comps: {
                label: {
                  comp: { type: "common.text" },
                  value: "Share with your community",
                  styles: buildStyles("text", {
                    color: "#323639",
                    fontSize: 24,
                  }),
                },
                input: {
                  comp: { type: "common.text" },
                  value: "input: start creating your post",
                  styles: buildStyles("text", {
                    color: "gray",
                    backgroundColor: "#ffffff",
                    width: "80%",
                    fontSize: 24,
                  }),
                },
              },
            },
            card1: {
              comp: { type: "layout.wedjes" },
                styles: buildStyles("container", {
                  padding: 5,
                  backgroundColor: '#ffffff',
                  marginBottom: 15,                
                  borderRadius:10,
                }),
              data: {
                ImageProfile:"a",
                tittle: "profile-name",
                time:'day 1',
                content: "yoga course is on the Nile yoga course is on the Nile yoga course is on the Nile",
                tags: "#YogaGoals",
                image: "a",
              },
            },
            card2: {
              comp: { type: "layout.wedjes" },
              styles: buildStyles("container", {
                padding: 5,
                backgroundColor: '#ffffff',
                marginBottom: 15,
                borderRadius:10,
              }),

              data: {
                ImageProfile:"a",
                tittle: "card 2 ",
                time: 'day 2',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                tags: "#tags",
                image: "image",
              },
            },
            card3: {
              comp: { type: "layout.wedjes" },
              type: "card3",
              styles: buildStyles("container", {
                padding: 5,
                backgroundColor: '#ffffff',
                marginBottom: 15,                
                borderRadius:10,
              }),
              data: {
                tittle: "Voldenpark, Amsterdam",
                content: "Outdoor Yoga - What to Expect? | Yoga Heidelberg",
                tags: "#tags",
              },
            },
            card4: {
              comp: { type: "layout.wedjes" },
              styles: buildStyles("container", {
                padding: 5,
                backgroundColor: '#ffffff',
                marginBottom: 15,
                borderRadius:10,
              }),

              data: {
                name: "card2",
                tittle: "Image & tittle ",
                time: 'day 2',
                content: "content",
                tags: "#tags",
                image: "image",
              },
            },
            card5: {
              comp: { type: "layout.wedjes" },
              styles: buildStyles("container", {
                padding: 5,
                backgroundColor: '#ffffff',
                marginBottom: 15,
                borderRadius:10,
              }),

              data: {
                name: "card2",
                tittle: "tittle 2 ",
                time: 'day 2',
                content: "content",
                tags: "#tags",
                image: "image",
              },
            },
            card6: {
              comp: { type: "layout.wedjes" },
              type: "card3",
              styles: buildStyles("container", {
                padding: 5,
                backgroundColor: '#ffffff',
                marginBottom: 15,
                borderRadius:10,
              }),
              data: {
                tittle: "tittle from card 2 ",
                content: "content from card 2",
              },
            }
        
          },
        },
        footer: {
          comp: { type: "layout.flex" },
          styles: buildStyles("container", {
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#ffffff",
            // height: 100,
            width: "100%",
            paddingVertical:7
          }),

          comps: {
            headIcon: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }),

              comps: {
                iconHome: {
                  comp: { type: "layout.flex" },
                  comps:{
                    icon:{
                      comp: { type: "common.icon" },
                      type: 'Entypo',
                      name: 'home',
                      size: 30,
                      color: "#024a60",
                    },
                    text:{
                      comp:{type:'common.text'},
                      value:'Home'
                    }
                  }
                },
                Icon2: {
                  comp: { type: "layout.flex" },
                  comps:{
                    icon:{
                      comp: { type: "common.icon" },
                      type: 'MaterialCommunityIcons',
                      name: 'clock-outline',
                      size: 30,
                      color: "#024a60",
                    },
                    text:{
                      comp:{type:'common.text'},
                      value:'Book'
                    }
                  }
                },
                Icon3: {
                  comp: { type: "layout.flex" },
                  comps:{
                    icon:{
                      comp: { type: "common.icon" },
                      type: 'MaterialCommunityIcons',
                      name: 'shopping-outline',
                      size: 30,
                      color: "#024a60",
                    },
                    text:{
                      comp:{type:'common.text'},
                      value:'Shop'
                    }
                  }
                },

                Icon4: {
                  comp: { type: "layout.flex" },
                  comps:{
                    icon:{
                      comp: { type: "common.icon" },
                      type: 'AntDesign',
                      name: 'shoppingcart',
                      size: 30,
                      color: "#024a60",
                    },
                    text:{
                      comp:{type:'common.text'},
                      value:'My Cart'
                    }
                  }
                },
                Icon5: {
                  comp: { type: "layout.flex" },
                  comps:{
                    icon:{
                      comp: { type: "common.icon" },
                      type: 'FontAwesome5',
                      name: 'user',
                      size: 30,
                      color: "#024a60",
                    },
                    text:{
                      comp:{type:'common.text'},
                      value:'Profile'
                    }
                  }
                },
              },
            },
          },
        },
      },
    },
  },
};














































































  // button: {
  //   comp: {type: 'common.button'},
  //   button: {
  //     styles: fullButtonStyle(),
  //     text: 'Button',
  //     action: {
  //       key: 'formAction',
  //       action: 'submitForm',
  //     },
  //   },
  // },

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

//  
