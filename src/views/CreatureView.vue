<template>
  <div class="creature">
    <h2>{{ creature.name }}</h2>
    <div>
      <MySpinner v-if="spinnerIsOn"/>
      <div class="media">
        <GrayButton @click="showPhotos">Photo</GrayButton>
        <PhotoModal v-if="photosDisplayed" :photos="creature.photo" @closingPhotos="closePhotos"/>
        <GrayButton @click="showVideo">Video</GrayButton>
        <VideoModal v-if="videoDisplayed" :video="creature.video" @closingVideo="closeVideo"/>
      </div>
      <ListOfParagraphs v-for="p in creature.text" :key="p">{{ p }}</ListOfParagraphs>
    </div>
  </div>
</template>

<script>
import MySpinner from '../components/MySpinner.vue'
import GrayButton from '../components/GrayButton.vue'
import PhotoModal from '../components/PhotoModal.vue'
import VideoModal from '../components/VideoModal.vue'
import ListOfParagraphs from '../components/ListOfParagraphs.vue'
import { serverUrl } from '../constants.js'

export default {
  name: 'CreatureView',
  components: {
    MySpinner,
    GrayButton,
    PhotoModal,
    VideoModal,
    ListOfParagraphs
  },
  data() {
    return {
      spinnerIsOn: true,
      creature: {},
      photosDisplayed: false,
      videoDisplayed: false
    }
  },
  created() {
    const id = this.$route.params.id

    fetch(`${serverUrl}/api/creature/${id}`)
    .then(response => response.json())
    .then(response => {
      this.creature = response
      let img = document.createElement('img')
      img.setAttribute('src', response.photo[0])
      img.setAttribute('alt', 'cover')
      img.style.maxWidth = '100%'
      const media = document.querySelector('.media')
      media.prepend(img)
      this.spinnerIsOn = false
    })
  },
  methods: {
    showPhotos() {
      this.photosDisplayed = true
    },
    closePhotos() {
      this.photosDisplayed = false
    },
    showVideo() {
      this.videoDisplayed = true
    },
    closeVideo() {
      this.videoDisplayed = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/extends';

  .creature {
    @extend %big-bottom-wrapper;
  }
  .media {
    width: 57%;
    float: left;
    margin-right: calc(4px + 1vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>