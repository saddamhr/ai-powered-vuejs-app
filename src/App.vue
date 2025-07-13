<script setup>
  import SmartSearch from './components/SmartSearch.vue';
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-950 dark:to-indigo-950"
  >
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <!-- Header Content -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
          >
            <span
              class="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              AI Powered Search
            </span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover intelligent suggestions powered by advanced language models
          </p>
        </div>

        <!-- Search Section -->
        <SmartSearch />
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-auto">
      <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-gray-500 dark:text-gray-400">
          Built with Vue.js and Tailwind CSS
          <span class="font-medium text-gray-900 dark:text-white"
            >©
            <a
              href="https://github.com/saddamhr"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-1 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span>Md. Saddam Hossain</span>
            </a>
          </span>
        </p>
      </div>
    </footer>
  </div>
</template>
