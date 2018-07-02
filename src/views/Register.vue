<template>
  <div class="about">
    <h3 v-if="user">Usuário logado {{ user.email }}</h3>
    <div v-else>
      <h1>Cadastro de Usuário</h1>
      <form action="">
        <div class="form-group">
          <input type="text" class="form-control" v-model="userProfile.email" placeholder="E-mail">
        </div>
        <div class="form-grou">
          <input type="password" class="form-control" v-model="userProfile.password" placeholder="Senha">
        </div>
        <button type="button" class="btn btn-primary" 
          @click.prevent="register"
          :disabled="!userProfile.email && !userProfile.password">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
      userProfile: {
        email: '',
        password: '',
        name: 'Wesley Serafim',
        cpf: '08376758632',
        type: 2,
        gender: 'M',
        data_localization: {
          zip_code: '22783117',
          address: 'Estrada dos bandeirantes',
          number: '11609',
          complement: 'QDE LT 13 CS 1',
          neighborhood: 'Vargem Pequena',
          city: 'Rio de Janeiro',
          state: 'RJ'
        },
        creci: '',
        creci_uf: ''
      },
      error: {}
    }
  },
  computed: {
    user () {
      this.$store.getters.user
    }
  },
  methods: {
    register () {
      this.$store.dispatch('signUserUp', this.userProfile)
    },
 
  },
  
  mounted () {
  }
}
</script>

