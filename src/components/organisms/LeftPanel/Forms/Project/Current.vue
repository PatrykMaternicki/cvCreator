<template>
  <FormsText
    label="Podaj tytul"
    placeholder="Wpisz tytul"
    :model-value="title"
    value="title"
    @update:title="($event) => projectsStore.update(index, 'title', $event)"
  />
  <FormsText
    label="Podaj zadanie"
    placeholder="Wpisz zadanie"
    :model-value="task"
    value="task"
    @update:task="($event) => projectsStore.update(index, 'task', $event)"
  />
  <FormsText
    label="Link"
    placeholder="Wpisz link"
    :model-value="link"
    value="link"
    @update:link="($event) => projectsStore.update(index, 'link', $event)"
  />
</template>
<script lang="ts" setup>
import type { ProjectProp } from "@/components/organisms/props";
import FormsText from "@/components/atoms/Forms/Text/Index.vue";
import { useProjectsStore } from "@/stores/projects";
import { ref, watch, type Ref } from "vue";
const props = defineProps<ProjectProp>();
const title = ref(props.project.title);
const task = ref(props.project.task);
const link = ref(props.project.link);
watch(
  () => props.project.title,
  () => (title.value = props.project.title)
);
watch(
  () => props.project.task,
  () => (task.value = props.project.task)
);
watch(
  () => props.project.link,
  () => (link.value = props.project.link)
);
const projectsStore = useProjectsStore();
</script>
