<script setup lang="ts">
interface Props {
  loading?: boolean;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  submit: [
    {
      type: 'signIn' | 'signUp' | 'forgotPassword';
      data: {
        email?: string;
        password?: string;
        first_name?: string;
        last_name?: string;
      };
    },
  ];
}>();

const currentView = ref<'signIn' | 'signUp' | 'forgotPassword'>('signUp');

const slate = ref({ first_name: '', last_name: '', email: '', password: '' });
</script>

<template>
  <div
    class="flex p-2 rounded-lg border border-neutral-200 flex-col gap-y-5 text-neutral-700 bg-white w-[400px] dark:text-neutral-300 dark:border-[#26262600] dark:bg-neutral-950"
  >
    <div class="flex flex-col gap-y-1">
      <h2 class="text-2xl font-bold text-neutral-950 dark:text-white">
        {{
          currentView === 'signIn'
            ? 'Welcome Back'
            : currentView === 'signUp'
              ? 'Get Started'
              : 'Reset Password'
        }}
      </h2>
      <p class="text-[13px]">
        {{
          currentView === 'signIn'
            ? 'Sign in to your account'
            : currentView === 'signUp'
              ? 'Create a new account'
              : 'Enter your email to reset your password'
        }}
      </p>
    </div>
    <div class="flex flex-col gap-y-2" v-if="currentView !== 'forgotPassword'">
      <UiButton
        class="w-full"
        variant="outline"
        label="Continue with Github"
        left-icon="carbon:logo-github"
      /><UiButton
        class="w-full"
        variant="outline"
        label="Continue with Google"
        left-icon="carbon:logo-google"
      />
    </div>
    <div
      class="flex h-10 items-center justify-center relative"
      v-if="currentView !== 'forgotPassword'"
    >
      <span
        class="w-full h-px bg-neutral-200 absolute top-[22px] dark:bg-neutral-800"
      ></span
      ><span class="text-xs z-10 p-1 bg-white dark:bg-neutral-950">or</span>
    </div>
    <div class="flex flex-col gap-y-2">
      <form
        class="ml-auto mr-auto w-full flex flex-col gap-y-2.5"
        v-if="currentView === 'signUp'"
        id="sign-up-form"
      >
        <div class="flex gap-x-2">
          <div class="flex w-1/2 flex-col">
            <label class="block mb-2 text-xs font-medium" for="first-name"
              >First name</label
            ><UiInput
              placeholder="First name"
              v-model:value="slate.first_name"
            />
          </div>
          <div class="flex w-1/2 flex-col">
            <label class="block mb-2 text-xs font-medium" for="last-name"
              >Last name</label
            ><UiInput placeholder="Last name" v-model:value="slate.last_name" />
          </div>
        </div>
        <div class="flex flex-col">
          <label class="block mb-2 text-xs font-medium" for="email">Email</label
          ><UiInput
            placeholder="you@example.com"
            type="email"
            v-model:value="slate.email"
            icon="carbon:email"
          />
        </div>
        <div class="flex flex-col">
          <label class="block mb-2 text-xs font-medium" for="password"
            >Password</label
          ><UiInput
            placeholder="••••••••"
            type="password"
            v-model:value="slate.password"
            icon="carbon:password"
          />
        </div>
        <UiButton
          label="Sign Up"
          :loading="props?.loading"
          right-icon="carbon:direction-straight-right"
          @click="emits('submit', { type: 'signUp', data: slate })"
        />
      </form>
      <form
        class="ml-auto mr-auto w-full flex flex-col gap-y-2.5"
        v-if="currentView === 'signIn'"
        id="sign-in-form"
      >
        <div class="flex flex-col">
          <label class="block mb-2 text-xs font-medium" for="email">Email</label
          ><UiInput
            placeholder="you@example.com"
            v-model:value="slate.email"
            icon="carbon:email"
          />
        </div>
        <div class="flex flex-col">
          <div class="flex items-center justify-between">
            <label class="block mb-2 text-xs font-medium" for="password"
              >Password</label
            ><span
              class="text-neutral-600 cursor-pointer text-xs dark:text-neutral-400 hover:text-neutral-800 hover:underline dark:hover:text-neutral-100"
              @click="currentView = 'forgotPassword'"
            >
              Forgot password?
            </span>
          </div>
          <UiInput
            placeholder="••••••••"
            type="password"
            v-model:value="slate.password"
            icon="carbon:password"
          />
        </div>
        <UiButton
          label="Sign In"
          :loading="props?.loading"
          right-icon="carbon:direction-straight-right"
          @click="emits('submit', { type: 'signIn', data: slate })"
        />
      </form>
      <form
        class="ml-auto mr-auto w-full flex flex-col gap-y-2.5"
        v-if="currentView === 'forgotPassword'"
        id="forgot-password-form"
      >
        <div class="flex flex-col">
          <label class="block mb-2 text-xs font-medium" for="email">Email</label
          ><UiInput
            placeholder="you@example.com"
            type="email"
            v-model:value="slate.email"
            icon="carbon:email"
          />
        </div>
        <UiButton
          label="Send Reset Link"
          :loading="props?.loading"
          right-icon="carbon:direction-straight-right"
          @click="emits('submit', { type: 'forgotPassword', data: slate })"
        />
      </form>
    </div>
    <div class="flex text-xs font-medium justify-center gap-x-1">
      <span class="text-neutral-500 dark:text-neutral-400">{{
        currentView === 'forgotPassword'
          ? 'Remember your password?'
          : currentView === 'signUp'
            ? 'Already have an account?'
            : `Don't have an account?`
      }}</span
      ><span
        class="text-neutral-900 underline cursor-pointer dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300"
        v-if="currentView === 'signIn'"
        @click="currentView = 'signUp'"
      >
        Sign up now </span
      ><span
        class="text-neutral-900 underline cursor-pointer dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300"
        v-if="currentView === 'signUp' || currentView === 'forgotPassword'"
        @click="currentView = 'signIn'"
      >
        Sign in now
      </span>
    </div>
  </div>
</template>
