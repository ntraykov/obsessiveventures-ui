<template>
  <NuxtLink class="flex items-center space-x-2">
    <Icon>{{ icon }}</Icon>
    <span><slot /></span>
  </NuxtLink>
</template>

<script setup>
  defineProps({
    icon: {
      type: String,
      required: true,
    },
  })
</script>
