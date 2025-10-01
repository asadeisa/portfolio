<script setup lang="ts">
import type { Work } from '~/types/global';


const works: Work[] = [
  {
    id: 1,
    title: 'Multi-Vendor E-commerce',
    description: "Explore restaurants, groceries, electronics, fashion, pharmacy, services, cars, and more – all from trusted vendors. Delivaz makes shopping easy, fast, and reliable across every category you need.",
    tools: ['nuxt', 'vite', 'sass'],
    url: 'https://nuxt-delivaz.netlify.app/en',
    image: '/assets/images/1.png',
  },
  {
    id: 2,
    title: 'Portfolio Project',
    description: 'Led Frontend development for an artist portfolio platform featuring responsive UI/UX and modern Vue.js architecture.Engineered performance-critical components using Vue 3 Composition API with Vite build optimization.',
    tools: ['Vuejs', 'tailwindcss', 'vite'],
    url: 'https://www.hadiawada.com',
    image: '/assets/images/2.png',
  },
  {
    id: 3,
    title: 'Food Ordering Platform',
    description: 'A modern burger app featuring categories like burgers, drinks, salads & more. Designed for a smooth user experience with fast browsing, easy ordering, and a clean UI for both mobile and desktop.',
    tools: ['Vuejs', "Css", "HTML"],
    url: 'https://burger-spot-demo.netlify.app',
    image: '/assets/images/3.png',

  },
  {
    id: 4,
    title: 'Park And Fetch',
    description: 'A digital parking platform with mobile apps and a vendor dashboard.Streamlines valet and self-parking with convenience, speed, and control for users and service providers.',
    tools: ['Vuejs', "Css", 'HTML'],
    url: 'https://parkandfetch.com/',
    image: '/assets/images/4.png',

  },
  {
    id: 5,
    title: 'canteens tech',
    description: 'A  platform provide  best products of food and school supplies that students need in their academic stages for all age groups.',
    tools: ['Reactjs', 'html', 'sass'],
    url: 'https://canteens-tech.netlify.app',
    image: '/assets/images/5.png',

  },
  {
    id: 6,
    title: 'Fake store',
    description: 'A simple and responsive fake store that provides clean UI and sample products for testing, practicing, and learning modern web development.',
    tools: ['Nuxt', 'vuejs', 'bootstrap'],
    url: 'https://nuxt-fake-store-api.netlify.app',
    gitUrl: 'https://github.com/asadeisa/developer-test',
    image: '/assets/images/6.png',

  },
]
</script>

<template>
  <div>
    <h2 class="font-w-300 flex w-full justify-center items-center gap-2 text-3xl md:text-4xl xl:text-5xl text-center mb-5 xl:mb-7">
      <SVG class="star-svg" name="star"></SVG>
      <span>
        Featured Projects

      </span>
      <SVG class="star-svg" name="star"></SVG>
    </h2>
    <p class="text-sm md:text-base xl:text-lg text-center max-w-[700px] m-auto text-gray-700 dark:text-gray-200">
      A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
    </p>
    <!-- make it grid and in xl screen set 3 item in the one row and handel it in sm and other screen -->

    <div class="grid my-6 md:my-10 grid-cols-1 sm:grid-cols-2 sm:px-4 md:px-15 lg:px-0 lg:grid-cols-3 gap-7">
      <UiWorkCard
        v-for="work in works"
        :key="work.id"
        :work="work"
        class="max-w-[85vw] xs:max-w-[70vw] mx-auto sm:max-w-[500px]"
        />
     </div> 

    
  </div>
</template>