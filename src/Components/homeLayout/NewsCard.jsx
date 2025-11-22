import { FaRegEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    image_url,
    author,
    rating,
    total_view,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="rounded-xl shadow-sm bg-white">
      
      {/* Top: Author + Icons */}
      <div className="flex items-center justify-between bg-base-300 p-5 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-gray-500 text-xs">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xl text-gray-600">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold mt-4 leading-snug p-5">
        {title}
      </h1>

      {/* Image */}
      <div className="p-5">
        <img
            src={image_url}
            alt="news"
            className="w-full mt-4 rounded-xl"
        />
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-4 p-5">
        {details.slice(0, 200)}...
        <Link to={`/news-details/${id}`} className="text-red-500 cursor-pointer ml-2">Read More</Link>
      </p>

      {/* Bottom: Rating + Views */}
      <div className="flex items-center justify-between mt-5 p-5">
        {/* Rating */}
        <div className="flex items-center text-orange-500">
          {"★".repeat(rating.number)}
          {"☆".repeat(5 - rating.number)}
          <span className="ml-2 text-gray-700">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;
