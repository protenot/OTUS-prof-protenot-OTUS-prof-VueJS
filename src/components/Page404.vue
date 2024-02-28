<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <p>Page "{{ route.fullPath }}" not found</p>
  <RouterLink to="/"> На главную </RouterLink>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style>
p {
  font-size: large;
  font-weight: 700;
  text-align: center;
}
</style>
