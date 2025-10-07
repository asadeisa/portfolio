<script setup lang="ts">
import { useNamedIntersectionObservers } from '~/composables/useNamedIntersectionObserver'
// const homeSection = ref<HTMLElement | null>(null)
// const isHomeSectionElVisible = ref(false)
const aboutMeSection = ref<HTMLElement | null>(null)
const isAboutMeSectionElVisible = ref(false)
const skillSection = ref<HTMLElement | null>(null)
const isSkillSectionElVisible = ref(false)
const featuredSection = ref<HTMLElement | null>(null)
const isFeaturedSectionElVisible = ref(false)
useNamedIntersectionObservers([
  // { el: homeSection, visible: isHomeSectionElVisible, threshold: 0.1 },
  { el: aboutMeSection, visible: isAboutMeSectionElVisible, threshold: 0.3 },
  { el: skillSection, visible: isSkillSectionElVisible, threshold: 0.4 },
  { el: featuredSection, visible: isFeaturedSectionElVisible, threshold: 0.2 },
])
</script>
<template>
  <div role="main">
    <ThemeToggle  class="fixed top-4 right-0 -translate-x-full z-[1000] mr-2 md:mr-1" />

    <!-- use the ThemeToggle component in the left of the page top left -->
    <section ref="homeSection" id="home-section"
      class="px-4 min-h-[50dvh] md:min-h-[80dvh] xl:min-h-screen flex flex-col justify-center items-center transition-colors bg-"
      :class="true ? 'home-section-is-in' : 'home-section-is-out'">
      <div class="flex justify-center mb-3  md:mb-4 xl:mb-6">

        <UiGlassCard style="--i:1"
          class="child-home mt-8 mb-3 rounded-4xl border border-border inline-flex w-fit m-auto items-center gap-1 lg:gap-2">
          <span class="w-[8px] mt-0.5 h-[8px] rounded-full bg-green-600 inline-block">

          </span>
          <span class="text-xs md:text-sm text dark:opacity-80">
            Available for hire
          </span>
        </UiGlassCard>
      </div>
      <h1 style="--i : 2"
        class=" child-home text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-w-300 mb-4 text-[#19317d] dark:text-gray-100">
        Asad
        Eisa</h1>
      <p style="--i:3" class="child-home text-xl lg:text-2xl xl:text-3xl font-w-300 mb-3 md:mb-4 xl:mb-7">
        Frontend Developer
      </p>
      <p style="--i : 4"
        class="child-home text-sm lg:text-base xl:text-lg text-gray-700 dark:text-gray-300 max-w-xl text-balance text-center md:min-w-[700px] xl:min-w-[800px]">
        Specialized in Nuxt.js & Vue.js • Crafting exceptional digital experiences with modern web technologies and
        pixel-perfect attention to detail
      </p>
      <div style="--i:5" class=" child-home flex justify-center gap-4 xl:gap-6 my-5 xl:my-9">
        <UiButtonsPrimary button-type="link"
          class="flex text-sm md:text-base xl:text-lg rounded-4xl items-center gap-2 lg:gap-3 "
          href="/assets/files/asad-eisa.pdf" download="asad-eisa.pdf" aria-label="Download the asad eisa cv as a PDF">
          <SVG name="download"></SVG>
          Download CV
        </UiButtonsPrimary>
        <UiButtonsWhite button-type="link" href="mailto:asadeisa232@gmail.com" target="_blank"
          aria-label="Send me an email" class="flex items-center gap-2 lg:gap-3  text-sm md:text-base xl:text-lg">
          <SVG name="mail"></SVG>
          Get In Touch
        </UiButtonsWhite>
      </div>
      <section style="--i:6"
        class="child-home contact flex gap-x-7 gap-y-3 lg:gap-4.5 xl:gap-6 text-gray-600 dark:text-gray-400 text-xs md:text-sm lg:text-base flex-wrap justify-center">
        <div class="phone flex gap-1 items-center">
          <SVG name="phone"></SVG>
          <span>(+963) 997 437 142</span>
        </div>
        <div class="mail flex gap-1 items-center">
          <SVG name="mail"></SVG>
          <span>asadeisa232@gmail.com</span>
        </div>
        <div class="mail flex gap-1 items-center">
          <SVG name="location"></SVG>
          <span>Tartus, Syria</span>
        </div>
      </section>
      <section style="--i:7"
        class=" child-home links  flex items-center gap-4 lg:gap-6 xl:gap-8 text-gray-500 text-xs md:text-sm lg:text-base mt-4 lg:mt-6 xl:mt-9 pb-2 mb-7">
        <a href="https://github.com/asadeisa/portfolio" target="_blank" aria-label="GitHub" class="hover:bg-gray-300 rounded-full  hover:scale-105 transition-all p-2  hover:text-black">
          <SVG name="github"></SVG>
        </a>
        <a href="https://www.linkedin.com/in/asad-eisa" target="_blank" class="hover:bg-gray-300 rounded-full  hover:scale-105 transition-all p-2  hover:text-black" aria-label="linkedin">
          <SVG name="linkedin"></SVG>
        </a>
      </section>
      <div class="p-4 md:hidden"></div>
      <Mouse class="relative "></Mouse>
    </section>
    <section ref="aboutMeSection" id="about-me" class="bg-white dark:bg-dark py-10 lg:py-15 xl:py-20">
      <Container>

        <div class="flex flex-col md:flex-row gap-4 md:gap-10 xl:gap-15  items-center"
          :class="isAboutMeSectionElVisible ? 'element-in' : 'element-out'">

          <!-- make animation more slow and wait the element to full enter then applay -->

          <section
            class="cover left-section relative rounded-3xl w-[60%] h-[60%] min-w-[350px] min-h-[350px] aspect-square md:w-[370px] md:h-[370px] lg:w-[490px] lg:h-[490px]  xl:w-[580px] xl:h-[580px]"
            style="background-image: linear-gradient(to bottom right, var(--hero-border) 60%, #0596682d 100%);">
            <div
              class="absolute z-10 bottom-0 right-0  to-teal-600 from-blue-600 bg-gradient-to-r rounded-2xl p-3 lg:p-4   sm:translate-5">
              <h2 class="md:text-xl lg:text-2xl font-bold text-center text-white">3 +</h2>
              <p class="text-sm lg:text-base font-w-300 text-center text-white">Years Exp</p>
            </div>
            <NuxtImg width="500" height="500" preload
            fetchpriority="high"
              class="rounded-2xl object-cover absolute w-[90%] h-[90%] top-1/2 left-1/2 -translate-1/2"
              alt="my profile pix" src="assets/images/profile/1.png" />
          </section>

          <section class="right-section flex-1 h-fit p-4 md:p-0 ">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-w-300 mb-3 lg:mb-4 xl:mb-6 ">About me</h2>

            <p class="text-sm lg:text-[17px] text-gray-700 dark:text-gray-200">
              I’m Asad Eisa, a frontend developer with over 3 years of experience in Nuxt.js, Vue.js, and modern web
              technologies. I focus on building fast, responsive, and user-friendly applications using Vue 3 Composition
              API, Nuxt 3, Tailwind CSS, and performance techniques like lazy loading, code splitting, and SSR.
              <br /><br />
              I also bring 1 year of React experience, which strengthens my ability to adapt across ecosystems.
              Passionate about turning complex ideas into clean, scalable code, I strive to create digital experiences
              that are both powerful and intuitive.
            </p>
            <div class="flex flex-wrap  mt-5 gap-3 xl:gap-4">
              <section class="flex items-center gap-2 w-[60%] lg:w-[45%]">
                <SVG name="phone" class="text-accent"></SVG>
                <span class="text-gray-700 dark:text-gray-200 text-sm lg:text-base">(+963) 997 437 142</span>
              </section>
              <section class="flex items-center gap-2">
                <SVG name="location" class="text-accent"></SVG>
                <span class="text-gray-700 dark:text-gray-200 text-sm lg:text-base">Tartus, Syria</span>
              </section>
              <section class="flex items-center gap-2 w-[60%] lg:w-[45%]">
                <SVG name="mail" class="text-accent"></SVG>
                <span class="text-gray-700 dark:text-gray-200 text-sm lg:text-base">asadeisa232@gmail.com</span>
              </section>
              <section class="flex items-center gap-2">
                <SVG name="calendar" class="text-accent"></SVG>
                <span class="text-gray-700 dark:text-gray-200 text-sm lg:text-base">Available now</span>
              </section>

            </div>
            <div>
              <LazyUiButtonsPrimary button-type="link" hydrate-on-idle
                class="mt-6 flex w-fit rounded-4xl items-center gap-2 text-sm lg:text-base"
                href="/assets/files/asad-eisa.pdf" download="asad-eisa.pdf"
                aria-label="Download the asad eisa cv as a PDF">
                <SVG name="download"></SVG>
                <span>
                  Download My CV

                </span>
              </LazyUiButtonsPrimary>
            </div>

          </section>
        </div>
      </Container>
    </section>
    <section ref="skillSection" id="skills" class="py-10 lg:py-15 xl:py-20 bg-gray-50 dark:bg-gray-900">
      <Container :class="isSkillSectionElVisible ? 'element-in' : 'element-out'">
        <LazySkills hydrate-on-idle />

      </Container>
    </section>
    <section id="projects" class="py-10 lg:py-15 xl:py-20 bg-white dark:bg-dark">
      <Container>
        <LazyProjects hydrate-on-visible>
          <div ref="featuredSection" :class="isFeaturedSectionElVisible ? 'element-in' : 'element-out'">

          <h2 style="--i :1"
            class="font-w-300 fade-in flex w-full justify-center items-center gap-2 text-3xl md:text-4xl xl:text-5xl text-center mb-5 xl:mb-7">
            <SVG class="star-svg" name="star"></SVG>
            <span>
              Featured Projects

            </span>
            <SVG class="star-svg" name="star"></SVG>
          </h2>
          <p style="--i:2" class="fade-in text-sm md:text-base xl:text-lg text-center max-w-[700px] m-auto text-gray-700 dark:text-gray-200">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
          </p>
          </div>

        </LazyProjects>
      </Container>

    </section>
    <section id="contact" class="py-10 lg:py-15 xl:py-20 bg-main">
      <Container>
        <LazyContactUs hydrate-on-visible />
      </Container>

    </section>
  </div>
</template>
