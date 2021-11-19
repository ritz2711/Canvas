        
     window.addEventListener('load',()=>{
        
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        // // ctx.strokeStyle = "red";
        // // ctx.strokeRect(100,100,200,500);
        // ctx.beginPath();
        // ctx.moveTo(100,100);
        // ctx.lineTo(200,100);
        // ctx.lineTo(200,150);
        // ctx.closePath();
        // ctx.stroke();
        let painting = false;
        function startPosition(e){
            painting = true;
            draw(e)

        }
        function endPosition(){
            painting = false;
            ctx.beginPath();
        }
        function draw(e){
            if(!painting)return;
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.lineTo(e.clientX,e.clientY);
            ctx.stroke();

        }
        canvas.addEventListener('mousedown',startPosition);
        canvas.addEventListener('mouseup',endPosition);
        canvas.addEventListener('mousemove',draw);

     });     