
import { defineStore } from "pinia"
export const useLibraryStore = defineStore('library', {
    state: () => ({ books: [] }),
    actions: {
        setBooks(books: []) {
            this.books = books
        },
    },
    persist: true,
})