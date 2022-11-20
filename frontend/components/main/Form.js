"use client";

import { useState } from "react";
import Link from "next/link";

import Button from "/components/core/Button";
import TextInput from "/components/core/TextInput";
import Checkbox from "../core/Checkbox";

export default function Front(props) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eMail, setEMail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [female, setFemale] = useState(false);
  const [nonBinary, setNonBinary] = useState(false);
  const [checked, setChecked] = useState(false);
  function withdraw() {
    console.log("withdraw");
  }

  return (
    <div>
      <h1>Header</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <TextInput
          name="lastName"
          required={true}
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></TextInput>
        <TextInput
          name="firstName"
          label="First Name*"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></TextInput>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <TextInput
          name="phoneNumber"
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></TextInput>
        <TextInput
          name="eMail"
          label="E-mail*"
          value={eMail}
          onChange={(e) => setEMail(e.target.value)}
        ></TextInput>
      </div>
      <p className="mt-8 mb-4">I identify as...</p>
      <div className="grid gap-8 lg:grid-cols-2">
        <Checkbox
          name="Female"
          label="female"
          checked={female}
          onChange={() => setFemale(!female)}
        ></Checkbox>
        <Checkbox
          name="NonBinary"
          label="non-Binary"
          checked={nonBinary}
          onChange={() => setNonBinary(!nonBinary)}
        ></Checkbox>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 mt-8">
        <TextInput
          name="linkedin"
          label="LinkedIn"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        ></TextInput>
        <TextInput
          name="github"
          label="GitHub"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        ></TextInput>
      </div>
      <p className="mb-4">*Required Fields</p>
      <Checkbox
        name="TestBox"
        label="I verify that the provided information above is truthful"
        checked={checked}
        onChange={() => setChecked(!checked)}
      ></Checkbox>
      <div className="flex justify-center gap-8 mt-8">
        <Link href="/apply">
          <a>
            <Button>back</Button>
          </a>
        </Link>
        <Link href="/terms">
          <a>
            <Button>next</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
