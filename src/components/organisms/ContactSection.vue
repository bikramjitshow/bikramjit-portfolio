<template>
  <section class="contact">
    <div class="contact__inner">
      <div class="contact__info">
        <BaseBadge variant="accent">GET IN TOUCH</BaseBadge>
        <h1 class="contact__title">{{ data.heading }}</h1>
        <p class="contact__desc">{{ data.description }}</p>
        <BaseBadge variant="dot">{{ data.availability }}</BaseBadge>

        <div class="contact__list">
          <ContactInfoItem label="Email" :value="data.email" :href="`mailto:${data.email}`" glyph="&#9993;" />
          <ContactInfoItem label="LinkedIn" :value="data.linkedin" :href="`https://${data.linkedin}`" glyph="in" />
          <ContactInfoItem label="GitHub" :value="data.github" :href="`https://${data.github}`" glyph="&#9827;" />
        </div>
      </div>

      <form class="contact__form" @submit.prevent="handleSubmit">
        <BaseInput v-model="contactStore.form.name" label="Name" placeholder="Your name" />
        <BaseInput v-model="contactStore.form.email" label="Email" type="email" placeholder="Your email" />
        <BaseInput v-model="contactStore.form.message" label="Message" placeholder="Your message..." multiline />
        <BaseButton type="submit" variant="primary">
          {{ contactStore.submitted ? 'Message Sent' : 'Send Message' }}
          <template #icon-right>&rarr;</template>
        </BaseButton>
        <p class="contact__form-error-message" v-if="contactStore.error">{{ contactStore?.error }}</p>
        <p class="contact__form-success-message" v-if="contactStore.success">{{ contactStore?.success }}</p>
        <p class="contact__form-note">{{ data.formNote }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import ContactInfoItem from '@/components/molecules/ContactInfoItem.vue'
import data from '@/data/contact.json'
import { useContactStore } from '@/stores/contact'

const contactStore = useContactStore()

function handleSubmit() {
  const { error, success } = contactStore;
  const { name, email, message } = contactStore.form;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    console.log("Please fill in all fields");
    contactStore.error = "Please fill in all fields";
    return;
  } else {
    console.log("Form Submitted Successfully");
    contactStore.success = "Form Submitted Successfully";
    // contactStore.submitForm()
    console.log("SUBMIT CLicked!")
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.contact {
  @include m.section-spacing;

  &__inner {
    @include m.container;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: v.$space-7;

    @include m.respond(lg) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    font-size: v.$fs-2xl;
    margin: v.$space-4 0 v.$space-4;
  }

  &__desc {
    font-size: v.$fs-sm;
    margin-bottom: v.$space-4;
  }

  &__list {
    margin-top: v.$space-6;
  }

  &__form {
    @include m.card;
    padding: v.$space-5;
    display: flex;
    flex-direction: column;
    gap: v.$space-4;

    &-note {
      font-size: v.$fs-xs;
      color: v.$color-text-muted;
      text-align: right;
    }
  }
}
</style>
