import { buildFeedbackPath, extractFeedback } from "@/pages/api/feedback/index";

export default function handler(req, res) {
  const feedbackId = req.query.id;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}
