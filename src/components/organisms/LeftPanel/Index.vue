<template>
  <Sidebar>
    <div class="organismsLeftPanel">
      <h1 class="organismsLeftPanel__title">CV Creator</h1>
      <FormsText
        :model-value="personInfo.firstName"
        label="Imie"
        value="firtName"
        placeholder="Podaj swoje imie"
      />
      <FormsText
        :model-value="personInfo.lastName"
        label="Nazwisko"
        value="lastName"
        placeholder="Podaj swoje nazwisko"
      />
      <FormsText
        :model-value="personInfo.city"
        label="Miasto"
        value="city"
        placeholder="Podaj swoje miasto"
      />
      <FormsText
        :model-value="personInfo.mobilePhone"
        label="Numer telefonu"
        value="mobilePhone"
        placeholder="Podaj swoj numer telefonu"
      />
      <FormsText
        :model-value="personInfo.numberOfHouse"
        label="Numer domu"
        value="numberOfHouse"
        placeholder="Podaj numer domu"
      />
      <FormsText
        :model-value="personInfo.numberOfFlat"
        label="Numer Mieszkania"
        value="numberOfFlat"
        placeholder="Podaj numer mieszkania"
      />
      <FormsText
        :model-value="personInfo.postCode"
        label="Kod pocztowy"
        value="postCode"
        placeholder="Podaj kod pocztowy"
      />
      <FormsText
        :model-value="personInfo.street"
        label="Ulica"
        value="street"
        placeholder="Podaj nazwe ulicy"
      />
    </div>
  </Sidebar>
</template>
<script setup lang="ts">
import Sidebar from "@/components/molecules/Navigations/Sidebar/Index.vue";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import type { DataProps } from "@/components/organisms/props";
defineProps<DataProps>();
</script>
<style lang="scss">
.organismsLeftPanel {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__title {
    font-family: var(--font-main);
    color: var(--secondary);
    font-size: 32px;
  }
}
</style>
