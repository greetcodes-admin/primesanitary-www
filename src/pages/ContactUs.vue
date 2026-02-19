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

    <!-- TOAST NOTIFICATION -->
    <Transition name="toast">
      <div v-if="toast.visible" 
        class="fixed bottom-8 right-8 z-[9999] px-6 py-3 rounded-xl backdrop-blur-md shadow-2xl border flex items-center gap-3 min-w-[320px]"
        :class="toast.type === 'success' ? 'bg-green-500/20 border-green-500/30 text-green-100' : 'bg-red-500/20 border-red-500/30 text-red-100'">
        <span class="text-xl">{{ toast.type === 'success' ? '✅' : '❌' }}</span>
        <p class="font-medium text-black">{{ toast.message }}</p>
      </div>
    </Transition>

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
                  class="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  :class="errors.firstName ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.firstName" class="mt-1 text-xs text-red-500">{{ errors.firstName }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Last Name</label>
                <input
                  v-model="formData.lastName"
                  type="text"
                  placeholder="Doe"
                  class="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  :class="errors.lastName ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.lastName" class="mt-1 text-xs text-red-500">{{ errors.lastName }}</p>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input
                v-model="formData.email"
                type="email"
                placeholder="you@example.com"
                class="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                :class="errors.email ? 'border-red-500' : 'border-gray-300'"
              />
              <p v-if="errors.email" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Message</label>
              <textarea
                v-model="formData.message"
                rows="5"
                placeholder="Write your message..."
                class="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                :class="errors.message ? 'border-red-500' : 'border-gray-300'"
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-xs text-red-500">{{ errors.message }}</p>
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

  const errors = ref({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const isSending = ref(false);

  const toast = ref({
    visible: false,
    message: '',
    type: 'success'
  });

  function showToast(message, type = 'success') {
    toast.value = { visible: true, message, type };
    setTimeout(() => {
      toast.value.visible = false;
    }, 3000);
  }

  function validateForm() {
    let isValid = true;
    errors.value = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };

    if (!formData.value.firstName.trim()) {
      errors.value.firstName = 'First name is required';
      isValid = false;
    } else if (formData.value.firstName.length < 2) {
      errors.value.firstName = 'First name must be at least 2 characters';
      isValid = false;
    }

    if (!formData.value.lastName.trim()) {
      errors.value.lastName = 'Last name is required';
      isValid = false;
    } else if (formData.value.lastName.length < 2) {
      errors.value.lastName = 'Last name must be at least 2 characters';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.value.email.trim()) {
      errors.value.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(formData.value.email)) {
      errors.value.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.value.message.trim()) {
      errors.value.message = 'Message is required';
      isValid = false;
    } else if (formData.value.message.length < 10) {
      errors.value.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    return isValid;
  }

  async function handleSubmit() {
    if (!validateForm()) return;

    isSending.value = true;
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: `${formData.value.firstName} ${formData.value.lastName}`,
          email: formData.value.email,
          message: formData.value.message,
          title: "Contact Mail"
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log('SUCCESS!', result.status, result.text);
      showToast('Email sent successfully!', 'success');
      
      // Reset form
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      };
    } catch (error) {
      console.error('FAILED...', error);
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      isSending.value = false;
    }
  }
</script>


<style lang="scss" scoped>
  .toast-enter-active,
  .toast-leave-active {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .toast-enter-from {
    opacity: 0;
    transform: translateX(20px);
  }

  .toast-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
</style>
