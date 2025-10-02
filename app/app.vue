<script setup lang="ts">
useHead({
  title: 'Asad Eisa – Frontend Developer (Nuxt.js & Vue.js)',
  meta: [
    {
      name: 'description',
      content: 'Frontend Developer specializing in Nuxt.js, Vue.js, and performance optimization. Portfolio of projects in SEO, UI/UX, and scalable web apps.'
    },
    {
      name: 'keywords',
      content: 'Asad Eisa, frontend developer, Nuxt.js, Vue.js, web developer, portfolio, UI/UX, SEO, JavaScript, TypeScript, web performance, SSR, responsive design, Tartus, Syria, download CV, modern web, scalable apps'
    },
    { property: 'og:title', content: 'Asad Eisa – Frontend Developer' },
    { property: 'og:description', content: 'Portfolio showcasing Nuxt.js, Vue.js, and SEO projects.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    {
      rel: 'alternate',
      type: 'application/pdf',
      href: '/assets/files/asad-eisa.pdf',
      title: 'asad eisa CV PDF'
    },
    { rel: 'canonical', href: 'https://asad-eisa.netlify.app/' }
  ]
})
</script>
<template>
  <div>
    <NuxtPage />
    <NuxtRouteAnnouncer />
  </div>
</template>
