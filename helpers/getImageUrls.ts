enum imageSizes {
  small = 300,
  medium = 500,
  large = 800,
  origin = "origin",
}

const getAvatarUrl = (name: string, size: string) => {
  if (name.includes("https")) return name;
  else return process.env.NEXT_PUBLIC_SERVER_URL + `/avatars/${size}/` + name;
};

export { getAvatarUrl };
