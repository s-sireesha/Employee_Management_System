import User from "../models/user.model";
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        req.status(201).json({
            success: true,
            message: "user created",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        req.status(201).json({
            success: true,
            count: users.length,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getUserById = async (
  req,
  res
) => {
  try {
    const user = await User.findById(
      req.params.id
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found"
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update User
export const updateUser = async (
  req,
  res
) => {
  try {
    const user =
      await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User Updated",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete User
export const deleteUser = async (
  req,
  res
) => {
  try {
    const user =
      await User.findByIdAndDelete(
        req.params.id
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User Deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}