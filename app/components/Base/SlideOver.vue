<script setup lang="ts">
interface Props {
  position?: 'left' | 'right';
  width?: number;
}

const props = withDefaults(defineProps<Props>(), {
  position: 'right',
  width: 400,
});

const open = defineModel<boolean>('open', { default: true });

function toggleMenu() {
  open.value = !open.value;
}
</script>

<template>
  <Teleport to="body"
    ><Transition
      :enter-active-class="'transform transition-transform duration-200'"
      :enter-from-class="
        props.position === 'left' ? '-translate-x-full' : 'translate-x-full'
      "
      enter-to-class="translate-x-0"
      :leave-active-class="'transform transition-transform duration-150'"
      leave-from-class="translate-x-0"
      :leave-to-class="
        props.position === 'left' ? '-translate-x-full' : 'translate-x-full'
      "
      ><div
        class="z-[11] fixed top-0 bg-white shadow-lg flex flex-col bottom-0 text-neutral-900 dark:bg-neutral-900 dark:text-zinc-50 overflow-auto"
        :style="{ width: props?.width + 'px' }"
        v-if="open"
        :class="props.position === 'left' ? 'left-0' : 'right-0'"
      >
        <slot /></div
    ></Transition>
    <Transition
      class="fixed z-[10] top-0 left-0 bottom-0 right-0 bg-[#00000040] dark:bg-[#00000080]"
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      ><div
        class="fixed bg-[#00000040] z-[10] top-0 bottom-0 left-0 right-0"
        v-if="open"
        @click="toggleMenu"
      ></div></Transition
  ></Teleport>
</template>
