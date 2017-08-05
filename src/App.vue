<template>
    <div id="wrapper">

        <div id="page-wrapper" class="gray-bg">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-md-2">
                        <card icon="fa-sticky-note-o"
                              icon-color="#f0ad4e"
                              title="Ticket"
                              description="Dasboard of ZenDesk tickets"
                              url="https://ticket.pupscan.com"></card>
                    </div>
                    <div class="col-md-2">
                        <card icon="fa-address-book-o"
                              icon-color="#d9534f"
                              title="Client"
                              description="Contacts book from ZenDesk"
                              url="https://client.pupscan.com"></card>
                    </div>
                    <div class="col-md-2">
                        <card icon="fa-line-chart"
                              icon-color="#1c84c6"
                              title="Metric"
                              description="Crowdfunding and social metrics"
                              url="https://metric.pupscan.com"></card>
                    </div>
                    <div class="col-md-2">
                        <card icon="fa-qrcode"
                              icon-color="#5cb85c"
                              title="Install"
                              description="PUP installation and configuration"
                              url="https://config.pupscan.com"></card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Card from './components/Card.vue'

  export default {
    name: 'app',
    components: {
      Card
    }
  }
</script>