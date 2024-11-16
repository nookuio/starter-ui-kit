<script setup lang="ts">
interface Props {
  message: string;
  type: 'error' | 'alert' | 'info' | 'success';
}

const props = defineProps<Props>();

const emit = defineEmits<{ close: [] }>();

const iconData = computed(() => {
  switch (props?.type) {
    case 'alert':
      return {
        name: 'heroicons:exclamation-circle',
        color: 'text-orange-400',
      };
    case 'error':
      return {
        name: 'heroicons:x-mark',
        color: 'text-red-400',
      };
    case 'info':
      return {
        name: 'heroicons:information-circle',
        color: 'text-blue-400',
      };
    case 'success':
      return {
        name: 'heroicons:check-circle',
        color: 'text-green-400',
      };
    default:
      return {
        name: 'heroicons:check-circle',
        color: 'text-green-400',
      };
  }
});
</script>

<template>
  <div
    class="justify-between pl-2 pr-2 flex gap-x-2 gap-y-2 items-center min-w-80 w-fit h-10 bg-white rounded-[6px] shadow-[#00000040] text-neutral-900 border-[1px] border-neutral-200 shadow-[0px_0px_30px_-10px] dark:bg-neutral-900 dark:shadow-neutral-950 dark:text-zinc-50 dark:border-neutral-800"
  >
    <div class="flex items-center gap-x-1 gap-y-1">
      <Icon :name="iconData?.name" size="17" :class="iconData.color" />
      <span class="font-medium text-[13px]">{{
        props?.message || 'Message'
      }}</span>
    </div>
    <span
      class="min-w-5 min-h-5 flex justify-center items-center cursor-pointer rounded-[4px] hover:bg-neutral-100 dark:hover:bg-neutral-800"
      @click="emit('close')"
      ><Icon name="heroicons:x-mark" size="15"
    /></span>
  </div>
</template>
