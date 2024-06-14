"use client";
import { Button, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center align-middle">
      <Title order={2}>not found</Title>
      <Text>Could not find requested resource</Text>
      <Button className="mt-4" component={Link} href="/">
        Return Home
      </Button>
    </div>
  );
}
