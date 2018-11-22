<template>
<div class="col-xs-7 col-634px">
	<ul class="nav nav-section">
		<li><h3>Library</h3></li>
		<li class="more"><a href="/library" class="btn btn-icon btn-add" v-if="viewGetMoreButton"></a></li>
	</ul> <!-- //.nav-section -->

	<table class="table library-table">
		<colgroup>
			<col width="95">
		</colgroup>
		<tbody>
			<tr v-bind:key="list.id" v-for="list in lists">
				<td>
					<a v-bind:href="list.href" class="thumb">
						<img src="/images/etc/bnr-dummy-album.jpg" alt="" class="img-responsive">
						<i></i>
					</a>
				</td>
				<td>
					<a v-bind:href="list.href">
						<h4>{{list.title}}</h4>
					</a>
					<a v-bind:href="list.href">
						<p>{{list.desc}}</p>
					</a>
				</td>
			</tr>
		</tbody>
	</table>
</div> <!-- //.col-xs-7 .col-634px -->
</template>

<script>
export default {
	name : 'Library',
	data : function () {
		return {
			lists : []
		}
	},
	computed : {
		viewGetMoreButton : function () {
			let _length = this.lists.length;
			return _length <= 4 ? false : true
		}
	},
	methods : {
		getLibrary : function () {
			this.$http.get('http://localhost:3000/library')
				.then((response) => {
					this.lists = response.data;
				})
		}
	},
	mounted : function () {
		this.getLibrary();
	}
}
</script>
