var start = new Date().getTime();
            
            function getRandomColor(){

                var letters ='0123456789ABCDEF';

                var color = '#';

                for (var i = 0; i < 6; i++){

                    color += letters[Math.floor(Math.random() * 16)]
                }
                return color;

            }

            function AppearShape (){
                
            var top = Math.random() * 400;

            var left = Math.random() * 400;

            var width = (Math.random() * 200) + 100;

            if(Math.random() > 0.5){

                document.getElementById("shape").style.borderRadius = "50%";
            }
            else{

                document.getElementById("shape").style.borderRadius = "0";
            }

            
                    document.getElementById("shape").style.backgroundColor = getRandomColor();
                    document.getElementById("shape").style.top = top + "px";
                    document.getElementById("shape").style.left = left + "px";
                    document.getElementById("shape").style.display = "block";
                    document.getElementById("shape").style.width = width + "px";
                    document.getElementById("shape").style.height = width + "px";
                      
                    start = new Date().getTime();
 
                } 

                function appearAfter(){

                    setTimeout(AppearShape, Math.random() * 3000);

                }
                  
                    appearAfter();

                    document.getElementById("shape").onclick = function(){

                    document.getElementById("shape").style.display = "none";

                    var end = new Date().getTime();

                   var time = (end - start) / 1000 ;
                    
                    document.getElementById("timetaken").innerHTML = time+"s"

                    appearAfter();

                    if(time < 1){

                    document.getElementById("desc").innerHTML = "Nice Work !!";
                    document.getElementById("desc").style.color = "green";
                }
                else{

                 document.getElementById("desc").innerHTML = "Not Cool !!";
                 document.getElementById("desc").style.color = "red";
                }
            
                }

                   

            