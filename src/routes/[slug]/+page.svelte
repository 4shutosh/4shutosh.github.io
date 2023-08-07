<script>
	import formatDateText from "../../utils/formatDate.js";

	export let data;

	const post = data.post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1 class="flex flex-col font-catamaran mt-12 mb-10">
	<p
		class="font-medium text-2xl md:text-4xl lg:text-4xl text-colorOnSurface dark:text-colorOnSurfaceDark"
	>
		{post.title}
	</p>
	<!-- <p class="text-gray-500 text-xl">Ashutosh Singh/Writing</p> -->
	<p class="text-sm sm:text-lg md:text-xl lg:text-xl">
		<date class="text-textBody dark:text-textBodyDark"
			>Ashutosh Singh • {formatDateText(post.date)}</date
		>
	</p>
</h1>

<section class="font-catamaran">
	<div
		class="prose dark:prose-dark max-w-none sm:prose-xl tracking-normal leading-tight pb-20"
	>
		{@html post.content}
	</div>
</section>
