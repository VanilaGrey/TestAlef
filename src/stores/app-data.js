import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppDataStore = defineStore("appData", () => {
	const user = ref({
		fullName: "",
		age: "",
		children: [],
	});

	return { user };
});
