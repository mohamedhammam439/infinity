import {
  buildStyles,
  fullButtonStyle,
  inputStyles,
  labelStyles
} from "_helpers/functions/build/styles.js";
import appStyles from 'app-global-styles.json';
// import {successPopup} from 'store/init/wedjes/popups/success.js'



export default {
  header: {
    title: {
      key: "Constants",
      defaults: "Add Complaint",
    },
    center: true,
  },
  body: {
    main: {
      wraps: {
        Form: {
          onSubmit: {
            key: "multiApply",
            apps: {
              complaints: {
                path: "props.values.complaints",
                key: "mapExtraKeys",
                fun: {
                  key: "mapParams",
                  params: {
                    complaint_date: { key: "Now" },
                    user_id: "main.current.id",
                    is_seen: false,
                    is_handled: false,
                  },
                },
                then: {
                  key: "ObjectToArray",
                },
              },
            },
            then: {
              key: "request.updating",
              then: {
                key: "GoBack",
                // then: successPopup(),
              },
            },
          },
          init: {
            key: "multiApply",
            apps: {
              complaints: {
                key: "mapParams",
                params: {
                  id: { key: "UUID" },
                },
              },
            },
          },
        },
        nav: {},
      },
      comp: {
        type: "layout.flex",
      },
      styles: buildStyles("container", { height: "90%", flex: 1 }),
      comps: {
        body: {
          comp: { type: "layout.scroll" },
          styles: buildStyles("container", {
            marginHorizontal: 20,
            marginVertical: 20,
          }),
          comps: {
            title: {
              comp: { type: "common.text" },
              styles: buildStyles("text", {
                paddingVertical: 3,
                ...appStyles.typo.large_r,
              }),
              value: "Wooops",
            },
            desc: {
              comp: { type: "common.text" },
              styles: buildStyles("text", {
                paddingVertical: 3,
                ...appStyles.typo.meduim,
              }),
              value:
                "We blieve that complaints are constructive opportunity for out business to grow",
            },
            subject: {
              comp: { type: "common.input" },
              reduxName: "complaint_subjects",
              type: "select",
              styles: inputStyles(),
              name: "complaints.subject",
              select: {
                label: "complaint_subject",
              },
              label: "Subject",
            //   validates,
            },
            Compose: {
              comp: { type: "common.input" },
              label: "Compose",
              styles: inputStyles(),
              ...labelStyles(),
              name: "complaints.compaint_content",
              multiline: true,
              blurOnSubmit: false,
            //   validates,
              numberOfLines: 5,
            },
            file: {
              comp: { type: "common.input" },
              styles: inputStyles(),
              id_path: "complaints.id",
              label: "Attachments",
              name: "attachments",
              type: "image",
            },
          },
        },
        footer: {
          comp: { type: "common.button" },
          button: {
            styles: fullButtonStyle(),
            text: "send",
            action: {
              key: "formAction",
              action: "submitForm",
            },
          },
        },
      },
    },
  },
};
