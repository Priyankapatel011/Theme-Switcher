const themes = [
  {
    name: "light",
    message: "Hello sunshine — Light theme is on!"
  },
  {
    name: "dark",
    message: "The night is yours — Dark theme is on!"
  },
  {
    name: "ocean",
    message: "Blue skies and high tides — Ocean theme is on!"
  },
  {
    name: "space",
    message : "The most mesmerizing thing in this universe!"
  }
]

const themeSwitcherButton = document.querySelector("#theme-switcher-button")

const themeDropdown = document.querySelector("#theme-dropdown")

const msg = document.querySelector("#message")

const menu = document.querySelectorAll('[role = "menu-item"]')

themeSwitcherButton.addEventListener("click", () => {
  themeDropdown.hidden = !(themeDropdown.hidden)

  if(themeDropdown.hidden === false){
    themeSwitcherButton.setAttribute("aria-expanded", "true")
  }
  else{
    themeSwitcherButton.setAttribute("aria-expanded", "false")
    msg.textContent = ""
  }

  menu.forEach(item => {
    item.addEventListener("click", () => {
      document.body.setAttribute("class", item.getAttribute("id"))

      for(const obj of themes){
        if(obj.name === item.textContent.toLowerCase()){
          msg.textContent = obj.message
        }
      }

      themeDropdown.hidden = true   
    })
  }) 

})
