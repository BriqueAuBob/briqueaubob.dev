<template>
    <div>
        <header class="px-10 py-44 text-center">
            <h1 class="text-5xl text-white font-bold mt-10">Brique au bob</h1>
            <h2 class="text-3xl text-white font-medium mt-4">French Junior Developer</h2>
            <img class="absolute top-0 left-0 -z-10" src="/waves.svg"/>
            <div class="flex justify-center mt-10">
                <a class="bg-blue-500 rounded-full mx-2 transition ease-in transform hover hover:-translate-y-1" href="#">
                    <img class="w-12 p-2.5" src="/discord.svg"/>
                </a>
                <a class="bg-gray-800 rounded-full mx-2 transition ease-in transform hover hover:-translate-y-1" href="#">
                    <img class="w-12 p-2.5" src="/discord.svg"/>
                </a>
                <a class="bg-gray-700 rounded-full mx-2 transition ease-in transform hover hover:-translate-y-1" href="#">
                    <img class="w-12 p-2.5" src="/discord.svg"/>
                </a>
            </div>
        </header>
        <section id="informations" class="container mx-auto px-48 mt-28 p-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div class="flex flex-wrap content-center">
                    <div>
                        <div class="font-normal text-md text-gray-400">#informations</div>
                        <div class="font-bold text-2xl text-white mb-4">About me</div>
                    </div>
                    <p class="font-medium text-xl text-gray-400 leading-relaxed">
                        I’m Brique au bob, an 18yo french developer.
                        Mainly, i’m a back-end developer but i’m really
                        interested in learning front-end and UI/UX Design. 
                        I’m learning programmation since I was 14.
                    </p>
                </div>
                <div>
                    <img class="mx-auto invisible md:visible" src="/bogossito.svg" />
                </div>
            </div>
        </section>
        <section id="projects" class="relative text-center">
            <img class="absolute -z-10" src="/waves_projects.svg" />
            <div class="py-48">
                <div class="font-normal text-md text-gray-400">#projects</div>
                <div class="font-bold text-2xl text-white mb-4">My projects</div>
                <div class="container mx-auto sm:px-2 md:px-16 lg:px-48 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    <Project 
                        logo="/gca.png"
                        name="Game Creators Area"
                        description="French community of mutual help about various domains of activity like development, level design, modeling, graphism..."
                        :languages="[
                            '/laravel.png',
                            '/php.png',
                            '/mysql.svg',
                            '/git.png',
                            '/nginx.png',
                        ]" 
                    />
                    <Project 
                        logo="/ro-bot.png"
                        name="Ro-bot"
                        description="Website with the goal to create a Discord bot with a very customizable system and a bot running on the user defined token."
                        :languages="[
                            '/laravel.png',
                            '/php.png',
                            '/mongodb.png',
                            '/git.png',
                            '/nginx.png',
                        ]" 
                    />
                    <Project 
                        logo="/wearevalorant.png"
                        name="WeAreValorant"
                        description="It was designed to bring all the players of the Valorant game in a same place. A news system, tournament system and players find system was created for this."
                        :languages="[
                            '/adonis.png',
                            '/nodejs.png',
                            '/mysql.svg',
                            '/git.png',
                            '/nginx.png',
                        ]" 
                    />
                    <Project 
                        logo="/bobadmintoolkit.png"
                        name="BobAdminToolKit"
                        description="Garry’s Mod addon adding a lot of server administrators utilities like warns, logs, reports..."
                        :languages="[
                            '/sqlite.png',
                            '/mysql.svg',
                            '/lua.png',
                        ]" 
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Project from '../components/Project.vue'
export default {
    components: { Project }
}
</script>