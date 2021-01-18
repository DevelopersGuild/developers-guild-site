import { atom } from 'recoil'

const isCuratedVideoPlaying = atom({
    key: 'isCuratedVideoPlaying', 
    default: false,
});

const curatedVideoID = atom({
    key: 'curatedVideoID', 
    default: null, 
})

export {
    isCuratedVideoPlaying, 
    curatedVideoID
}