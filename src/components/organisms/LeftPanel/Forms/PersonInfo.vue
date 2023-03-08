<template>
  <FormsDivider title="Dane osobowe">
    <FormsText
      @update:firstName="
        ($event) => store.update(ALLOWED_KEY.firstName, $event)
      "
      :model-value="personInfo.firstName"
      label="Imie"
      value="firstName"
      placeholder="Podaj swoje imie"
    />
    <FormsText
      @update:lastName="($event) => store.update(ALLOWED_KEY.lastName, $event)"
      :model-value="personInfo.lastName"
      label="Nazwisko"
      value="lastName"
      placeholder="Podaj swoje nazwisko"
    />
    <FormsText
      @update:city="($event) => store.update(ALLOWED_KEY.city, $event)"
      :model-value="personInfo.city"
      label="Miasto"
      value="city"
      placeholder="Podaj swoje miasto"
    />
    <FormsText
      @update:email="($event) => store.update(ALLOWED_KEY.email, $event)"
      :model-value="personInfo.email"
      label="Email"
      value="email"
      placeholder="Podaj swój email"
    />
    <FormsText
      @update:mobilePhone="
        ($event) => store.update(ALLOWED_KEY.mobilePhone, $event)
      "
      :model-value="personInfo.mobilePhone"
      label="Numer telefonu"
      value="mobilePhone"
      placeholder="Podaj swoj numer telefonu"
    />
    <FormsText
      @update:numberOfHouse="
        ($event) => store.update(ALLOWED_KEY.numberOfHouse, $event)
      "
      :model-value="personInfo.numberOfHouse"
      label="Numer domu"
      value="numberOfHouse"
      placeholder="Podaj numer domu"
    />
    <FormsText
      @update:numberOfFlat="
        ($event) => store.update(ALLOWED_KEY.numberOfFlat, $event)
      "
      :model-value="personInfo.numberOfFlat"
      label="Numer Mieszkania"
      value="numberOfFlat"
      placeholder="Podaj numer mieszkania"
    />
    <FormsText
      @update:postCode="($event) => store.update(ALLOWED_KEY.postCode, $event)"
      :model-value="personInfo.postCode"
      label="Kod pocztowy"
      value="postCode"
      placeholder="Podaj kod pocztowy"
    />
    <FormsText
      @update:street="($event) => store.update(ALLOWED_KEY.street, $event)"
      :model-value="personInfo.street"
      label="Ulica"
      value="street"
      placeholder="Podaj nazwe ulicy"
    />
  </FormsDivider>
</template>
<script setup lang="ts">
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import FormsDivider from "@/components/molecules/Forms/Divider/Index.vue";
import { usePersonInfoStore } from "@/stores/personInfo";
import { ALLOWED_KEY } from "@/types/personInfo";
import type { DataFormsPersonInfo } from "@/components/organisms/props";
defineProps<DataFormsPersonInfo>();
const store = usePersonInfoStore();
</script>
