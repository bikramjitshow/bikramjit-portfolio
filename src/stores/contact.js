import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
  state: () => ({
    form: {
      name: '',
      email: '',
      message: ''
    },
    error:'',
    success:'',
    submitted: false
  }),
  actions: {
    submitForm() {
      // No backend in this project; simulate a successful submission.
      console.log("SUBMIT FORM!")
      this.submitted = true
      console.log(this.form);
      setTimeout(() => {
        this.form = { name: '', email: '', message: '' }
        this.submitted = false
      }, 3000)
    }
  }
})
