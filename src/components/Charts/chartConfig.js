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
          limits: {
            x: {max: undefined, min: undefined},
            y: {max: undefined, min: undefined},
          },
          wheel: {
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
          limits: {x: "", y: ""},
          wheel: {
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
        limits: {x: "", y: ""},
        pan: {
          enabled: true,
        },
        zoom: {
          wheel: {
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
