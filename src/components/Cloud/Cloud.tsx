import React, { useState } from 'react';
import { Synth as ToneSynth } from 'tone';
import * as Tone from 'tone';
import { getRandomNote } from '../../utils/SynthUtils';
import './Cloud.css';

const Cloud: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const playableSynth = new ToneSynth().toDestination();
    // setInterval(() => console.log(Tone.now()), 100);

    const handleClick = (): void => {
        setVisible(!visible);
        !visible && playTone();
    };

    const playTone = (): void => {
        const note: string = getRandomNote();
        console.log('NOTE', note);
        // playableSynth.triggerAttackRelease(note, '4n');

        new Tone.Loop(() => {
            playableSynth.triggerAttackRelease(note, '8n');
        }, '4n').start(0);
        Tone.Transport.start();
    };

    return (
        <div
            onClick={handleClick}
            className={visible ? 'cloud visible' : 'cloud'}
            onMouseOver={handleClick}
        />
    );
};

export default Cloud;
