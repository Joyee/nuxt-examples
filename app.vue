<script setup lang="tsx">
const Welcome = () => <span>Welcome </span>

const Nuxt3 = defineComponent(() => <span class="text-primary font-bold">Nuxt3</span>)

const InlineComponent = () => (
  <div>
    <Welcome />
    <span>to </span>
    <Nuxt3 />
  </div>
)
</script>

<template>
  <NuxtExample dir="advanced/jsx" icon="i-simple-icons-react">
    <InlineComponent />
    <MyComponent message="This is an external JSX component" />
  </NuxtExample>
</template>
