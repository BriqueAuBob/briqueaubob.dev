<template>
    <div class="bg-gray-800 p-8 rounded-lg flex flex-wrap justify-between shadow-2xl">
        <div class="flex  text-left">
            <img class="w-auto h-16 content-center mr-4" :src="logo"/>
            <div>
                <div class="font-bold text-2xl ml-1 text-white mb-2">{{ name }}</div>
                <p class="font-normal text-md ml-1 text-white">
                    {{ description }}
                </p>
            </div>
        </div>
        <div class="w-full">
            <hr class="my-5 border-gray-700"/>
            <div class="flex flex-wrap justify-end">
                <img class="h-10 ml-6 mb-2 mt-2 md:mt-0 md:mb-0" v-for="(language, key) in languages" v-bind:key="key" :src="language"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        logo: String,
        name: String,
        description: String,
        languages: Array
    }
}
</script>