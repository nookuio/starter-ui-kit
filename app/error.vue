<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md text-center">
      <h1 class="text-4xl font-bold text-red-500 mb-4">Error {{ props.error?.statusCode || '500' }}</h1>
      <p class="text-lg text-gray-700 mb-4">
        {{ props.error?.message || 'Something went wrong. Please try again later.' }}
      </p>
      <button 
        @click="handleError" 
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Go back to Home
      </button>
    </div>
  </div>
</template>