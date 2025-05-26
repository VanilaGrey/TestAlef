import { createRouter, createWebHistory } from 'vue-router';
import FormPage from '@/views/FormPage.vue';
import PreviewPage from '@/views/PreviewPage.vue';


const routes = [
	{
		path: '/',
		name: 'form',
		component: FormPage,
	},
	{
		path: '/preview',
		name: 'preview',
		component: PreviewPage,
	},
];

// Разрешаем pixelperfect в dev
if (import.meta.env.DEV) {
	routes.push({ path: '/pixelperfect' });
}

// Обработка несуществующих маршрутов
routes.push({
	path: '/:catchAll(.*)',
	redirect: '/',
});

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;

