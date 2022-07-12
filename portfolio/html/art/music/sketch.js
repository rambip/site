let keys, step, NoteStates;

function Text(message, x, y, size){
  textSize(size);
  noStroke();
  text(message, x, y)
  stroke(0);
}


function setup() {
  env = new p5.Env(0.1, 0.7, 4, 0.6);

  instrument = [];
  for (i = 0; i < 24; i++) {
    cord = new p5.Oscillator("triangle");
    cord.freq(220 * 1.059463094359295264561 ** i, 0);
    append(instrument, cord);
  }

  // geometry parameters
  W = windowWidth-10;
  H = windowHeight-10;
  createCanvas(W, H);

  strokeWeight(1.5);
  textFont('Helvetica');

  x0 = W / 2;
  y0 = H / 2 - 30;
  R = int(min(H, W) * 0.3);


  // music notation
  noteNames = ["A", "", "B", "C", "", "D", "", "E", "F", "", "G", ""];
  intervals =[
    ["","","","tierce mineure", "tierce majeure", "", "", "quinte","","","",""],
    ["","","","cyan"       , "yellowgreen"     , "", "", "orangered"  ,"","","",""]
             ];

  NoteStates = new Array(24).fill(false);

  step = (matchMedia('(hover:hover)').matches || matchMedia('(pointer:fine)').matches) ? 1: 5;

  textAlign(CENTER);
  fill(250, 250, 250);

}

function changeKeyboard() {
  let v = changeKeyboard.sel.value();
  if (v == 'qwerty'){
    keys = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221,
      65, 83, 68, 70, 71, 72, 74, 75, 76, [186, 59], [222, 190], [220, 188]];
  }

  else if (v == 'azerty'){
    keys = [65, 90, 69, 82, 84, 89, 85, 73, 79, 80, [160, 221], [164, 186],
        81, 83, 68, 70, 71, 72, 74, 75, 76, 77, [165, 192], [170, 220]];
  }
  if (step == 2){step++};
}

function draw() {
  switch (step) {
    case 1:
      clear();
      Text("selectionne le clavier de ton ordinateur :", x0, 15, 15);
      sel = createSelect();
      sel.position(x0 + 150, 25);
      sel.option("  ");
      sel.option("qwerty");
      //s.option("mac qwerty");
      sel.option("azerty");
      //s.option("mac azerty");

      //sel.disable("clavier");
      changeKeyboard.sel = sel;
      sel.changed(changeKeyboard);
      step ++;
      break;

    case 3:
      updateCircle();
      fill(200);
      Text("Utilise la première rangée de ton clavier\n pour jouer les 12 notes de l’octave plus grave, \n et la deuxième rangée pour jouer les 12 aigues. \n\n Tu peux jouer plusieurs notes en même temps !", x0, y0 - 30, 13);
      step++;
      break;

    case 4:
      for (i = 0; i < 24; i++) {
        // for every note in the 2 octaves
        if ([keys[i]].flat().some(k => keyIsDown(k))) {
          if (!(NoteStates[i])) {
            // if a key just have been pushed: start sound
            instrument[i].start();
            env.play(instrument[i]);
            NoteStates[i] = true;
            updateCircle();
          }
        } 
        else if (NoteStates[i]) {
          // if a key just have beend released: decrease sound volume
          instrument[i].amp(0, 0.1);
          NoteStates[i] = false;
          updateCircle();
        } else {
          // if a key have been released for a while: stop
          instrument[i].stop();
          NoteStates[i] = false;
        }
      }
      break;

  case 5:
      updateCircle();
      fill(200);
      Text("Clique sur l’écran pour jouer des notes \n\n Tu peux jouer plusieurs notes en même temps !", x0, y0 - 30, 13);
      step++;
      break;


  // display message. Click to continue
  case 6:
    if (touches.length > 0){step++}
    break;

  case 7:
    if (touches.length == 0){step++; updateCircle()}
    break;

  case 8:
    if (document.getElementById("explanation").clientWidth){
       instrument.forEach(i => i.stop());
      return
    }
    let inputs = new Array(12).fill(false);
    touches.forEach(t => {
      let a = atan2(t.x-x0, y0-t.y)+TAU;
      let i = round(a/TAU*12)%12;
      inputs[i] = true;
    });

    for (let i = 0; i < 12; i++) {
      // for every note in the 2 octaves
      if (inputs[i]) {
        if (!(NoteStates[i])) {
          // if a key just have been pushed: start sound
          instrument[i].start();
          env.play(instrument[i]);
          NoteStates[i] = true;
          updateCircle();
        }
      } 
      else if (NoteStates[i]) {
        // if a key just have beend released: decrease sound volume
        instrument[i].amp(0, 0.1);
        NoteStates[i] = false;
        updateCircle();
      } else {
        // if a key have been released for a while: stop
        instrument[i].stop();
        NoteStates[i] = false;
      }
    }
    break;
  }
}

px = ((a, c) => x0 + sin(a) * R * c);
py = ((a, c) => y0 - cos(a) * R * c);

function updateCircle() {
  clear();
  noFill();
  ellipse(x0, y0, R * 2, R*2);
  stroke(0);

  for (i = 0; i < 12; i++) {
    fill(150, 130, 200);
    angle = (i / 12 + 1 / 24) * TAU;
    line(px(angle, 0.9), py(angle, 0.9), px(angle, 1.1), py(angle, 1.1));
    text(noteNames[i], px(i / 12 * TAU, 1.1), py(i / 12 * TAU, 1.1));
  }

  Ni = 0;
  for (note = 0; note < 24; note++)
    if (NoteStates[note]) {
      if (note < 12) fill(100, 100, 200);
      else fill(200, 100, 100);

      a1 = (note % 12 / 12 + 1 / 40) * TAU;
      a2 = (note % 12 / 12 - 1 / 40) * TAU;
      quad(px(a1, 1.2), py(a1, 1.2),
        px(a2, 1.2), py(a2, 1.2),
        px(a2, 1.4), py(a2, 1.4),
        px(a1, 1.4), py(a1, 1.4));


      for (other = 0; other < 24; other++)
        if (NoteStates[other]) {

          iColor = intervals[1][(note - other + 24) % 12];

          if (iColor) {
            Ni++;
            diff = note - other;

            stroke(color(iColor));
            line(px(note / 12 * TAU, 0.9), py(note / 12 * TAU, 0.9),
              px(other / 12 * TAU, 0.9), py(other / 12 * TAU, 0.9));
            stroke(0);
          }
        }
    }
    if (Ni == 1) {
      fill(color(intervals[1][(diff + 24)%12]));
      string = intervals[0][(diff + 24)%12];

      x = floor(map(diff, -24, 24, -2, 2));
      if (x) string = string  + "\n(" +  str(x) + " octave)";

      Text(string, x0, H - 50, 15);
    }

}

