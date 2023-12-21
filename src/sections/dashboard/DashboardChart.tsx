import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { chartTitles } from ".";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const DashboardChart = () => {
  let series: number[] = [12, 30, 10, 18, 18, 10];
  let options: ApexOptions = {
    plotOptions: {
      pie: {
        donut: {
          size: "40%",
        },
      },
    },
    dataLabels: {
      style: {
        fontSize: "12px",
        fontFamily: "Montserrat,Public Sans,sans-serif",
      },
      dropShadow: {
        enabled: false,
      },
    },
    chart: {
      type: "donut",
    },
    stroke: {
      width: 1,
    },
    // dataLabels: { enabled: false },
    labels: [
      "Backup carer",
      "Resigned Carer",
      "Approved Carer",
      "Child Complaints",
      "Rejected Application",
      "Application Enquiries",
      "Terminated Carer",
    ],
    colors: [
      "#E07601",
      "#78BFAA",
      "#4A797E",
      "#FFB600",
      "#5BA316",
      "#212529",
      "#2CB764",
    ],
    legend: {
      show: false,
    },
  };
  return (
    <Grid
      sx={{
        px: { lg: 0, sm: 2, xs: 1 },
        py: 0,
        alignItems: "center",
        minHeight: 425,
      }}
      container
      spacing={4}
    >
      <Grid item xs={12} xl={4}>
        <Box sx={{ height: { lg: "200px", xs: "250px" } }}>
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            height="100%"
          />
        </Box>
      </Grid>
      <Grid item xs={12} xl={8} sx={{ mt: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "4px",
            marginTop: "10px",
          }}
        >
          <Grid container spacing={3}>
            {chartTitles?.map((item, index) => (
              <Grid key={index} item lg={4} justifyContent={"center"}>
                <Box sx={{ mt: 0.5 }}>
                  <Typography fontSize={14} fontWeight={500}>
                    {item?.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "32px",
                        height: "28px",
                        background: item?.color,
                        borderRadius: "4px",
                      }}
                    ></Box>
                    <Typography variant="subtitle2">{`${item?.percentage}%`}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardChart;
export const BarChart = () => {
  let barseries: any = [
    {
      data: [12, 3, 40, 30, 5, 10],
    },
  ];

  let baroptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
      events: {
        click: function (chart, w, e) {
          // e.preventDefault();
          // console.log(chart, w, e)
        },
      },
    },

    colors: ["#E07601", "#849399", "#4A797E", "#5BA316", "#C84C0F", "#FFB600"],

    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: [
      "New",
      "Blacklisted",
      "Placed",
      "Approved",
      "Rejected",
      "Requested",
    ],

    legend: {
      show: false,
      position: "right",
    },
    yaxis: {
      labels: {
        show: false,
      },
    },

    xaxis: {
      labels: {
        show: false,
      },
    },
  };
  return (
    <Grid sx={{ px: { lg: 0, sm: 2, xs: 1 } }} container spacing={2}>
      <Grid
        item
        xs={12}
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"100%"}>
          <ReactApexChart
            options={baroptions}
            series={barseries}
            type="bar"
            height={370}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export const LineCharts = () => {
  const theme: any = useTheme();
  const series: any = [
    {
      data: [10, 41, 35, 51, 49, 62, 69, 91, 18, 70, 11, 12],
    },
    {
      data: [12, 10, 70],
    },
  ];

  const options: any = {
    chart: {
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
    },

    stroke: {
      curve: "smooth",
    },

    tooltip: { enabled: false },

    legend: {
      show: false,
    },

    colors: ["#C82333", "#4B79A1"],

    grid: {
      row: {
        opacity: 0,
      },
    },

    yaxis: {
      labels: {
        show: true,
        style: {
          colors: theme.palette.contrastText,
        },
      },
    },

    xaxis: {
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEV",
      ],
      labels: {
        show: true,
        style: {
          colors: theme.palette.contrastText,
        },
      },
    },
  };
  return (
    <Box>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={370}
      />
    </Box>
  );
};
