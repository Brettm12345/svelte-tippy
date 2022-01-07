<script lang="ts">
	import {tippy} from '$lib/tippy';
	import 'tippy.js/animations/perspective-subtle.css';
</script>

<div class="container">
	<button
		class="button"
		use:tippy={{
			content: 'Test',
			placement: 'bottom',
			arrow: false,
			theme: 'test',
			animation: 'perspective-subtle'
		}}>Test</button
	>
</div>

<style>
	:global(.tippy-box[data-theme='test']) {
		@apply inline-block py-1 px-2.5 text-sm font-medium rounded-lg shadow-sm;
		@apply text-white bg-gray-900;
	}
</style>
