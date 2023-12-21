import React, { useState } from "react";
import { CustumeSplide, cardData, cardDataSplide } from ".";
import {
  Box,
  Grid,
  Theme,
  Typography,
  FormControlLabel,
  Checkbox,
  Card,
  Paper,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import HighPriorityIcon from "@root/assets/svg/placement/high.svg";
import LowPriorityIcon from "@root/assets/svg/placement/low.svg";
import UserImg from "@root/assets/svg/placement/user.png";
import Link from "next/link";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import DashboardChart, { BarChart, LineCharts } from "./DashboardChart";
import IconCalender from "@root/assets/svg/dashboard/IconCalender";
import { useTheme } from "@emotion/react";
import IconBuble from "@root/assets/svg/dashboard/IconBuble";
import ListIcon from "@mui/icons-material/List";

const DashboardSection = () => {
  const theme: any = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [value, setValue] = React.useState(0);
  const [splideShowState, setsplideShowState] = React.useState("bubble");
  React.useEffect(() => {
    if (!matches) {
      setsplideShowState("list");
    } else {
      setsplideShowState("bubble");
    }
  }, [matches]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Grid container>
        <Grid
          p={0}
          gap={1.8}
          container
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems={"center"}
          sx={{
            "& a": {
              textDecoration: "none",
            },
          }}
        >
          <DashboardList />
        </Grid>

        <Grid xs={12} xl={6} mt={2} item>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={0.8}
              ml={"auto"}
              mr={2.5}
            >
              {matches && (
                <IconButton onClick={() => setsplideShowState("bubble")}>
                  <IconBuble
                    sx={(theme: Theme) => ({
                      color:
                        splideShowState === "bubble"
                          ? theme.palette.primary.main
                          : "unset",
                    })}
                  />
                </IconButton>
              )}

              <IconButton onClick={() => setsplideShowState("list")}>
                <ListIcon
                  sx={(theme: Theme) => ({
                    color:
                      splideShowState === "list"
                        ? theme.palette.primary.main
                        : "unset",
                  })}
                />
              </IconButton>
            </Box>
          </Box>
          {splideShowState === "list" && <SplideSection />}
          {splideShowState === "bubble" && matches ? (
            <BoxDesignSection />
          ) : null}
          <Box>
            <TaskSection />
          </Box>
        </Grid>
        <Grid xs={12} md={12} xl={6} item>
          <Box px={{ lg: 2, xs: 0 }} mb={2}>
            <Box>
              <EventNotification />
            </Box>
            <Box mt={2}>
              <HorizaontalTabs
                variant={"fullWidth"}
                tabsDataArray={["Pie Chart", "Bar Chart", "Line Chart"]}
              >
                <DashboardChart />
                <BarChart />
                <LineCharts />
              </HorizaontalTabs>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default DashboardSection;
const DashboardList = () => {
  return (
    <>
      {cardData.map((items: any, index: any) => (
        <Grid
          key={index}
          xs={12}
          md={5.5}
          lg={3.7}
          xl={2.85}
          flexWrap={"wrap"}
          justifyContent={"center"}
          item
        >
          <Link href={items.link}>
            <Box sx={Styles.MainWapper(items.bgcolor)}>
              <Typography
                variant="body1"
                fontSize={14}
                color={"white"}
                fontWeight={700}
              >
                {items.text}
              </Typography>
              <Box sx={Styles.iconWapper(items.bgcolor)}>{items.icon}</Box>
            </Box>
          </Link>
        </Grid>
      ))}
    </>
  );
};

const SplideSection = () => {
  return (
    <>
      <CustumeSplide
        sx={(theme: Theme) => ({
          "&.splide__pagination__page.is-active": {
            backgroundColor: "red",
          },
        })}
        hasTrack={false}
      >
        <SplideTrack>
          <SplideSlide>
            <Grid
              mb={4.5}
              ml={0.8}
              gridColumn={3}
              gap={1}
              container
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems={"center"}
              sx={{
                height: 340,
                "& a": {
                  textDecoration: "none",
                },
              }}
            >
              {cardDataSplide.map((data, index) => (
                <>
                  <CardWapper
                    key={index}
                    title={data.title}
                    number={data.number}
                    color={data.color}
                  />
                </>
              ))}
            </Grid>
          </SplideSlide>
          <SplideSlide>
            <Grid
              mb={0.8}
              ml={0.8}
              gridColumn={3}
              gap={1.5}
              container
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems={"center"}
              sx={{
                "& a": {
                  textDecoration: "none",
                },
              }}
            >
              {cardDataSplide.map((data) => (
                <>
                  <CardWapper
                    key={data.title}
                    title={data.title}
                    number={data.number}
                    color={data.color}
                  />
                </>
              ))}
            </Grid>
          </SplideSlide>
        </SplideTrack>
      </CustumeSplide>
    </>
  );
};
const CardWapper = ({
  title,
  number,
  color,
}: {
  title: string;
  color: string;
  number: string;
}) => {
  return (
    <Box sx={Styles.cardSection()}>
      <Box pr={4}>
        <Typography
          variant="body1"
          fontSize={14}
          sx={(theme: Theme) => ({
            color: `${color}`,
            fontSize: 14,
          })}
          fontWeight={700}
        >
          {title}
        </Typography>
      </Box>

      <Typography
        variant="body1"
        fontSize={14}
        sx={(theme: Theme) => ({
          color: `${color}`,
          fontSize: 14,
        })}
        fontWeight={700}
        ml={"auto"}
      >
        {`${number}`}
      </Typography>
    </Box>
  );
};

const TaskSection = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<any>(false);

  const columns = [
    {
      id: "select",
      cell: ({ row, table }: any) => (
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                disabled={row?.original?.Assigned}
                checked={row?.original?.Assigned ? false : row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            }
            label={row.original.task}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.priority,
      id: "priority",
      cell: ({ row }: any) => (
        <Box display="flex" alignItems="center" gap={1}>
          {row.original.priority === "High" ? (
            <Image src={HighPriorityIcon} alt="" />
          ) : (
            <Image src={LowPriorityIcon} alt="" />
          )}
          <Typography
            fontSize="14px"
            fontWeight={500}
            color={row.original.priority === "High" ? "#D30B0B" : "#33BC03"}
          >
            {row.original.priority}
          </Typography>
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.priority,
      id: "priority!",
      cell: (info: any) => (
        <Box>
          <Image
            width={40}
            height={40}
            style={{ objectFit: "cover" }}
            src={UserImg}
            alt=""
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => info.getValue(),
    },
  ];
  const data = [
    {
      id: "1",
      task: "Task 1",
      priority: "High",
      date: "July 6, 2023",
    },
    {
      id: "2",
      task: "Task 2",
      priority: "Low",
      date: "July 6, 2023",
    },
  ];
  const handleClose = () => {
    setIsTaskModalOpen(false);
  };
  return (
    <>
      <Grid container pt="24px" columnSpacing="24px">
        <Grid item xs={12}>
          <Card
            sx={{
              marginBottom: "24px",
              ".MuiTableHead-root": { display: "none !important" },
            }}
          >
            <TableHeader
              hideSearch
              title="Tasks"
              showAddBtn
              onAdd={() => setIsTaskModalOpen(true)}
              onChanged={(data: any) => {
                console.log("Updated params: ", data);
              }}
            />
            <CustomTable
              data={data}
              columns={columns}
              isLoading={false}
              isFetching={false}
              isError={false}
              isSuccess={true}
              isPagination={false}
              onSortByChange={(data: any) => {
                console.log("Sort by: ", data);
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

const EventNotification = () => {
  return (
    <Paper
      variant="elevation"
      elevation={2}
      sx={(theme: Theme) => ({
        borderRadius: "10px 10px 0px 0px",
        width: "100%",
        mt: 3,
      })}
    >
      <Box
        sx={(theme: Theme) => ({
          background:
            "linear-gradient(92.09deg, #2CB965 1.76%, #32E37A 117.76%)",
          borderRadius: "10px 10px 0px 0px",
          p: 1.5,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <Typography
          variant="body1"
          fontSize={14}
          sx={(theme: Theme) => ({
            color: "white",
            fontSize: 14,
          })}
          fontWeight={700}
        >
          Event Notification
        </Typography>
        <Box ml={"auto"}>
          <IconCalender />
        </Box>
      </Box>
      <Box px={2} py={1}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1.2}
        >
          <Typography
            variant="body1"
            fontSize={14}
            sx={(theme: Theme) => ({
              fontSize: 14,
            })}
          >
            Allegation
          </Typography>
          <Typography
            variant="body1"
            fontSize={14}
            sx={(theme: Theme) => ({
              fontSize: 14,
            })}
            ml={"auto"}
          >
            00
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1.2}
        >
          <Typography
            variant="body1"
            fontSize={14}
            sx={(theme: Theme) => ({
              fontSize: 14,
            })}
          >
            Complaints
          </Typography>
          <Typography
            variant="body1"
            fontSize={14}
            sx={(theme: Theme) => ({
              fontSize: 14,
            })}
            ml={"auto"}
          >
            00
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1.2}
        >
          <Typography
            variant="body1"
            fontSize={14}
            sx={(theme: Theme) => ({
              fontSize: 14,
            })}
          >
            Incidents
          </Typography>
          <Typography
            variant="body1"
            fontSize={14}
            sx={(theme: Theme) => ({
              fontSize: 14,
            })}
            ml={"auto"}
          >
            00
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1.2}
        >
          <Typography
            variant="body1"
            fontSize={14}
            sx={(theme: Theme) => ({
              fontSize: 14,
            })}
          >
            Referral
          </Typography>
          <Typography
            variant="body1"
            fontSize={14}
            sx={(theme: Theme) => ({
              fontSize: 14,
            })}
            ml={"auto"}
          >
            00
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
const BoxDesignSection = () => {
  return (
    <>
      <CustumeSplide hasTrack={false}>
        <SplideTrack>
          <SplideSlide>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box position={"relative"} sx={{ display: "flex", height: 380 }}>
                {cardDataSplide.map((data, index) => (
                  <Box key={index}>
                    {index < 6 && (
                      <Box
                        key={index}
                        sx={{
                          ...Styles.BoxDesignSectionWapper(data.styles),
                        }}
                      >
                        <Typography
                          variant="body1"
                          fontSize={24}
                          fontWeight={700}
                          sx={{ color: data.color }}
                        >
                          {data.number}
                        </Typography>
                        <Typography
                          variant="body1"
                          fontSize={12}
                          fontWeight={700}
                          sx={{ color: data.color }}
                        >
                          {data.title}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box position={"relative"} sx={{ display: "flex", height: 380 }}>
                {cardDataSplide.map((data, index) => (
                  <Box key={index}>
                    {index > 6 && (
                      <Box
                        key={index}
                        sx={{
                          ...Styles.BoxDesignSectionWapper(data.styles),
                        }}
                      >
                        <Typography
                          variant="body1"
                          fontSize={24}
                          fontWeight={700}
                          sx={{ color: data.color }}
                        >
                          {data.number}
                        </Typography>
                        <Typography
                          variant="body1"
                          fontSize={12}
                          fontWeight={700}
                          sx={{ color: data.color }}
                        >
                          {data.title}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </SplideSlide>
        </SplideTrack>
      </CustumeSplide>
    </>
  );
};
// STYLES
const Styles = {
  iconButton: (theme: Theme) => ({
    color: theme.palette.primary.main,
  }),
  MainWapper: (color: string) => ({
    width: "100%",
    backgroundColor: `${color}`,
    display: "flex",
    flexWarp: "wrap",
    alignItems: "center",
    // maxWidth: 400,
    // minWidth: 345,
    borderRadius: 2,
    height: "82px",
    padding: "10px 8px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  }),
  iconWapper: (color: string) => ({
    padding: "11px 8px",
    marginLeft: "auto",
    marginRight: "",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 32,
    width: "38px",
    height: "38px",
    marginBottom: 2.5,
    color: `white`,
    "& svg": {
      fontSize: 34,
    },
  }),
  informationStyles: (theme: Theme) => ({
    top: "-10px",
    backgroundColor: theme.palette.primary.main,
    textColor: "#fff",
    borderRadius: 4,
    boxShadow: "2px 4px 7px 0px rgba(14, 145, 140, 0.20)",
    width: 500,
    display: "flex",
  }),
  settingStyles: (theme: Theme) => ({
    top: "-10px",
    backgroundColor: "white",
    textColor: "#fff",
    borderRadius: 4,
    boxShadow: "2px 4px 7px 0px rgba(14, 145, 140, 0.20)",
    width: 500,
    display: "flex",
    padding: "14px 20px",
  }),
  cardSection: () => ({
    padding: "11px 8px",
    display: "flex",
    alignItems: "center",
    background: "#FFFFFF",
    borderRadius: 1.5,
    boxShadow: " 0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    width: "100%",
    maxWidth: 220,
    height: "65px",
  }),
  BoxDesignSectionWapper: (styles: any) => ({
    display: "flex",
    width: 170,
    height: 170,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#FFFFFF",
    ...styles,
  }),
};
