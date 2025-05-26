<template>
	<div class="input">
		<div class="input__label">{{ label }}</div>
		<input
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			class="input__text"
		/>
	</div>
</template>

<script>
export default {
	name: "InputField",
	props: {
		modelValue: [String, Number],
		label: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			default: "text",
			validator: (val) => ["text", "number"].includes(val),
		},
	},
};
</script>

<style scoped lang="scss">
.input {
	position: relative;
	width: 100%;
	border: 1px solid #f1f1f1;
	border-radius: 4px;
	padding-top: 22px;

	&__label {
		position: absolute;
		top: 4px;
		left: 8px;
		font-size: 13px;
		color: rgba(17, 17, 17, 0.48);
		pointer-events: none;
	}

	&__text {
		width: 100%;
		padding: 6px 8px;
		font-size: 14px;
		border: none;
		outline: none;
		box-sizing: border-box;
	}
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

input[type="number"] {
	-moz-appearance: textfield;
}
</style>
