import { Request, Response } from "express";
import Content from "../models/content.model";

export const createContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await Content.create(req.body);

    res.status(201).json({
      success: true,
      data: content,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create content",
      error,
    });
  }
};

export const getAllContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await Content.find();

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch content",
      error,
    });
  }
};

export const getSingleContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await Content.findById(req.params.id);

    if (!content) {
      res.status(404).json({
        success: false,
        message: "Content not found",
      });

      return;
    }

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch content",
      error,
    });
  }
};

export const updateContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await Content.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!content) {
      res.status(404).json({
        success: false,
        message: "Content not found",
      });

      return;
    }

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update content",
      error,
    });
  }
};

export const deleteContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);

    if (!content) {
      res.status(404).json({
        success: false,
        message: "Content not found",
      });

      return;
    }

    res.status(200).json({
      success: true,
      message: "Content deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete content",
      error,
    });
  }
};