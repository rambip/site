function setup() {
  w = windowWidth
  wbord = 5
  h = int(windowHeight*0.9)
  hbord = 5

  n = 100

  createCanvas(w, h)

  crowd = []

  for (let i=0; i<n; i++){
    crowd.push(new People(w/2, h/2, r_angle(),4))
  }

  function tell(e, i){
    crowd[i].others = crowd.filter((value, arrIndex) => i !== arrIndex)
  }

  crowd.forEach(tell)

}

function r_angle(){
  return TAU * random(1)
}

function distance(x1, y1, x2, y2){
  return ((x1-x2)**2+(y1-y2)**2)**0.5
}

function average_angle(a, b){
  return atan2(cos(a)+cos(b)/3, sin(a)+sin(b)/3)
}

class People{
  constructor(x, y, vAngle, speed){
    this.x = x
    this.y = y

    this.vx = cos(vAngle)*speed
    this.vy = sin(vAngle)*speed
    this.on = 1
    this.others = []
    this.speed = speed
  }

  set_angle(angle){
    this.vx = cos(angle)*this.speed
    this.vy = sin(angle)*this.speed
  }

  get_angle(){
    return atan2(this.vy, this.vx)
  }

  move(){
    if (this.on){

    this.set_angle(this.get_angle()+random(-0.1, 0.1))

    this.x += this.vx
    this.y += this.vy

      if (this.x > w-wbord || this.x < wbord){
        this.vx *= -1
        this.x += this.vx
        return
      }

      if (this.y > h-hbord || this.y < hbord){
        this.vy *= -1
        this.y += this.vy
        return
      }
    }
    for (let i=0; i< this.others.length; i++){
      this.rule(this.others[i])
      }
      }

  rule(other){
    var d = distance(this.x, this.y,other.x, other.y)
    if (d < mouseX/10){
      if (d > mouseX/10*mouseY/h){
      this.set_angle(atan2(this.vy*5 + other.vy, this.vx*5 + other.vx))
  }
      else{
        this.vx = (this.x-other.x)/d*this.speed
        this.vy = (this.y-other.y)/d*this.speed

        }
  }
  }

  draw(){
    fill(color(100,100,255))
    ellipse(int(this.x), int(this.y), 10, 10)
  }
}



function draw() {
  clear()
  crowd.forEach(function (ent){ent.move()})
  crowd.forEach(function (ent){ent.draw()})



}
