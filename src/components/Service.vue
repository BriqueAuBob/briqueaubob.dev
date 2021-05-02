<template>
    <div class="flex flex-wrap flex-col justify-center">
        <img :src="icon" />
        <div class="font-bold text-2xl text-white mt-4">{{ name }}</div>
        <p class="font-normal text-lg text-white mt-2 leading-7">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        name: String,
        description: String,
    }
}
</script>