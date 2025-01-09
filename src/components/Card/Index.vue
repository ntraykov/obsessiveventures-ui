<template>
  <NuxtLink
    class="border rounded-xl group shadow hover:shadow-xl flex flex-col justify-between"
    :aria-label="`Научи повече за ${title}`"
  >
    <div class="overflow-hidden aspect-w-9 aspect-h-16">
      <img
        :src="imgUrl"
        :alt="title"
        class="rounded-t-lg group-hover:scale-125 transition-transform h-72 w-full object-cover"
        loading="lazy"
      />
    </div>

    <div class="flex flex-col justify-between flex-grow">
      <div>
        <h2
          class="px-5 py-2 text-xl font-bold text-gray-700 group-hover:text-green-700"
        >
          {{ title }}
        </h2>

        <div class="px-5 pb-4 text-gray-500 group-hover:text-green-900">
          <slot />
        </div>
      </div>

      <footer
        class="font-bold text-green-600 text-lg px-5 pb-4 group-hover:text-green-700 flex justify-between items-center rounded-b-lg transition-colors"
      >
        <span>Научи повече</span>
        <Icon name="chevron_right" class="font-bold" />
      </footer>
    </div>
  </NuxtLink>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  })
</script>
