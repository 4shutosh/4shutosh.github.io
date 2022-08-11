<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a class="hidden rounded-lg p-1 text-gray-800 transition-all hover:bg-gray-200 sm:px-3 md:inline-block dark:text-gray-200
	dark:hover:bg-gray-700"
	class:font-regular={isActive}
	{href}>
    <span class="capsize"><slot /> </span>
</a>
