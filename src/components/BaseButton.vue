<template>
	<button :type="htmlType" :class="buttonClass">
		<slot />
	</button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	htmlType: {
		type: String,
		default: 'button',
	},

	variant: {
		type: String,
		default: 'default', // 'filled', 'text',
	},
});

const buttonClass = computed(() => {
	return ['button', `button--${props.variant}`];
});
</script>


<style scoped>
.button {
	box-sizing: border-box;
	padding: 0.5em 1.5em;
	font-size: 1rem;
	color: #007bff;
	background-color: transparent;
	border: 1px solid #007bff;
	border-radius: 100px;
	cursor: pointer;
	transition: background-color 0.2s, color 0.2s;
}

.button--filled {
	color: white;
	background-color: #007bff;
}

.button--text {
	padding: 0;
	color: #007bff;
	background: none;
	border: none;
}
</style>
