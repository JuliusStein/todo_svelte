<script>
    import TodoItem from './TodoItem.svelte';
    import { db } from './src/firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    // User ID passed from parent
    export let uid;

    // Form Text
    let text = 'Enter task';

    // Query requires an index to be created in the Firebase console
    const query = db.collection('todo_list').where('uid', '==', uid).orderBy('created');
    const todos = collectionData(query, 'id').pipe(startWith([]));

    // Add a new todo to the database
    function add() {
        db.collection('todo_list').add({ uid, text, complete: false, created: Date.now() });
        text = '';
    }

    // Update a todo in the database
    function updateStatus(event) {
        const { id, newStatus } = event.detail;
        db.collection('todo_list').doc(id).update({ complete: newStatus });
    }

    // Remove a todo from the database
    function removeItem(event) {
        const { id } = event.detail;
        db.collection('todo_list').doc(id).delete();
    }
</script>

<style>
    input { display: block }
</style>

<ul>
    <!-- Rendering the ToDo items from the queried list -->
	{#each $todos as todo}
        <!-- Rendering each individual ToDo and linking the functions -->
        <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
        
	{/each}
</ul>

<!-- Form to add a new ToDo -->
<input bind:value={text}>
<button on:click={add}>Add Task</button>