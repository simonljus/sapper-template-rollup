<script>
    import Textfield from '@smui/textfield';
    import Button,{Label}  from '@smui/button';
    import Flex from 'svelte-flex';
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    export let email='';
    export let password='';
    function handleSubmit(event){
        console.debug("submitting loginform")
        dispatch('submit',{email,password})
    }
</script>
<style type="text/scss">
</style>
<div>
<form on:submit|preventDefault={handleSubmit}>
<Flex title="HELLO FLEX" direction="column" wrap="wrap" justify="around" class="container">
<Textfield type="email" bind:value={email} label="Email"/>
<Textfield type="password" bind:value={password} label="Password"/>
<Button type="submit"><Label>Login</Label></Button>
<a href="signup">Create an accout here</a>
</Flex>
</form>
</div>