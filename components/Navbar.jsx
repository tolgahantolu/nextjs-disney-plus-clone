import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/disney-plus-logo.png";

const Navbar = ({ account }) => {
  console.log(account);
  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <a>
            <Image src={logo} width={100} height={50} alt="disney plus logo" />
          </a>
        </Link>
        <div className="account-info">
          <p>
            Welcome <span>{account.username}</span>
          </p>
          <img src={account.avatar.url} alt="avatar" className="avatar" />
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          width: 100%;
          height: 80px;
          padding: 0 20px;
          border-bottom: 1px solid #474747;

          display: flex;
          align-items: center;

          .account-info {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            p {
              margin-right: 10px;
            }

            .avatar {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              object-position: top;
              object-fit: cover;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
