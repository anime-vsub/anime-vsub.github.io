import { error } from '@sveltejs/kit';

export const ssr = false;

export async function load() {
  const changelogs = await fetch(
    'https://api.github.com/repos/Anime-Vsub/animevsub-app/releases'
  ).then((res) => res.json());

  const name = 'PikaShow';

  const head = {
    title: 'PikaShow - Download PikaShow APK for Android',
    description:
      'PikaShow App will give you a chance to enjoy unlimited entertainment easier than on any other platform'
  };

  return {
    head,
    name,
    changelogs
  };
}
