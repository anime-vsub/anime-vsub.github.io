<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { browser } from '$app/environment';

	const navbars = [
		{ name: 'Features', href: '/' },
		{ name: 'Changelogs', href: '/changelog' },
		{ name: 'Need Help?', href: '/help' },
		{ name: 'FAQ', href: '/faq' }
	];

	let opening = false;

	let bounced = false;
	if (browser)
		document.addEventListener('scroll', () => {
			bounced = window.pageYOffset > 40;
		});

	let gtSm = browser && window.innerWidth > 768;
	function onResize() {
		let gtSm = window.innerWidth > 768;
	}
	if (browser) window.addEventListener('resize', onResize);
</script>

<header
	class="header fixed top-0 left-0 py-[25px] px-4 transition-all duration-500 ease-in-out w-full"
	class:bouced={bounced || (opening && !gtSm)}
>
	<div class="w-response mx-auto flex flex-wrap items-center justify-between">
		<a href="/">
			<img src="/src/lib/images/animevsub.svg" alt="AnimeVsub" class="w-14 h-14" />
		</a>

		<button
			class="btn-hammer text-[50px] text-white md:hidden"
			class:opening
			on:click={() => (opening = !opening)}
		>
			<svg viewBox="0 0 800 600">
				<path
					d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
					id="top"
				/>
				<path d="M300,320 L540,320" id="middle" />
				<path
					d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
					id="bottom"
					transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
				/>
			</svg>
		</button>

		{#if opening || gtSm}
			<ul
				transition:slide={{ delay: 0, duration: 500, easing: cubicInOut }}
				class="text-main md:text-white w-full md:w-auto"
			>
				{#each navbars as item}
					<li
						class="text-[16px] md:inline-block md:px-4 py-4 font-weight-bold md:py-3 md:font-weight-medium last:pr-0
          nav-item
"
					>
						<a href={item.href}>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</header>

<style lang="scss">
	.btn-hammer {
		svg {
			width: 1.5em;
			// width: 200px;
			// height: 150px;
			cursor: pointer;
			transform: translate3d(0, 0, 0);

			path {
				fill: none;
				transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
					stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
				stroke-width: 40px;
				stroke-linecap: round;
				stroke: currentColor; //#a06ba5;
				stroke-dashoffset: 0px;
			}
			path#top,
			path#bottom {
				stroke-dasharray: 240px 950px;
			}
			path#middle {
				stroke-dasharray: 240px 240px;
			}
		}
		&.opening {
			path#top,
			path#bottom {
				stroke-dashoffset: -650px;
				stroke-dashoffset: -650px;
			}
			path#middle {
				stroke-dashoffset: -115px;
				stroke-dasharray: 1px 220px;
			}
		}
	}

	.header.bouced {
		background-color: #000;
		padding-top: 15px;
		padding-bottom: 15px;
	}

	.nav-item {
		@apply relative;
		&:hover {
			&:before {
				width: 35px;
			}
		}
		&:before {
			content: '';
			@apply h-[2px] w-0 bg-white absolute bottom-0 transition-width duration-500 ease-in-out;
		}
	}
</style>
