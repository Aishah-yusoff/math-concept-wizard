import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";

export default function MathQuestionBot() {
  const [gradeLevel, setGradeLevel] = useState("P1");
  const [topic, setTopic] = useState("Addition");
  const [generatedQuestion, setGeneratedQuestion] = useState("");
  const [customQuestion, setCustomQuestion] = useState("");

  const generateQuestion = () => {
    const questions = {
      P1: {
        Addition: "What is 2 + 3?",
        Subtraction: "What is 5 - 2?",
      },
      P2: {
        Addition: "What is 23 + 17?",
        Subtraction: "What is 40 - 15?",
      },
      P3: {
        Multiplication: "What is 4 × 3?",
        Division: "What is 12 ÷ 4?",
      },
      P4: {
        Fractions: "What is 1/2 + 1/4?",
        Decimals: "What is 0.5 + 0.3?",
      },
    };
    setGeneratedQuestion(questions[gradeLevel][topic] || "No question available");
    setCustomQuestion(questions[gradeLevel][topic] || "");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Math Question Generator</h1>
      <div className="flex gap-4 mb-4">
        <Select onValueChange={setGradeLevel} defaultValue={gradeLevel}>
          <SelectItem value="P1">P1</SelectItem>
          <SelectItem value="P2">P2</SelectItem>
          <SelectItem value="P3">P3</SelectItem>
          <SelectItem value="P4">P4</SelectItem>
        </Select>
        <Select onValueChange={setTopic} defaultValue={topic}>
          <SelectItem value="Addition">Addition</SelectItem>
          <SelectItem value="Subtraction">Subtraction</SelectItem>
          <SelectItem value="Multiplication">Multiplication</SelectItem>
          <SelectItem value="Division">Division</SelectItem>
          <SelectItem value="Fractions">Fractions</SelectItem>
          <SelectItem value="Decimals">Decimals</SelectItem>
        </Select>
        <Button onClick={generateQuestion}>Generate Question</Button>
      </div>
      {generatedQuestion && (
        <Card className="mb-4">
          <CardContent className="p-4">{generatedQuestion}</CardContent>
        </Card>
      )}
      <Textarea
        className="w-full"
        value={customQuestion}
        onChange={(e) => setCustomQuestion(e.target.value)}
        placeholder="Customize your question here..."
      />
      <Button className="mt-4">Publish Question</Button>
    </div>
  );
}
