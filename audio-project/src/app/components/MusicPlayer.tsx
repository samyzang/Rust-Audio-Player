
'use client'


import { invoke } from '@tauri-apps/api/core';
import { useSelectedLayoutSegment } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Song {
  title: string;
}

const MusicPlayer: React.FC = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(100);
    

    useEffect(() => {
        async function fetchSongs() {
            const songList : Song[] = await invoke('get_songs');
            setSongs(songList);
}
fetchSongs();
}, []);  

const playSong = async (song: Song) => {
    await invoke('play_song', {title: song.title});
    setCurrentSong(song);
    setIsPlaying(true);
};

const pauseSong = async () => {
    await invoke('pause_song');
    setIsPlaying(false);
};

const changeVolume = async (event:React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);
    const normalizedVolume = newVolume / 100;
    setVolume(newVolume);
    await invoke('set_volume', {vol: normalizedVolume});
};

return (
    
);
}

export default MusicPlayer;