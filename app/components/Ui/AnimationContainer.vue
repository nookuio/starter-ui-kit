<script setup lang="ts">

interface Props {
    type?: 'fadeIn' | 'fadeOut' | 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown';
}

const props = withDefaults(defineProps<Props>(), {
    type: 'fadeIn'
})

const _classes = computed(() => {
    switch (props.type) {
        case 'slideLeft': return {
            enterFrom: 'translate-x-[-100%] opacity-0',
            enterActive: 'transition duration-150',
            leaveTo: 'translate-x-[-100%] opacity-0',
            leaveActive: 'transition duration-150'
        };
        case 'slideUp': return {
            enterFrom: 'translate-y-[100%] opacity-0',
            enterActive: 'transition duration-150',
            leaveTo: 'translate-y-[100%] opacity-0',
            leaveActive: 'transition duration-150'
        };
        case 'slideDown': return {
            enterFrom: 'translate-y-[-100%] opacity-0',
            enterActive: 'transition duration-150',
            leaveTo: 'translate-y-[-100%] opacity-0',
            leaveActive: 'transition duration-150'
        };
        case 'slideRight': return {
            enterFrom: 'translate-x-[100%] opacity-0',
            enterActive: 'transition duration-150',
            leaveTo: 'translate-x-[100%] opacity-0',
            leaveActive: 'transition duration-150'
        };
        case 'fadeIn': return {
            enterFrom: 'scale-75 opacity-0',
            enterActive: 'transition-all duration-150',
            leaveTo: 'scale-75 opacity-0',
            leaveActive: 'transition-all duration-150'
        };
        case 'fadeOut': return {
            enterFrom: 'scale-110 opacity-0',
            enterActive: 'transition-all duration-300',
            leaveTo: 'scale-110 opacity-0',
            leaveActive: 'transition-all duration-300'
        };
    }

})

</script>


<template>
    <transition :enter-from-class="_classes?.enterFrom" :enter-active-class="_classes?.enterActive" :leave-to-class="_classes?.leaveTo" :leave-active-class="_classes?.leaveActive">
        <slot></slot>
    </transition>
</template>