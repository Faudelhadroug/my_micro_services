<template>
  <v-container class="fluid home">
    <v-row>
      <v-col>
        <h2>Register</h2>
      </v-col>
    </v-row>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>

          <v-btn
            color="teal"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>
        </v-form>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {
      validate () {
        this.$refs.form.validate()
      },
  }
}
</script>
