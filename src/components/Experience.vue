<template>
    <a :href="experience.href" target="_blank" class="p-12 bg-cover bg-no-repeat bg-center shadow-xl cursor-pointer relative" data-aos="zoom-in-up">
        <div v-if="!hideOverlay" class="absolute w-full bottom-0 left-0 -z-10" :class="overlay ? 'bg-dark bg-opacity-75 h-full' : 'bg-gradient-to-b from-transparent to-dark h-1/3'"></div>
        <div class="flex flex-col gap-16 justify-between h-full">
            <span v-if="experience.name" class="text-4xl font-bold">{{ experience.name }}</span>
            <img :class="experience.logo_square ? 'w-24 h-24' : 'max-w-lg w-3/4'" v-else-if="experience.logo" :src="experience.logo" />
            <div class="flex flex-col gap-2">
                <span v-if="experience.jobs" class="font-semibold text-lg">as a {{ experience.jobs }}</span>
                <span v-if="experience.from && experience.to" class="font-medium text-gray-300 text-sm">from {{ experience.from }} to {{ experience.to }}</span>
                <slot></slot>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        experience: {
            type: Object,
            required: true
        },
        hideOverlay: {
            type: Boolean,
            default: false
        },
        overlay: {
            type: Boolean,
            default: false
        }
    }
}
</script>