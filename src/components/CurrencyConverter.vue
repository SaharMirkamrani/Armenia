<script setup>
import { ref } from 'vue'
import { AMD_PER_USD, amdToUsd, usdToAmd } from '../utils/currency'

const amd = ref(10000)
const usd = ref(Math.round(amdToUsd(10000) * 100) / 100)

function onAmd(e) {
  const v = parseFloat(e.target.value)
  amd.value = e.target.value
  usd.value = isNaN(v) ? 0 : Math.round(amdToUsd(v) * 100) / 100
}
function onUsd(e) {
  const v = parseFloat(e.target.value)
  usd.value = e.target.value
  amd.value = isNaN(v) ? 0 : Math.round(usdToAmd(v))
}
</script>

<template>
  <div class="converter">
    <span class="conv-label">💱 Quick convert</span>
    <span class="conv-field">
      <input type="number" :value="amd" @input="onAmd" aria-label="Amount in drams" />
      <span class="conv-unit">AMD</span>
    </span>
    <span class="conv-eq">=</span>
    <span class="conv-field">
      <input type="number" :value="usd" @input="onUsd" aria-label="Amount in dollars" />
      <span class="conv-unit">USD</span>
    </span>
    <span class="conv-rate">≈ {{ AMD_PER_USD }} AMD / $1</span>
  </div>
</template>

<style scoped>
.converter {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--muted);
}
.conv-label { font-weight: 600; color: var(--text); }
.conv-field { display: inline-flex; align-items: center; gap: 5px; }
.conv-field input {
  width: 96px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  padding: 6px 8px;
  font-size: 0.9rem;
}
.conv-field input:focus { outline: none; border-color: var(--accent); }
.conv-unit { font-size: 0.8rem; }
.conv-eq { opacity: 0.7; }
.conv-rate { font-size: 0.78rem; opacity: 0.8; }
</style>
