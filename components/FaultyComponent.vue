<script setup lang="ts">
const hasIssue = ref(true)

function fixIssue(error: any) {
  hasIssue.value = false
  error.value = null
}
</script>

<template>
  <NuxtErrorBoundary>
    <throw-error v-if="hasIssue" />
    <div v-else>
      Component is working 😊
    </div>
    <template #error="{ error }">
      Component failed to Render 😅
      <button @click="fixIssue(error)">(fix the issue)</button>
    </template>
  </NuxtErrorBoundary>
</template>
