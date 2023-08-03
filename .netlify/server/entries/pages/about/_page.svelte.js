import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../chunks/ssr.js";
import { S as SITE_URL, a as SITE_TITLE, b as SITE_DESCRIPTION, D as DEFAULT_OG_IMAGE, M as MY_TWITTER_HANDLE } from "../../../chunks/siteConfig.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-117abv1_START -->${$$result.title = `<title>About - ${escape(SITE_TITLE)}</title>`, ""}<link rel="canonical"${add_attribute("href", SITE_URL, 0)}><link rel="alternate" type="application/rss+xml"${add_attribute("href", SITE_URL + "/api/rss.xml", 0)}><meta property="og:url"${add_attribute("content", SITE_URL, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", SITE_TITLE, 0)}><meta name="Description"${add_attribute("content", SITE_DESCRIPTION, 0)}><meta property="og:description"${add_attribute("content", SITE_DESCRIPTION, 0)}><meta property="og:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><meta name="twitter:card" content="summary"><meta name="twitter:creator"${add_attribute("content", "@" + MY_TWITTER_HANDLE, 0)}><meta name="twitter:titl\`e"${add_attribute("content", SITE_TITLE, 0)}><meta name="twitter:description"${add_attribute("content", SITE_DESCRIPTION, 0)}><meta name="twitter:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><!-- HEAD_svelte-117abv1_END -->`, ""} <h1 class="text-4xl font-catamaran text-semibold mt-16 text-gray-900 dark:text-gray-200 mb-10" data-svelte-h="svelte-102k8t1">About Ashutosh</h1> <section class="w-full sm:w-2/5 font-catamaran text-gray-800 dark:text-gray-300" data-svelte-h="svelte-13kzhl3"><p class="text-justify text-lg">Hola! I am a software engineer by profession -- <b>Android Engineer</b>.</p> <p class="text-justify text-lg">I was fortunate to be born in the era characterised by accelerated
		technological development at the appropriate place to experience the rich
		behavioural change. This induced a great amount of interest in tech and
		specifically computer softwares.</p> <p class="mt-4 text-justify text-lg">I’ve worked for multiple small scale businesses to help them grow with the
		help of software technology. Free and Open Source Software always piques my
		curiosity, and I try to contribute as much as I can. Following that, I led
		the development of personal finance and investment analysis tools and the
		creation of a social media platform for investors at <a class="underline text-blue-700 dark:text-blue-400" href="https://www.tickertape.in/" target="_blank">Tickertape</a> in the fintech sector.</p> <p class="mt-4 text-justify text-lg">At the present time, I contribute to <a class="underline text-blue-700 dark:text-blue-400" href="https://www.jiocinema.com/" target="_blank">JioCinema</a> one of India&#39;s premier OTT platforms. Primarily towards the development and
		enhancement of the Android Application.</p> <p class="mt-4 text-justify text-lg">More on my personal side of life: I like to take up challenges. And I
		consistently try to push myself in all aspects of my life. I spend most of
		my time building stuff, geeking around computers, listening to music,
		reading and questioning different philosophies around my daily life. I also
		play football, swim, run, cycle and lift dead heavy weights regularly. In
		the process, I struggle to study about human body to better recover/prevent
		injuries and incorporate healthy-lifestyle.</p> <p class="mt-4 text-justify text-lg mb-14">Exciting project / idea / general conversation? feel free to send a message: <a class="underline text-blue-700 dark:text-blue-400" href="${"https://twitter.com/messages/compose?recipient_id=" + escape(704722666188505100, true)}" target="_blank">Twitter</a>
		or
		<a class="underline text-blue-700 dark:text-blue-400" href="mailto: 4shutoshsingh@gmail.com" target="_blank">Email</a>
		:)
		<br>Happy to connect with you!</p></section>`;
});
export {
  Page as default
};
