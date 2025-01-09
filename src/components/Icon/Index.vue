<template>
  <span class="material-icons-outlined" aria-hidden="true">
    {{ name }}
  </span>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  }
})
</script>
