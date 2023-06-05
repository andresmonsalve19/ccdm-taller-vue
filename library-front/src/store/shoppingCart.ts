import { defineStore } from "pinia";
import { Book } from '../model/Book'

export const useShoppingCartStore = defineStore("shoppingCart", {
    state: () => ({
        items: [] as Book[],
    }),
    actions: {
        addToCart(book: Book) :void {
            const exist = this.items.find(el => el.id === book.id)
            if (exist) {
                exist.quantity = exist.quantity ?? 0
                exist.quantity = exist.quantity + 1        
            } else {
                book.quantity = 1
                this.items.push(book)
            }
            
        },
        removeItem(book: Book) {
            this.items = this.items.filter(b => b.id != book.id)
        },
        clearItems() {
            this.items = []
        },
    },
    persist: true,
});