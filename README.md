<p align="center">
  <a href="https://www.typescriptlang.org" _target="blank">
    <img
      alt="Typescript"
      src="https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white"
    />
  </a>
  <a href="https://eslint.org/ _target="blank"">
    <img
      alt="ESLint"
      src="https://img.shields.io/badge/ESLint-4B3263?style=flat&logo=eslint&logoColor=white"
    />
  </a>
  <a href="https://svelte.dev" _target="blank">
    <img
      alt="Svelte"
      src="https://img.shields.io/badge/Svelte-%23f1413d.svg?style=flat&logo=svelte&logoColor=white"
    />
  </a>
  <a href="https://pnpm.io" _target="blank">
    <img
      alt="PnPm"
      src="https://img.shields.io/badge/Pnpm-%23f69220.svg?style=flat&logo=pnpm&logoColor=white"
    />
  </a>
  <a href="https://prettier.io/" _target="blank">
    <img
      alt="Prettier"
      src="https://img.shields.io/badge/Prettier-%23f7b93e?style=flat&logo=prettier&logoColor=black"
    />
  </a>
  <a href="https://www.npmjs.com/package/svelte-tippy" _target="blank">
    <img
      alt="NPM Package Version"
      src="https://img.shields.io/npm/v/svelte-tippy?color=%23CB3837&label=NPM&logo=npm&logoColor=%23ffffff"
    />
  </a>
</p>

# Tippy.js for svelte

A svelte action for creating tippy.js tooltips.

## Getting started

```zsh
# Pnpm
pnpm add svelte-tippy tippy.js

# Yarn
yarn add svelte-tippy tippy.js

# NPM
npm install svelte-tippy tippy.js --save
```

## Usage

```svelte
<script lang="ts">
  import {tippy} from '$lib/tippy';
  import 'tippy.js/dist/tippy.css'; // optional
</script>
<button use:tippy={{content: 'Test', placement: 'left' }}>Test</button>
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

And then you can use the custom action with these defaults applied

```svelte
<script lang="ts">
  import {myTippy} from '$lib/tippy';
</script>
<button use:myTippy={{content: 'Test'}}>Test</button>
```

## Tailwind/WindiCSS example

![TailwindCSS Demo](images/demo.png)

```svelte
<script lang="ts">
	import {tippy} from '$lib/tippy';
	import 'tippy.js/animations/perspective-subtle.css';
	import 'tippy.js/dist/tippy.css';
</script>
<button
  class="button"
  use:tippy={{
    content: 'Test',
    placement: 'bottom',
    arrow: false,
    theme: 'test',
    animation: 'perspective-subtle'
  }}
>
  Test
</button>


<style>
	:global(.tippy-box[data-theme='test']) {
		@apply inline-block py-1 px-2.5 text-sm font-medium rounded-lg shadow-sm;
		@apply text-white bg-gray-900;
	}
</style>
```
