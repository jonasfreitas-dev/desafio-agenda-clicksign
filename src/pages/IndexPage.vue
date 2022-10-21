<template>
  <q-page class="q-pa-md">
    <div class="row q-mt-md">
      <div class="col-12">
        <q-table
          class="q-mt-md shadown-0"
          :columns="columns"
          :rows="contatosStore.searchResults"
          color="grey"
          table-header-class="text-grey"
          table-class="text-black"
          flat
          bordered
          hide-pagination
        >
          <template v-slot:body="props">
            <q-tr :props="props" :class="props.row.highlight ? 'row_highlight' : ''">
              <q-td key="avatar" :props="props" style="width: 10px"></q-td>
                <q-avatar dense :color="getRandomColor()" size="sm" text-color="white">{{
                  props.row.nome[0]
                }}</q-avatar>
              </q-td>
              <q-td key="nome" :props="props">
                {{ props.row.nome }}
              </q-td>
              <q-td key="email" :props="props">
                {{ props.row.email }}
              </q-td>
              <q-td key="telefone" :props="props">
                {{ props.row.telefone }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>
<style>
.row_highlight {
  background-color: #fff3f2;
}
</style>
<script setup lang="ts">
import { useContatosStore } from 'stores/contatos-store';

const contatosStore = useContatosStore();

const columns = [
  {
    name: 'avatar',
    label: '',
    align: 'center',
  },
  {
    name: 'nome',
    label: 'Contatos',
    field: 'nome',
    align: 'left',
  },
  {
    name: 'email',
    label: 'E-mail',
    field: 'email',
    align: 'left',
  },
  {
    name: 'telefone',
    label: 'Telefone',
    field: 'telefone',
    align: 'left',
  },
];

contatosStore.create({
  nome: 'Jonas Freitas',
  telefone: '24992959359',
  email: 'admin@jonasfreias.dev',
});

contatosStore.create({
  nome: 'Carolina Furtado',
  telefone: '24993273658',
  email: 'calu.furtado@gmail.com',
});

contatosStore.create({
  nome: 'Jairo Freitas',
  telefone: '22997493821',
  email: 'jairocostfreitas@gmail.com',
});

const getRandomColor = function () {
  const colors = ['red', 'green', 'blue', 'blue-grey', 'yellow-10'];
  const rnd = Math.floor(Math.random() * colors.length);
  return colors[rnd];
};
</script>
