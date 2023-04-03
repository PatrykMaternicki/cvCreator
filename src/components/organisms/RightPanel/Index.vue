<template>
  <div class="organismsRightPanel">
    <PresentationPersonInfo :data="personInfo" />
    <PresentationSkills :data="skills" />
    <PresentationHobbies :data="hobbies" />
    <template :key="index" v-for="(project, index) in projects">
      <PresentationProject :project="project" />
    </template>
    <template :key="index" v-for="(job, index) in jobs">
      <PresentationJobs :job="job" />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { DataProps } from "@/components/organisms/props";
import PresentationProject from "@/components/organisms/RightPanel/Partials/Project.vue";
import PresentationSkills from "@/components/organisms/RightPanel/Partials/Skills.vue";
import PresentationHobbies from "@/components/organisms/RightPanel/Partials/Hobbies.vue";
import PresentationPersonInfo from "@/components/organisms/RightPanel/Partials/PersonInfo.vue";
import PresentationJobs from "@/components/organisms/RightPanel/Partials/Jobs.vue";
defineProps<DataProps>();
</script>
<style lang="scss">
.organismsRightPanel {
  width: calc(100% - 400px);
  margin-left: auto;
}
</style>
