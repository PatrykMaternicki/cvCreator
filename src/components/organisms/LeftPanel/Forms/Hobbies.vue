<template>
  <FormsDivider title="Zainteresowania"> 
    <div class="organismsLeftPanelSkillsFormsHobbies">
      <div>
        <PresentationTag  @click="hobbiesStore.removeHobby(hobby)" :value="hobby" v-for="hobby in hobbies">
          <font-awesome-icon icon="fa-solid fa-minus" />
        </PresentationTag>
        <PresentationTag v-show="edited" value="">
          <input
            v-model="newHobby"
            @change="handleChange"
            class="organismsLeftPanelSkillsFormsHobbies__hiddenInput"
            type="text"
            ref="input"
          />
        </PresentationTag>
      </div>
      <div>
        <AtomsButton @click="handleClick" :rounded="true" :outline="true">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </AtomsButton>
      </div>
    </div>
  </FormsDivider>
</template>
<script setup lang="ts">
import FormsDivider from "@/components/molecules/Forms/Divider/Index.vue";
import type { HobbiesProps } from "@/components/organisms/props";
import PresentationTag from "@/components/atoms/Presentation/Tag/Index.vue";
import AtomsButton from '@/components/atoms/Button/Index.vue';
import { useHobbiesStore } from "@/stores/hobbies";
import { ref, nextTick } from 'vue';
const hobbiesStore = useHobbiesStore();
const newHobby = ref("");
const edited = ref(false);
const input = ref<HTMLInputElement>();

const handleChange = () => {
  hobbiesStore.addHobby(newHobby.value);
  edited.value = false;
  newHobby.value = "";
}


const handleClick = () => {
  edited.value = true;
  nextTick(() => {
    input.value && input.value.focus();
  });
};

defineProps<HobbiesProps>()
</script>
<style lang="scss">
.organismsLeftPanelSkillsFormsHobbies {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__button {
    background-color: transparent;
    padding: 0;
    margin: 0;
    line-height: 1;
    color: var(--secondary);
    border: 0;
    margin-right: 6px;
    font-size: 12px;
    cursor: pointer;
  }

  &__hiddenInput {
    width: auto;
    background-color: transparent;
    color: var(--white);
    border: 0;
    width: 60px;

    &:focus {
      outline: none;
    }
  }
}

</style>
