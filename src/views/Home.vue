<template>
    <div class="overflow-x-hidden">
        <header class="relative bg-primary py-72 text-center text-white" style="background: url('./grid-waves.png') no-repeat center center / cover, #290DD3;" data-aos="fade">
            <h1 class="text-6xl font-bold" data-aos="zoom-in-up">Brique au bob</h1>
            <h2 class="text-3xl font-semibold mt-4" data-aos="zoom-in-up">French FullStack Developer</h2>
            <div class="flex gap-4 justify-center mt-8" data-aos="zoom-in-up">
                <a href="#projects" class="bg-white px-6 py-4 text-black text-md font-medium">
                    View my projects
                </a>
                <a href="#contact" class="px-6 py-4 text-md font-medium">
                    Contact me
                </a>
            </div>
            <img src="@/assets/shape_wavy.svg" class="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block w-1/4 lg:w-1/3" />
            <img src="@/assets/shape_wavy.svg" class="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block w-1/4 lg:w-1/3 -scale-100" />
            <div class="bg-gradient-to-t from-transparent to-primary absolute top-0 h-52 w-full"></div>
            <div class="bg-gradient-to-b from-transparent to-dark absolute bottom-0 h-48 w-full"></div>
        </header>
        <section class="container mx-auto flex text-white py-32 gap-16 items-center px-4">
            <div class="flex flex-col gap-4" data-aos="fade">
                <div class="text-4xl font-bold">Services I Provide</div>
                <div class="text-lg font-medium max-w-lg">Get the best variety of skills for your growing project</div>
            </div>
            <div class="lg:flex gap-12 w-full">
                <div v-for="(service, index) of services" :key="index" class="relative w-full" data-aos="zoom-in">
                    <div class="bg-primary p-8" :class="[index === 1 ? 'mt-6' : index === 2 && 'mt-6 lg:mt-12']">{{ service }}</div>
                    <div v-if="index === 0" class="absolute right-full translate-x-2/3 bottom-2/3 w-16 h-16 bg-primary rounded-full bg-opacity-25 hidden md:block"></div>
                    <div v-else-if="index === 1" class="absolute right-8 translate-x-3/4 -top-4 w-24 h-24 bg-primary rounded-full bg-opacity-25 hidden md:block"></div>
                    <div v-else class="absolute -right-6 -bottom-4 w-16 h-16 bg-primary rounded-full bg-opacity-25 hidden md:block"></div>
                </div>
            </div>
        </section>
        <section class="container mx-auto text-white py-16 px-4" id="experiences">
            <div class="relative">
                <div class="font-bold text-5xl absolute -top-8 z-10" data-aos="fade">Experiences</div>
            </div>
            <div class="grid lg:grid-cols-5 gap-8">
                <Experience v-for="(experience, id) of experiences" :key="id" :class="experience.classes" :style="experience.style" :experience="experience" :hideOverlay="experience.hideOverlay" />
                <div class="flex flex-col gap-4 p-8 lg:col-span-2" data-aos="fade-up">
                    <div class="text-4xl font-bold">Next project with you?</div>
                    <div class="text-lg font-medium max-w-lg">I’m available for hire, contact me to talk me about your project !</div>
                    <div class="mt-6">
                        <a href="#" class="bg-white px-6 py-4 text-black text-md font-medium">
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="text-white py-24 px-4 relative" id="projects">
            <div class="container mx-auto">
                <div class="relative">
                    <div class="font-bold text-5xl absolute -top-8 z-10" data-aos="fade">Personal Projects</div>
                </div>
                <div class="grid lg:grid-cols-6 gap-8">
                    <Experience v-for="(project, id) of projects" :key="id" :class="project.classes" :style="project.style" :experience="project" :overlay="true">
                        <div class="mt-6 flex gap-3">
                            <a v-if="project.href" target="_blank" :href="project.href" class="bg-white px-6 py-4 text-black text-md font-medium">
                                View project
                            </a>
                            <a v-if="project.github" target="_blank" :href="project.github" class="border hover:bg-white ease-in duration-300 hover:text-black px-6 py-4 text-white text-md">
                                Source code
                            </a>
                        </div>
                    </Experience>
                </div>
            </div>
            <img class="absolute top-0 left-0 -z-10 w-1/2" src="@/assets/shape_rect.svg" />
            <img class="absolute top-0 -right-1/4 -z-10 w-1/2 -scale-100" src="@/assets/shape_rect.svg" />
        </section>
        <section class="container mx-auto text-white py-16 px-4" id="skills">
            <div class="font-bold text-5xl" data-aos="fade">Tech Stack</div>
            <div class="flex flex-wrap gap-4 mt-6">
                <div v-for="(skill, id) of skills" :key="id" class="px-4 py-3 flex items-center gap-2 shadow-lg" :style="`background: ${skill.color}`" data-aos="zoom-in-up">
                    <img class="w-8 h-fit brightness-0 invert" :src="skill.src" />
                    <span v-if="skill.name" class="text-sm font-medium">{{ skill.name }}</span>
                </div>
            </div>
        </section>
        <section class="container mx-auto bg-primary p-24 mt-8 mb-16 text-white text-center" id="contact">
            <div class="flex flex-col gap-4 items-center" data-aos="fade">
                <div class="text-4xl font-bold">Get in touch</div>
                <div class="text-lg font-medium max-w-sm">I’m available for hire, contact me to talk me about your project !</div>
                <div class="flex gap-4 mt-4">
                    <a href="https://discord.com/users/342014383360049163" target="_blank" class="bg-white px-6 py-4 text-black text-md font-medium">
                        Discord
                    </a>
                    <a href="https://github.com/BriqueAuBob" target="_blank" class="bg-white px-6 py-4 text-black text-md font-medium">
                        GitHub
                    </a>
                    <a href="https://twitter.com/briqueaubob" target="_blank" class="bg-white px-6 py-4 text-black text-md font-medium">
                        Twitter
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import AOS from "aos";
import Experience from "@/components/Experience.vue";

import UnosialLogo from '@/assets/unosial_logo.png';
import GCALogo from '@/assets/gca_logo.png';

import nodejs from '@/assets/techs/nodejs.png'
import php from '@/assets/techs/php.png'
import laravel from '@/assets/techs/laravel.png'
import adonis from '@/assets/techs/adonis.png'
import nestjs from '@/assets/techs/nestjs.svg'
import vuejs from '@/assets/techs/vuejs.png'
import nuxtjs from '@/assets/techs/nuxtjs.png'
import html from '@/assets/techs/html.png'
import css from '@/assets/techs/css.png'
import sass from '@/assets/techs/sass.png'
import lua from '@/assets/techs/lua.png'
import python from '@/assets/techs/python.png'
import mysql from '@/assets/techs/mysql.svg'
import mongodb from '@/assets/techs/mongodb.png'
import sqlite from '@/assets/techs/sqlite.png'

export default {
    components: { Experience },
    data: () => ({
        services: ['UI Design', 'Development', 'Deployment'],
        experiences: [
            {
                classes: 'bg-primary lg:col-span-3',
                style: 'background-image: url("https://cdn.discordapp.com/banners/455308441360138242/3317e37674e3c5b568f473e85a394ac4.png?size=4096")',
                logo: UnosialLogo,
                jobs: 'Developer',
                from: '04/2022',
                to: 'now',
                href: 'https://unosial.com'
            },
            {
                classes: 'bg-primary lg:col-span-2',
                style: 'background: #5367F5',
                name: 'UMaestro',
                jobs: 'Developer & UI Designer',
                from: '01/2022',
                to: 'now',
                hideOverlay: true,
                href: 'https://umaestro.fr'
            },
            {
                classes: 'bg-primary lg:col-span-2',
                style: 'background: #0C4DAE',
                logo: GCALogo,
                logo_square: true,
                jobs: 'Developer & UI Designer',
                from: '04/2020',
                to: '09/2021',
                hideOverlay: true,
                href: 'https://g-ca.fr'
            },
        ],
        projects: [
            {
                name: 'Ro-bot.io',
                classes: 'bg-primary lg:col-span-4 h-96',
                style: 'background-image: url("./thumbnails/ro-bot.png")',
            },
            {
                name: 'Todo Vue 3',
                classes: 'bg-primary lg:col-span-2',
                style: 'background-image: url("./thumbnails/todo-list.png")',
                href: 'https://todo-vue3.briqueaubob.dev/',
                github: 'https://github.com/BriqueAuBob/todo-vue3'
            },
            {
                name: 'GitHub Finder',
                classes: 'bg-primary lg:col-span-3 h-72',
                style: 'background-image: url("./thumbnails/github-finder.png")',
                href: 'https://github-finder.briqueaubob.dev/',
                github: 'https://github.com/BriqueAuBob/github-finder'
            },
            {
                name: 'GiveUp',
                classes: 'bg-primary lg:col-span-3',
                style: 'background-image: url("./thumbnails/giveup.png")',
                href: 'https://giveup.briqueaubob.dev/',
                github: 'https://github.com/BriqueAuBob/GiveUp'
            },
            {
                name: 'BobAdminToolKit',
                classes: 'bg-primary lg:col-span-2',
                style: 'background-image: url("https://media.gmodstore.com/_/script_media/060c48b833d9570e8cf3f65b46b5352f.png")',
                href: 'https://www.gmodstore.com/market/view/bobadmintoolkit-warns-logs-reports',
            },
            {
                name: 'URL Shortener',
                classes: 'bg-primary lg:col-span-4',
                style: 'background-image: url("./thumbnails/url-shortener.png")',
                github: 'https://github.com/BriqueAuBob/laravel_shortener',
            }
        ],
        skills: [
            {
                src: php,
                color: '#4A568B',
            },
            {
                name: 'Laravel',
                src: laravel,
                color: '#F9322C',
            },
            {
                name: 'NodeJS',
                src: nodejs,
                color: '#72A465',
            },
            {
                name: 'AdonisJS',
                src: adonis,
                color: '#5A45FF',
            },
            {
                name: 'NestJS',
                src: nestjs,
                color: '#86152F',
            },
            {
                name: 'VueJS',
                src: vuejs,
                color: '#3EAF7C',
            },
            {
                name: 'NuxtJS',
                src: nuxtjs,
                color: '#00DC82',
            },
            {
                name: 'HTML',
                src: html,
                color: '#D84924',
            },
            {
                name: 'CSS',
                src: css,
                color: '#2449D8',
            },
            {
                name: 'SASS',
                src: sass,
                color: '#C36192',
            },
            {
                name: 'Lua',
                src: lua,
                color: '#00007C',
            },
            {
                name: 'Python',
                src: python,
                color: '#366C9C',
            },
            {
                name: 'MySQL',
                src: mysql,
                color: '#F29111',
            },
            {
                name: 'MongoDB',
                src: mongodb,
                color: '#4CAB3D',
            },
            {
                name: 'SQLite',
                src: sqlite,
                color: '#1782CA',
            },
        ],
    }),
    mounted() {
        AOS.init();
    },

}
</script>