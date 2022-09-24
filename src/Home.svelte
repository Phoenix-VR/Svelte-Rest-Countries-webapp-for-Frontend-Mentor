<script>
    import { onMount } from "svelte";
    import { Link } from 'svelte-navigator';
    import { fly } from 'svelte/transition'
    import List from "./List.svelte";
    import Loading from "./Loading.svelte";
    import {countries,countriesData,loading,filterStore,filteredData} from './stores.js'

  

    let countries_api_url = 'https://restcountries.com/v3.1/all'    
    let search_term;
    let countries_data;
    let load = false;
    let matched_terms
    let menuOpen = false;
    let filtered = false;
    function get_countries(){
        load = true
        fetch(countries_api_url)
        .then(res=>res.json())
        .then(data=>countries.set(data))
        load = false
    }
    get_countries()
        function filter(e){
            menuOpen = false
            
            var filter_region = $countriesData.filter(country=>{
              return country.region.includes(e.target.textContent)
            
        })
            filterStore.set(filter_region)
            filtered = true
    }
    $: if(filtered){
        matched_terms = $filteredData.filter(country=>{
        if(search_term){
           
                return country.name.common.toLowerCase().includes(search_term.toLowerCase())
          
            
        }
}
)
    }
    else{
        matched_terms = $countriesData.filter(country=>{
        if(search_term){
           
                return country.name.common.toLowerCase().includes(search_term.toLowerCase())
          
            
        }
    }
        )
    }
    

</script>

<div  class="main">
    
<div class="actions">
    <div class="search_bar">
        <input bind:value={search_term} type="text" class="bar" placeholder="Search...">
    </div>
    <div class="filter-con">
        <div class="filter" on:click={()=>menuOpen = !menuOpen}>Filter by Region</div>
        {#if menuOpen}
        <div class="menu">
            <div class="item" on:click={(e)=>filter(e)}>Asia</div>
            <div class="item" on:click={(e)=>filter(e)}>Europe</div>
            <div class="item" on:click={(e)=>filter(e)}>Africa</div>
            <div class="item" on:click={(e)=>filter(e)}>Americas</div>
            <div class="item" on:click={(e)=>filter(e)}>Oceania</div>
        </div>
        {/if}
        
    </div>

</div>


<div class="main_container">
   
    
    {#if $loading}
    <Loading/>
    {:else}
        {#if filtered}
            {#if search_term}

            <List countries_data={matched_terms}/>
        
            {:else}
            <List countries_data={$filteredData}/>
        
        {/if}
        {:else}
            {#if search_term}
               
            <List countries_data={matched_terms}/>
               
            {:else}
           
            <List countries_data={$countriesData}/>
            {/if}
        {/if}
        

    {/if}
        
        
        
        
    
</div>

</div>
{#if $loading}
<div></div>
{:else}
<div class="footer">
    <div class="foot-content">
        <div class="center">
            Made with ♥ by Ansh for Frontend Mentor
        </div>
        
        <div class="op">
            Contact:
            <a href="mailto:anshyt7499@gmail.com" class="op1">Email</a>
            <a href="https://www.discordapp.com/users/759349313603371030" class="op1">Discord</a>
        </div>
    </div>
</div>
{/if}
<style>
    .op{
        margin-top: 20px;
        padding: 5px;
        color: white;
        display: block;
        
    }
    .op1{
        padding-left: 50px;
        margin: 2px;
        color: white;
        display: block;
    }
.filter{
    cursor: pointer;
    width: 150px;
    height: 45px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.247);
}
.center{
    color: white;
}
:global(body.dark-mode) .menu{
    color: white;
    background-color: rgb(43, 43, 43);
    box-shadow: 1px 1px 10px rgb(32, 32, 32);
}
:global(body.dark-mode) .filter{
    color: white;
    background-color: rgb(43, 43, 43);
    box-shadow: 1px 1px 10px rgb(32, 32, 32);
}
.foot-content{
    width: 70%;
    margin: auto;
    opacity: 0.5;
    padding-top: 30px;
}
.footer{
    width: 100%;
    height:190px;
    margin-top: 50px;
    background-color: #2b2b2b;
}
.menu{
    background-color: white;
    transform: translateX(-50px);

    position: absolute;
    z-index: 5;
}
.hidden{
    display: none;
}
.center{
    text-align: center;
}
.item{
    font-weight: bold;
    width: 150px;
    cursor: pointer;
    user-select: none;
    padding-left: 10px;
    padding: 10px ;
    border: 1px solid grey;
}
.item:active{
    background-color: rgba(0, 0, 0, 0.247);
}
:global(MenuItems){
    display: flex;

}

     :global(.active) {
    background-color: rgb(191 219 254);
  }
    h1{
        text-align: center;
    }
    :global(a){
        color: black;
        text-decoration: none;
    }
    :global(.main){
        width: 85%;
        margin: auto;
        max-width: 1280px;
    }
    :global(body.dark-mode){
        background-color: black;
        color: white;
    }
    :global(body.dark-mode) .box{
        background-color: rgb(48, 47, 47);
        color: white;
    }
    :global(body.dark-mode) .search_bar{
        background-color: rgb(61, 60, 60);
        box-shadow: 1px 1px 10px 1px rgb(61, 60, 60);
    }
    :global(body.dark-mode) .bar{
        background-color: rgb(61, 60, 60);
        color: white;
    }
    .name{
        font-size: 20px;
        padding-bottom: 15px;
        font-weight: bold;
    }
    .flag{
        height: 170px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0;
    }
    .box:hover{
        transform: translateY(-5px);
        box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.2);
    }
    .content{
        width: 80%;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .block{
        display: flex;
        margin-bottom: 5px;
    }
    .key{
        padding-right: 7px;
        width: auto;
        font-size: 15px;
    }
    .value{
        font-size: 15px;
    }
    .actions{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    .search_bar{
        width: 400px;
        height: 50px;
        box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);
        display: flex;
        background-color: white;
        align-items: center;
        padding-left: 20px;
    }
    .bar{
        width: 95%;
        height: 70%;
        font-size: 17px;
        font-weight: bold;
        outline: none;
        border: none;
    }
    .main_container{
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
    .grid_country{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
        width: 100%;

    }
    .box{
        background: white;
        z-index: -1;
        width: 280px;
        height: auto;
        box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.1);
        overflow: hidden;
        border-radius: 7px;
        transition-duration: 0.1s;
    }
    
    @media only screen and (max-width: 600px){
        .actions{
            display: block;
        }
        .search_bar{
            width: 100%;
        }
        .filter{
            margin-top: 30px;
        }
        .menu{
            transform: translateX(50px);
        }
        
}
</style>