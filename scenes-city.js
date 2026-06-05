const CONFIG = {
  poster: "images/seq_arch/est_00.jpg",
  initialScene: "panoramica",

  timeline: [
    {
      id: "panoramica",
      label: "Panorâmica",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9c3-2 6-3 9-3s6 1 9 3"/><path d="M3 15c3 2 6 3 9 3s6-1 9-3"/><circle cx="12" cy="12" r="3"/></svg>`,
    },
    {
      id: "estacionamento",
      label: "Estacionamento",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>`,
    },
    {
      id: "predio",
      label: "Prédio",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22V12h6v10"/><path d="M8 6h1M11 6h1M14 6h1M8 10h1M11 10h1M14 10h1"/></svg>`,
    },
    {
      id: "hall",
      label: "Hall",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V7l9-4 9 4v14"/><path d="M13 21v-6h-2v6"/><path d="M3 10h18"/></svg>`,
    },
    {
      id: "parque",
      label: "Parque",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><circle cx="12" cy="7" r="5"/><path d="M5 22h14"/></svg>`,
    },
  ],

  scenes: {
    panoramica:    { video: "images/dia_low.webm" },
    estacionamento:{ video: "images/estacionamento.webm" },
    predio:        { video: "images/predio.webm" },
    hall:          { video: "images/hall.webm" },
    parque:        { video: "images/parque.webm" },
  },

  sequences: {
    "panoramica-to-estacionamento": { folder: "images/seq_arch/", prefix: "est_",                 from: 0, to: 47, pad: 2, ext: "jpg" },
    "estacionamento-to-panoramica": { folder: "images/seq_arch/", prefix: "est_",                 from: 0, to: 47, pad: 2, ext: "jpg", reverse: true },

    "panoramica-to-predio":         { folder: "images/seq_arch/", prefix: "arch_",                from: 0, to: 47, pad: 2, ext: "jpg" },
    "predio-to-panoramica":         { folder: "images/seq_arch/", prefix: "arch_",                from: 0, to: 47, pad: 2, ext: "jpg", reverse: true },

    "panoramica-to-hall":           { folder: "images/seq/",      prefix: "pano_to_hall_",        from: 0, to: 47, pad: 2, ext: "jpg" },
    "hall-to-panoramica":           { folder: "images/seq/",      prefix: "pano_to_hall_",        from: 0, to: 47, pad: 2, ext: "jpg", reverse: true },

    "panoramica-to-parque":         { folder: "images/seq_arch/", prefix: "parque_",              from: 0, to: 47, pad: 2, ext: "jpg" },
    "parque-to-panoramica":         { folder: "images/seq_arch/", prefix: "parque_",              from: 0, to: 47, pad: 2, ext: "jpg", reverse: true },

    "estacionamento-to-hall":       { folder: "images/seq_arch/", prefix: "est_to_portaria_",     from: 0, to: 47, pad: 2, ext: "jpg" },
    "hall-to-estacionamento":       { folder: "images/seq_arch/", prefix: "est_to_portaria_",     from: 0, to: 47, pad: 2, ext: "jpg", reverse: true },

    "estacionamento-to-parque":     { folder: "images/seq_arch/", prefix: "est_to_parque_",       from: 0, to: 47, pad: 2, ext: "jpg" },
    "parque-to-estacionamento":     { folder: "images/seq_arch/", prefix: "est_to_parque_",       from: 0, to: 47, pad: 2, ext: "jpg", reverse: true },

    "estacionamento-to-predio":     { folder: "images/seq_arch/", prefix: "est_to_predio_",       from: 0, to: 47, pad: 2, ext: "jpg" },
    "predio-to-estacionamento":     { folder: "images/seq_arch/", prefix: "est_to_predio_",       from: 0, to: 47, pad: 2, ext: "jpg", reverse: true },

    "predio-to-hall":               { folder: "images/seq_arch/", prefix: "torre_",               from: 0, to: 47, pad: 2, ext: "jpg" },
    "hall-to-predio":               { folder: "images/seq_arch/", prefix: "torre_",               from: 0, to: 47, pad: 2, ext: "jpg", reverse: true },

    "predio-to-parque":             { folder: "images/seq/",      prefix: "predio_to_parque_",    from: 0, to: 46, pad: 2, ext: "jpg" },
    "parque-to-predio":             { folder: "images/seq/",      prefix: "predio_to_parque_",    from: 0, to: 46, pad: 2, ext: "jpg", reverse: true },

    "hall-to-parque":               { folder: "images/seq_arch/", prefix: "portaria_to_parque_",  from: 0, to: 47, pad: 2, ext: "jpg" },
    "parque-to-hall":               { folder: "images/seq_arch/", prefix: "portaria_to_parque_",  from: 0, to: 47, pad: 2, ext: "jpg", reverse: true },
  },

  transitions: {
    panoramica:    { estacionamento: "panoramica-to-estacionamento", predio: "panoramica-to-predio",         hall: "panoramica-to-hall",         parque: "panoramica-to-parque"     },
    estacionamento:{ panoramica:     "estacionamento-to-panoramica", predio: "estacionamento-to-predio",     hall: "estacionamento-to-hall",     parque: "estacionamento-to-parque" },
    predio:        { panoramica:     "predio-to-panoramica",         estacionamento: "predio-to-estacionamento", hall: "predio-to-hall",         parque: "predio-to-parque"         },
    hall:          { panoramica:     "hall-to-panoramica",           estacionamento: "hall-to-estacionamento",   predio: "hall-to-predio",       parque: "hall-to-parque"           },
    parque:        { panoramica:     "parque-to-panoramica",         estacionamento: "parque-to-estacionamento", predio: "parque-to-predio",     hall:   "parque-to-hall"           },
  },
};
