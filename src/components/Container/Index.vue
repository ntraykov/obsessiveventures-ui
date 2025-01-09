<template>
  <div
    class="m-auto px-4"
    :class="{
      'md:max-w-5xl lg:max-w-6xl xl:max-w-7xl': size == 'lg',
    }"
  >
    <slot />
  </div>
</template>

<script setup>
  defineProps({
    size: {
      type: String,
      default: 'lg',
    },
  })
</script>
