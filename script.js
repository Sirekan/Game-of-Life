var matrix = [];
// var matrix = [
//     [0,0,4,0,0],
//     [0,0,0,0,0],
//     [0,4,0,0,5],
//     [0,0,4,0,0]
// ];
var X = 50;
var Y = 50;
var SI = 10;
var xoter = [];
var mltXoter = 0;
var xotakerner = [];
var mltXotaker = 0;
var gishatichner = [];
var mltGishatich = 0;
var kaycakner = [];
var mltKaycakner = 0;
var hakakaycakner = [];
var mlthakakaycak = 0;
//for matrix
for(var y = 0;y<Y;y++)
{
    matrix.push([]);
    for(var x = 0;x<X;x++)
    {
        var k = Math.floor(Math.random() * 6);
        if(k != 4){
            matrix[y].push(k);
        }
        else{
            matrix[y].push(Math.floor(Math.random() * 4));
        }
    }
}
matrix[matrix.length-1][matrix[0].length-1] = 4;
matrix[0][0] = 4;
matrix[matrix.length-1][0] = 4;
matrix[0][matrix[0].length-1] = 4;
console.log(matrix);
//matrix = [matrix[.............]]
//grancel
for(var y = 0;y<matrix.length;y++)
    {
        for(var x = 0;x<matrix[y].length;x++)
        {
            if(matrix[y][x] == 1){
                xoter.push(new Xotik(x,y));
            }
            else if(matrix[y][x] == 2){
                xotakerner.push(new Xotakerik(x,y));
            }
            else if(matrix[y][x] == 3){
                gishatichner.push(new Gishatich(x,y));
            }
            else if(matrix[y][x] == 4){
                kaycakner.push(new Kaycak(x,y));
            }
            else if(matrix[y][x] == 5){
                hakakaycakner.push(new Hakakaycak(x,y));
            }
        }
    }
    console.log(gishatichner);

//nkarel
function setup() {
    createCanvas(SI * matrix[0].length,SI * matrix.length);
    background('#acacac');
}
function draw(){
    frameRate(10);
    mltXoter++;
    mltXotaker++;
    mltGishatich++;
    mltKaycakner++;
    mlthakakaycak++;
    for(var y = 0;y<matrix.length;y++)
    {
        for(var x = 0;x<matrix[y].length;x++)
        {
            if(matrix[y][x] == 0){
                fill('#acacac');
                rect(x * SI,y * SI,SI,SI);
            }
            else if(matrix[y][x] == 1){
                fill('green');
                rect(x * SI,y * SI,SI,SI);
            }
            else if(matrix[y][x] == 2){
                fill('yellow');
                rect(x * SI,y * SI,SI,SI);
            }
            else if(matrix[y][x] == 3){
                fill('red');
                rect(x * SI,y * SI,SI,SI);
            }
            else if(matrix[y][x] == 4){
                fill('blue');
                rect(x * SI,y * SI,SI,SI);
            }
            else if(matrix[y][x] == 5){
                fill('black');
                rect(x * SI,y * SI,SI,SI);
            }
        }
    }
    if(mltXoter >= 2){
        for(var i = 0;i<xoter.length;i++){
            xoter[i].move();
        }
        mltXoter = 0;
    }
    if(mltXotaker >= 3){
        for(var i = 0;i<xotakerner.length;i++){
            xotakerner[i].move();
        }
        mltXotaker = 0;
    }
    if(mltGishatich >= 4){
        for(var i = 0;i<gishatichner.length;i++){
            gishatichner[i].move();
        }
        mltGishatich = 0;
    }
    if(mltKaycakner >= 6){
        for(var i = 0;i<kaycakner.length;i++){
            kaycakner[i].move();
            kaycakner[i].fire();
        }
        mltKaycakner = 0;
    }
    if(mlthakakaycak >= 7){
        for(var i = 0;i<hakakaycakner.length;i++){
            hakakaycakner[i].move();
        }
        mlthakakaycak = 0;
    }
}