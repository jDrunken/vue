<template>
<div class="col-xs-5 col-342px">
	<ul class="nav nav-section">
		<li><h3>Focus On!</h3></li>
		<li class="arrow" id="hot-item" v-if="viewMoreButtonGroup">
			<a class="btn btn-icon btn-arrow-left-gray" data-exec="prev" onfocus="this.blur()">
			</a>
			<a class="btn btn-icon btn-arrow-right-gray" data-exec="next">
			</a>
		</li>
	</ul> <!-- //.nav-section -->

	<div class="item-container active" v-bind:key="list.id" v-for="list in lists">
		<div class="item-img">
			<a v-bind:href="list.href">
				<img v-bind:src="list.img" alt="" class="img-responsive">
			</a>
		</div>
		<span class="item-title ell" v-bind:title="list.title">{{ list.title }}</span>
		<strong class="item-price ell" v-bind:title="list.desc">{{ list.desc }}</strong>
	</div>
</div>
</template>

<script>
export default {
	name : 'FocusOn',
	data : function () {
		return {
			lists : []
		}
	},
	computed : {
		viewMoreButtonGroup : function () {
			let _length = this.lists.length;
			return _length <= 1 ? false : true
		}
	},
	methods : {
		getList : function () {
			this.$http.get('http://localhost:3000/focuson')
				.then((response) => {
					this.lists = response.data;
				})
		}
	},
	mounted : function () {
		this.getList();
	},
}
</script>
