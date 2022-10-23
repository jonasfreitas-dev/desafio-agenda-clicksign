<script setup lang="ts">
import { useContactsStore } from "src/stores/contact-store";
const contatcsStore = useContactsStore();

const saveContact = function () {
  if (contatcsStore.selectedContactId < 0) {
    contatcsStore.create(contatcsStore.editItem, true);
  } else if (contatcsStore.selectedContactId > -1) {
    contatcsStore.update(contatcsStore.editItem);
  }
  contatcsStore.showEditDialog = false;
};
</script>
<template>
  <q-dialog v-model="contatcsStore.showEditDialog">
    <q-card class="bg_modal" bordered>
      <q-card-section class="q-pa-sm">
        <div class="text-h6">Editar Contato</div>
      </q-card-section>
      <q-separator class="q-mt-sm" />
      <q-card-section class="q-mt-sm">
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <div>Nome</div>
            <q-input
              outlined
              label=""
              dense
              class="text-black full-width"
              v-model="contatcsStore.editItem.name"
            >
            </q-input>
          </div>
          <div class="col-12">
            <div>E-mail</div>
            <q-input
              outlined
              label=""
              dense
              class="text-black full-width"
              v-model="contatcsStore.editItem.email"
            >
            </q-input>
          </div>
          <div class="col-12">
            <div>Telefone</div>
            <q-input
              outlined
              label=""
              dense
              class="text-black full-width"
              v-model="contatcsStore.editItem.phoneNumber"
            >
            </q-input>
          </div>
        </div>
      </q-card-section>
      <q-separator class="q-mt-md" />
      <q-card-actions align="right">
        <q-btn
          flat
          label="Cancelar"
          color="red"
          no-caps
          class="cancelar_bt"
          v-close-popup
        />
        <q-btn flat label="Salvar" no-caps class="salvar_bt" @click="saveContact" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<style>
.bg_modal {
  width: 27rem;
  padding: 1rem 0;
  border-radius: 56px;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
}

.cancelar_bt {
  width: 5rem;
  height: 2rem;
  padding: 0.5rem 0.313rem;
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16),
    inset 0 0 0 0.5px rgba(0, 0, 0, 0.16), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  color: #fa7268;
}

.salvar_bt {
  width: 5rem;
  height: 2rem;
  padding: 0.5rem 0.313rem;
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16),
    inset 0 0 0 0.5px rgba(0, 0, 0, 0.16), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  background-color: #fa7268;
  color: #fff;
}
</style>
