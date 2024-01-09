import { LikeService } from "../service/index.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
    );
    // console.log(response);
    return res.status(200).json({
      success: true,
      data: response,
      message: "successfully toggled like",
      err: {},
    });
  } catch (e) {
    console.log("this is the error", e.message);
    res.status(500).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: e,
    });
  }
};
