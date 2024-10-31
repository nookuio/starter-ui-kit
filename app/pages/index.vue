<script setup lang="ts">
import { useStorage } from '@vueuse/core';

const inputValue = ref<string>('');

const selected = ref<number>(40);

const sidebarVisible = ref(false);

const theme = useStorage('theme', 'light');

const notifications = useNotifications();

const themeAsCount = computed({
  get: () => (theme?.value === 'dark' ? 1 : 0),
  set: (value) => (theme.value = value === 1 ? 'dark' : 'light'),
});

function toggleTheme(
  param: any = 'fsdfs',
  param1: BaseTsPropertyNode,
  param2: string,
) {
  if (theme?.value === 'light') {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }

  updateDocumentTheme();
}

function updateDocumentTheme() {
  if (theme?.value === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
}
</script>

<template>
  <Header />
  <div
    class="flex flex-col items-center justify-center bg-white text-neutral-900 p-2.5 gap-y-2.5 h-screen dark:bg-neutral-950 dark:text-zinc-50"
  >
    <h1 class="text-6xl font-bold text-center">Starter Kit</h1>
    <div class="flex p-2.5 text-white flex-col">
      <div class="flex gap-x-2">
        <UiButton class="w-fit" label="Primary Button" />
        <UiButton
          class="w-fit min-width max-width"
          label="Secondary Button"
          type="secondary"
          @click="console.log($event)"
        />
        <UiButton class="w-fit" label="Outline Button" type="outline" />
      </div>
    </div>
    <Sidemenu v-model:open="sidebarVisible" position="left" />
    <div class="flex gap-x-2.5 items-center">
      <div class="relative">
        <span
          class="h-4 flex justify-center items-center w-4 rounded-[4px] absolute right-2 top-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800"
          @click="inputValue = ''"
          ><Icon name="heroicons:x-mark" size="13"
        /></span>
        <UiInput
          class="w-[500px]"
          placeholder="Search..."
          v-model:bind-value="inputValue"
          type="text"
          icon="heroicons:magnifying-glass"
        />
      </div>
      <UiTooltip title="Hello, this is a tooltip" placement="left"
        ><UiButton
          class="w-[200px]"
          label="Get Started"
          left-icon="heroicons:bolt"
          type="outline"
          @click="
            notifications?.addNow();
            sidebarVisible = !sidebarVisible;
          "
      /></UiTooltip>
      <UiTooltip :title="`Selected Index ${selected}`" placement="right"
        ><h2 class="text-3xl font-bold">
          {{ selected }} {{ themeAsCount }}
        </h2></UiTooltip
      >
    </div>
    <UiSliderInput class="w-1/2" v-model:model-value="selected" />
    <UiTabs
      class="w-[700px]"
      v-model:selected="themeAsCount"
      :options="[
        {
          label: 'Light',
          icon: 'heroicons:sun',
        },
        {
          label: 'Dark',
          icon: 'heroicons:moon',
        },
      ]"
      @select="
        console.log($event);
        updateDocumentTheme();
      "
    />
    <UiDropdown
      label="Users Second"
      :options="[
        {
          label: 'Text',
          value: 'text',
        },
        {
          label: 'Number',
          value: 'number',
        },
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'Password',
          value: 'password',
        },
        {
          label: 'Check box',
          value: 'checkbox',
        },
        {
          label: 'Date',
          value: 'date',
        },
        {
          label: 'Time',
          value: 'time',
        },
        {
          label: 'Phone',
          value: 'tel',
        },
        {
          label: 'File',
          value: 'file',
        },
      ]"
      placement="left-start"
    />
    <UiCheckbox label="Accpet terms and conditons" />
  </div>
</template>
