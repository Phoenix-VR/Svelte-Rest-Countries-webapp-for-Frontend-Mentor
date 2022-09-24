<script>

</script>

<div class="loading">
    <div class="circle"></div>
    <p>Loading... </p>
</div>

<style>
    .loading{
        font-size: 18px;
        margin-top: 10vh;
    }   
    :global(body.dark-mode) .circle{
        background-color: rgba(255,255,255,0.5);
    }
    p{
       text-align: center;
       font-size: 18px;
       padding-top: 5px;
    }
    .circle{
        margin-top: 40%;
        width: 70px;
        height: 70px;
        background-color: rgba(0,0,0,0.5);
        border-radius: 50%;
        animation: ball 0.5s ease-out 30ms infinite;
    }
    @keyframes ball{
        from{
            transform: scale(0);
            opacity: 1;
        }
        to{
            transform: scale(1);
            opacity: 0;
        }
    }
</style>