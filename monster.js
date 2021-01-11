class Monster{
    constructor(x, y, width, height){
        var options = {
            restitution: 0.4,
            density: 1
               }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("Monster-01.png");
        this.monster2 = loadImage("Monster-02.png");
        this.bg = loadImage("GamingBackground.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        image(this.bg, width/2, height/2, width, height); 
        var pos = this.body.position;
        console.log(pos.y);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        if(this.body.speed >5){
            image(this.monster2, pos.x, pos.y, 390, 390);
            textSize(35);
            text("you won!", width/2-100, height/2+300);
        }
    }
}