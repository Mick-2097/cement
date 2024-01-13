import { ref } from 'vue'
import { defineStore } from 'pinia'

export const paramStore = defineStore('params', () => {
  const areas = ref({})
  const spots = ref({})
  const companies = ref({})
  const companyName = ref('')
  const projectID = ref('')
  const projectName = ref('')
  const buildingObjects = ref([])
  const projectData = ref(false)
  const dataReady = ref(false)
  const areasReady = ref(false)
  const spotsReady = ref(false)
  const objectSelected = ref(false)
  const buildingSelected = ref(false)
  const childSelected = ref(false)
  const isEdit = ref(false)
  const addObject = ref(false)
  const addChild = ref(false)
  const selected = ref({
    index: '',
    name: '',
    id: '',
    parentID: ''
  })

  return {
    areas,
    spots,
    companies,
    companyName,
    projectID,
    projectName,
    projectData,
    dataReady,
    areasReady,
    spotsReady,
    buildingObjects,
    objectSelected,
    buildingSelected,
    childSelected,
    isEdit,
    addObject,
    addChild,
    selected
  }
})