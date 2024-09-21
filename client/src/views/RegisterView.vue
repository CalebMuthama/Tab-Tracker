<script setup>
import { ref } from 'vue'
import AuthenticationService from '@/services/AuthenticationService'

const email = ref('')
const password = ref('')

const registerUser = async () => {
  const response = await AuthenticationService.register({
    email: email.value,
    password: password.value
  })

  console.log(response.data)
}
</script>

<template>
  <section id="registrationForm " class="grid place-content-center mt-10">
    <div class="bg-white p-5 my-5 rounded-lg max-h-full flex flex-col justify-center">
      <h1 class="text-center text-[2rem]">Please register Here</h1>
      <form @submit.prevent="registerUser">
        <div class="mb-4">
          <label for="email">Email: </label>
          <input
            v-model="email"
            type="email"
            name="email"
            required
            autocomplete="off"
            id="email"
            placeholder="Enter email"
            class="w-full border-none ring-2 ring-gray-500 focus:ring-2 focus:ring-[#121520] rounded-lg py-2 px-3 mb-2"
          />
        </div>
        <div class="mb-4">
          <label for="password">Password: </label>
          <input
            v-model="password"
            type="password"
            name="password"
            required
            autocomplete="off"
            id="passoword"
            placeholder="Enter Password"
            class="w-full border-none ring-2 ring-gray-500 focus:ring-2 focus:ring-[#121520] rounded-lg py-2 px-3 mb-2"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 w-full px-4 py-2 text-white rounded-lg hover:bg-blue-400"
        >
          Register
        </button>
      </form>
    </div>
  </section>
</template>
