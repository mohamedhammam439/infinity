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
            head: {
              comp: { type: "common.text" },
              value: "Citrena",
              styles: buildStyles("text", {
                fontSize: 40,
                color: "#ffe016",
                fontWeight: "bold",
                marginHorizontal: 5,
              }),
            },
            tittle: {
              comp: { type: "common.text" },
              value: "Join Hollistic",
              styles: buildStyles("text", {
                fontSize: 45,
                fontWeight: "bold",
                color: "#024a60",
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
                fontSize: 24,
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
            Password: {
              comp: { type: "common.text" },
              value: "Password",
              styles: buildStyles("text", {
                color: "#323639",
                width: "95%",
                fontSize: 24,
                marginTop: 25,
                marginBottom: 10,
              }),
            },
            pass: {
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
            validation: {
              comp: { type: "common.text" },
              value: "6 more characters",
              styles: buildStyles("text", {
                color: "#9d9d9d",
                fontSize: 14,
                marginTop: 10,
              }),
            },
            button: {
              comp: { type: "common.button" },
              button: {
                styles: fullButtonStyle(),
                text: "Continue",
              },
            },
            sign: {
              comp: { type: "layout.flex" },
              styles: buildStyles("container", {
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }),
              comps: {
                text: {
                  comp: { type: "common.text" },
                  value: "Already have an account?",
                  styles: buildStyles("text", {
                    color: "#9d9d9d",
                    fontSize: 24,
                  }),
                },
                sign: {
                  comp: { type: "common.text" },
                  value: "Sign in",
                  styles: buildStyles("text", {
                    color: "#024a60",
                    fontWeight: "normal",
                    fontSize: 24,
                    marginLeft: 3,
                  }),
                },
              },
            },
          },
        },
      },
    },
  },
};
