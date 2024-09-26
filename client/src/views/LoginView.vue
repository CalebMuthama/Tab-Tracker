<script setup>
import { reactive } from 'vue'
import AuthenticationService from '@/services/AuthenticationService'

const form = reactive({
  email: '',
  password: '',
  errorMessage: ''
})

// const email = ref('')
// const password = ref('')
// const errorMessage = ref(null)

const resetForm = () => {
  form.email = ''
  form.password = ''
}

const loginUser = async () => {
  try {
    await AuthenticationService.login({
      email: form.email,
      password: form.password
    })
    resetForm()
  } catch (error) {
    if (error.response && error.response.data && error.response?.data?.error) {
      form.errorMessage = error.response?.data?.error || 'Unexpected error has occured.'
      console.log(error.message)
      console.log(error.response?.data?.error)

      setTimeout(() => {
        form.errorMessage = null
      }, 4000)
    }
  }
}
</script>

<template>
  <section id="registrationForm " class="grid place-content-center mt-10">
    <div class="bg-white p-5 my-5 rounded-lg max-h-full flex flex-col justify-center">
      <h1 class="text-center text-[2rem]">Please Login Here</h1>
      <form @submit.prevent="loginUser">
        <div class="mb-4">
          <label for="email">Email: </label>
          <input
            v-model="form.email"
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
            v-model="form.password"
            type="password"
            name="password"
            required
            autocomplete="off"
            id="password"
            placeholder="Enter Password"
            class="w-full border-none ring-2 ring-gray-500 focus:ring-2 focus:ring-[#121520] rounded-lg py-2 px-3 mb-2"
          />
        </div>

        <div v-if="form.errorMessage" class="text-red-500 text-10xl mb-2 text-center">
          {{ form.errorMessage }}
        </div>
        <button
          type="submit"
          class="bg-blue-500 w-full px-4 py-2 text-white rounded-lg hover:bg-blue-400"
        >
          Login
        </button>
      </form>
    </div>
  </section>
</template>
