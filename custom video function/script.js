        let vid = document.getElementById('myvideo');
        let playbtn = document.getElementById('play_pause_button');
        let seekslider = document.getElementById("seekslider");
        let currenttime = document.getElementById("currenttime");
        let totaltime = document.getElementById("totaltime");


        
        const updateTime = ()=>{

            const current = vid.currentTime;
            const duration = vid.duration;
            seekslider.value = current;
            currenttime.textContent = formatTime(current);
            totaltime.textContent = formatTime(duration);
        }

        const formatTime= (time)=>{
            const minut = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minut}:${seconds <10 ? "0":''}${seconds}`;
        }

        const barcontrol = () => {

            let seekTime = parseFloat(seekslider.value);
            vid.currentTime = seekTime;

        }

        const playpause = (btn, vide) => {


            var vide = document.getElementById(vide);
            if (vide.paused) {
                vide.play();
                btn.innerHTML = "Pause"
            }
            else {
                vide.pause();
                btn.innerHTML = "Play"
            }

        }
        vid.addEventListener("timeupdate", updateTime);
        seekslider.addEventListener("input", barcontrol);


        updateTime();
        


