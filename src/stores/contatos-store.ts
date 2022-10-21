import { Contato } from '../models';
import { defineStore } from 'pinia';

export type RootState = {
  items: Contato[];
  searchQuery: string;
};

export const useContatosStore = defineStore('contatos', {
  state: () =>
    ({
      items: [],
      searchQuery: '',
    } as RootState),
  getters: {
    total: (state) => state.items.length,
    searchResults: (state) => {
      return state.searchQuery.length > 0
        ? state.items.filter((item) => {
            return state.searchQuery
              .toLowerCase()
              .split(' ')
              .every(
                (v) =>
                  item.nome?.toLowerCase().includes(v) ||
                  item.email?.toLowerCase().includes(v) ||
                  item.telefone?.toLowerCase().includes(v)
              );
          })
        : state.items;
    },
  },
  actions: {
    create(contato: Contato, highlight = false) {
      const highlightSeconds = 10;
      contato.id = this.items.length + 1;
      this.items.push(contato);
      if (highlight) this.setHighlight(contato.id, highlightSeconds);
    },
    update(contato: Contato) {
      const index = this.findIndexById(contato.id as number);
      if (index < 0) return;
      this.items[index] = contato;
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
