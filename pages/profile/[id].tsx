import React from "react";
import { useRouter } from "next/router";
import { Profile } from "../../components/Profile";
import { Header } from "../../components/Header";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  function back() {
    router.back();
  }

  return (
    <>
      <Header />
      <Profile
        fullname={"Valeriy Grigorev"}
        username={"YockyMai"}
        AvatarUrl={
          "https://sun9-88.userapi.com/impg/HkZdX8PtD1cQvzTFgu-1PHJJHbwHHQHEZqyoqA/Z5rucSYfULk.jpg?size=500x500&quality=95&sign=dfc6919a68b5bb04e91b073b54d05920&type=album"
        }
        about={"Test about"}
        followers={64}
        following={120}
        userId={id}
      />
    </>
  );
};

export default ProfilePage;
