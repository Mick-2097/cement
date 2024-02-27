<script setup>
import { ref, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import { errorStore } from './stores/error'
import ErrorPopUp from './components/modals/ErrorPopUp.vue'
import Vheader from './components/Vheader.vue'
import VSideMenu from './components/VSideMenu.vue'
import VBreadCrumbs from './components/VBreadCrumbs.vue'

const route = useRoute()
const error = errorStore()
const menuKey = ref(0)
const renderCrumbs = ref(false)
const renderTree = ref(false)

const mountComponents = () => {
  renderCrumbs.value = true
  renderTree.value = true
}
const hideComponents = () => {
  renderCrumbs.value = false
  renderTree.value = false
}
watch(() => route.path, () => {

  if (route.params.project_id) {
    setTimeout(() => {
      mountComponents()
    }, 300)
    return
  }
  hideComponents()

})
if (route.params.project_id) {
  setTimeout(() => {
    mountComponents()
  }, 300)
}

</script>

<template>
  <Vheader @returnToProjects="renderCrumbs = false, renderTree = false" />

  <div class="flex-col">
    <transition name="fade" mode="out-in">
      <VBreadCrumbs v-if="renderCrumbs" @refreshSideMenu="menuKey++" />
    </transition>

    <div :class="!$route.params.project_id ? 'md:flex-col' : 'md:flex-row'" class="flex flex-col w-full">

      <transition name="fade" mode="out-in">
        <VSideMenu v-if="renderTree" @closeTree="renderTree = false" :key="menuKey" />
      </transition>

      <RouterView v-slot="{ Component }" class="bg-[var(--bg)] w-full p-4 lg:flex-col">

        <transition name="fade" mode="out-in">
          <component :is="Component" @refreshSideMenu="menuKey++" />
        </transition>

      </RouterView>
      <ErrorPopUp v-if="error.isError" @close=" error.isError = false" />
    </div>

  </div>
</template>

<style scoped></style>
