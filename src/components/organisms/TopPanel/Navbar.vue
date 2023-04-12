<template>
  <MoleculesNavigationTopbar :class="{wide: rotate}" class="organismsTopPanel">
    <template #left>
      <AtomsButton @click="handleClick">
        <font-awesome-icon :class="{rotate: !rotate}" class="organismsTopPanel__icon organismsTopPanel__icon--arrowIcon" icon="fa-solid fa-chevron-right" />
      </AtomsButton>
    </template>
    <template #right>
      <div class="organismsTopPanel__flexbox">
        <div class="organismsTopPanel__wrapper">
          <AtomsButton type="primary" bigText animationFill text="Zapisz" :outline="true" :rounded="true">
              <font-awesome-icon class="organismsTopPanel__icon" icon="fa-regular fa-floppy-disk" />
          </AtomsButton>
        </div>
        <div class="organismsTopPanel__wrapper">
          <AtomsButton type="primary" bigText animationFill text="Generuj pdf" :outline="true" :rounded="true">
              <font-awesome-icon class="organismsTopPanel__icon" icon="fa-regular fa-file-pdf" />
          </AtomsButton>
        </div>
      </div>
    </template>
  </MoleculesNavigationTopbar>
</template>
<script setup lang="ts">
import MoleculesNavigationTopbar from "@/components/molecules/Navigations/Topbar/Index.vue";
import AtomsButton from "@/components/atoms/Button/Index.vue";
import { ref } from 'vue'; 
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const rotate = ref(false);
const handleClick = () => {
  rotate.value = !rotate.value;
  appStore.rotate(rotate.value)
}
</script>
<style lang="scss">
.organismsTopPanel {
  width: calc(100% - 400px);
  transition: width 0.3s;
  margin-left: auto;
  position: fixed;
  top: 0px;
  right: 0px;

  &.wide {
    width: 100%;
  }

  &__flexbox {
    display: flex;
    gap: 20px;
  }

  &__wrapper {
    width: 140px;
  }

  &__icon {
    padding-left: 10px;
    font-size: 16px;

    &--arrowIcon {
    padding: 0;
    transition: transform .3s;

      &.rotate {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
