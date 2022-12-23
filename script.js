let whiteNotesContainer = document.querySelector('.white-notes-container');
let blackNotesContainer = document.querySelector('.black-notes-container');

let synth = new Tone.Synth().toDestination();

let notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

for (let i = 0; i < notes.length; i++) {
  let hasSharp = true;
  let note = notes[i];
  if (note === 'E' || note === 'B') {
    hasSharp = false;
  }
  key = document.createElement('div');
  key.classList.add('white-keys');
  whiteNotesContainer.appendChild(key);
  key.addEventListener('click', () => {
    console.log(note);
    synth.triggerAttackRelease(note + '4', '16n');
  });
}
