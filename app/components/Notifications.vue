<script setup lang="ts">
const notifications = useNotifications();

function handleClear(id: string) {
  notifications?.clear(id);
}
</script>

<template>
  <TransitionGroup
    class="fixed flex z-[20] gap-x-2 gap-y-2 text-xs items-end top-2 right-2 flex-col"
    tag="div"
    enter-active-class="transition-all duration-300 ease"
    leave-active-class="transition-all duration-300 ease"
    enter-from-class="opacity-0 translate-x-20"
    leave-to-class="opacity-0 translate-x-20"
    ><UiNotification
      v-for="(notification, i) in notifications?.notifications"
      :key="notification?.id"
      :type="notification?.type"
      :message="notification?.message"
      @close="handleClear(notification?.id)"
  /></TransitionGroup>
</template>
