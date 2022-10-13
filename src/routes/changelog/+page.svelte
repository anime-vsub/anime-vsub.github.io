<script lang="ts">
  export let data;

  import Icon from '@iconify/svelte';
import {filesize} from "filesize";
import dayjs from "/src/logic/dayjs"
import { _ } from "svelte-i18n"

  const { name, changelogs } = data;

</script>


<svelte:head>
	<title>{data.head.title}</title>
	<meta property="og:title" content="{data.head.title}">
	<meta property="og:description" content="{data.head.description}">
</svelte:head>


<main class="w-response mx-4 sm:mx-auto mb-5">
  <h1
    class="mb-20 mt-30 font-weight-bold text-[3.5rem] md:text-[52px] text-main text-center"
  >
    AnimeVsub
    <span class="text-white">{$_("changelogs")}</span>
  </h1>
	
  {#each (changelogs) as changelog}
    <div class="log-item">
      <a target="_blank" href={changelog.file} class="log-item-title w-full  flex items-center justify-between sm:justify-start">
			<span>
        {name} APK <span class="log-item-tag mr-2">({changelog.tag_name})</span>
</span>

<span class="leading-normal py-[2px] px-[7px] text-[12px] font-weight-medium rounded-[35px] border border-[currentColor]" class:text-[#3fb950]="{!changelog.prerelease}" class:text-[#d29922]="{changelog.prerelease}">{changelog.prerelease ? "Pre-release" : "Release"}</span>
      </a>

			<div class="text-[14px] flex items-center font-weight-medium my-4">
				<img src="{changelog.author.avatar_url}" class="w-[25px] h-[25px] rounded-1/2 mr-2" />
				<div>
					{changelog.author.login}
					<span class="font-weight-normal"> {$_("release_at")} {dayjs().to(changelog.published_at)}</span>
				</div>
			</div>

      <div class="mb-3 ml-3">{$_("Changelog")}:</div>

      <div class="whitespace-pre-wrap mb-4 ml-3">{@html changelog.body}</div>

			<ul class="border border-gray-500 rounded-xl">
				{#each changelog.assets as asset}
				<li class="">
				<a target="_blank" href="{asset.browser_download_url}" class="whitespace-pre-wrap flex items-center py-2 px-3 border-b last:border-0 border-gray-500 transition-[background-color] duration-300 ease-in-out hover:bg-[rgba(200,200,200,0.1)] overflow-hidden">
					{#if asset.content_type === "application/vnd.android.package-archive"}
					<Icon icon="logos:android-icon" width="20" height="20" />
					{:else if asset.name.endsWith(".ipa")}
					<Icon icon="logos:apple-app-store" width="20" height="20" />
					{/if}

<div class="flex-1 flex items-center justify-between">
<div class="ml-2 ">
<span class="text-blue-500 font-weight-medium">
					{asset.name}
</span>

					<span class="text-[12px] block mt-1 md:ml-10 md:inline-block md:text-[14px] md:mt-0">
{filesize(asset.size, {base: 2, standard: "jedec"})}
</span>
</div>

<span class="text-[14px]">

{dayjs().to(asset.updated_at)}
</span>
</div>
</a>
				</li>
				{/each}
			</ul>
    </div>
  {/each}
</main>

<style lang="scss">
  .log-item {
    &-title {
      @apply text-[1.5rem] sm:text-[32px] font-weight-bold text-white mb-3;
    }
    &-tag {
      @apply text-[18px] text-[#c10023];
    }
  }
</style>
