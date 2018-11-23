<template>
<div class="footer container-fluid">
	<footer>
		<div class="notice">
			<div class="container">
				<div class="row">
					<div class="col-xs-8">
						<a href="/cs/notice/list" v-on:click="underConstruction($event)"><strong>공지사항</strong></a>

						<span id="noticeListArea"><a href="/cs/notice/read/6239" v-on:click="underConstruction($event)">[공지] Papyrus 일부 서비스 중단 안내</a></span>

					</div>
					<div class="col-xs-4 text-right">
						<a class="btn btn-icon btn-facebook-o" href="https://www.facebook.com/grooversMQS" target="_blank" v-on:click="underConstruction($event)"></a>
						<a class="btn btn-icon btn-blog-o" href="http://blog.naver.com/grooversmqs" target="_blank"  v-on:click="underConstruction($event)"></a>
					</div>
				</div>
			</div>
		</div>



		<div class="container footer-nav">
			<a href="/cs/term"  v-on:click="underConstruction($event)">이용약관</a>|
			<a href="/cs/privacy"  v-on:click="underConstruction($event)"><font color="#000000">개인정보 처리방침</font></a>|
			<a href="/cs/emailRule" v-on:click="underConstruction($event)" >이메일 무단수집 거부</a>|
			<a href="/cs/faq/list"  v-on:click="underConstruction($event)">고객센터</a>|
			<a href="/cs/guide/siteMap" v-on:click="underConstruction($event)">사이트맵</a>
		</div>


		<div class="container company-infor">
			㈜그루버스 | 대표:김준한 | 경기도 성남시 분당구 황새울로360번길 21(서현동, 분당서현신영팰리스타워) ㈜그루버스|사업자번호:220-81-77868 통신판매업 신고 제2016-성남분당-0894호<br>
			고객센터: <a href="mailto:cs@groovers.kr" >cs@groovers.kr</a> | 대표전화: 1833-7001 | 개인정보 보호 책임자: 이재훈<br>All rights reserved by ㈜그루버스
		</div>

	</footer>
</div>
</template>

<script>
import EventBus from '../EventBus.js';

export default {
	name : 'Footer',
	methods : {
		underConstruction : function (event) {
			event.preventDefault();
			EventBus.$emit('isAlertView',true);
		}
	}
}
</script>
