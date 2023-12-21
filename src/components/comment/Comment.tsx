import {
  Box,
  Grid,
  IconButton,
  Divider,
  Theme,
  Button,
  Avatar,
  useTheme,
  Typography,
  Badge,
  ButtonProps,
  Skeleton,
  CircularProgress,
  alpha,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import React from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Nocomments from "@root/assets/svg/NoComments";
import { useGetCommentsListQuery } from "@root/services/comments/CommentsApi";
import useComments from "./useComments";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { RHFTextField } from "../hook-form";
import { FormProvider } from "@root/components/hook-form";
//Delete model imports

import Modal from "@mui/material/Modal";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Backdrop } from "@mui/material";
//---icons

//INTERFACES
interface IcommentProps {
  Maincomment: string;
  userName: string;
  likeContent?: any;
  showReply: boolean;
  id?: string;
  children?: React.ReactNode;
  DeleteButtonprops?: ButtonProps;
  LikeButtonProps?: ButtonProps;
  replyButtonProps?: ButtonProps;
  ReplyCanclebuttonprops?: ButtonProps;
  other?: any;
}
interface ICommentMainPros {
  ReportID?: string;
  fosterChildId?: string;
  referenceType?: string;
}
interface IDeletePrompt {
  onDeleteClick?: any;
  id?: any;
}

// comment list
function CommentsList(props: any) {
  const { comments, DeleteAComment, LikeAComment, ids } = props;
  const [show, setshow] = React.useState("");
  const replyShowHander = (id: any) => {
    setshow(`show${id}`);
  };
  const replyShowHandercancle = () => {
    setshow(``);
  };
  return comments.map((data: any) => (
    <Comment
      key={data.id}
      id={data.id}
      Maincomment={data?.message}
      userName={data.userName}
      likeContent={data.isLike}
      other={{ setshow, ids }}
      showReply={show === `show${data.id}` ? true : false}
      LikeButtonProps={{
        onClick: () => LikeAComment(data.id),
      }}
      replyButtonProps={{
        onClick: () => replyShowHander(data.id),
      }}
      ReplyCanclebuttonprops={{ onClick: () => replyShowHandercancle() }}
      DeleteButtonprops={{
        onClick: () => DeleteAComment(data.id),
      }}
    >
      {data.subComments.length > 0 && (
        <CommentsList
          key={data.id}
          ids={ids}
          DeleteAComment={DeleteAComment}
          comments={data.subComments}
          LikeAComment={LikeAComment}
        />
      )}
    </Comment>
  ));
}

//MAIN COMMENTS
const Comments = ({
  ReportID,
  fosterChildId,
  referenceType,
}: ICommentMainPros) => {
  const { data, isError, isLoading, isFetching } = useGetCommentsListQuery({
    params: {
      limit: 10000,
      offset: 0,
      referenceType: referenceType,
      referenceTypeId: ReportID,
    },
  });
  return (
    <Grid container>
      <Grid xs={12} item>
        <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 2 }} />

        <ListOfComments
          data={data}
          isError={isError}
          isLoading={isLoading}
          isFetching={isFetching}
          ReportID={ReportID}
          referenceType={referenceType}
          fosterChildId={fosterChildId}
        />

        <Box mt={2}>
          <Postcomment
            show={isError}
            fosterChildId={fosterChildId}
            referenceType={referenceType}
            refrenceTypeId={ReportID}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

//LIST OF COMMENTS
const ListOfComments = (props: any) => {
  const {
    data,
    isError,
    isLoading,
    isFetching,
    ReportID,
    referenceType,
    fosterChildId,
  } = props;
  const { DeleteAComment, LikeAComment } = useComments();

  if (isLoading) return <CommentSkeleton />;
  console.log(data);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={(theme: Theme) => ({
            color: theme.palette.grey[600],
            fontWeight: 600,
          })}
        >
          {data?.data.length} Comments
        </Typography>
      </Box>
      {/* isFetching */}
      {isFetching === true && (
        <Box
          sx={(theme: Theme) => ({
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: alpha(theme.palette.background.paper, 0.775),
            zIndex: 9,
          })}
        >
          <CircularProgress
            sx={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </Box>
      )}

      {/* isFetching */}

      <Box
        className="allsetb"
        sx={{
          overflowX: "auto",
          width: "100%",
        }}
      >
        {isError === false && (
          <CommentsList
            ids={{
              ReportID: ReportID,
              referenceType: referenceType,
              fosterChildId: fosterChildId,
            }}
            comments={data?.data}
            DeleteAComment={DeleteAComment}
            LikeAComment={LikeAComment}
          />
        )}

        {isError === true || data?.data.length === 0 ? <OnError /> : null}
      </Box>
    </Box>
  );
};

//REPLY A COMMENT
const ReplyAComment = ({ ReplyCanclebuttonprops, ids }: any) => {
  console.log(ids, "its");

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(
      Yup.object().shape({
        message: Yup.string().required("Comment cant be empty"),
      })
    ),
    defaultValues: {
      message: "",
    },
  });
  const { ReplyAComment } = useComments();
  const { handleSubmit, reset } = methods;
  const submit = (data: any) => {
    ReplyAComment({
      message: data?.message,
      refrenceTypeId: ids.ids.ReportID,
      refrenceType: ids.ids.referenceType,
      fosterChildId: ids.ids.fosterChildId,
      parentid: ids.parent,
    });
    ids.setshow("");
    reset();
  };
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(submit)}>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <RHFTextField
            name={"message"}
            fullWidth={true}
            size={"small"}
            placeholder="Write A comments..."
          />
          <IconButton {...ReplyCanclebuttonprops}>
            <CancelOutlinedIcon
              sx={(theme: Theme) => ({
                color: theme.palette.error.main,
              })}
            />
          </IconButton>
          <IconButton type="submit">
            <SendOutlinedIcon
              sx={(theme: Theme) => ({
                color: theme.palette.primary.main,
              })}
            />
          </IconButton>
        </Box>
      </FormProvider>
    </>
  );
};
// POST A COMMENTS
const Postcomment = ({
  show,
  fosterChildId,
  referenceType,
  refrenceTypeId,
}: any) => {
  const { PostAComments } = useComments();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(
      Yup.object().shape({
        message: Yup.string().required("Comment cant be empty"),
      })
    ),
    defaultValues: {
      message: "",
    },
  });

  const { handleSubmit, reset } = methods;
  const submit = (data: any) => {
    PostAComments({
      message: data?.message,
      refrenceTypeId: refrenceTypeId,
      refrenceType: referenceType,
      fosterChildId: fosterChildId,
    });
    reset();
  };
  return (
    <>
      {show === false && (
        <FormProvider methods={methods} onSubmit={handleSubmit(submit)}>
          <Box
            display={"flex"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <RHFTextField
              name={"message"}
              fullWidth={true}
              size={"small"}
              placeholder="Write A comments..."
            />
            <IconButton type="submit">
              <SendOutlinedIcon
                sx={(theme: Theme) => ({
                  color: theme.palette.primary.main,
                })}
              />
            </IconButton>
          </Box>
        </FormProvider>
      )}
    </>
  );
};
//Skeleton IS ERROR CONPONENTS
const CommentSkeleton = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"start"}
      alignItems={"flex-start"}
      gap={2}
      mt={2}
    >
      <Skeleton
        variant={"circular"}
        width={50}
        height={50}
        animation="pulse"
        sx={{ mt: 2 }}
      />
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        flexWrap={"wrap"}
        flexDirection={"column"}
        gap={1.5}
        width={"100%"}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={0}
        >
          <Skeleton variant="text" width={700} height={80} animation="pulse" />
        </Box>
        {/* actions */}
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={0.5}
        >
          <Skeleton variant="text" width={60} height={40} animation="pulse" />
          <Skeleton variant="text" width={60} height={40} animation="pulse" />
          <Skeleton variant="text" width={60} height={40} animation="pulse" />
        </Box>
      </Box>
    </Box>
  );
};
const OnError = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Nocomments
        sx={(theme: Theme) => ({
          fontSize: 200,
          color: theme.palette.grey[600],
        })}
      />
    </Box>
  );
};
//COMMENT
const Comment = ({
  Maincomment,
  id,
  userName,
  showReply,
  children,
  DeleteButtonprops,
  LikeButtonProps,
  replyButtonProps,
  likeContent,
  ReplyCanclebuttonprops,
  other,
}: IcommentProps) => {
  console.log(likeContent);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"flex-start"}
        gap={2}
        mt={2}
        width={"100%"}
      >
        <Avatar
          sx={(theme: Theme) => ({ bgcolor: theme.palette.primary.main })}
        >
          <PersonRoundedIcon
            sx={(theme: Theme) => ({ color: theme.palette.background.paper })}
          />
        </Avatar>
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"start"}
          flexWrap={"wrap"}
          flexDirection={"column"}
          gap={1.5}
          width={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={0.5}
          >
            <Typography
              variant="body1"
              sx={(theme: Theme) => ({
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.grey[800]
                    : theme.palette.grey[500],
              })}
            >
              {Maincomment}
            </Typography>
            {/* userName */}
            <Typography
              variant="body1"
              sx={(theme: Theme) => ({ color: theme.palette.primary.main })}
            >
              {userName}
            </Typography>
            {/* userName */}
          </Box>
          {/* actions */}
          <Box
            display={"flex"}
            justifyContent={"start"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
            gap={0.5}
            width={"100%"}
          >
            <Box
              display={"flex"}
              gap={1.5}
              width={"100%"}
              flexDirection={"column"}
            >
              <Box display={"flex"} gap={0.5} width={"100%"}>
                <Button size="small" variant="outlined" {...replyButtonProps}>
                  Reply
                </Button>
                <DeleteModel onDeleteClick={DeleteButtonprops} id={id} />
                <Badge
                  color="primary"
                  badgeContent={
                    likeContent === "1" ? (
                      <Box>
                        <ThumbUpIcon
                          sx={() => ({
                            fontSize: 16,
                          })}
                        />
                      </Box>
                    ) : null
                  }
                >
                  <Button size="small" variant="outlined" {...LikeButtonProps}>
                    Like
                  </Button>
                </Badge>
              </Box>

              {showReply === true && (
                <ReplyAComment
                  ReplyCanclebuttonprops={ReplyCanclebuttonprops}
                  ids={{ parent: id, ...other }}
                />
              )}
            </Box>

            {children}
          </Box>
          {/* actions */}
        </Box>
      </Box>
    </>
  );
};
export default Comments;

const DeleteModel: React.FunctionComponent<IDeletePrompt> = ({
  onDeleteClick,
  id,
}) => {
  const theme: any = useTheme();

  const [open, setOpen] = React.useState("");
  const handleOpen = () => setOpen(`model${id}`);
  const handleClose = () => setOpen("");
  return (
    <Box>
      <Button size="small" variant="outlined" onClick={handleOpen}>
        Delete
      </Button>
      {open && (
        <Modal
          open={open === `model${id}` ? true : false}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Box sx={Styles.root}>
            <Grid container>
              <Grid xs={12} item>
                <Box sx={Styles.innerBox(theme)}>
                  <CancelOutlinedIcon sx={Styles.crossIcons(theme)} />
                  <Typography variant="h3">Are you sure ?</Typography>
                  <Typography variant="h5">
                    You won’t be able to revert this !
                  </Typography>
                  <Box sx={Styles.buttonWrapper}>
                    <Button {...onDeleteClick} sx={Styles.buttonError(theme)}>
                      Yes, delete it
                    </Button>
                    <Button
                      onClick={handleClose}
                      sx={Styles.buttonSuccess(theme)}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      )}
    </Box>
  );
};
//DELETE PROPS styles
//-----------------------------------------------------------------------
// styles
const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 500 },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  innerBox: (theme: any) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  crossIcons: (theme: any) => ({
    fontSize: "100px",
    color: theme.palette.error.main,
  }),
  buttonWrapper: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    mt: 2,
  }),
  buttonError: (theme: any) => ({
    bgcolor: theme.palette.error.darker,
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.error.darker },
    px: 2,
    py: 1,
  }),
  buttonSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
  }),
};
