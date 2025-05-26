<template>
	<button :class="buttonClass">
		<slot />
	</button>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
	type: {
		type: String,
		default: "default", // 'default' | 'filled' | 'text'
	},
});

const buttonClass = computed(() => {
	return ["button", `button--${props.type}`];
});
</script>

<style scoped>
.button {
	box-sizing: border-box;
	border: 1px solid #007bff;
	border-radius: 100px;
	padding: 0.5em 1.5em;
	font-size: 1rem;
	cursor: pointer;
	transition: background-color 0.2s, color 0.2s;
	background-color: transparent;
	color: #007bff;
}

.button--filled {
	background-color: #007bff;
	color: white;
}

.button--text {
	border: none;
	background: none;
	color: #007bff;
	padding: 0;
}
</style>
