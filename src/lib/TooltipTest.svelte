<script lang="ts">
  import {createTippy} from '.';
  const tippy = createTippy({
    arrow: false
  });
</script>

<button use:tippy={{content: 'Tooltip'}}>Button</button>
