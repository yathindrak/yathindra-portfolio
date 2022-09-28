import React, { MouseEvent, useState } from "react";
import styled from "styled-components";
import Box from "../common/box";
import { PrimaryButton, PrimaryButtonNotAllowed } from "../common/button";
import Container from "../common/container";
import {
  Label,
  Input,
  ErrorMessage,
  FormGroupSm,
  TextArea,
} from "../common/form";
import Row from "../common/row";

const ContactSubTitleText = styled(Box)`
  margin-left: 4rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #666464;
  @media screen and (max-width: 768px) {
    margin: 2rem auto;
    text-align: center;
  }
`;

const ContactTitleText = styled.span`
  font-size: 2rem;
  color: #666464;
  font-weight: 600;
  text-transform: uppercase;
  color: purple;
  margin-left: 4rem;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    margin-left: 0rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

const FormContainer = styled(Box)`
  margin-left: 4rem;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    margin-left: 0rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

export const NameEmailContainer = styled(Row)`
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ContactContainer = styled(Row)`
  flex-direction: column;
  position: relative;
  background: #ffff;
  width: 100%;
  padding-bottom: 3rem;
`;

export const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isEmailDirty, setIsEmailDirty] = useState(false);
  const [isMessageDirty, setIsMessageDirty] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (
      !isFormSubmitted &&
      name &&
      email &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      message
    ) {
      // submit the form
      setIsFormSubmitted(true);
      console.log("form is submitting");
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactTitleText>Let&rsquo;s talk</ContactTitleText>
      <ContactSubTitleText>
        Good conversations leads to innovations
      </ContactSubTitleText>

      <FormContainer>
        <NameEmailContainer>
          <FormGroupSm style={{ marginRight: "5rem" }}>
            <Label>Name</Label>
            <Input
              placeholder="Who am I?"
              onBlur={() => {
                setIsNameDirty(true);
              }}
              onChange={(e) => setName(e?.target?.value)}
            />
            <ErrorMessage>
              {isNameDirty && !name ? "Invalid Name" : null}
            </ErrorMessage>
          </FormGroupSm>
          <FormGroupSm>
            <Label>Email</Label>
            <Input
              placeholder="How can i get back to you?"
              type="email"
              onBlur={() => {
                setIsEmailDirty(true);
              }}
              onChange={(e) => setEmail(e?.target?.value)}
            />
            <ErrorMessage>
              {isEmailDirty &&
              (!email ||
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
                ? "Invalid Email"
                : null}
            </ErrorMessage>
          </FormGroupSm>
        </NameEmailContainer>
        <Box style={{ marginTop: "1rem" }}>
          <Label>Message</Label>
          <TextArea
            placeholder="What can we discuss on?"
            onBlur={() => {
              setIsMessageDirty(true);
            }}
            onChange={(e) => setMessage(e?.target?.value)}
          />

          <ErrorMessage>
            {isMessageDirty && !message ? "Invalid Message" : null}
          </ErrorMessage>
        </Box>
        {!isFormSubmitted &&
        name &&
        email &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
        message ? (
          <PrimaryButton style={{ marginTop: "1.5rem" }} onClick={handleSubmit}>
            Submit
          </PrimaryButton>
        ) : (
          <PrimaryButtonNotAllowed
            style={{ marginTop: "1.5rem" }}
            onClick={handleSubmit}
          >
            Submit
          </PrimaryButtonNotAllowed>
        )}
      </FormContainer>
    </ContactContainer>
  );
};
