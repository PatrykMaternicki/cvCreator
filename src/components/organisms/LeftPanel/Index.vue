<template>
  <Sidebar> 
    CV Creator
    <FormsText label='Imie' value="imie" placeholder="Podaj swoje imie" />
  </Sidebar>
</template>
<script setup lang="ts">
import Sidebar from "@/components/molecules/Navigations/Sidebar/Index.vue";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import { onMounted } from "vue";
</script>
