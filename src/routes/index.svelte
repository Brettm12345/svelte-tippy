<script lang="ts">
	import {tippy} from '$lib/tippy';
	import 'tippy.js/dist/tippy.css';
</script>

<h1>Welcome to SvelteKit</h1>
<button use:tippy={{content: 'Test', placement: 'bottom'}}>Test</button>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
