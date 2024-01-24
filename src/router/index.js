import { createRouter, createWebHistory } from 'vue-router'
import Test from '../views/Test.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Projects from '../views/Projects.vue'
import ProjectData from '../views/ProjectData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'none',
      redirect: '/projects',
      component: Projects
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        title: 'Test page'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: 'Register'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        title: 'Projects'
      }
    },
    {
      path: '/project/:project_id',
      name: 'projectdata',
      component: ProjectData,
      props: true,
      meta: {
        title: 'Project data'
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
