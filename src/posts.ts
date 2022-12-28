export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/goncadanilo.png",
      name: "Danilo Gonçalves",
      role: "Frontend Developer",
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: 3, type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-26 15:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: 3, type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-23 15:00:00"),
  },
];
