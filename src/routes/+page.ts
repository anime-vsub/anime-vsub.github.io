import index from '/src/data/index.yaml';

import { browser } from '$app/environment';

export async function load() {
  if (browser) {
    const allVersions = await fetch(
      'https://api.github.com/repos/Anime-Vsub/animevsub-app/releases'
    ).then((res) => res.json());

    const latest =
      allVersions.find((item) => !item.prerelease && !item.tag_name.startsWith("pwa-")) ?? allVersions[0];

    Object.assign(index.meta.download, {
      versionName: `Tải xuống AnimeVsub (${latest.tag_name})`,
      file: latest.assets?.[0]?.browser_download_url ?? 'unknown'
    });
  }

  return index;
}
