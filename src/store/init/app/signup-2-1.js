import {
  buildStyles,
  fullButtonStyle,
  skipButtonStyle
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
                        left: {
                          comp: { type: "layout.flex" },
                          styles: buildStyles("container", {
                            width: "50%",
                            flexDirection: "row",
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
                              value: "Profile set up",
                              styles: buildStyles("text", {
                                fontSize: 30,
                                fontWeight: "bold",
                                color: "#024a60",
                                marginHorizontal: 3,
                              }),
                            },
                          },
                        },
                        right: {
                          comp: { type: "layout.flex" },
                          styles: buildStyles("container", {
                            width: "50%",
                            flexDirection: "row-reverse",
                            alignItems: "center",
                          }),
                          comps: {
                            skip: {
                              comp: { type: "common.text" },
                              value: "Skip",
                              styles: buildStyles("text", {
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "#9d9d9d",
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
            content: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                justifyContent: "center",
                
              }),
              comps: {
               cont:{
                   comp: {type: "layout.flex"},
                   styles: buildStyles('container' , {alignItems: 'center'}),
                   comps:{
                    iamge: {
                        comp: { type: "common.text" },
                        value: "${image}",
                        styles: buildStyles("text", {
                          fontSize: 2,
                          color: "#34cb34",
                          backgroundColor: "#024a60",
                          width: "100%",
                          height: 150,
                          borderRadius: 10,
                          marginVertical: 70,
                        }),
                      },
                    tittle: {
                        comp: { type: "common.text" },
                        value: "You’re all set",
                        styles: buildStyles("text", {
                          fontSize: 30,
                          color: "#323639",
                          marginHorizontal: 5,
                          marginVertical: 10,
                        }),
                      },
                      content: {
                        comp: { type: "common.text" },
                        value: "Take a minute to upload a profile photo",
                        styles: buildStyles("text", {
                          fontSize: 20,
                          color: "#323639",
                          marginHorizontal: 5,
                          marginVertical: 5,
                        }),
                      },
                   }
               },
                button: {
                  comp: { type: "common.button" },
                  button: {
                    styles: fullButtonStyle(),
                    text: "Upload photo",
                  },
                },
                buttonSkip: {
                    comp: { type: "common.button" },
                    button: {
                      styles: skipButtonStyle(),
                      text: "Skip for now",
                    },
                  },
              },
            },
          },
        },
      },
    },
  },
};
