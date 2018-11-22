<template>
<div class="col-xs-5 col-342px">
	<ul class="nav nav-section nav-section-342px" id="chart">
		<li>
			<h3>Must Have</h3>
		</li>
		<li v-bind:class="(!display.type || display.type ==='steady') ? 'active' : null">
			<a v-on:click="setViewMusicList('steady')" style="padding:0;padding-right:15px;">Steady Selling</a>
		</li>
		<li v-bind:class="(display.type ==='curation') ? 'active' : null">
			<a v-on:click="setViewMusicList('curation')" style="padding:0;">Curation</a>
		</li>
		<li class="more">
			<a href="/mqs/musthave" id="btnChartMore" class="btn btn-icon btn-add">
			</a>
		</li>
	</ul>

	<table class="table chart-table active" id="nm-track"><!-- Steady Selling -->
		<colgroup>
			<col width="55">
			<col>
			<col width="65">
		</colgroup>
		<tbody v-if="!!display.list">
			<tr v-for="(list,index) in display.list" v-bind:key="index">
				<td class="chart-rank text-center">{{index}}</td>
				<td>
					<a class="music-title ell" v-bind:href="list.href" v-bind:title="list.title">
						{{ list.title }}
					</a>
					<span class="chart-artist-span">
						<a class="artist-name ell" v-bind:href="list.href" v-bind:title="list.musicion">
							{{ list.musicion }}
						</a>
					</span>
					<div class="spec spec-mqs"><img v-bind:src="`/images/etc/icon_${list.type}.png`">
						{{ list.bitrate }}
					</div>
				</td>
				<td class="chart-play text-right">
					<a class="btn btn-icon btn-play-o-sm play-music" value="LOT61Wt" title="듣기"></a>
					<a class="btn btn-icon btn-add-o-sm" title="담기"></a>
					<span style="display:none;" class="sonodoosApp"></span>
				</td>
			</tr>
		</tbody>
	</table> <!-- //#nm-track -->
</div><!-- //.col-xs-5 .col-342px -->
</template>

<script>
export default {
	name : 'MustHave',
	data : function () {
		return {
			lists : {
				steady : [],
				curation : []
			},
			display : {
				type : '',
				list : []
			}
		}
	},
	methods : {
		getList : function () {
			this.$http.get('http://localhost:3000/musthave')
				.then((response) => {
					let i = 0;
					while(i <= 10) {
						this.lists.steady.push(response.data.filter(list => !!list.is['steady'])[0]);
						this.lists.curation.push(response.data.filter(list => !!list.is['curation'])[0]);
						i++;
					}
					this.display.list = this.lists.steady;
				})
		},

		// 현재 view type을 지정하기
		setViewMusicList : function (type) {
			console.log(this.display.type);
			if (!type) {
				return;
			}
			this.display.type = type;
			this.display.list = this.lists[type]
		}
	},
	created : function () {
		this.getList();
	}
}
</script>
