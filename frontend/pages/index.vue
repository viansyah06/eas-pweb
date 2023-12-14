<template>
    <div class="container">
      <h1>Form Registrasi Lomba</h1>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="nama">Nama</label>
          <input type="text" class="form-control" id="nama" v-model="nama">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="asal-sekolah">Asal Sekolah</label>
          <input type="text" class="form-control" id="asal-sekolah" v-model="asalSekolah">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
<script>
export default {
  data () {
    return {
      nama: '',
      email: '',
      asalSekolah: ''
    }
  },
  methods: {
    submit () {
      // Buat payload data
      const payload = {
        nama: this.Nama,
        email: this.Email,
        asalSekolah: this.Asal_Sekolah
      };

      // Kirim payload ke CMS
      this.$axios.post('http://localhost:8080/admin/collections/lomba/create', payload).then(() => {
        // Tampilkan pesan sukses
        this.$toast.success('Registrasi berhasil');
      }).catch(() => {
        // Tampilkan pesan error
        this.$toast.error('Terjadi kesalahan');
      });
    }
  }
}
</script>
<style>
    
</style>