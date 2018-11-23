<template>
<div class="popup" v-if="!!isViewAlert">
	<div class="wrapper">
		<h3>기능 준비중입니다.</h3>
		<button type="button" v-on:click="closeAlert()">확인</button>
	</div>
</div>
</template>

<style lang="scss">
.popup {
	position:fixed;
	top:0;
	left:0;
	bottom:0;
	right:0;
	background:rgba(0,0,0,0.7);
	z-index:2000;

	.wrapper {
		position:absolute;
		top:50%;
		left:50%;
		width:400px;
		height:200px;
		transform:translate(-50%,-50%);
		background:#fff;
		border:1px solid #aaa;

		display:flex;
		justify-content:center;
		align-items:center;
		flex-direction:column;

		box-shadow:5px 5px 20px rgba(0,0,0,1);
	}

	button {
		display:block;
		min-width:80px;
		min-height:30px;
		background:#000;
		color:#fff;
		font-size:15px;
		padding:10px;
		margin-top:20px;
		outline:none;

		transition:background-color 0.2s;

		&:hover {
			background-color:#333;
		}
	}
}
</style>

<script>
import EventBus from '../EventBus.js';

export default {
	name : 'Popup',
	data : function () {
		return {
			isViewAlert : false
		}
	},
	methods : {
		closeAlert : function () {
			this.isViewAlert = false;
			EventBus.$emit('isAlertView',false);
		},
		getAlertStatus : function () {
			EventBus.$on('isAlertView', (status) => {
				this.isViewAlert = status;
			});
		}
	},
	mounted : function () {
		this.getAlertStatus();
	}
}
</script>
