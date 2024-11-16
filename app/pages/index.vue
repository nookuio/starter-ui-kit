<script setup lang="ts">
import { useStorage } from '@vueuse/core';

// State management for component demos

const modalVisible = ref(false);

const sidebarVisible = ref(false);

const inputValue = ref('');

const sliderValue = ref(50);

const toggleValue = ref(false);

const selectedTab = ref(0);

const selectedDropdown = ref('option1');

let dropdownOptions = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
];

const theme = useStorage('theme', 'light');

const notifications = useNotifications();

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';

  updateDocumentTheme();
}

function updateDocumentTheme() {
  document.documentElement.classList.toggle('dark', theme.value === 'dark');
}

function showNotification() {
  notifications?.add('success', 'This is a sample notification');
}
</script>

<template>
  <div class="min-h-screen bg-white p-8 dark:bg-neutral-950">
    <div class="ml-auto mr-auto mb-8 max-w-7xl">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-neutral-900 dark:text-white">
          UI Components
        </h1>
        <ThemeChanger />
      </div>
    </div>
    <div class="ml-auto mr-auto grid gap-x-8 gap-y-8 max-w-7xl">
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-neutral-900 mb-4 dark:text-white">
          Buttons
        </h2>
        <div class="grid gap-x-4 gap-y-4 grid-cols-4">
          <UiButton label="Primary Button" />
          <UiButton label="Secondary Button" type="secondary" />
          <UiButton label="Outline Button" type="outline" />
          <UiButton
            label="With Icon"
            left-icon="heroicons:bolt"
            type="primary"
          />
        </div>
      </section>
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-neutral-900 mb-4 dark:text-white">
          Inputs
        </h2>
        <div class="grid gap-x-4 gap-y-4 grid-cols-2">
          <UiInput
            v-model:bind-value="inputValue"
            placeholder="Regular Input"
            icon="heroicons:magnifying-glass"
          />
          <UiMultilineInput
            v-model:bind-value="inputValue"
            placeholder="Multiline Input"
          />
        </div>
      </section>
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-neutral-900 mb-4 dark:text-white">
          Interactive Components
        </h2>
        <div class="grid gap-x-4 gap-y-4 grid-cols-3">
          <div class="space-y-4">
            <UiSliderInput v-model:model-value="sliderValue" />
            <UiToggle v-model:bind-value="toggleValue" />
          </div>
          <UiSelect
            :options="dropdownOptions"
            v-model:bind-value="selectedDropdown"
          />
          <UiDropdown class="w-fit" :options="dropdownOptions" />
        </div>
      </section>
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-neutral-900 mb-4 dark:text-white">
          Modals & Overlays
        </h2>
        <div class="flex gap-x-4 gap-y-4">
          <UiButton label="Open Modal" @click="modalVisible = true" />
          <UiButton label="Open Sidebar" @click="sidebarVisible = true" />
          <UiButton label="Show Notification" @click="showNotification" />
        </div>
      </section>
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-neutral-900 mb-4 dark:text-white">
          Other Components
        </h2>
        <div class="grid gap-x-4 gap-y-4 grid-cols-2">
          <UiTabs
            v-model:selected="selectedTab"
            :options="[
              { label: 'Tab 1', icon: 'heroicons:home' },
              { label: 'Tab 2', icon: 'heroicons:user' },
              { label: 'Tab 3', icon: 'heroicons:cog' },
            ]"
          />
          <UiFileUploader class="h-32" />
        </div>
      </section>
    </div>
    <BaseModal v-model:open="modalVisible" title="Sample Modal"
      ><div class="p-4 flex grow-[1]">
        <p>This is a sample modal content</p>
      </div></BaseModal
    >
    <BaseSlideOver v-model:open="sidebarVisible"
      ><div class="p-4 flex flex-col grow-[1]">
        <p>This is a sample sidebar content</p>
      </div></BaseSlideOver
    >
  </div>
</template>
