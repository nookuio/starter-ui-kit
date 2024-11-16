<script setup lang="ts">
interface Props {
  disabled?: boolean;
  options: any[];
  placeholder?: string;
  value?: any;
}

const props = withDefaults(defineProps<Props>(), {
  options: [
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
  ],
  placeholder: 'Select',
});

const bindValue = defineModel<any>('bindValue');

const emit = defineEmits<{ select: [any] }>();

const inputRef = ref();

const ariaId = useId();

const selectedOption = computed(() => {
  const value =
    bindValue?.value !== undefined ? bindValue?.value : props?.value;
  return props?.options?.find(
    (option) => option?.value === value || option === value,
  );
});

function handleSelect(option: any) {
  if (bindValue?.value !== undefined) {
    bindValue.value = option?.value || option;
  } else {
    emit('select', option?.value || option);
  }
}
</script>

<template>
  <div
    :class="
      props.disabled ? 'opacity-70 pointer-events-none cursor-not-allowed' : ''
    "
  >
    <VDropdown :distance="6" placement="bottom" :aria-id="ariaId"
      ><div
        class="text-sm pl-2 pr-2 border-[1px] border-neutral-200 rounded-[6px] outline-none min-h-8 bg-zinc-50 border-solid text-neutral-900 flex items-center cursor-pointer w-full justify-between gap-x-2 dark:bg-neutral-900 dark:text-neutral-100 dark:border-solid dark:border-[1px] dark:border-neutral-800 hover:bg-neutral-100 hover:border-solid hover:border-neutral-300 hover:border-[1px] dark:hover:bg-neutral-800 dark:hover:border-solid dark:hover:border-neutral-700 dark:hover:border-[1px]"
        ref="inputRef"
      >
        <div class="flex gap-x-1 items-center">
          <span class="text-neutral-400" v-if="selectedOption === undefined">{{
            props?.placeholder
          }}</span>
          <div class="flex items-center gap-x-1" v-else>
            <Icon
              class="min-w-3.5 min-h-3.5"
              v-if="selectedOption?.icon"
              :name="selectedOption?.icon"
              size="13"
            />
            <span>{{
              selectedOption?.label || selectedOption?.value || selectedOption
            }}</span>
          </div>
        </div>
        <Icon
          class="min-w-3.5 min-h-3.5 text-neutral-400"
          name="heroicons:chevron-down"
          size="13"
        />
      </div>
      <template #popper
        ><div
          class="flex flex-col gap-y-0.5 text-neutral-700 text-sm p-0.5 max-h-[400px] dark:text-neutral-300 overflow-auto"
          :style="{ width: inputRef?.offsetWidth + 'px' }"
        >
          <div
            class="flex min-h-7 items-center pl-2 pr-2 cursor-pointer rounded-[4px] gap-x-1 justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 group"
            v-for="(option, currentIndex) in props.options"
            :key="
              ['string', 'number'].includes(typeof option)
                ? option
                : option?.label
            "
            v-close-popper
            :class="
              (selectedOption?.value &&
                selectedOption?.value === option?.value) ||
              selectedOption === option
                ? 'bg-neutral-100 dark:bg-neutral-800 active-option'
                : ''
            "
            @click="handleSelect(option)"
          >
            <div class="flex items-center gap-x-1">
              <Icon
                class="min-w-3.5 min-h-3.5"
                v-if="option?.icon"
                :name="option?.icon"
                size="13"
              />
              <span>{{ option?.label || option }}</span>
            </div>
            <Icon
              class="min-w-3.5 min-h-3.5 hidden group-[.active-option]:block"
              name="heroicons:check"
              size="13"
            />
          </div></div></template
    ></VDropdown>
  </div>
</template>

<style>
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
