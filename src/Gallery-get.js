import blackmirror from './images/blackMirror.jpeg';
import breakingBad from './images/breakingBad.jpeg';
import deathNote from './images/deathNote.jpeg';
import gameOfTrones from './images/fameOfThrones.jpeg';
import walkingDead from './images/walkingDead.jpeg';
import theWire from './images/theWire.jpeg';

export default function getGallery() {
	return [
		{ id: 'blackMirror', name: 'Black Mirror', logo: blackmirror },
		{ id: 'breakingBad', name: 'Breaking Bad', logo: breakingBad },
		{ id: 'deathNote', name: 'Deadh Note', logo: deathNote },
		{ id: 'gameOfTrones', name: 'Game of Thrones', logo: gameOfTrones },
		{ id: 'walkingDead', name: 'The Walking Dead', logo: walkingDead },
		{ id: 'theWire', name: 'The Wire', logo: theWire }
	];
}