<script setup lang="ts">
interface Props {
  disabled?: boolean;
  options: (
    | { label: string; value: string | number | boolean; icon?: string }
    | string
    | number
  )[];
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
}

const props = withDefaults(defineProps<Props>(), {
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
  ],
  placeholder: 'Select',
  size: 'medium',
});

const value = defineModel<any>('value');

const inputRef = ref();

const ariaId = useId();

const styles = computed(() => {
  switch (props.size) {
    case 'small': {
      return { minHeight: '25px', height: '25px', fontSize: '12px' };
    }

    case 'medium': {
      return { minHeight: '32px', height: '32px', fontSize: '14px' };
    }

    case 'large': {
      return { minHeight: '40px', height: '40px', fontSize: '16px' };
    }
  }
});

const selectedOption = computed(() => {
  const index = props?.options?.findIndex(
    (option) => option?.value === value?.value || option === value?.value,
  );
  const option = props?.options?.[index];
  const optionValue = option?.label ?? option?.value ?? option;

  return { index: index, value: optionValue, icon: option?.icon };

  return props?.options?.find(
    (option) => option?.value === value?.value || option === value?.value,
  );
});

function handleSelect(index: number) {
  const option = props?.options[index];

  value.value = option?.value ?? option;
}
</script>

<template>
  <UiDropdown
    placement="bottom"
    :dropdown-width="inputRef?.offsetWidth"
    :distance="2"
    trigger="click"
    :disabled="props?.disabled"
    :selected="selectedOption?.index"
    :options="props?.options"
    :size="props?.size"
    @select="handleSelect($event)"
    ><div
      class="text-sm pl-2 pr-2 border border-neutral-200 rounded-md outline-none bg-zinc-50 border-solid text-neutral-900 flex items-center cursor-pointer w-full justify-between gap-x-2 dark:bg-neutral-900 dark:text-neutral-100 dark:border-solid dark:border dark:border-neutral-800 hover:bg-neutral-100 hover:border-solid hover:border-neutral-300 hover:border dark:hover:bg-neutral-800 dark:hover:border-solid dark:hover:border-neutral-700 dark:hover:border"
      ref="inputRef"
      :class="
        props?.disabled
          ? 'opacity-70 pointer-events-none cursor-not-allowed'
          : ''
      "
      :style="styles"
    >
      <div class="flex gap-x-1 items-center">
        <span
          class="text-neutral-400"
          v-if="selectedOption?.value === undefined"
          >{{ props?.placeholder }}</span
        >
        <div class="flex items-center gap-x-1" v-else>
          <Icon
            class="min-w-[13px] min-h-[13px]"
            v-if="selectedOption?.icon"
            :name="selectedOption?.icon"
            size="13"
          /><span>{{ selectedOption?.value }}</span>
        </div>
      </div>
      <Icon
        class="min-w-3.5 min-h-3.5 text-neutral-400"
        name="heroicons:chevron-up-down"
        size="13"
      /></div
  ></UiDropdown>
</template>

<style>
 @reference "~/assets/css/main.css";
.v-popper--theme-dropdown .v-popper__inner {
  @apply bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800;
}

.v-popper--theme-dropdown .v-popper__arrow-outer {
  visibility: hidden;
}

.v-popper--theme-dropdown .v-popper__arrow-inner {
  visibility: hidden;
}
</style>
