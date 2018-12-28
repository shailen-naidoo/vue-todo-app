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
              <v-btn 
                slot="activator" 
                icon
              >
                <v-icon>dashboard</v-icon>
              </v-btn>
              <span>Dashboard</span>
            </v-tooltip>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn 
                slot="activator" 
                icon
              >
                <v-icon>done</v-icon>
              </v-btn>
              <span>Completed</span>
            </v-tooltip>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn 
                slot="activator" 
                icon
              >
                <v-icon>access_time</v-icon>
              </v-btn>
              <span>To be completed</span>
            </v-tooltip>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      app 
      flat 
      color="grey lighten-5"
    >
      <v-toolbar-title>Todo App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container 
        fill-height 
        grid-list-md
      >
        <v-layout 
          v-if="todos.length" 
          fill-height 
          justify-center
        >
          <v-flex 
            md4
            v-for="(todo,i) in todos" 
            :key="i"
          >
            <v-card :color="todo.color">
              <v-card-text>
                <p 
                  class="font-weight-light" 
                  :class="{ 'display-3': !todo.description, 'headline': todo.description }"
                >{{ todo.title }}</p>
                <p class="body-1">{{ todo.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-tooltip bottom>
                  <v-btn 
                    slot="activator" 
                    icon 
                    @click="removeTodo(i)"
                  >
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <span>Remove</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout 
          v-else 
          fill-height 
          justify-center 
          align-start
        >
          <v-flex md6>
            <h1 class="headline font-weight-light">You have no todos, why don't you create a few</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-tooltip left>
      <v-btn
        slot="activator"
        fab
        bottom
        right
        color="yellow"
        dark
        fixed
        @click="show_create_todo = !show_create_todo"
      >
        <v-icon color="black">add</v-icon>
      </v-btn>
      <span>Create todo</span>
    </v-tooltip>
    <v-dialog 
      v-model="show_create_todo" 
      max-width="400px"
    >
      <v-card>
        <v-card-text>
          <v-text-field 
            solo 
            flat 
            placeholder="Title" 
            v-model="todo.title" 
          ></v-text-field>
          <v-textarea 
            auto-grow 
            solo 
            flat 
            placeholder="Description (optional)" 
            v-model="todo.description">
          </v-textarea>
          <v-subheader class="pl-1">Color</v-subheader>
          <v-btn 
            icon 
            small 
            v-for="(color,i) in colors" 
            @click="todo.color = color" 
            :key="i"
            :color="color" 
          >
            <v-icon 
              small 
              v-if="todo.color === color"
            >done</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            flat 
            small 
            @click="saveTodo()" 
            :disabled="!todo.title"
          >save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  data() {
    return {
      todo: {
        title: null,
        description: null,
        color: null
      },
      todos: [],
      colors: ["red","blue","blue lighten-2","purple","yellow","orange","green","grey"],
      mini: true,
      show_create_todo: false
    }
  },
  methods: {
    resetTodo() {
      this.show_create_todo = false;
      this.todo.title = null;
      this.todo.description = null;
      this.todo.color = null;
    },
    saveTodo() {
      this.todos.push(cloneDeep(this.todo));
      this.resetTodo();
    },
    removeTodo(pos) {
      this.todos.splice(pos,1);
    }
  }
}
</script>
