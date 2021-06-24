import { buildStyles } from "_helpers/functions/build/styles.js";

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
                head: {
                  comp: { type: "layout.flex" },
                  styles: buildStyles("container", {
                    flexDirection: "row",
                    padding: 3,
                  }),
                  comps: {
                    icon: {
                      comp: { type: "common.icon" },
                      type: "Entypo",
                      name: "chevron-left",
                      size: 30,
                      color: "#024a60",
                      marginTop: 5,
                    },
                    head: {
                      comp: { type: "common.text" },
                      value: "Explore",
                      styles: buildStyles("text", {
                        fontSize: 30,
                        color: "#024a60",
                        marginHorizontal: 5,
                      }),
                    },
                  },
                },
              },
            },
          },
        },
        content: {
          comp: { type: "layout.scroll" },
          styles: buildStyles(
            "container",
            {
              display: "flex",
              height: "90%",
              width: "100%",
              padding: 5,
              marginRight: 1,
              backgroundColor: "#fafbfc",
            },
            "content",
            {
              justifyContent: "center",
            }
          ),
          comps: {
            share: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                backgroundColor: "#fafbfc",
                width: "100%",
                height: 50,
                marginVertical: 10,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
              }),
              comps: {
                input: {
                  comp: { type: "common.text" },
                  value: "search",
                  styles: buildStyles("text", {
                    color: "gray",
                    backgroundColor: "#ffffff",
                    width: "95%",
                    height: 45,
                    fontSize: 24,
                  }),
                },
              },
            },
            tags: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                flexDirection: "row",
              }),
              comps: {
                tag1: {
                  comp: { type: "common.text" },
                  value: "Pepole",
                  styles: buildStyles("text", {
                    fontSize: 20,
                    color: "#024a60",
                    backgroundColor: "#e1e8eb",
                    borderRadius: 15,
                    paddingVertical: 5,
                    paddingHorizontal: 25,
                    marginVertical: 10,
                    marginHorizontal: 2,
                  }),
                },
                tag2: {
                  comp: { type: "common.text" },
                  value: "Groups",
                  styles: buildStyles("text", {
                    fontSize: 20,
                    color: "#024a60",
                    backgroundColor: "#e1e8eb",
                    borderRadius: 15,
                    paddingVertical: 5,
                    paddingHorizontal: 25,
                    marginVertical: 10,
                    marginHorizontal: 2,
                    opacity: 0.7,
                  }),
                },
                tag3: {
                  comp: { type: "common.text" },
                  value: "Products",
                  styles: buildStyles("text", {
                    fontSize: 20,
                    color: "#024a60",
                    backgroundColor: "#e1e8eb",
                    borderRadius: 15,
                    paddingVertical: 5,
                    paddingHorizontal: 25,
                    marginHorizontal: 2,
                    marginVertical: 10,
                    opacity: 0.7,
                  }),
                },
              },
            },
            cards: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {  flexDirection: "row",
              flexWrap: "wrap", }),

              comps: {
                card1: {
                  comp: { type: "layout.wedjes" },
                  type: "card2",
                  styles: buildStyles("container", {
                    padding: 5,
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    width: 157,
                    minHeight: 130,
                    margin:5,
                    borderWidth: 1,
                    borderColor: "#d6d6d6",
                  }),
                  data: {
                    ImageProfile: "a",
                    tittle: "Nerea Asensio",
                    content: "Yogi from Spain that use energies zen and ",
                    followers: "1k followers",
                  },
                },
                card2: {
                  comp: { type: "layout.wedjes" },
                  type: "card2",
                  styles: buildStyles("container", {
                    padding: 5,
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    width: 157,
                    minHeight: 130,
                    margin:5,
                    borderWidth: 1,
                    borderColor: "#d6d6d6",
                  }),

                  data: {
                    tittle: "Nerea Asensio",
                    content: "Yogi from Spain that use energies zen and ",
                    followers: "1k followers",
                  },
                },
                card3: {
                  comp: { type: "layout.wedjes" },
                  type: "card2",
                  styles: buildStyles("container", {
                    padding: 5,
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    width: 157,
                    minHeight: 130,
                    margin:5,
                    borderWidth: 1,
                    borderColor: "#d6d6d6",
                  }),
                  data: {
                    tittle: "Nerea Asensio",
                    content: "Yogi from Spain that use energies zen and ",
                    followers: "1k followers",
                  },
                },
                card4: {
                  comp: { type: "layout.wedjes" },
                  type: "card2",
                  styles: buildStyles("container", {
                    padding: 5,
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    width: 157,
                    minHeight: 130,
                    margin:5,
                    borderWidth: 1,
                    borderColor: "#d6d6d6",
                  }),
                  data: {
                    tittle: "Nerea Asensio",
                    content: "Yogi from Spain that use energies zen and ",
                    followers: "1k followers",
                  },
                },
                card5: {
                  comp: { type: "layout.wedjes" },
                  type: "card2",
                  styles: buildStyles("container", {
                    padding: 5,
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    width: 157,
                    minHeight: 130,
                    margin:5,
                    borderWidth: 1,
                    borderColor: "#d6d6d6",
                  }),
                  data: {
                    tittle: "Nerea Asensio",
                    content: "Yogi from Spain that use energies zen and ",
                    followers: "1k followers",
                  },
                },
                card6: {
                  comp: { type: "layout.wedjes" },
                  type: "card2",
                  styles: buildStyles("container", {
                    padding: 5,
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    width: 157,
                    minHeight: 130,
                    margin:5,
                    borderWidth: 1,
                    borderColor: "#d6d6d6",
                  }),
                  data: {
                    tittle: "Nerea Asensio",
                    content: "Yogi from Spain that use energies zen and ",
                    followers: "1k followers",
                  },
                },
              },
            },
          },
        },
        //   footer: {
        //     comp: { type: "layout.flex" },
        //     styles: buildStyles("container", {
        //       display: "flex",
        //       flexDirection: "row",
        //       backgroundColor: "#ffffff",
        //       // height: 100,
        //       width: "100%",
        //       paddingVertical:7
        //     }),

        //     comps: {
        //       headIcon: {
        //         comp: { type: "layout.flex" },
        //         styles: buildStyles("container", {
        //           display: "flex",
        //           flexDirection: "row",
        //           width: "100%",
        //           justifyContent: "space-around",
        //         }),

        //         comps: {
        //           iconHome: {
        //             comp: { type: "layout.flex" },
        //             comps:{
        //               icon:{
        //                 comp: { type: "common.icon" },
        //                 type: 'Entypo',
        //                 name: 'home',
        //                 size: 30,
        //                 color: "#024a60",
        //               },
        //               text:{
        //                 comp:{type:'common.text'},
        //                 value:'Home'
        //               }
        //             }
        //           },
        //           Icon2: {
        //             comp: { type: "layout.flex" },
        //             comps:{
        //               icon:{
        //                 comp: { type: "common.icon" },
        //                 type: 'MaterialCommunityIcons',
        //                 name: 'clock-outline',
        //                 size: 30,
        //                 color: "#024a60",
        //               },
        //               text:{
        //                 comp:{type:'common.text'},
        //                 value:'Book'
        //               }
        //             }
        //           },
        //           Icon3: {
        //             comp: { type: "layout.flex" },
        //             comps:{
        //               icon:{
        //                 comp: { type: "common.icon" },
        //                 type: 'MaterialCommunityIcons',
        //                 name: 'shopping-outline',
        //                 size: 30,
        //                 color: "#024a60",
        //               },
        //               text:{
        //                 comp:{type:'common.text'},
        //                 value:'Shop'
        //               }
        //             }
        //           },

        //           Icon4: {
        //             comp: { type: "layout.flex" },
        //             comps:{
        //               icon:{
        //                 comp: { type: "common.icon" },
        //                 type: 'AntDesign',
        //                 name: 'shoppingcart',
        //                 size: 30,
        //                 color: "#024a60",
        //               },
        //               text:{
        //                 comp:{type:'common.text'},
        //                 value:'My Cart'
        //               }
        //             }
        //           },
        //           Icon5: {
        //             comp: { type: "layout.flex" },
        //             comps:{
        //               icon:{
        //                 comp: { type: "common.icon" },
        //                 type: 'FontAwesome5',
        //                 name: 'user',
        //                 size: 30,
        //                 color: "#024a60",
        //               },
        //               text:{
        //                 comp:{type:'common.text'},
        //                 value:'Profile'
        //               }
        //             }
        //           },
        //         },
        //       },
        //     },
        //   },
      },
    },
  },
};
