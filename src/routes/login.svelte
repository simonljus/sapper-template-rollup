<script>
  import Loginform from '../components/forms/Loginform.svelte';
  async function onSignIn(event) {
    const data=event.details
    console.debug("from event", event);
    }
</script>

<style>
  /* your styles go here */
</style>

<svelte:head>
	<title>Login</title>
</svelte:head>

<Loginform on:submit={onSignIn}/>
