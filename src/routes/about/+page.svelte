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
	<title>About - {SITE_TITLE}</title>
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
	class="text-4xl font-catamaran text-semibold mt-16 text-gray-900 dark:text-gray-200 mb-10"
>
	About Ashutosh
</h1>

<section class="w-full sm:w-2/5 font-catamaran text-gray-800 dark:text-gray-300">
	<p class="text-justify text-lg">
		Hola! I am a software engineer by profession -- <b>Android Engineer</b>.
	</p>

	<p class="text-justify text-lg">
		I was fortunate to be born in the era characterised by accelerated
		technological development at the appropriate place to experience the rich
		behavioural change. This induced a great amount of interest in tech and
		specifically computer softwares.
	</p>

	<p class="mt-4 text-justify text-lg">
		I’ve worked for multiple small scale businesses to help them grow with the
		help of software technology. Free and Open Source Software always piques my
		curiosity, and I try to contribute as much as I can. Following that, I led
		the development of personal finance and investment analysis tools and the
		creation of a social media platform for investors at <a
			class="underline text-blue-700 dark:text-blue-400"
			href="https://www.tickertape.in/"
			target="_blank">Tickertape</a
		> in the fintech sector.
	</p>

	<p class="mt-4 text-justify text-lg">
		At the present time, I contribute to <a
			class="underline text-blue-700 dark:text-blue-400"
			href="https://www.jiocinema.com/"
			target="_blank">JioCinema</a
		> one of India's premier OTT platforms. Primarily towards the development and
		enhancement of the Android Application.
	</p>

	<p class="mt-4 text-justify text-lg">
		More on my personal side of life: I like to take up challenges. And I
		consistently try to push myself in all aspects of my life. I spend most of
		my time building stuff, geeking around computers, listening to music,
		reading and questioning different philosophies around my daily life. I also
		play football, swim, run, cycle and lift dead heavy weights regularly. In
		the process, I struggle to study about human body to better recover/prevent
		injuries and incorporate healthy-lifestyle.
	</p>

	<p class="mt-4 text-justify text-lg mb-14">
		Exciting project / idea / general conversation? feel free to send a message: <a
			class="underline text-blue-700 dark:text-blue-400"
			href="https://twitter.com/messages/compose?recipient_id={704722666188505089}"
			target="_blank">Twitter</a
		>
		or
		<a
			class="underline text-blue-700 dark:text-blue-400"
			href="mailto: 4shutoshsingh@gmail.com"
			target="_blank">Email</a
		>
		:)
		<br />Happy to connect with you!
	</p>
</section>
