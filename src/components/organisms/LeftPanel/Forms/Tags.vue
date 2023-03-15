<template>
  <div class="organismsLeftPanelSkillsFormsTags">
    <div>
      <PresentationTag
        @click="props.store.removeTag(tag, index)"
        :value="tag"
        v-for="tag in tags"
      >
        <button class="organismsLeftPanelSkillsFormsTags__button">
          <font-awesome-icon icon="fa-solid fa-minus" />
        </button>
      </PresentationTag>
      <PresentationTag v-show="edited" value="">
        <input
          v-model="newTag"
          @change="handleChange"
          class="organismsLeftPanelSkillsFormsTags__hiddenInput"
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
</template>
<script setup lang="ts">
import AtomsButton from "@/components/atoms/Button/Index.vue";
import { ref, nextTick } from "vue";
import type { TagsProps } from "@/components/organisms/props";
import PresentationTag from "@/components/atoms/Presentation/Tag/Index.vue";

const edited = ref(false);
const newTag = ref("");
const input = ref<HTMLInputElement>();
const props = defineProps<TagsProps>();

const handleClick = () => {
  edited.value = true;
  nextTick(() => {
    input.value && input.value.focus();
  });
};

const handleChange = () => {
  props.store.addTag(newTag.value, props.index);
  edited.value = false;
  newTag.value = "";
};
</script>
<style lang="scss">
.organismsLeftPanelSkillsFormsTags {
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
