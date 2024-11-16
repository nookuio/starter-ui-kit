<template>
  <UiDropdown
    :options="[
      { label: 'System', icon: 'heroicons:computer-desktop' },
      { label: 'Light', icon: 'heroicons:sun' },
      { label: 'Dark', icon: 'heroicons:moon' },
    ]"
    :dropdown-width="120"
    ><span
      class="min-w-5 min-h-5 flex justify-center items-center cursor-pointer rounded-[4px] text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:text-zinc-50"
      ><Icon name="heroicons:sun" size="15" /></span
  ></UiDropdown>
</template>
