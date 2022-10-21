<template>
  <q-layout view="lHh Lpr lFf ">
    <q-header class="bg-blue-grey-1 q-ma-md">
      <div class="row flex q-col-gutter-md">
        <div class="col-6 col-sm-6 col-md-2 flex items-center">
          <img src="~/assets/ic-logo.svg" class="ic_logo" />
        </div>
        <div class="col-auto flex justify-end items-center">
          <q-btn
            size="md"
            dense
            icon="add"
            rounded
            no-caps
            class="bg-primary text-secondary criar_contato_bt shadown-0"
            label="Criar contato"
          />
        </div>
        <div class="col-12 col-sm-12 col-md-grow flex items-center col-grow">
          <q-input
            standout="bg-blue-grey-5 text-white"
            v-model="contatosStore.searchQuery"
            label="Buscar..."
            dense
            class="text-black full-width"
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
  object-fit: contain;
}

.busca_field {
  height: 2rem !important;
  background-color: #e4e7f4;
}

.criar_contato_bt {
  width: 9rem;
  height: 2rem !important;
  border-radius: 20px;
  background-color: #e4e7f4;
}
</style>
