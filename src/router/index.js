import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductosView from "../views/ProductosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/ProductosView.vue"),
    props: () => ({
      productos: [
        {
          title: "Desayunos",
          descripcion:
            "Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          precio: "$2.000",
          cantidad: "Para 2 personas",
          imagen:
            "https://mr-gantiva.github.io/suricata/assets/img/desayunos.jpg",
        },
        {
          title: "Colaciones",
          descripcion:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          precio: "$5.000",
          cantidad: "Para 1 persona",
          imagen:
            "https://mr-gantiva.github.io/suricata/assets/img/colaciones.jpg",
        },
        {
          title: "Bebidas",
          descripcion:
            "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          precio: "$3.000",
          cantidad: "Para 1 persona",
          imagen:
            "https://mr-gantiva.github.io/suricata/assets/img/bebidas.jpg",
        },
        {
          title: "Verduras",
          descripcion:
            "Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          precio: "$6.000",
          cantidad: "Para 1 persona",
          imagen:
            "https://mr-gantiva.github.io/suricata/assets/img/verduras.jpg",
        },
        {
          title: "Dulces",
          descripcion:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          precio: "$2.500",
          cantidad: "Para 2 persona",
          imagen: "https://mr-gantiva.github.io/suricata/assets/img/dulces.jpg",
        },
        {
          title: "Empanadas",
          descripcion:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          precio: "$1.800",
          cantidad: "Para 1 persona",
          imagen:
            "https://mr-gantiva.github.io/suricata/assets/img/empanadas.jpg",
        },
      ],
    }),
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
