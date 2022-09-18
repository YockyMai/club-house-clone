const getAvatarUrl = (name: string) => {
  return process.env.NEXT_PUBLIC_SERVER_URL + "/avatars/" + name;
};

export { getAvatarUrl };
