<script>
    function toggle_mode(e){
        window.document.body.classList.toggle('dark-mode')
    }
</script>

<div class="navbar">
    <div class="title">Where in the world?</div>
    <div class="mode_switch" on:click={(e)=>toggle_mode(e)}>Dark Mode</div>
</div>

<style>
    :global(body){
        margin: 0px;
        font-family: 'Open Sans';
        background-color: rgb(252, 252, 252);
    }
    :global(body.dark-mode) .navbar{
        background-color: #2b2b2b;
        color: white;
    }
    :global(body.dark-mode) .mode_switch{
        background-color: rgb(61, 60, 60);
    }
    .navbar{
        position: sticky;
        top:0px;
        left: 0px;
        width: 100%;
        height: 70px;
        box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        color: black;
        z-index: 5;
    }
    .title{
        font-family: 'Open Sans';
        font-size: 20px;
        font-weight: bold;
        padding: 50px;
    }
    .mode_switch{
        width: 120px;
        height: 40px;
        box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 7px;
    }
    @media only screen and (max-width: 600px){
        .mode_switch{
            width: 35%;
            
            padding: 0px;
        }
        .title{
            padding: 0px;
            padding-left: 10%;
            width: 50%;
        }
    }
</style>