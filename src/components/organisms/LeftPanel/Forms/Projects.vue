<template>
  <FormsDivider title="Projekty">
    <FormsProjectNew
      :project="{
        title: '',
        link: '',
        task: '',
      }"
    />
    <ul class="organismsLeftPanelProjectsForms__list">
      <li
        class="organismsLeftPanelProjectsForms__item"
        v-for="(project, index) in projects"
        :key="index"
      >
        <h3 class="organismsLeftPanelProjectsForms__title">
          {{ project.title }}
          <div class="organismsLeftPanelProjectsForms__xButton">
            <AtomsButton
              @click="projectsStore.removeProject(project)"
              :outline="true"
            >
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </AtomsButton>
          </div>
        </h3>
        <div class="organismsLeftPanelProjectsForms__container">
          <FormsProjectCurrent :index="index" :project="project" />
        </div>
        <OrganismsLeftFormsTags
          :store="projectsStore"
          :index="index"
          :tags="project.tags"
        />
      </li>
    </ul>
  </FormsDivider>
</template>
<script lang="ts" setup>
import FormsDivider from "@/components/molecules/Forms/Divider/Index.vue";
import OrganismsLeftFormsTags from "@/components/organisms/LeftPanel/Forms/Tags.vue";
import FormsProjectCurrent from "@/components/organisms/LeftPanel/Forms/Project/Current.vue";
import FormsProjectNew from "@/components/organisms/LeftPanel/Forms/Project/New.vue";
import { useProjectsStore } from "@/stores/projects";
import AtomsButton from "@/components/atoms/Button/Index.vue";
import type { ProjectsProps } from "@/components/organisms/props";

const projectsStore = useProjectsStore();
defineProps<ProjectsProps>();
</script>
<style lang="scss">
.organismsLeftPanelProjectsForms {
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
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 10px;

    &:first-child {
      margin-top: 10px;
      padding-top: 0px;
      border-top: inherit;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.atomsPresentationTag:hover {
  .organismsLeftPanelProjectsForms__button {
    color: var(--primary);
  }
}
</style>
