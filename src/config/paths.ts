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
      getHref: () => "/cards",
    },
    about: {
      getHref: () => "/about",
    },
  },
} as const;
