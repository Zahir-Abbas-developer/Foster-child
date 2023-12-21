import Comments from "@root/components/comment/Comment";
import ChildDaylogEventsReportInfo from "../child-daylog-events-report-info/ChildDaylogEventsReportInfo";
import { Card } from "@mui/material";
import { useRouter } from "next/router";

const ChildDaylogEventsReportInfoCard = () => {
  const router = useRouter();

  return (
    <Card
      sx={{
        p: 2,
        boxShadow: undefined,
      }}
    >
      <ChildDaylogEventsReportInfo />
      <Comments
        referenceType="CHILD_DAY_LOG_EVENTS_REPORTS"
        fosterChildId={router?.query?.fosterChildId as string}
        ReportID={router?.query?.id as string}
      />
    </Card>
  );
};

export default ChildDaylogEventsReportInfoCard;
