<script>
    import back from "./back.png";
    import { useNavigate } from "svelte-navigator";
    import App from "./App.svelte";
    import { claim_component } from "svelte/internal";
    import Loading from "./Loading.svelte";

    export let country_code;

    const navigate = useNavigate();

    var url = "https://restcountries.com/v3.1/alpha/" + country_code;
    async function get_country() {
        var res = await fetch(url);
        var data = await res.json();
        
        console.log(data);
        return data[0];
    }

    get_country();
</script>

<div class="main">
    <div class="back" on:click={() => navigate(-1)}>
        <img src={back} alt="" class="b" />
        Back
    </div>
    <div class="container">
        {#await get_country()}
        <div  class="load">
            <Loading/>
        </div>
        {:then country}
            <img src={country.flags.svg} alt="" class="flag" />
            <div class="content">
                <div class="name">{country.name.common}</div>
                
                    <div class="info">
                        <div class="block">
                            <strong class="key">Population: </strong>
                            <span class="value">{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                        </div>
                        <div class="block">
                            <strong class="key">Region: </strong>
                            <span class="value">{country.region}</span>
                        </div>
                        <div class="block">
                            <strong class="key">Sub Region: </strong>
                            <span class="value">{country.subregion}</span>
                        </div>
                        <div class="block">
                            <strong class="key">Captial: </strong>
                            <span class="value">{country.capital}</span>
                        </div>
                        <div class="info2">
                            <div class="block">
                                <strong class="key">Top Level Domain: </strong>
                                <span class="value">{country.tld}</span>
                            </div>
                        </div>
                
                </div>
            </div>
        {/await}
    </div>
</div>

<style>
    :global(body.dark-mode) .back{
        background-color: rgb(61, 60, 60);
    }
    .load{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .main {
        margin-top: 40px;
        font-size: 15px;
    }
    .back {
        width: 140px;
        height: 45px;
        box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
        font-weight: bold;
        display: flex;
        align-items: center;
        border-radius: 7px;
        cursor: pointer;
        transition-duration: 0.1s;
    }
    .info {
        margin-top: 40px;
    }
    .info2{
        position: absolute;
        top: 80px;
        margin-left: 270px;
        width: 200px;
    }
    .value {
        opacity: 0.9;
        padding-left: 3px;
    }
    .block {
        margin-bottom: 10px;
    }
    .container {
        display: flex;
        width: 90%;
        margin: auto;
        margin-top: 60px;
    }
    .name {
        font-size: 32px;
        font-weight: bold;
    }
    
    .flag {
        position: absolute;
        top: 53%;
        transform: translateY(-50%);
        width: 35%;
        max-height: 55%;
        box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.1);
    }
    .content {
        position: absolute;
        top: 53%;
        transform: translateY(-50%);
        left: 52%;
    }
    .b {
        height: 35px;
        padding: 15px;
    }
    .back:active {
        background-color: rgba(0, 0, 0, 0.04);
    }
    @media only screen and (max-width: 600px){
        .container{
            display: block;
        }
        .flag{
            width: 100%;
            margin: auto;
            position: relative;
            top:80px;
        }
        .content{
            position:relative;
            top: 100px;
            left: 0px;
            margin-bottom: 100px;
        }
        .info2{
            position: absolute;
            margin: 0px;
            top: 210px;
        }
    }
</style>
