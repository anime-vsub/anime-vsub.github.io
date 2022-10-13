import index from "/src/data/index.yaml"

export const ssr = false

export async function load() {
	const allVersions = (await fetch(
	'https://api.github.com/repos/Anime-Vsub/animevsub-app/releases'
).then((res) => res.json())
	)

	const latest = allVersions.find(item => !item.prerelease ) ?? allVersions[0]

	Object.assign(index.meta.download, {
		versionName: `Tải xuống AnimeVsub (${latest.tag_name})`,
		file: latest.assets[0].browser_download_url
	})

	return index
}