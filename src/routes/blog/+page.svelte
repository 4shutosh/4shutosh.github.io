<script>
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
	} from "$lib/siteConfig";
</script>

<svelte:head>
	<title>Blog - {SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link
		rel="alternate"
		type="application/rss+xml"
		href={SITE_URL + "/api/rss.xml"}
	/>
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={"@" + MY_TWITTER_HANDLE} />
	<meta name="twitter:titl`e" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<h1
	class="text-4xl font-catamaran text-semibold mt-16 text-gray-800 dark:text-gray-200 mb-10"
>
	Writtings
</h1>

<section class="w-full sm:w-2/5 font-catamaran text-gray-800 dark:text-gray-300">
	<p class="text-justify text-lg">
		I try to write my learnings, thoughts and experiences regularly.
	</p>

	<p class="mt-4 text-justify text-lg">
		Starting soon, I will share them on Twitter in a condensed manner as well as
		write travel, tech, and other informative blogs here.
	</p>

	<p class=" mt-4 text-justify text-lg">Please check back in some time.</p>
</section>
