<script setup>
const props = defineProps({ target: Object })
</script>

<template>
    <ul class="pl-2 flex" v-for="child in target.children" :key="child.id">
        <li class="pl-4 py-2 flex text-base cursor-pointer focus:bg-[var(--blue-focus)] focus:outline-none w-full">
            <details class="flex w-full">
                <summary :class="child.isLeaf ? `no-content` : ``"
                    class="relative pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:-left-[2px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150">
                    {{ child.name }}
                </summary>
                <VBranch v-if="!child.isLeaf" :target="child" />
            </details>
        </li>
    </ul>
</template>

<style scoped>
summary.no-content::before {
    content: '';
}

summary::before {
    content: url('../assets/icons/Arrow-sm.svg');
}

details[open]>summary::before {
    transform: rotate(0deg);
}
</style>