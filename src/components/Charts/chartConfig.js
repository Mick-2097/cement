export const data = {
  datasets: {
    borderRadius: "16px",
    padding: "12px",
  },
}

export const options = [
  // 0
  {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date & time",
          font: {
            size: "16px",
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
          font: {
            size: "16px",
          },
        },
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          drag: {
            enabled: true,
          },
          mode: "x",
        },
      },
      legend: {
        labels: {
          font: {
            size: "20px",
          },
        },
      },
    },
  },
  // 1
  {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date & time",
          font: {
            size: "16px",
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
          font: {
            size: "16px",
          },
        },
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
        },
        zoom: {
          limits: {},
          drag: {
            enabled: true,
          },
          mode: "x",
        },
      },
      legend: {
        labels: {
          font: {
            size: "20px",
          },
        },
      },
    },
  },
  // 2
  {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date & time",
          font: {
            size: "16px",
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
          font: {
            size: "16px",
          },
        },
      },
    },
    plugins: {
      zoom: {
        limits: {},
        pan: {
          enabled: true,
        },
        zoom: {
          drag: {
            enabled: true,
          },
          mode: "x",
        },
      },
      legend: {
        labels: {
          font: {
            size: "20px",
          },
        },
      },
    },
  },
]
