import { SquareArrowOutUpRight } from 'lucide-react';
import { getArtDetails, getAvailableIDs } from '../../lib/metMuseumAPI';
import { ImgCarousel } from './img-carousel';

export const revalidate = 86400;

export default async function ArtOfTheDay() {
  const objectIDs = await getAvailableIDs();
  const randomIndex = Math.floor(Math.random() * objectIDs.length);
  const art = await getArtDetails(objectIDs[randomIndex]);

  if (!art) {
    return (
      <div className="min-h-[calc(100vh-150px)] flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl lg:text-6xl font-serif font-bold">
          Art of the day
        </h1>
        <p className="font-sans text-xs lg:text-sm text-gray-500">
          No art available at the moment. Please try again later.
        </p>
      </div>
    );
  }

  const images = [art.image, ...(art.additionalImages || [])].filter(Boolean);

  return (
    <div className="min-h-[calc(100vh-150px)] m-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20 justify-center items-center">
      <div className="p-10 flex justify-center items-center rounded ">
        {images.length > 0 ? (
          <ImgCarousel imgs={images} />
        ) : (
          <p className="bg-card h-80 w-80 flex justify-center items-center rounded">
            No image available for this artwork.
          </p>
        )}
      </div>
      <div className="flex gap-4 flex-col">
        <h1 className="text-3xl font-bold font-serif">{art.title}</h1>
        <div>
          <h2 className="text-xl font-sans font-semibold">
            {art.artist} - {`(${art.object_date})`}
          </h2>

          <p className="font-sans text-lg font-medium">
            {art.artist_bio && <span>{art.artist_bio}</span>}
          </p>
        </div>

        <ul className="font-sans text-lg">
          <li>
            <strong className="font-medium">Medium: </strong>
            {art.medium}
          </li>
          <li>
            <strong className="font-medium">Classification: </strong>
            {art.type}
          </li>
          <li>
            <strong className="font-medium">Department: </strong>
            {art.department}
          </li>

          <li>
            <strong className="font-medium">Country:</strong> {art.country}
          </li>
        </ul>

        <a
          className="flex gap-1 text-sm items-center text-primary font-sans w-24 p-1"
          href={art.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          See more <SquareArrowOutUpRight size={12} />
        </a>
      </div>
    </div>
  );
}
