export default {
  methods: {
    openMenu(target) {
      const burger = document.getElementById(`${target}-menu-icon`)
      const menu = document.getElementById(`${target}-nav`)

      // Toggle the class on both the clicked burger and its menu
      burger.classList.toggle("is-active")
      menu.classList.toggle("is-active")
    }
  }
}
