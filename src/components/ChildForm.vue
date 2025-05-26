<template>
	<InputField
		:modelValue="name"
		@update:modelValue="$emit('update:name', $event)"
		label="Имя ребенка"
		placeholder="Введите имя ребенка"
		type="text"
		required
	/>
	<InputField
		:modelValue="age"
		@update:modelValue="$emit('update:age', $event)"
		label="Возраст ребенка"
		placeholder="Введите возраст ребенка"
		type="number"
		required
	/>
</template>

<script setup>
import InputField from './InputField.vue';

defineProps({
	name: String,
	age: [String, Number],
});

defineEmits(['update:name', 'update:age']);
</script>
