<template>
	<div class="preview-page" v-if="hasUserData">
		<h1>Персональные данные</h1>
		<strong>
			{{ user.fullName }}
			<span v-if="ageWithWord">, {{ ageWithWord }}</span>
		</strong>

		<div v-if="user.children && user.children.length">
			<h2>Дети</h2>
			<ul class="preview-page__list">
				<li
					class="preview-page__item"
					v-for="(child, index) in user.children"
					:key="index"
				>
					<strong
						>{{ child.name }}, {{ child.age }}
						{{ declOfNum(child.age, ["год", "года", "лет"]) }}</strong
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useAppDataStore } from '@/stores/app-data';
import { declOfNum } from '@/utils/declOfNum.js';

const { user } = useAppDataStore();

const hasUserData = computed(() => {
	// проверяем, есть ли имя или хотя бы один ребенок с именем
	return (
		user.fullName && user.fullName.trim() !== ''
		|| user.children
		&& user.children.some((child) => child.name && child.name.trim() !== '')
	);
});

const ageWithWord = computed(() => {
	if (!user.age) return '';
	return `${user.age} ${declOfNum(user.age, ['год', 'года', 'лет'])}`;
});
</script>

<style scoped lang="scss">
.preview-page {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 620px;
	margin: 0 auto;
	gap: 20px;

	&__list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	&__item {
		width: max-content;
		padding: 10px 20px;
		background-color: #f1f1f1;
	}
}
</style>
