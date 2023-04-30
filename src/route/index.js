import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


const routes = [
  {
    path: "",
    name: "Home",
    component: () => import("../views/home/Home.vue"),
  },
  {
    path:"/about-teacher",
    name: "AboutTeacher",
    component: () => import("../views/about/AboutTeacher")
  },
  {
    path:"/about-school",
    name: "AboutSchool",
    component: () => import("../views/about/AboutSchool")
  },
  {
    path:"/university-detail",
    name: "UniversityDetail",
    component: () => import("../views/university-detail/UniversityDetail")
  },
  {
    path:"/scholarships",
    name: "Scholarships",
    component: () => import("../views/scholarships/Scholarships")
  },
  {
    path:"/courses",
    name: "Courses",
    component: () => import("../views/courses/Courses")
  },
  {
    path:"/faq",
    name: "FAQ",
    component: () => import("../views/faq/FAQ")
  },
  {
    path:"/contact-us",
    name: "ContactUs",
    component: () => import("../views/contact-us/ContactUs")
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.matched.some((m) => m.meta.disableScroll)) return;
    if (to.hash) {
      return {
        selector: to.hash,
        // , offset: { x: 0, y: 10 }
        behavior: "smooth",
      };
    }
    const position = {
      x: 0,
      y: 0,
    };

    if (savedPosition) {
      position.x = savedPosition.x;
      position.y = savedPosition.y;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position);
      }, 400);
    });
  },
});

export default router;
