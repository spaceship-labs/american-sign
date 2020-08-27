import Theme from "./Theme";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";

export default {
  name: "american-sign-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {},
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe],
    },
  },
};
