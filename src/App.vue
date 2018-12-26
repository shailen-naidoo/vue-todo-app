<template>
  <v-app>
    <v-navigation-drawer
      app
      :mini-variant="mini"
      permanent
      hide-overlay
      class="yellow"
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon>dashboard</v-icon>
              </v-btn>
              <span>Dashboard</span>
            </v-tooltip>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon>done</v-icon>
              </v-btn>
              <span>Completed</span>
            </v-tooltip>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon>access_time</v-icon>
              </v-btn>
              <span>To be completed</span>
            </v-tooltip>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app flat color="grey lighten-5">
      <v-toolbar-title>Todo App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fill-height text-md-center text-sm-center text-xs-center>
        <v-layout fill-height justify-center align-center>
          <v-flex md6>
            <h1 class="headline font-weight-light">You have no todos, why don't you create a few</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-btn
      fab
      bottom
      right
      color="yellow"
      dark
      fixed
    >
      <v-icon color="black">add</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      mini: true
    }
  }
}
</script>
