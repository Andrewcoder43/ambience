import React, { useEffect, useState } from 'react';
import Sound from 'react-native-sound';

const SoundComponent = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [sounds, setSounds] = useState([]);

    useEffect(() => {
        // Create new sound instances
        const newSounds = [
            new Sound('Ambience/assets/Sounds/BeachWaves.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('Error loading sound 1: ', error);
                }
            }),
            new Sound('Ambience/assets/Sounds/Fireplace.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('Error loading sound 2: ', error);
                }
            }),
            new Sound('Ambience/assets/Sounds/Rain.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('Error loading sound 3: ', error);
                }
            }),
            new Sound('Ambience/assets/Sounds/Thunder.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('Error loading sound 4: ', error);
                }
            }),
            new Sound('Ambience/assets/Sounds/Wind.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('Error loading sound 5: ', error);
                }
            }),
        ];

        setSounds(newSounds);

        // Clean up the sound instances when the component unmounts
        return () => {
            newSounds.forEach((sound) => sound.release());
        };
    }, []);

    const toggleSound = (index) => {
        if (sounds[index]) {
            if (isPlaying) {
                sounds[index].pause();
            } else {
                sounds[index].play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            <button onClick={() => toggleSound(0)}>
                {isPlaying ? 'Pause Sound 1' : 'Play Sound 1'}
            </button>
            <button onClick={() => toggleSound(1)}>
                {isPlaying ? 'Pause Sound 2' : 'Play Sound 2'}
            </button>
            <button onClick={() => toggleSound(2)}>
                {isPlaying ? 'Pause Sound 3' : 'Play Sound 3'}
            </button>
            <button onClick={() => toggleSound(3)}>
                {isPlaying ? 'Pause Sound 4' : 'Play Sound 4'}
            </button>
            <button onClick={() => toggleSound(4)}>
                {isPlaying ? 'Pause Sound 5' : 'Play Sound 5'}
            </button>
        </div>
    );
};

export default SoundComponent;
