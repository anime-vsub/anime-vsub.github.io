<script lang="ts">
	import { onMount } from 'svelte';
	// import Typed from 'typed.js';
	import Icon from '@iconify/svelte';
	import '../css/section.scss';

	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { browser } from '$app/environment';
	let captionRef;

	if (browser)
		onMount(() => {
			console.log(captionRef);
			return;
			new Typed(captionRef, {
				strings: ['Latest TV Shows'],
				typeSpeed: 80,
				loop: true,
				backDelay: 1100,
				backSpeed: 30
			});
		});

	let showToTop = true;
	if (browser)
		document.addEventListener('scroll', () => {
			showToTop = window.pageYOffset > 300;
		});
</script>

<div class="bg-image" />

<div class="h-[100vh] w-full flex items-center justify-center">
	<div class="w-full w-response text-white">
		<h1 class="text-[4.5rem] font-weight-bold text-center mb-6">
			Anime<span class="text-main px-0">Vsub</span>
		</h1>
		<h3 class="text-[1.5rem] sm:text-[32px] md:text-[3.5rem] text-center mb-2">
			<span bind:this={captionRef} />
		</h3>
	</div>
</div>

<main class="w-response mx-4 sm:mx-auto">
	<div class=" mt-[64px] section">
		<h4 class="title">Download</h4>

		<div class="box">
			<div class="mb-4">
				PikaShow App will give you a chance to enjoy unlimited entertainment easier than on any
				other platform.
			</div>

			<div class="mb-4">Download PikaShow APK from below.</div>

			<button class="btn"> PikaShow APK (v82) </button>
		</div>

		<div class="flex flex-wrap md:flex-nowrap">
			{#each Array(3) as i}
				<div class="card">
					<div class="large-icon">
						<img src="https://pikashows.com/assets/img/pikashow.svg" alt="pika" width="70" />
					</div>

					<div class="card-title">What is PikaShow?</div>

					PikaShow App is a streaming platform for Android! Includes live cricket, TV shows, New
					Movies, Download Videos, and lot more. All in one entertainment application provides
					premium content for free.
				</div>
			{/each}
		</div>
	</div>
	<div class="section">
		<h4 class="title">
			Features
			<p class="subtitle">List of all the exclusive features of PikaShow App.</p>
		</h4>

		{#each Array(3) as item, index}
			<div class="splitter" class:splitter-reverse={index % 2 === 1}>
				<div class="splitter-content">
					<div class="splitter-rank">#{index + 1}</div>
					<div class="splitter-title">Main Features:</div>

					<ul class="list-greek pl-[15px] mb-4">
						{#each ['The PikaShow APK is compatible with any android device including smartphones and tablets. It runs and plays videos smoothly without any lags reported.', 'Features capability of downloading movies and TV shows on your device. You can choose whether a stream or download the video and watch it offline.', 'Supports subtitles for every video. You can enable subtitles while watching. In any case, if subtitles are not available, you will be able to search online for subtitles with the option given in the app.', 'Screen casting option gives you the chance to cast your mobile screen to TV without hesitation.', 'PikaShow App supports Android TV and FireStick too.'] as item}
							<li class="mb-3">{item}</li>
						{/each}
					</ul>
				</div>
				<div class="splitter-images">
					{#each Array(2).fill('https://pikashows.com/assets/img/features_1.webp') as item}
						<img src={item} alt="screen" />
					{/each}
				</div>
			</div>
		{/each}
	</div>

	{#if showToTop}
		<button
			class="w-11 h-11 rounded-1/2 bg-[#F7ED4A] text-black fixed bottom-4 right-4 flex items-center justify-center font-weight-bold"
			transition:fade={{ delay: 0, duration: 333, easing: cubicInOut }}
			on:click={() => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}}
		>
			<Icon icon="fluent:chevron-up-24-regular" width="25" height="25" />
		</button>
	{/if}
</main>

<style lang="scss">
	@import '../css/section.scss';

	.bg-image {
		@apply absolute w-full h-[100vh];

		// background: {
		background-image: url('https://pikashows.com/assets/img/intro-bg.webp');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
		// }

		z-index: -1;

		@media (max-width: 1024px) {
			background-attachment: scroll;
		}

		&:before {
			content: '';
			@apply bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 h-[100vh] w-full opacity-[0.9];
		}
	}

	.btn {
		@apply mx-2 my-2 rounded-[3px] text-black font-weight-medium px-6 py-3 decoration-none bg-[#F7ED4A];
	}
</style>
