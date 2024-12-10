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
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
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

const ariaId = useId();
</script>

<template>
  <VTooltip
    :distance="distance"
    :placement="props.placement"
    :disabled="props.disabled"
    :delay="{ show: props.delay, hide: 100 }"
    :aria-id="ariaId"
    ><slot><span class="cursor-default">Hover me</span></slot>
    <template #popper
      ><slot name="tooltip">{{ props.title }}</slot></template
    ></VTooltip
  >
</template>

<style>
.v-popper--theme-tooltip .v-popper__inner {
  @apply text-xs bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 shadow min-h-6 h-fit max-w-72 py-1 px-2.5 flex items-center justify-center rounded !important;
}

.v-popper--theme-tooltip .v-popper__arrow-outer {
  @apply border-neutral-300 dark:border-neutral-700;
}

.v-popper--theme-tooltip .v-popper__arrow-inner {
  @apply visible border-white dark:border-neutral-900;
}
</style>
