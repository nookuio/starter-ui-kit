<script setup lang="ts">
interface Props {
  delay?: number;
  disabled?: boolean;
  distance?: number;
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
  title?: any;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 300,
  disabled: false,
  distance: 10,
  placement: 'bottom',
});
</script>

<template>
  <ClientOnly
    ><VTooltip
      :distance="distance"
      :placement="props.placement"
      :disabled="props.disabled"
      :delay="{ show: props.delay, hide: 100 }"
      ><slot><span class="cursor-default">Hover me</span></slot>
      <template #popper
        ><slot name="tooltip">{{ props.title }}</slot></template
      ></VTooltip
    ></ClientOnly
  >
</template>

<style>
.v-popper--theme-tooltip .v-popper__inner {
  @apply text-xs bg-neutral-900 border border-neutral-700 text-neutral-100 shadow-md min-h-6 h-fit max-w-72 py-1 px-2.5 flex items-center justify-center rounded !important;
}

.v-popper--theme-tooltip .v-popper__arrow-outer {
  @apply border-neutral-700 !important;
}

.v-popper--theme-tooltip .v-popper__arrow-inner {
  @apply visible border-neutral-900 !important;
}
</style>
