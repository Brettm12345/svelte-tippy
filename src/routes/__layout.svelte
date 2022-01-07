<script lang="ts">
  import 'virtual:windi.css';

  // if you want to enable windi devtools
  import {browser} from '$app/env';
  if (browser) import('virtual:windi-devtools');
  // ...
</script>

<slot />
