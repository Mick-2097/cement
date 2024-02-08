<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import Vheader from './components/Vheader.vue'
import VSideMenu from './components/VSideMenu.vue'
import VBreadCrumbs from './components/VBreadCrumbs.vue'

const route = useRoute()
const menuKey = ref(0)
const renderComponents = ref(false)
watch(() => route.params.project_id, () => {
  if (route.params.project_id) {
    setTimeout(() => {
      renderComponents.value = true
    }, 300)
  } else {
    renderComponents.value = false
  }
})
onMounted(() => {
  if (route.params.project_id) {
    setTimeout(() => {
      renderComponents.value = true
    }, 300)
  }
})

</script>

<template>
  <Vheader />

  <div class="flex-col">

    <transition name="slide-in">
      <VBreadCrumbs v-if="renderComponents" />
    </transition>

    <div :class="!$route.params.project_id ? 'md:flex-col' : 'md:flex-row'" class="flex flex-col w-full">

      <transition name="fade" mode="out-in">
        <VSideMenu v-if="renderComponents" :key="menuKey" />
      </transition>

      <RouterView v-slot="{ Component }"
        class="pr-8 bg-[var(--bg)] w-full p-4 min-h-[calc(100vh-68px)] lg:flex-col lg:justify-center lg:items-center">

        <transition name="fade" mode="out-in">
          <component :is="Component" @refreshSideMenu="menuKey++" />
        </transition>

      </RouterView>
    </div>
  </div>
</template>

<style scoped></style>
