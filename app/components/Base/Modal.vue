<script setup lang="ts">
interface Props {
  header?: boolean;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  header: true,
});

const open = defineModel<boolean>('open', { default: true });

function closeModal() {
  open.value = false;
}
</script>

<template>
  <Teleport to="body"
    ><Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-90"
      ><div
        class="w-[800px] rounded-[8px] bg-white shadow-2xl fixed top-1/2 left-1/2 z-[11] h-[500px] text-neutral-900 flex flex-col dark:bg-neutral-900 dark:text-zinc-50 translate-x-[-50%] translate-y-[-50%] overflow-auto"
        v-if="open"
        v-bind="$attrs"
      >
        <slot v-if="props?.header" name="header"
          ><div
            class="flex min-h-8 items-center pl-2 pr-2 justify-between border-b-[1px] border-b-neutral-200 dark:border-b-neutral-800"
          >
            <h2 class="text-sm font-medium">{{ props?.title || 'Title' }}</h2>
            <span
              class="min-w-5 min-h-5 flex justify-center items-center cursor-pointer rounded-[4px] hover:bg-neutral-100 dark:hover:bg-neutral-800"
              @click="closeModal()"
              ><Icon name="heroicons:x-mark" size="13"
            /></span></div
        ></slot>
        <slot /></div
    ></Transition>
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      ><div
        class="fixed z-[10] top-0 left-0 bottom-0 right-0 bg-[#00000040] dark:bg-[#00000080] modal-backdrop"
        v-if="open"
        @click="closeModal()"
      ></div></Transition
  ></Teleport>
</template>
