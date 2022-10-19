<template>
  <q-page class="row items-center justify-evenly"> </q-page>
</template>

<script setup lang="ts">
import { Contato } from "components/models";
//import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from "vue";

const contatos = ref<Contato[]>([]);
</script>
