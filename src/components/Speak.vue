<script setup>
import { speakArmenian } from '../utils/speech'

const props = defineProps({
  text: { type: String, required: true },
  fallback: { type: String, default: '' },
})
</script>

<template>
  <button
    class="speak-btn"
    type="button"
    :aria-label="`Listen: ${props.text}`"
    title="Listen"
    @click.stop.prevent="speakArmenian(props.text, props.fallback)"
  >🔊</button>
</template>

<style scoped>
.speak-btn {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 2px 7px;
  margin-left: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  line-height: 1.4;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
}
.speak-btn:hover { border-color: var(--accent); }
.speak-btn:active { transform: scale(0.94); }
</style>
