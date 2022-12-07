<template>
  <div ref="audioPlayer" class="audio-player">
    <div ref="timeline" class="timeline">
      <div ref="progressBar" class="progress"></div>
    </div>
    <div class="controls">
      <div class="play-container">
        <div ref="playBtn" class="toggle-play play"></div>
      </div>
      <div class="time">
        <div ref="currentTime" class="current">0:00</div>
        <div class="divider">/</div>
        <div class="length"></div>
      </div>

      <!--     credit for icon to https://saeedalipoor.github.io/icono/ -->
      <div class="volume-container">
        <div class="volume-button">
          <div ref="volumeEl" class="volume icono-volumeMedium"></div>
        </div>

        <div ref="volumeSlider" class="volume-slider">
          <div class="volume-percentage"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
// Possible improvements:
// - Change timeline and volume slider into input sliders, reskinned
// - Change into Vue or React component
// - Be able to grab a custom title instead of "Music Song"
// - Hover over sliders to see preview of timestamp/volume change
const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});
const timeline = ref(null);
const audioPlayer = ref(null);
const currentTime = ref(null);
const volumeSlider = ref(null);
const progressBar = ref(null);
const playBtn = ref(null);
const volumeEl = ref(null);
onMounted(() => {
  const audio = new Audio(props.src);
  //credit for song: Adrian kreativaweb@gmail.com

  console.dir(audio);

  audio.addEventListener(
    "loadeddata",
    () => {
      audioPlayer.value.querySelector(".time .length").textContent =
        getTimeCodeFromNum(audio.duration);
      audio.volume = 0.75;
    },
    false
  );

  //click on timeline to skip around

  timeline.value.addEventListener(
    "click",
    (e) => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
      audio.currentTime = timeToSeek;
    },
    false
  );

  //click volume slider to change volume

  volumeSlider.value.addEventListener(
    "click",
    (e) => {
      const sliderWidth = window.getComputedStyle(volumeSlider).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      audio.volume = newVolume;
      audioPlayer.value.querySelector(
        ".controls .volume-percentage"
      ).style.width = newVolume * 100 + "%";
    },
    false
  );

  //check audio percentage and update time accordingly
  setInterval(() => {
    progressBar.value.style.width =
      (audio.currentTime / audio.duration) * 100 + "%";
    currentTime.value.textContent = getTimeCodeFromNum(audio.currentTime);
  }, 500);

  //toggle between playing and pausing on button click

  playBtn.value.addEventListener(
    "click",
    () => {
      if (audio.paused) {
        playBtn.value.classList.remove("play");
        playBtn.value.classList.add("pause");
        audio.play();
      } else {
        playBtn.value.classList.remove("pause");
        playBtn.value.classList.add("play");
        audio.pause();
      }
    },
    false
  );

  audioPlayer.value
    .querySelector(".volume-button")
    .addEventListener("click", () => {
      audio.muted = !audio.muted;
      if (audio.muted) {
        volumeEl.value.classList.remove("icono-volumeMedium");
        volumeEl.value.classList.add("icono-volumeMute");
      } else {
        volumeEl.value.classList.add("icono-volumeMedium");
        volumeEl.value.classList.remove("icono-volumeMute");
      }
    });

  //turn 128 seconds into 2:08
  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }
});
</script>

<style lang="scss" scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom right, #b968c5, skyblue);
}

.audio-player {
  height: 50px;
  width: 80%;

  font-family: arial;
  color: black;
  font-size: 0.75em;
  overflow: hidden;

  display: grid;
  grid-template-rows: 6px auto;
  .timeline {
    background: white;
    width: 100%;
    position: relative;
    cursor: pointer;
    box-shadow: 0 2px 10px 0 #0008;
    .progress {
      background: coral;
      width: 0%;
      height: 100%;
      transition: 0.25s;
    }
  }
  .controls {
    display: flex;

    align-items: stretch;
    padding: 0 20px;

    > * {
      display: flex;

      align-items: center;
    }
    .toggle-play {
      &.play {
        cursor: pointer;
        position: relative;
        left: 0;
        height: 0;
        width: 0;
        border: 7px solid #0000;
        border-left: 13px solid black;
        &:hover {
          transform: scale(1.1);
        }
      }
      &.pause {
        height: 15px;
        width: 20px;
        cursor: pointer;
        position: relative;
        &:before {
          position: absolute;
          top: 0;
          left: 0px;
          background: black;
          content: "";
          height: 15px;
          width: 3px;
        }
        &:after {
          position: absolute;
          top: 0;
          right: 8px;
          background: black;
          content: "";
          height: 15px;
          width: 3px;
        }
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .time {
      display: flex;

      > * {
        padding: 2px;
      }
    }
    .volume-container {
      cursor: pointer;
      .volume-button {
        height: 26px;
        display: flex;
        align-items: center;
        .volume {
          transform: scale(0.7);
        }
      }

      position: relative;
      z-index: 2;
      .volume-slider {
        position: absolute;
        left: -3px;
        top: 15px;
        z-index: -1;
        width: 0;
        height: 15px;
        background: white;
        box-shadow: 0 0 20px #000a;
        transition: 0.25s;
        .volume-percentage {
          background: coral;
          height: 100%;
          width: 75%;
        }
      }
      &:hover {
        .volume-slider {
          left: -123px;
          width: 120px;
        }
      }
    }
  }
}
</style>
