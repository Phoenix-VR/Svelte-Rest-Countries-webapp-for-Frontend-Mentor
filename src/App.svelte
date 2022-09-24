<script>
  import {Router,Route,Link} from 'svelte-navigator';
    import Country from './Country.svelte';
  import Home from './Home.svelte';
    import Navbar from './Navbar.svelte';
</script>

<main>

<Navbar/>

<Router>


  <Route path=''>
    <Home/>
  </Route>

  <Route path='country/*country_code' component={Country}/>

</Router>

</main>
