<script type="text/javascript">
	import { Router, Link, Route } from "svelte-routing";
	import home from "./routes/home.svelte";
	import logPage from "./routes/logPage.svelte";
	import accountPage from "./routes/accountPage.svelte";
	import premiumPage from "./routes/premiumPage.svelte";
	import commentPage from "./routes/commentPage.svelte";
	import notePage from "./routes/notePage.svelte";
	import aboutUsPage from "./routes/aboutUsPage.svelte"

	let url = "";
	let showTitle = true;
</script>

<main>
	<div>
		{#if showTitle}
			<div style="background: var(--secondary-color)">
				<img src="logo.png" alt="Logo" style="margin-left: 30%; margin-top: 5%; height: 200px;">
				<img src="excellence_logo.png" alt="Logo" style="margin-left: 33%; margin-top: 5%; margin-bottom: 3%; max-width: 200px;">
				<img src="white_cross.png" alt="Logo" style="margin-bottom: 7%; margin-left: 4%; height: 100px;">
				<img src="epitech_logo.png" alt="Logo" style="float: right; margin-right: 32%; margin-top: 8%; height: 150px;">
			</div>
		{/if}
		<Router url="{url}">
			<div class="verticalNavBar">
				<div class="title">MENU</div>
				<ul class="nav ">
					<li><Link to="/" style="text-decoration: none"><span>Home</span></Link></li>
					<li><Link to="/comment" style="text-decoration: none"><span>Comments</span></Link></li>
					<li><Link to="/note" style="text-decoration: none"><span>Notes</span></Link></li>
					<li><Link to="/premium" style="text-decoration: none"><span>Premium</span></Link></li>
					<li><Link to="/account" style="text-decoration: none"><span>Account</span></Link></li>
					<li><Link to="/aboutUs" style="text-decoration: none"><span>About us</span></Link></li>
				</ul>
			</div>
			<ul class="navBar">
				<li style="margin: 5px"> </li>
				<li style="margin: 0 49%"><Link to="/"><img src="logo_no_name.png" alt="Logo" style="height: 40px"></Link></li>
			</ul>
			<div>
				<Route path="/" component="{home}" />
				<Route path="logPage" component="{logPage}" />
				<Route path="premium" component="{premiumPage}" />
				<Route path="comment" component="{commentPage}" />
				<Route path="note" component="{notePage}" />
				<Route path="premium" component="{premiumPage}" />
				<Route path="account" component="{accountPage}" />
				<Route path="aboutUs" component="{aboutUsPage}" />
			</div>
		</Router>
	</div>
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
	}

	*{
		margin: 0;
		padding: 0;
		font-family: 'lato';
		list-style: none;
		text-decoration: none;
	}

	.navBar {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: var(--secondary-color);
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	}

	.navBar li {
		display: block;
	}

	.navBar li span {
		display: block;
		color: var(--navBartext-color);
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 20px;
	}

	.navBar li span:hover {
		font-weight: bold;
	}

	.verticalNavBar {
		border-radius: 10px;
		font-weight: 100;
		background: var(--thirdary-color);
		width: 150px;
		height: 75%;
		padding-left: 50px;
		position: fixed;
		top: 2.5%;
		z-index: 100;
		-webkit-box-shadow: -3px 0px 5px 0px rgba(0,0,0,0.2);
		box-shadow: -3px 0px 5px 0px rgba(0,0,0,0.2);
		left: -130px;
		transition: all 1s;
		-webkit-transition: all 1s;
		color: #222;
		margin: 0;
		font-family: 'Muli', sans-serif;
	}

	.verticalNavBar:hover, .verticalNavBar:focus {
		transform: translate3d(130px, 0, 0);
		animation-timing-function: 1s ease-in;
	}
  
	.title {
		top:50%;
		position:absolute;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		transform: rotate(270deg);
		right: 10px;
		font-weight: 800;
		font-size: 15px;
	}
  
	.nav {
		position:absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
    	font-weight: 300;
    	left: 25px;
	}
	
	.nav li {
		padding-bottom: 30px;
		list-style-type: none;
	}

	.nav li span {
		display: block;
		text-decoration: none;
		color: var(--secondary-color);
		transition: all 0.5s;
		-webkit-transition: all 0.5s;
	}

	.nav li span:hover {
        font-weight: bold;
	}

</style>