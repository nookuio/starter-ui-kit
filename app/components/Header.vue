<script setup lang="ts">
let navItems = [
  {
    label: 'Home',
    slug: '/',
  },
  {
    label: 'Features',
    slug: '/features',
  },
  {
    label: 'Pricing',
    slug: '/pricing',
  },
  {
    label: 'Docs',
    slug: '/docs',
  },
];
</script>

<template>
  <div class="flex min-h-[60px] fixed top-0 p-2 left-0 right-0 justify-center">
    <div
      class="flex w-full max-w-[1200px] rounded-[8px] border-[1px] border-neutral-200 justify-between pl-2 pr-2 text-sm text-neutral-900 backdrop-blur-[16px] dark:text-white dark:border-neutral-800"
    >
      <div class="flex items-center gap-x-1 w-[220px]" id="header-left">
        <Icon name="heroicons:star" size="13" /> logo
      </div>
      <div class="flex" id="header-center">
        <nav class="flex items-center">
          <ul class="flex gap-x-7">
            <NuxtLink
              v-for="(item, i) in navItems"
              :to="item?.slug"
              :external="item?.external"
              ><li>{{ item?.label }}</li></NuxtLink
            >
          </ul>
        </nav>
      </div>
      <div
        class="flex items-center gap-x-2 w-[220px] justify-end"
        id="header-right"
      >
        <ThemeChanger />
        <UiButton type="outline" size="small" label="Sign in" />
        <UiButton size="small" type="primary" label="Get Started" />
      </div>
    </div>
  </div>
</template>
