<template>
  <Sidebar>
    <div class="organismsLeftPanel">
      <h1 class="organismsLeftPanel__title">CV Creator</h1>
      <div class="organismsLeftPanel__container">
        <FormsPersonInfo :person-info="personInfo" />
        <FormsSkills :skills="skills" />
        <FormsHobbies :hobbies="hobbies" />
        <FormsProjects :projects="projects" />
      </div>
    </div>
  </Sidebar>
</template>
<script setup lang="ts">
import FormsPersonInfo from "@/components/organisms/LeftPanel/Forms/PersonInfo.vue";
import FormsSkills from "@/components/organisms/LeftPanel/Forms/Skills.vue";
import Sidebar from "@/components/molecules/Navigations/Sidebar/Index.vue";
import FormsHobbies from "@/components/organisms/LeftPanel/Forms/Hobbies.vue";
import FormsProjects from "@/components/organisms/LeftPanel/Forms/Projects.vue";
import type { DataProps } from "@/components/organisms/props";
const props = defineProps<DataProps>();
</script>
<style lang="scss">
.organismsLeftPanel {
  &__title {
    font-family: var(--font-main);
    color: var(--secondary);
    font-size: 32px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 20px;
  }
}
</style>
