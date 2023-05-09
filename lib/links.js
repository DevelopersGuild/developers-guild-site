export function getNavLinks() {
  return [
    { name: "About", path: "/about", external: false },
  ];
}

export function getAdvisorLinks() {
  return [
    { name: "Ronald Kleinman", path: "https://www.deanza.edu/directory/user.html?u=kleinmanronald", external: true },
  ];
}

// TODO!: Add back Instagram once we create a new account. https://github.com/DevelopersGuild/developers-guild-site/issues/316
export function getCommunityLinks() {
  return [
    { path: "https://github.com/DevelopersGuild", logo: "/assets/icons/github.svg" },
    { path: "https://www.facebook.com/officialdevelopersguild", logo: "/assets/icons/facebook.svg" },
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