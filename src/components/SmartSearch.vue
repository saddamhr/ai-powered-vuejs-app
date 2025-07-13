<template>
  <div class="max-w-2xl mx-auto px-4">
    <!-- Large Decorative Search Icon -->
    <div class="flex justify-center mb-10 transition-all duration-500 ease-out">
      <div class="w-24 h-24">
        <svg
          class="w-full h-full text-gray-700 dark:text-gray-300 transition-all duration-300"
          :class="{
            'animate-float': !query && !isLoading,
            'animate-searching': query && (isLoading || !suggestions.length)
          }"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          :stroke-width="query || isLoading ? 2 : 1.5"
        >
          <path
            class="transition-all duration-300"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <!-- Search Container -->
    <div class="relative z-10">
      <div
        class="relative backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:ring-blue-500/50 dark:hover:ring-blue-400/50"
      >
        <div class="flex items-center">
          <!-- Search Icon -->
          <div class="absolute left-4 text-gray-400 dark:text-gray-500">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <!-- Search Input -->
          <input
            v-model="query"
            @input="handleInput"
            placeholder="Search for anything..."
            class="w-full pl-12 pr-12 py-4 text-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-2xl focus:outline-none transition-all duration-300"
            :disabled="isLoading"
            @keydown.enter="handleEnter"
            :class="{ 'opacity-75': isLoading }"
            autofocus
          />

          <!-- Clear Button -->
          <button
            v-if="query"
            @click="clearQuery"
            :disabled="isLoading"
            class="absolute right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50"
            aria-label="Clear search"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Loading Skeleton -->
      <div v-if="isLoading" class="mt-6 space-y-3">
        <div
          v-for="n in 3"
          :key="n"
          class="animate-pulse p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"
            ></div>
            <div class="flex-1">
              <div
                class="h-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full w-3/4"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Results -->
      <div class="mt-4 space-y-2">
        <transition-group
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-for="suggestion in suggestions"
            :key="suggestion.id"
            @click="selectSuggestion(suggestion)"
            class="group p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md ring-1 ring-gray-900/5 dark:ring-white/10 hover:ring-blue-500/50 dark:hover:ring-blue-500/50 transition-all duration-200 cursor-pointer"
            tabindex="0"
            @keydown.enter="selectSuggestion(suggestion)"
          >
            <div class="flex items-center space-x-3">
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-200"
              >
                ✨
              </span>
              <span class="text-gray-800 dark:text-gray-200">{{
                suggestion.text
              }}</span>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useAISearch } from '../composables/useAISearch';

  const query = ref('');
  const {
    suggestions,
    isLoading,
    getSuggestions,
    clearQuery: clearSuggestions
  } = useAISearch();
  let debounceTimeout = null;

  const handleInput = () => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    if (query.value.length > 2) {
      debounceTimeout = setTimeout(async () => {
        await getSuggestions(query.value);
      }, 400);
    } else {
      suggestions.value = [];
    }
  };

  const handleEnter = () => {
    if (suggestions.value.length > 0) {
      selectSuggestion(suggestions.value[0]);
    }
  };

  const selectSuggestion = suggestion => {
    query.value = suggestion.text;
    suggestions.value = [];
  };

  const clearQuery = () => {
    query.value = '';
    clearSuggestions();
  };
</script>

<style>
  @keyframes searching {
    0% {
      transform: rotate(0deg) scale(1);
    }
    30% {
      transform: rotate(-45deg) scale(0.9);
    }
    60% {
      transform: rotate(45deg) scale(0.9);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }

  .animate-searching {
    animation: searching 1.5s ease-in-out infinite;
    transform-origin: center;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>
