<template>
  <q-page class="q-pa-md">
    <div class="row q-mt-md">
      <div class="col-12">
        <q-table
          class="q-mt-md shadown-0"
          :columns="columns"
          :rows="contactsStore.searchResults"
          color="grey"
          table-header-class="text-grey"
          table-class="text-black"
          flat
          bordered
          hide-pagination
        >
          <template v-slot:body="props">
            <q-tr :props="props" :class="props.row.highlight ? 'row_highlight' : ''">
              <q-td key="avatar" :props="props" style="width: 10px">
                <q-avatar dense :color="getRandomColor()" size="sm" text-color="white">{{
                  props.row.name[0]
                }}</q-avatar>
              </q-td>
              <q-td key="name" :props="props">
                {{ props.row.name }}
              </q-td>
              <q-td key="email" :props="props">
                {{ props.row.email }}
              </q-td>
              <q-td key="phoneNumber" :props="props">
                {{ props.row.phoneNumber }}
              </q-td>
              <q-td key="actions" :props="props">
                <q-btn
                  flat
                  icon="edit"
                  color="grey"
                  @click="selectContact(props.row.id)"
                ></q-btn>
                <q-btn
                  flat
                  icon="delete"
                  color="grey"
                  @click="
                    contactsStore.showDeleteDialog = !contactsStore.showDeleteDialog
                  "
                ></q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <edit-dialog />
      <delete-dialog />
    </div>
  </q-page>
</template>
<style>
.row_highlight {
  background-color: #fff3f2;
}
</style>
<script setup lang="ts">
import { useContactsStore } from "src/stores/contact-store";
import DeleteDialog from "src/components/DeleteDialog.vue";
import EditDialog from "src/components/EditDialog.vue";

const contactsStore = useContactsStore();

const columns = [
  {
    name: "avatar",
    label: "",
    align: "center",
  },
  {
    name: "name",
    label: "Contatos",
    field: "name",
    align: "left",
  },
  {
    name: "email",
    label: "E-mail",
    field: "email",
    align: "left",
  },
  {
    name: "phoneNumber",
    label: "Telefone",
    field: "phoneNumber",
    align: "left",
  },
  {
    name: "actions",
    label: "",
    align: "right",
  },
];

const getRandomColor = function () {
  const colors = ["red", "green", "blue", "blue-grey", "yellow-10"];
  const rnd = Math.floor(Math.random() * colors.length);
  return colors[rnd];
};

const selectContact = function (id: number) {
  contactsStore.selectedContactId = id;
  contactsStore.showEditDialog = true;
};
</script>
