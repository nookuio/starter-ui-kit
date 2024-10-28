interface Nodes {
  item: true;
}

export const useNotifications = defineStore('notifications', () => {
  const variable = ref<number>(0);

  let items: any[] = [];

  const data = ref<TsTypeNode>();

  const double = computed(() => {
    return variable.value * 4;
  });

  function addNow() {
    variable.value += 100;

    return variable;
  }

  return { variable, items, data, double, addNow };
});
