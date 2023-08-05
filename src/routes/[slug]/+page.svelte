<script>
	export let data;

	const post = data.post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1
	class="flex flex-col text-4xl font-catamaran text-semibold mt-16 text-gray-800 dark:text-gray-200 mb-10"
>
	{post.title}
	<!-- <p class="text-gray-500 text-xl">Ashutosh Singh/Writing</p> -->
	<p>
		<i class="italic text-gray-500 text-xl">Ashutosh Singh • </i><date
			class="text-gray-500 text-xl"
		>
			{post.date}</date
		>
	</p>
</h1>

<section
	class="text-left font-catamaran font-normal text-gray-700 dark:text-gray-300 text-xl"
>
	{@html post.content}
</section>
