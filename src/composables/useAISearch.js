import { ref } from 'vue';
import ollama from 'ollama';
import { config } from '../config/ai';

export function useAISearch() {
  const suggestions = ref([]);
  const isLoading = ref(false);

  const getSuggestions = async query => {
    isLoading.value = true;

    try {
      const response = await ollama.chat({
        model: config.MODEL_NAME,
        messages: [
          {
            role: 'system',
            content:
              "You are a helpful search assistant. Provide 3-5 relevant search suggestions based on the user's partial query. Return only the suggestions, one per line."
          },
          {
            role: 'user',
            content: `Suggest completions for: \"${query}\"`
          }
        ]
      });
      // Handle Ollama's response format
      let suggestionText = '';
      if (response && response.message && response.message.content) {
        suggestionText = response.message.content;
      } else if (
        response &&
        response.data &&
        response.data.choices &&
        response.data.choices[0] &&
        response.data.choices[0].message &&
        response.data.choices[0].message.content
      ) {
        suggestionText = response.data.choices[0].message.content;
      } else {
        suggestions.value = [];
        isLoading.value = false;
        return;
      }
      suggestions.value = suggestionText
        .split('\n')
        .filter(s => s.trim())
        .map((text, index) => ({ id: index, text: text.trim() }));
    } catch (error) {
      console.error('AI suggestion error:', error);
      suggestions.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  return {
    suggestions,
    isLoading,
    getSuggestions
  };
}
