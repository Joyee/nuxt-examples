<script setup lang="ts">

</script>

<template>
  <NuxtExample dir="advanced/teleport">
    <div>
      <Teleport to="body">
        <UContainer>
          <UAlert class="mt-8" icon="i-heroicons-server-stack" title="SSR Teleport"
            description="Hello from Server-side teleport!"></UAlert>
        </UContainer>
      </Teleport>

      <ClientOnly>
        <Teleport to="body">
          <UContainer>
            <UAlert class="mt-8" icon="i-heroicons-window" title="Client Teleport"
              description="Hello from Client-side teleport!" />
          </UContainer>
        </Teleport>
      </ClientOnly>

      <MyModal title="Teleport Modal">Hello from Modal teleport!</MyModal>
    </div>
  </NuxtExample>
</template>
