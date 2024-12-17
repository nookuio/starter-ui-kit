export const useNotifications = defineStore('notifications', () => {
  const notifications = ref<Notification[]>([]);

  function add(type: 'error' | 'alert' | 'info' | 'success', message: string) {
    const n = { id: generateId(), type: type, message: message };

    notifications.value.push(n);

    setTimeout(() => clear(n.id as string), 4000);
  }

  function clear(id: string) {
    if (!id) {
      return;
    }

    const index = notifications.value.findIndex((n) => n.id === id);

    if (index !== -1) {
      notifications.value.splice(index, 1);
    }
  }

  return { notifications, add, clear };
});
