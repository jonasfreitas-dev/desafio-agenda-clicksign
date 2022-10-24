<script setup>
import { useQuasar } from "quasar";
import { useContactsStore } from "src/stores/contact-store";

const $q = useQuasar();
const contactsStore = useContactsStore();
const removeContact = function () {
  contactsStore.delete(contactsStore.selectedContactId);
  $q.notify("Contato removido com sucesso!");
};
</script>
<template>
  <q-dialog v-model="contactsStore.deleteDialog">
    <q-card class="bg_modal">
      <q-card-section class="q-pa-sm">
        <div class="text-h6">Excluir Contato</div>
      </q-card-section>
      <q-separator class="q-mt-sm" />
      <q-card-section class="q-mt-sm">
        Deseja realmente exlcuir o contato?
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
        <q-btn
          flat
          label="Excluir"
          no-caps
          class="excluir_bt"
          v-close-popup
          @click="removeContact"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<style>
.bg_modal {
  width: 27rem;
  padding: 1rem 0;
  border-radius: 16px;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
}

.cancelar_bt {
  width: 5rem;
  height: 2rem;
  padding: 0.5rem 0.313rem;
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16),
    inset 0 0 0 0.5px rgba(0, 0, 0, 0.16), 0 2px 4px 0.5px var(--black-8-16);
  background-color: #fff;
  color: #fa7268;
}

.excluir_bt {
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
