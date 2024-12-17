<script setup lang="ts">
interface Props {
  header?: boolean;
  icon?: string;
  placement?: 'left' | 'right';
  title?: string;
  width?: number;
}

const props = withDefaults(defineProps<Props>(), {
  header: true,
  placement: 'right',
  width: 400,
});

const open = ref<boolean>(false);

function close() {
  open.value = !open.value;
}
</script>

<template>
  <div class="flex" @click="open = !open">
    <slot><UiButton label="Open Sideover" /></slot
    ><Teleport to="body"
      ><Transition
        enter-active-class="transform transition-transform duration-200"
        :enter-from-class="
          props.placement === 'left' ? '-translate-x-full' : 'translate-x-full'
        "
        enter-to-class="translate-x-0"
        leave-active-class="transform transition-transform duration-150"
        leave-from-class="translate-x-0"
        :leave-to-class="
          props.placement === 'left' ? '-translate-x-full' : 'translate-x-full'
        "
        ><div
          class="z-[11] fixed top-0 bg-white shadow-lg flex flex-col bottom-0 text-neutral-900 overflow-auto dark:bg-neutral-900 dark:text-zinc-50"
          v-if="open"
          :style="{ width: props?.width + 'px' }"
          :class="props.placement === 'left' ? 'left-0' : 'right-0'"
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
              @click="close()"
              ><Icon name="heroicons:x-mark" size="13"
            /></span>
          </div>
          <slot name="content" :close="close" /></div></Transition
      ><Transition
        class="fixed z-10 top-0 left-0 bottom-0 right-0 bg-[#00000040] dark:bg-[#00000080]"
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        ><div
          class="fixed bg-[#00000040] z-10 top-0 bottom-0 left-0 right-0"
          v-if="open"
          @click="close()"
        ></div></Transition
    ></Teleport>
  </div>
</template>
