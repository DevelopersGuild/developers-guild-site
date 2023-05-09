export function getNavLinks() {
  return [
    { name: "About", path: "/about", external: false },
  ];
}

export function getAdvisorLinks() {
  return [
    { name: "Ronald Kleinman", path: "https://www.deanza.edu/directory/user.html?u=kleinmanronald", external: true },
    { name: "Delia Garbacea", path: "https://www.deanza.edu/faculty/garbaceadelia/", external: true },
  ];
}

export function getCommunityLinks() {
  return [
    { path: "https://github.com/DevelopersGuild", logo: "/assets/icons/github.svg" },
    { path: "https://www.facebook.com/officialdevelopersguild", logo: "/assets/icons/facebook.svg" },
    /*{ path: "https://www.instagram.com/da.devguild", logo: "/assets/icons/instagram.svg" }, Add instagram back when we createa an account*/
    { path: "https://medium.com/@developersguild", logo: "/assets/icons/medium.svg" },
    { path: "mailto:developersguildclub@gmail.com", logo: "/assets/icons/mail.svg" }
  ];
}

export function getDocumentLinks() {
  return [
    {
      name: "Constitution",
      path: "/documents/constitution.pdf",
      external: false
    }
  ]
}