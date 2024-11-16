<script setup lang="ts">
const colorMode = useColorMode();

const themeAsNumber = computed({
  get: () => {
    switch (colorMode?.preference) {
      case 'system':
        return 0;
      case 'light':
        return 1;
      case 'dark':
        return 2;
    }
  },
  set: (value) => {
    switch (value) {
      case 0:
        colorMode.preference = 'system';
        break;
      case 1:
        colorMode.preference = 'light';
        break;
      case 2:
        colorMode.preference = 'dark';
        break;
    }
  },
});
</script>

<template>
  <UiDropdown
    :options="[
      { label: 'System', icon: 'heroicons:computer-desktop' },
      { label: 'Light', icon: 'heroicons:sun' },
      { label: 'Dark', icon: 'heroicons:moon' },
    ]"
    :dropdown-width="120"
    :selected="themeAsNumber"
    @select="themeAsNumber = $event"
    ><div
      class="min-w-6 min-h-6 flex justify-center items-center cursor-pointer rounded-[4px] text-neutral-900 w-6 hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:text-zinc-50"
    >
      <ColorScheme
        ><Icon
          :name="
            colorMode?.value === 'dark' ? 'heroicons:moon' : 'heroicons:sun'
          "
          size="15"
      /></ColorScheme></div
  ></UiDropdown>
</template>
