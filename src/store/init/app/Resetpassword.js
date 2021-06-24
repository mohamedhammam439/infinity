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
                            value: "Reset password",
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
                value:
                  "Enter de email associated with your account and we will send an email with instructions to reset your password.",
                styles: buildStyles("text", {
                  fontSize: 18,
                  color: "#323639",
                  marginHorizontal: 5,
                  marginVertical: 30,
                }),
              },
              Email: {
                comp: { type: "common.text" },
                value: "Email",
                styles: buildStyles("text", {
                  color: "#323639",
                  width: "95%",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginBottom: 10,
                }),
              },
              input: {
                comp: { type: "common.text" },
                value: "write your email",
                styles: buildStyles("text", {
                  color: "#9d9d9d",
                  width: "95%",
                  fontSize: 24,
                  borderBottomWidth: 1,
                  borderColor: "#d8d8d8",
                }),
              },
              button: {
                comp: { type: "common.button" },
                button: {
                  styles: fullButtonStyle(),
                  text: "Send instructions",
                },
              },
            },
          },
        },
      },
    },
  };
  