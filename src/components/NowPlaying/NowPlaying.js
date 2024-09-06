import React, { useEffect, useState, useRef } from 'react';
import './nowPlaying.css'
import { Stack, Spinner } from '@chakra-ui/react';
import {AiOutlinePauseCircle} from 'react-icons/ai';
import {BiErrorCircle} from 'react-icons/bi'
import {HiOutlineStatusOffline} from 'react-icons/hi'
import soundbar from '../../assets/soundbar.gif'
import emptyAlbum from '../../assets/empty_album.png'

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [loading, setLoading] = useState(true);

  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

  // const [titleAnimationDuration, setTitleAnimationDuration] = useState(null);
  const [artistAnimationDuration, setArtistAnimationDuration] = useState(null);
  const [animationDuration, setAnimationDuration] = useState(null);
  
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const artistRef = useRef(null);

  const getAccessToken = async () => {
    const basic = btoa(`${client_id}:${client_secret}`);
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    const data = await response.json();
    return data.access_token;
  };

  useEffect(() => {
    const fetchNowPlayingItem = async () => {
      try {
        const accessToken = await getAccessToken();
        if (!accessToken) {
          setLoading(false);
          return;
        }

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 204 || response.status > 400) {
          setLoading(false);
          return;
        }

        if (titleRef.current && containerRef.current) {
          const titleWidth = titleRef.current.scrollWidth;
          const containerWidth = containerRef.current.clientWidth;
          
          if (titleWidth > containerWidth) {
            const scrollDistance = titleWidth - containerWidth;
            // console.log("Container" + containerWidth); 157
            // console.log("Title" + titleWidth); 171
            const baseSpeed = 100;
            const duration = scrollDistance / baseSpeed;
            
            setAnimationDuration(`${duration + 2}s`);
            // setShouldAnimate(true);
          } else {
            setAnimationDuration(null);
            // setShouldAnimate(false)
          }
        }

        else if (artistRef.current && containerRef.current) {
          const artistWidth = artistRef.current.scrollWidth;
          const containerWidth = containerRef.current.clientWidth;

          console.log(artistWidth)

          if (artistWidth > containerWidth) {
            const scrollDistance = artistWidth - containerWidth;
            // console.log("Container" + containerWidth); 157
            // console.log("Title" + titleWidth); 171
            const baseSpeed = 100;
            const duration = scrollDistance / baseSpeed;
            setArtistAnimationDuration(`${duration + 2}s`);
            // setShouldAnimate(true);
          } else {
            setArtistAnimationDuration(null);
            // setShouldAnimate(false)
          }
        }

        const song = await response.json();
        const nowPlayingData = {
          albumImageUrl: song.item.album.images[0].url,
          artist: song.item.artists.map((artist) => artist.name).join(', '),
          isPlaying: song.is_playing,
          songUrl: song.item.external_urls.spotify,
          title: song.item.name,
          timePlayed: song.progress_ms,
          timeTotal: song.item.duration_ms,
          artistUrl: song.item.album.artists[0].external_urls.spotify
        };

        setNowPlaying(nowPlayingData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching now playing song:', error);
        setLoading(false);
      }
    };

    setInterval(() => {
      fetchNowPlayingItem();
    }, 1000);

  }, []);

  let playerState = ''
  let secondsPlayed = 0, minutesPlayed = 0, secondsTotal = 0, minutesTotal = 0;
  let albumImageUrl = emptyAlbum
  let title = ''
  let artist = ''

  if (nowPlaying != null && nowPlaying.title) {

    //Used while displaing a sounbar/pause icon on the widget
    nowPlaying.isPlaying ? playerState = 'PLAY' : playerState = 'PAUSE'

    //Converting the playback duration from seconds to minutes and seconds
    secondsPlayed = Math.floor(nowPlaying.timePlayed/1000);
    minutesPlayed = Math.floor(secondsPlayed/60);
    secondsPlayed = secondsPlayed % 60;

    //Converting the song duration from seconds to minutes and seconds
    secondsTotal = Math.floor(nowPlaying.timeTotal/1000);
    minutesTotal = Math.floor(secondsTotal/60);
    secondsTotal = secondsTotal % 60;

    albumImageUrl = nowPlaying.albumImageUrl
    title = nowPlaying.title
    artist = nowPlaying.artist
  } else if (nowPlaying === 'Currently Not Playing') { //If the response returns this error message then we print the following text in the widget
    playerState = 'OFFLINE' 
    title = 'User is'
    artist = 'currently offline'
  } else { //If the response wasn't able to fetch anything then we display this
    let log = true
    playerState = 'OFFLINE' 
    title = 'User is'
    artist = 'currently offline'
    if (log) {
      console.log("FAILED TO FETCH SONG")
      log = false
    }

  }

  //Used to set 0 as padding when the it is a single digit number
  const pad = (n) =>{
    return (n < 10) ? ("0" + n) : n;
  }

  if (loading) {
    return (
      <Stack align="center" mb={8}>
        <Spinner size="lg" speed="0.6s" thickness="5px" color="gray.500" marginTop="20px"/>
      </Stack>
    );
  }

  return (
    //Depending on the value of playerState, the href, album image and icons are updated
    <a style={{textDecoration: 'none', color: 'black'}} href={playerState === 'PLAY' || playerState === 'PAUSE' ? nowPlaying.songUrl : ''}>
    <div className={"nowPlayingCard"}>
      {/* Albumn image and href displayed based on playerState */}
      <div className='nowPlayingImage'>
        {playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={nowPlaying.songUrl}><img src={albumImageUrl} alt="Album" /></a> : <img src={albumImageUrl} alt="Album" />}
      </div>
      <div ref={containerRef} id='nowPlayingDetails'>
        {/* Song Title displayed based on playerState */}
        <div 
          ref={titleRef}
          className={`nowPlayingTitle ${animationDuration ? 'marquee' : ''}`}
          style={{ animationDuration: animationDuration || '0s' }}>
          {playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={nowPlaying.songUrl}>{title}</a> : title}
        </div>
        
        {/* Artist displayed based on playerState */}
        <div 
          ref={artistRef}
          className={`nowPlayingArtist ${artistAnimationDuration ? 'marquee-artist' : ''}`}
          style={{ artistAnimationDuration: artistAnimationDuration || '0s' }}>
          {playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={nowPlaying.artistUrl}>{artist}</a> : artist}
        </div>
        
        {/* <div className={`nowPlayingArtist' ${animationDuration ? 'marquee' : ''}`}>
        {playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={nowPlaying.artistUrl}>{artist}</a> : artist}
        </div> */}
        {/* Song Timer displayed based on playerState */}
        <div className='nowPlayingTime'>{pad(minutesPlayed)}:{pad(secondsPlayed)} / {pad(minutesTotal)}:{pad(secondsTotal)}</div>
      </div>
      {/* Icon displayed based on playerState */}
      <div className='nowPlayingState'>
      {playerState === 'PLAY' ? <img alt='soundbar' src={soundbar} title='Now Listening'/> : 
      playerState === 'PAUSE' ? <AiOutlinePauseCircle size={40} /> : 
      playerState === 'OFFLINE' ? <HiOutlineStatusOffline size={40}/> : <BiErrorCircle size={40}/> }</div>
    </div>
    </a>
  );


}

export default NowPlaying;