<template>
  <Sidebar>
    <div class="organismsLeftPanel">
      <h1 class="organismsLeftPanel__title">CV Creator</h1>
      <div class="organismsLeftPanel__container">
        <FormsPersonInfo :person-info="personInfo" />
      </div>
      <FormsSkills :skills="skills" />
    </div>
  </Sidebar>
</template>
<script setup lang="ts">
import FormsPersonInfo from "@/components/organisms/LeftPanel/Forms/PersonInfo.vue";
import FormsSkills from "@/components/organisms/LeftPanel/Forms/Skills.vue";
import Sidebar from "@/components/molecules/Navigations/Sidebar/Index.vue";
import type { DataProps } from "@/components/organisms/props";
const props = defineProps<DataProps>();
console.log(props.skills[0]);
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
