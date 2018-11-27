class Xotik{
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
        var arrcord = random(this.cordTrue(0));
        if(arrcord){
            matrix[arrcord[1]][arrcord[0]] = 1;
            xoter.push(new Xotik(arrcord[0],arrcord[1]));
        }
    }
}
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
class Gishatich{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.en = 5;
        this.gorcakic = 0;
        this.bool = true;
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
        for(var i = 0;i<gishatichner.length;i++)
        {
            if(gishatichner[i].x == this.x && gishatichner[i].y == this.y){
                if(this.bool == true)
                {
                    matrix[this.y][this.x] = 0;
                }
                else{
                    matrix[this.y][this.x] = 1;
                }
                gishatichner.splice(i, 1);
            }
        }
    }
    bazmanal(){
        var arrcord = random(this.cordTrue(0));
        if(arrcord){
            gishatichner.push(new Gishatich(arrcord[0],arrcord[1]));
            matrix[arrcord[1]][arrcord[0]] = 3;
            this.gorcakic = 0;
        }
    }
    move(){
        if(random(this.cordTrue(2)))
        {
            var arrcord = random(this.cordTrue(2));
            matrix[arrcord[1]][arrcord[0]] = 3;
            for(var i = 0;i<xotakerner.length;i++)
            {
                if(xotakerner[i].x == arrcord[0] && xotakerner[i].y == arrcord[1]){
                    xotakerner.splice(i, 1);
                }
            }
            if(this.bool == true)
            {
                matrix[this.y][this.x] = 0;
            }
            else{
                matrix[this.y][this.x] = 1;
            }
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en = 5;
            this.gorcakic++;
            this.bool = true;
        }
        else if(random(this.cordTrue(1))){
            var arrcord = random(this.cordTrue(1));
            matrix[arrcord[1]][arrcord[0]] = 3;
            if(this.bool == true)
            {
                matrix[this.y][this.x] = 0;
            }
            else{
                matrix[this.y][this.x] = 1;
            }
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en--;
            this.bool = false;
        }
        else if(random(this.cordTrue(0))){
            var arrcord = random(this.cordTrue(0));
            matrix[arrcord[1]][arrcord[0]] = 3;
            if(this.bool == true)
            {
                matrix[this.y][this.x] = 0;
            }
            else{
                matrix[this.y][this.x] = 1;
            }
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en--;
            this.bool = true;
        }
        if(this.en <= 0){
            this.mahanal();
        }
        if(this.gorcakic >= 5){
            this.bazmanal();
        }
    }
}
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