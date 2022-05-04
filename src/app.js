document.addEventListener('DOMContentLoaded', () => { 
    const musicaC = new Audio('src/musica/strongerCompleto.mp3');
    const musicaI = new Audio('src/musica/strongerInstrumental.mp3');

  
    
    //===
    // VARIABLES
    //===
    const DATE_TARGET = new Date('05/10/2022 0:00 AM');
    const DATE_INIT_TARGET = new Date('05/04/2022 0:00 AM');
    // DOM for render
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    //===
    // FUNCTIONS
    //===

    /**
    * Method that updates the countdown and the sample
    */
   let imgs = 0;
   let i = 0;
   let imgsId = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
   imgsId = imgsId.sort(function() { return Math.random() - 0.5 });
    
    function updateCountdown() {
        // Calcs
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const DURATION_INIT = DATE_INIT_TARGET - NOW;
        
        imgs = Math.abs((DURATION_INIT)/1000/60/60);
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        
        // Render
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
        
    }
    function fechaAleatoria(){
        SPAN_DAYS.textContent = Math.round(Math.random()*60);
        SPAN_HOURS.textContent = Math.round(Math.random()*60);
        SPAN_MINUTES.textContent = Math.round(Math.random()*60);
        SPAN_SECONDS.textContent = Math.round(Math.random()*60);
        
    }
    
    function mostrarImgs(){
        let img = imgs/12 
        if(img >=24){
            musicaC.play();musicaC.loop =true 
            document.getElementById("containerM").style.display="none"
        }else{musicaI.play();musicaI.loop =true};
        for(let i = 1;i<=img && i<=24;i++){
            setTimeout(()=>{
                document.getElementById(`cimg${imgsId[i-1]}`).style.backgroundImage=`url(src/img/img${i}.jpg)`
            },i*940)
            
        }
        
    }

    
    // Refresh every second
    let id = setInterval(fechaAleatoria,10);
    
    setTimeout(()=>{
        clearInterval(id)
        updateCountdown()
        setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
        setTimeout(()=>mostrarImgs(),2000)
    },2000)

   
    
});