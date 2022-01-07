# Tippy.js for svelte

A svelte action for creating tippy.js tooltips.

## Usage

```svelte
<script lang="ts">
  import {tippy} from '$lib/tippy';
  import 'tippy.js/dist/tippy.css'; // optional
</script>
<button use:tippy={{content: 'Test', placement: 'left' }} />
```

## Extending

Sometimes you might want to create custom tooltips and reuse them throughout your application.

```typescript
import 'tippy.js/animations/perspective-subtle.css';
import tippy from 'svelte-tippy';
import type {Tippy} from 'svelte-tippy';

export const myTippy: Tippy = (element, props) =>
  tippy(element, {...props, animation: 'perspective-subtle', arrow: false});
```
