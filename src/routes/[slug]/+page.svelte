<script>
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
	} from "$lib/siteConfig";
	import formatDateText from "../../utils/formatDate.js";

	export let data;

	const post = data.post;
</script>

<svelte:head>
	<title>{post.title}</title>
	<link rel="canonical" href={SITE_URL} />
	<link
		rel="alternate"
		type="application/rss+xml"
		href={SITE_URL + "/api/rss.xml"}
	/>
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta name="Description" content={post.description} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={"@" + MY_TWITTER_HANDLE} />
	<meta name="twitter:titl`e" content={SITE_TITLE} />
	<meta name="twitter:description" content={post.description} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<h1 class="flex flex-col font-catamaran mt-12 mb-10">
	<p
		class="font-medium text-3xl md:text-4xl lg:text-4xl text-colorOnSurface dark:text-colorOnSurfaceDark"
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
