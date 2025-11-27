const evolutionChart = {
  chart: {
    height: 300,
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Aoû",
        "Sep",
        "Oct",
        "Nov",
        "Déc",
      ],
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: 5,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
  },
  series: [
    {
      name: "Patients",
      color: "#2E37A4",
      data: [8200, 8800, 9300, 9800, 10200, 10600, 10900, 11200, 11600, 11900, 12200, 12480],
    },
    {
      name: "Cardiologues",
      color: "#00D3C7",
      data: [650, 680, 700, 720, 745, 765, 780, 795, 810, 825, 835, 847],
    },
    {
      name: "Hôpitaux",
      color: "#9C27B0",
      data: [18, 19, 20, 21, 22, 23, 24, 25, 26, 26, 27, 28],
    },
  ],
};

const revenueChart = {
  chart: {
    height: 290,
    type: "donut",
    toolbar: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        labels: {
          show: true,
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              return "100%";
            },
          },
        },
      },
    },
  },
  series: [55, 33, 7, 5],
  labels: ["Cardiologues", "Plateforme", "Partenaires", "Hôpitaux"],
  colors: ["#2E37A4", "#00D3C7", "#FFC107", "#9C27B0"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
  legend: {
    position: "bottom",
    horizontalAlign: "center",
  },
};

const activityChart = {
  chart: {
    height: 200,
    type: "bar",
    toolbar: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 4,
      },
    },
    colors: ["#2E37A4"],
  },
  series: [
    {
      name: "Utilisateurs actifs",
      color: "#2E37A4",
      data: [1800, 1950, 2100, 2250, 1900, 1600, 1450],
    },
  ],
};

// Keep original charts for compatibility
const patientChart = {
  chart: {
    height: 230,
    type: "bar",
    stacked: true,
    toolbar: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
      },
    },
  },
  series: [
    {
      name: "Male",
      color: "#2E37A4",
      data: [20, 30, 41, 67, 22, 43, 40, 10, 30, 20, 40],
    },
    {
      name: "Female",
      color: "#00D3C7",
      data: [13, 23, 20, 8, 13, 27, 30, 25, 10, 15, 20],
    },
  ],
};

const donutChart = {
  chart: {
    height: 290,
    type: "donut",
    toolbar: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  series: [44, 55, 41, 17],
  labels: ["Neurology", "Dental Care", "Gynocology", "Orthopedic"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
  legend: {
    position: "bottom",
  },
};

export { patientChart, donutChart, evolutionChart, revenueChart, activityChart };
