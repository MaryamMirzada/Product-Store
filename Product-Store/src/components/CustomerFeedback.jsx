const CustomerFeedback = () => {
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
    <div className="my-24 px-4 lg:px-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-red-600">
          Customer Feedback
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          What our happy customers say about us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-md hover:shadow-2xl transition rounded-2xl p-6 text-center border border-gray-100"
          >
            <div className="flex justify-center mb-4">
              <img
                src={review.image}
                className="w-20 h-20 rounded-full object-cover border-4 border-red-500"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{review.name}</h3>
            <div className="text-yellow-400 mt-2">
              {"⭐".repeat(review.rating)}
            </div>
            <p className="text-gray-600 text-sm mt-4">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
