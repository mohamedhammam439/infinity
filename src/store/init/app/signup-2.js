import {
  buildStyles,
  fullButtonStyle,
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
        content: {
          comp: { type: "layout.flex" },
          styles: buildStyles("container", {
            display: "flex",
            width: "100%",
            padding: 10,
            backgroundColor: "#ffffff",
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
                paddingTop: 10,
              }),

              comps: {
                headTittle: {
                  comp: { type: "layout.flex" },
                  styles: buildStyles("container", {
                    width: "100%",
                    padding: 3,
                  }),

                  comps: {
                    head: {
                      comp: { type: "layout.flex" },
                      styles: buildStyles("container", {
                        flexDirection: "row",
                        padding: 0,
                      }),
                      comps: {
                        icon: {
                          comp: { type: "common.icon" },
                          type: "Entypo",
                          name: "chevron-left",
                          size: 30,
                          color: "#024a60",
                        },
                        head: {
                          comp: { type: "common.text" },
                          value: "Tell us more about you",
                          styles: buildStyles("text", {
                            fontSize: 30,
                            fontWeight: "bold",
                            color: "#024a60",
                            marginHorizontal: 3,
                          }),
                        },
                      },
                    },
                  },
                },
              },
            },
            tittle: {
              comp: { type: "common.text" },
              value: "What do you do ? ",
              styles: buildStyles("text", {
                fontSize: 25,
                fontWeight: "bold",
                color: "#024a60",
                marginHorizontal: 5,
                marginVertical: 30,
              }),
            },
            opOne: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                flexDirection: "row",
                paddingVertical: 5,
                paddingHorizontal: 12,
                backgroundColor: "#ffffff",
                borderWidth: 0.3,
                borderColor: "#d6d6d6",
                borderRadius: 13,
                shadowColor: "#d6d6d6",
                shadowOffset: {
                  width: 0.5,
                  height: 0.5,
                },
                shadowOpacity: 0.55,
                shadowRadius: 13,
                elevation: 0,
                marginVertical: 10,
              }),

              comps: {
                headTittle: {
                  comp: { type: "layout.flex" },
                  styles: buildStyles("container", {
                    padding: 0,
                    marginVertical: 30,
                  }),

                  comps: {
                    head: {
                      comp: { type: "layout.flex" },
                      styles: buildStyles("container", {
                        flexDirection: "row",
                      }),
                      comps: {
                        icon: {
                          comp: { type: "common.icon" },
                          type: "AntDesign",
                          name: "checksquare",
                          size: 20,
                          color: "#024a60",
                        },
                        head: {
                          comp: { type: "common.text" },
                          value: "I offer services in alternative medicine",
                          styles: buildStyles("text", {
                            fontSize: 20,
                            color: "#024a60",
                            marginHorizontal: 10,
                          }),
                        },
                      },
                    },
                  },
                },
              },
            },
            opTwo: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                flexDirection: "row",
                paddingVertical: 5,
                paddingHorizontal: 12,
                backgroundColor: "#ffffff",
                borderWidth: 0.3,
                borderColor: "#d6d6d6",
                borderRadius: 13,
                shadowColor: "#d6d6d6",
                shadowOffset: {
                  width: 0.5,
                  height: 0.5,
                },
                shadowOpacity: 0.55,
                shadowRadius: 13,
                elevation: 0,
                marginVertical: 10,
              }),

              comps: {
                headTittle: {
                  comp: { type: "layout.flex" },
                  styles: buildStyles("container", {
                    padding: 0,
                    marginVertical: 30,
                  }),

                  comps: {
                    head: {
                      comp: { type: "layout.flex" },
                      styles: buildStyles("container", {
                        flexDirection: "row",
                      }),
                      comps: {
                        icon: {
                          comp: { type: "common.icon" },
                          type: "AntDesign",
                          name: "checksquare",
                          size: 20,
                          color: "#024a60",
                          marginTop: 5,
                        },
                        head: {
                          comp: { type: "common.text" },
                          value: "I sell products",
                          styles: buildStyles("text", {
                            fontSize: 20,
                            color: "#024a60",
                            marginHorizontal: 10,
                          }),
                        },
                      },
                    },
                  },
                },
              },
            },
            opThree: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                flexDirection: "row",
                paddingVertical: 5,
                paddingHorizontal: 12,
                backgroundColor: "#ffffff",
                borderWidth: 0.3,
                borderColor: "#d6d6d6",
                borderRadius: 13,
                shadowColor: "#d6d6d6",
                shadowOffset: {
                  width: 0.5,
                  height: 0.5,
                },
                shadowOpacity: 0.55,
                shadowRadius: 13,
                elevation: 0,
                marginVertical: 10,
              }),

              comps: {
                headTittle: {
                  comp: { type: "layout.flex" },
                  styles: buildStyles("container", {
                    marginVertical: 30,
                    padding: 0,
                  }),

                  comps: {
                    head: {
                      comp: { type: "layout.flex" },
                      styles: buildStyles("container", {
                        flexDirection: "row",
                      }),
                      comps: {
                        icon: {
                          comp: { type: "common.icon" },
                          type: "AntDesign",
                          name: "checksquare",
                          size: 20,
                          color: "#024a60",
                          marginTop: 5,
                        },
                        head: {
                          comp: { type: "common.text" },
                          value: "I am a customer",
                          styles: buildStyles("text", {
                            fontSize: 20,
                            color: "#024a60",
                            marginHorizontal: 10,
                          }),
                        },
                      },
                    },
                  },
                },
              },
            },

            button: {
              comp: { type: "common.button" },
              button: {
                styles: fullButtonStyle(),
                text: "Next",
              },
            },
          },
        },
      },
    },
  },
};
