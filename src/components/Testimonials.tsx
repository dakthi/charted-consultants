import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto pl-5 pr-5 xl:p-0">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal">
              &quot;Charted came in when things were messy and morale was low. They brought{" "}
              <Mark>structure, empathy, and deep operational clarity</Mark>. Within weeks, our staff felt supported, and our systems actually made sense again.&quot;
            </p>
            <Avatar
              image={userOneImg}
              name="Freya Khan"
              title="Owner, Brighton Wellness Clinic"
            />
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto pl-5 pr-5 xl:p-0">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal">
              &quot;They didn’t just digitise our bookings — they helped us{" "}
              <Mark>rethink how we work as a team</Mark>. From automations to SOPs, everything they built felt grounded in how our business actually operates.&quot;
            </p>
            <Avatar
              image={userTwoImg}
              name="Tomás Salazar"
              title="Manager, Independent Nail Bar"
            />
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto pl-5 pr-5 xl:p-0">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal">
              &quot;We were exploring succession and didn’t know where to start. Charted helped us{" "}
              <Mark>document everything, cut the noise, and prepare for the future</Mark>. Calm, honest, and hands-on from day one.&quot;
            </p>
            <Avatar
              image={userThreeImg}
              name="Ellie Murray"
              title="Co-owner, Family Cleaning Business"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="items-center overflow-hidden object-cover rounded-full w-14 h-14 shadow-sm shadow-black">
        <Image
          src={props.image}
          width="56"
          height="56"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-700">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <mark className="text-black bg-slate-300 rounded-sm ring-4 ring-slate-300">
      {props.children}
    </mark>
  );
}
