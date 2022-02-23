<div class="w3-row w3-large w3-light-grey"></div>
<img src="./images/icon16.png" alt="Koh-Mantla" class="logo">
<img src="./images/profile.png" alt="profil" class="profil">

<main>
	<h1>Koh-Mantla</h1>
</main>

<form class="w3-container" action="/action_page.php" target="_blank">
    <div class="comment">
      <h2>Comment</h2>
      <textarea name="Text1" cols="44" rows="15"></textarea>
    </div>
</form>
<button type="submit" class="send">Send</button>



<form class="w3-container" action="/action_page.php" target="_blank">
    <div class="w3-section">
      <h3>Name</h3>
      <input class="title" type="text" name="Name" required>
    </div>
    <div class="w3-section">
      <h3>Email</h3>
      <input class="title" style="width:100%;" type="text" name="Email" required>
    </div>
    <div class="w3-section">
      <h3>Message</h3>
      <input class="title" style="width:100%;" name="Message" required>
    </div>
    <button type="submit" class="send">Send</button>
</form>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #061E3E;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h3 {
		max-width: 10%;
	}

	.logo {
		width:20%;
		margin-top: 0%;
		margin-left: 5%;

	}

	.profil {
		width:20%;
		margin-top: 0%;
		margin-left: 78%;
	}

	.comment {
		text-align: center;
	}

	.send {
		width: 20%;
		margin-left: 40%;
		border-radius: 10px;
		color: #fff;
		background-color: #841F3E;
	}

	.title {
		width: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>