<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<main class="w-response mx-4 sm:mx-auto">
	<h1 class="mb-20 mt-30 font-weight-bold text-[3.5rem] md:text-[52px] text-white text-center">
		Frequently Asked Questions
	</h1>

	<ul class="bg-[#161616] rounded-sm border border-[rgba(0,0,0,.125)]">
		<li>
			<div class="collapse flex items-center">
				<Icon icon="akar-icons:circle-plus" width="25" height="25" class="mr-2" />
				<!-- <Icon icon="akar-icons:circle-minus" width="25" height="25"/> -->
				What is PikaShow App?
			</div>
			<div class="detail">
				PikaShow is an all-in-one entertainment platform that will give access to stream or download
				all the latest movies, web series and watch live tv channels for free of charge.
			</div>
		</li>
	</ul>
</main>

<style lang="scss">
	.collapse {
		@apply text-[20px] font-weight-medium text-[#F7ED4A] py-3 pl-[50px] pr-[20px] my-[14px] mx-6;
	}
	.detail {
		@apply py-3 pl-[50px] pr-[20px] my-[14px] mx-6;
	}
</style>
