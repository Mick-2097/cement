export const data = {
  datasets: [
    {
      borderRadius: "16px",
      padding: "12px",
    },
    {
      borderRadius: "16px",
      padding: "12px",
    },
    {
      borderRadius: "16px",
      padding: "12px",
    },
  ],
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
        limits: {
          x: {min: 0, max: 0},
          y: {min: 0, max: 0},
        },
        pan: {
          enabled: true,
          mode: "xy",
        },
        zoom: {
          wheel: {
            enabled: true,
            speed: 0.01,
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
        limits: {},
        pan: {
          enabled: true,
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          mode: "xy",
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
          wheel: {
            enabled: true,
          },
          mode: "xy",
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
