"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "/public/images/logo.png";
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
    <div className="p-4 xl:p-16 bg-grey">
      <header>
        <Image src={Logo} alt="Logo of H.E.R. DAO" />
      </header>
      <h2>Header</h2>
      <div>
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
        <TextInput
          name="suffix"
          label="Suffix"
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
        ></TextInput>
      </div>
      <div>
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
      <p>I identify as...</p>
      <div>
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
      <div>
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
        <p>*Required Fields</p>
      </div>
      <Checkbox
        name="TestBox"
        label="I verify that the provided information above is truthful"
        checked={checked}
        onChange={() => setChecked(!checked)}
      ></Checkbox>
      <Button onClick={() => withdraw()}>Back</Button>
      <Button onClick={() => withdraw()}>Next</Button>
    </div>
  );
}
