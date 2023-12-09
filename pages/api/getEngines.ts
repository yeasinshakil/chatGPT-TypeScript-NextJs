import openai from "@/lib/chatgpt";
import type { NextApiRequest, NextApiResponse } from "next";
type Option = {
  value: string;
  label: string;
};

type data = {
  modelOptions: Option[];
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<data>
) => {
  const models = await openai.listModels().then((res) => res.data.data);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  res.status(200).json({ modelOptions });
};
