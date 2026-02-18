<template>
  <section class="relative">
    <!-- HERO -->
    <!-- <div class="max-w-7xl mx-auto px-6 py-24 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-primeBlue mb-4">Get in Touch</h1>
      <p class="max-w-2xl mx-auto text-gray-600 text-lg">
        We’d love to hear from you. Reach out for inquiries, partnerships, or
        support.
      </p>
    </div> -->
    <section class="bg-gray-100 text-white">
      <div class="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-primeBlue mb-4">
          Get in Touch
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          We’d love to hear from you. Reach out for inquiries, partnerships, or
          support.
        </p>
      </div>
    </section>

    <!-- CONTACT CARD -->
    <div class="relative max-w-6xl mx-auto mt-10 px-6 pb-24">
      <div
        class="grid grid-cols-1 md:grid-cols-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg overflow-hidden"
      >
        <!-- LEFT INFO -->
        <div class="p-10 md:p-14 space-y-8">
          <h2 class="text-2xl md:text-3xl font-semibold">Contact Information</h2>
          <p class="text-gray-600">
            Fill up the form and our team will get back to you within 24 hours.
          </p>

          <div class="space-y-6">
            <!-- PHONE -->
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"
              >
                📞
              </div>
              <div>
                <p class="font-medium">Phone</p>
                <p class="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <!-- EMAIL -->
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"
              >
                ✉️
              </div>
              <div>
                <p class="font-medium">Email</p>
                <p class="text-gray-600">prime.jmn@gmail.com</p>
              </div>
            </div>

            <!-- ADDRESS -->
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"
              >
                📍
              </div>
              <div>
                <p class="font-medium">Address</p>
                <p class="text-gray-600">Jamnagar, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT FORM -->
        <div class="bg-white p-10 md:p-14 text-gray-800">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2">First Name</label>
                <input
                  v-model="formData.firstName"
                  type="text"
                  placeholder="John"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Last Name</label>
                <input
                  v-model="formData.lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input
                v-model="formData.email"
                type="email"
                placeholder="you@example.com"
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Message</label>
              <textarea
                v-model="formData.message"
                rows="5"
                placeholder="Write your message..."
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSending"
              class="w-full bg-primeBlue text-white py-4 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {{ isSending ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import emailjs from '@emailjs/browser';

  const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const isSending = ref(false);

  async function handleSubmit() {
    isSending.value = true;
    try {
      const result = await emailjs.send(
        'service_toxkzo4',
        'template_vswzt9y',
        {
          from_name: `${formData.value.firstName} ${formData.value.lastName}`,
          from_email: formData.value.email,
          message: formData.value.message,
          to_name: 'Prime Sanitary',
          title: "Contact Mail"
        },
        'xpRxOX5KAHiR9SqM8' 
      );
      
      console.log('SUCCESS!', result.status, result.text);
      
      // Reset form
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      };
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again.');
    } finally {
      isSending.value = false;
    }
  }
</script>


<style lang="scss" scoped></style>
