<script>
	import formatDateText from "../../utils/formatDate.js";

	export let data;

	const post = data.post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1
	class="flex flex-col text-4xl font-catamaran text-semibold mt-16 text-colorOnSurface dark:text-colorOnSurfaceDark mb-10"
>
	<p class="font-bold">{post.title}</p>
	<!-- <p class="text-gray-500 text-xl">Ashutosh Singh/Writing</p> -->
	<p>
		<date class="text-xl text-textBody dark:text-textBodyDark"
			>Ashutosh Singh • {formatDateText(post.date)}</date
		>
	</p>
</h1>

<section class="font-catamaran">
	<div
		class="prose dark:prose-dark max-w-none sm:prose-xl tracking-normal leading-tight"
	>
		{@html post.content}
	</div>
</section>
