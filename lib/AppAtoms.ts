import { atom } from 'recoil'

export const isCuratedVideoPlayingAtom = atom({
    key: 'isCuratedVideoPlaying', 
    default: false,
});

export const curatedVideoInfoAtom = atom({
    key: 'curatedVideoID', 
    default: null, 
})
