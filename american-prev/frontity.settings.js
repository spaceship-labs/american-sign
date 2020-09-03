const settings = {
  name: "american-sign",
  state: {
    frontity: {
      url: "https://americansign.emmanuelyupit.vercel.app/",
      title: "americansign",
      description: "americansign",
    },
  },
  packages: [
    {
      name: "americansign-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["acerca", "/about"],
            ["servicios", "/services"],
            ["contacto", "/contact"],
          ],
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // api: "https://test.frontity.org/wp-json",
          api:
            "http://www.adminamericansign.com.php72-4.phx1-1.websitetestlink.com/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
