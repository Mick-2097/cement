<script setup>
import VObjectActions from '../components/objectData/VObjectActions.vue'
import VAreas from '../components/objectData/VAreas.vue'

const emits = defineEmits('refreshSideMenu')
</script>

<template>
    <section class="p-4 w-full grow-0 lg:flex-col lg:justify-center lg:items-center">

        <div class="flex flex-col gap-[30px] md:flex-row">
            <!-- Center menu -->
            <section class="gap-4 w-full flex flex-col">

                <VObjectActions @buildingsModified="emits('refreshSideMenu')" />
                <!-- Center menu and diagram area -->
                <div class="flex gap-5 mt-4 flex-col lg:flex-row">
                    <!-- Areas -->
                    <div class="flex flex-col gap-8">
                        <VAreas />
                    </div>
                </div>
            </section>
        </div>

    </section>
</template>

<style scoped></style>