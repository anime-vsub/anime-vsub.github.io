<main class="w-response mx-4 sm:mx-auto">
	<h1 class="mb-20 mt-30 font-weight-bold text-[3.5rem] md:text-[52px] text-main text-center">
		AnimeVsub
		<span class="text-white">Changelogs</span>
	</h1>

	<div class="log-item">
		<div class="log-item-title">PikaShow APK <span class="log-item-tag">(v65)</span></div>

		<div class="mb-3 ml-5">Changelog:</div>

		<ul class="list-greek pl-[15px] mb-4 ml-8">
			{#each Array(6).fill('Added network speed while playing a video') as item}
				<li class="mb-3">{item}</li>
			{/each}
		</ul>
	</div>
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
