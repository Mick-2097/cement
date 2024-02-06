<script setup>
import VbuttonOutline from '../VbuttonOutline.vue'
const emits = defineEmits(['delete', 'cancel'])

</script>

<template>
    <main class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80">
        <section
            class="flex flex-col w-72 sm:w-96 m-auto mt-[30vh] p-4 items-center border border-white rounded-lg p-6 gap-4 bg-black">
            <h1 class="text-white text-2xl text-center">Are you sure?</h1>
            <div class="flex gap-4">
                <VbuttonOutline @click="emits('delete')" textColor="text-red-500" borderColor="border-red-500"
                    buttonText="Delete" class="hover:text-white hover:bg-red-700 hover:border-white" />
                <VbuttonOutline @click="emits('cancel')" buttonText="Cancel"
                    class="hover:text-white hover:border-white hover:bg-[var(--blue)]" />
            </div>
        </section>
    </main>
</template>

<style scoped></style>