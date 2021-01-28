<template lang="html">
    <modal ref="modal">
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input v-model="form.title" type="text" class="form-input">
            </div>
            <div class="form-control">
                <label class="label">Description</label>
                <textarea v-model="form.description" type="text" class="form-input" cols="30" rows="5"></textarea>
            </div>
            <div class="app-error">
                <div class="form-error">
                    {{formError}}
                </div>
            </div>
            <button @click="submitForm" type="button" class="app-button is-primary is-medium">Confirm</button>
        </form>
    </modal>
</template>

<script>
import Modal from '@/components/Modal'
export default {
    components: {
        Modal,
    },
    data() {
        return {
            form: {
                title: '',
                description: ''
            },
            formError: '',
        }
    },
    computed: {
        isFormValid() {
            return this.form.title.length > 8 && this.form.description.length > 10 ? true : false;
        },
        modal() {
            return this.$refs.modal;
        }
    },
    methods: {
        submitForm() {
            if (this.isFormValid) {
                this.formError = '';
                this.$emit('formSubmitted', {
                    ...this.form
                });
                this.resetForm();
            } else {
                this.formError = 'Form validation error! Title should be longer than 8 characters, and description 10!';
            }
        },
        resetForm() {
            this.form.title = '';
            this.form.description = '';
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
