import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const CustomerFeedback = () => {
  const { state } = useContext(ThemeContext);

  const reviews = [
    {
      id: 1,
      name: "Ahmad Khan",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      comment: "Amazing store! Fast delivery and great quality products.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sara Ali",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      comment: "Very smooth experience. I really love shopping here!",
      rating: 4,
    },
    {
      id: 3,
      name: "John Smith",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      comment: "Best online store I have ever used. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div
      className={`mt-24 pb-24 px-4 lg:px-20 transition-all duration-300 ${
        state.darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-red-600">
          Customer Feedback
        </h2>

        <p
          className={`mt-4 max-w-2xl mx-auto ${
            state.darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          What our happy customers say about us.
        </p>
      </div>

      {/* REVIEWS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`shadow-md hover:shadow-2xl transition rounded-2xl p-6 text-center border ${
              state.darkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            {/* IMAGE */}
            <div className="flex justify-center mb-4">
              <img
                src={review.image}
                className="w-20 h-20 rounded-full object-cover border-4 border-red-500"
              />
            </div>

            {/* NAME */}
            <h3
              className={`font-bold text-lg ${
                state.darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {review.name}
            </h3>

            {/* RATING */}
            <div className="text-yellow-400 mt-2">
              {"⭐".repeat(review.rating)}
            </div>

            {/* COMMENT */}
            <p
              className={`text-sm mt-4 ${
                state.darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              "{review.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
