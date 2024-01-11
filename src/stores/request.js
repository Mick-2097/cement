import { defineStore } from 'pinia'
import { mainApi } from '../api/main'
import { useRoute } from 'vue-router'
import { paramStore } from './params'

export const requestStore = defineStore('request', () => {

    const route = useRoute()
    const params = paramStore()

    const fetchObjects = async () => {
        const response = await mainApi.fetchData("GET", `building_objects?project_id=${route.params.pid}`)
    
        for (let i = 0; i < response.data.list.length; i++) {
            response.data.list[i].buildings = await fetchBuildings(response.data.list[i].id)
        }
        params.buildingObjects.value = response.data.list
        params.dataReady = true
    }
    const fetchBuildings = async (objectID) => {
        const response = await mainApi.fetchData('GET', `buildings?building_object_id=${objectID}&is_full=true`)
        return response.data
    }
    const fetchAreas = async (objectID) => {
        const response = await mainApi.fetchData('GET', `areas?building_object_id=${objectID}`)
        params.areas = response.data.list
        params.areasReady = true
    }
    const fetchSpots = async (buildingID) => {
        const response = await mainApi.fetchData('GET', `monitoring_spots?building_id=${buildingID}`)
        params.spots = response.data.list
        params.spotsReady = true
    }
    const deleteElement = async () => {
        if (params.objectSelected) {
            const response = await mainApi.fetchData('DELETE', `building_objects/${params.selected.id}`)
            params.buildingObjects.value = params.buildingObjects.value.filter(object => object.id !== params.selected.id)
            params.selected.name = ''
            params.selected.id = ''
            params.objectSelected = false
        }
        if (params.buildingSelected) {
            const response = await mainApi.fetchData('DELETE', `buildings/${params.selected.id}`)
            params.buildingObjects.value[params.selected.index].buildings 
            = params.buildingObjects.value[params.selected.index].buildings
            .filter(object => object.id !== params.selected.id)
            params.selected.index = ''
            params.selected.name = ''
            params.selected.id = ''
            params.buildingSelected = false
        }
    }

  return {
    fetchObjects,
    fetchBuildings,
    fetchAreas,
    fetchSpots,
    deleteElement
  }
})