<template>
  <div
    v-show="tabs.primary"
    class="c-container flex px-4 py-6 mb-2 h-7 border-base-200"
  >
    <ul class="flex p-0 m-0 list-none border-gray-300 tabs border-b-1 primary">
      <li v-for="tab in tabs.primary" :key="tab.url" class="flex mr-4">
        <a
          :href="tab.url"
          class="flex items-center pb-2 leading-4 no-underline border-b-2 border-transparent text-base-content hover:text-primary-focus hover:border-primary-focus opacity-80 hover:opacity-100"
          :class="{ 'is-active': tab.active }"
          tabindex="-1"
        >
          <icon-view-dashboard v-if="tab.label === 'Layout'" width="1em" height="1em" />
          <icon-eye v-if="tab.label === 'View'" width="1em" height="1em" />
          <icon-pencil v-if="tab.label === 'Edit'" width="1em" height="1em" />
          <icon-delete v-if="tab.label === 'Delete'" width="1em" height="1em" />
          <icon-page-previous v-if="tab.label === 'Revisions'" width="1em" height="1em" />
          <span class="ml-1">{{ tab.label }}</span>
          <span v-if="tab.active" class="visually-hidden"> (active tab) </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import IconViewDashboard from '~icons/mdi/ViewDashboard'
import IconEye from '~icons/mdi/Eye'
import IconPencil from '~icons/mdi/Pencil'
import IconDelete from '~icons/mdi/Delete'
import IconPagePrevious from '~icons/mdi/PagePrevious'
export default {
  name: 'drupal-tabs',
  components: {
    IconViewDashboard,
    IconEye,
    IconPencil,
    IconDelete,
    IconPagePrevious,
  },
  props: {
    tabs: {
      type: [Array, Object],
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.tabs .visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
</style>
