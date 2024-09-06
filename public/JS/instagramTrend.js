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


// *************** Fetch API *****************
// Fetch top posts from API
async function getTopPost(location) {
  try {
    const response = await fetch(
      `https://localhost:7271/api/Instagram/scrapeTopPostsByLocation?location=${encodeURIComponent(
        location
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`An error has occurred: ${response.status}`);
    }

    const data = await response.json();
    console.log("Trending video data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching trending video:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const locationMap = new Map();
  let cachedResponse = null; // Variable to store the cached API response

  fetch("locationInfo.json")
    .then((response) => response.json())
    .then((data) => populateDatalist(data))
    .catch((error) => console.error("Error loading JSON:", error));

  function populateDatalist(data) {
    const datalist = document.getElementById("locations");

    data.forEach((country) => {
      country.Cities.forEach((city) => {
        city.Locations.forEach((location) => {
          let option = document.createElement("option");
          const displayValue = `${city.CityName}, ${country.CountryName}`;
          option.value = displayValue;
          datalist.appendChild(option);

          locationMap.set(displayValue, location.LocationName);
        });
      });
    });
  }

  var search = document.getElementById("search-btn");
  search.addEventListener("click", async (event) => {
      event.preventDefault();
      
      const container = document.querySelector(".trend-box");
      if (container) {
        container.innerHTML = "";
      }

      document.getElementById("sub-menu").scrollIntoView({ behavior: "smooth" });

      var selectedDisplayValue = document.getElementById('locationInput').value;
      var locationName = locationMap.get(selectedDisplayValue);
  
      const spinner = document.getElementById('spinner');
      const filter = document.getElementById('filter');
      spinner.style.display = 'block';
      
      if (locationName) {
          try {
              // Fetch only if cachedResponse is empty or location changes
              if (!cachedResponse || cachedResponse.location !== locationName) {
                  cachedResponse = await getTopPost(locationName);
                  cachedResponse.location = locationName; // Save the location with the response
              }
              applyFilters(cachedResponse);
          } catch (error) {
              console.error("Error fetching data:", error);
          } finally {
              spinner.style.display = 'none';
              filter.style.display = 'flex';
          }
      } else {
          console.error("Location not found in the mapping.");
      }
  });

  // Event listeners for the filter dropdowns
  document.getElementById("age").addEventListener("change", () => applyFilters(cachedResponse));
  document.getElementById("gender").addEventListener("change", () => applyFilters(cachedResponse));

  // Function to apply filters (age and gender) and display the results
  function applyFilters(response) {
    if (!response) return; // Exit if no data is cached

    const selectedAgeGroup = document.getElementById("age").value;
    const selectedGender = document.getElementById("gender").value;

    let filteredResponse = response;

    // Apply age filter
    if (selectedAgeGroup) {
      filteredResponse = filterByAge(response, selectedAgeGroup);
    }

    // Apply gender filter
    if (selectedGender) {
      filteredResponse = filterByGender(filteredResponse, selectedGender);
    }

    displayResults(filteredResponse);
  }

  // Function to filter posts by age group
  function filterByAge(posts, selectedAgeGroup) {
    if (!selectedAgeGroup) {
      return posts; 
    }
    // Extract min and max values from the selected age range
    const [minAge, maxAge] = selectedAgeGroup.split("-").map(Number);

    return posts.filter((post) => {
      const [postMinAge, postMaxAge] = post.age.split("-").map(Number);
      return postMinAge >= minAge && postMaxAge <= maxAge;
    });
  }

  // Function to filter posts by gender
  function filterByGender(posts, selectedGender) {
    if (selectedGender === "Male") {
      return posts.sort((a, b) => b.maleCount - a.maleCount);
    } else if (selectedGender === "Female") {
      return posts.sort((a, b) => b.femaleCount - a.femaleCount);
    }
    return posts;
  }
});

function displayResults(data) {
  const container = document.querySelector(".trend-box");
  container.innerHTML = "";

  if (data.length > 0) {
    data.forEach((post) => {
      if (post.url) {
        // Create a new row1 div for each post
        const row = document.createElement("div");
        row.classList.add("row1");

        // Create a new trend-item div
        const trendItem = document.createElement("div");
        trendItem.classList.add("trend-item");

        // Create and append the image element
        const trendImg = document.createElement("img");
        trendImg.classList.add("trend-img");
        trendImg.src = "../Images/igReel-banner.jpg"; // Default image
        trendImg.alt = "Instagram trending post banner";
        trendItem.appendChild(trendImg);

        // Create the content div
        const trendContent = document.createElement("div");
        trendContent.classList.add("trend-content");

        // Create and append the title
        const trendTitle = document.createElement("p");
        trendTitle.classList.add("trend-title");
        trendTitle.textContent = "Top Trending Post of Instagram";
        trendContent.appendChild(trendTitle);

        // Create and append the description
        const trendDescription = document.createElement("p");
        trendDescription.classList.add("trend-description");
        // trendDescription.textContent = "Male: " + post.maleCount;
        // trendDescription.textContent = "Male: " + post.femaleCount;
        // trendDescription.textContent = "Age: " + post.age;
        trendDescription.textContent =
          "Click the button below to view the top trending post.";
        trendContent.appendChild(trendDescription);

        // Create and append the button
        const viewPostBtn = document.createElement("button");
        viewPostBtn.classList.add("viewPost-btn");
        viewPostBtn.textContent = "View Post";
        viewPostBtn.onclick = () => {
          window.open(post.url, "_blank");
        };
        trendContent.appendChild(viewPostBtn);

        trendItem.appendChild(trendContent);

        row.appendChild(trendItem);

        container.appendChild(row);
      }
    });
  } else {
    // Handle case where no URLs are found
    const noPostMessage = document.createElement("p");
    noPostMessage.textContent =
      "No trending post is available for this location.";
    container.appendChild(noPostMessage);
  }
}