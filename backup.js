let whiteNotesContainer = document.querySelector('.white-notes-container');
let blackNotesContainer = document.querySelector('.black-notes-container');

let synth = new Tone.Synth().toDestination();

let notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
let sharpNotes = ['C#4', 'D#4', '', 'F#4', 'G#4', 'A#4'];

for (let i = 0; i < notes.length; i++) {
  let note = notes[i];
  key = document.createElement('div');
  key.classList.add('white-keys');
  whiteNotesContainer.appendChild(key);
  key.addEventListener('click', () => synth.triggerAttackRelease(note, '16n'));
}
for (let i = 0; i < sharpNotes.length; i++) {
  let sharpNote = sharpNotes[i];
  key = document.createElement('div');
  key.classList.add('black-keys');
  blackNotesContainer.appendChild(key);
  key.addEventListener('click', () => {
    synth.triggerAttackRelease(sharpNote, '16n');
  });
}
