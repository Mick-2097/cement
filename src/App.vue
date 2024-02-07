<script setup>
import { ref, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import Vheader from './components/Vheader.vue'
import VSideMenu from './components/VSideMenu.vue'
import VBreadCrumbs from './components/VBreadCrumbs.vue'

const route = useRoute()
const menuKey = ref(0)
watch(() => route.params.building_id, () => {
  menuKey.value++
})
watch(() => route.params.building_object_id, () => {
  menuKey.value++
})

</script>

<template>
  <Vheader />

  <div class="flex-col">

    <transition name="fade-in" mode="out-in">
      <VBreadCrumbs v-if="$route.params.project_id" />
    </transition>

    <div :class="!$route.params.project_id ? 'md:flex-col' : 'md:flex-row'" class="flex flex-col w-full">

      <transition name="fade-in" mode="out-in">
        <VSideMenu v-if="$route.params.project_id" :key="menuKey" />
      </transition>

      <RouterView v-slot="{ Component }"
        class="pr-8 bg-[var(--bg)] w-full p-4 min-h-[calc(100vh-68px)] lg:flex-col lg:justify-center lg:items-center">

        <transition name="fade-in" mode="out-in">
          <component :is="Component" />
        </transition>

      </RouterView>
    </div>
  </div>
</template>

<style scoped></style>
