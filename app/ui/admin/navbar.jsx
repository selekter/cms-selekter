import Link from "next/link";

function Navbar() {
  const linkList = [
    {
      href: "/admin",
      title: "Home",
    },
    {
      href: "/admin/posts",
      title: "Post",
    },
  ];
  return (
    <>
      <div className="text-center font-bold text-2xl text-white bg-blue-600">
        CMS-Selekter
      </div>
      <ul className="flex flex-col">
        {linkList.map((link, index) => (
          <li
            key={index}
            className="px-3 py-1 transition-colors hover:bg-blue-800 hover:text-white"
          >
            <Link className="block" href={link.href}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
