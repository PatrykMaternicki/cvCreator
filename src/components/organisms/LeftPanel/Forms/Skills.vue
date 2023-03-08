<template>
  <FormsDivider title="Umiejetnosci">
    <div class="organismsLeftPanelSkillsForms">
      <div class="organismsLeftPanelSkillsForms__container">
        <div class="organismsLeftPanelSkillsForms__inputWrapper">
          <FormsText
            label="Klucz"
            value="newSkill"
            placeholder="Podaj nazwe klucza"
            :model-value="newSkill"
            @update:newSkill="($event) => (newSkill = $event)"
          />
        </div>
        <div class="organismsLeftPanelSkillsForms__buttonWrapper">
          <AtomsButton
            @click="addSkill"
            text="Dodaj"
            :outline="true"
            :rounded="true"
          />
        </div>
      </div>
      <ul class="organismsLeftPanelSkillsForms__list">
        <li
          class="organismsLeftPanelSkillsForms__item"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <h3 class="organismsLeftPanelSkillsForms__title">
            {{ skill.label }}
          </h3>
          <OrganismsLeftFormsTags :index="index" :tags="skill.tags" />
        </li>
      </ul>
    </div>
  </FormsDivider>
</template>
<script setup lang="ts">
import type { DataFormsSkills } from "@/components/organisms/props";
import FormsDivider from "@/components/molecules/Forms/Divider/Index.vue";
import OrganismsLeftFormsTags from "@/components/organisms/LeftPanel/Forms/Tags.vue";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import AtomsButton from "@/components/atoms/Button/Index.vue";
import { useSkillStore } from "@/stores/skills";
import { ref } from "vue";

defineProps<DataFormsSkills>();
const newSkill = ref("");
const skillsStore = useSkillStore();
const addSkill = () => {
  skillsStore.addSkill(newSkill.value);
  newSkill.value = "";
  console.log(newSkill.value);
};
</script>
<style lang="scss">
.organismsLeftPanelSkillsForms {
  &__container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__list {
    padding: 0;
    margin: 0;
    margin-top: 20px;
    list-style: none;
  }

  &__item {
    list-style: none;
    border-top: 1px solid var(--secondary);
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;

    &:first-child {
      margin-top: 20px;
      border-top: inherit;
    }
  }

  &__inputWrapper {
    display: inline-block;
    width: 70%;
  }

  &__buttonWrapper {
    display: inline-block;
    height: 40px;
    width: 25%;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(--font-second);
    font-weight: 400;
    color: var(--secondary);
    padding-bottom: 20px;
    padding-top: 10px;
    font-size: 16px;
  }
}

.atomsPresentationTag:hover {
  .organismsLeftPanelSkillsForms__button {
    color: var(--primary);
  }
}
</style>
