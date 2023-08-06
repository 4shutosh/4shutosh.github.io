<script>
	import { page } from "$app/stores";
	$: isActive = $page.url.pathname === $$props.href;

	export let href;
</script>

<a
	class="hidden sm:px-3 md:inline-block
	text-colorOnSurface dark:text-colorOnSurfaceDark
	hover:text-cyan-700 dark:hover:text-cyan-700"
	class:font-regular={isActive}
	{href}
>
	<slot />
</a>
