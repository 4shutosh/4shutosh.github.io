<script>
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
	} from "$lib/siteConfig";

	import BlogLink from "../../components/BlogLink.svelte";

	import { formatDateNumbers } from "../../utils/formatDate.js";

	export let data;
	const posts = data.posts;
</script>

<svelte:head>
	<title>Writings - {SITE_TITLE}</title>
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
	class="font-medium text-2xl md:text-4xl lg:text-4xl font-catamaran mt-12 text-colorOnSurface dark:text-colorOnSurfaceDark mb-10"
>
	Writings
</h1>

<section
	class="w-full font-catamaran text-textBody dark:text-textBodyDark text-start text-xl"
>
	<p>I try to write my learnings, thoughts and experiences regularly.</p>
	<!-- <p>
		Starting soon, I will share them on Twitter in a condensed manner as well as
		write travel, tech, and other informative blogs here.
	</p> -->
	<br />
	{#if !data}
		<p>Nothing found :( Please check back in some time.</p>
	{:else}
		<div>
			<ul>
				{#each posts as post}
					<li>
						<span class="text-textBody dark:text-textBodyDark">
							{formatDateNumbers(post.date)}
						</span>
						<span
							class="text-colorOnSurface dark:text-colorOnSurfaceDark underline underline-offset-2"
						>
							<BlogLink href={post.path}>{post.title}</BlogLink>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</section>
