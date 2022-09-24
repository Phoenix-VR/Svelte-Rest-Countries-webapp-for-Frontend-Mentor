<script>
    import { Link } from 'svelte-navigator'
    import { fly } from 'svelte/transition'

    let countries_api_url = 'https://restcountries.com/v3.1/all'    
    
    export let countries_data;
    

</script>

<div class="grid_country" in:fly="{{ y: 50, duration: 500, delay: 300,opacity:0 }}">
{#each countries_data as country}

        <Link to={'country/'+country.cca3}>
        <div class="box" >
            <img class="flag"src={country.flags.svg} alt="">
            <div class="content">
                <div class="name">
                    {country.name.common}
                </div>
                
                <div class="block">
                    <strong class="key">Population :-</strong>
                    <div class="value">{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                </div>
                <div class="block">
                    <strong class="key">Region :- </strong>
                    <div class="value">{country.region}</div>
                </div>
                <div class="block">
                    <strong class="key">Capital :- </strong>
                    <div class="value">{country.capital}</div>
                </div>
            </div>
            </div>
        </Link>

        {/each}
   </div>
    



        <style>
             
    
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
            :global(body){
                overflow-x: hidden;
            }
            :global(body.dark-mode){
                overflow-x: hidden;
            }
            @media only screen and (max-width: 600px){
                .grid_country{
                    grid-template-columns: 1fr;
                    width: 100%;
                    margin: auto;
                    row-gap: 20px;
                    margin-bottom: 300px;
                }
                .box{
                    width: 100%;
                }
            
            }
        </style>