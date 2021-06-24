import { buildStyles , buttonStyle } from "_helpers/functions/build/styles.js";

export default {
  // Home card
  card1: {
    comp: { type: "layout.flex" },
    styles: buildStyles("container", { width: "100%" }),

    comps: {
      head: {
        comp: { type: "layout.flex" },
        styles: buildStyles("container", {
          padding: 3,
          marginBottom: 0,
          marginTop: 0,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }),

        comps: {
          profile: {
            comp: { type: "layout.flex" },
            styles: buildStyles("container", {
              backgroundColor: "#ffffff",
              flexDirection: "row",
            }),
            comps: {
              ImageProfile: {
                comp: { type: "common.text" },
                value: "${ImageProfile}",
                styles: buildStyles("text", {
                  fontSize: 2,
                  color: "#e4def8",
                  backgroundColor: "#e4def8",
                  width: 60,
                  height: 60,
                  borderRadius: 15,
                }),
              },
              profileName: {
                comp: { type: "layout.flex" },
                comps: {
                  tittle: {
                    comp: { type: "common.text" },
                    value: "${tittle}",
                    styles: buildStyles("text", {
                      fontSize: 20,
                      fontWeight: "bold",
                      marginHorizontal: 10,
                      marginVertical: 5,
                    }),
                  },
                  time: {
                    comp: { type: "common.text" },
                    value: "${time}",
                    styles: buildStyles("text", {
                      marginHorizontal: 10,
                      marginVertical: 1,
                    }),
                  },
                },
              },
            },
          },

          content: {
            comp: { type: "common.text" },
            value: "${content}",
            styles: buildStyles("text", {
              fontSize: 20,
              color: "#323639",
              marginVertical: 10,
            }),
          },
          tags: {
            comp: { type: "common.text" },
            value: "${tags}",
            styles: buildStyles("text", {
              fontSize: 20,
              color: "#024a60",
              backgroundColor: "#e1e8eb",
              borderRadius: 15,
              paddingVertical: 5,
              paddingHorizontal: 15,
            }),
          },
          iamge: {
            comp: { type: "common.text" },
            value: "${image}",
            styles: buildStyles("text", {
              fontSize: 2,
              color: "#34cb34",
              backgroundColor: "#34cb34",
              width: "100%",
              height: 250,
              borderRadius: 10,
              marginVertical: 10,
            }),
          },
          count: {
            comp: { type: "layout.flex" },
            styles: buildStyles("container", {
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 3,
            }),

            comps: {
              like: {
                comp: { type: "layout.flex" },
                styles: buildStyles("container", {
                  flexDirection: "row",
                  padding: 3,
                }),
                comps: {
                  icon: {
                    comp: { type: "common.icon" },
                    type: "AntDesign",
                    name: "heart",
                    size: 15,
                    color: "#024a60",
                  },
                  like: {
                    comp: { type: "common.text" },
                    value: "8",
                    styles: buildStyles("text", {
                      fontSize: 15,
                      color: "#888889",
                      marginHorizontal: 5,
                    }),
                  },
                },
              },

              comment: {
                comp: { type: "layout.flex" },
                styles: buildStyles("container", {
                  flexDirection: "row",
                  padding: 3,
                }),
                comps: {
                  comment: {
                    comp: { type: "common.text" },
                    value: "84 comment",
                    styles: buildStyles("text", {
                      fontSize: 15,
                      color: "#888889",
                      marginHorizontal: 5,
                    }),
                  },
                },
              },
            },
          },
          social: {
            comp: { type: "layout.flex" },
            styles: buildStyles("container", {
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 3,
            }),

            comps: {
              like: {
                comp: { type: "layout.flex" },
                styles: buildStyles("container", {
                  flexDirection: "row",
                  padding: 3,
                }),
                comps: {
                  icon: {
                    comp: { type: "common.icon" },
                    type: "AntDesign",
                    name: "hearto",
                    size: 20,
                    color: "#024a60",
                  },
                  like: {
                    comp: { type: "common.text" },
                    value: "Like",
                    styles: buildStyles("text", {
                      fontSize: 20,
                      color: "black",
                      marginHorizontal: 5,
                    }),
                  },
                },
              },

              comment: {
                comp: { type: "layout.flex" },
                styles: buildStyles("container", {
                  flexDirection: "row",
                  padding: 3,
                }),
                comps: {
                  icon: {
                    comp: { type: "common.icon" },
                    type: "EvilIcons",
                    name: "comment",
                    size: 30,
                    color: "#024a60",
                  },
                  comment: {
                    comp: { type: "common.text" },
                    value: "comment",
                    styles: buildStyles("text", {
                      fontSize: 20,
                      color: "black",
                      marginHorizontal: 5,
                    }),
                  },
                },
              },
              share: {
                comp: { type: "layout.flex" },
                styles: buildStyles("container", {
                  flexDirection: "row",
                  padding: 3,
                }),
                comps: {
                  icon: {
                    comp: { type: "common.icon" },
                    type: "AntDesign",
                    name: "sharealt",
                    size: 20,
                    color: "#024a60",
                  },
                  share: {
                    comp: { type: "common.text" },
                    value: "share",
                    styles: buildStyles("text", {
                      fontSize: 20,
                      color: "black",
                      marginHorizontal: 5,
                    }),
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  // Explore card

  card2: {
    comp: { type: "layout.flex" },
    styles: buildStyles("container", { backgroundColor: "#ffffff" }),

    comps: {
      head: {
        comp: { type: "layout.flex" },
        // styles: buildStyles('container', {paddingVertical: 20,marginBottom: 0,marginTop: 0,backgroundColor: "#fcf7ff",alignItems: "center",justifyContent: "center",}),

        comps: {
          tittle: {
            comp: { type: "layout.flex" },
            styles: buildStyles("container", { flexDirection: "row" }),
            comps: {
              img: {
                comp: { type: "common.text" },
                value: "${image}",
                styles: buildStyles("text", {
                  fontSize: 2,
                  color: "#e4def8",
                  backgroundColor: "#663af9",
                  width: 50,
                  height: 50,
                  borderRadius: 15,
                }),
              },
              tittle: {
                comp: { type: "common.text" },
                value: "${tittle}",
                styles: buildStyles("text", {
                  fontSize: 20,
                  fontWeight: "bold",
                  marginHorizontal: 10,
                  marginVertical: 5,
                  flexWrap: "wrap",
                  width: 90,
                  height: 40,
                }),
              },
            },
          },
          content: {
            comp: { type: "common.text" },
            value: "${content}",
            styles: buildStyles("text", { fontSize: 20, color: "#323639" }),
          },
          followers: {
            comp: { type: "layout.flex" },
            styles: buildStyles("container", { flexDirection: "row" }),
            comps: {
              img: {
                comp: { type: "common.text" },
                value: "${image}",
                styles: buildStyles("text", {
                  fontSize: 2,
                  color: "#e4def8",
                  backgroundColor: "#e4def8",
                  width: 25,
                  height: 25,
                  borderRadius: 15,
                  marginTop: 5,
                }),
              },
              tittle: {
                comp: { type: "common.text" },
                value: "${followers}",
                styles: buildStyles("text", {
                  fontSize: 20,
                  fontWeight: "bold",
                  marginHorizontal: 10,
                  marginVertical: 5,
                  flexWrap: "wrap",
                }),
              },
            },
          },
        },
      },
    },
  },

  // Explore card
  card3: {
    comp: { type: "layout.flex" },
    styles: buildStyles("container", { backgroundColor: "#ffffff" }),

    comps: {
      head: {
        comp: { type: "layout.flex" },
        comps: {
          iamge: {
            comp: { type: "common.text" },
            value: "${image}",
            styles: buildStyles("text", {
              fontSize: 2,
              color: "#34cb34",
              backgroundColor: "gray",
              width: "100%",
              height: 250,
              borderRadius: 10,
              marginVertical: 10,
            }),
          },
          tittle: {
            comp: { type: "common.text" },
            value: "${tittle}",
            styles: buildStyles("text", { fontSize: 15, color: "#888889" }),
          },
          content: {
            comp: { type: "common.text" },
            value: "${content}",
            styles: buildStyles("text", { fontSize: 20,fontWeight:'bold', color: "#323639" }),
          },
          date: {
            comp: { type: "layout.flex" },
            styles: buildStyles("container", {
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 3,
            }),
            comps:{
              time:{
                comp: {type: 'common.text'},
                value: "13 November 2020",
                styles: buildStyles('text', {
                  color: '#006f74',
                  fontSize: 16
                })
              },
              count:{
                comp: {type: 'common.text'},
                value: "84 are going",
                styles: buildStyles('text', {
                  color: '#888889',
                  fontSize: 14
                })
              }
            }
          },
         button:{
           comp: {type: 'layout.flex'},
           styles: buildStyles('container',{flexDirection: 'row-reverse'}),
           comps:{
            button: {
              comp: {type: 'common.button'},
              button: {
                styles: buttonStyle(),
                text: 'Assist',
              },
            },
           }
         }
        },
      },
    },
  },
};
