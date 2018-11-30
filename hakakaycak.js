class Hakakaycak{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    cord(){
        this.cords = [
            [this.x - 1,this.y - 1],
            [this.x    ,this.y - 1],
            [this.x + 1,this.y - 1],
            [this.x - 1,this.y    ],
            [this.x + 1,this.y    ],
            [this.x - 1,this.y + 1],
            [this.x    ,this.y + 1],
            [this.x + 1,this.y + 1]
        ];
        return this.cords;
    }
    cordTrue(t){
        var ret = this.cord();
        var trueCord = [];
        for(var i = 0;i<ret.length;i++)
        {
            if(ret[i][0] <= (matrix[0].length - 1) && ret[i][0] >= 0 && ret[i][1] <= (matrix.length - 1) && ret[i][1] >= 0)
            {
                if(matrix[ret[i][1]][ret[i][0]] == t)
                {
                    trueCord.push(ret[i]);
                }
            }
        }
        return trueCord;
    }
    move(){
        if(random(this.cordTrue(0))){
            if(random(this.cordTrue(4))){
                var arrcord = random(this.cordTrue(4));
                var x_ = arrcord[0];
                var y_ = arrcord[1];
                matrix[arrcord[1]][arrcord[0]] = 5;
                for(var j = 0;j<kaycakner.length;j++)
                {
                    if(kaycakner[j].x == x_ && kaycakner[j].y == y_){
                        kaycakner.splice(j, 1);
                    }
                }
                matrix[this.y][this.x] = 0;
                this.x = arrcord[0];
                this.y = arrcord[1];
            }
            else if(random(this.cordTrue(0)))
            {
                var arrcord = random(this.cordTrue(0));
                matrix[arrcord[1]][arrcord[0]] = 5;
                matrix[this.y][this.x] = 0;
                this.x = arrcord[0];
                this.y = arrcord[1];
            }
        }
    }
}