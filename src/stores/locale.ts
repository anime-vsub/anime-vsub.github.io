import { writable } from 'svelte/store';
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

export const locale = writable(getLocaleFromNavigator()?.slice(0, 2) ?? "en")