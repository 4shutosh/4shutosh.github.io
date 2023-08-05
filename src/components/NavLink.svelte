<script>
	import { page } from "$app/stores";
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a
	class="hidden rounded-lg p-1 transition-all sm:px-3 md:inline-block
	text-colorOnSurface dark:text-textBodyDark
	hover:text-colorSurface dark:hover:text-colorSurfaceDark
	hover:bg-colorOnSurface dark:hover:bg-colorOnSurfaceDark"
	class:font-regular={isActive}
	{href}
>
	<span class="capsize"><slot /> </span>
</a>
