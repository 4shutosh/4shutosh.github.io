<script lang="ts">
	import "../tailwind.css";
	import Nav from "../components/Nav.svelte";
</script>

<div
	class="flex flex-col w-screen min-h-screen bg-colorSurface dark:bg-colorSurfaceDark p-0 m-0 items-center"
>
	<div class="flex flex-row w-full sm:w-full md:w-4/5 lg:w-1/2">
		<Nav />
	</div>
	<main class="flex flex-grow w-full sm:w-full md:w-4/5 lg:w-7/12">
		<slot />
	</main>
</div>
