<script setup lang="ts">
import type { Work } from '~/types/global';


const works: Work[] = [
  {
    id: 1,
    title: 'Multi-Vendor E-commerce',
    description: `Developed a scalable multi-vendor e-commerce platform using Nuxt 3, TypeScript, and Sass.
Implemented modular vendor management, dynamic category routing, and SSR for SEO optimization.
Integrated Stripe for secure payments and Pinia for state management, ensuring fast and reliable UX.`,
    tools: ['nuxt', 'vite', 'sass'],
    url: 'https://nuxt-delivaz.netlify.app/en',
    image: '/assets/images/1.png',
  },
  {
    id: 2,
    title: 'Portfolio Project',
    description: `Led frontend development for an artist portfolio built with Vue 3 (Composition API) and Vite, using Tailwind CSS for styling.
Translated a Figma UI design into a fully responsive and accessible layout.
Integrated YouTube video embedding within the portfolio gallery for showcasing dynamic media content.`,
    tools: ['Vuejs', 'tailwindcss', 'vite'],
    url: 'https://www.hadiawada.com',
    image: '/assets/images/2.png',
  },
  {
    id: 3,
    title: 'Food Ordering Platform',
    description: `A modern food-ordering SPA developed with Vue 3 and Tailwind CSS, supporting both desktop and mobile users.
Implemented dynamic menu categories, cart management, and smooth animations using the Composition API.
Optimized image loading and API requests to ensure fast browsing and order flow.`,
    tools: ['Vuejs', "Css", "HTML"],
    url: 'https://burger-spot-demo.netlify.app',
    image: '/assets/images/3.png',

  },
  {
    id: 4,
    title: 'Park And Fetch',
    description: `Built a digital parking platform with mobile-first design, vendor dashboard, and admin analytics.
Streamlined self-parking workflows and valet management through responsive layouts and modular Vue components.`,
    tools: ['Vuejs', "Css", 'HTML'],
    url: 'https://parkandfetch.com/',
    image: '/assets/images/4.png',

  },
  {
    id: 5,
    title: 'canteens tech',
    description: `Developed a responsive platform showcasing food and school supplies for students at all grade levels.
Focused on simple UI architecture using React , reusable components, and Sass-based styling.
Integrated search filtering and category-based navigation for efficient browsing.`,
    tools: ['Reactjs', 'html', 'sass'],
    url: 'https://canteens-tech.netlify.app',
    image: '/assets/images/5.png',

  },
  {
    id: 6,
    title: 'Fake store',
    description: `A demo e-commerce web app built with Nuxt 3 and Bootstrap, featuring product categories, cart logic, and REST API integration.
Used Composition API composables for data fetching and route handling.
Serves as an open-source example for clean project structure and component design.`,
    tools: ['Nuxt', 'vuejs', 'bootstrap'],
    url: 'https://nuxt-fake-store-api.netlify.app',
    gitUrl: 'https://github.com/asadeisa/developer-test',
    image: '/assets/images/6.png',

  },
]

</script>

<template>
  <div>
    <slot></slot>

    <!-- make it grid and in xl screen set 3 item in the one row and handel it in sm and other screen -->

    <div class="grid my-6 md:my-10 grid-cols-1 sm:grid-cols-2 sm:px-4 md:px-15 lg:px-0 lg:grid-cols-3 gap-7">
      <LazyUiWorkCard hydrate-on-idle v-for="(work, index) in works" :key="work.id" :work="work" :index="index"
        class="max-w-[85vw] xs:max-w-[70vw] mx-auto sm:max-w-[500px]" />
    </div>


  </div>
</template>