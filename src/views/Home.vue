<template>
    <div>
        <header class="header bg-gradient-to-r from-blue-700 to-blue-500 px-10 py-16 text-center">
            <h1 class="text-5xl text-white font-bold mt-32">Brique au bob</h1>
            <h2 class="text-3xl text-white font-medium mt-4">French Junior Developer</h2>
            <div class="flex justify-center mt-10">
                <a class="bg-blue-500 rounded-full mx-2 transition ease-in transform hover hover:-translate-y-1" href="https://discord.com/users/307531336388968458" target="_blank">
                    <img class="w-12 p-2.5" src="@/assets/discord.svg"/>
                </a>
                <a class="bg-gray-800 rounded-full mx-2 transition ease-in transform hover hover:-translate-y-1" href="https://github.com/briqueaubob" target="_blank">
                    <img class="w-12 p-2.5" src="@/assets/github.svg"/>
                </a>
                <a class="bg-gray-700 rounded-full mx-2 transition ease-in transform hover hover:-translate-y-1" href="https://steamcommunity.com/id/brickwithbob/" target="_blank">
                    <img class="w-12 p-2.5" src="@/assets/steam.svg"/>
                </a>
            </div>
            <img class="absolute left-0 transform translate-y-16 -z-10 w-full" src="@/assets/waves.svg"/>
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
                        I’m learning programing since I was 14.
                    </p>
                </div>
                <div>
                    <img class="mx-auto" src="@/assets/bogossito.svg" />
                </div>
            </div>
        </section>
        <section id="projects" class="text-center">
            <img class="relative -z-10 w-full transform translate-y-1" src="@/assets/waves_projects_top.svg" />
            <div class="bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-4">
                <div class="font-normal text-md text-gray-400">#projects</div>
                <div class="font-bold text-2xl text-white mb-4">My projects</div>
                <div class="container mx-auto pb-12 sm:px-2 md:px-16 lg:px-48 grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12">
                    <Project 
                        :logo="icons.gca"
                        name="Game Creators Area"
                        description="French community of mutual help about various domains of activity like development, level design, modeling, graphism..."
                        :languages="[
                            icons.laravel,
                            icons.php,
                            icons.mysql,
                            icons.git,
                            icons.nginx,
                        ]" 
                    />
                    <Project 
                        :logo="icons.robot"
                        name="Ro-bot"
                        description="Website with goal to create a Discord bot with a very customizable system and a bot running on user defined token."
                        :languages="[
                            icons.laravel,
                            icons.php,
                            icons.mongodb,
                            icons.git,
                            icons.nginx,
                        ]" 
                    />
                    <Project 
                        :logo="icons.wearevalorant"
                        name="WeAreValorant"
                        description="It was designed to bring all the players of Valorant's game in a same place. A news system, tournament system and players find system was created for this."
                        :languages="[
                            icons.adonis,
                            icons.nodejs,
                            icons.mysql,
                            icons.git,
                            icons.nginx,
                        ]" 
                    />
                    <Project 
                        :logo="icons.bobadmintoolkit"
                        name="BobAdminToolKit"
                        description="Garry’s Mod addon adding a lot of server administrators utilities like warns, logs, reports..."
                        :languages="[
                            icons.sqlite,
                            icons.mysql,
                            icons.lua,
                        ]" 
                    />
                </div>
            </div>
            <img class="relative transform -translate-y-1 -z-10 w-full" src="@/assets/waves_projects_bottom.svg" />
        </section>
        <section id="services" class="container text-center mx-auto px-4 lg:px-48 mt-8 md:p-24">
            <div class="font-normal text-md text-gray-400">#services</div>
            <div class="font-bold text-2xl text-white mb-4">My services</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 items-start">
                <Service 
                    name="Back-End" 
                    description="I can do server-side of your project using PHP or NodeJS. Obviously, it includes DBMS management." 
                    :icon="icons.server"
                />
                <Service 
                    name="Front-End" 
                    description="I can do client-side of your project using HTML/CSS/JS (also SaSS, NodeJS)." 
                    :icon="icons.eye"
                />
                <Service 
                    name="UI/UX Design" 
                    description="I can prototype your project to know if it looks good for you and if I can start development" 
                    :icon="icons.tools"
                />
                <Service 
                    name="Deployment" 
                    description="I can deploy your project on your server after development." 
                    :icon="icons.rocket"
                />
            </div>
        </section>
        <section id="contact" class="text-center mx-auto md:px-72 mt-16 md:mt-0 mb-16 px-8">
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

import gca from '@/assets/gca.png'
import robot from '@/assets/ro-bot.png'
import wearevalorant from '@/assets/wearevalorant.png'
import bobadmintoolkit from '@/assets/bobadmintoolkit.png'

import nginx from '@/assets/nginx.png'
import php from '@/assets/php.png'
import lua from '@/assets/lua.png'
import mysql from '@/assets/mysql.svg'
import mongodb from '@/assets/mongodb.png'
import nodejs from '@/assets/nodejs.png'
import laravel from '@/assets/laravel.png'
import sqlite from '@/assets/sqlite.png'
import git from '@/assets/git.png'
import adonis from '@/assets/adonis.png'

import server from '@/assets/icon_server.svg'
import eye from '@/assets/icon_eye.svg'
import tools from '@/assets/icon_tools.svg'
import rocket from '@/assets/icon_rocket.svg'

export default {
    components: { Project, Service },
    data() {
        return {
            icons: {
                gca, bobadmintoolkit, robot, wearevalorant, nginx, lua, php, nodejs, laravel, adonis, mysql, sqlite, mongodb, git, server, eye, tools, rocket
            }
        }
    },
    mounted() {
        console.log(this.icons)
    }
}
</script>