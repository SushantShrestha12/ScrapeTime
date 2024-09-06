document.addEventListener("DOMContentLoaded", (event) => {
  const metaChartctx = document.getElementById("metaChart").getContext("2d");
  const metaChart = new Chart(metaChartctx, {
    type: "line",
    data: {
      labels: [
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
      datasets: [
        {
          label: "Ad Expenses in millions (USD)",
          data: [100, 135, 281, 310, 324, 1110, 1570, 2260, 2990, 2650, 2020],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(255, 99, 132, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255, 99, 132, 1)",
          fill: false,
          tension: 0.4,
          yAxisID: "y-spending", // Assign to y-axis for spending
        },
        {
          label: "Ad Revenue in millions (USD)",
          data: [
            6986, 11492, 17079, 26885, 39942, 55013, 69655, 84169, 114934,
            113643, 131948,
          ],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(75, 192, 192, 1)",
          fill: false,
          tension: 0.4,
          yAxisID: "y-earnings", // Assign to y-axis for earnings
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#000",
          },
        },
        tooltip: {
          mode: "index",
          intersect: false,
          backgroundColor: "rgba(90, 155, 255, 0.6)",
          titleColor: "#fff",
          bodyColor: "#fff",
          // borderColor: '#34495e',
          borderWidth: 1,
        },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Year",
            color: "#000",
          },
          ticks: {
            color: "#000",
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
        "y-spending": {
          beginAtZero: true,
          title: {
            display: true,
            text: "Ad Expenses in millions (USD)",
            color: "#000",
          },
          type: "linear",
          position: "left",
          ticks: {
            color: "#000",
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
        "y-earnings": {
          beginAtZero: true,
          title: {
            display: true,
            text: "Ad Revenue in millions (USD)",
            color: "#000",
          },
          type: "linear",
          position: "right",
          ticks: {
            color: "#000",
          },
          grid: {
            drawOnChartArea: false, // Only draw grid lines for one axis
          },
        },
      },
    },
  });

  const googleChartCtx = document
    .getElementById("googleChart")
    .getContext("2d");
  const googleChart = new Chart(googleChartCtx, {
    type: "bar",
    data: {
      labels: [
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
      datasets: [
        {
          label: "Ad Expenses in millions (USD)",
          data: [100, 135, 281, 310, 324, 1110, 1570, 2260, 2990, 2650, 2020],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(255, 99, 132, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255, 99, 132, 1)",
          fill: false,
          tension: 0.4,
          yAxisID: "y-spending", // Assign to y-axis for spending
        },
        {
          label: "Ad Revenue in billions (USD)",
          data: [
            51.07, 59.62, 67.39, 79.38, 95.58, 116.46, 134.81, 146.92, 209.49,
            224.47, 237.86,
          ],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(75, 192, 192, 1)",
          fill: false,
          tension: 0.4,
          yAxisID: "y-earnings", // Assign to y-axis for earnings
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#000",
          },
        },
        tooltip: {
          mode: "index",
          intersect: false,
          backgroundColor: "rgba(90, 155, 255, 0.6)",
          titleColor: "#fff",
          bodyColor: "#fff",
          // borderColor: '#34495e',
          borderWidth: 1,
        },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Year",
            color: "#000",
          },
          ticks: {
            color: "#000",
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
        "y-spending": {
          beginAtZero: true,
          title: {
            display: true,
            text: "Ad Expenses in millions (USD)",
            color: "#000",
          },
          type: "linear",
          position: "left",
          ticks: {
            color: "#000",
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
        "y-earnings": {
          beginAtZero: true,
          title: {
            display: true,
            text: "Ad Revenue in billions (USD)",
            color: "#000",
          },
          type: "linear",
          position: "right",
          ticks: {
            color: "#000",
          },
          grid: {
            drawOnChartArea: false, // Only draw grid lines for one axis
          },
        },
      },
    },
  });

  window.metaChart = metaChart;
  window.googleChart = googleChart;
});

let currentChartIndex = 0;
const charts = ["metaChart", "googleChart"];
const chartTitles = [
  "META Ad Spending vs Earnings (2013-2023)",
  "GOOGLE Ad Spending vs Earnings (2013-2023)",
];

function changeChart(direction) {
  const totalCharts = charts.length;
  currentChartIndex =
    (currentChartIndex + direction + totalCharts) % totalCharts;

  charts.forEach((chartId, index) => {
    document.getElementById(chartId).style.display =
      index === currentChartIndex ? "block" : "none";
  });

  document.getElementById("chartTitle").innerText =
    chartTitles[currentChartIndex];
}

// Search for countries
const countryInput = document.getElementById("country-input");
const countryList = document.getElementById("countries");
let countryMap = {}; // This will store country name to code mapping

// Fetch the country list from the REST Countries API and map country names to their ISO codes
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((countries) => {
    countries.forEach((country) => {
      let option = document.createElement("option");
      option.value = country.name.common; // Use the common name of the country
      countryList.appendChild(option);

      // Map full country name to its ISO 3166-1 alpha-2 code
      countryMap[country.name.common] = country.cca2;
    });
  })
  .catch((error) => console.error("Error fetching country list:", error));

// Function to fetch trending video by country code
async function getTrendingVideo(countryCode) {
  try {
    // Replace with your actual API endpoint for production
    const response = await fetch(
      `https://localhost:7271/api/youtube/trending?countryCode=${countryCode}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Handle HTTP errors
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.json();
    console.log("Trending video data:", data);

    // Return the video data
    return data;
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    return null; // Return null or handle the error as needed
  }
}

// Event listener for the search button or an event when user selects a country
document
  .getElementById("search-btn")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";

    document.getElementById("sub-menu").scrollIntoView({ behavior: "smooth" });

    let country = countryInput.value; // Get the full country name
    let countryCode = countryMap[country]; // Convert the full country name to the ISO code

    if (countryCode) {
      try {
        var videoDetailsList = await getTrendingVideo(countryCode); // Get the array of video details

        if (videoDetailsList && Array.isArray(videoDetailsList)) {
          const trendItemContainer =
            document.getElementById("trendItemContainer");
          trendItemContainer.innerHTML = ""; // Clear previous results

          videoDetailsList.forEach((videoDetails) => {
            // Create the trend-item div
            const trendItem = document.createElement("div");
            trendItem.classList.add("trend-item");

            // Set the inner HTML for the new trend item
            trendItem.innerHTML = `
                      <img
                          class="trend-img"
                          src="../Images/ytvideo-banner.jpg"
                          alt="${videoDetails.title || "YouTube Video Banner"}"
                      />
                      <div class="trend-content">
                          <p class="trend-title">${
                            videoDetails.title ||
                            "Most Viewed videos on YouTube"
                          }</p>
                          <p class="trend-channel">Channel: ${
                            videoDetails.channel || "Unknown channel"
                          }</p>
                          <p class="trend-published">Published at: ${
                            videoDetails.publishedAt
                              ? new Date(
                                  videoDetails.publishedAt
                                ).toLocaleDateString()
                              : "Unknown date"
                          }</p>
                          <p class="trend-description">${
                            videoDetails.description ||
                            "No description available"
                          }</p>
                          <p class="trend-stats">
                              Views: ${
                                videoDetails.viewCount !== undefined &&
                                videoDetails.viewCount !== null
                                  ? videoDetails.viewCount.toLocaleString()
                                  : "N/A"
                              } | Likes: ${
              videoDetails.likeCount !== undefined &&
              videoDetails.likeCount !== null
                ? videoDetails.likeCount.toLocaleString()
                : "N/A"
            } | Comments: ${
              videoDetails.commentCount !== undefined &&
              videoDetails.commentCount !== null
                ? videoDetails.commentCount.toLocaleString()
                : "N/A"
            }
                          </p>
                          <button
                              class="viewPost-btn"
                              onclick="window.open('${
                                videoDetails.videoUrl
                              }', '_blank')"
                          >
                              View Post
                          </button>
                      </div>
                  `;

            // Append the trend item to the container
            trendItemContainer.appendChild(trendItem);
          });

          // Hide the spinner once data is loaded
          spinner.style.display = "none";
        } else {
          throw new Error("Invalid response format from the API");
        }
      } catch (error) {
        console.error("Error fetching trending videos:", error);
        // Handle the error, hide the loading screen if an error occurs
        spinner.style.display = "none";
        alert("Failed to load video data.");
      }
    } else {
      console.error("Country not found in the list");
      // Hide loading if country is invalid
      spinner.style.display = "none";
      alert("Country not found.");
    }
  });
