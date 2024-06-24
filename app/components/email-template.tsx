import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
}) => (
  <div>
    <h1>Hey, {firstName}!</h1>
    <p>You got a message from your portfolio. Here's the message:</p>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
