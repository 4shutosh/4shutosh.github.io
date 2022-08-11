<script lang="ts">
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<div class="flex flex-col w-screen min-h-screen bg-gray-50 dark:bg-gray-900">
<div class="flex flex-row">
		<Nav />
	</div>
	<main class="flex flex-grow w-screen"><slot /></main>
</div>
