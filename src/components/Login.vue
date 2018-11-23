<template>
	<div v-if="!!isViewPopup"  class="modal fade gv_log_pop in" id="loginLayer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: block; padding-right: 15px;">
		<div class="modal-backdrop fade in" style="z-index:0;"></div>
		<div class="modal-dialog modal-md">
			<div class="modal-dialog modal-md modal-login">
				<div class="modal-content">
					<!-- 스타일 추가 -->
					<div class="modal-header" style="padding:29px 15px 5px 15px; position:relative;">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="closePopup($event);">
							<span aria-hidden="true">×</span>
						</button>
						<div style="border-bottom:2px solid #abad36;">
							<h4 class="login"><img src="/images/icon/icon_login.png">로그인
		{{isViewPopup}}

							</h4>
						</div>
					</div>

					<div class="modal-body G_log" id="myModalBody">
						<p class="errtit">아이디 또는 비밀번호가 틀립니다.</p>
						<div class="row ns-check-area" style="display:none;">
							<div class="col-xs-2" style="padding-right:0;">
								<div class="iradio-groovers" style="position: relative;"><input type="radio" name="sub_method" class="groovers-check2 subscriber-type" value="S" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
								<span>회원</span>
							</div>
							<div class="col-xs-2" style="padding-right:0;">
								<div class="iradio-groovers" style="position: relative;"><input type="radio" name="sub_method" class="groovers-check2 subscriber-type" value="N" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
								<span>비회원</span>
							</div>
							<div class="col-xs-8">
							</div>
						</div>
						<div class="sub-area">
							<form id="loginFrm" method="post">
								<input type="hidden" id="rechapcaAuth" value="true">
								<div class="row">
									<div class="col-xs-12" style="">
										<input type="text" class="input-login" id="input_id" name="j_username" maxlength="12" errmsg="올바른 아이디를 입력해 주세요." tabindex="1" failmsg="정확한 아이디와 비밀번호를 입력해 주세요." placeholder="아이디">

									</div>
									<div class="col-xs-12" style="">
										<input type="password" class="input-login" id="input_pwd" name="j_password" errmsg="올바른 비밀번호를 입력해 주세요." tabindex="2" placeholder="비밀번호">
									</div>
								</div>
								<div style="margin-top:7px;">
									<div class="icheck-groovers checked" style="position: relative;"><input class="groovers-check2" style="position: absolute; opacity: 0;" name="_spring_security_remember_me" type="checkbox" id="saveId" tabindex="3" checked="checked"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
									<span style="margin-left:10px;">로그인 상태 유지</span>
								</div>
							</form>
							<div style="text-align: center; display: none;" class="rechapca">
								<div id="html_element">
									<div style="width: 304px; height: 78px;">
										<textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div>
								</div>
								<span class="caption valid-captcha" style="display: none;">* 인증이 필요합니다.</span>
							</div>
							<div class="row">
								<div class="col-xs-12 btn-login">
									<a class="btn btn-lg btn-primary btn-fix" href="javascript:void(0)" id="loginReqBtn" onfocus="this.blur()">로그인</a>
									<a class="btn btn-lg btn-primary btn-fix btn-join" href="https://www.groovers.kr/user/join" onfocus="this.blur()">회원가입</a>
								</div>
							</div>

							<div class="text-center find-user">
								<a href="/user/find/findId" onfocus="this.blur()">아이디 찾기</a>
								│
								<a href="/user/find/findId" onfocus="this.blur()">비밀번호 찾기</a>
							</div>

							<div class="quick-login">
								<h5>간편 로그인</h5>
								<a href="javascript:void(0)" class="nv-login" onfocus="this.blur()"></a>
								<a href="javascript:void(0)" class="fb-login" style="background-image:url(/images/icon/btn-login-icon2.png)" onfocus="this.blur()"></a>
								<a href="javascript:void(0)" class="kt-login" style="background-image:url(/images/icon/btn-login-icon3.png)" onfocus="this.blur()"></a>
								<a href="javascript:void(0)" class="gg-login" style="background-image:url(/images/icon/btn-login-icon4.png)" onfocus="this.blur()"></a>
							</div>
						</div>
						<div class="nonsub-area" style="display:none;">
							<div class="join-info">
								<p>
								비회원으로 구매서비스를 이용하시려면<br>
								<span>비회원구매 약관동의</span>하셔야 합니다. <br>
								또한 비회원 주문시에는 회원서비스 혜택을 받으실 수 없습니다.
								<br><br>
								계속 진행하시려면, <span>다음 단계로 이동 버튼</span> 을 클릭해 주십시오.
								</p>
							</div>

							<div class="row">
								<div class="col-xs-12 btn-login">
									<a class="btn btn-lg btn-primary btn-fix" onclick="$('.nonsub-area').hide();$('.agree-area').show();" onfocus="this.blur()">다음 단계로 이동</a>
								</div>
							</div>
						</div>

					</div><!-- .modal-body -->
				</div> <!-- .modal-content -->
			</div>
		</div>
	</div>
</template>
<script>
import EventBus from '../EventBus.js';

export default {
	name : 'Login',
	data : function () {
		return {
			isViewPopup : ''
		}
	},
	methods : {
		closePopup : function (event) {
			event.preventDefault();
			EventBus.$emit('isLoginView',false);
			this.isViewPopup = false;
		},
		getPopupStatus : function () {
			EventBus.$on('isLoginView',(status) => {
				this.isViewPopup = status;
			});
		}

	},
	mounted : function () {
		this.getPopupStatus();
	}

}
</script>

