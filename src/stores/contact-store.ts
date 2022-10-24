import { IContact } from '../models';
import { defineStore } from 'pinia';

export type RootState = {
  items: IContact[];
  selectedContactId: number;
  editItem: IContact;
  editDialog: boolean;
  deleteDialog: boolean;
  searchQuery: string;
};

export const useContactsStore = defineStore('contacts', {
  state: () =>
    ({
      items: [],
      selectedContactId: -1,
      editItem: { id: -1, name: '', email: '', phoneNumber: '' },
      editDialog: false,
      deleteDialog: false,
      searchQuery: '',
    } as RootState),
  getters: {
    total: (state) => state.items.length,
    isEmpty: (state) => state.items.length === 0,
    canSave: (state) =>
      state.editItem.name.length > 0 &&
      (state.editItem.email.length > 0 ||
        state.editItem.phoneNumber.length > 0),
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
    setEditItem(id: number) {
      const index = this.findIndexById(id);
      if (index < 0) return;
      this.editItem = { ...this.items[index] };
    },
    resetEditItem() {
      this.selectedContactId = -1;
      this.editItem = { id: -1, name: '', email: '', phoneNumber: '' };
    },
    showEditDialog(id?: number) {
      this.selectedContactId = Number(id);
      if (id) this.setEditItem(Number(id));
      else this.resetEditItem();
      this.editDialog = true;
    },
    showDeleteDialog(id?: number) {
      this.selectedContactId = Number(id);
      this.deleteDialog = true;
    },
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
      this.items[index].highlight = false;
    },
    delete(id: number) {
      const index = this.findIndexById(id);
      if (index < 0) return;
      this.items.splice(index, 1);
      this.resetEditItem();
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
