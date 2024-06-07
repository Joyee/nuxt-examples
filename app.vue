<script setup lang="ts">
const locale = useLocale()
const locales = useLocales()
const date = useLocaleDate(new Date('2024-06-07'))
</script>

<template>
  <NuxtExample dir="advanced/locale">
    <div class="flex justify-center gap-8 items-center mt-2">
      <USelect v-model="locale" :options="locales" icon="i-heroicons-calendar-days" />
      <p class="text-4xl">{{ date }}</p>
    </div>
  </NuxtExample>
</template>
