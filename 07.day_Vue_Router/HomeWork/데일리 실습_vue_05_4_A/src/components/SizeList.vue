<template>
  <div>
    <h1>2. 사이즈를 고르세요.</h1>
    <div class="size-list">
      <SizeListItem
        v-for="size in sizeList"
        :key="size.name" 
        :size="size"
        @click.native="onSelectMenu(size)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SizeListItem from '@/components/SizeListItem'

export default {
  name: 'SizeList',
  components: {
    SizeListItem,
  },
  methods: {
    ...mapMutations(['updateSizeList']),
    onSelectMenu(size) {
      this.updateSizeList(size)
    },
    // onSelectMenu: function (size) {
    //   this.$store.commit('updateSizeList', size)
    // },
  },
  computed: {
    ...mapState(['sizeList']),
    // sizeList: function () {
    //   return this.$store.state.sizeList
    // },
  },
}
</script>

<style>
</style>