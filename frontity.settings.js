const settings = {
  name: "american-sign",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "American Sign",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "american-sign-theme",
      state: {
        theme: {
          menu: [
            ["home", "/"],
            ["acerca", "/about-us"],
            ["servicios", "/services"],
            ["contacto", "/contact"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://test.frontity.org/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
