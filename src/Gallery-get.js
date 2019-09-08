import blackmirror from './images/blackMirror.jpeg';
import breakingBad from './images/breakingBad.jpeg';
import deathNote from './images/deathNote.jpeg';
import gameOfTrones from './images/fameOfThrones.jpeg';
import walkingDead from './images/walkingDead.jpeg';
import theWire from './images/theWire.jpeg';

export default function getGallery() {
	return [
		{ id: 'blackMirror', name: 'Black Mirror', logo: blackmirror },
		{ id: 'breakingBad', name: 'Breaking Bad', logo: breakingBad, details: 'Mild-mannered high school chemistry teacher Walter White thinks his life cannot get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer. Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels.' },
		{ id: 'deathNote', name: 'Deadh Note', logo: deathNote },
		{ id: 'gameOfTrones', name: 'Game of Thrones', logo: gameOfTrones },
		{ id: 'walkingDead', name: 'The Walking Dead', logo: walkingDead },
		{ id: 'theWire', name: 'The Wire', logo: theWire }
	];
}