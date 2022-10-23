import { IContact } from '../models';
import { defineStore } from 'pinia';

export type RootState = {
  items: IContact[];
  selectedContactId: number;
  editItem: IContact;
  showEditDialog: boolean;
  showDeleteDialog: boolean;
  searchQuery: string;
};

export const useContactsStore = defineStore('contacts', {
  state: () =>
    ({
      items: [],
      selectedContactId: -1,
      editItem: { id: -1, name: '', email: '', phoneNumber: '' },
      showEditDialog: false,
      showDeleteDialog: false,
      searchQuery: '',
    } as RootState),
  getters: {
    total: (state) => state.items.length,
    isEmpty: (state) => state.items.length === 0,
    searchResults: (state) => {
      return state.searchQuery.length > 0
        ? state.items.filter((item) => {
            return state.searchQuery
              .toLowerCase()
              .split(' ')
              .every(
                (v) =>
                  item.name?.toLowerCase().includes(v) ||
                  item.email?.toLowerCase().includes(v) ||
                  item.phoneNumber?.toLowerCase().includes(v)
              );
          })
        : state.items;
    },
  },
  actions: {
    create(contato: IContact, highlight = false) {
      const highlightSeconds = 10;
      contato.id = this.items.length + 1;
      this.items.push(contato);
      if (highlight) this.setHighlight(contato.id, highlightSeconds);
    },
    update(contact: IContact) {
      const index = this.findIndexById(contact.id as number);
      if (index < 0) return;
      this.items[index] = contact;
    },
    delete(id: number) {
      const index = this.findIndexById(id);
      if (index < 0) return;
      this.items.slice(index, 1);
    },
    findIndexById(id: number) {
      return this.items.findIndex((item) => item.id === id);
    },
    setHighlight(id: number, seconds: number) {
      const index = this.findIndexById(id);
      if (index < 0) return;
      this.items[index].highlight = true;
      setTimeout(() => {
        this.items[index].highlight = false;
      }, 1000 * seconds);
    },
  },
});
