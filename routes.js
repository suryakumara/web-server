const routes = [
  {
    method: "GET",
    path: "/",
    handler: () => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: () => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: () => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: () => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: () => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
