export const paths = {
  home: {
    getHref: () => "/",
  },
  auth: {
    signIn: {
      getHref: () => "/auth/sign-in",
    },
    signUp: {
      getHref: () => "/auth/sign-up",
    },
  },
  public: {
    sets: {
      getHref: () => "/sets",
    },
    cards: {
      getHref: () => "/explorar",
    },
    about: {
      getHref: () => "/about",
    },
  },
} as const;
