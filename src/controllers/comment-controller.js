import CommentService from "../service/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
  try {
    const response = await commentService.create(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content,
    );

    res.status(200).json({
      success: "success",
      message: "successfully created comment",
      err: {},
      data: response.content,
    });
  } catch (e) {
    console.log("this is from : ", e.message);
    return res.status(500).json({
      success: "failed",
      message: "something went wrong",
      err: e,
      data: {},
    });
  }
};
