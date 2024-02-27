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
          text: "°c",
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
        limits: {
          x: {max: "", min: ""},
          y: {max: "", min: ""},
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
        limits: {
          x: {max: "", min: ""},
          y: {max: "", min: ""},
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
        pan: {
          enabled: true,
        },
        limits: {
          x: {max: "", min: ""},
          y: {max: "", min: ""},
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
