<template>
  <NuxtLink
    :class="[
      baseClasses,
      sizeClasses,
      variantClasses,
      hasIcon && 'space-x-2',
    ]"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const { variant, size } = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'white', 'danger'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['md', 'lg'].includes(value),
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
})

// Base classes
const baseClasses =
  'rounded-lg font-bold transition-all ease-in-out focus:ring-2 flex items-center justify-center cursor-pointer'

// Size classes
const sizeClasses = computed(() => {
  if (size === 'lg') {
    return 'px-6 py-4 md:px-8 md:py-5 text-lg'
  }
  return 'px-6 py-3'
})

// Variant classes
const variantClasses = computed(() => {
  switch (variant) {
    case 'primary':
      return 'text-white bg-primary hover:bg-green-600 focus:ring-green-500'
    case 'white':
      return 'text-green-800 bg-white hover:bg-gray-200 hover:text-green-700 hover:shadow-lg focus:ring-green-500'
    case 'danger':
      return 'text-white bg-red-800 hover:bg-gray-100 hover:text-red-700 focus:ring-red-500'
    default:
      return ''
  }
})
</script>
