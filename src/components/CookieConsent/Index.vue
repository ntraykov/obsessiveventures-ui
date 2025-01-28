<template>
  <div
    v-if="!cookiesAccepted"
    class="fixed bottom-4 left-4 right-4 bg-gray-800 text-white rounded-lg p-4 shadow-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
  >
    <div class="text-sm">
      Този сайт използва бисквитки, за да подобри вашето изживяване. За повече
      информация вижте нашата
      <NuxtLink
        :to="cookiePolicyUrl"
        class="underline text-green-400 hover:text-green-300"
      >
        Политика за бисквитки
      </NuxtLink>
      .
    </div>
    <div class="flex space-x-4">
      <button
        @click="acceptCookies"
        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
      >
        Приемам
      </button>
      <button
        @click="rejectCookies"
        class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition"
      >
        Отказ
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useCookie } from '#imports'

  const { gtag } = defineProps({
    cookiePolicyUrl: {
      type: String,
      default: '/cookie-policy',
    },
    gtag: {
      type: String,
      required: true,
    },
  })

  // Create a ref for tracking cookie consentgp
  const cookiesAccepted = ref(false)

  // Initialize cookie management
  const cookieConsent = useCookie('cookieConsent')

  // Check if cookieConsent exists
  if (cookieConsent.value === 'accepted') {
    cookiesAccepted.value = true
    enableAnalytics()
  } else if (cookieConsent.value === 'rejected') {
    cookiesAccepted.value = true
  }

  // Function to handle accepting cookies
  const acceptCookies = () => {
    cookieConsent.value = 'accepted'
    cookiesAccepted.value = true
    enableAnalytics()
  }

  // Function to handle rejecting cookies
  const rejectCookies = () => {
    cookieConsent.value = 'rejected'
    cookiesAccepted.value = true
  }

  // Function to enable Google Analytics
  function enableAnalytics() {
    if (typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gtag}` // Replace with your Google Analytics ID
      document.head.appendChild(script)

      script.onload = () => {
        window.dataLayer = window.dataLayer || []
        function gtag() {
          window.dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', gtag)
      }
    }
  }
</script>
