class Hero{
    constructor(x, y, width, height){
        
        this.body = Bodies.rectangle(x, y, width, height);
        this.image = loadImage("Superhero-01.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}