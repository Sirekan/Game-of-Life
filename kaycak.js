class Kaycak{
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
            var arrcord = random(this.cordTrue(0));
            matrix[arrcord[1]][arrcord[0]] = 4;
            matrix[this.y][this.x] = 0;
            this.x = arrcord[0];
            this.y = arrcord[1];
        }
    }
    fireArray(){
        var cordFire = [];
        var verjArr = [];
        for(var i = 0;i<matrix.length;i++)
        {
            cordFire.push([this.x - (i+1),this.y - (i+1)]);
            cordFire.push([this.x + (i+1),this.y - (i+1)]);
            cordFire.push([this.x - (i+1),this.y + (i+1)]);
            cordFire.push([this.x + (i+1),this.y + (i+1)]);
        }
        for(var i = 0;i<cordFire.length;i++)
        {
            if(cordFire[i][0] >= 0 && cordFire[i][1] >= 0 && cordFire[i][1] <= (matrix.length-1) && cordFire[i][0] <= (matrix[0].length-1))
            {
                verjArr.push(cordFire[i]);
            }
        }
        return verjArr;
    }
    fire(){
        var arr = this.fireArray();
        for(var i = 0;i<arr.length;i++){
            var x_ = arr[i][0];
            var y_ = arr[i][1];
            if(matrix[y_][x_] != 4){
                if(matrix[y_][x_] == 1)
                {
                    matrix[y_][x_] = 0;
                    for(var j = 0;j<xoter.length;j++)
                    {
                        if(xoter[j].x == x_ && xoter[j].y == y_){
                            xoter.splice(j, 1);
                        }
                    }
                }
                else if(matrix[y_][x_] == 2)
                {
                    matrix[y_][x_] = 0;
                    for(var j = 0;j<xotakerner.length;j++)
                    {
                        if(xotakerner[j].x == x_ && xotakerner[j].y == y_){
                            xotakerner.splice(j, 1);
                        }
                    }
                }
                else if(matrix[y_][x_] == 3)
                {
                    matrix[y_][x_] = 0;
                    for(var j = 0;j<gishatichner.length;j++)
                    {
                        if(gishatichner[j].x == x_ && gishatichner[j].y == y_){
                            gishatichner.splice(j, 1);
                        }
                    }
                }
                else if(matrix[y_][x_] == 5)
                {
                    matrix[y_][x_] = 0;
                    for(var j = 0;j<hakakaycakner.length;j++)
                    {
                        if(hakakaycakner[j].x == x_ && hakakaycakner[j].y == y_){
                            hakakaycakner.splice(j, 1);
                        }
                    }
                }
            }
        }
    }
}