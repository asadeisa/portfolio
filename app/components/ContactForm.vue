<script setup lang="ts">
const name = ref('')
const email = ref('')
const message = ref('')
const status = ref('')
const loading = ref(false)
const statusType = ref<'success' | 'error' | null>(null)
const flashStatus = (msg: string, type: 'success' | 'error') => {
  statusType.value = type
  status.value = msg

  setTimeout(() => {
    status.value = ''
    statusType.value = null

  }, 5000)
}
const handleSubmit = async () => {
  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('message', message.value)
  formData.append('_captcha', 'false')

  try {
    loading.value = true
    const res = await fetch('https://formsubmit.co/asadeisa3333@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    })
    loading.value = false

    if (res.ok) {
      flashStatus('Message sent successfully!', 'success')
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      flashStatus('Failed to send message.', 'error')
    }
  } catch (err) {
    flashStatus('Something went wrong.', 'error')
  }
}
const closeMessage = () => {
  statusType.value = null;
  status.value = ''
}
</script>


<template>

  <div class="lg:w-full mx-4 bg-white dark:bg-main-dark shadow-sm p-3 lg:p-5 xl:p-7 rounded-lg">
    <Card class="max-w-[90vw] lg:max-w-[700px] m-auto ">
      <input type="hidden" name="_captcha" value="false">
      <div class="flex flex-col gap-1 lg:gap-1.5 xl:gap-2 mb-3 lg:mb-4 xl:mb-5">
        <label for="name" class="text-sm lg:text-base capitalize">name</label>
        <LazyUiInput hydrate-on-visible id="name" v-model="name">

        </LazyUiInput>
      </div>
      <div class="flex flex-col gap-1 lg:gap-1.5 xl:gap-2 mb-3 lg:mb-4 xl:mb-5">
        <label for="email" class="text-sm lg:text-base capitalize  ">Email</label>
        <LazyUiInput hydrate-on-visible id="email" v-model="email">

        </LazyUiInput>
      </div>
      <div class="flex flex-col gap-1 lg:gap-1.5 xl:gap-2 mb-3 lg:mb-4 xl:mb-5">
        <label class="text-sm lg:text-base capitalize  " for="textarea-message">Message</label>
        <LazyUiInput hydrate-on-visible type="textarea" id="textarea-message" v-model="message">

        </LazyUiInput>
      </div>
      <div class="flex justify-center mt-5 xl:mt-8">
        <LazyUiButtonsPrimary hydrate-on-visible class="text-sm md:text-base rounded-lg w-full items-center flex gap-2 justify-center  lg:text-lg xl:text-xl capitalize"
          :class="loading ? 'opacity-30 pointer-events-none' : ''" @click="handleSubmit">
          <SVG name="send"></SVG>
          <span class="font-w-300">
            send message

          </span>
        </LazyUiButtonsPrimary>
      </div>
      <Transition name="fade-slide">

        <LazyUiMessageError hydrate-on-visible class="mt-2 xl:mt-3" v-if="statusType == 'error'" :key="status + Date.now()"
          @close="closeMessage">
          {{ status }}
        </LazyUiMessageError>
      </Transition>
      <Transition name="fade-slide">
        <LazyUiMessageSuccess hydrate-on-visible class="mt-2 xl:mt-3" v-if="statusType === 'success'" @close="closeMessage"
          :key="status + Date.now()">
          {{ status }}
        </LazyUiMessageSuccess>
      </Transition>

    </Card>

  </div>
</template>
<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
  /* equivalent to Tailwind translate-y-2 */
}
</style>