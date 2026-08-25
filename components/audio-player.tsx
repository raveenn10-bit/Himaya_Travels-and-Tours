"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";

interface AudioContextType {
  isPlaying: boolean;
  toggleSound: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  toggleSound: () => {},
});

export const useAmbientAudio = () => useContext(AudioContext);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userInteractedRef = useRef<boolean>(false);

  useEffect(() => {
    // Create audio instance once on mount
    const audio = new Audio("/Assets/Sound.wav");
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    // Subtle auto-start on first user interaction if enabled
    const handleFirstInteraction = () => {
      if (userInteractedRef.current) return;
      userInteractedRef.current = true;

      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay policy prevented immediate play, user can click button
          });
      }

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true, passive: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true, passive: true });

    // Handle tab visibility change
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;
      if (document.hidden) {
        if (!audioRef.current.paused) {
          audioRef.current.pause();
        }
      } else {
        if (userInteractedRef.current && isPlaying) {
          audioRef.current.play().catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      if (audioRef.current) {
        audio.removeEventListener("play", onPlay);
        audio.removeEventListener("pause", onPause);
        audio.removeEventListener("ended", onEnded);
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = useCallback(() => {
    userInteractedRef.current = true;
    if (!audioRef.current) {
      const audio = new Audio("/Assets/Sound.wav");
      audio.loop = true;
      audio.volume = 0.35;
      audioRef.current = audio;
    }

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio playback interrupted:", err);
          setIsPlaying(false);
        });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <AudioContext.Provider value={{ isPlaying, toggleSound }}>
      {children}
    </AudioContext.Provider>
  );
}