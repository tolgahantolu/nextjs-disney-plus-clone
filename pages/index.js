import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { getAccountsData, getVideosData } from "../services";

import disneyLogo from "../assets/disney-button.png";
import marvelLogo from "../assets/marvel-button.png";
import natgeoLogo from "../assets/natgeo-button.png";
import pixarLogo from "../assets/pixar.png";

export default function Home({ videos, account }) {
  console.log(videos);
  console.log(account);

  const randomVideo = (videos) => {
    return videos[Math.trunc(Math.random() * videos.length)];
  };

  const filterVideos = (type) => {
    return videos.filter((video) => video.tags.includes(type));
  };

  const recommendedVideos = (videos) => {
    return videos.filter(
      (video) => video.seen === false || video.seen === null
    );
  };

  return (
    <>
      <Navbar account={account} />
      <div className="app">
        <div className="main-video">
          <img
            className="image"
            src={randomVideo(videos).thumbnail.url}
            alt={randomVideo(videos).title}
          />
        </div>
        <div className="video-feed">
          <Link href="#disney">
            <div className="company" id="disney">
              <Image src={disneyLogo} width={300} height={150} />
            </div>
          </Link>
          <Link href="#pixar">
            <div className="company" id="pixar">
              <Image src={pixarLogo} width={300} height={150} />
            </div>
          </Link>
          <Link href="#marvel">
            <div className="company" id="marvel">
              <Image src={marvelLogo} width={300} height={150} />
            </div>
          </Link>
          <Link href="#nat-geo">
            <div className="company" id="nat-geo">
              <Image src={natgeoLogo} width={300} height={150} />
            </div>
          </Link>
        </div>
        {/* prettier-ignore */}
        <Section type="Recommended For You" videos={recommendedVideos(videos)} />
        <Section id="nat-geo" type="Family" videos={filterVideos("family")} />
        <Section type="Horror" videos={filterVideos("horror")} />
        <Section id="pixar" type="Comedy" videos={filterVideos("comedy")} />
        <Section id="disney" type="Disney" videos={filterVideos("disney")} />
        <Section
          id="marvel"
          type="Thriller"
          videos={filterVideos("thriller")}
        />
      </div>
      <footer className="footer">
        <p>Demo Project by Tolgahan</p>
      </footer>

      <style jsx>{`
        .app {
          margin: 20px;

          .video-feed {
            display: flex;

            img {
              max-height: 150px;
            }
          }

          .main-video {
            width: 100%;
            height: 40vh;
            overflow: hidden;
            position: relative;
            margin-bottom: 50px;

            .image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: top;
            }
          }

          .company {
            width: 20%;
            background-color: #1e2841;
            margin: 5px;
            border-radius: 10px;
          }
        }

        .footer {
          width: 100%;
          text-align: center;
          padding: 15px 0;
          border-top: 1px solid #fafaf9;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const videos = (await getVideosData()) || [];
  const account = await getAccountsData();

  return {
    props: {
      videos,
      account,
    },
  };
}
