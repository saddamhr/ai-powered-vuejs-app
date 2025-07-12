<template>
  <div class="smart-search">
    <div class="search-bar">
      <input
        v-model="query"
        @input="handleInput"
        placeholder="🔍 Search for anything..."
        class="search-input"
        :disabled="isLoading"
        @keydown.enter="handleEnter"
        autofocus
      />
      <button class="clear-btn" v-if="query" @click="clearQuery" :disabled="isLoading">✕</button>
    </div>

    <transition name="fade">
      <div v-if="isLoading" class="loading">
        <span class="loader"></span> Getting smart suggestions...
      </div>
    </transition>

    <transition-group name="slide-fade" tag="div" class="suggestions" v-if="suggestions.length > 0">
      <div
        v-for="suggestion in suggestions"
        :key="suggestion.id"
        @click="selectSuggestion(suggestion)"
        class="suggestion-item"
        tabindex="0"
        @keydown.enter="selectSuggestion(suggestion)"
      >
        <span class="suggestion-icon">💡</span>
        <span class="suggestion-text">{{ suggestion.text }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAISearch } from './../composables/useAISearch'

export default {
  name: 'SmartSearch',
  setup() {
    const query = ref('')
    const { suggestions, isLoading, getSuggestions } = useAISearch()
    let debounceTimeout = null

    const handleInput = () => {
      if (debounceTimeout) clearTimeout(debounceTimeout)
      if (query.value.length > 2) {
        debounceTimeout = setTimeout(async () => {
          await getSuggestions(query.value)
        }, 400)
      } else {
        suggestions.value = []
      }
    }

    const handleEnter = () => {
      if (suggestions.value.length > 0) {
        selectSuggestion(suggestions.value[0])
      }
    }

    const selectSuggestion = (suggestion) => {
      query.value = suggestion.text
      // Optionally emit event or handle selection logic
    }

    const clearQuery = () => {
      query.value = ''
      suggestions.value = []
    }

    return {
      query,
      suggestions,
      isLoading,
      handleInput,
      selectSuggestion,
      handleEnter,
      clearQuery,
    }
  },
}
</script>
