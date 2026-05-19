import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    const { userId } = await req.auth();

    const user = await clerkClient.users.getUser(userId);

    if (user.privateMetadata.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 5
        }
      });

      req.free_usage = 5;
    }

    req.plan = "free";

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};