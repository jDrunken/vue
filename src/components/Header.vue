<template>
	<!-- <router-link to="/membership">Membership</router-link> -->
	<!-- <router-link to="/Music">Music</router-link> -->
	<!-- <router-link to="/Library">Library</router-link> -->
	<!-- <router-link to="/Shop">Shop</router-link> -->
	<!-- <a href="#">Myaccount</a> -->
<div class="container-fluid GNB">
	<div class="container text-right" v-once>
		<ul class="nav nav-utility pull-right">
			<li><a href="#" class="sonodoosDown"><img src="/images/icon/btn-groovers-play.png" class="Groovers-Player-Icon" alt="Groovers Player Icon"> Groovers Player </a></li>
			<li><a href="/misc/event">Event</a></li>
			<li><a href="/user/vipLounge">VIP Lounge</a></li>
			<li class="cart"><a href="/user/cart"><i class="btn btn-icon btn-cart"></i><span>Cart</span><i class="badge" id="cartCount" style="display:none;">0</i></a></li>
		</ul>
	</div>

	<nav class="navbar">
		<div class="container" v-once>

			<div class="navbar-header">
				<a class="navbar-brand" href="/main"><img src="/images/gnb/groovers.logo.png" alt="groovers logo"></a>
			</div><!-- //.navbar-header -->

			<div class="collapse navbar-collapse">

				<form class="navbar-form navbar-form-search navbar-left" id="search-form" role="search" action="/mqs/search/result">
					<div class="form-group">
						<input type="text" name="searchWord" id="searchWord" class="form-control serinput ui-autocomplete-input" placeholder="몽환적 음색의 팝 프린스, 트로이 시반 [Bloom]" autocomplete="off" link="http://www.groovers.kr/mqs/album/LOT6YxT"><span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
					</div>
					<button type="button" id="searchBtn" class="btn btn-icon btn-search"></button>
					<ul class="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style="z-index: 11; display: none;"></ul></form>

			</div><!-- /.navbar-collapse -->
		</div><!-- /.container 1st -->

		<div class="container">
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-left-45px" id="groovers-gnb"> <!-- @ID 추가 -->
					<li class="menu-main free-membership active"><a href="/coupon/giftcard">&gt; Membership </a></li>
					<li class="menu-music"><a href="/mqs/chart/updates">Music</a></li>
					<li class="menu-library"><a href="/library">Library</a></li>
					<li><a href="http://shop.groovers.kr">Shop</a></li>
				</ul>

				<ul class="nav navbar-nav navbar-right-45px groovers-account">
					<li class="dropdown">
						<a class="dropdown-toggle" href="/login" v-on:click="openLogin($event)">My Account</a>
					</li>
				</ul>
			</div><!-- //.navbar-collapse -->
		</div><!-- //.container 2nd -->
	</nav>
</div>
</template>

<script>
export default {
	name : 'Header',
	methods : {
		openLogin : function (event) {
			event.preventDefault();
			this.$emit
		}
	},
	mounted : function () {
	}
}
</script>
