class Xotakerik{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.en = 8;
        this.gorcakic = 0;
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
    mahanal(){
        for(var i = 0;i<xotakerner.length;i++)
        {
            if(xotakerner[i].x == this.x && xotakerner[i].y == this.y){
                matrix[this.y][this.x] = 0;
                xotakerner.splice(i, 1);
            }
        }
    }
    bazmanal(){
        var arrcord = random(this.cordTrue(0));
        if(arrcord){
            xotakerner.push(new Xotakerik(arrcord[0],arrcord[1]));
            matrix[arrcord[1]][arrcord[0]] = 2;
            this.gorcakic = 0;
        }
    }
    move(){
        if(random(this.cordTrue(1)))
        {
            var arrcord = random(this.cordTrue(1));
            matrix[arrcord[1]][arrcord[0]] = 2;
            for(var i = 0;i<xoter.length;i++)
            {
                if(xoter[i].x == arrcord[0] && xoter[i].y == arrcord[1]){
                    xoter.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en = 8;
            this.gorcakic++;
        }
        else if(random(this.cordTrue(0))){
            var arrcord = random(this.cordTrue(0));
            matrix[arrcord[1]][arrcord[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en--;
        }
        if(this.en <= 0){
            this.mahanal();
        }
        if(this.gorcakic >= 2){
            this.bazmanal();
        }
    }
}