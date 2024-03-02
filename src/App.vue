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

if (route.path.includes('companies')) {
  setTimeout(() => {
    renderCrumbs.value = true
    renderTree.value = true
  }, 300)
}

watch(() => route.path, () => {
  if (route.path.includes('companies')) {
    setTimeout(() => {
      renderCrumbs.value = true
      renderTree.value = true
    }, 300)
    return
  }
  renderCrumbs.value = false
  renderTree.value = false
})


</script>

<template>
  <Vheader @returnToProjects="renderCrumbs = false, renderTree = false" />

  <div class="flex-col">
    <transition name="fade" mode="out-in">
      <VBreadCrumbs v-if="renderCrumbs" />
    </transition>

    <div class="flex flex-col md:flex-row w-full">

      <transition name="fade" mode="out-in">
        <VSideMenu v-if="renderTree" :key="menuKey" />
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
