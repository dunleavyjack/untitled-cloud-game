import { synthNotes } from './SynthNotes';

export const getRandomNote = (): string => {
    const randomIndex = Math.floor(Math.random() * synthNotes.length);
    console.log(randomIndex);
    return synthNotes[randomIndex];
};
