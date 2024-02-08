<script setup>
import VActions from '../components/projectData/VActions.vue'
import VSpots from '../components/projectData/VSpots.vue'

const emits = defineEmits('refreshSideMenu')

</script>

<template>
    <div>
        <main class="bg-[var(--bg)] p-4 min-h-[calc(100vh-68px)] lg:flex-col lg:justify-center lg:items-center">

            <div class="flex flex-col gap-[30px] md:flex-row">
                <!-- Center menu -->
                <section class="gap-4 w-full flex flex-col">
                    <!-- Actions -->
                    <VActions @buildingsModified="emits('refreshSideMenu')" />
                    <!-- Center menu and diagram area -->
                    <div class="flex gap-5 mt-4 flex flex-col lg:flex-row">
                        <!-- Monitoring spots -->
                        <VSpots />
                        <!-- Diagram area -->
                        <div
                            class="flex w-full min-h-fit items-center justify-center mt-10 lg:mt-0 border border-black border-opacity-20 rounded text-center">
                            <div class="if-empty p-4 text-center">No drawings or diagrams have been added yet
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<style scoped></style>