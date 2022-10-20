<template>
  <q-layout view="lHh Lpr lFf ">
    <q-header class="bg-blue-grey-1">
      <div class="row q-ma-md">
        <div class="col flex justify-start q-gutter-md">
          <img src="~/assets/ic-logo.svg" class="ic_logo q-mr-sm" />
          <q-btn
            size="md"
            dense
            icon="add"
            rounded
            no-caps
            class="bg-primary text-secondary q-pl-md q-pr-md criar_contato_bt shadow-1"
            label="Criar contato"
          />
          <q-input
            standout="bg-blue-grey-5 text-white"
            v-model="contatosStore.searchQuery"
            label="Buscar..."
            dense
            class="busca_field col-grow text-black"
          >
            <template v-slot:append> <q-icon name="search" /> </template>
          </q-input>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useContatosStore } from "stores/contatos-store";
const contatosStore = useContatosStore();
</script>

<style>
ic_logo {
  width: 9.25rem;
  height: 2rem;
  margin: 0 14.25rem 0 0;
  object-fit: contain;
}

.busca_field {
  height: 2rem;
  background-color: #e4e7f4;
}

.criar_contato_bt {
  width: 9rem;
  height: 2rem;
  margin-top: 20px;
  border-radius: 20px;
  background-color: #e4e7f4;
}
</style>
