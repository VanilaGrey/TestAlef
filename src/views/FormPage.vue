<template>
	<form class="page-form" @submit.prevent="saveData">
		<h1 class="page-form__title">Персональные данные</h1>

		<div class="page-form__block">
			<InputField
				v-model="fullName"
				label="ФИО"
				placeholder="Введите ФИО"
				type="text"
			/>

			<InputField
				v-model="age"
				label="Возраст"
				placeholder="Введите возраст"
				type="number"
			/>
		</div>

		<div class="page-form__block page-form__block--alter">
			<h2 class="page-form__title">Дети (макс. 5)</h2>
			<BaseButton v-if="children.length < 5" @click="addChild">
				+ Добавить ребенка
			</BaseButton>
		</div>

		<div
			class="page-form__block page-form__block--alter"
			v-for="(child, index) in children"
			:key="index"
		>
			<ChildForm v-model:name="child.name" v-model:age="child.age" />
			<BaseButton variant="text" @click="removeChild(index)"
				>Удалить</BaseButton
			>
		</div>

		<BaseButton htmlType="submit" variant="filled">Сохранить</BaseButton>
	</form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ChildForm from "@/components/ChildForm.vue";
import InputField from "@/components/InputField.vue";
import { useAppDataStore } from "@/stores/app-data";
import BaseButton from "@/components/BaseButton.vue";

const appData = useAppDataStore();
const router = useRouter();

const fullName = ref("");
const age = ref("");
const children = ref([]);

function addChild() {
	if (children.value.length < 5) {
		children.value.push({ name: "", age: "" });
	}
}

function removeChild(index) {
	children.value.splice(index, 1);
}

function saveData() {
	appData.user = {
		fullName: fullName.value,
		age: age.value,
		children: children.value,
	};
	router.push("/preview");
}
</script>

<style scoped lang="scss">
.page-form {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 620px;
	margin: 0 auto;
	gap: 20px;

	&__block {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;

		&--alter {
			flex-direction: row;
			justify-content: space-between;
			gap: 18px;
		}
	}

	&__title {
		margin: 0;
	}
}
</style>
