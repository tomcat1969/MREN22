var canvas = [
    [8,2,3,1],
    [8,8,2,8],
    [8,8,6,2],
    [8,8,8,1]
]

function isValid(canvas,x,y){
    if(x < 0 || x > canvas.length - 1 || y < 0 || y > canvas[0].length - 1){
        return true
    }else{
        return false
    }
}

function floodfill(canvas , x, y, color){
   
    if(isValid(canvas,x,y)){
        canvas[x][y] = color
        return
    }
    if(canvas[x + 1][y] == canvas[x][y] && isValid(canvas,x+1,y) ){
        visitedChecker[x+1][y] = true
        floodfill(canvas,x+1,y,color)
    }
    if(canvas[x - 1][y] == canvas[x][y] && isValid(canvas,x-1,y)){
        visitedChecker[x-1][y] = true
        floodfill(canvas,x-1,y,color)
    }
    if(canvas[x][y + 1] == canvas[x][y] && isValid(canvas,x,y+1)){
        visitedChecker[x][y+1] = true
        floodfill(canvas,x,y+1,color)
    }
    if(canvas[x][y-1] == canvas[x][y] && isValid(canvas,x,y-1)){
        visitedChecker[x][y-1] = true
        floodfill(canvas,x,y-1,color)
    }
}

function print2d(canvas){
    for(var i = 0; i < canvas.length;i++){
        for(var j = 0; j < canvas[0].length;j++){
            console.log(canvas[i][j])
        }
        console.log("**********")
    }

    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
}





// print2d(canvas)
// floodfill(canvas,0,0,9)
// print2d(canvas)