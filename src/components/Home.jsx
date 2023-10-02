import React from "react";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";

export default function Home() {
  const navStyle = {
    backgroundColor: "#2c0854", // Set the background color here
  };

  // Sample user feedback data (you can replace this with your actual data)
  const userFeedbackData = [
    {
      name: "John Doe",
      stars: 5,
      comment: "Great service! ALLAHU aKBAR CYKA BLYAT ALLAHU aKBAR CYKA BLYAT",
    },
    {
      name: "Jane Smith",
      stars: 4,
      comment: "Good experience overall.",
    },
    {
      name: "Bob Johnson",
      stars: 3,
      comment: "Could be better.",
    },
    {
      name: "Alice Brown",
      stars: 5,
      comment: "Amazing!",
    },
    {
      name: "Eva White",
      stars: 4,
      comment: "Very satisfied.",
    },
    {
      name: "Mike Davis",
      stars: 2,
      comment: "Not impressed.",
    },
    {
      name: "Sarah Green",
      stars: 4,
      comment: "Impressive work.",
    },
    {
      name: "David Lee",
      stars: 5,
      comment: "Excellent service!",
    },
  ];

  return (
    <div className="h-screen overflow-x-hidden flex flex-col bg-purple">
      <div className="pt-4">
        <header className="bg-purple text-white text-3xl font-bold p-4 text-center rounded-lg">
          DASHBOARD
        </header>
      </div>
      <div className="flex justify-center items-center pt-8">
        <Chart1 />
        <Chart2 />
      </div>

      {/* User Feedback Section */}
      <div className="flex flex-col items-center p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">USER FEEDBACK</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          {userFeedbackData.map((feedback, index) => (
            <div
              key={index}
              className=" text-white p-4 rounded-2xl"
              style={navStyle}
            >
              {/* Stars */}
              <div className="flex items-center ">
                {Array.from({ length: feedback.stars }, (_, i) => (
                  <span
                    key={i}
                    role="img"
                    aria-label="star"
                    className="text-white text-2xl"
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              {/* Name */}
              <p className="font-semibold text-3xl">{feedback.name}</p>
              {/* Comment */}
              <p className="text-sl pt-2">{feedback.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
