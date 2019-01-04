export default {
  data() {
    return {
      colors: ["red","blue","blue lighten-2","purple","yellow","orange","green","grey"],
      navigation_list_icons: [
        {
          icon: "dashboard",
          tooltip: "Dashboard"
        },
        {
          icon: "done",
          tooltip: "Completed"
        },
        {
          icon: "access_time",
          tooltip: "To be completed"
        }
      ],
      mini: true,
      show_create_todo: false
    }
  }
}