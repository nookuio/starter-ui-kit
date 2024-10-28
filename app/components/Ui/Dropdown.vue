<script setup lang="ts">
interface Props {
  delay?: number;
  disabled?: boolean;
  distance?: number;
  label?: string;
  options: any[];
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
}

const props = withDefaults(defineProps<Props>(), {
  distance: 6,
  label: 'Select',
  options: [
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
    {
      label: 'Option 3',
      value: 3,
    },
  ],
  placement: 'bottom',
});
</script>

<template>
  <VDropdown :distance="props.distance" :placement="props.placement"
    ><slot
      ><div
        class="text-sm pl-2 pr-2 border-[1px] border-neutral-200 rounded-[8px] outline-none min-h-8 bg-white border-solid text-neutral-900 flex items-center cursor-pointer transition-all disabled:cursor-not-allowed disabled:opacity-[0.7] disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-100 dark:border-solid dark:border-[1px] dark:border-neutral-800 hover:bg-neutral-100 hover:border-solid hover:border-neutral-300 hover:border-[1px] dark:hover:bg-neutral-800 dark:hover:border-solid dark:hover:border-neutral-700 dark:hover:border-[1px]"
      >
        <span>{{ props.label }}</span>
      </div></slot
    >
    <template #popper
      ><slot name="dropdown"
        ><div
          class="flex flex-col gap-y-1 text-neutral-700 text-sm p-1 dark:text-neutral-300"
        >
          <div
            class="flex min-h-8 items-center pl-2 pr-2 cursor-pointer rounded-[4px] transition-all hover:bg-neutral-100 dark:hover:bg-neutral-900"
            v-for="(option, currentIndex) in props.options"
            :key="option?.value"
          >
            <span>{{ option?.label }}</span>
          </div>
        </div></slot
      ></template
    ></VDropdown
  >
</template>

<style>
.v-popper--theme-dropdown .v-popper__inner {
  @apply bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700;
}

.v-popper--theme-dropdown .v-popper__arrow-outer {
  visibility: hidden;
}

.v-popper--theme-dropdown .v-popper__arrow-inner {
  visibility: hidden;
}
</style>
