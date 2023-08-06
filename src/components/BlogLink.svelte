<script>
	import { page } from "$app/stores";
	$: isActive = $page.url.pathname === $$props.href;

	export let href;
</script>

<a
	class="px-3
	text-colorOnSurface dark:text-colorOnSurfaceDark
	hover:text-cyan-700 dark:hover:text-cyan-700"
	class:font-regular={isActive}
	{href}
>
	<slot />
</a>
