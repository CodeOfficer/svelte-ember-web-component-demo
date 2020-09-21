<script>
  import { createEventDispatcher } from "svelte";
  import { get_current_component } from "svelte/internal";

  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent &&
      component.dispatchEvent(
        new CustomEvent(name, {
          bubbles: true,
          composed: true,
          detail,
        })
      );
  };

  export let value = 0;

  function myCustomEvent() {
    dispatch("childComponentCustomEvent", {
      text: "childComponentCustomEvent",
    });
  }
</script>

<svelte:options tag="my-child-component" />

<p>CHILD BUTTON: <button on:click={myCustomEvent}>Value: {value}</button></p>
