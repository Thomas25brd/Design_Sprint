<script>
	import { Router, Link, Route } from "svelte-routing";

	let url = "";
</script>

<main>
    <div>
        <br><br><br><br><br>
        <h1>Welcome to the main page of Koh-Mantla !</h1>
        <p><br>On this website you could comment any website even if there is any comment section<br>
            You just need to open the extension on a specific website or you need to put the link of the website and comment.
        </p>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
    <Router url="{url}">
        <div class="box">
            <ul class="mainMenu square leftUp">
                <li><img src="comment_logo.png" alt="Comment Logo" style="float: left; height: 50px; margin-top: 8%; margin-left: 20%"></li>
                <li><Link to="comment" style="text-decoration: none"><span>Comments</span></Link></li>
                <div class="subButtonName">
                    <li>Many comments, see all of them just here.</li>
                </div>
            </ul>
            <ul class="mainMenu square rightUp">
                <li><img src="note_logo.png" alt="Note Logo" style="float: left; height: 70px; margin-top: 6%; margin-left: 20%"></li>
                <li><Link to="note" style="text-decoration: none"><span>Notes</span></Link></li>
                <div class="subButtonName">
                    <li>All your notes gathered at the same place, here !!</li>
                </div>
            </ul>
            <ul class="mainMenu square leftDown">
                <li><img src="premium_logo.png" alt="Premium Logo" style="float: left; height: 50px; margin-top: 8%; margin-left: 20%"></li>
                <li><Link to="premium" style="text-decoration: none"><span>Premium</span></Link></li>
                <div class="subButtonName">
                    <li>Unlock new features with the premium...</li>
                </div>
            </ul>
            <ul class="mainMenu square rightDown">
                <li><img src="account_logo.png" alt="Account Logo" style="float: left; height: 80px; margin-top: 5%; margin-left: 20%"></li>
                <li><Link to="account" style="text-decoration: none"><span>Account</span></Link></li>
                <div class="subButtonName">
                    <li>Your account is very important and the parameters too.</li>
                </div>
            </ul>
            <br><br><br>
        </div>
    </Router>
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

    .mainMenu {
        list-style-type: none;
        margin: 0;
        padding: 1em;
        overflow: hidden;
        background: var(--secondary-color);
    }

    .mainMenu li {
        float: inside;
    }

    .square {
        border-radius: 15px 40px 30px;
        background: white;
        border: var(--primary-color);
        box-shadow: 0px 0px 7px var(--primary-color);
        padding: 10px;
        width: 500px;
        height: 200px;
    }

    .box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 10px 22%;
        grid-gap: 30px 30px;
        float: left;
    }

    .leftUp {
        border-radius: 15px 40px 30px 40px;
    }

    .leftDown {
        border-radius: 40px 30px 40px 15px;
    }

    .rightUp {
        border-radius: 40px 15px 40px 30px;
    }

    .rightDown {
        border-radius: 30px 40px 15px 40px;
    }

    .subButtonName li {
        display: block;
        color: var(--text-color);
        text-align: center;
        margin: -20px;
        font-size: 20px;
        text-decoration: none;
    }

    .mainMenu li span {
        display: block;
        color: var(--text-color);
        text-align: center;
        margin: 10% 25%;
        font-size: 30px;
        text-decoration: none;
    }

    .mainMenu li span:hover {
        font-weight: bold;
    }
</style>