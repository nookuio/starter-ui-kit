<script setup lang="ts">
interface Props {
  disabled?: boolean;
  icon?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password';
  value?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
});

const bindValue = defineModel<string>('bindValue');

const emit = defineEmits<{ blur: [value: string]; input: [value: string] }>();

const passwordVisible = ref<boolean>(false);

const computedBindedValue = computed<any>({
  get: () => {
    return bindValue?.value !== undefined ? bindValue?.value : props.value;
  },
  set: (value) => {
    if (bindValue.value !== undefined) {
      bindValue.value = value;
    } else {
      emit('input', value);
    }
  },
});

const inputType = computed(() => {
  if (props?.type === 'password')
    return passwordVisible?.value ? 'text' : 'password';

  return props?.type;
});
</script>

<template>
  <div
    class="text-sm pl-2 pr-1.5 border-[1px] border-neutral-200 rounded-[6px] outline-none min-h-8 bg-zinc-50 border-solid text-neutral-900 flex items-center gap-x-1 placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-[0.7] disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-100 dark:border-solid dark:border-[1px] dark:border-neutral-800 focus-within:border-neutral-400 dark:focus-within:border-neutral-700"
  >
    <Icon
      class="text-neutral-400"
      v-if="props?.icon"
      :name="props?.icon"
      size="15"
    />
    <input
      class="text-sm outline-none text-neutral-900 w-full bg-transparent placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-[0.7] disabled:pointer-events-none dark:text-neutral-100"
      :type="inputType"
      :placeholder="props.placeholder"
      v-model="computedBindedValue"
      :class="props.disabled ? 'opacity-70 pointer-events-none' : ''"
      spellcheck="false"
      @blur="emit('blur', $event?.target?.value)"
    />
    <span
      class="flex items-center justify-center p-1 rounded-[4px] cursor-pointer text-neutral-400 dark:hover:bg-neutral-800"
      v-if="props?.type === 'password' && computedBindedValue"
      @click="passwordVisible = !passwordVisible"
      ><Icon
        :name="passwordVisible ? 'heroicons:eye-slash' : 'heroicons:eye'"
        size="13"
    /></span>
  </div>
</template>
