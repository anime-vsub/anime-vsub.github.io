import { error } from '@sveltejs/kit';

export const ssr = false;

export async function load() {
  const changelogs = await fetch(
    'https://api.github.com/repos/Anime-Vsub/animevsub-app/releases'
  ).then((res) => res.json()).then(items => items.filter(item => !item.tag_name.startsWith("pwa-")));

  const name = 'AnimeVsub';

  const head = {
    title: 'Nhật ký thay đổi - AnimeVsub',
    description: 'Nhật ký thay đổi'
  };

  return {
    head,
    name,
    changelogs
  };
}
