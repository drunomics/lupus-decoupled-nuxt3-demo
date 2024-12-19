<template>
  <form
    :formId="formId"
    :method="method"
    v-bind="attributes"
    :action="useRoute().fullPath"
    class="drupal-form"
    ref="form"
  >
    <slot><div v-html="content" /></slot>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  formId: string
  attributes: object
  method: string
  content?: string
}>()

const form = ref(null)

const unlockForm = () => {
  const input = form.value?.querySelector('input[name="antibot_key"]');
  if (input) {
    input.value = props.attributes.dataAntibotKey.split("").reverse().join("").match(/.{1,2}/g).map((value) => value.split("").reverse().join("")).join("");
  }
}

if (props.attributes.dataAntibotKey) {
  onMounted(() => {
    form.value?.addEventListener('mousemove', function () {
      // Unlock the forms.
      unlockForm();
    });

    // Wait for a touch move event, indicating that they are human.
    form.value?.addEventListener('touchmove', function () {
      // Unlock the forms.
      unlockForm();
    });

    // A tab or enter key pressed can also indicate they are human.
    form.value?.addEventListener('keydown', function (e) {
      if ((e.code == 'Tab') || (e.code == 'Enter')) {
        // Unlock the forms.
        unlockForm();
      }
    });
  })

  onUnmounted(() => {
    form.value?.removeEventListener('mousemove');
    form.value?.removeEventListener('touchmove');
    form.value?.removeEventListener('keydown');
  })
}
</script>
