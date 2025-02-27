<script setup lang="ts">
interface Props {
  fileTypes?: string[];
  maxSize?: number;
  multiple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  fileTypes: [],
  multiple: false,
});

const emit = defineEmits<{ update: [files: File[]] }>();

const bindValue = defineModel<File[]>('bindValue', { default: () => [] })

const isDragging = ref(false);

const fileInput = ref<HTMLInputElement | null>(null);

const acceptedFileTypes = computed(() => {
  return props.fileTypes?.length > 0 ? props.fileTypes.join(',') : '*';
});

function formatFileSize(size: number) {
  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
}

function handleFiles(event: Event) {
  const files = (event.target as HTMLInputElement).files;

  if (files) {
    bindValue.value = props.multiple ? Array.from(files) : [files[0]];

    emit('update', bindValue.value);
  }
}

function triggerFileSelect() {
  fileInput.value?.click();
}

function handleDrop(event: DragEvent) {
  const files = event.dataTransfer?.files;

  if (files) {
    bindValue.value = props.multiple ? Array.from(files) : [files[0]];

    emit('update', bindValue.value);
  }

  isDragging.value = false;
}
</script>

<template>
  <div
    class="flex flex-col items-center p-6 border-[1px] rounded-[8px] text-neutral-900 border-neutral-200 bg-zinc-50 dark:text-zinc-50 dark:border-neutral-800 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 file-uploader"
    :class="isDragging ? 'dropping' : ''"
    @dragover.prevent="isDragging = true"
    @dragleave.prevent="isDragging = false"
    @drop.prevent="handleDrop"
    @click="triggerFileSelect()"
  >
    <input
      class="hidden"
      ref="fileInput"
      type="file"
      :accept="acceptedFileTypes"
      :multiple="props.multiple"
      @change="handleFiles"
    />
    <div class="flex flex-col items-center">
      <Icon name="carbon:cloud-upload" size="15" />
      <p class="text-center text-sm">Drag & Drop to Upload</p>
      <p class="text-center text-xs text-neutral-400 dark:text-neutral-400">
        or click to browse
      </p>
    </div>
    <ul
      class="mt-4 w-full text-sm text-neutral-600 dark:text-neutral-300"
      v-if="bindValue?.length > 0"
    >
      <li
        class="flex justify-between border-b-[1px] pt-1 pb-1 border-neutral-200 dark:border-neutral-800 last:border-b-0"
        v-for="(file, index) in bindValue"
        :key="index"
      >
        <span
          >{{ file.name }}
          (
          {{ formatFileSize(file.size) }}
          )</span
        >
        <span
          class="text-red-500"
          v-if="props.maxSize && file.size > props.maxSize * 1024"
          >File too large</span
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
 @reference "~/assets/css/main.css";

.dropping {
  @apply border-blue-500! dark:border-blue-500!;
}
</style>
