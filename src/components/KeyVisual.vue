<template>
<div class="container-fluid key-visual" style="background-color:#543e31">
	<div class="container">
		<div class="row">
			<div class="col-xs-7 ">
				<h2 class="" style="color:#fff;">♪ Artist</h2>
				<h1 class="" style="color:#f7e8df;">앞으로도 기억될 <br>팝 뮤지션<br><span style="color:#fff;">Rick Astley</span></h1>
				<h1>
					<br>
					<p class="lead2" style="color:#f7e8df;">과거의 잊혀진 추억이 아닌 <br>앞으로도 기억될 릭 애슬리의 음악</p>
					<p>
						<a href="/column/LOTUST3" class="gr_pic_black" style="color:#546460;" v-on:click="underConstruction($event)"> &gt; 더보기</a>
					</p>
				</h1>
			</div>
			<div class="col-xs-5 text-right">
				<div class="nav" id="key-event">
					<a class="btn btn-icon btn-arrow-left" data-exec="prev"></a><a class="btn btn-icon btn-arrow-right" data-exec="next" v-on:click="underConstruction($event)"></a>
				</div>

				<!-- bannder grop(per-container) start -->
				<div class="per-container active"><div class="thumb-container">
						<a href="/column/LOTUSTM" v-on:click="underConstruction($event)">
							<img src="/images/etc/bnr-dummy-album.jpg" alt="[리뉴얼] Righteous Brothers">
						</a>
					</div>
					<div class="thumb-container">
						<a href="/column/LOTUSTk" v-on:click="underConstruction($event)">
							<img src="/images/etc/bnr-dummy-album.jpg" alt="[리뉴얼] Mike Bloomfield">
						</a>
					</div>
				</div>
				<!-- bannder gropA(per-container) end --><!-- bannder grop(per-container) start -->
				<div class="per-container"><div class="thumb-container">
						<a href="/column/LOTUST2" v-on:click="underConstruction($event)">
							<img src="/images/etc/bnr-dummy-album.jpg" alt="[리뉴얼] Ron Carter">
						</a>
					</div>
					<div class="thumb-container">
						<a href="/mqs/album/LOT6YGc" v-on:click="underConstruction($event)">
							<img src="/images/etc/bnr-dummy-album.jpg" alt="[리뉴얼] 로이킴">
						</a>
					</div>
				</div>
				<!-- bannder gropA(per-container) end -->
			</div>
		</div>
	</div>
</div>
</template>

<script>
import EventBus from '../EventBus.js';

export default {
	name: 'KeyVisual',
	methods : {
		underConstruction : function (event) {
			event.preventDefault();
			EventBus.$emit('isAlertView',true);
		}
	}
}
</script>

