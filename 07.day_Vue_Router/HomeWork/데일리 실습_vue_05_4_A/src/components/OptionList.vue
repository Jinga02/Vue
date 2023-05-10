<template>
  <div>
    <h1>3. 옵션을 고르세요.</h1>
    <ul class="option-list">
      <OptionListItem
        v-for="option in optionList"
        :key="option.name"
        :option="option"
        @increase="increase"
        @decrease="decrease"
      />
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import OptionListItem from '@/components/OptionListItem'

export default {
  name: 'OptionList',
  components: {
    OptionListItem,
  },
  computed: {
    ...mapState(['optionList']),
    // optionList: function () {
    //   return this.$store.state.optionList
    // },
  },
  methods: {
    ...mapMutations(['updateOptionList']),
    increase: function (option) {
      const newOption = {
        ...option,
        count: option.count + 1,
      }
      this.updateOptionList(newOption)
    },
    decrease: function (option) {
      const newOption = {
        ...option,
        count: option.count - 1,
      }
      this.updateOptionList(newOption)
    },

    // increase: function (option) {
    //   const newOption = {
    //     type: option.type,
    //     price: option.price,
    //     count: option.count + 1,
    //   }
    //   this.$store.commit('updateOptionList', newOption)
    // },
    // decrease: function (option) {
    //   const newOption = {
    //     type: option.type,
    //     price: option.price,
    //     count: option.count - 1,
    //   }
    //   this.$store.commit('updateOptionList', newOption)
    // },
  },
}
</script>

<style>
</style>