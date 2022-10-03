<!-- Main Svelte Page -->
<script>
    import Profile from '../Profile.svelte';
    import Todos from '../Todos.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user;
    // Authentication imported from firebase.js
    authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>


<section>
{#if user}
    <!-- If the user is logged in, show their profile info and a signout button-->
    <Profile {...user} />
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
    <Todos uid={user.uid} />
{:else}
    <!-- If the user is not logged in, show a login button -->
	<button on:click={login}>
		Signin with Google
	</button>
{/if}
</section>