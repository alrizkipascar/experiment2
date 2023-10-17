export default function manifest() {
  return {
    name: "Experimental 2",
    short_name: "Exp2",
    description:
      "This website is an experiment web for testing sanity io and css by alrizki pasca",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
