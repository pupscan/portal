<template>
    <div class="contact-box center-version">
        <a :href="url + '?token='+ token()" class="card">
            <div class="img-circle picto" :style="{'background-color': iconColor}">
                <i class="fa" :class="icon"></i>
            </div>
            <h3 class="title"><strong>{{ title }}</strong></h3>
        </a>
        <div class="contact-box-footer text-center">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
  import auth from '../authentication'

  export default {
    name: 'Card',
    props: ['icon', 'iconColor', 'title', 'description', 'url'],
    methods: {
      token: () => auth.token()
    }
  }
</script>

<style lang="scss">
    .card {
        height: 200px;

        .picto {
            color: #ffffff;
            font-size: 45px;
            height: 100px;
            line-height: 100px;
            width: 100px;
            text-align: center;
            margin: auto auto 15px;
        }

        .title {
            margin-bottom: 30px;
        }
    }
</style>