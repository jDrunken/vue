<template>
	<div class="col-xs-7 col-634px">
		<ul class="nav nav-section" id="new-music">
			<li>
				<h3>New Music</h3>
			</li>
			<li v-bind:class="(!display.location || display.location ==='all') ? 'active' : null">
				<a v-on:click="setViewMusicList('all')">전체</a>
			</li>
			<li v-bind:class="display.location ==='domestic' ? 'active' : null">
				<a v-on:click="setViewMusicList('domestic')">국내</a>
			</li>
			<li v-bind:class="display.location ==='overseas' ? 'active' : null">
				<a v-on:click="setViewMusicList('overseas')">해외</a>
			</li>
			<li v-bind:class="display.location ==='classic' ? 'active' : null">
				<a v-on:click="setViewMusicList('classic')">클래식</a>
			</li>
			<li v-if="!!display.viewMusicList" class="more">
				<a href="/mqs/chart/updates" id="btnNewMusicMore" class="btn btn-icon btn-add">
				</a>
			</li>
		</ul> <!-- //.nav-section -->

		<div class="row main-new-music active" id="nm-All"><!-- 전체 -->
			<div class="col-xs-3" v-bind:key="list.id" v-for="list in display.viewMusicList">
				<div class="music-cover">
					<div class="cover-util">
						<a class="btn btn-icon btn-play-o play-music" value="LOTIlk0" aid="LOT6YOg" title="듣기"></a>
						<a class="btn btn-icon btn-add-o" aid="LOT6YOg" title="담기"></a>
						<span style="display:none;" class="sonodoosApp" aid="LOT6YOg"></span>
						<i></i>
					</div>
					<img v-bind:src="list.img" v-bind:alt="list.title" class="img-responsive">
				</div>
				<a class="music-title ell" v-bind:href="list.href" v-bind:title="list.title" v-on:click="underConstruction($event)">
					<h4>{{ list.title }}</h4>
				</a>
				<a class="artist-name ell" v-bind:href="list.music.intro" v-bind:title="list.musicion" v-on:click="underConstruction($event)">{{ list.musicion }}</a>
				<div class="artist-name-sub">
				</div>

				<div class="spec spec-mqs">
					<img v-bind:src="`/images/etc/icon_${list.type}.png`"/> {{ list.bitrate  }}</div>
			</div> <!-- //.col-xs-3 -->
		</div> <!-- //#nm-Domestic -->

		<div class="row main-new-music" id="nm-Overseas"><!-- 해외 -->

		</div> <!-- //#nm-Overseas -->

		<div class="row main-new-music" id="nm-Classic"><!-- 클래식 -->

		</div> <!-- //#nm-Classic -->

		<i class="box-bottom-line"></i>
	</div><!-- //.col-xs-7 .col-634px -->

</template>

<script>
import EventBus from '../EventBus.js';
export default {
	name : 'NewMusic',
	data : function () {
		return {
			lists : {
				all : {},
				domestic : {},
				overseas : {},
				classic : {}
			},
			// viewMusicList : {}
			// viewmodel을 남겨야 되는데...
			display : {
				location : '',
				viewMusicList : []
			}
		}
	},
	methods : {
		// 뮤직차트 데이터 가지고 오기
		getList : function () {
			this.$http.get('http://localhost:3000/newmusic')
				.then((response) => {
					// 각기 바인딩
					this.display.viewMusicList = this.lists.all = response.data;
					this.lists.domestic = response.data.filter(list => !!list['location'] && list['location'] === 'domestic');
					this.lists.overseas = response.data.filter(list => !!list['location'] && list['location'] === 'overseas');
					this.lists.classic = response.data.filter(list => !!list['location'] && list['location'] === 'classic');

					// 초기에 바인딩은..

				})
		},
		// 현재 view type을 지정하기
		setViewMusicList : function (type) {
			if (!type) {
				return;
			}
			this.display.location = type;
			this.display.viewMusicList = this.lists[type]

		},
		underConstruction : function (event) {
			event.preventDefault();
			EventBus.$emit('isAlertView',true);
		}
	},
	mounted : function () {
		this.getList();
	}
}
</script>
