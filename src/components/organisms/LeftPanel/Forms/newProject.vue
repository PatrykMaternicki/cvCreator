<template>
  <FormsText
    label="Podaj tytul"
    placeholder="Wpisz tytul"
    :model-value="title"
    value="title"
    @update:title="($event) => (title = $event)"
  />
  <FormsText
    label="Podaj zadanie"
    placeholder="Wpisz zadanie"
    :model-value="task"
    value="task"
    @update:task="($event) => (task = $event)"
  />
  <FormsText
    label="Link"
    placeholder="Wpisz link"
    :model-value="link"
    value="link"
    @update:link="($event) => (link = $event)"
  />
  <div class="organismsLeftPanelFormsNewProject">
    <AtomsButton
      @click="handleClick"
      text="Dodaj projekt"
      :outline="true"
      :disabled="hasDisabled"
    />
  </div>
</template>
<script lang="ts" setup>
import type { NewProjectProp } from "@/components/organisms/props";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import AtomsButton from "@/components/atoms/Button/Index.vue";
import { useProjectsStore } from "@/stores/projects";

import { ref, computed } from "vue";
import { Project } from "@/models/project";
import { isMoreThanZero } from "@/helpers/operations";
const props = defineProps<NewProjectProp>();
const title = ref(props.project.title);
const task = ref(props.project.task);
const link = ref(props.project.link);
const projectsStore = useProjectsStore();

const handleClick = () => {
  projectsStore.addProject(
    new Project(title.value, link.value, task.value, [])
  );
  title.value = "";
  link.value = "";
  task.value = "";
};

const hasDisabled = computed(() =>
  isMoreThanZero(title) && isMoreThanZero(link) && isMoreThanZero(task)
    ? false
    : true
);
</script>
<style lang="scss">
.organismsLeftPanelFormsNewProject {
  width: 50%;
  margin: auto;
}
</style>
