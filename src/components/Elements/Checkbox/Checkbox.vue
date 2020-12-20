<template>
  <div class="checkbox-wrapper">
    <input class="checkbox" :id="id" type="checkbox" :name="value" :checked="isChecked">
    <label :class="{'label--checked': isChecked}" @click="handleCheckboxClick" class="label" :for="id">{{ value }}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCheckboxClick() {
      this.$emit('input-checked', {id: this.id, checked: !this.isChecked});
    }
  }
};
</script>

<style scoped>
.checkbox {
  display: none;
}

.label {
  position: relative;
  padding-left: 23px;
  color: #C4C4C4;
  cursor: pointer;
  user-select: none;
}

.label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto 0;
  width: 15px;
  height: 15px;
  border: 1px solid #C4C4C4;
}

.label--checked::before {
  background-color: rgba(255, 82, 82, 0.98);
  background-image: url("../../../assets/img/checked.svg");
  background-repeat: no-repeat;
  background-position: center;
  border-color: rgba(255, 82, 82, 0.98);
}
</style>
