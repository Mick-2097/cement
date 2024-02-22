<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import Vheader from './components/Vheader.vue'
import VSideMenu from './components/VSideMenu.vue'
import VBreadCrumbs from './components/VBreadCrumbs.vue'

const route = useRoute()
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
  if (route.params.project_id && route.name !== 'reports') {
    setTimeout(() => {
      mountComponents()
    }, 300)
  } else {
    hideComponents()
  }
  if (route.name === 'reports') {
    hideComponents()
  }

})
onMounted(() => {
  if (route.params.project_id && route.name !== 'reports') {
    setTimeout(() => {
      mountComponents()
    }, 300)
  }
})

</script>

<template>
  <Vheader @returnToProjects="renderCrumbs = false, renderTree = false" />

  <div class="flex-col">
    <transition name="fade">
      <VBreadCrumbs v-if="renderCrumbs" @refreshSideMenu="menuKey++" />
    </transition>

    <div :class="!$route.params.project_id ? 'md:flex-col' : 'md:flex-row'" class="flex flex-col w-full">

      <transition name="fade" mode="out-in">
        <VSideMenu @closeTree="renderTree = false" v-if="renderTree" :key="menuKey" />
      </transition>

      <RouterView v-slot="{ Component }" class="bg-[var(--bg)] w-full p-4lg:flex-col">

        <transition name="fade" mode="out-in">
          <component :is="Component" @refreshSideMenu="menuKey++" />
        </transition>

      </RouterView>
    </div>

  </div>
</template>

<style scoped></style>
