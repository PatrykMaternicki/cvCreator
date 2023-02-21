<template>
  <Sidebar>
    CV Creator
    {{ personInfo }}
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
  </Sidebar>
</template>
<script setup lang="ts">
import Sidebar from "@/components/molecules/Navigations/Sidebar/Index.vue";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import type { LeftPanelProps } from "@/components/organisms/LeftPanel/props";
defineProps<LeftPanelProps>();
</script>
