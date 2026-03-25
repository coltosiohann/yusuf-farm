export type Locale = "en" | "ro";

type RouteEntry = {
  key: "home" | "story" | "animalTrading" | "gallery" | "offerings" | "contact";
  enPath: string;
  roPath: string;
  enLabel: string;
  roLabel: string;
};

export const routeEntries: RouteEntry[] = [
  {
    key: "home",
    enPath: "/",
    roPath: "/ro",
    enLabel: "Home",
    roLabel: "Acasă",
  },
  {
    key: "story",
    enPath: "/story",
    roPath: "/ro/povestea-noastra",
    enLabel: "Our Story",
    roLabel: "Povestea Noastră",
  },
  {
    key: "animalTrading",
    enPath: "/animal-trading",
    roPath: "/ro/comert-animale",
    enLabel: "Animal Trading",
    roLabel: "Comerț animale",
  },
  {
    key: "gallery",
    enPath: "/gallery",
    roPath: "/ro/galerie",
    enLabel: "Gallery",
    roLabel: "Galerie",
  },
  {
    key: "offerings",
    enPath: "/offerings",
    roPath: "/ro/oferte",
    enLabel: "Offerings",
    roLabel: "Oferte",
  },
  {
    key: "contact",
    enPath: "/contact",
    roPath: "/ro/contact",
    enLabel: "Contact",
    roLabel: "Contact",
  },
];

const normalizePath = (pathname: string) => {
  if (!pathname) {
    return "/";
  }

  return pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
};

export const isRomanianPath = (pathname: string) => {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === "/ro" || normalizedPath.startsWith("/ro/");
};

export const mapPathToLocale = (pathname: string, targetLocale: Locale) => {
  const normalizedPath = normalizePath(pathname);
  const matchingRoute = routeEntries.find(
    ({ enPath, roPath }) =>
      normalizePath(enPath) === normalizedPath || normalizePath(roPath) === normalizedPath
  );

  if (!matchingRoute) {
    return targetLocale === "en" ? "/" : "/ro";
  }

  return targetLocale === "en" ? matchingRoute.enPath : matchingRoute.roPath;
};
