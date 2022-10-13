<script lang="ts">
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let tabActive = 0

	const faqs = [
		{
			name: "What is PikaShow App?",
			content: "PikaShow is an all-in-one entertainment platform that will give access to stream or download all the latest movies, web series and watch live tv channels for free of charge."
		},
		{
			name: "Is it available on Google Play Store?",
			content: "Google won't allow this kind of apps to be on Play Store. Don't look for PikaShow on the Google Play Store.\n\nYou can only download and install PikaShow APK from our website."
		},
		{
			name: "Is it safe to download and use?",
			content: "Yes, PikaShow APK is 100% safe to use and, data security is the main priority of the dev team."
		},
		{
			name: "Is it free to use?",
			content: "Yes, it is a free streaming app where you can find all the premium content for free to watch without any subscription or registration."
		},
		{
			name: "Does it require a rooted Android device?",
			content: "No, you don't need to have a rooted android mobile to install and use the PikaShow app. It will work on any android device which has Android 4.0 or above version."
		},
		{
			name: "Can I watch PikaShow videos on TV?",
			content: "Yes, you can watch any movie, tv channel on your TV using the PikaShow. If you have an Android or FireStick TV, you can install PikaShow APK on your TV. Read the full guide here\n\nIf you don't want to install PikaShow on your TV, you can easily screencast your mobile to the TV."
		}
	]
</script>

<main class="w-response mx-4 sm:mx-auto">
	<h1 class="mb-20 mt-30 font-weight-bold text-[3.5rem] md:text-[52px] text-white text-center">
		Frequently Asked Questions
	</h1>

	<ul class="bg-[#161616] rounded-sm border border-[rgba(0,0,0,.125)] mb-8">
		{#each faqs as faq, index}
		<li>
			<div class="collapse flex items-center" on:click="{() => {
				if (tabActive === index) {
					tabActive = null
				} else {
					tabActive = index
				}
			}}">
				<Icon icon="akar-icons:circle-{tabActive === index ? 'minus' : 'plus'}" width="25" height="25" class="mr-2" />
				<!-- <Icon icon="akar-icons:circle-minus" width="25" height="25"/> -->
				<div class="min-w-0 flex-1">{faq.name}</div>
			</div>
			{#if tabActive === index}
			<div  	transition:slide={{ delay: 0, duration: 500, easing: cubicInOut }} class="detail">{faq.content}</div>
			{/if}
		</li>
		{/each}
	</ul>
</main>

<style lang="scss">
	.collapse {
		@apply text-[20px] font-weight-medium text-[#F7ED4A] py-3 pl-[50px] pr-[20px] my-[14px] mx-6;
	}
	.detail {
		@apply py-3 pl-[50px] pr-[20px] mx-6;
		white-space: pre-wrap;
	}
</style>
