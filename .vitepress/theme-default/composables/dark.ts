import { useDark } from '@vueuse/core';

export const isDark = useDark({
  storageKey: 'admin-color-scheme',
  valueLight: 'light',
});
