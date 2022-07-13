import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ErrorPage from '../views/ErrorPage.vue'
import PortfolioPage from '../views/PortfolioPage.vue'
import _Default from '../layouts/_Default'
import _Error from '../layouts/_Error'

const routes = [{
    path: '/',
    name: 'Home',
    component: _Default,
    children: [{
        path: '/',
        components: {
          default: HomePage,
        },
        meta: {
          title: 'Home | Efe Eğrekçi'
        }
      },
      {
        path: '/portfolio/:id',
        components: {
          default: PortfolioPage,
        },
        meta: {
          title: 'Portfolio | Efe Eğrekçi'
        }
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: 'Error Page',
    component: _Error,
    children: [{
      path: "/:catchAll(.*)",
      components: {
        default: ErrorPage,
      },
      meta: {
        title: 'Error | Efe Eğrekçi'
      },

    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (window.innerWidth < 1200) {
            resolve({
              el: to.hash,
              top: 70
            })
          } else {
            resolve({
              el: to.hash,
              top: 30
            })
          }
        }, 100)
      })
    }
  },
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router