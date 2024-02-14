import {createRouter, createWebHistory} from "vue-router"

import Projects from "../views/Projects.vue"
import Create from "../views/CreateProject.vue"
import ProjectData from "../views/ProjectData.vue"
import ObjectData from "../views/ObjectData.vue"
import BuildingData from "../views/BuildingData.vue"
import AreaData from "../views/AreaData.vue"
import Reports from "../views/Reports.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "none",
      redirect: "/projects",
      component: Projects,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: "Projects",
      },
    },
    {
      path: "/create",
      name: "create",
      component: Create,
      meta: {
        title: "Create project",
      },
    },
    {
      path: "/projects/:project_id",
      name: "projectdata",
      component: ProjectData,
      meta: {
        title: "Project data",
      },
    },
    {
      path: "/projects/:project_id/building_objects/:building_object_id",
      name: "objectdata",
      component: ObjectData,
      meta: {
        title: "Object data",
      },
    },
    {
      path: "/projects/:project_id/building_objects/:building_object_id/buildings/:building_id",
      name: "buildingdata",
      component: BuildingData,
      meta: {
        title: "Building data",
      },
    },
    {
      path: "/projects/:project_id/building_objects/:building_object_id/areas/:area_id",
      name: "areadata",
      component: AreaData,
      meta: {
        title: "Area Data",
      },
    },
    {
      path: "/projects/:project_id/building_objects/:building_object_id/areas/:area_id/reports",
      name: "reports",
      component: Reports,
      meta: {
        title: "Reports",
      },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
