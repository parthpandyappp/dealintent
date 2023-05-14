import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <section className="flex items-center">
        <Image
          src="/dealintent-logo.svg"
          alt="dealintent-logo"
          width={37.98}
          height={38}
        />
        <Image src="/right-menu.svg" alt="right-menu" width={24} height={24} />
      </section>
      <section className="flex gap-px-26 items-center">
        <Image
          src="/search-icon.svg"
          alt="search-icon"
          width={30}
          height={30}
        />
        <Image src="/mail-icon.svg" alt="mail-icon" width={28} height={28} />
        <Image
          src="/notification-icon.svg"
          alt="notification-icon"
          width={33}
          height={32}
        />
        <Image
          src="/question-circle.svg"
          alt="question-circle-icon"
          width={30}
          height={30}
        />
        <Image
          src="/profile-icon.png"
          alt="profile-icon"
          width={45}
          height={45}
        />
      </section>
    </nav>
  );
};

export { Nav };
