<script lang="ts">
  import {createTippy} from '.';
  export const tippy = createTippy({
    arrow: false
  });
  export const overRideTest = createTippy({
    content: 'Test'
  });
</script>

<button use:tippy={{content: 'Tooltip'}}>Button</button>
<button use:overRideTest={{content: 'Override Test'}}>Override Test Button</button>
