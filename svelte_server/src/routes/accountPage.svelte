<script>
    import Api from '../../public/services/App';

	const test = () => {
		alert("test() call");
		try {
			const response = Api.post("/register");
			alert("finished " + response.data);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	};
</script>

<main>
	<br><br><br><br><br>
    <h1>Account Page</h1>
    <img src="coming_soon.gif" alt="GIF Comming Soon..." >
	<button on:click={test}>Test</button>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
	:root {
		--text-color: #061E3E;
		--navBartext-color: white;
		--primary-color: #841F3E;
		--secondary-color: #061E3E;
		--thirdary-color: #F6AB13;
	}

	main {
		background: var(--background-color);
		color: var(--text-color);
		margin: 0;
		font-family: 'Poppins';
        text-align: center;
	}

	*{
		margin: 0;
		padding: 0;
		font-family: 'lato';
		list-style: none;
		text-decoration: none;
	}
</style>