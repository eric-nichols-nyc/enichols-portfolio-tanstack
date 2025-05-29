import { Button } from "./ui/button";
import { FaCheck } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import React from "react";

interface AnimatedSubmitButtonProps {
  submitting: boolean;
  submitted: boolean;
}

export default function AnimatedSubmitButton({ submitting, submitted }: AnimatedSubmitButtonProps) {
  let content;
  if (submitting) {
    content = (
      <span className="flex items-center gap-2">
        <ImSpinner2 className="animate-spin" />
        Sending...
      </span>
    );
  } else if (submitted) {
    content = (
      <span className="flex items-center gap-2">
        <FaCheck className="text-green-400" />
        Sent!
      </span>
    );
  } else {
    content = "Send Message";
  }

  return (
    <Button
      type="submit"
      variant="secondary"
      className="bg-[#b983ff] hover:bg-[#b983ff]/80 text-white cursor-pointer"
      disabled={submitting || submitted}
    >
      {content}
    </Button>
  );
}