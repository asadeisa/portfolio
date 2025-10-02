<script setup lang="ts">
interface Skill {
  name: string;
  icon: string;
  level: string; // in percentage
  progressColor: string;
}
// vuejs , react ,nuxt , js/ts , tailwindcss , html/css , git/github , figma , vit/webpack
const skills: Skill[] = [
  { name: 'Vue.js', icon: '⚡', level: '90%', progressColor: 'bg-green-500' },
  { name: 'Nuxt.js', icon: '🚀', level: '85%', progressColor: 'bg-teal-500' },
  { name: 'React', icon: '⚛️', level: '60%', progressColor: 'bg-blue-500' },
  { name: 'JavaScript/TypeScript', icon: '🟨', level: '95%', progressColor: 'bg-yellow-500' },
  { name: 'HTML/CSS', icon: '🎨', level: '95%', progressColor: 'bg-orange-500' },
  { name: 'Tailwind CSS', icon: '💫', level: '85%', progressColor: 'bg-purple-500' },
  { name: 'Git/GitHub', icon: '🔧', level: '80%', progressColor: 'bg-gray-500' },
  { name: 'Figma', icon: '🎨', level: '50%', progressColor: 'bg-pink-500' },
  { name: 'Vite/Webpack', icon: '⚙️', level: '65%', progressColor: 'bg-red-500' },
  
  { name: 'AI Tools', icon: '🤖', level: '70%', progressColor: 'bg-indigo-500' },
];



</script>
<template>
  <div>
    <h2 style="--i:1" class="fade-in font-w-300 text-3xl md:text-4xl xl:text-5xl text-center mb-5 lg:mb-7">Skills & Technologies</h2> 
    <p style="--i:2" class="fade-in text-sm md:text-base xl:text-lg text-center max-w-[800px] m-auto text-gray-700 dark:text-gray-200">
      Proficient in modern frontend technologies with a focus on creating scalable and maintainable applications
    </p>
    <div class="skills flex flex-wrap gap-6 xl:gap-10 mt-8 md:mt-10 lg:mt-12 justify-center">
      <!-- loop for all skills and show it with the percentage progress bar,I don't have the SVG icon ,so I need to put it like this ⚡ for vue -->
      <div v-for="(skill , index) in skills" :key="skill.name" class="skill-card w-[90%] sm:w-[45%] max-w-[420px]">
        <div class="flex flex-col gap-3 mb-2">
          <section class="flex items-center gap-1.5 lg:gap-3">

            <span class="text-xl lg:text-2xl">{{ skill.icon }}</span>
            <h3 class="text-base lg:text-lg font-w-300">{{ skill.name }}</h3>
          </section>
          <div class="bg-gray-200 dark:bg-gray-700 relative min-h-[10px] flex-1 rounded-full overflow-hidden w-full">
            <div :class="skill.progressColor" class="h-2.5 absolute left-0 top-0 bottom-0 rounded-full skill-progress" :style="{  '--s': index, '--w': skill.level }"></div>

          </div>
          
        </div>
        </div>



      </div>
    </div>
</template>