<template>
    <div>
        <header class="header bg-gradient-to-r from-blue-700 to-blue-500 px-10 py-16 text-center">
            <h1 class="text-5xl text-white font-bold mt-32">Brique au bob</h1>
            <h2 class="text-3xl text-white font-medium mt-4">French Junior Developer</h2>
            <div class="flex justify-center mt-10">
                <a class="bg-blue-500 rounded-full mx-2 transition ease-in transform hover hover:-translate-y-1" href="https://discord.com/users/307531336388968458" target="_blank">
                    <img class="w-12 p-2.5" src="/discord.svg"/>
                </a>
                <a class="bg-gray-800 rounded-full mx-2 transition ease-in transform hover hover:-translate-y-1" href="https://github.com/briqueaubob" target="_blank">
                    <img class="w-12 p-2.5" src="/github.svg"/>
                </a>
                <a class="bg-gray-700 rounded-full mx-2 transition ease-in transform hover hover:-translate-y-1" href="https://steamcommunity.com/id/brickwithbob/" target="_blank">
                    <img class="w-12 p-2.5" src="/steam.svg"/>
                </a>
            </div>
            <img class="absolute left-0 transform translate-y-16 -z-10" src="/waves.svg"/>
        </header>
        <section id="informations" class="container mx-auto md:px-48 mt-48 p-10 md:p-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-14">
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
                    <img class="mx-auto" src="/bogossito.svg" />
                </div>
            </div>
        </section>
        <section id="projects" class="relative text-center">
            <img class="absolute top-20 md:top-4 xl:-top-12 -z-10" src="/waves_projects_top.svg" />
            <div class="py-24 pt-24">
                <div class="bg-gradient-to-r from-blue-700 to-blue-500">
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
            </div>
            <img class="absolute transform -translate-y-28 -z-10" src="/waves_projects_bottom.svg" />
        </section>
        <section id="services" class="container text-center mx-auto px-4 lg:px-48 mt-8 md:p-24">
            <div class="font-normal text-md text-gray-400">#services</div>
            <div class="font-bold text-2xl text-white mb-4">My services</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 items-start">
                <Service 
                    name="Back-End" 
                    description="I can do the server-side of your project with PHP or NodeJS. Obviously, it includes the DBMS management." 
                    icon="/icon_server.svg"
                />
                <Service 
                    name="Front-End" 
                    description="I can do the client-side of your project with HTML/CSS/JS (also SaSS, NodeJS)." 
                    icon="/icon_eye.svg"
                />
                <Service 
                    name="UI/UX Design" 
                    description="I can prototype your project to know if it looks good for you and if I can start development" 
                    icon="/icon_tools.svg"
                />
                <Service 
                    name="Deployment" 
                    description="I can deploy your project on your server after the development." 
                    icon="/icon_rocket.svg"
                />
            </div>
        </section>
        <section id="contact" class="text-center mx-auto md:px-72 mb-16">
            <div class="bg-gradient-to-r from-blue-500 to-blue-700 p-10 rounded-xl shadow-2xl">
                <div class="font-normal text-md text-gray-200">#contact</div>
                <div class="font-bold text-2xl text-white mb-4">Have a project?</div>
                <div class="font-bold text-2xl text-white mb-4 leading-3">Contact me</div>
                <a href="#" class="inline-block font-bold rounded-lg bg-white bg-opacity-80 transition ease-in hover:bg-opacity-100 transform hover:-translate-y-1 py-3 px-6 mt-4 shadow-2xl">Contact</a>
            </div>
        </section>
    </div>
</template>

<script>
import Project from '@/components/Project.vue'
import Service from '@/components/Service.vue'
export default {
    components: { Project, Service }
}
</script>