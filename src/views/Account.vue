<script setup>
import { supabase } from '../../supabase'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const email = ref('')
const profile_picture = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    // const { users } = session.value

    const { data, error, status } = supabase
      .from('users')
      .select(`username, email, profile_picture`)
      .eq('user_id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      email.value = data.email
      profile_picture.value = data.profile_picture
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true
    // const { users } = session.value

    const updates = {
      user_id: user.id,
      username: username.value,
      email: email.value,
      profile_picture: profile_picture.value,
      updated_at: new Date(),
    }

    const { error } = supabase.from('users').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <!-- Navigation bar and search section -->
    <nav class="navbar navbar-expand-lg" style="background-color: #f05023;">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:3000/">University Marketplace</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Field of Study</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/account">Supplies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>Hello this account</div>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" v-model="profile_picture"  />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="url" v-model="email" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>