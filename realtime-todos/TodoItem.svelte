<script>
import { createEventDispatcher } from 'svelte';
    // Whenever a todo is added, updated, or removed, this eventDispatcher will be called
    const dispatch = createEventDispatcher();
    
    function remove() {
		dispatch('remove', { id });
    }
	
    // When the checkbox is clicked, this event is fired
	function toggleStatus() {
        let newStatus = !complete;
		dispatch('toggle', {
            id,
            newStatus
        });
    }
    

    export let id; // document ID
    export let text; // todo text
    export let complete; // todo status
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
</style>


<li>
<!-- If the todo is complete, render a check mark, otherwise render an X-->
{#if complete}
    <span class="is-complete">{ text }</span>
    <button on:click={toggleStatus}> ✔️ </button>
{:else}
    <span>{ text }</span>
    <button on:click={toggleStatus}> ❌ </button>
{/if}

<button on:click={remove}> 🗑 </button>

</li>