<template>
<main>
	<KeyVisual/>
	<div class="container">

		<div class="row">
			<NewMusic/>
			<MustHave/>
		</div><!-- //.row -->

		<div class="row row-2nd">
			<Library/>
			<FocusOn/>
		</div> <!-- //.row .row-2nd -->

	</div>
</main>
</template>

<script>
import KeyVisual from '../components/KeyVisual.vue';
import NewMusic from '../components/NewMusic.vue';
import MustHave from '../components/MustHave.vue';
import Library from '../components/Library.vue';
import FocusOn from '../components/FocusOn.vue';

export default {
	name : 'Main',
	components : {
		KeyVisual,
		NewMusic,
		MustHave,
		Library,
		FocusOn,
	}
}
</script>
