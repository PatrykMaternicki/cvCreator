<template>
  <div :class="{ wide: rotated }" class="organismsRightPanel">
    <div class="organismsRightPanel__page">
      <div>
        <PresentationPersonInfo
          class="organismsRightPanel__item"
          :data="personInfo"
        />
        <PresentationSkills class="organismsRightPanel__item" :data="skills" />
        <PresentationHobbies
          class="organismsRightPanel__item"
          :data="hobbies"
        />
        <PresentationHeadline text="Projects" :modifier="['main', 'upper']" />
        <template :key="index" v-for="(project, index) in projects">
          <div class="organismsRightPanel__partial">
            <PresentationProject :project="project" />
          </div>
        </template>
      </div>
      <div>
        <PresentationHeadline text="Jobs" :modifier="['main', 'upper']" />
        <template :key="index" v-for="(job, index) in jobs">
          <PresentationJobs :job="job" />
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { DataProps } from "@/components/organisms/props";
import PresentationProject from "@/components/organisms/RightPanel/Partials/Project.vue";
import PresentationSkills from "@/components/organisms/RightPanel/Partials/Skills.vue";
import PresentationHobbies from "@/components/organisms/RightPanel/Partials/Hobbies.vue";
import PresentationPersonInfo from "@/components/organisms/RightPanel/Partials/PersonInfo.vue";
import PresentationJobs from "@/components/organisms/RightPanel/Partials/Jobs.vue";
import PresentationHeadline from "@/components/molecules/Presentation/Headline/Index.vue";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const { rotated } = storeToRefs(appStore);

defineProps<DataProps>();
</script>
<style lang="scss">
.organismsRightPanel {
  background-color: var(--secondary-100);
  transition: width 0.3s;
  width: calc(100% - 400px);
  margin-left: auto;
  display: flex;
  align-items: center;
  height: 100%;

  &.wide {
    width: 100%;
  }

  &__page {
    background-color: white;
    display: flex;
    margin: 2.5rem;
    padding: 2.5rem;
    gap: 40px;
    width: 596px;
    height: 842px;
    margin: auto;
    transform: scale(0.9);
  }

  &__item {
    margin-bottom: 10px;
  }

  &__partial {
    margin-bottom: 5px;
  }
}
</style>
