import { error } from '@sveltejs/kit';

export const ssr = false

export async function load() {
  const changelogs = (await fetch("https://api.github.com/repos/Anime-Vsub/animevsub-app/releases").then(res => res.json()))

  const name = 'PikaShow';

  return { name, changelogs };
}
