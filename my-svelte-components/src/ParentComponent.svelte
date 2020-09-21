<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy, tick } from "svelte";

  export let label = "default label";
  export let value = 0;

  onMount(async () => {
    // await tick();
    // console.log(`#${label}: onMount`);
  });

  beforeUpdate(async () => {
    // await tick();
    // console.log(`#${label}: beforeUpdate`);
  });

  afterUpdate(async () => {
    // await tick();
    // console.log(`#${label}: afterUpdate`);
  });

  onDestroy(async () => {
    // await tick();
    // console.log(`#${label}: onDestroy`);
  });

  function handleChildComponentCustomEvent(event) {
    console.error("svelte: " + event.detail.text);
  }

  function toString(data) {
    const result = {};
    const sortedKeys = Object.keys(data).sort();
    sortedKeys.forEach((key) => (result[key] = data[key]));
    return JSON.stringify(result);
  }
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }

  ::slotted(p) {
    background: pink;
  }

  .default {
    background: lightgrey;
  }
</style>

<svelte:options tag="my-parent-component" />

<h1>{label}</h1>

<slot name="header">
  <p class="default">PARENT DEFAULT HEADER</p>
</slot>

<slot>
  <p class="default">PARENT DEFAULT SLOT</p>
  <my-child-component
    {value}
    on:childComponentCustomEvent={handleChildComponentCustomEvent} />
</slot>

<slot name="footer">
  <p class="default">PARENT DEFAULT FOOTER</p>
</slot>

<!-- <my-child-component
  {value}
  on:childComponentCustomEvent={handleChildComponentCustomEvent} /> -->

<!-- 
<pre>
$$slots: {toString($$slots)}
$$props: {toString($$props)}
</pre> 
-->
