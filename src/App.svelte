<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let count_value;

	const unsubscribe = count.subscribe(value => {
		count_value = value;
	});
  
  import './i18n.js'
  import { _, locale } from 'svelte-i18n'
  
  // Set the current locale to zh-TW
  locale.set('zh-TW')
</script>

<style>
  h1 {
    color: blue;
  }
</style>

<h1>{$_('cats', { n: count_value })}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>