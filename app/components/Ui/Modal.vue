<script setup lang="ts">
interface Props {
  header?: boolean;
  height?: number;
  icon?: string;
  title?: string;
  width?: number;
}

const props = withDefaults(defineProps<Props>(), {
  header: true,
  height: 500,
  width: 800,
});

const open = defineModel<boolean>('open', { default: false });

const emits = defineEmits<{ close: [MouseEvent]; open: [MouseEvent] }>();

function closeModal(event: MouseEvent) {
  open.value = false;

  emits('close', event);
}
</script>

<template>
  <div
    class="flex"
    @click="
      open = !open;
      emits('open', $event);
    "
  >
    <slot><UiButton label="Open Modal" /></slot
    ><Teleport to="body"
      ><Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
        ><div
          class="rounded-lg bg-white shadow-2xl fixed top-[50%] left-[50%] z-[11] text-neutral-900 flex flex-col overflow-auto dark:bg-neutral-900 dark:text-zinc-50 translate-x-[-50%] translate-y-[-50%]"
          v-if="open"
          :style="{ height: `${props?.height}px`, width: `${props?.width}px` }"
          @click.stop
        >
          <div
            class="flex min-h-8 items-center pl-2 pr-2 justify-between border-b border-b-neutral-200 dark:border-b-neutral-800"
            v-if="props?.header"
          >
            <div class="flex gap-x-1.5 items-center">
              <Icon v-if="props?.icon" :name="props?.icon" size="13" />
              <h2 class="text-sm font-medium">{{ props?.title || 'Title' }}</h2>
            </div>
            <span
              class="min-w-5 min-h-5 flex justify-center items-center cursor-pointer rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
              @click="closeModal()"
              ><Icon name="heroicons:x-mark" size="13"
            /></span>
          </div>
          <slot name="content" :close="closeModal" /></div></Transition
      ><Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        ><div
          class="fixed z-10 top-0 left-0 bottom-0 right-0 bg-[#00000040] dark:bg-[#00000080] modal-backdrop"
          v-if="open"
          @click="closeModal($event)"
        ></div></Transition
    ></Teleport>
  </div>
</template>
