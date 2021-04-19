import { computed, watch } from 'vue';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const useLoginForm = () => {
    const store = useStore();
    const router = useRouter();
    const { handleSubmit, isSubmitting, submitCount } = useForm();
    // NOTE: Email
    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Пожалуйста введите email')
            .email('Необходимо ввести корректный email')
    );

    // NOTE: Password
    const MIN_LENGTH = 6;
    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Пожалуйста введите пароль')
            .min(MIN_LENGTH, `Пароль не может быть меньше ${MIN_LENGTH} символов`)
    );

    const onSubmit = handleSubmit(async values => {
        try {
            console.log(values);
            await store.dispatch('auth/login', values);
            router.push('/');
        } catch (e) {}
    });

    // NOTE: Computed
    const isTooManyAttempts = computed(() => submitCount.value >= 3);

    //    NOTE: Watch
    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => {
                submitCount.value = 0;
            }, 1500);
        }
    });

    return {
        email,
        eError,
        eBlur,
        password,
        pError,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts,
    };
};
