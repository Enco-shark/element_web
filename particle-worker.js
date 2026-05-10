self.onmessage = (e) => {

    const {
        width,
        height,
        radius
    } = e.data;

    const k = 30;
    const radius2 = radius * radius;
    const cellSize = radius / Math.sqrt(2);

    const gridWidth = Math.ceil(width / cellSize);
    const gridHeight = Math.ceil(height / cellSize);

    const grid = new Array(gridWidth * gridHeight);
    const active = [];
    const samples = [];

    function insert(p){

        samples.push(p);
        active.push(p);

        const gx = Math.floor(p.x / cellSize);
        const gy = Math.floor(p.y / cellSize);

        grid[gx + gy * gridWidth] = p;
    }

    function far(x,y){

        const gx = Math.floor(x / cellSize);
        const gy = Math.floor(y / cellSize);

        for(let i=-2;i<=2;i++){

            for(let j=-2;j<=2;j++){

                const nx = gx + i;
                const ny = gy + j;

                if(nx < 0 || ny < 0 || nx >= gridWidth || ny >= gridHeight)
                    continue;

                const n = grid[nx + ny * gridWidth];

                if(n){

                    const dx = n.x - x;
                    const dy = n.y - y;

                    if(dx*dx + dy*dy < radius2)
                        return false;
                }
            }
        }

        return true;
    }

    insert({
        x: Math.random()*width,
        y: Math.random()*height
    });

    while(active.length){

        const randIndex = Math.random() * active.length | 0;
        const p = active[randIndex];

        let found = false;

        for(let n=0;n<k;n++){

            const angle = Math.random()*Math.PI*2;
            const m = radius * (1 + Math.random());

            const x = p.x + Math.cos(angle)*m;
            const y = p.y + Math.sin(angle)*m;

            if(
                x >= 0 &&
                y >= 0 &&
                x < width &&
                y < height &&
                far(x,y)
            ){

                insert({x,y});
                found = true;
                break;
            }
        }

        if(!found){

            active.splice(randIndex,1);
        }
    }

    self.postMessage(samples);
};
