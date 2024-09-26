<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="px-6 py-4 bg-gray-500 flex items-center justify-between">
    <h1 clas="text-2xl">Tab Tracker</h1>
    <nav>
      <ul class="flex items-center justify-center gap-10">
        <li>
          <RouterLink to="/" class="hover:border-b-4 hover:border-red-600">Home</RouterLink>
        </li>

        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="space-x-10">
      <RouterLink to="/login"> Login </RouterLink>

      <RouterLink to="/register">Register</RouterLink>
    </div>
  </div>
</template>
