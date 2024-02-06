import { createRouter, createWebHistory } from 'vue-router'

import Projects from '../views/Projects.vue'
import Create from '../views/CreateProject.vue'
import ProjectData from '../views/ProjectData.vue'
import ObjectData from '../views/ObjectData.vue'
import BuildingData from '../views/BuildingData.vue'
import TestRoute from '../views/TestRoute.vue'

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
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        title: 'Lezzetli solutions | Projects'
      }
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta: {
        title: 'Lezzetli solutions | Create project'
      }
    },
    {
      path: '/projects/:project_id',
      name: 'projectdata',
      component: ProjectData,
      meta: {
        title: 'Lezzetli solutions | Project data'
      }
    },
    {
      path: '/projects/:project_id/building_objects/:building_object_id',
      name: 'objectdata',
      component: ObjectData,
      meta: {
        title: 'Lezzetli solutions | Object data'
      }
    },
    {
      path: '/projects/:project_id/building_objects/:building_object_id/buildings/:building_id',
      name: 'buildingdata',
      component: BuildingData,
      meta: {
        title: 'Lezzetli solutions | Building data'
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
